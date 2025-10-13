module.exports = {

"[project]/src/lib/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 */ /* __next_internal_action_entry_do_not_use__ [{"002dd23120083517493f1856b5ce3e27ca1098d244":"getEmployeesWithPayslipStatus","0041d2031c64a9612535dcab2138817eeef5f5974c":"getHRDashboardData","00651499873cf7b226d6bebda46391ddb16c9e3017":"getBranches","0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals","006f92dd1eaec6e537e91dc9dec624243ee6afc955":"getHrPersonnel","0081b652a1ba97ae17200b5330a84c1eaee2045820":"getPastAnnouncements","009e1e55ed3679817775f3fa1467d6a8d3d8736c4a":"getPositions","00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524":"getLeaveRequests","00c619ec02afa7d57568b4e0406ecec6a6bf21e12a":"getEmployees","00d5a8089689a75a56fcc38e7013d6855f6b64deb6":"getEmployeesForScheduling","400c24efbdff8ad0edbd723316ed5350a26ca81947":"approveEmployee","402bf722be4a91aa4ab56f119fd6bbe1240abba9d6":"deleteBranch","40360376d7fc3085764bf086e59364b9a7bd931021":"getAttendanceData","403bd6deaf58cedd1f69830ca2372388b1774aab05":"rejectEmployee","405c3db62c447e59c0ae7044461282afdf964ae1bd":"getEmployeeName","406a1f92adca3011402ab7c759c72a0873cf50a660":"deleteAnnouncement","40885e633df6cf5d24407734484d3a4bcc7bc878e0":"getPastLeaveRequests","40a5b75da077963d47ebe0f5fc53e2a123ce19ae24":"getDailyAttendanceData","40a69a957b01cb08f497843c9138b9020dea342972":"deletePosition","40b0eb7305a3d24b1488b76f6edba4bab27c969bfe":"getSchedule","40b7b79cef1785e3c75ae17348edfad469c103bb85":"getEmployeeDashboardData","40d9a51fb28edbd77052634e1d4229df7421a16ff4":"deleteEmployee","40e36f9c74786f4cdb1a562f7c79abdf9440a06d44":"getPayPeriods","40e89487447e1f133bfc1c734cc2338626fb053105":"createLeaveRequest","40ed5a75d32568df3e02e1d7138130c11b0fa518ff":"getEmployeeById","40fdc91fc4350406f04eb4a57938354df3e9a76bac":"getReportDetails","6034bd75e3ee5334cb7cb149ba648ab4d639d921dd":"updateHrBranchAllocation","604206acd9d9cff37b360a36edb47864916be42ac7":"updateEmployee","6093911139f7f04c7d4349f18c45e70c1cd12710b1":"createPosition","609822123b4518f2a5ebec8d5029d0aa257facd731":"createBranch","60a9cb6eb3ceaacad191d5184a4122349a0d55217a":"updateLeaveRequestStatus","70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177":"createAnnouncement"},"",""] */ __turbopack_context__.s({
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
    "getReportDetails": (()=>getReportDetails),
    "getSchedule": (()=>getSchedule),
    "rejectEmployee": (()=>rejectEmployee),
    "updateEmployee": (()=>updateEmployee),
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
        date_of_birth: '1990-05-20',
        sss_number: '00-0000000-0',
        philhealth_number: '00-000000000-0',
        pagibig_number: '0000-0000-0000',
        tin: '000-000-000-000'
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
        name: 'Headquarters',
        coordinates: '14.5547, 121.0244'
    },
    {
        id: 2,
        name: 'Downtown Office',
        coordinates: '14.5995, 120.9842'
    },
    {
        id: 3,
        name: 'Remote',
        coordinates: 'N/A'
    }
];
let MOCK_POSITIONS = [
    {
        id: 1,
        title: 'Senior Software Engineer',
        rate: 50.00
    },
    {
        id: 2,
        title: 'Project Manager',
        rate: 55.00
    },
    {
        id: 3,
        title: 'UX Designer',
        rate: 45.00
    },
    {
        id: 4,
        title: 'QA Tester',
        rate: 35.00
    },
    {
        id: 5,
        title: 'Junior Developer',
        rate: 30.00
    },
    {
        id: 6,
        title: 'HR Manager',
        rate: 48.00
    },
    {
        id: 7,
        title: 'System Administrator',
        rate: 52.00
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
            postedBy: postedBy ? `${''}${postedBy.first_name} ${postedBy.last_name}` : 'Unknown',
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
async function getEmployeeById(id) {
    const employee = MOCK_ACCOUNTS.find((a)=>a.id === id);
    if (!employee) return null;
    return {
        ...employee,
        name: `${employee.first_name} ${employee.last_name}`,
        date_hired: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(employee.date_hired), 'yyyy-MM-dd'),
        date_of_birth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(employee.date_of_birth), 'yyyy-MM-dd')
    };
}
async function deleteEmployee(id) {
    const initialLength = MOCK_ACCOUNTS.length;
    MOCK_ACCOUNTS = MOCK_ACCOUNTS.filter((a)=>a.id !== id);
    return MOCK_ACCOUNTS.length < initialLength;
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
    return MOCK_ACCOUNTS.filter((a)=>a.role === 'Employee').map((a)=>{
        const hasBenefits = a.sss_number && a.philhealth_number && a.pagibig_number && a.tin;
        const positionDetails = MOCK_POSITIONS.find((p)=>p.title === a.position);
        return {
            id: a.id,
            name: `${a.first_name} ${a.last_name}`,
            position: a.position,
            department: a.department,
            rate: positionDetails ? positionDetails.rate : 0,
            payslipStatus: 'Pending',
            benefitsStatus: hasBenefits ? 'Complete' : 'Incomplete'
        };
    });
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
async function createBranch(branchName, coordinates) {
    // Check if branch already exists
    if (MOCK_BRANCHES.some((b)=>b.name.toLowerCase() === branchName.toLowerCase())) {
        throw new Error('A branch with this name already exists.');
    }
    const newId = MOCK_BRANCHES.length > 0 ? Math.max(...MOCK_BRANCHES.map((b)=>b.id)) + 1 : 1;
    const newBranch = {
        id: newId,
        name: branchName,
        coordinates
    };
    MOCK_BRANCHES.push(newBranch);
    return newBranch;
}
async function deleteBranch(branchId) {
    const branchInUse = MOCK_ACCOUNTS.some((hr)=>hr.managed_branches?.includes(MOCK_BRANCHES.find((b)=>b.id === branchId)?.name));
    if (branchInUse) {
        throw new Error('This branch is currently assigned to HR personnel and cannot be deleted.');
    }
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
async function updateEmployee(id, data) {
    const index = MOCK_ACCOUNTS.findIndex((a)=>a.id === id);
    if (index === -1) {
        return {
            success: false,
            message: 'Employee not found.'
        };
    }
    const updatedEmployee = {
        ...MOCK_ACCOUNTS[index],
        first_name: data.firstName,
        last_name: data.lastName,
        middle_name: data.middleName,
        gender: data.gender,
        date_of_birth: data.dob,
        position: data.position,
        department: data.department,
        branch: data.branch,
        date_hired: data.hireDate,
        email: data.email
    };
    MOCK_ACCOUNTS[index] = updatedEmployee;
    return {
        success: true,
        message: 'Employee updated successfully.'
    };
}
async function getPositions() {
    return MOCK_POSITIONS;
}
async function createPosition(title, rate) {
    if (MOCK_POSITIONS.some((p)=>p.title.toLowerCase() === title.toLowerCase())) {
        throw new Error('A position with this title already exists.');
    }
    const newId = MOCK_POSITIONS.length > 0 ? Math.max(...MOCK_POSITIONS.map((p)=>p.id)) + 1 : 1;
    const newPosition = {
        id: newId,
        title,
        rate
    };
    MOCK_POSITIONS.push(newPosition);
    return newPosition;
}
async function deletePosition(positionId) {
    const positionInUse = MOCK_ACCOUNTS.some((acc)=>acc.position === MOCK_POSITIONS.find((p)=>p.id === positionId)?.title);
    if (positionInUse) {
        throw new Error('This position is currently assigned to employees and cannot be deleted.');
    }
    MOCK_POSITIONS = MOCK_POSITIONS.filter((p)=>p.id !== positionId);
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
    deletePosition
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
}}),
"[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file contains server actions for the edit employee form.
 */ /* __next_internal_action_entry_do_not_use__ [{"6037ab5eec6b38a95cf94fd26e8d2c7ad9ff21cf02":"updateEmployeeAction"},"",""] */ __turbopack_context__.s({
    "updateEmployeeAction": (()=>updateEmployeeAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const employeeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    middleName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    dob: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    branch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    hireDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email()
});
async function updateEmployeeAction(id, data) {
    const validatedFields = employeeSchema.safeParse(data);
    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid form data. Please check your entries.'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployee"])(id, validatedFields.data);
        if (result.success) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hr/employee-data');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/hr/employee-data/${id}`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/hr/employee-data/${id}/edit`);
        }
        return result;
    } catch (error) {
        console.error('Database error updating employee:', error);
        return {
            success: false,
            message: 'Failed to update employee due to a database error.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateEmployeeAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployeeAction, "6037ab5eec6b38a95cf94fd26e8d2c7ad9ff21cf02", null);
}}),
"[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)");
;
;
;
}}),
"[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "009e1e55ed3679817775f3fa1467d6a8d3d8736c4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPositions"]),
    "40ed5a75d32568df3e02e1d7138130c11b0fa518ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeById"]),
    "6037ab5eec6b38a95cf94fd26e8d2c7ad9ff21cf02": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployeeAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "009e1e55ed3679817775f3fa1467d6a8d3d8736c4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["009e1e55ed3679817775f3fa1467d6a8d3d8736c4a"]),
    "40ed5a75d32568df3e02e1d7138130c11b0fa518ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ed5a75d32568df3e02e1d7138130c11b0fa518ff"]),
    "6037ab5eec6b38a95cf94fd26e8d2c7ad9ff21cf02": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6037ab5eec6b38a95cf94fd26e8d2c7ad9ff21cf02"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hr/employee-data/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/hr/employee-data/[id]/edit/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/hr/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/hr/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/hr/employee-data/[id]/edit/page.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/hr/employee-data/[id]/edit/page.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/hr/employee-data/[id]/edit/page.jsx <module evaluation>", "default");
}}),
"[project]/src/app/hr/employee-data/[id]/edit/page.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/hr/employee-data/[id]/edit/page.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/hr/employee-data/[id]/edit/page.jsx", "default");
}}),
"[project]/src/app/hr/employee-data/[id]/edit/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/page.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/page.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$employee$2d$data$2f5b$id$5d2f$edit$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/hr/employee-data/[id]/edit/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/hr/employee-data/[id]/edit/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_4ba5c9b0._.js.map