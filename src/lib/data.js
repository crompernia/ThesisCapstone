/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */
'use server';

import { query } from './db';
import { format } from 'date-fns';

export async function getHRDashboardData() {
    const totalEmployeesResult = await query("SELECT COUNT(*) FROM accounts WHERE role = 'Employee'");
    const totalEmployees = totalEmployeesResult.rows[0].count || '0';

    const pendingLeaveRequestsResult = await query("SELECT COUNT(*) FROM leave_requests WHERE status = 'Pending'");
    const pendingLeaveRequests = pendingLeaveRequestsResult.rows[0].count || '0';

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
    const result = await query(`
        SELECT a.id, a.title, a.content, a.status, a.created_at, acc.first_name, acc.last_name
        FROM announcements a
        JOIN accounts acc ON a.posted_by = acc.id
        ORDER BY a.created_at DESC
    `);
    return result.rows.map(a => ({
        ...a,
        postedBy: `${a.first_name} ${a.last_name}`,
        date: format(new Date(a.created_at), 'yyyy-MM-dd')
    }));
}

export async function createAnnouncement(title, content, status) {
    const id = 'HR-001'; // In a real app, this should come from session
    await query(
        'INSERT INTO announcements (title, content, status, posted_by) VALUES ($1, $2, $3, $4)',
        [title, content, status, id]
    );
}

export async function deleteAnnouncement(id) {
    await query('DELETE FROM announcements WHERE id = $1', [id]);
}

export async function getDailyAttendanceData(date) {
    // This is a placeholder as there is no attendance table yet.
    return [];
}


export async function getEmployees() {
    const result = await query(`
        SELECT id, first_name, last_name, position, branch, status
        FROM accounts
        WHERE role = 'Employee' AND status != 'Pending Approval'
    `);
    return result.rows.map(a => ({
        id: a.id,
        name: `${a.first_name} ${a.last_name}`,
        position: a.position,
        branch: a.branch,
        status: a.status
    }));
}

export async function getEmployeeById(id) {
    const result = await query('SELECT * FROM accounts WHERE id = $1', [id]);
    const employee = result.rows[0];
    if (!employee) return null;

    return {
        ...employee,
        name: `${employee.first_name} ${employee.last_name}`,
        date_hired: format(new Date(employee.date_hired), 'yyyy-MM-dd'),
        date_of_birth: format(new Date(employee.date_of_birth), 'yyyy-MM-dd'),
    };
}


export async function deleteEmployee(id) {
    const result = await query('DELETE FROM accounts WHERE id = $1', [id]);
    return result.rowCount > 0;
}

export async function getLeaveRequests() {
    const result = await query(`
        SELECT lr.id, lr.leave_type, lr.start_date, lr.end_date, lr.reason, lr.status,
               a.id as "employeeId", a.first_name, a.last_name
        FROM leave_requests lr
        JOIN accounts a ON lr.employee_id = a.id
        ORDER BY lr.created_at DESC
    `);
    return result.rows.map(lr => ({
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

export async function updateLeaveRequestStatus(requestId, status) {
    await query('UPDATE leave_requests SET status = $1 WHERE id = $2', [status, requestId]);
}

export async function getEmployeesWithPayslipStatus() {
     const result = await query(`
        SELECT id, first_name, last_name, "position", department, sss_number, philhealth_number, pagibig_number, tin
        FROM accounts
        WHERE role = 'Employee'
    `);
    
    return result.rows.map(a => {
        const hasBenefits = a.sss_number && a.philhealth_number && a.pagibig_number && a.tin;
        return {
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            payslipStatus: 'Pending', // No payslip table yet
            benefitsStatus: hasBenefits ? 'Complete' : 'Incomplete',
        };
    });
}

export async function getEmployeesForScheduling() {
    const result = await query(`
        SELECT id, first_name, last_name FROM accounts WHERE role = 'Employee' AND status = 'Active'
    `);
    return result.rows.map(a => ({
        id: a.id,
        name: `${a.first_name} ${a.last_name}`,
        shift: '9:00 - 17:00' // Default shift
    }));
}
    // Fetch Employee Data from Database
export async function getEmployeeDashboardData(employeeid) {
    const result = await query('SELECT id, first_name, last_name, "position", department, branch, email FROM accounts WHERE id = $1', [employeeid]);
    const employee = result.rows[0];
    
    if (!employee) {
        return { employee: { name: 'Employee Not Found' }, announcements: [] };
    }

    const announcementsResult = await query("SELECT title, content, created_at FROM announcements WHERE status = 'Published' ORDER BY created_at DESC LIMIT 5");
    
    return {
        employee: {
            employeeId: employee.id,
            name: `${employee.first_name} ${employee.last_name}`,
            position: employee.position,
            department: employee.department,
            branch: employee.branch,
            email: employee.email,
        },
        announcements: announcementsResult.rows.map(a => ({
            id: a.id,
            title: a.title,
            content: a.content,
            date: format(new Date(a.created_at), 'MMMM d, yyyy')
        }))
    };
}

export async function getAttendanceData(employeeId) {
    // This is a placeholder as there is no attendance table yet.
    return {
        summary: { daysAttended: 0, lates: 0, absences: 0, totalHours: 0, availableLeaves: 0 },
        records: []
    };
}

export async function getPastLeaveRequests(employeeId) {
    const result = await query(
        'SELECT id, leave_type, start_date, end_date, status FROM leave_requests WHERE employee_id = $1 ORDER BY start_date DESC',
        [employeeId]
    );

    return result.rows.map(lr => ({
        id: lr.id,
        leave_type: lr.leave_type,
        startDate: format(new Date(lr.start_date), 'yyyy-MM-dd'),
        endDate: format(new Date(lr.end_date), 'yyyy-MM-dd'),
        status: lr.status,
    }));
}

export async function createLeaveRequest(data) {
    const { employeeId, leaveType, startDate, endDate, reason } = data;
    await query(
        'INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason) VALUES ($1, $2, $3, $4, $5)',
        [employeeId, leaveType, startDate, endDate, reason]
    );
    return { success: true };
}

export async function getPayPeriods(employeeId) {
    // This is a placeholder as there is no payslip table yet.
    return [];
}

export async function getSchedule(employeeId) {
    // This is a placeholder as there is no schedule table yet.
    return [];
}


export async function getPendingEmployeeApprovals() {
     const result = await query(`
        SELECT id, first_name, last_name, "position", date_hired
        FROM accounts
        WHERE status = 'Pending Approval'
    `);
    return result.rows.map(a => ({
        id: a.id,
        employeeName: `${a.first_name} ${a.last_name}`,
        position: a.position,
        submittedBy: 'Olivia Chen', // Placeholder
        submissionDate: format(new Date(a.date_hired), 'yyyy-MM-dd')
    }));
}

export async function approveEmployee(employeeId) {
    await query("UPDATE accounts SET status = 'Active' WHERE id = $1", [employeeId]);
}

export async function rejectEmployee(employeeId) {
    await query("DELETE FROM accounts WHERE id = $1", [employeeId]);
}

export async function getEmployeeName(employeeId) {
    const result = await query('SELECT first_name, last_name FROM accounts WHERE id = $1', [employeeId]);
    const employee = result.rows[0];
    return employee ? `${employee.first_name} ${employee.last_name}` : "Unknown Employee";
}

export async function getReportDetails(reportId) {
    // This is a placeholder as there is no reports table yet.
    return null;
}

export async function getHrPersonnel() {
    const result = await query(`
        SELECT id, first_name, last_name, "position", managed_branches
        FROM accounts WHERE role = 'HR'
    `);
    return result.rows.map(a => ({
        id: a.id,
        name: `${a.first_name} ${a.last_name}`,
        position: a.position,
        managed_branches: a.managed_branches || []
    }));
}

export async function getBranches() {
    const result = await query('SELECT id, name, coordinates FROM branches ORDER BY name');
    return result.rows;
}

export async function createBranch(branchName, coordinates) {
    try {
        const result = await query(
            'INSERT INTO branches (name, coordinates) VALUES ($1, $2) RETURNING *',
            [branchName, coordinates]
        );
        return result.rows[0];
    } catch(e) {
        if (e.code === '23505') { // unique_violation
            throw new Error('A branch with this name already exists.');
        }
        throw e;
    }
}

export async function deleteBranch(branchId) {
    // Check if any HR personnel is assigned to this branch
    const branchResult = await query('SELECT name FROM branches WHERE id = $1', [branchId]);
    if (branchResult.rowCount === 0) return;
    const branchName = branchResult.rows[0].name;

    const hrResult = await query("SELECT 1 FROM accounts WHERE role = 'HR' AND $1 = ANY(managed_branches)", [branchName]);
    if (hrResult.rowCount > 0) {
        throw new Error('This branch is currently assigned to HR personnel and cannot be deleted.');
    }
    await query('DELETE FROM branches WHERE id = $1', [branchId]);
}


export async function updateHrBranchAllocation(hrId, branches) {
    const result = await query(
        'UPDATE accounts SET managed_branches = $1 WHERE id = $2',
        [branches, hrId]
    );
    return { success: result.rowCount > 0 };
}


export async function updateEmployee(id, data) {
    const { firstName, lastName, middleName, gender, dob, position, department, branch, hireDate, email } = data;
    const result = await query(`
        UPDATE accounts SET
            first_name = $1, last_name = $2, middle_name = $3, gender = $4,
            date_of_birth = $5, "position" = $6, department = $7, branch = $8,
            date_hired = $9, email = $10
        WHERE id = $11
    `, [firstName, lastName, middleName, gender, dob, position, department, branch, hireDate, email, id]);
    
    return { success: result.rowCount > 0, message: result.rowCount > 0 ? 'Employee updated successfully.' : 'Employee not found.' };
}


export async function getPositions() {
    const result = await query('SELECT id, title, rate FROM positions ORDER BY title');
    return result.rows;
}

export async function createPosition(title, rate) {
    try {
        const result = await query(
            'INSERT INTO positions (title, rate) VALUES ($1, $2) RETURNING *',
            [title, rate]
        );
        return result.rows[0];
    } catch(e) {
        if (e.code === '23505') { // unique_violation
            throw new Error('A position with this title already exists.');
        }
        throw e;
    }
}

export async function deletePosition(positionId) {
    const positionResult = await query('SELECT title FROM positions WHERE id = $1', [positionId]);
    if (positionResult.rowCount === 0) return;
    const positionTitle = positionResult.rows[0].title;

    const accountResult = await query("SELECT 1 FROM accounts WHERE position = $1", [positionTitle]);
    if (accountResult.rowCount > 0) {
        throw new Error('This position is currently assigned to employees and cannot be deleted.');
    }
    await query('DELETE FROM positions WHERE id = $1', [positionId]);
}

export async function getDepartmentsForBranch(branchName) {
    // This assumes a separate 'departments' table or similar structure.
    // For now, let's query distinct departments from accounts in that branch.
    const result = await query(
        'SELECT DISTINCT department FROM accounts WHERE branch = $1 AND department IS NOT NULL ORDER BY department',
        [branchName]
    );
    return result.rows.map(r => r.department);
}

export async function getPositionsForDepartment(departmentName) {
    // This is a simplification. A real app might have a departments_positions link table.
    // Here we get all positions associated with employees in that department.
    const result = await query(
        'SELECT DISTINCT "position" FROM accounts WHERE department = $1 AND "position" IS NOT NULL ORDER BY "position"',
        [departmentName]
    );
    return result.rows.map(r => r.position);
}
