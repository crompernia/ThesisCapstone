/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */
'use server';

import { getDb } from './db';
import { format } from 'date-fns';
import { eq, and, desc, sql, inArray, ne, isNotNull, asc } from 'drizzle-orm';
import * as schema from './schema';
const { accounts, announcements, leaveRequests, branches, positions, schedules } = schema;

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

    // Mocking some stats as there's no table for them yet
    const stats = [
        { title: 'Total Employees', value: String(totalEmployees), change: '' },
        { title: 'On Time Percentage', value: `0%`, change: '' }, // No attendance data yet
        { title: 'Pending Leave Requests', value: String(pendingLeaveRequests), change: '' },
    ];

    // No activity log table yet
    return {
        stats,
        recentActivities: []
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

export async function createAnnouncement(title: string, content: string, status: string): Promise<void> {
    const db = await getDb();
    const id = 'HR-001'; // In a real app, this should come from session

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
    // This is a placeholder as there is no attendance table yet.
    // Return employee data with mock attendance information
    const db = await getDb();

    const result = await db
        .select({
            id: accounts.id,
            employeeNumber: accounts.employeeNumber,
            first_name: accounts.firstName,
            last_name: accounts.lastName,
            position: accounts.position,
            branch: accounts.branch,
        })
        .from(accounts)
        .where(and(eq(accounts.role, 'Employee'), eq(accounts.status, 'Active')));

    return result.map(a => ({
        id: a.id,
        employeeNumber: a.employeeNumber,
        name: `${a.first_name} ${a.last_name}`,
        position: a.position,
        branch: a.branch,
        timeIn: '08:00 AM',
        timeOut: '05:00 PM',
        status: 'Present'
    }));
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

    return result.map(a => {
        const hasBenefits = a.sss_number && a.philhealth_number && a.pagibig_number && a.tin;
        return {
            id: a.id,
            employeeNumber: a.employee_number,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            payslipStatus: 'Pending', // No payslip table yet
            benefitsStatus: hasBenefits ? 'Complete' : 'Incomplete',
        };
    });
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
    // This is a placeholder as there is no attendance table yet.
    return {
        summary: { daysAttended: 0, lates: 0, absences: 0, totalHours: 0, availableLeaves: 0 },
        records: []
    };
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
  // This is a placeholder as there is no payslip table yet.
  const data: PayPeriodData[] = [
    {
      id: 1,
      period: "January 2025",
      payDate: "2025-01-31",
      earnings: [
        { name: "Daily Rate", amount: 885 },
        { name: "No. of Days", amount: 0 },
        { name: "BASIC PAY", amount: 8850},
        { name: "Overtime", amount: 0 },
        { name: "Night Differential", amount: 0 },
        { name: "RH OT", amount: 0 },
        { name: "Special Holiday", amount: 0 },
        { name: "SP OT", amount: 0 },
        { name: "Salary Adjustment", amount: 0 },
        { name: "Allowances", amount: 0 },
      ],
      deductions: [
        { name: "Late/Undertime", amount: 0 },
        { name: "SSS", amount: 0 },
        { name: "Philhealth", amount: 0 },
        { name: "Pag-Ibig", amount: 0 },
        { name: "Tax", amount: 0 },
        { name: "SSS Loan", amount: 700 },
        { name: "HDMF Loan", amount: 0 },
        { name: "Company Deduction", amount: 0 },
        { name: "Company Loan", amount: 1145 },
      ],
      net_pay: 0, 
    },
    {
      id: 2,
      period: "February 2025",
      payDate: "2025-02-31",
      earnings: [
        { name: "Daily Rate", amount: 0 },
        { name: "No. of Days", amount: 0 },
        { name: "BASIC PAY", amount: 100 },
        { name: "Overtime", amount: 0 },
        { name: "Night Differential", amount: 0 },
        { name: "RH OT", amount: 0 },
        { name: "Special Holiday", amount: 0 },
        { name: "SP OT", amount: 0 },
        { name: "Salary Adjustment", amount: 0 },
        { name: "Allowances", amount: 0 },
      ],
      deductions: [
        { name: "Late/Undertime", amount: 0 },
        { name: "SSS", amount: 0 },
        { name: "Philhealth", amount: 0 },
        { name: "Tax", amount: 0 },
        { name: "SSS Loan", amount: 0 },
        { name: "HDMF Loan", amount: 0 },
        { name: "Company Deduction", amount: 0 },
        { name: "Company Loan", amount: 0 },
      ],
      net_pay: 0, 
    },
]

  // Calculate net_pay dynamically for each pay period
  const excludedEarnings = ["Daily Rate", "No. of Days"];

data.forEach((period) => {
  const totalEarnings = period.earnings.reduce((sum, e) => {
    return excludedEarnings.includes(e.name) ? sum : sum + e.amount;
  }, 0);

  const totalDeductions = period.deductions.reduce((sum, d) => sum + d.amount, 0);
  period.net_pay = totalEarnings - totalDeductions;
});

  return data;
}

export async function getSchedule(employeeId: string) {
    // This is a placeholder as there is no schedule table yet.
    return [];
}

/**
 * Publish schedule entries for employees for a given week.
 * scheduleItems: Array of { employeeId: string, shifts: string[] } where shifts is 5 items (Mon-Fri)
 * weekStart: ISO date string for the Monday of the week (yyyy-MM-dd)
 */
export async function publishSchedule(scheduleItems: { employeeId: string; shifts: string[] }[], weekStart: string) {
    const db = await getDb();
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

            // Check existing record
            const existing = await db.select().from(schedules).where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
            if (existing.length > 0) {
                await db.update(schedules)
                    .set({ shiftStart, shiftEnd, notes: null })
                    .where(and(eq(schedules.employeeId, employeeId), eq(schedules.date, isoDate)));
            } else {
                await db.insert(schedules).values({ employeeId, date: isoDate, shiftStart, shiftEnd });
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

export async function getPositionsForDepartment(departmentName: string): Promise<string[]> {
    const db = await getDb();

    // Get all positions associated with employees in that department
    const result = await db
        .selectDistinct({ position: accounts.position })
        .from(accounts)
        .where(and(eq(accounts.department, departmentName), isNotNull(accounts.position)))
        .orderBy(asc(accounts.position));

    return result.map(r => r.position!);
}
