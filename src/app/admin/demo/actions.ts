'use server';

import { getDb } from '@/lib/db';
import { eq, and, sql, gte, lte } from 'drizzle-orm';
import { attendance, schedules, accounts, leaveRequests, positions, overtimeRequests, loans } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**
 * Generates comprehensive sample data for payslip demonstration.
 * Creates employee data, attendance records, leave requests, and overtime data.
 */
export async function generateSamplePayslipData(formData: FormData) {
  console.log('Starting generateSamplePayslipData');
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
  startDate.setDate(now.getDate() - 30); // Start 30 days ago for a full month

  const endDate = new Date(now);
  endDate.setDate(now.getDate() + 2); // End 2 days from now to include recent dates

  try {
    // 1. Update employee with salary information and government IDs if missing
    console.log('Updating employee data with salary and government info...');
    const employeeData = employee[0];

    // Generate sample salary data if not present
    const monthlySalary = employeeData.position ? await getPositionSalary(employeeData.position) : 25000;
    const dailyRate = monthlySalary / 22; // Assuming 22 working days per month

    // Update employee with government IDs and salary info
    await db.update(accounts)
      .set({
        sssNumber: employeeData.sssNumber || `33-1234567-${Math.floor(Math.random() * 9) + 1}`,
        philhealthNumber: employeeData.philhealthNumber || `12-345678901-${Math.floor(Math.random() * 9) + 1}`,
        pagibigNumber: employeeData.pagibigNumber || `1234-5678-9012-${Math.floor(Math.random() * 9) + 1}`,
        tin: employeeData.tin || `123-456-789-${Math.floor(Math.random() * 999) + 1}`,
        availableLeaves: employeeData.availableLeaves || 15,
      })
      .where(eq(accounts.id, employeeId));

    // 2. Generate schedules for the period
    console.log('Generating schedules for employee:', employeeId);
    const existingSchedules = await db
      .select({ date: schedules.date })
      .from(schedules)
      .where(and(
        eq(schedules.employeeId, employeeId),
        sql`${schedules.date} >= ${startDate.toISOString().slice(0, 10)}`,
        sql`${schedules.date} <= ${endDate.toISOString().slice(0, 10)}`
      ));

    const existingDates = new Set(existingSchedules.map(s => s.date as string));
    console.log('Existing schedule dates:', existingDates.size);

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
          shiftEnd: '18:00:00', // 9 hours total with 1 hour break
        });
      }

      scheduleDate.setDate(scheduleDate.getDate() + 1);
    }

    console.log('Schedules to insert:', scheduleInserts.length);

    // Insert schedules
    if (scheduleInserts.length > 0) {
      for (const scheduleData of scheduleInserts) {
        try {
          await db.insert(schedules).values(scheduleData);
        } catch (error) {
          console.error(`Failed to insert schedule for ${scheduleData.date}:`, error);
        }
      }
    }

    // 3. Get employee's schedule for the period
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

    // 4. Delete existing attendance records for the period to ensure fresh demo data
    await db.delete(attendance).where(and(
      eq(attendance.employeeId, employeeId),
      gte(attendance.date, startDate.toISOString().slice(0, 10)),
      lte(attendance.date, endDate.toISOString().slice(0, 10))
    ));

    // 4. Generate attendance records with some overtime
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

        // Generate realistic clock-in time (late, early, or on time)
        const variationType = Math.random();
        let lateMinutes = 0;

        if (variationType < 0.4) { // 40% chance of being late (5-90 mins)
          lateMinutes = Math.floor(Math.random() * 86) + 5;
        } else if (variationType < 0.5) { // 10% chance of being early (5-10 mins)
          lateMinutes = -(Math.floor(Math.random() * 6) + 5);
        } else { // 50% chance of being on time (0-4 mins variation)
          lateMinutes = Math.floor(Math.random() * 5);
        }

        // Calculate timeIn properly, handling day rollover
        const totalMin = startHour * 60 + startMin + lateMinutes;
        const daysToAdd = Math.floor(totalMin / (24 * 60));
        const remainingMin = totalMin % (24 * 60);
        const hours = Math.floor(remainingMin / 60);
        const mins = remainingMin % 60;

        const timeIn = new Date(currentDate);
        timeIn.setDate(currentDate.getDate() + daysToAdd);
        timeIn.setHours(hours, mins, 0, 0);

        // Generate clock-out time (sometimes with overtime)
        const hasOvertime = Math.random() < 0.25; // 25% chance of overtime
        const overtimeHours = hasOvertime ? Math.floor(Math.random() * 3) + 1 : 0; // 1-3 hours overtime
        const workHours = 8 + overtimeHours; // 8 hours work + overtime
        const endVariation = Math.floor(Math.random() * 31) - 15; // -15 to +15 minutes

        // Calculate timeOut based on work hours from timeIn
        const timeOut = new Date(timeIn.getTime() + workHours * 60 * 60 * 1000 + endVariation * 60 * 1000);

        // Hours worked is work hours
        const hoursWorked = workHours;

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
          overtimeHours: overtimeHours as any,
          overtimeType: 'regular' as any,
          overtimeApproved: hasOvertime as any, // Approve if has overtime
        });
      } else {
        // No schedule, mark as absent sometimes
        if (Math.random() < 0.08) { // 8% chance of absence when no schedule
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
        console.error(`Failed to insert attendance for ${record.date}:`, error);
      }
    }

    console.log('Attendance records generated:', attendanceRecords.length);

    // 5. Generate overtime requests for days with overtime
    console.log('Generating overtime requests...');
    const overtimeRequestsData = [];

    // Get days with overtime from attendanceRecords
    const overtimeDays = attendanceRecords.filter(record => (record.overtimeHours as number) > 0);

    for (const record of overtimeDays) {
      overtimeRequestsData.push({
        employeeId,
        date: record.date,
        hoursRequested: record.overtimeHours as number,
        reason: 'Demo overtime for payslip demonstration',
        status: 'Approved', // Auto-approve for demo
        approvedAt: new Date(),
      });
    }

    // Delete existing overtime requests for the period
    await db.delete(overtimeRequests).where(and(
      eq(overtimeRequests.employeeId, employeeId),
      sql`${overtimeRequests.date} >= ${startDate.toISOString().slice(0, 10)}`,
      sql`${overtimeRequests.date} <= ${endDate.toISOString().slice(0, 10)}`
    ));

    // Insert overtime requests
    for (const overtimeData of overtimeRequestsData) {
      try {
        await db.insert(overtimeRequests).values(overtimeData);
      } catch (error) {
        console.error('Failed to insert overtime request:', error);
      }
    }

    console.log('Overtime requests generated:', overtimeRequestsData.length);

    // 6. Delete existing leave requests for the period
    await db.delete(leaveRequests).where(and(
      eq(leaveRequests.employeeId, employeeId),
      sql`${leaveRequests.startDate} >= ${startDate.toISOString().slice(0, 10)}`,
      sql`${leaveRequests.endDate} <= ${endDate.toISOString().slice(0, 10)}`
    ));

    // 5. Generate some leave requests
    console.log('Generating leave requests...');
    const leaveTypes = ['Vacation Leave', 'Sick Leave', 'Emergency Leave'];
    const leaveRequestsData = [];

    // Generate 1-3 leave requests randomly
    const numLeaves = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numLeaves; i++) {
      const leaveStart = new Date(startDate);
      leaveStart.setDate(leaveStart.getDate() + Math.floor(Math.random() * 30)); // Random date in the period

      const leaveEnd = new Date(leaveStart);
      const duration = Math.floor(Math.random() * 3) + 1; // 1-3 days
      leaveEnd.setDate(leaveEnd.getDate() + duration - 1);

      const leaveType = leaveTypes[Math.floor(Math.random() * leaveTypes.length)];
      const isApproved = Math.random() < 0.8; // 80% chance of approval

      leaveRequestsData.push({
        employeeId,
        leaveType,
        startDate: leaveStart.toISOString().slice(0, 10),
        endDate: leaveEnd.toISOString().slice(0, 10),
        reason: `Sample ${leaveType.toLowerCase()} for demo purposes`,
        status: isApproved ? 'Approved' : 'Pending',
      });
    }

    // Insert leave requests
    for (const leaveData of leaveRequestsData) {
      try {
        await db.insert(leaveRequests).values(leaveData).onConflictDoNothing();
      } catch (error) {
        console.error('Failed to insert leave request:', error);
      }
    }

    console.log('Leave requests generated:', leaveRequestsData.length);

    // 7. Create a company loan for the employee
    console.log('Creating company loan...');
    const loanAmount = Math.floor(Math.random() * 15000) + 10000; // 10k to 25k
    const loanMonths = Math.floor(Math.random() * 12) + 6; // 6 to 18 months
    const interestRate = 5.0; // 5% interest
    const totalAmount = loanAmount * (1 + (interestRate / 100) * (loanMonths / 12));

    // Delete existing loans for the employee
    await db.delete(loans).where(eq(loans.employeeId, employeeId));

    const loanData = {
      employeeId,
      amount: loanAmount.toString(),
      months: loanMonths,
      interestRate: interestRate.toString(),
      totalAmount: totalAmount.toFixed(2),
      status: 'Approved',
      requestedAt: new Date(),
      approvedAt: new Date(),
      notes: 'Demo company loan for payslip demonstration',
    };

    try {
      await db.insert(loans).values(loanData);
      console.log('Loan created successfully');
    } catch (error) {
      console.error('Failed to create loan:', error);
    }

    console.log('Sample payslip data generation completed successfully');
    revalidatePath('/admin/demo');
    redirect('/admin/demo?success=true');

  } catch (error) {
    // Re-throw NEXT_REDIRECT errors to allow redirects to work
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    console.error('Failed to generate sample payslip data:', error);
    redirect('/admin/demo?error=Failed to generate sample data. Please try again.');
  }
}

// Helper function to get position salary
async function getPositionSalary(positionTitle: string): Promise<number> {
  const db = await getDb();
  const position = await db
    .select({ rate: positions.rate })
    .from(positions)
    .where(eq(positions.title, positionTitle))
    .limit(1);

  if (position.length > 0) {
    return parseFloat(position[0].rate as string);
  }

  // Default salaries based on position
  const defaultSalaries: { [key: string]: number } = {
    'Software Engineer': 30000,
    'Senior Software Engineer': 45000,
    'Project Manager': 50000,
    'HR Manager': 35000,
    'Accountant': 28000,
    'Marketing Specialist': 25000,
  };

  return defaultSalaries[positionTitle] || 25000;
}