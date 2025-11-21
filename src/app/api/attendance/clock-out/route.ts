import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { accounts, attendance, schedules } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';
import { branches } from '@/lib/schema';
import { determineOvertimeType } from '@/lib/payroll';
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz';
import { parseISO } from 'date-fns';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.debug('[clock-out] body:', body);
    const { employeeNumber, latitude, longitude } = body;

    const db = await getDb();

    // Resolve employeeId
    let employeeId: string | null = null;
    let hireDate: string | null = null;

    if (employeeNumber) {
      const res = await db.select({ id: accounts.id, dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.employeeNumber, employeeNumber));
      const emp = res[0];
      if (!emp) return NextResponse.json({ success: false, message: 'Employee not found' }, { status: 404 });
      employeeId = emp.id;
      hireDate = emp.dateHired;
    } else {
      const userId = await getCurrentUserId();
      if (!userId) return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
      employeeId = userId;

      // Get employee's hire date
      const empData = await db.select({ dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.id, employeeId));
      hireDate = empData[0]?.dateHired;
    }

    if (!hireDate) return NextResponse.json({ success: false, message: 'Employee hire date not found' }, { status: 400 });

    const nowUtc = new Date();
    const now = toZonedTime(nowUtc, 'Asia/Singapore');
    const isoDate = formatInTimeZone(now, 'Asia/Singapore', 'yyyy-MM-dd');

    // Check if current date is before hire date
    const hireDateZoned = toZonedTime(new Date(hireDate), 'Asia/Singapore');
    const hireDateStr = formatInTimeZone(hireDateZoned, 'Asia/Singapore', 'yyyy-MM-dd');
    if (isoDate < hireDateStr) {
      return NextResponse.json({ success: false, message: 'Cannot clock out before hire date' }, { status: 403 });
    }

    // Geofence check
    if (latitude && longitude) {
      // Get employee's branch and coordinates in a single query with join
      const branchData = await db
        .select({
          branch: accounts.branch,
          coordinates: branches.coordinates
        })
        .from(accounts)
        .leftJoin(branches, eq(accounts.branch, branches.name))
        .where(eq(accounts.id, employeeId))
        .limit(1);

      const branchName = branchData[0]?.branch;
      const coords = branchData[0]?.coordinates;

      // Allow remote employees to clock out from anywhere
      if (branchName && branchName.toLowerCase() === 'remote') {
        // skip geofence for Remote employees
      } else if (coords) {
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

    // Check if employee has a schedule for today and get attendance record in one query
    const scheduleAndAttendance = await db
      .select({
        shiftStart: schedules.shiftStart,
        shiftEnd: schedules.shiftEnd,
        timeIn: attendance.timeIn,
        timeOut: attendance.timeOut,
        attendanceId: attendance.id
      })
      .from(schedules)
      .innerJoin(attendance, and(eq(attendance.employeeId, employeeId), eq(attendance.date, isoDate)))
      .where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)))
      .limit(1);

    if (scheduleAndAttendance.length === 0) {
      return NextResponse.json({ success: false, message: 'No schedule assigned for today or no clock-in found. Cannot clock out.' }, { status: 403 });
    }

    const schedule = scheduleAndAttendance[0];
    const shiftEndTime = schedule.shiftEnd;
    const attendanceId = schedule.attendanceId;
    const timeIn = schedule.timeIn ? toZonedTime(new Date(schedule.timeIn), 'Asia/Singapore') : null;

   // Update timeOut and compute hours (store ISO string for timestamp)
   await db.update(attendance).set({ timeOut: fromZonedTime(now, 'Asia/Singapore').toISOString() }).where(eq(attendance.id, attendanceId));

    let hoursWorked = 0;
    if (timeIn) {
      // Calculate total time worked
      const totalMinutes = (now.getTime() - timeIn.getTime()) / (1000 * 60);

      // Get break time from schedule - calculate as 3 hours after shift start
      let breakMinutes = 0;
      const shiftStart = schedule.shiftStart;
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

      // Subtract break time from total minutes
      const netMinutes = Math.max(0, totalMinutes - breakMinutes);
      hoursWorked = Math.round((netMinutes / 60) * 100) / 100;

      // Calculate night hours (between 10 PM and 6 AM)
      let nightHours = 0;
      if (timeIn && now) {
        nightHours = calculateNightHours(timeIn, now);
      }

      // Determine overtime type based on date and schedule
      const workDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      // For now, assume not a rest day - this would need schedule integration
      const isRestDay = false;
      const overtimeType = determineOvertimeType(workDate, isRestDay);

      // Calculate overtime hours (hours worked beyond 8 hours)
      const regularHours = 8; // Standard work day
      const overtimeHours = Math.max(0, hoursWorked - regularHours);

      // Calculate undertime hours (hours short of 8 hours)
      const undertimeHours = Math.max(0, regularHours - hoursWorked);

      await db.update(attendance).set({
        hoursWorked: hoursWorked as any,
        nightHours: nightHours as any,
        overtimeHours: overtimeHours as any,
        overtimeType: overtimeType as any,
        overtimeApproved: false as any // Overtime needs HR approval before being paid
      }).where(eq(attendance.id, attendanceId));

      // Determine late: check schedule for today
      const sched2 = await db.select().from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
      let scheduledStart = '09:00:00';
      if (sched2.length > 0) {
        scheduledStart = (sched2[0] as any).shiftStart;
      }

      let currentStatus = 'Present'; // default
      const scheduleDate = fromZonedTime(parseISO(`${isoDate}T${scheduledStart}`), 'Asia/Singapore');
      if (timeIn > scheduleDate) {
        currentStatus = 'Late';
      }

      // Append additional statuses
      const additionalStatuses: string[] = [];
      if (overtimeHours > 0) {
        additionalStatuses.push('Overtime');
      }
      if (undertimeHours > 0) {
        additionalStatuses.push('Undertime');
      }

      if (additionalStatuses.length > 0) {
        currentStatus += ', ' + additionalStatuses.join(', ');
      }

      await db.update(attendance).set({ status: currentStatus }).where(eq(attendance.id, attendanceId));
    }

    return NextResponse.json({ success: true, hoursWorked });
  }
  catch (err: any) {
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

/**
 * Calculates the number of hours worked during night shift (10 PM to 6 AM)
 * @param timeIn - Clock in time
 * @param timeOut - Clock out time
 * @returns Number of night hours worked
 */
function calculateNightHours(timeIn: Date, timeOut: Date): number {
  // timeIn and timeOut are already in GMT+8
  const start = timeIn;
  const end = timeOut;

  let nightMinutes = 0;
  let current = new Date(start);

  // Iterate through each minute of the work period
  while (current < end) {
    const hour = current.getHours();
    const minute = current.getMinutes();

    // Check if current time is within night shift hours (22:00 to 06:00)
    if (hour >= 22 || hour < 6) {
      nightMinutes++;
    }

    // Move to next minute
    current.setMinutes(minute + 1);
  }

  // Convert minutes to hours (rounded to 2 decimal places)
  return Math.round((nightMinutes / 60) * 100) / 100;
}
