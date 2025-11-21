'use server';

import { getDb } from '@/lib/db';
import { eq, and, sql } from 'drizzle-orm';
import { attendance, schedules, accounts } from '@/lib/schema';
import * as schema from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**
 * Generates sample attendance data for an employee for 1-2 weeks.
 * Creates realistic clock-in/out records based on their schedule.
 */
export async function generateSampleAttendance(formData: FormData) {
  try {
    console.log('[demo] Starting generateSampleAttendance');
    const employeeId = formData.get('employeeId') as string;
    console.log('[demo] Employee ID:', employeeId);

    if (!employeeId) {
      console.log('No employee ID');
      redirect('/admin/demo?error=Employee ID is required');
    }

    console.log('[demo] About to get DB connection');
    const db = await getDb();
    console.log('[demo] Got DB connection');

    // Verify employee exists
    console.log('[demo] Verifying employee exists');
    const employee = await db
      .select()
      .from(accounts)
      .where(eq(accounts.id, employeeId))
      .limit(1);
    console.log('[demo] Employee query result:', employee.length);

    if (!employee.length) {
      redirect('/admin/demo?error=Employee not found');
    }

  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 14); // Start 2 weeks ago

  const endDate = new Date(now);
  endDate.setDate(now.getDate() + 7); // End 1 week from now

  const startDateStr = startDate.toISOString().slice(0, 10);
  const endDateStr = endDate.toISOString().slice(0, 10);

  // Delete existing schedules for the period
  try {
    await db.delete(schedules).where(and(
      eq(schedules.employeeId, employeeId),
      sql`${schedules.date} >= ${startDateStr}`,
      sql`${schedules.date} <= ${endDateStr}`
    ));
    console.log('Deleted existing schedules for employee:', employeeId);
  } catch (error) {
    console.error('Failed to delete existing schedules:', error);
    redirect('/admin/demo?error=Failed to delete existing schedules. Please try again.');
  }

  // Generate default schedules for weekdays
  try {
    console.log('Generating schedules for employee:', employeeId);

    const scheduleInserts = [];
    const scheduleDate = new Date(startDate);

    while (scheduleDate <= endDate) {
      const dateStr = scheduleDate.toISOString().slice(0, 10);
      const dayOfWeek = scheduleDate.getDay(); // 0 = Sunday, 6 = Saturday

      // Skip weekends
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        scheduleInserts.push({
          employeeId,
          date: dateStr,
          shiftStart: '09:00:00',
          shiftEnd: '17:00:00',
        });
      }

      scheduleDate.setDate(scheduleDate.getDate() + 1);
    }

    console.log('Schedules to insert:', scheduleInserts.length);

    // Insert default schedules
    if (scheduleInserts.length > 0) {
      for (const scheduleData of scheduleInserts) {
        try {
          await db.insert(schedules).values(scheduleData);
        } catch (error) {
          console.error(`Failed to insert schedule for ${scheduleData.date}:`, error);
        }
      }
    }
  } catch (error) {
    console.error('Failed to generate schedules:', error);
    redirect('/admin/demo?error=Failed to generate schedules. Please try again.');
  }

  // Get employee's schedule for the period
  const employeeSchedules = await db
    .select({
      date: schedules.date,
      shiftStart: schedules.shiftStart,
      shiftEnd: schedules.shiftEnd,
    })
    .from(schedules)
    .where(and(
      eq(schedules.employeeId, employeeId),
      sql`${schedules.date} >= ${startDate.toISOString().slice(0, 10)}`,
      sql`${schedules.date} <= ${endDate.toISOString().slice(0, 10)}`
    ));

  console.log('Employee schedules found:', employeeSchedules.length);

  // Create a map of date to schedule
  const scheduleMap = new Map();
  employeeSchedules.forEach(sch => {
    scheduleMap.set(sch.date, sch);
  });

  // Generate attendance for each day in the period
  const attendanceRecords = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().slice(0, 10);
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

    // Skip weekends (Saturday = 6, Sunday = 0)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      currentDate.setDate(currentDate.getDate() + 1);
      continue;
    }

    const schedule = scheduleMap.get(dateStr);

    if (schedule && schedule.shiftStart && schedule.shiftEnd) {
      // Employee has a schedule, generate attendance
      const [startHour, startMin] = schedule.shiftStart.split(':').map(Number);
      const [endHour, endMin] = schedule.shiftEnd.split(':').map(Number);

      // Generate clock-in time with variation (early, on time, or late)
      const attendanceType = Math.random(); // Random number between 0 and 1

      let timeVariation = 0;
      if (attendanceType < 0.3) {
        // 30% chance: Early (1-10 minutes before shift)
        timeVariation = -(Math.floor(Math.random() * 10) + 1);
      } else if (attendanceType < 0.7) {
        // 40% chance: On time (within 5 minutes of shift start)
        timeVariation = Math.floor(Math.random() * 11) - 5; // -5 to +5 minutes
      } else {
        // 30% chance: Late (1-45 minutes late)
        timeVariation = Math.floor(Math.random() * 45) + 1;
      }

      // Create timeIn by combining date string with time
      let actualHour = startHour;
      let actualMin = startMin + timeVariation;

      // Handle negative minutes (borrow from hours)
      while (actualMin < 0) {
        actualMin += 60;
        actualHour -= 1;
      }

      // Ensure hour doesn't go negative (edge case)
      if (actualHour < 0) {
        actualHour = 0;
        actualMin = 0;
      }

      const timeInStr = `${dateStr}T${String(actualHour).padStart(2, '0')}:${String(actualMin).padStart(2, '0')}:00`;
      const timeIn = new Date(timeInStr);

      // Generate clock-out time (1-45 minutes after shift end)
      const endVariation = Math.floor(Math.random() * 45) + 1; // 1-45 minutes
      const timeOutStr = `${dateStr}T${String(endHour).padStart(2, '0')}:${String(endMin + endVariation).padStart(2, '0')}:00`;
      const timeOut = new Date(timeOutStr);

      // Calculate hours worked
      const hoursWorked = (timeOut.getTime() - timeIn.getTime()) / (1000 * 60 * 60);

      // Determine status
      let status = 'Present';
      if (timeVariation > 5) {
        status = 'Late';
      }

      attendanceRecords.push({
        employeeId,
        date: dateStr,
        timeIn: timeIn.toISOString(),
        timeOut: timeOut.toISOString(),
        status,
        hoursWorked: Math.max(0, hoursWorked), // Ensure non-negative
      });
    } else {
      // No schedule, mark as absent sometimes
      if (Math.random() < 0.1) { // 10% chance of absence when no schedule
        attendanceRecords.push({
          employeeId,
          date: dateStr,
          timeIn: null,
          timeOut: null,
          status: 'Absent',
          hoursWorked: 0,
        });
      }
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Delete existing attendance records for the period
  try {
    await db.delete(attendance).where(and(
      eq(attendance.employeeId, employeeId),
      sql`${attendance.date} >= ${startDateStr}`,
      sql`${attendance.date} <= ${endDateStr}`
    ));
    console.log('Deleted existing attendance for employee:', employeeId);
  } catch (error) {
    console.error('Failed to delete existing attendance:', error);
    redirect('/admin/demo?error=Failed to delete existing attendance. Please try again.');
  }

  // Insert attendance records
  for (const record of attendanceRecords) {
    try {
      await db.insert(attendance).values(record);
    } catch (error) {
      // Log error but continue with other records
      console.error(`Failed to insert attendance for ${record.date}:`, error);
    }
  }

  console.log('Attendance records generated:', attendanceRecords.length);

  if (attendanceRecords.length === 0) {
    console.log('No attendance records generated');
    redirect('/admin/demo?error=No attendance records were generated. The employee may not have a schedule.');
  }

  // Create a sample overtime request
  try {
    const overtimeDate = new Date(now);
    overtimeDate.setDate(now.getDate() - 3); // 3 days ago
    const overtimeDateStr = overtimeDate.toISOString().slice(0, 10);

    await db.insert(schema.overtimeRequests).values({
      employeeId,
      date: overtimeDateStr,
      hoursRequested: '2.5', // 2.5 hours overtime
      reason: 'Demo overtime request - additional work required',
      status: 'Approved', // Pre-approve for demo purposes
      approvedBy: employeeId, // Self-approved for demo
      approvedAt: new Date(),
    });
    console.log('Sample overtime request created');
  } catch (error) {
    console.error('Failed to create overtime request:', error);
    // Don't fail the whole process for this
  }

  // Create a sample loan
  try {
    await db.insert(schema.loans).values({
      employeeId,
      amount: '50000.00', // 50,000 PHP loan
      months: 12, // 12 months
      interestRate: '0.05', // 5% interest
      totalAmount: '52500.00', // Amount + interest
      monthlyPayment: '4375.00', // Monthly payment
      status: 'Approved', // Pre-approve for demo purposes
      approvedBy: employeeId, // Self-approved for demo
      approvedAt: new Date(),
    });
    console.log('Sample loan created');
  } catch (error) {
    console.error('Failed to create loan:', error);
    // Don't fail the whole process for this
  }

    console.log('[demo] Revalidating and redirecting to success');
    revalidatePath('/admin/demo');
    redirect('/admin/demo?success=true');
  } catch (error: any) {
    console.error('[demo] Unexpected error in generateSampleAttendance:', error);
    console.error('[demo] Error stack:', error?.stack);
    console.error('[demo] Error message:', error?.message);
    redirect('/admin/demo?error=An unexpected error occurred. Please try again.');
  }
}