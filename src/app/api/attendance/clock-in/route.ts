import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { accounts, attendance, schedules } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';
import { branches } from '@/lib/schema';

export async function POST(req: Request) {
  console.log('[clock-in] Route called');
  try {
    console.log('[clock-in] Parsing request body');
    const body = await req.json();
    // DEBUG: log incoming body for troubleshooting (remove in production)
    console.debug('[clock-in] body:', body);
  const { employeeNumber, latitude, longitude } = body;
  console.log('[clock-in] Getting database connection');

  const db = await getDb();
  console.log('[clock-in] Database connected');

    console.log('[clock-in] Resolving employeeId');
    // Resolve employeeId: prefer provided employeeNumber (used on login page), otherwise use authenticated user
    let employeeId: string | null = null;
    if (employeeNumber) {
      console.log('[clock-in] Using employeeNumber:', employeeNumber);
      const res = await db.select({ id: accounts.id, dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.employeeNumber, employeeNumber));
      const emp = res[0];
      if (!emp) return NextResponse.json({ success: false, message: 'Employee not found' }, { status: 404 });
      employeeId = emp.id;
    } else {
      console.log('[clock-in] Getting current user ID');
      const userId = await getCurrentUserId();
      console.log('[clock-in] Current user ID:', userId);
      if (!userId) return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
      employeeId = userId;
    }

    // Get employee's hire date to check if clock-in is allowed
    const empData = await db.select({ dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.id, employeeId));
    const hireDate = empData[0]?.dateHired;
    if (!hireDate) return NextResponse.json({ success: false, message: 'Employee hire date not found' }, { status: 400 });

    const now = new Date();
    // Keep date comparison as YYYY-MM-DD string (matches Drizzle date column mapping in this project)
    const isoDate = now.toISOString().slice(0, 10); // YYYY-MM-DD

    // Check if current date is before hire date
    const hireDateStr = new Date(hireDate).toISOString().slice(0, 10);
    if (isoDate < hireDateStr) {
      return NextResponse.json({ success: false, message: 'Cannot clock in before hire date' }, { status: 403 });
    }

    // Geofence check: if coordinates provided, verify distance against branch coordinates.
    if (latitude && longitude) {
      // Resolve employee's branch from accounts
      const acc = await db.select({ branch: accounts.branch, role: accounts.role }).from(accounts).where(eq(accounts.id, employeeId));
      const branchName = acc[0]?.branch;
      // const userRole = acc[0]?.role;

      // Allow remote employees to clock in from anywhere
      if (branchName && branchName.toLowerCase() === 'remote') {
        // skip geofence for Remote employees
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

    // Check if employee has a schedule for today
    const scheduleCheck = await db.select().from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
    if (scheduleCheck.length === 0) {
      return NextResponse.json({ success: false, message: 'No schedule assigned for today. Cannot clock in.' }, { status: 403 });
    }

    // Validate clock-in time against scheduled shift times
    const schedule = scheduleCheck[0];
    const shiftStartTime = schedule.shiftStart;
    const shiftEndTime = schedule.shiftEnd;

    // Parse date components
    const [year, month, day] = isoDate.split('-').map(Number);

    // Convert current time to local time (UTC+8 for Philippines)
    const nowLocal = new Date(now.getTime() + (8 * 60 * 60 * 1000));

    // Parse shift start time as local time
    const [startHour, startMin, startSec] = shiftStartTime.split(':').map(Number);
    const shiftStartDate = new Date(year, month - 1, day, startHour, startMin, startSec);

    // Parse shift end time as local time
    const [endHour, endMin, endSec] = shiftEndTime.split(':').map(Number);
    const shiftEndDate = new Date(year, month - 1, day, endHour, endMin, endSec);

    // Define clock-in window: from shift start to shift end time
    const earlyClockInLimit = shiftStartDate; // Cannot clock in before shift start
    const lateClockInLimit = shiftEndDate; // Until shift end

    if (nowLocal < earlyClockInLimit) {
      return NextResponse.json({
        success: false,
        message: `Cannot clock in before your shift start time (${shiftStartTime}).`
      }, { status: 403 });
    }

    if (nowLocal > lateClockInLimit) {
      return NextResponse.json({
        success: false,
        message: 'Cannot clock in after your shift end time.'
      }, { status: 403 });
    }

    // Check if clock-in is within grace period (on time) or late
    const gracePeriodEnd = new Date(shiftStartDate.getTime() + (5 * 60 * 1000)); // 5 minutes after shift start
    let clockInStatus = 'Present';

    if (now <= gracePeriodEnd) {
      clockInStatus = 'Present'; // On time within grace period
    } else if (now > gracePeriodEnd && now <= lateClockInLimit) {
      clockInStatus = 'Late'; // Late but within allowed window
    }

    // Upsert attendance: if a record exists for employee + date, update timeIn if empty; otherwise insert
    const existing = await db.select().from(attendance).where(and(eq(attendance.employeeId, employeeId), eq(attendance.date, isoDate)));

    if (existing.length > 0) {
       // If timeIn is null, set it; also set status based on clock-in time
       const row = existing[0] as any;
       if (!row.timeIn) {
         // store ISO strings for timestamp columns
         await db.update(attendance).set({ timeIn: now.toISOString(), status: clockInStatus }).where(eq(attendance.id, row.id));
       }
     } else {
       await db.insert(attendance).values({ employeeId: employeeId as any, date: isoDate as any, timeIn: now.toISOString(), status: clockInStatus, createdAt: now.toISOString() } as any);
     }
    console.log('[clock-in] Returning success response');

    return NextResponse.json({ success: true, status: clockInStatus });
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
