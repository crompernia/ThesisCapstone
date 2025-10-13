module.exports = {

"[project]/src/lib/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */ /* __next_internal_action_entry_do_not_use__ [{"002dd23120083517493f1856b5ce3e27ca1098d244":"getEmployeesWithPayslipStatus","0041d2031c64a9612535dcab2138817eeef5f5974c":"getHRDashboardData","00651499873cf7b226d6bebda46391ddb16c9e3017":"getBranches","0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals","006f92dd1eaec6e537e91dc9dec624243ee6afc955":"getHrPersonnel","0081b652a1ba97ae17200b5330a84c1eaee2045820":"getPastAnnouncements","00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524":"getLeaveRequests","00c619ec02afa7d57568b4e0406ecec6a6bf21e12a":"getEmployees","00d5a8089689a75a56fcc38e7013d6855f6b64deb6":"getEmployeesForScheduling","400c24efbdff8ad0edbd723316ed5350a26ca81947":"approveEmployee","402bf722be4a91aa4ab56f119fd6bbe1240abba9d6":"deleteBranch","40360376d7fc3085764bf086e59364b9a7bd931021":"getAttendanceData","403bd6deaf58cedd1f69830ca2372388b1774aab05":"rejectEmployee","405c3db62c447e59c0ae7044461282afdf964ae1bd":"getEmployeeName","406a1f92adca3011402ab7c759c72a0873cf50a660":"deleteAnnouncement","40885e633df6cf5d24407734484d3a4bcc7bc878e0":"getPastLeaveRequests","409822123b4518f2a5ebec8d5029d0aa257facd731":"createBranch","40a5b75da077963d47ebe0f5fc53e2a123ce19ae24":"getDailyAttendanceData","40b0eb7305a3d24b1488b76f6edba4bab27c969bfe":"getSchedule","40b7b79cef1785e3c75ae17348edfad469c103bb85":"getEmployeeDashboardData","40e36f9c74786f4cdb1a562f7c79abdf9440a06d44":"getPayPeriods","40e89487447e1f133bfc1c734cc2338626fb053105":"createLeaveRequest","40fdc91fc4350406f04eb4a57938354df3e9a76bac":"getReportDetails","6034bd75e3ee5334cb7cb149ba648ab4d639d921dd":"updateHrBranchAllocation","60a9cb6eb3ceaacad191d5184a4122349a0d55217a":"updateLeaveRequestStatus","70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177":"createAnnouncement"},"",""] */ __turbopack_context__.s({
    "approveEmployee": (()=>approveEmployee),
    "createAnnouncement": (()=>createAnnouncement),
    "createBranch": (()=>createBranch),
    "createLeaveRequest": (()=>createLeaveRequest),
    "deleteAnnouncement": (()=>deleteAnnouncement),
    "deleteBranch": (()=>deleteBranch),
    "getAttendanceData": (()=>getAttendanceData),
    "getBranches": (()=>getBranches),
    "getDailyAttendanceData": (()=>getDailyAttendanceData),
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
    "getReportDetails": (()=>getReportDetails),
    "getSchedule": (()=>getSchedule),
    "rejectEmployee": (()=>rejectEmployee),
    "updateHrBranchAllocation": (()=>updateHrBranchAllocation),
    "updateLeaveRequestStatus": (()=>updateLeaveRequestStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// --- MOCK DATA ---
let MOCK_ACCOUNTS = [
    {
        id: 'EMP-00123',
        first_name: 'Maria',
        last_name: 'Rodriguez',
        email: 'maria.rodriguez@example.com',
        password: 'password',
        role: 'Employee',
        position: 'Senior Software Engineer',
        department: 'Technology',
        branch: 'Headquarters',
        status: 'Active',
        date_hired: '2022-01-15',
        available_leaves: 12,
        gender: 'Female',
        date_of_birth: '1990-05-20'
    },
    {
        id: 'EMP-00124',
        first_name: 'David',
        last_name: 'Lee',
        email: 'david.lee@example.com',
        password: 'password',
        role: 'Employee',
        position: 'Project Manager',
        department: 'Management',
        branch: 'Headquarters',
        status: 'Active',
        date_hired: '2021-03-20',
        available_leaves: 15,
        gender: 'Male',
        date_of_birth: '1988-11-12'
    },
    {
        id: 'EMP-00125',
        first_name: 'Sarah',
        last_name: 'Chen',
        email: 'sarah.chen@example.com',
        password: 'password',
        role: 'Employee',
        position: 'UX Designer',
        department: 'Design',
        branch: 'Downtown Office',
        status: 'Active',
        date_hired: '2023-05-10',
        available_leaves: 10,
        gender: 'Female',
        date_of_birth: '1995-02-25'
    },
    {
        id: 'EMP-00126',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        role: 'Employee',
        position: 'QA Tester',
        department: 'Technology',
        branch: 'Remote',
        status: 'On Leave',
        date_hired: '2022-08-01',
        available_leaves: 5,
        gender: 'Male',
        date_of_birth: '1992-07-30'
    },
    {
        id: 'HR-001',
        first_name: 'Olivia',
        last_name: 'Chen',
        email: 'olivia.chen.hr@example.com',
        password: 'password',
        role: 'HR',
        position: 'HR Manager',
        department: 'Human Resources',
        branch: 'Headquarters',
        status: 'Active',
        date_hired: '2020-01-01',
        available_leaves: 15,
        gender: 'Female',
        date_of_birth: '1985-09-05',
        managed_branches: [
            'Headquarters',
            'Downtown Office'
        ]
    },
    {
        id: 'ADM-001',
        first_name: 'Super',
        last_name: 'Admin',
        email: 'super@example.com',
        password: 'password',
        role: 'Admin',
        position: 'System Administrator',
        department: 'IT',
        branch: 'Headquarters',
        status: 'Active',
        date_hired: '2019-01-01',
        available_leaves: 20,
        gender: 'Male',
        date_of_birth: '1980-01-01'
    },
    {
        id: 'EMP-PENDING-01',
        first_name: 'Michael',
        last_name: 'Brown',
        email: 'michael.brown@example.com',
        password: 'password',
        role: 'Employee',
        position: 'Junior Developer',
        department: 'Technology',
        branch: 'Headquarters',
        status: 'Pending Approval',
        date_hired: '2024-01-01',
        available_leaves: 15,
        gender: 'Male',
        date_of_birth: '1998-06-15'
    }
];
let MOCK_BRANCHES = [
    {
        id: 1,
        name: 'Headquarters'
    },
    {
        id: 2,
        name: 'Downtown Office'
    },
    {
        id: 3,
        name: 'Remote'
    }
];
let MOCK_ANNOUNCEMENTS = [];
let MOCK_LEAVE_REQUESTS = [];
let MOCK_SCHEDULES = [];
let MOCK_ATTENDANCE = [];
let MOCK_PAYSLIPS = [];
async function getHRDashboardData() {
    const totalEmployees = MOCK_ACCOUNTS.filter((a)=>a.role === 'Employee').length;
    const pendingLeaveRequests = MOCK_LEAVE_REQUESTS.filter((lr)=>lr.status === 'Pending').length;
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
            title: 'Active Job Postings',
            value: '4',
            change: 'External API'
        },
        {
            title: 'Pending Leave Requests',
            value: String(pendingLeaveRequests),
            change: ''
        }
    ];
    return {
        stats,
        recentActivities: []
    };
}
async function getPastAnnouncements() {
    return MOCK_ANNOUNCEMENTS.map((a)=>{
        const postedBy = MOCK_ACCOUNTS.find((acc)=>acc.id === a.posted_by_id);
        return {
            ...a,
            postedBy: postedBy ? `${postedBy.first_name} ${postedBy.last_name}` : 'Unknown',
            date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.posted_at), 'yyyy-MM-dd')
        };
    }).sort((a, b)=>new Date(b.posted_at) - new Date(a.posted_at));
}
async function createAnnouncement(title, content, status) {
    const hrUserId = 'HR-001';
    const newAnnouncement = {
        id: MOCK_ANNOUNCEMENTS.length + 1,
        title,
        content,
        posted_by_id: hrUserId,
        status,
        posted_at: new Date().toISOString()
    };
    MOCK_ANNOUNCEMENTS.push(newAnnouncement);
}
async function deleteAnnouncement(id) {
    MOCK_ANNOUNCEMENTS = MOCK_ANNOUNCEMENTS.filter((a)=>a.id !== id);
}
async function getDailyAttendanceData(date) {
    return [];
}
async function getEmployees() {
    return MOCK_ACCOUNTS.filter((a)=>a.role === 'Employee' && a.status !== 'Pending Approval').map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            branch: a.branch,
            status: a.status
        }));
}
async function getLeaveRequests() {
    return MOCK_LEAVE_REQUESTS.map((lr)=>{
        const employee = MOCK_ACCOUNTS.find((a)=>a.id === lr.account_id);
        return {
            id: lr.id,
            employeeId: employee.id,
            employeeName: `${employee.first_name} ${employee.last_name}`,
            leave_type: lr.leave_type,
            startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.start_date), 'yyyy-MM-dd'),
            endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.end_date), 'yyyy-MM-dd'),
            reason: lr.reason,
            status: lr.status
        };
    });
}
async function updateLeaveRequestStatus(requestId, status) {
    const request = MOCK_LEAVE_REQUESTS.find((lr)=>lr.id === requestId);
    if (request) {
        request.status = status;
    }
}
async function getEmployeesWithPayslipStatus() {
    return MOCK_ACCOUNTS.filter((a)=>a.role === 'Employee').map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            payslipStatus: 'Pending'
        }));
}
async function getEmployeesForScheduling() {
    return MOCK_ACCOUNTS.filter((a)=>a.role === 'Employee' && a.status === 'Active').map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            shift: '9:00 - 17:00'
        }));
}
async function getEmployeeDashboardData(employeeId) {
    const employee = MOCK_ACCOUNTS.find((a)=>a.id === employeeId);
    if (!employee) {
        return {
            employee: {
                name: 'Employee Not Found'
            },
            announcements: []
        };
    }
    return {
        employee: {
            employeeId: employee.id,
            name: `${employee.first_name} ${employee.last_name}`,
            position: employee.position,
            department: employee.department,
            email: employee.email
        },
        announcements: []
    };
}
async function getAttendanceData(employeeId) {
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
    return MOCK_LEAVE_REQUESTS.filter((lr)=>lr.account_id === employeeId).map((lr)=>({
            id: lr.id,
            leave_type: lr.leave_type,
            startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.start_date), 'yyyy-MM-dd'),
            endDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(lr.end_date), 'yyyy-MM-dd'),
            status: lr.status
        }));
}
async function createLeaveRequest(data) {
    const { employeeId, leaveType, startDate, endDate, reason } = data;
    const newRequest = {
        id: MOCK_LEAVE_REQUESTS.length + 1,
        account_id: employeeId,
        leave_type: leaveType,
        start_date: startDate,
        end_date: endDate,
        reason: reason,
        status: 'Pending'
    };
    MOCK_LEAVE_REQUESTS.push(newRequest);
    return {
        success: true
    };
}
async function getPayPeriods(employeeId) {
    return [];
}
async function getSchedule(employeeId) {
    return [];
}
async function getPendingEmployeeApprovals() {
    return MOCK_ACCOUNTS.filter((a)=>a.status === 'Pending Approval').map((a)=>({
            id: a.id,
            employeeName: `${a.first_name} ${a.last_name}`,
            position: a.position,
            submittedBy: 'Olivia Chen',
            submissionDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.date_hired), 'yyyy-MM-dd')
        }));
}
async function approveEmployee(employeeId) {
    const employee = MOCK_ACCOUNTS.find((a)=>a.id === employeeId);
    if (employee) employee.status = 'Active';
}
async function rejectEmployee(employeeId) {
    MOCK_ACCOUNTS = MOCK_ACCOUNTS.filter((a)=>a.id !== employeeId);
}
async function getEmployeeName(employeeId) {
    const employee = MOCK_ACCOUNTS.find((a)=>a.id === employeeId);
    return employee ? `${employee.first_name} ${employee.last_name}` : "Unknown Employee";
}
async function getReportDetails(reportId) {
    return null;
}
async function getHrPersonnel() {
    return MOCK_ACCOUNTS.filter((a)=>a.role === 'HR').map((a)=>({
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            managed_branches: a.managed_branches || []
        }));
}
async function getBranches() {
    // We now use the dedicated MOCK_BRANCHES array.
    return MOCK_BRANCHES;
}
async function createBranch(branchName) {
    // Check if branch already exists
    if (MOCK_BRANCHES.some((b)=>b.name.toLowerCase() === branchName.toLowerCase())) {
        throw new Error('A branch with this name already exists.');
    }
    const newId = MOCK_BRANCHES.length > 0 ? Math.max(...MOCK_BRANCHES.map((b)=>b.id)) + 1 : 1;
    const newBranch = {
        id: newId,
        name: branchName
    };
    MOCK_BRANCHES.push(newBranch);
    return newBranch;
}
async function deleteBranch(branchId) {
    MOCK_BRANCHES = MOCK_BRANCHES.filter((b)=>b.id !== branchId);
}
async function updateHrBranchAllocation(hrId, branches) {
    const hrAccount = MOCK_ACCOUNTS.find((a)=>a.id === hrId);
    if (hrAccount) {
        hrAccount.managed_branches = branches;
        return {
            success: true
        };
    }
    return {
        success: false,
        message: "HR personnel not found."
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getHRDashboardData,
    getPastAnnouncements,
    createAnnouncement,
    deleteAnnouncement,
    getDailyAttendanceData,
    getEmployees,
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
    updateHrBranchAllocation
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHRDashboardData, "0041d2031c64a9612535dcab2138817eeef5f5974c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPastAnnouncements, "0081b652a1ba97ae17200b5330a84c1eaee2045820", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAnnouncement, "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAnnouncement, "406a1f92adca3011402ab7c759c72a0873cf50a660", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDailyAttendanceData, "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a", null);
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBranch, "409822123b4518f2a5ebec8d5029d0aa257facd731", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBranch, "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHrBranchAllocation, "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd", null);
}}),
"[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "002dd23120083517493f1856b5ce3e27ca1098d244": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesWithPayslipStatus"]),
    "0041d2031c64a9612535dcab2138817eeef5f5974c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHRDashboardData"]),
    "00651499873cf7b226d6bebda46391ddb16c9e3017": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBranches"]),
    "0067b71c9617499970f47f615b607f992a7b35b7ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPendingEmployeeApprovals"]),
    "006f92dd1eaec6e537e91dc9dec624243ee6afc955": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHrPersonnel"]),
    "0081b652a1ba97ae17200b5330a84c1eaee2045820": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastAnnouncements"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeaveRequests"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesForScheduling"]),
    "400c24efbdff8ad0edbd723316ed5350a26ca81947": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approveEmployee"]),
    "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBranch"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttendanceData"]),
    "403bd6deaf58cedd1f69830ca2372388b1774aab05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rejectEmployee"]),
    "405c3db62c447e59c0ae7044461282afdf964ae1bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeName"]),
    "406a1f92adca3011402ab7c759c72a0873cf50a660": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAnnouncement"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastLeaveRequests"]),
    "409822123b4518f2a5ebec8d5029d0aa257facd731": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranch"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDailyAttendanceData"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchedule"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeDashboardData"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayPeriods"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReportDetails"]),
    "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHrBranchAllocation"]),
    "60a9cb6eb3ceaacad191d5184a4122349a0d55217a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeaveRequestStatus"]),
    "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAnnouncement"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "002dd23120083517493f1856b5ce3e27ca1098d244": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dd23120083517493f1856b5ce3e27ca1098d244"]),
    "0041d2031c64a9612535dcab2138817eeef5f5974c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0041d2031c64a9612535dcab2138817eeef5f5974c"]),
    "00651499873cf7b226d6bebda46391ddb16c9e3017": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00651499873cf7b226d6bebda46391ddb16c9e3017"]),
    "0067b71c9617499970f47f615b607f992a7b35b7ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0067b71c9617499970f47f615b607f992a7b35b7ca"]),
    "006f92dd1eaec6e537e91dc9dec624243ee6afc955": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["006f92dd1eaec6e537e91dc9dec624243ee6afc955"]),
    "0081b652a1ba97ae17200b5330a84c1eaee2045820": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0081b652a1ba97ae17200b5330a84c1eaee2045820"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c619ec02afa7d57568b4e0406ecec6a6bf21e12a"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00d5a8089689a75a56fcc38e7013d6855f6b64deb6"]),
    "400c24efbdff8ad0edbd723316ed5350a26ca81947": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["400c24efbdff8ad0edbd723316ed5350a26ca81947"]),
    "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402bf722be4a91aa4ab56f119fd6bbe1240abba9d6"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40360376d7fc3085764bf086e59364b9a7bd931021"]),
    "403bd6deaf58cedd1f69830ca2372388b1774aab05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["403bd6deaf58cedd1f69830ca2372388b1774aab05"]),
    "405c3db62c447e59c0ae7044461282afdf964ae1bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405c3db62c447e59c0ae7044461282afdf964ae1bd"]),
    "406a1f92adca3011402ab7c759c72a0873cf50a660": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406a1f92adca3011402ab7c759c72a0873cf50a660"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40885e633df6cf5d24407734484d3a4bcc7bc878e0"]),
    "409822123b4518f2a5ebec8d5029d0aa257facd731": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["409822123b4518f2a5ebec8d5029d0aa257facd731"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a5b75da077963d47ebe0f5fc53e2a123ce19ae24"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b0eb7305a3d24b1488b76f6edba4bab27c969bfe"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b7b79cef1785e3c75ae17348edfad469c103bb85"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e36f9c74786f4cdb1a562f7c79abdf9440a06d44"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e89487447e1f133bfc1c734cc2338626fb053105"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40fdc91fc4350406f04eb4a57938354df3e9a76bac"]),
    "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6034bd75e3ee5334cb7cb149ba648ab4d639d921dd"]),
    "60a9cb6eb3ceaacad191d5184a4122349a0d55217a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60a9cb6eb3ceaacad191d5184a4122349a0d55217a"]),
    "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$branches$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/branches/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
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
"[project]/src/app/admin/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/admin/branches/page.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/branches/page.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/branches/page.jsx <module evaluation>", "default");
}}),
"[project]/src/app/admin/branches/page.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/branches/page.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/branches/page.jsx", "default");
}}),
"[project]/src/app/admin/branches/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/admin/branches/page.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/admin/branches/page.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/admin/branches/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/branches/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_3102b0cc._.js.map