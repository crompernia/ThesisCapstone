/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */
'use server';

import { getDb } from './db';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import { eq, and, desc, sql, inArray, ne, isNotNull, asc, or } from 'drizzle-orm';
import * as schema from './schema';
const { accounts, announcements, leaveRequests, branches, positions, schedules, attendance, departments, positionDepartments, attendanceRecords, payslips } = schema;

// Type definitions for database query results
interface CountResult {
  count: string;
}

interface AnnouncementRow {
  id: number;
  title: string;
  content: string;
  status: string;
  created_at: Date;
  first_name: string;
  last_name: string;
}

interface EmployeeRow {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  branch: string;
  status: string;
  [key: string]: unknown;
}

interface LeaveRequestRow {
  id: number;
  employeeId: string;
  first_name: string;
  last_name: string;
  leave_type: string;
  start_date: Date;
  end_date: Date;
  reason: string;
  status: string;
}

interface PayPeriodData {
  id: number;
  period: string;
  payDate: string;
  dailyRate: number;
  earnings: Array<{ name: string; amount: number }>;
  deductions: Array<{ name: string; amount: number }>;
  net_pay: number;
}

interface BranchRow {
  id: number;
  name: string;
  coordinates: string | null;
}

interface PositionRow {
  id: number;
  title: string;
  rate: string;
}

interface DepartmentRow {
  id: number;
  name: string;
  branchId: number;
  createdAt: Date;
}

export async function getHRDashboardData() {
    const db = await getDb();

    const totalEmployeesResult = await db.select({ count: sql<number>`count(*)` })
        .from(accounts)
        .where(eq(accounts.role, 'Employee'));
    const totalEmployees = totalEmployeesResult[0]?.count || 0;

    const pendingLeaveRequestsResult = await db.select({ count: sql<number>`count(*)` })
        .from(leaveRequests)
        .where(eq(leaveRequests.status, 'Pending'));
    const pendingLeaveRequests = pendingLeaveRequestsResult[0]?.count || 0;

    // Calculate on-time percentage from attendance data
    const currentMonth = new Date();
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    const attendanceRecords = await db
        .select({
            status: attendance.status,
            timeIn: attendance.timeIn,
            shiftStart: schedules.shiftStart,
        })
        .from(attendance)
        .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
        .where(and(
            sql`${attendance.date} >= ${startOfMonth.toISOString().slice(0, 10)}`,
            sql`${attendance.date} <= ${endOfMonth.toISOString().slice(0, 10)}`
        ));

    let onTimeCount = 0;
    let totalAttendanceRecords = 0;

    for (const record of attendanceRecords) {
        if (record.status === 'Present' || record.status === 'Late') {
            totalAttendanceRecords++;

            // Check if employee was on time (within 5 minutes of shift start)
            if (record.timeIn && record.shiftStart) {
                const timeIn = new Date(record.timeIn);
                const [h, m] = record.shiftStart.split(':').map(Number);
                const shiftStart = new Date(timeIn.getFullYear(), timeIn.getMonth(), timeIn.getDate(), h, m);

                const minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
                if (minutesLate <= 5) {
                    onTimeCount++;
                }
            } else if (record.status === 'Present') {
                // If no time data but marked as Present, count as on time
                onTimeCount++;
            }
        }
    }

    const onTimePercentage = totalAttendanceRecords > 0
        ? Math.round((onTimeCount / totalAttendanceRecords) * 100)
        : 0;

    const stats = [
        { title: 'Total Employees', value: String(totalEmployees), change: '' },
        { title: 'On Time Percentage', value: `${onTimePercentage}%`, change: '' },
        { title: 'Pending Leave Requests', value: String(pendingLeaveRequests), change: '' },
    ];

    // Get recent employee activities from various tables
    const recentActivities = [];

    // Get recent leave requests
    const recentLeaveRequests = await db
        .select({
            id: leaveRequests.id,
            employeeId: accounts.id,
            employeeNumber: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            action: sql<string>`'Submitted Leave Request'`,
            createdAt: leaveRequests.createdAt,
        })
        .from(leaveRequests)
        .leftJoin(accounts, eq(leaveRequests.employeeId, accounts.id))
        .orderBy(desc(leaveRequests.createdAt))
        .limit(5);

    // Get recent attendance records
    const recentAttendance = await db
        .select({
            id: attendance.id,
            employeeId: accounts.id,
            employeeNumber: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            action: sql<string>`'Clocked In/Out'`,
            createdAt: attendance.timeIn,
        })
        .from(attendance)
        .leftJoin(accounts, eq(attendance.employeeId, accounts.id))
        .where(isNotNull(attendance.timeIn))
        .orderBy(desc(attendance.timeIn))
        .limit(5);

    // Combine and sort all activities by date (excluding payslip generations)
    const allActivities = [
        ...recentLeaveRequests.map(req => ({
            id: `leave-${req.id}`,
            employeeId: req.employeeId,
            employeeNumber: req.employeeNumber,
            employeeName: `${req.first_name} ${req.last_name}`,
            activity: req.action,
            timestamp: req.createdAt ? format(new Date(req.createdAt), 'MMM dd, yyyy HH:mm') : 'Unknown'
        })),
        ...recentAttendance.map(att => ({
            id: `attendance-${att.id}`,
            employeeId: att.employeeId,
            employeeNumber: att.employeeNumber,
            employeeName: `${att.first_name} ${att.last_name}`,
            activity: att.action,
            timestamp: att.createdAt ? format(new Date(att.createdAt), 'MMM dd, yyyy HH:mm') : 'Unknown'
        }))
    ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 10); // Take top 10 most recent

    return {
        stats,
        recentActivities: allActivities
    };
}


export async function getPastAnnouncements() {
    const db = await getDb();

    const result = await db
        .select({
            id: announcements.id,
            title: announcements.title,
            content: announcements.content,
            status: announcements.status,
            created_at: announcements.createdAt,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
        })
        .from(announcements)
        .leftJoin(accounts, eq(announcements.postedBy, accounts.id))
        .orderBy(desc(announcements.createdAt));

    return result.map(a => ({
        ...a,
        postedBy: `${a.first_name} ${a.last_name}`,
        date: format(new Date(a.created_at!), 'yyyy-MM-dd')
    }));
}

export async function createAnnouncement(title: string, content: string, status: string, postedBy?: string): Promise<void> {
    const db = await getDb();
    const id = postedBy || 'HR-001'; // fallback for older callers

    await db.insert(announcements).values({
        title,
        content,
        status,
        postedBy: id,
    });
}

export async function deleteAnnouncement(id: number): Promise<void> {
    const db = await getDb();
    await db.delete(announcements).where(eq(announcements.id, id));
}

export async function getDailyAttendanceData(date: string): Promise<unknown[]> {
    const db = await getDb();

    // Left join attendance for the requested date; if no row exists the employee is considered 'Away'
    const targetDate = new Date(date);

    const result = await db
        .select({
            id: accounts.id,
            employeeNumber: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            branch: accounts.branch,
            time_in: attendance.timeIn,
            time_out: attendance.timeOut,
            attendance_status: attendance.status,
        })
        .from(accounts)
        .leftJoin(attendance, and(eq(attendance.employeeId, accounts.id), eq(attendance.date, sql`${targetDate.toISOString().slice(0, 10)}`)))
        .where(and(eq(accounts.role, 'Employee'), eq(accounts.status, 'Active')));

    return result.map(a => {
        const timeInRaw = (a as any).time_in as Date | undefined | null;
        const timeOutRaw = (a as any).time_out as Date | undefined | null;
        const attendanceStatus = (a as any).attendance_status as string | undefined | null;

        const fmt = (d?: Date | null) => d ? format(new Date(d), 'hh:mm a') : null;

        return {
            id: a.id,
            employeeNumber: a.employeeNumber,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            branch: a.branch,
            timeIn: fmt(timeInRaw) || null,
            timeOut: fmt(timeOutRaw) || null,
            // default to 'Away' when there's no attendance row
            status: attendanceStatus || 'Away'
        };
    });
}


export async function getEmployees() {
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            employeeNumber: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            branch: accounts.branch,
            status: accounts.status,
        })
        .from(accounts)
        .where(and(eq(accounts.role, 'Employee'), ne(accounts.status, 'Pending Approval')));

    return result.map(a => ({
        id: a.id,
        employeeNumber: a.employeeNumber,
        name: `${a.first_name} ${a.last_name}`,
        position: a.position,
        branch: a.branch,
        status: a.status
    }));
}

export async function getEmployeeById(id: string) {
    const db = await getDb();

    const result = await db.select().from(accounts).where(eq(accounts.id, id));
    const employee = result[0];
    if (!employee) return null;

    return {
        ...employee,
        name: `${employee.firstName} ${employee.lastName}`,
        date_hired: format(new Date(employee.dateHired), 'yyyy-MM-dd'),
        date_of_birth: employee.dateOfBirth ? format(new Date(employee.dateOfBirth), 'yyyy-MM-dd') : null,
    };
}


export async function deleteEmployee(id: string): Promise<boolean> {
    const db = await getDb();
    const result = await db.delete(accounts).where(eq(accounts.id, id));
    return (result.rowCount ?? 0) > 0;
}

export async function getLeaveRequests() {
    const db = await getDb();

    const result = await db
        .select({
            id: leaveRequests.id,
            leave_type: leaveRequests.leaveType,
            start_date: leaveRequests.startDate,
            end_date: leaveRequests.endDate,
            reason: leaveRequests.reason,
            status: leaveRequests.status,
            employeeId: accounts.id,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
        })
        .from(leaveRequests)
        .leftJoin(accounts, eq(leaveRequests.employeeId, accounts.id))
        .orderBy(desc(leaveRequests.createdAt));

    return result.map(lr => ({
        id: lr.id,
        employeeId: lr.employeeId,
        employeeName: `${lr.first_name} ${lr.last_name}`,
        leave_type: lr.leave_type,
        startDate: format(new Date(lr.start_date), 'yyyy-MM-dd'),
        endDate: format(new Date(lr.end_date), 'yyyy-MM-dd'),
        reason: lr.reason,
        status: lr.status
    }));
}

export async function updateLeaveRequestStatus(requestId: number, status: string): Promise<void> {
    const db = await getDb();
    await db.update(leaveRequests)
        .set({ status })
        .where(eq(leaveRequests.id, requestId));
}

export async function getEmployeesWithPayslipStatus() {
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            employee_number: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            department: accounts.department,
            sss_number: accounts.sssNumber,
            philhealth_number: accounts.philhealthNumber,
            pagibig_number: accounts.pagibigNumber,
            tin: accounts.tin,
        })
        .from(accounts)
        .where(eq(accounts.role, 'Employee'));

    return await Promise.all(result.map(async (a) => {
        const hasBenefits = a.sss_number && a.philhealth_number && a.pagibig_number && a.tin;

        // Check if employee has a payslip for the current pay period
        const now = new Date();
        const currentDay = now.getDate();
        const selectedHalf = currentDay <= 15 ? '1st' : '2nd';
        const payPeriod = `${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()} - ${selectedHalf} Half`;

        const existingPayslip = await db
            .select()
            .from(payslips)
            .where(and(eq(payslips.employeeId, a.id), eq(payslips.payPeriod, payPeriod)))
            .limit(1);

        const payslipStatus = existingPayslip.length > 0 ? 'Settled' : 'Pending';

        return {
            id: a.id,
            employeeNumber: a.employee_number,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            payslipStatus,
            benefitsStatus: hasBenefits ? 'Complete' : 'Incomplete',
        };
    }));
}

export async function getEmployeesForScheduling() {
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
        })
        .from(accounts)
        .where(and(eq(accounts.role, 'Employee'), eq(accounts.status, 'Active')));

    return result.map(a => ({
        id: a.id,
        name: `${a.first_name} ${a.last_name}`,
        shift: '9:00 - 17:00' // Default shift
    }));
}

export async function getSchedulesForWeek(weekStart: string) {
    const db = await getDb();
    const startDate = new Date(weekStart);
    const weekDates: string[] = [];
    for (let i = 0; i < 5; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        weekDates.push(format(d, 'yyyy-MM-dd'));
    }

    const rows = await db
        .select({
            employeeId: schedules.employeeId,
            date: schedules.date,
            shiftStart: schedules.shiftStart,
            shiftEnd: schedules.shiftEnd,
            notes: schedules.notes
        })
        .from(schedules)
        .where(sql`${schedules.date}::text = ANY(ARRAY[${sql.join(weekDates, sql`, `)}])`)
        .orderBy(schedules.employeeId, schedules.date);

    // Group by employeeId
    const schedulesByEmployee: Record<string, any[]> = {};
    for (const row of rows) {
        if (!schedulesByEmployee[row.employeeId]) {
            schedulesByEmployee[row.employeeId] = [];
        }
        schedulesByEmployee[row.employeeId].push(row);
    }

    // Convert to shifts, breaks, overtime arrays
    const result: Record<string, { shifts: string[], breaks: string[], overtimeAllowed: boolean[] }> = {};
    for (const [employeeId, schs] of Object.entries(schedulesByEmployee)) {
        const shifts: string[] = [];
        const breaks: string[] = [];
        const overtimeAllowed: boolean[] = [];
        for (let i = 0; i < 5; i++) {
            const date = weekDates[i];
            const sch = schs.find(s => s.date === date);
            if (sch) {
                    const start = sch.shiftStart ? sch.shiftStart.slice(0, 5) : '';
                    const end = sch.shiftEnd ? sch.shiftEnd.slice(0, 5) : '';
                    shifts.push(start && end ? `${start} - ${end}` : '');
                    overtimeAllowed.push(false); // default false since not in schema
                    let breakStr = '';
                    try {
                        if (sch.notes) {
                            const parsed = typeof sch.notes === 'string' ? JSON.parse(sch.notes) : sch.notes;
                            if (parsed && parsed.break) breakStr = parsed.break;
                        }
                    } catch (e) {}
                    breaks.push(breakStr);
                } else {
                    shifts.push('');
                    breaks.push('');
                    overtimeAllowed.push(false);
                }
        }
        result[employeeId] = { shifts, breaks, overtimeAllowed };
    }

    return result;
}
    // Fetch Employee Data from Database
export async function getEmployeeDashboardData(employeeid: string) {
    const db = await getDb();

    const employeeResult = await db
        .select({
            id: accounts.id,
            employee_number: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            department: accounts.department,
            branch: accounts.branch,
            email: accounts.email,
            dateHired: accounts.dateHired,
        })
        .from(accounts)
        .where(eq(accounts.id, employeeid));

    const employee = employeeResult[0];

    if (!employee) {
        return { employee: { name: 'Employee Not Found' }, announcements: [] };
    }

    const announcementsResult = await db
        .select({
            id: announcements.id,
            title: announcements.title,
            content: announcements.content,
            created_at: announcements.createdAt,
        })
        .from(announcements)
        .where(eq(announcements.status, 'Published'))
        .orderBy(desc(announcements.createdAt))
        .limit(5);

    return {
        employee: {
            employeeId: employee.id,
            employeeNumber: employee.employee_number,
            name: `${employee.first_name} ${employee.last_name}`,
            position: employee.position,
            department: employee.department,
            branch: employee.branch,
            email: employee.email,
            dateHired: employee.dateHired ? format(new Date(employee.dateHired), 'yyyy-MM-dd') : null,
        },
        announcements: announcementsResult.map(a => ({
            id: a.id,
            title: a.title,
            content: a.content,
            date: format(new Date(a.created_at!), 'MMMM d, yyyy')
        }))
    };
}

export async function getAttendanceData(employeeId: string) {
    const db = await getDb();

    // Get current half-month period (15th to end of month or 1st to 15th)
    const now = new Date();
    const currentDay = now.getDate();
    let periodStart: Date;
    let periodEnd: Date;

    if (currentDay <= 15) {
        // First half of the month: 1st to 15th
        periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
        periodEnd = new Date(now.getFullYear(), now.getMonth(), 15);
    } else {
        // Second half of the month: 16th to end of month
        periodStart = new Date(now.getFullYear(), now.getMonth(), 16);
        periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Last day of current month
    }

    // Get available leaves and hire date from accounts
    const accountResult = await db
        .select({ availableLeaves: accounts.availableLeaves, dateHired: accounts.dateHired })
        .from(accounts)
        .where(eq(accounts.id, employeeId));

    const availableLeaves = accountResult[0]?.availableLeaves || 0;
    const hireDate = accountResult[0]?.dateHired ? new Date(accountResult[0].dateHired) : now;

    // Effective start date is the later of hire date and period start
    const effectiveStartDate = hireDate > periodStart ? hireDate : periodStart;

    // Get attendance records for current half-month period, but only from effective start date onwards
    const attendanceRecords = await db
        .select({
            date: attendance.date,
            timeIn: attendance.timeIn,
            timeOut: attendance.timeOut,
            status: attendance.status,
            hoursWorked: attendance.hoursWorked,
            shiftStart: schedules.shiftStart,
        })
        .from(attendance)
        .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
        .where(and(eq(attendance.employeeId, employeeId), sql`${attendance.date} >= ${effectiveStartDate.toISOString().slice(0, 10)}`, sql`${attendance.date} <= ${periodEnd.toISOString().slice(0, 10)}`))
        .orderBy(desc(attendance.date));

    // Get separate attendance records for lates calculation (only within current half-month period from hire date)
    const latesRecords = await db
        .select({
            date: attendance.date,
            timeIn: attendance.timeIn,
            timeOut: attendance.timeOut,
            status: attendance.status,
            shiftStart: schedules.shiftStart,
        })
        .from(attendance)
        .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
        .where(and(eq(attendance.employeeId, employeeId), sql`${attendance.date} >= ${effectiveStartDate.toISOString().slice(0, 10)}`, sql`${attendance.date} <= ${periodEnd.toISOString().slice(0, 10)}`))
        .orderBy(desc(attendance.date));

    // DEBUG: Log all lates records for debugging
    console.log(`[DEBUG] Lates records for employee ${employeeId}:`, latesRecords.map(r => ({
        date: r.date,
        timeIn: r.timeIn,
        shiftStart: r.shiftStart,
        status: r.status
    })));
    console.log(`[DEBUG] Current period: ${effectiveStartDate.toISOString().slice(0,10)} to ${periodEnd.toISOString().slice(0,10)}`);

    let daysAttended = 0;
    let absences = 0;
    let totalHours = 0;
    let totalLates = 0; // lates from hire date to bi-monthly cutoff
    const records: Array<{ date: string; timeIn: string | null; timeOut: string | null; status: string }> = [];

    // Process records for display and general metrics
    for (const record of attendanceRecords) {
        const timeIn = record.timeIn ? new Date(record.timeIn) : null;
        const timeOut = record.timeOut ? new Date(record.timeOut) : null;
        const shiftStartStr = record.shiftStart || '09:00:00'; // default 9:00
        const [h, m] = shiftStartStr.split(':').map(Number);
        const shiftStart = new Date(timeIn ? timeIn.getFullYear() : now.getFullYear(), timeIn ? timeIn.getMonth() : now.getMonth(), timeIn ? timeIn.getDate() : now.getDate(), h, m);

        let minutesLate = 0;
        if (timeIn && timeIn > shiftStart) {
            minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
        }

        let status = record.status || 'Present';
        // Recalculate status based on actual time-in vs shift start
        if (timeIn && shiftStart) {
            const minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
            if (minutesLate > 5) {
                status = 'Late';
            } else {
                status = 'Present';
            }
        }
        if (status === 'Present' || status === 'Late') {
            daysAttended++;
        } else if (status === 'Absent') {
            absences++;
        }

        totalHours += Number(record.hoursWorked) || 0;

        // Format for display
        const fmtTime = (d: Date | null) => d ? d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '--:--';
        records.push({
            date: record.date as string,
            timeIn: fmtTime(timeIn),
            timeOut: fmtTime(timeOut),
            status: status, // Use the recalculated status
        });
    }

    // Calculate lates only within current half-month period (resets each period)
    for (const record of latesRecords) {
        const timeIn = record.timeIn ? new Date(record.timeIn) : null;
        const shiftStartStr = record.shiftStart || '09:00:00';
        const [h, m] = shiftStartStr.split(':').map(Number);
        const date = new Date(record.date);
        // Create shiftStart in UTC to match timeIn timezone
        const shiftStart = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), h, m));

        let minutesLate = 0;
        if (timeIn && timeIn > shiftStart) {
            minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));

            // DEBUG: Log suspicious lateness values
            if (minutesLate > 480) { // More than 8 hours late
                console.log(`[DEBUG] Excessive lateness detected for employee ${employeeId}:`, {
                    date: record.date,
                    timeIn: timeIn.toISOString(),
                    shiftStart: shiftStart.toISOString(),
                    minutesLate,
                    shiftStartStr,
                    status: record.status
                });
            }
        }

        // Only count lates for records that actually have clock-in times and are present/late
        const status = record.status;
        if ((status === 'Present' || status === 'Late') && timeIn) {
            // If employee is more than 5 minutes late, count the late minutes
            if (minutesLate > 5) {
                totalLates += minutesLate;
            }
        }
    }

    // Count explicit absences from attendance records
    absences = attendanceRecords.filter(r => r.status === 'Absent').length;

    // Calculate total working days from hire date to period end (excluding weekends)
    const totalWorkingDaysFromHire = calculateWorkingDays(hireDate, periodEnd);

    // Get all attendance records from hire date to period end for totalDaysAttended
    const allAttendanceRecords = await db
        .select({
            date: attendance.date,
            timeIn: attendance.timeIn,
            timeOut: attendance.timeOut,
            status: attendance.status,
            shiftStart: schedules.shiftStart,
        })
        .from(attendance)
        .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
        .where(and(eq(attendance.employeeId, employeeId), sql`${attendance.date} >= ${hireDate.toISOString().slice(0, 10)}`, sql`${attendance.date} <= ${periodEnd.toISOString().slice(0, 10)}`));

    let validAttendanceDays = 0;
    let totalAbsences = 0;

    for (const record of allAttendanceRecords) {
        const timeIn = record.timeIn ? new Date(record.timeIn) : null;
        const shiftStartStr = record.shiftStart || '09:00:00';
        const [h, m] = shiftStartStr.split(':').map(Number);
        const date = new Date(record.date);
        const shiftStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);

        let minutesLate = 0;
        if (timeIn && timeIn > shiftStart) {
            minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
        }

        const status = record.status;
        if (status === 'Present' || status === 'Late') {
            validAttendanceDays++;
        } else if (status === 'Absent') {
            totalAbsences++;
        }
    }

    // Absences from hire = total working days from hire - valid attendance days
    totalAbsences = totalWorkingDaysFromHire - validAttendanceDays;

    const totalDaysAttended = validAttendanceDays;

    return {
        summary: {
            daysAttended,
            totalDaysAttended,
            lates: totalLates,
            absences,
            availableLeaves,
            totalHours: Math.round(totalHours * 100) / 100, // round to 2 decimals
            totalWorkingDays: calculateWorkingDays(effectiveStartDate, periodEnd),
        },
        records,
    };
}

// Helper function to calculate working days (weekdays) between two dates
function calculateWorkingDays(startDate: Date, endDate: Date): number {
    let workingDays = 0;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        // Monday to Friday (1-5)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            workingDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDays;
}

// Helper function to calculate break duration in hours from break string
function calculateBreakHours(breakStr: string): number {
    if (!breakStr || breakStr === '-') return 0;

    try {
        const parts = breakStr.split(' - ');
        if (parts.length !== 2) return 0;

        const [startStr, endStr] = parts;
        const [sh, sm] = startStr.split(':').map(Number);
        const [eh, em] = endStr.split(':').map(Number);

        const startMinutes = sh * 60 + (sm || 0);
        const endMinutes = eh * 60 + (em || 0);

        const breakMinutes = endMinutes - startMinutes;
        return Math.round((breakMinutes / 60) * 100) / 100; // round to 2 decimals
    } catch (e) {
        return 0;
    }
}

export async function getPastLeaveRequests(employeeId: string) {
    const db = await getDb();

    const result = await db
        .select({
            id: leaveRequests.id,
            leave_type: leaveRequests.leaveType,
            start_date: leaveRequests.startDate,
            end_date: leaveRequests.endDate,
            status: leaveRequests.status,
        })
        .from(leaveRequests)
        .where(eq(leaveRequests.employeeId, employeeId))
        .orderBy(desc(leaveRequests.startDate));

    return result.map(lr => ({
        id: lr.id,
        leave_type: lr.leave_type,
        startDate: format(new Date(lr.start_date), 'yyyy-MM-dd'),
        endDate: format(new Date(lr.end_date), 'yyyy-MM-dd'),
        status: lr.status,
    }));
}

export async function createLeaveRequest(data: {
    employeeId: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
}) {
    const db = await getDb();
    const { employeeId, leaveType, startDate, endDate, reason } = data;

    await db.insert(leaveRequests).values({
        employeeId,
        leaveType,
        startDate,
        endDate,
        reason,
    });

    return { success: true };
}

export async function getPayPeriods(employeeId: string): Promise<PayPeriodData[]> {
  const db = await getDb();

  // Fetch employee position to get daily rate
  const employeeResult = await db
    .select({ position: accounts.position })
    .from(accounts)
    .where(eq(accounts.id, employeeId));

  const employeePosition = employeeResult[0]?.position;
  let dailyRate = 0;

  if (employeePosition) {
    const positionResult = await db
      .select({ rate: positions.rate })
      .from(positions)
      .where(eq(positions.title, employeePosition));

    dailyRate = Number(positionResult[0]?.rate) || 0;
  }

  // Fetch payslips for the employee
  const payslipResults = await db
    .select()
    .from(payslips)
    .where(eq(payslips.employeeId, employeeId))
    .orderBy(desc(payslips.payDate));

  // Map payslip data to PayPeriodData format
  const data: PayPeriodData[] = await Promise.all(payslipResults.map(async (payslip, index) => {
    const periodDates = parsePayPeriod(payslip.payPeriod);
    let daysAttended = payslip.daysWorked || 0;

    if (periodDates) {
      daysAttended = await getDaysAttended(employeeId, periodDates.startDate, periodDates.endDate);
    }

    return {
      id: payslip.id,
      period: payslip.payPeriod,
      payDate: payslip.payDate as string, // Already in YYYY-MM-DD format from database
      dailyRate,
      earnings: [
        { name: "BASIC PAY", amount: Number(payslip.basicPay) },
        { name: "Overtime", amount: Number(payslip.overtime) },
        { name: "Night Differential", amount: Number(payslip.nightDifferential) },
        { name: "RH OT", amount: 0 }, // Not in payslips table, set to 0
        { name: "Special Holiday", amount: 0 }, // Not in payslips table, set to 0
        { name: "SP OT", amount: 0 }, // Not in payslips table, set to 0
        { name: "Salary Adjustment", amount: 0 }, // Not in payslips table, set to 0
        { name: "Allowances", amount: Number(payslip.allowances) },
        { name: "No. of Days", amount: daysAttended },
      ],
      deductions: [
        { name: "Late/Undertime", amount: 0 }, // Not in payslips table, set to 0
        { name: "SSS", amount: Number(payslip.sssDeduction) },
        { name: "Philhealth", amount: Number(payslip.philhealthDeduction) },
        { name: "Pag-Ibig", amount: Number(payslip.pagibigDeduction) },
        { name: "Tax", amount: Number(payslip.taxDeduction) },
        { name: "SSS Loan", amount: Number(payslip.sssLoan) },
        { name: "HDMF Loan", amount: Number(payslip.hdmfLoan) },
        { name: "Other Deduction", amount: Number(payslip.otherDeductions) },
        { name: "Company Loan", amount: Number(payslip.companyLoan) },
      ],
      net_pay: Number(payslip.netPay),
    };
  }));

  // Generate half-month periods from this month to a year later
  const today = new Date();
  const oneYearLater = subMonths(today, -12); // Add 12 months
  const periods: PayPeriodData[] = [];

  let idCounter = 1000; // Start from a high number to avoid conflicts with existing payslip ids

  for (let date = new Date(today); date <= oneYearLater; date = subMonths(date, -1)) { // Increment by month
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const midMonth = new Date(monthStart);
    midMonth.setDate(16); // 16th of the month

    // First half: 1st to 15th
    const firstHalfStart = monthStart;
    const firstHalfEnd = new Date(monthStart);
    firstHalfEnd.setDate(15);

    const firstHalfDays = await getDaysAttended(employeeId, firstHalfStart, firstHalfEnd);

    periods.push({
      id: idCounter++,
      period: `${format(firstHalfStart, 'MMM dd')} - ${format(firstHalfEnd, 'MMM dd, yyyy')}`,
      payDate: format(new Date(monthStart.getFullYear(), monthStart.getMonth(), 20), 'yyyy-MM-dd'),
      dailyRate,
      earnings: [
        { name: "BASIC PAY", amount: 0 },
        { name: "Overtime", amount: 0 },
        { name: "Night Differential", amount: 0 },
        { name: "RH OT", amount: 0 },
        { name: "Special Holiday", amount: 0 },
        { name: "SP OT", amount: 0 },
        { name: "Salary Adjustment", amount: 0 },
        { name: "Allowances", amount: 0 },
        { name: "No. of Days", amount: firstHalfDays },
      ],
      deductions: [],
      net_pay: 0,
    });

    // Second half: 16th to end of month
    const secondHalfStart = midMonth;
    const secondHalfEnd = monthEnd;

    const secondHalfDays = await getDaysAttended(employeeId, secondHalfStart, secondHalfEnd);

    periods.push({
      id: idCounter++,
      period: `${format(secondHalfStart, 'MMM dd')} - ${format(secondHalfEnd, 'MMM dd, yyyy')}`,
      payDate: format(new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 5), 'yyyy-MM-dd'),
      dailyRate,
      earnings: [
        { name: "BASIC PAY", amount: 0 },
        { name: "Overtime", amount: 0 },
        { name: "Night Differential", amount: 0 },
        { name: "RH OT", amount: 0 },
        { name: "Special Holiday", amount: 0 },
        { name: "SP OT", amount: 0 },
        { name: "Salary Adjustment", amount: 0 },
        { name: "Allowances", amount: 0 },
        { name: "No. of Days", amount: secondHalfDays },
      ],
      deductions: [],
      net_pay: 0,
    });
  }

  // Return only HR-generated payslip data
  return data;
}

export async function getSchedule(employeeId: string) {
    const db = await getDb();

    // Compute current week's Monday (local timezone)
    const today = new Date();
    const day = today.getDay(); // 0 (Sun) - 6 (Sat)
    const diffToMonday = (day + 6) % 7; // days since Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() - diffToMonday);

    // If today is Saturday or Sunday, show next week's schedule
    if (day === 0 || day === 6) {
        monday.setDate(monday.getDate() + 7);
    }

    // Build the 5 dates (Mon-Fri) as ISO strings yyyy-MM-dd
    const weekDates: string[] = [];
    for (let i = 0; i < 5; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        weekDates.push(format(d, 'yyyy-MM-dd'));
    }

    // Query schedule rows for the employee for those dates (include notes)
    const rows = await db
        .select({ date: schedules.date, shiftStart: schedules.shiftStart, shiftEnd: schedules.shiftEnd, notes: schedules.notes })
        .from(schedules)
        .where(and(eq(schedules.employeeId, employeeId), inArray(schedules.date, weekDates)))
        .orderBy(asc(schedules.date))
        .catch((error) => {
            console.error('Database query error:', error);
            throw error;
        });

    // Map rows to the client shape expected by ScheduleClientPage
    const items = rows.map(r => {
        // r.date may be a Date or string depending on driver; normalize to yyyy-MM-dd
        const dateStr = typeof r.date === 'string' ? r.date : format(new Date(r.date as any), 'yyyy-MM-dd');
        const dayName = new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });

        const formatTimeShort = (t: string | null | undefined) => {
            if (!t) return '-';
            // t expected like '09:00:00' or '09:00'
            const parts = String(t).split(':');
            if (parts.length >= 2) return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
            return String(t);
        };

        const timeIn = formatTimeShort(r.shiftStart as any);
        const timeOut = formatTimeShort(r.shiftEnd as any);

        // Calculate break time dynamically: 3 hours after shift start, 1 hour duration
        let breakStr = '-';
        try {
            if (r.shiftStart) {
                const [h, m] = String(r.shiftStart).split(':').map(Number);
                const shiftStartMinutes = h * 60 + m;
                const breakStartMinutes = shiftStartMinutes + (3 * 60); // 3 hours after start
                const breakEndMinutes = breakStartMinutes + 60; // 1 hour break

                const breakStartHour = Math.floor(breakStartMinutes / 60);
                const breakStartMin = breakStartMinutes % 60;
                const breakEndHour = Math.floor(breakEndMinutes / 60);
                const breakEndMin = breakEndMinutes % 60;

                const formatTime = (h: number, m: number) => `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                breakStr = `${formatTime(breakStartHour, breakStartMin)} - ${formatTime(breakEndHour, breakEndMin)}`;
            }
        } catch (e) {
            breakStr = '-';
        }

        // compute hours as decimal between shiftStart and shiftEnd
        let hours = 0;
        try {
            if (r.shiftStart && r.shiftEnd) {
                const [sh, sm] = String(r.shiftStart).split(':').map(Number);
                const [eh, em] = String(r.shiftEnd).split(':').map(Number);
                let minutes = (eh * 60 + (em || 0)) - (sh * 60 + (sm || 0));

                // Handle overnight shifts (when end time is next day)
                if (minutes <= 0) {
                    minutes += 24 * 60; // Add 24 hours in minutes
                }

                hours = Math.round((minutes / 60) * 100) / 100;
            }
        } catch (e) {
            hours = 0;
        }

        // Deduct actual break time if break exists
        const breakHours = calculateBreakHours(breakStr);
        hours -= breakHours;

        return {
            day: dayName,
            date: dateStr,
            timeIn,
            timeOut,
            break: breakStr,
            hours,
        };
    });

    return items;
}

/**
 * Publish schedule entries for employees for a given week.
 * scheduleItems: Array of { employeeId: string, shifts: string[] } where shifts is 5 items (Mon-Fri)
 * weekStart: ISO date string for the Monday of the week (yyyy-MM-dd)
 */
export async function publishSchedule(scheduleItems: { employeeId: string; shifts: string[]; breaks?: string[]; overtimeAllowed?: boolean[] }[], weekStart: string) {
    const db = await getDb();
    console.log('publishSchedule called with', { count: scheduleItems.length, weekStart });
    // Helper to normalize time strings like "9:00 - 17:00" into ["09:00:00","17:00:00"].
    const normalizeTime = (t: string) => {
        if (!t) return null;
        // Accept formats like "9:00 - 17:00" or "09:00 - 17:00"
        const parts = t.split('-').map(p => p.trim());
        if (parts.length !== 2) return null;
        const norm = (s: string) => {
            // remove am/pm if present
            const noMeridian = s.replace(/\s*(am|pm)$/i, '').trim();
            const [hhmm] = noMeridian.split(' ');
            const cols = hhmm.split(':').map(p => p.padStart(2, '0'));
            if (cols.length === 1) cols.push('00');
            return `${cols[0]}:${cols[1]}:00`;
        };
        try {
            return [norm(parts[0]), norm(parts[1])];
        } catch (e) {
            return null;
        }
    };

    const startDate = new Date(weekStart);
    if (Number.isNaN(startDate.getTime())) {
        throw new Error('Invalid week start date');
    }

    for (const item of scheduleItems) {
        const { employeeId, shifts } = item;
        for (let dayOffset = 0; dayOffset < 5; dayOffset++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + dayOffset);
            const isoDate = format(date, 'yyyy-MM-dd');

            const shiftStr = (shifts && shifts[dayOffset]) ? String(shifts[dayOffset]).trim() : '';
            if (!shiftStr || /^off$/i.test(shiftStr)) {
                // Skip OFF days; no schedule row created
                continue;
            }

            const times = normalizeTime(shiftStr);
            if (!times) {
                // If parsing fails, skip this entry
                continue;
            }

            const [shiftStart, shiftEnd] = times;
            // get break time string from scheduleItems if provided
            const breakStr = (item.breaks && item.breaks[dayOffset]) ? String(item.breaks[dayOffset]).trim() : null;
            // get overtime allowed flag from scheduleItems if provided
            const overtimeAllowed = (item.overtimeAllowed && item.overtimeAllowed[dayOffset]) ? item.overtimeAllowed[dayOffset] : false;

            // Check existing record
            const existing = await db.select().from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
            const notesValue = breakStr ? JSON.stringify({ break: breakStr }) : null;
            if (existing.length > 0) {
                await db.update(schedules)
                    .set({ shiftStart, shiftEnd, notes: notesValue })
                    .where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
            } else {
                await db.insert(schedules).values({ employeeId, date: isoDate, shiftStart, shiftEnd, notes: notesValue });
            }
        }
    }

    return { success: true };
}


export async function getPendingEmployeeApprovals() {
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            date_hired: accounts.dateHired,
        })
        .from(accounts)
        .where(eq(accounts.status, 'Pending Approval'));

    return result.map(a => ({
        id: a.id,
        employeeName: `${a.first_name} ${a.last_name}`,
        position: a.position,
        submittedBy: 'Olivia Chen', // Placeholder
        submissionDate: format(new Date(a.date_hired), 'yyyy-MM-dd')
    }));
}

export async function approveEmployee(employeeId: string): Promise<void> {
    const db = await getDb();
    await db.update(accounts)
        .set({ status: 'Active' })
        .where(eq(accounts.id, employeeId));
}

export async function rejectEmployee(employeeId: string): Promise<void> {
    const db = await getDb();
    await db.delete(accounts).where(eq(accounts.id, employeeId));
}

export async function getEmployeeName(employeeId: string): Promise<string> {
    const db = await getDb();

    const result = await db
        .select({
            first_name: accounts.firstName,
            last_name: accounts.lastName,
        })
        .from(accounts)
        .where(eq(accounts.id, employeeId));

    const employee = result[0];
    return employee ? `${employee.first_name} ${employee.last_name}` : "Unknown Employee";
}

export async function getEmployeeNumber(employeeId: string): Promise<string> {
    const db = await getDb();

    const result = await db
        .select({
            employeeNumber: accounts.employeeNumber,
        })
        .from(accounts)
        .where(eq(accounts.id, employeeId));

    const employee = result[0];
    return employee?.employeeNumber || "Unknown";
}

export async function getReportDetails(reportId: number) {
    // This is a placeholder as there is no reports table yet.
    return null;
}

export async function getHrPersonnel() {
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            managed_branches: accounts.managedBranches,
        })
        .from(accounts)
        .where(eq(accounts.role, 'HR'));

    return result.map(a => ({
        id: a.id,
        name: `${a.first_name} ${a.last_name}`,
        position: a.position,
        managed_branches: a.managed_branches || []
    }));
}

export async function getBranches() {
    const db = await getDb();

    const result = await db
        .select()
        .from(branches)
        .orderBy(asc(branches.name));

    return result;
}

export async function createBranch(branchName: string, coordinates: string): Promise<BranchRow> {
    const db = await getDb();

    try {
        const result = await db
            .insert(branches)
            .values({
                name: branchName,
                coordinates,
            })
            .returning();

        return result[0];
    } catch(e: any) {
        if (e.code === '23505') { // unique_violation
            throw new Error('A branch with this name already exists.');
        }
        throw e;
    }
}

export async function deleteBranch(branchId: number): Promise<void> {
    const db = await getDb();

    // Check if any HR personnel is assigned to this branch
    const branchResult = await db
        .select({ name: branches.name })
        .from(branches)
        .where(eq(branches.id, branchId));

    if (branchResult.length === 0) return;
    const branchName = branchResult[0].name;

    const hrResult = await db
        .select({ id: accounts.id })
        .from(accounts)
        .where(
            and(
                eq(accounts.role, 'HR'),
                sql`${branchName} = ANY(${accounts.managedBranches})`
            )
        );

    if (hrResult.length > 0) {
        throw new Error('This branch is currently assigned to HR personnel and cannot be deleted.');
    }

    await db.delete(branches).where(eq(branches.id, branchId));
}


export async function updateHrBranchAllocation(hrId: string, branchNames: string[]) {
    const db = await getDb();

    const result = await db
        .update(accounts)
        .set({ managedBranches: branchNames })
        .where(eq(accounts.id, hrId));

    return { success: (result.rowCount ?? 0) > 0 };
}


export async function updateEmployee(id: string, data: {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: string;
    dob: string;
    position: string;
    department: string;
    branch: string;
    hireDate: string;
    email: string;
}) {
    const db = await getDb();
    const { firstName, lastName, middleName, gender, dob, position, department, branch, hireDate, email } = data;

    const result = await db
        .update(accounts)
        .set({
            firstName,
            lastName,
            middleName,
            gender,
            dateOfBirth: dob,
            position,
            department,
            branch,
            dateHired: hireDate,
            email,
        })
        .where(eq(accounts.id, id));

    return {
        success: (result.rowCount ?? 0) > 0,
        message: (result.rowCount ?? 0) > 0 ? 'Employee updated successfully.' : 'Employee not found.'
    };
}


export async function getPositions() {
    const db = await getDb();

    const result = await db
        .select()
        .from(positions)
        .orderBy(asc(positions.title));

    return result;
}

export async function createPosition(title: string, rate: string): Promise<PositionRow> {
    const db = await getDb();

    try {
        const result = await db
            .insert(positions)
            .values({
                title,
                rate,
            })
            .returning();

        return result[0];
    } catch(e: any) {
        if (e.code === '23505') { // unique_violation
            throw new Error('A position with this title already exists.');
        }
        throw e;
    }
}

export async function deletePosition(positionId: number): Promise<void> {
    const db = await getDb();

    const positionResult = await db
        .select({ title: positions.title })
        .from(positions)
        .where(eq(positions.id, positionId));

    if (positionResult.length === 0) return;
    const positionTitle = positionResult[0].title;

    const accountResult = await db
        .select({ id: accounts.id })
        .from(accounts)
        .where(eq(accounts.position, positionTitle));

    if (accountResult.length > 0) {
        throw new Error('This position is currently assigned to employees and cannot be deleted.');
    }

    await db.delete(positions).where(eq(positions.id, positionId));
}

export async function getDepartmentsForBranch(branchName: string): Promise<string[]> {
    const db = await getDb();

    // Query distinct departments from accounts in that branch
    const result = await db
        .selectDistinct({ department: accounts.department })
        .from(accounts)
        .where(and(eq(accounts.branch, branchName), isNotNull(accounts.department)))
        .orderBy(asc(accounts.department));

    return result.map(r => r.department!);
}

export async function getDepartmentsForBranchById(branchId: number) {
    const db = await getDb();

    const result = await db
        .select({
            id: departments.id,
            name: departments.name,
            branchId: departments.branchId,
            createdAt: departments.createdAt,
            branch_name: branches.name,
        })
        .from(departments)
        .leftJoin(branches, eq(departments.branchId, branches.id))
        .where(eq(departments.branchId, branchId))
        .orderBy(asc(departments.name));

    return result;
}

export async function getPositionsForDepartment(departmentName: string): Promise<string[]> {
    const db = await getDb();

    // First, try to get positions from the position_departments allocation table
    const allocatedPositions = await db
        .select({ positionTitle: positions.title })
        .from(positionDepartments)
        .leftJoin(positions, eq(positionDepartments.positionId, positions.id))
        .leftJoin(departments, eq(positionDepartments.departmentId, departments.id))
        .where(eq(departments.name, departmentName))
        .orderBy(asc(positions.title));

    if (allocatedPositions.length > 0) {
        return allocatedPositions.map(r => r.positionTitle).filter(Boolean) as string[];
    }

    // Fallback: Get all positions associated with employees in that department (legacy)
    const result = await db
        .selectDistinct({ position: accounts.position })
        .from(accounts)
        .where(and(eq(accounts.department, departmentName), isNotNull(accounts.position)))
        .orderBy(asc(accounts.position));

    return result.map(r => r.position!).filter(Boolean);
}

export async function getDepartments() {
    const db = await getDb();

    const result = await db
        .select({
            id: departments.id,
            name: departments.name,
            branchId: departments.branchId,
            createdAt: departments.createdAt,
            branch_name: branches.name,
        })
        .from(departments)
        .leftJoin(branches, eq(departments.branchId, branches.id))
        .orderBy(asc(departments.name));

    return result;
}

export async function createDepartment(name: string, branchId: number): Promise<DepartmentRow> {
    const db = await getDb();

    try {
        const result = await db
            .insert(departments)
            .values({
                name,
                branchId,
            })
            .returning();

        return result[0] as DepartmentRow;
    } catch(e: any) {
        if (e.code === '23505') { // unique_violation
            throw new Error('A department with this name already exists in this branch.');
        }
        throw e;
    }
}

export async function deleteDepartment(departmentId: number): Promise<void> {
    const db = await getDb();

    const departmentResult = await db
        .select({ name: departments.name })
        .from(departments)
        .where(eq(departments.id, departmentId));

    if (departmentResult.length === 0) return;
    const departmentName = departmentResult[0].name;

    const accountResult = await db
        .select({ id: accounts.id })
        .from(accounts)
        .where(eq(accounts.department, departmentName));

    if (accountResult.length > 0) {
        throw new Error('This department is currently assigned to employees and cannot be deleted.');
    }

    await db.delete(departments).where(eq(departments.id, departmentId));
}

export async function getPositionDepartments() {
    const db = await getDb();

    const result = await db
        .select({
            id: positionDepartments.id,
            positionId: positionDepartments.positionId,
            departmentId: positionDepartments.departmentId,
            createdAt: positionDepartments.createdAt,
            positionTitle: positions.title,
            departmentName: departments.name,
            branchName: branches.name,
        })
        .from(positionDepartments)
        .leftJoin(positions, eq(positionDepartments.positionId, positions.id))
        .leftJoin(departments, eq(positionDepartments.departmentId, departments.id))
        .leftJoin(branches, eq(departments.branchId, branches.id))
        .orderBy(asc(positions.title));

    return result;
}

export async function allocatePositionToDepartment(positionId: number, departmentId: number): Promise<void> {
    const db = await getDb();

    try {
        await db.insert(positionDepartments).values({
            positionId,
            departmentId,
        });
    } catch(e: any) {
        if (e.code === '23505') { // unique_violation
            throw new Error('This position is already allocated to this department.');
        }
        throw e;
    }
}


export async function getAllDepartments() {
    const db = await getDb();

    const result = await db
        .select({
            id: departments.id,
            name: departments.name,
            branchId: departments.branchId,
            createdAt: departments.createdAt,
            branch_name: branches.name,
        })
        .from(departments)
        .leftJoin(branches, eq(departments.branchId, branches.id))
        .orderBy(asc(departments.name));

    return result;
}

export async function removePositionFromDepartment(allocationId: number): Promise<void> {
    const db = await getDb();

    // Check if any employees are using this position-department combination
    const allocationResult = await db
        .select({
            positionTitle: positions.title,
            departmentName: departments.name,
        })
        .from(positionDepartments)
        .leftJoin(positions, eq(positionDepartments.positionId, positions.id))
        .leftJoin(departments, eq(positionDepartments.departmentId, departments.id))
        .where(eq(positionDepartments.id, allocationId));

    if (allocationResult.length === 0) return;

    const { positionTitle, departmentName } = allocationResult[0];

    const accountResult = await db
        .select({ id: accounts.id })
        .from(accounts)
        .where(and(sql`${accounts.position} = ${positionTitle}`, sql`${accounts.department} = ${departmentName}`));

    if (accountResult.length > 0) {
        throw new Error('This position-department allocation is currently assigned to employees and cannot be removed.');
    }

    await db.delete(positionDepartments).where(eq(positionDepartments.id, allocationId));
}

export async function populateAttendanceRecords() {
    const db = await getDb();
    const now = new Date();

    // Get all employees from accounts table with their details
    const employees = await db.select({
        id: accounts.id,
        employeeNumber: accounts.employeeNumber,
        firstName: accounts.firstName,
        lastName: accounts.lastName,
        position: accounts.position,
        department: accounts.department,
        branch: accounts.branch,
        availableLeaves: accounts.availableLeaves,
        dateHired: accounts.dateHired
    }).from(accounts).where(eq(accounts.role, 'Employee'));

    for (const employee of employees) {
        const employeeId = employee.id;
        const availableLeaves = employee.availableLeaves || 0;

        // Get all attendance records for this employee, grouped by month
        const attendanceData = await db
            .select({
                date: attendance.date,
                timeIn: attendance.timeIn,
                timeOut: attendance.timeOut,
                status: attendance.status,
                hoursWorked: attendance.hoursWorked,
                shiftStart: schedules.shiftStart,
            })
            .from(attendance)
            .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
            .where(eq(attendance.employeeId, employeeId))
            .orderBy(attendance.date);

        // Group by period (YYYY-MM)
        const periodGroups: { [period: string]: typeof attendanceData } = {};
        for (const record of attendanceData) {
            const date = new Date(record.date);
            const period = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (!periodGroups[period]) {
                periodGroups[period] = [];
            }
            periodGroups[period].push(record);
        }

        // Process each period
        for (const [period, records] of Object.entries(periodGroups)) {
            let daysAttended = 0;
            let lates = 0;
            let absences = 0;
            let totalWorkHours = 0;

            for (const record of records) {
                const timeIn = record.timeIn ? new Date(record.timeIn) : null;
                const shiftStartStr = record.shiftStart || '09:00:00';
                const [h, m] = shiftStartStr.split(':').map(Number);
                const date = new Date(record.date);
                const shiftStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);

                let minutesLate = 0;
                if (timeIn && timeIn > shiftStart) {
                    minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
                }

                const status = record.status;
                if (status === 'Present' || status === 'Late') {
                    daysAttended++;
                    if (status === 'Late') {
                        lates += minutesLate;
                    }
                } else if (status === 'Absent') {
                    absences++;
                }

                totalWorkHours += Number(record.hoursWorked) || 0;
            }

            // Calculate total working days in period (weekdays)
            const [year, month] = period.split('-').map(Number);
            const periodStart = new Date(year, month - 1, 1);
            const periodEnd = new Date(year, month, 0); // last day of month
            const totalWorkingDays = calculateWorkingDays(periodStart, periodEnd);

            // Absences = total working days - days attended (since absences are already counted above)
            absences = totalWorkingDays - daysAttended;

            // Calculate total working days from hire date +1 to now (excluding weekends)
            const hireDate = new Date(employee.dateHired || now);
            const adjustedHireDate = new Date(hireDate.getTime() + 24 * 60 * 60 * 1000);
            const totalDaysAttended = calculateWorkingDays(adjustedHireDate, now);

            // Upsert into attendance_records with employee details
            await db.insert(attendanceRecords).values({
                employeeId,
                employeeNumber: employee.employeeNumber,
                firstName: employee.firstName,
                lastName: employee.lastName,
                position: employee.position,
                department: employee.department,
                branch: employee.branch,
                period,
                daysAttended,
                totalDaysAttended,
                lates,
                absences,
                availableLeaves,
                totalWorkHours: String(Math.round(totalWorkHours * 100) / 100),
            }).onConflictDoUpdate({
                target: [attendanceRecords.employeeId, attendanceRecords.period],
                set: {
                    employeeNumber: employee.employeeNumber,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    position: employee.position,
                    department: employee.department,
                    branch: employee.branch,
                    daysAttended,
                    totalDaysAttended,
                    lates,
                    absences,
                    availableLeaves,
                    totalWorkHours: String(Math.round(totalWorkHours * 100) / 100),
                    updatedAt: sql`NOW()`,
                },
            });
        }
    }

    console.log('Attendance records populated successfully');
}

// Helper function to parse pay period string into start and end dates
function parsePayPeriod(period: string): { startDate: Date; endDate: Date } | null {
    // Expected format: "MMM dd - MMM dd, yyyy" e.g., "Jan 01 - Jan 15, 2023"
    const match = period.match(/^(\w{3}) (\d{2}) - (\w{3}) (\d{2}), (\d{4})$/);
    if (!match) return null;

    const [, startMonth, startDay, endMonth, endDay, year] = match;
    const monthNames = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const startDate = new Date(parseInt(year), monthNames[startMonth as keyof typeof monthNames], parseInt(startDay));
    const endDate = new Date(parseInt(year), monthNames[endMonth as keyof typeof monthNames], parseInt(endDay));

    return { startDate, endDate };
}

// Helper function to get days attended for a pay period from attendance records
async function getDaysAttended(employeeId: string, startDate: Date, endDate: Date): Promise<number> {
    const db = await getDb();

    const attendanceRecords = await db
        .select({
            date: attendance.date,
            timeIn: attendance.timeIn,
            timeOut: attendance.timeOut,
            status: attendance.status,
            shiftStart: schedules.shiftStart,
        })
        .from(attendance)
        .leftJoin(schedules, and(eq(attendance.employeeId, schedules.employeeId), eq(attendance.date, schedules.date)))
        .where(and(
            eq(attendance.employeeId, employeeId),
            sql`${attendance.date} >= ${startDate.toISOString().slice(0, 10)}`,
            sql`${attendance.date} <= ${endDate.toISOString().slice(0, 10)}`
        ));

    let daysAttended = 0;

    for (const record of attendanceRecords) {
        const timeIn = record.timeIn ? new Date(record.timeIn) : null;
        const shiftStartStr = record.shiftStart || '09:00:00';
        const [h, m] = shiftStartStr.split(':').map(Number);
        const date = new Date(record.date);
        const shiftStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);

        let minutesLate = 0;
        if (timeIn && timeIn > shiftStart) {
            minutesLate = Math.floor((timeIn.getTime() - shiftStart.getTime()) / (1000 * 60));
        }

        if (record.status === 'Present' || record.status === 'Late') {
            daysAttended++;
        }
    }

    return daysAttended;
}

export async function getEmployeeAbsenceSummary() {
    const db = await getDb();

    // Get all employees with their hire dates
    const employees = await db
        .select({
            id: accounts.id,
            employeeNumber: accounts.employeeNumber,
            firstName: accounts.firstName,
            lastName: accounts.lastName,
            position: accounts.position,
            department: accounts.department,
            branch: accounts.branch,
            dateHired: accounts.dateHired,
        })
        .from(accounts)
        .where(and(eq(accounts.role, 'Employee'), eq(accounts.status, 'Active')));

    const absenceSummaries = await Promise.all(
        employees.map(async (employee) => {
            const hireDate = new Date(employee.dateHired);
            const now = new Date();

            // Get all attendance records for this employee from hire date to now
            const attendanceRecords = await db
                .select({
                    date: attendance.date,
                    status: attendance.status,
                    timeIn: attendance.timeIn,
                })
                .from(attendance)
                .where(and(
                    eq(attendance.employeeId, employee.id),
                    sql`${attendance.date} >= ${hireDate.toISOString().slice(0, 10)}`,
                    sql`${attendance.date} <= ${now.toISOString().slice(0, 10)}`
                ))
                .orderBy(attendance.date);

            // Calculate total working days from hire date to now (weekdays only)
            const totalWorkingDays = calculateWorkingDays(hireDate, now);

            // Count absences - only where status is explicitly 'Absent'
            let totalAbsences = 0;
            const absenceDates: string[] = [];

            for (const record of attendanceRecords) {
                if (record.status === 'Absent') {
                    totalAbsences++;
                    absenceDates.push(record.date as string);
                }
            }

            return {
                id: employee.id,
                employeeNumber: employee.employeeNumber,
                name: `${employee.firstName} ${employee.lastName}`,
                position: employee.position,
                department: employee.department,
                branch: employee.branch,
                dateHired: employee.dateHired,
                totalWorkingDays,
                totalAbsences,
                absenceDates,
                absenceRate: totalWorkingDays > 0 ? Math.round((totalAbsences / totalWorkingDays) * 100 * 100) / 100 : 0, // percentage with 2 decimal places
            };
        })
    );

    return absenceSummaries;
}
