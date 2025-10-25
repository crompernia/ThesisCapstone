import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { accounts, attendance, schedules } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';
import { branches } from '@/lib/schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.debug('[clock-out] body:', body);
  const { employeeNumber, latitude, longitude } = body;

    const db = await getDb();

    // Resolve employeeId
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
    const isoDate = now.toISOString().slice(0, 10);

    // Geofence check
    if (latitude && longitude) {
      const acc = await db.select({ branch: accounts.branch }).from(accounts).where(eq(accounts.id, employeeId));
      const branchName = acc[0]?.branch;
      // Allow remote employees to clock out from anywhere
      if (branchName && branchName.toLowerCase() === 'remote') {
        // skip geofence
      } else if (branchName) {
        const b = await db.select().from(branches).where(eq(branches.name, branchName));
        if (b.length > 0) {
          const coords = (b[0] as any).coordinates;
          if (coords) {
            const [latS, lonS] = coords.split(',').map((s: string) => parseFloat(s.trim()));
            const lat = parseFloat(latitude as any);
            const lon = parseFloat(longitude as any);
            const distanceMeters = haversineDistance(lat, lon, latS, lonS);
            const allowedMeters = 200;
            if (distanceMeters > allowedMeters) {
              return NextResponse.json({ success: false, message: 'Outside allowed geofence' }, { status: 403 });
            }
          }
        }
      }
    }

    const existing = await db.select().from(attendance).where(and(eq(attendance.employeeId, employeeId), eq(attendance.date, isoDate)));
    if (existing.length === 0) {
      return NextResponse.json({ success: false, message: 'No clock-in found for today' }, { status: 400 });
    }

    const row = existing[0] as any;
    const timeIn = row.timeIn ? new Date(row.timeIn) : null;
  // Update timeOut and compute hours (store ISO string for timestamp)
  await db.update(attendance).set({ timeOut: now.toISOString() }).where(eq(attendance.id, row.id));

    let hoursWorked = 0;
    if (timeIn) {
      // Calculate total time worked
      const totalMinutes = (now.getTime() - timeIn.getTime()) / (1000 * 60);

      // Get break time from schedule - calculate as 3 hours after shift start
      let breakMinutes = 0;
      const sched = await db.select({ shiftStart: schedules.shiftStart, notes: schedules.notes }).from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
      if (sched.length > 0) {
        try {
          const shiftStart = sched[0].shiftStart;
          if (shiftStart) {
            const [h, m] = shiftStart.split(':').map(Number);
            const shiftStartMinutes = h * 60 + m;
            // Break starts 3 hours after shift start
            const breakStart = shiftStartMinutes + (3 * 60); // 3 hours = 180 minutes
            const breakEnd = breakStart + 60; // 1 hour break

            // Calculate overlap between work time and break time
            const workStartMinutes = timeIn.getHours() * 60 + timeIn.getMinutes();
            const workEndMinutes = now.getHours() * 60 + now.getMinutes();

            // Find overlap between work period and break period
            const overlapStart = Math.max(workStartMinutes, breakStart);
            const overlapEnd = Math.min(workEndMinutes, breakEnd);
            breakMinutes = Math.max(0, overlapEnd - overlapStart);
          }
        } catch (e) {
          // If calculation fails, assume no break deduction
          breakMinutes = 0;
        }
      }

      // Subtract break time from total minutes
      const netMinutes = Math.max(0, totalMinutes - breakMinutes);
      hoursWorked = Math.round((netMinutes / 60) * 100) / 100;

      await db.update(attendance).set({ hoursWorked: hoursWorked as any }).where(eq(attendance.id, row.id));
    }

    // Determine late: check schedule for today
    const sched = await db.select().from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
    let scheduledStart = '09:00:00';
    if (sched.length > 0) {
      scheduledStart = (sched[0] as any).shiftStart;
    }

    if (timeIn) {
      const [h, m] = scheduledStart.split(':').map((s: string) => parseInt(s, 10));
      const scheduleDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
      if (timeIn > scheduleDate) {
        await db.update(attendance).set({ status: 'Late' }).where(eq(attendance.id, row.id));
      }
    }

    return NextResponse.json({ success: true, hoursWorked });
  } catch (err: any) {
    console.error('[clock-out] server error', err);
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
