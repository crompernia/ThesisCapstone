import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { accounts, attendance } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';
import { branches } from '@/lib/schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // DEBUG: log incoming body for troubleshooting (remove in production)
    console.debug('[clock-in] body:', body);
  const { employeeNumber, latitude, longitude } = body;

    const db = await getDb();

    // Resolve employeeId: prefer provided employeeNumber (used on login page), otherwise use authenticated user
    let employeeId: string | null = null;
    if (employeeNumber) {
      const res = await db.select({ id: accounts.id }).from(accounts).where(eq(accounts.employeeNumber, employeeNumber));
      const emp = res[0];
      if (!emp) return NextResponse.json({ success: false, message: 'Employee not found' }, { status: 404 });
      employeeId = emp.id;
    } else {
      const userId = await getCurrentUserId();
      if (!userId) return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
      employeeId = userId;
    }
  const now = new Date();
  // Keep date comparison as YYYY-MM-DD string (matches Drizzle date column mapping in this project)
  const isoDate = now.toISOString().slice(0, 10); // YYYY-MM-DD

    // Geofence check: if coordinates provided, verify distance against branch coordinates.
    if (latitude && longitude) {
      // Resolve employee's branch from accounts
      const acc = await db.select({ branch: accounts.branch }).from(accounts).where(eq(accounts.id, employeeId));
      const branchName = acc[0]?.branch;
      // Allow remote employees to clock in from anywhere
      if (branchName && branchName.toLowerCase() === 'remote') {
        // skip geofence for Remote
      } else if (branchName) {
        const b = await db.select().from(branches).where(eq(branches.name, branchName));
        if (b.length > 0) {
          const coords = (b[0] as any).coordinates;
          if (coords) {
            try {
              const [latS, lonS] = coords.split(',').map((s: string) => parseFloat(s.trim()));
              const lat = parseFloat(latitude as any);
              const lon = parseFloat(longitude as any);
              if (Number.isNaN(latS) || Number.isNaN(lonS) || Number.isNaN(lat) || Number.isNaN(lon)) {
                return NextResponse.json({ success: false, message: 'Invalid coordinate format' }, { status: 400 });
              }
              const distanceMeters = haversineDistance(lat, lon, latS, lonS);
              const allowedMeters = 200; // default allowed radius 200m
              if (distanceMeters > allowedMeters) {
                return NextResponse.json({ success: false, message: 'Outside allowed geofence' }, { status: 403 });
              }
            } catch (coordErr: any) {
              console.error('coordinate parse error', coordErr);
              return NextResponse.json({ success: false, message: 'Error parsing branch coordinates' }, { status: 500 });
            }
          }
        }
      }
    }

    // Upsert attendance: if a record exists for employee + date, update timeIn if empty; otherwise insert
    const existing = await db.select().from(attendance).where(and(eq(attendance.employeeId, employeeId), eq(attendance.date, isoDate)));

    if (existing.length > 0) {
      // If timeIn is null, set it; also set status to Present
      const row = existing[0] as any;
      if (!row.timeIn) {
        // store ISO strings for timestamp columns
        await db.update(attendance).set({ timeIn: now.toISOString(), status: 'Present' }).where(eq(attendance.id, row.id));
      }
    } else {
      await db.insert(attendance).values({ employeeId: employeeId as any, date: isoDate as any, timeIn: now.toISOString(), status: 'Present', createdAt: now.toISOString() } as any);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('[clock-in] server error', err);
    // Return error message/stack to help debugging (temporary)
    return NextResponse.json({ success: false, message: err?.message || 'Server error', stack: err?.stack }, { status: 500 });
  }
}

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => v * Math.PI / 180;
  const R = 6371000; // meters
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}
