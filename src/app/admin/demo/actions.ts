'use server';

import { getDb } from '@/lib/db';
import { eq, and, sql } from 'drizzle-orm';
import { attendance, schedules, accounts } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**
 * Generates sample attendance data for an employee for 1-2 weeks.
 * Creates realistic clock-in/out records based on their schedule.
 */
export async function generateSampleAttendance(formData: FormData) {
  console.log('Starting generateSampleAttendance');
  const employeeId = formData.get('employeeId') as string;
  console.log('Employee ID:', employeeId);

  if (!employeeId) {
    console.log('No employee ID');
    redirect('/admin/demo?error=Employee ID is required');
  }

  const db = await getDb();
  console.log('Got DB connection');

  // Verify employee exists
  const employee = await db
    .select()
    .from(accounts)
    .where(eq(accounts.id, employeeId))
    .limit(1);

  if (!employee.length) {
    redirect('/admin/demo?error=Employee not found');
  }

  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - 14); // Start 2 weeks ago

  const endDate = new Date(now);
  endDate.setDate(now.getDate() + 7); // End 1 week from now

  // Generate default schedules for weekdays if none exist
  try {
    console.log('Generating schedules for employee:', employeeId);
    // Get all existing schedules for the period
    const existingSchedules = await db
      .select({ date: schedules.date })
      .from(schedules)
      .where(and(
        eq(schedules.employeeId, employeeId),
        sql`${schedules.date} >= ${startDate.toISOString().slice(0, 10)}`,
        sql`${schedules.date} <= ${endDate.toISOString().slice(0, 10)}`
      ));

    const existingDates = new Set(existingSchedules.map(s => s.date as string));
    console.log('Existing schedule dates:', existingDates);

    const scheduleInserts = [];
    const scheduleDate = new Date(startDate);

    while (scheduleDate <= endDate) {
      const dateStr = scheduleDate.toISOString().slice(0, 10);
      const dayOfWeek = scheduleDate.getDay(); // 0 = Sunday, 6 = Saturday

      // Skip weekends
      if (dayOfWeek !== 0 && dayOfWeek !== 6 && !existingDates.has(dateStr)) {
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

      // Generate clock-in time (always 1-45 minutes late)
      const lateMinutes = Math.floor(Math.random() * 45) + 1; // 1-45 minutes late

      const timeIn = new Date(currentDate);
      timeIn.setHours(startHour, startMin + lateMinutes, 0, 0);

      // Generate clock-out time (1-45 minutes after shift end)
      const timeOut = new Date(currentDate);
      const endVariation = Math.floor(Math.random() * 45) + 1; // 1-45 minutes
      timeOut.setHours(endHour, endMin + endVariation, 0, 0);

      // Calculate hours worked
      const hoursWorked = (timeOut.getTime() - timeIn.getTime()) / (1000 * 60 * 60);

      // Determine status
      let status = 'Present';
      if (lateMinutes > 5) {
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

  // Insert attendance records (skip if already exists for that date)
  for (const record of attendanceRecords) {
    try {
      await db.insert(attendance).values(record).onConflictDoNothing({
        target: [attendance.employeeId, attendance.date],
      });
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

  console.log('Revalidating and redirecting to success');
  revalidatePath('/admin/demo');
  redirect('/admin/demo?success=true');
}