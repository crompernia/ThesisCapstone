import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { accounts, attendance, schedules } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';
import { branches } from '@/lib/schema';
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz';
import { parseISO } from 'date-fns';

export async function POST(req: Request) {
  console.log('[clock-in] Route called');
  try {
    console.log('[clock-in] Parsing request body');
    const bodyText = await req.text();
    const body = JSON.parse(bodyText);
    // DEBUG: log incoming body for troubleshooting (remove in production)
    console.debug('[clock-in] body:', body);
  const { employeeNumber, latitude, longitude, faceImage } = body;
  console.log('[clock-in] Getting database connection');

  const db = await getDb();
  console.log('[clock-in] Database connected');

    console.log('[clock-in] Resolving employeeId');
    // Resolve employeeId: prefer provided employeeNumber (used on login page), otherwise use authenticated user
    let employeeId: string | null = null;
    let hireDate: string | null = null;

    if (employeeNumber) {
      console.log('[clock-in] Using employeeNumber:', employeeNumber);
      const res = await db.select({ id: accounts.id, dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.employeeNumber, employeeNumber));
      const emp = res[0];
      if (!emp) return NextResponse.json({ success: false, message: 'Employee not found' }, { status: 404 });
      employeeId = emp.id;
      hireDate = emp.dateHired;
    } else {
      console.log('[clock-in] Getting current user ID');
      const userId = await getCurrentUserId();
      console.log('[clock-in] Current user ID:', userId);
      if (!userId) return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
      employeeId = userId;

      // Get employee's hire date
      const empData = await db.select({ dateHired: accounts.dateHired }).from(accounts).where(eq(accounts.id, employeeId));
      hireDate = empData[0]?.dateHired;
    }

    if (!hireDate) return NextResponse.json({ success: false, message: 'Employee hire date not found' }, { status: 400 });

    const nowUtc = new Date();
    // Manually convert to Singapore time (UTC+8) since date-fns-tz may not work on Vercel
    const now = new Date(nowUtc.getTime() + (8 * 60 * 60 * 1000)); // Add 8 hours
    // Keep date comparison as YYYY-MM-DD string (matches Drizzle date column mapping in this project)
    const isoDate = now.toISOString().split('T')[0]; // YYYY-MM-DD in GMT+8

    console.log('[clock-in] Time debugging:');
    console.log('[clock-in] - nowUtc:', nowUtc.toISOString());
    console.log('[clock-in] - now (Singapore):', now.toISOString());
    console.log('[clock-in] - isoDate:', isoDate);

    // Check if current date is before hire date
    const hireDateObj = new Date(hireDate + 'T00:00:00+08:00'); // Parse as Singapore time
    const hireDateStr = hireDateObj.toISOString().split('T')[0];
    console.log('[clock-in] - hireDate:', hireDate, 'hireDateStr:', hireDateStr);

    if (isoDate < hireDateStr) {
      return NextResponse.json({ success: false, message: 'Cannot clock in before hire date' }, { status: 403 });
    }

    // Face verification check
    let faceImageData: string | null = faceImage || null;
    console.log('[clock-in] faceImage provided:', !!faceImageData);

    if (faceImageData) {
      console.log('[clock-in] Verifying face...');
      
      // Prepare form data for face verification API
      const formData = new FormData();
      const byteString = atob(faceImageData.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: 'image/jpeg' });
      formData.append('image', blob, 'face.jpg');
      formData.append('employeeId', employeeId!);

      try {
        const verificationResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/validate-face-presence`, {
          method: 'POST',
          body: formData
        });

        const verificationResult = await verificationResponse.json();
        
        if (!verificationResult.isVerified) {
          return NextResponse.json({ 
            success: false, 
            message: verificationResult.error || 'Face verification failed. Please try again.' 
          }, { status: 401 });
        }

        console.log('[clock-in] Face verification successful');
      } catch (faceError) {
        console.error('[clock-in] Face verification error:', faceError);
        return NextResponse.json({ 
          success: false, 
          message: 'Face verification service unavailable. Please try again later.' 
        }, { status: 503 });
      }
    } else {
      // For now, allow clock-in without face verification to not break existing functionality
      // In production, you might want to make this mandatory
      console.log('[clock-in] No face verification provided - allowing clock-in');
    }

    // Geofence check: if coordinates provided, verify distance against branch coordinates.
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

      // Allow remote employees to clock in from anywhere
      if (branchName && branchName.toLowerCase() === 'remote') {
        // skip geofence for Remote employees
      } else if (coords) {
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

    // Check if employee has a schedule for today and get attendance status in one query
    console.log('[clock-in] Checking schedule for employeeId:', employeeId, 'date:', isoDate);

    // First, let's see what schedules exist for this employee
    const allSchedules = await db
      .select({ date: schedules.date, shiftStart: schedules.shiftStart, shiftEnd: schedules.shiftEnd })
      .from(schedules)
      .where(eq(schedules.employeeId, employeeId))
      .limit(10);

    console.log('[clock-in] All schedules for employee:', allSchedules);

    const scheduleAndAttendance = await db
      .select({
        shiftStart: schedules.shiftStart,
        shiftEnd: schedules.shiftEnd,
        timeIn: attendance.timeIn,
        attendanceId: attendance.id
      })
      .from(schedules)
      .leftJoin(attendance, and(eq(attendance.employeeId, employeeId), eq(attendance.date, isoDate)))
      .where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)))
      .limit(1);

    console.log('[clock-in] Schedule query result:', scheduleAndAttendance);

    if (scheduleAndAttendance.length === 0) {
      return NextResponse.json({
        success: false,
        message: `No schedule assigned for today (${isoDate}). Cannot clock in.`,
        debug: { employeeId, isoDate, availableSchedules: allSchedules }
      }, { status: 403 });
    }

    const schedule = scheduleAndAttendance[0];
    const shiftStartTime = schedule.shiftStart;
    const shiftEndTime = schedule.shiftEnd;
    const existingAttendanceId = schedule.attendanceId;
    const hasExistingTimeIn = schedule.timeIn !== null;

    // Parse shift times manually (Singapore time)
    const [startHour, startMinute] = shiftStartTime.split(':').map(Number);
    const [endHour, endMinute] = shiftEndTime.split(':').map(Number);

    // Create shift start date in Singapore time
    const shiftStartDate = new Date(now);
    shiftStartDate.setHours(startHour, startMinute, 0, 0);

    // Create shift end date in Singapore time
    let shiftEndDate = new Date(now);
    shiftEndDate.setHours(endHour, endMinute, 0, 0);

    // If shift end is before shift start, it spans midnight
    if (shiftEndTime < shiftStartTime) {
      shiftEndDate.setDate(shiftEndDate.getDate() + 1);
    }

    // Define clock-in window: from shift start to shift end time
    const earlyClockInLimit = shiftStartDate; // Cannot clock in before shift start
    const lateClockInLimit = shiftEndDate; // Until shift end

    if (now < earlyClockInLimit) {
      return NextResponse.json({
        success: false,
        message: `Cannot clock in before your shift start time (${shiftStartTime}).`
      }, { status: 403 });
    }

    if (now > lateClockInLimit) {
      return NextResponse.json({
        success: false,
        message: 'Cannot clock in after your shift end time.'
      }, { status: 403 });
    }

    // Check if clock-in is within grace period (on time) or late
    const gracePeriodEnd = new Date(shiftStartDate.getTime() + (5 * 60 * 1000)); // 5 minutes after shift start
    let clockInStatus = 'Present';

    console.log('[clock-in] Time calculations:');
    console.log('[clock-in] - Current time:', now.toISOString(), '(Singapore time)');
    console.log('[clock-in] - Shift start:', shiftStartDate.toISOString());
    console.log('[clock-in] - Grace period end:', gracePeriodEnd.toISOString());
    console.log('[clock-in] - Late clock-in limit:', lateClockInLimit.toISOString());

    if (now.getTime() <= gracePeriodEnd.getTime()) {
      clockInStatus = 'Present'; // On time within grace period
      console.log('[clock-in] - Status: Present (within grace period)');
    } else if (now.getTime() > gracePeriodEnd.getTime() && now.getTime() <= lateClockInLimit.getTime()) {
      clockInStatus = 'Late'; // Late but within allowed window
      console.log('[clock-in] - Status: Late (after grace period but within shift)');
    } else {
      clockInStatus = 'Present'; // Default fallback
      console.log('[clock-in] - Status: Present (fallback - should not happen)');
    }

    console.log('[clock-in] Final clock-in status:', clockInStatus);

    // Upsert attendance: if a record exists for employee + date, update timeIn if empty; otherwise insert
    if (existingAttendanceId) {
       // If timeIn is null, set it; also set status based on clock-in time
       if (!hasExistingTimeIn) {
         // store ISO strings for timestamp columns (already in Singapore time)
         await db.update(attendance).set({ timeIn: now.toISOString(), status: clockInStatus }).where(eq(attendance.id, existingAttendanceId));
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
