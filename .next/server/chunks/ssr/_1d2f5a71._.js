module.exports = {

"[project]/src/lib/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */ /* __next_internal_action_entry_do_not_use__ [{"002dd23120083517493f1856b5ce3e27ca1098d244":"getEmployeesWithPayslipStatus","0041d2031c64a9612535dcab2138817eeef5f5974c":"getHRDashboardData","00651499873cf7b226d6bebda46391ddb16c9e3017":"getBranches","0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals","006f92dd1eaec6e537e91dc9dec624243ee6afc955":"getHrPersonnel","0081b652a1ba97ae17200b5330a84c1eaee2045820":"getPastAnnouncements","009e1e55ed3679817775f3fa1467d6a8d3d8736c4a":"getPositions","00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524":"getLeaveRequests","00c619ec02afa7d57568b4e0406ecec6a6bf21e12a":"getEmployees","00d5a8089689a75a56fcc38e7013d6855f6b64deb6":"getEmployeesForScheduling","400c24efbdff8ad0edbd723316ed5350a26ca81947":"approveEmployee","402bf722be4a91aa4ab56f119fd6bbe1240abba9d6":"deleteBranch","40360376d7fc3085764bf086e59364b9a7bd931021":"getAttendanceData","403bd6deaf58cedd1f69830ca2372388b1774aab05":"rejectEmployee","405c3db62c447e59c0ae7044461282afdf964ae1bd":"getEmployeeName","405d0bc438bbb2c7f72de945affb8287da8e3ec894":"getDepartmentsForBranch","406a1f92adca3011402ab7c759c72a0873cf50a660":"deleteAnnouncement","40885e633df6cf5d24407734484d3a4bcc7bc878e0":"getPastLeaveRequests","4098d8639b4d7e181c4a232b77c397aee879de1de4":"getPositionsForDepartment","40a5b75da077963d47ebe0f5fc53e2a123ce19ae24":"getDailyAttendanceData","40a69a957b01cb08f497843c9138b9020dea342972":"deletePosition","40b0eb7305a3d24b1488b76f6edba4bab27c969bfe":"getSchedule","40b7b79cef1785e3c75ae17348edfad469c103bb85":"getEmployeeDashboardData","40d9a51fb28edbd77052634e1d4229df7421a16ff4":"deleteEmployee","40e36f9c74786f4cdb1a562f7c79abdf9440a06d44":"getPayPeriods","40e89487447e1f133bfc1c734cc2338626fb053105":"createLeaveRequest","40ed5a75d32568df3e02e1d7138130c11b0fa518ff":"getEmployeeById","40fdc91fc4350406f04eb4a57938354df3e9a76bac":"getReportDetails","6034bd75e3ee5334cb7cb149ba648ab4d639d921dd":"updateHrBranchAllocation","604206acd9d9cff37b360a36edb47864916be42ac7":"updateEmployee","6093911139f7f04c7d4349f18c45e70c1cd12710b1":"createPosition","609822123b4518f2a5ebec8d5029d0aa257facd731":"createBranch","60a9cb6eb3ceaacad191d5184a4122349a0d55217a":"updateLeaveRequestStatus","70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177":"createAnnouncement"},"",""] */ __turbopack_context__.s({
    "approveEmployee": (()=>approveEmployee),
    "createAnnouncement": (()=>createAnnouncement),
    "createBranch": (()=>createBranch),
    "createLeaveRequest": (()=>createLeaveRequest),
    "createPosition": (()=>createPosition),
    "deleteAnnouncement": (()=>deleteAnnouncement),
    "deleteBranch": (()=>deleteBranch),
    "deleteEmployee": (()=>deleteEmployee),
    "deletePosition": (()=>deletePosition),
    "getAttendanceData": (()=>getAttendanceData),
    "getBranches": (()=>getBranches),
    "getDailyAttendanceData": (()=>getDailyAttendanceData),
    "getDepartmentsForBranch": (()=>getDepartmentsForBranch),
    "getEmployeeById": (()=>getEmployeeById),
    "getEmployeeDashboardData": (()=>getEmployeeDashboardData),
    "getEmployeeName": (()=>getEmployeeName),
    "getEmployees": (()=>getEmployees),
    "getEmployeesForScheduling": (()=>getEmployeesForScheduling),
    "getEmployeesWithPayslipStatus": (()=>getEmployeesWithPayslipStatus),
    "getHRDashboardData": (()=>getHRDashboardData),
    "getHrPersonnel": (()=>getHrPersonnel),
    "getLeaveRequests": (()=>getLeaveRequests),
    "getPastAnnouncements": (()=>getPastAnnouncements),
    "getPastLeaveRequests": (()=>getPastLeaveRequests),
    "getPayPeriods": (()=>getPayPeriods),
    "getPendingEmployeeApprovals": (()=>getPendingEmployeeApprovals),
    "getPositions": (()=>getPositions),
    "getPositionsForDepartment": (()=>getPositionsForDepartment),
    "getReportDetails": (()=>getReportDetails),
    "getSchedule": (()=>getSchedule),
    "rejectEmployee": (()=>rejectEmployee),
    "updateEmployee": (()=>updateEmployee),
    "updateHrBranchAllocation": (()=>updateHrBranchAllocation),
    "updateLeaveRequestStatus": (()=>updateLeaveRequestStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function getHRDashboardData() {
    const totalEmployeesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("SELECT COUNT(*) FROM accounts WHERE role = 'Employee'");
    const totalEmployees = totalEmployeesResult.rows[0].count || '0';
    const pendingLeaveRequestsResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("SELECT COUNT(*) FROM leave_requests WHERE status = 'Pending'");
    const pendingLeaveRequests = pendingLeaveRequestsResult.rows[0].count || '0';
    // Mocking some stats as there's no table for them yet
    const stats = [
        {
            title: 'Total Employees',
            value: String(totalEmployees),
            change: ''
        },
        {
            title: 'On Time Percentage',
            value: `0%`,
            change: ''
        },
        {
            title: 'Pending Leave Requests',
            value: String(pendingLeaveRequests),
            change: ''
        }
    ];
    // No activity log table yet
    return {
        stats,
        recentActivities: []
    };
}
async function getPastAnnouncements() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT a.id, a.title, a.content, a.status, a.created_at, acc.first_name, acc.last_name
        FROM announcements a
        JOIN accounts acc ON a.posted_by = acc.id
        ORDER BY a.created_at DESC
    `);
    return result.rows.map((a)=>({
            ...a,
            postedBy: `${a.first_name} ${a.last_name}`,
            date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.created_at), 'yyyy-MM-dd')
        }));
}
async function createAnnouncement(title, content, status) {
    const id = 'HR-001'; // In a real app, this should come from session
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('INSERT INTO announcements (title, content, status, posted_by) VALUES ($1, $2, $3, $4)', [
        title,
        content,
        status,
        id
    ]);
}
async function deleteAnnouncement(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('DELETE FROM announcements WHERE id = $1', [
        id
    ]);
}
async function getDailyAttendanceData(date) {
    // This is a placeholder as there is no attendance table yet.
    return [];
}
async function getEmployees() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT id, first_name, last_name, position, branch, status
        FROM accounts
        WHERE role = 'Employee' AND status != 'Pending Approval'
    `);
    return result.rows.map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            branch: a.branch,
            status: a.status
        }));
}
async function getEmployeeById(id) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT * FROM accounts WHERE id = $1', [
        id
    ]);
    const employee = result.rows[0];
    if (!employee) return null;
    return {
        ...employee,
        name: `${employee.first_name} ${employee.last_name}`,
        date_hired: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(employee.date_hired), 'yyyy-MM-dd'),
        date_of_birth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(employee.date_of_birth), 'yyyy-MM-dd')
    };
}
async function deleteEmployee(id) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('DELETE FROM accounts WHERE id = $1', [
        id
    ]);
    return result.rowCount > 0;
}
async function getLeaveRequests() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT lr.id, lr.leave_type, lr.start_date, lr.end_date, lr.reason, lr.status,
               a.id as "employeeId", a.first_name, a.last_name
        FROM leave_requests lr
        JOIN accounts a ON lr.employee_id = a.id
        ORDER BY lr.created_at DESC
    `);
    return result.rows.map((lr)=>({
            id: lr.id,
            employeeId: lr.employeeId,
            employeeName: `${lr.first_name} ${lr.last_name}`,
            leave_type: lr.leave_type,
            startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.start_date), 'yyyy-MM-dd'),
            endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.end_date), 'yyyy-MM-dd'),
            reason: lr.reason,
            status: lr.status
        }));
}
async function updateLeaveRequestStatus(requestId, status) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('UPDATE leave_requests SET status = $1 WHERE id = $2', [
        status,
        requestId
    ]);
}
async function getEmployeesWithPayslipStatus() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT id, first_name, last_name, "position", department, sss_number, philhealth_number, pagibig_number, tin
        FROM accounts
        WHERE role = 'Employee'
    `);
    return result.rows.map((a)=>{
        const hasBenefits = a.sss_number && a.philhealth_number && a.pagibig_number && a.tin;
        return {
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            payslipStatus: 'Pending',
            benefitsStatus: hasBenefits ? 'Complete' : 'Incomplete'
        };
    });
}
async function getEmployeesForScheduling() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT id, first_name, last_name FROM accounts WHERE role = 'Employee' AND status = 'Active'
    `);
    return result.rows.map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            shift: '9:00 - 17:00' // Default shift
        }));
}
async function getEmployeeDashboardData(employeeid) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT id, first_name, last_name, "position", department, branch, email FROM accounts WHERE id = $1', [
        employeeid
    ]);
    const employee = result.rows[0];
    if (!employee) {
        return {
            employee: {
                name: 'Employee Not Found'
            },
            announcements: []
        };
    }
    const announcementsResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("SELECT title, content, created_at FROM announcements WHERE status = 'Published' ORDER BY created_at DESC LIMIT 5");
    return {
        employee: {
            employeeId: employee.id,
            name: `${employee.first_name} ${employee.last_name}`,
            position: employee.position,
            department: employee.department,
            branch: employee.branch,
            email: employee.email
        },
        announcements: announcementsResult.rows.map((a)=>({
                id: a.id,
                title: a.title,
                content: a.content,
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.created_at), 'MMMM d, yyyy')
            }))
    };
}
async function getAttendanceData(employeeId) {
    // This is a placeholder as there is no attendance table yet.
    return {
        summary: {
            daysAttended: 0,
            lates: 0,
            absences: 0,
            totalHours: 0,
            availableLeaves: 0
        },
        records: []
    };
}
async function getPastLeaveRequests(employeeId) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT id, leave_type, start_date, end_date, status FROM leave_requests WHERE employee_id = $1 ORDER BY start_date DESC', [
        employeeId
    ]);
    return result.rows.map((lr)=>({
            id: lr.id,
            leave_type: lr.leave_type,
            startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.start_date), 'yyyy-MM-dd'),
            endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.end_date), 'yyyy-MM-dd'),
            status: lr.status
        }));
}
async function createLeaveRequest(data) {
    const { employeeId, leaveType, startDate, endDate, reason } = data;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason) VALUES ($1, $2, $3, $4, $5)', [
        employeeId,
        leaveType,
        startDate,
        endDate,
        reason
    ]);
    return {
        success: true
    };
}
async function getPayPeriods(employeeId) {
    // This is a placeholder as there is no payslip table yet.
    return [];
}
async function getSchedule(employeeId) {
    // This is a placeholder as there is no schedule table yet.
    return [];
}
async function getPendingEmployeeApprovals() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT id, first_name, last_name, "position", date_hired
        FROM accounts
        WHERE status = 'Pending Approval'
    `);
    return result.rows.map((a)=>({
            id: a.id,
            employeeName: `${a.first_name} ${a.last_name}`,
            position: a.position,
            submittedBy: 'Olivia Chen',
            submissionDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.date_hired), 'yyyy-MM-dd')
        }));
}
async function approveEmployee(employeeId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("UPDATE accounts SET status = 'Active' WHERE id = $1", [
        employeeId
    ]);
}
async function rejectEmployee(employeeId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("DELETE FROM accounts WHERE id = $1", [
        employeeId
    ]);
}
async function getEmployeeName(employeeId) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT first_name, last_name FROM accounts WHERE id = $1', [
        employeeId
    ]);
    const employee = result.rows[0];
    return employee ? `${employee.first_name} ${employee.last_name}` : "Unknown Employee";
}
async function getReportDetails(reportId) {
    // This is a placeholder as there is no reports table yet.
    return null;
}
async function getHrPersonnel() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        SELECT id, first_name, last_name, "position", managed_branches
        FROM accounts WHERE role = 'HR'
    `);
    return result.rows.map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            managed_branches: a.managed_branches || []
        }));
}
async function getBranches() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT id, name, coordinates FROM branches ORDER BY name');
    return result.rows;
}
async function createBranch(branchName, coordinates) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('INSERT INTO branches (name, coordinates) VALUES ($1, $2) RETURNING *', [
            branchName,
            coordinates
        ]);
        return result.rows[0];
    } catch (e) {
        if (e.code === '23505') {
            throw new Error('A branch with this name already exists.');
        }
        throw e;
    }
}
async function deleteBranch(branchId) {
    // Check if any HR personnel is assigned to this branch
    const branchResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT name FROM branches WHERE id = $1', [
        branchId
    ]);
    if (branchResult.rowCount === 0) return;
    const branchName = branchResult.rows[0].name;
    const hrResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("SELECT 1 FROM accounts WHERE role = 'HR' AND $1 = ANY(managed_branches)", [
        branchName
    ]);
    if (hrResult.rowCount > 0) {
        throw new Error('This branch is currently assigned to HR personnel and cannot be deleted.');
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('DELETE FROM branches WHERE id = $1', [
        branchId
    ]);
}
async function updateHrBranchAllocation(hrId, branches) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('UPDATE accounts SET managed_branches = $1 WHERE id = $2', [
        branches,
        hrId
    ]);
    return {
        success: result.rowCount > 0
    };
}
async function updateEmployee(id, data) {
    const { firstName, lastName, middleName, gender, dob, position, department, branch, hireDate, email } = data;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`
        UPDATE accounts SET
            first_name = $1, last_name = $2, middle_name = $3, gender = $4,
            date_of_birth = $5, "position" = $6, department = $7, branch = $8,
            date_hired = $9, email = $10
        WHERE id = $11
    `, [
        firstName,
        lastName,
        middleName,
        gender,
        dob,
        position,
        department,
        branch,
        hireDate,
        email,
        id
    ]);
    return {
        success: result.rowCount > 0,
        message: result.rowCount > 0 ? 'Employee updated successfully.' : 'Employee not found.'
    };
}
async function getPositions() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT id, title, rate FROM positions ORDER BY title');
    return result.rows;
}
async function createPosition(title, rate) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('INSERT INTO positions (title, rate) VALUES ($1, $2) RETURNING *', [
            title,
            rate
        ]);
        return result.rows[0];
    } catch (e) {
        if (e.code === '23505') {
            throw new Error('A position with this title already exists.');
        }
        throw e;
    }
}
async function deletePosition(positionId) {
    const positionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT title FROM positions WHERE id = $1', [
        positionId
    ]);
    if (positionResult.rowCount === 0) return;
    const positionTitle = positionResult.rows[0].title;
    const accountResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])("SELECT 1 FROM accounts WHERE position = $1", [
        positionTitle
    ]);
    if (accountResult.rowCount > 0) {
        throw new Error('This position is currently assigned to employees and cannot be deleted.');
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('DELETE FROM positions WHERE id = $1', [
        positionId
    ]);
}
async function getDepartmentsForBranch(branchName) {
    // This assumes a separate 'departments' table or similar structure.
    // For now, let's query distinct departments from accounts in that branch.
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT DISTINCT department FROM accounts WHERE branch = $1 AND department IS NOT NULL ORDER BY department', [
        branchName
    ]);
    return result.rows.map((r)=>r.department);
}
async function getPositionsForDepartment(departmentName) {
    // This is a simplification. A real app might have a departments_positions link table.
    // Here we get all positions associated with employees in that department.
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])('SELECT DISTINCT "position" FROM accounts WHERE department = $1 AND "position" IS NOT NULL ORDER BY "position"', [
        departmentName
    ]);
    return result.rows.map((r)=>r.position);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getHRDashboardData,
    getPastAnnouncements,
    createAnnouncement,
    deleteAnnouncement,
    getDailyAttendanceData,
    getEmployees,
    getEmployeeById,
    deleteEmployee,
    getLeaveRequests,
    updateLeaveRequestStatus,
    getEmployeesWithPayslipStatus,
    getEmployeesForScheduling,
    getEmployeeDashboardData,
    getAttendanceData,
    getPastLeaveRequests,
    createLeaveRequest,
    getPayPeriods,
    getSchedule,
    getPendingEmployeeApprovals,
    approveEmployee,
    rejectEmployee,
    getEmployeeName,
    getReportDetails,
    getHrPersonnel,
    getBranches,
    createBranch,
    deleteBranch,
    updateHrBranchAllocation,
    updateEmployee,
    getPositions,
    createPosition,
    deletePosition,
    getDepartmentsForBranch,
    getPositionsForDepartment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHRDashboardData, "0041d2031c64a9612535dcab2138817eeef5f5974c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPastAnnouncements, "0081b652a1ba97ae17200b5330a84c1eaee2045820", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAnnouncement, "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAnnouncement, "406a1f92adca3011402ab7c759c72a0873cf50a660", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDailyAttendanceData, "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeById, "40ed5a75d32568df3e02e1d7138130c11b0fa518ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "40d9a51fb28edbd77052634e1d4229df7421a16ff4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeaveRequests, "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeaveRequestStatus, "60a9cb6eb3ceaacad191d5184a4122349a0d55217a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesWithPayslipStatus, "002dd23120083517493f1856b5ce3e27ca1098d244", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesForScheduling, "00d5a8089689a75a56fcc38e7013d6855f6b64deb6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeDashboardData, "40b7b79cef1785e3c75ae17348edfad469c103bb85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendanceData, "40360376d7fc3085764bf086e59364b9a7bd931021", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPastLeaveRequests, "40885e633df6cf5d24407734484d3a4bcc7bc878e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "40e89487447e1f133bfc1c734cc2338626fb053105", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPayPeriods, "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSchedule, "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPendingEmployeeApprovals, "0067b71c9617499970f47f615b607f992a7b35b7ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(approveEmployee, "400c24efbdff8ad0edbd723316ed5350a26ca81947", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(rejectEmployee, "403bd6deaf58cedd1f69830ca2372388b1774aab05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeName, "405c3db62c447e59c0ae7044461282afdf964ae1bd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReportDetails, "40fdc91fc4350406f04eb4a57938354df3e9a76bac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHrPersonnel, "006f92dd1eaec6e537e91dc9dec624243ee6afc955", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBranches, "00651499873cf7b226d6bebda46391ddb16c9e3017", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBranch, "609822123b4518f2a5ebec8d5029d0aa257facd731", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBranch, "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHrBranchAllocation, "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "604206acd9d9cff37b360a36edb47864916be42ac7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPositions, "009e1e55ed3679817775f3fa1467d6a8d3d8736c4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPosition, "6093911139f7f04c7d4349f18c45e70c1cd12710b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePosition, "40a69a957b01cb08f497843c9138b9020dea342972", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartmentsForBranch, "405d0bc438bbb2c7f72de945affb8287da8e3ec894", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPositionsForDepartment, "4098d8639b4d7e181c4a232b77c397aee879de1de4", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview This file contains the server actions for the leave request page.
 */ /* __next_internal_action_entry_do_not_use__ [{"60b093ea0415662a0f6cae6f65eaa2e30511ab5361":"createLeaveRequest"},"",""] */ __turbopack_context__.s({
    "createLeaveRequest": (()=>createLeaveRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const leaveRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    employeeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    leaveType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
});
async function createLeaveRequest(prevState, formData) {
    const validatedFields = leaveRequestSchema.safeParse({
        employeeId: formData.get('employeeId'),
        leaveType: formData.get('leaveType'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        reason: formData.get('reason')
    });
    if (!validatedFields.success) {
        return {
            message: 'Invalid form data. Please check your entries.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"])(validatedFields.data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/leave');
        return {
            message: 'Leave request created successfully.'
        };
    } catch (e) {
        return {
            message: 'Failed to create leave request.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createLeaveRequest
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "60b093ea0415662a0f6cae6f65eaa2e30511ab5361", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastLeaveRequests"]),
    "60b093ea0415662a0f6cae6f65eaa2e30511ab5361": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40885e633df6cf5d24407734484d3a4bcc7bc878e0"]),
    "60b093ea0415662a0f6cae6f65eaa2e30511ab5361": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b093ea0415662a0f6cae6f65eaa2e30511ab5361"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/leave/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/dashboard/leave/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$leave$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/dashboard/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/dashboard/leave/page.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/leave/page.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/leave/page.jsx <module evaluation>", "default");
}}),
"[project]/src/app/dashboard/leave/page.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/leave/page.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/leave/page.jsx", "default");
}}),
"[project]/src/app/dashboard/leave/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/leave/page.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/leave/page.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$leave$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/dashboard/leave/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/leave/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_1d2f5a71._.js.map