module.exports = {

"[project]/src/lib/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
const MOCK_STRUCTURE = {
    'Headquarters': {
        'Technology': [
            'Senior Software Engineer',
            'Junior Developer',
            'QA Tester'
        ],
        'Management': [
            'Project Manager'
        ],
        'Human Resources': [
            'HR Manager'
        ],
        'IT': [
            'System Administrator'
        ]
    },
    'Downtown Office': {
        'Design': [
            'UX Designer'
        ],
        'Sales': [
            'Sales Associate'
        ],
        'Marketing': [
            'Marketing Specialist'
        ]
    },
    'Remote': {
        'Technology': [
            'Senior Software Engineer',
            'QA Tester'
        ],
        'Design': [
            'UX Designer'
        ]
    }
};
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
            branch: employee.branch,
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
    return MOCK_BRANCHES;
}
async function createBranch(branchName, coordinates) {
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
    // This now returns all unique position titles across all departments/branches
    const allPositions = new Set();
    Object.values(MOCK_STRUCTURE).forEach((departments)=>{
        Object.values(departments).forEach((positions)=>{
            positions.forEach((p)=>allPositions.add(p));
        });
    });
    return Array.from(allPositions).map((title, index)=>{
        // Find original rate if possible, otherwise default
        const originalPosition = MOCK_POSITIONS.find((p)=>p.title === title);
        return {
            id: index + 1,
            title,
            rate: originalPosition ? originalPosition.rate : 0
        };
    });
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
async function getDepartmentsForBranch(branchName) {
    if (!branchName || !MOCK_STRUCTURE[branchName]) {
        return [];
    }
    return Object.keys(MOCK_STRUCTURE[branchName]);
}
async function getPositionsForDepartment(departmentName) {
    for(const branch in MOCK_STRUCTURE){
        if (MOCK_STRUCTURE[branch][departmentName]) {
            return MOCK_STRUCTURE[branch][departmentName];
        }
    }
    return [];
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
}}),
"[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
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
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
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
    "009e1e55ed3679817775f3fa1467d6a8d3d8736c4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPositions"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeaveRequests"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesForScheduling"]),
    "400c24efbdff8ad0edbd723316ed5350a26ca81947": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approveEmployee"]),
    "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBranch"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttendanceData"]),
    "403bd6deaf58cedd1f69830ca2372388b1774aab05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rejectEmployee"]),
    "405c3db62c447e59c0ae7044461282afdf964ae1bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeName"]),
    "405d0bc438bbb2c7f72de945affb8287da8e3ec894": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDepartmentsForBranch"]),
    "406a1f92adca3011402ab7c759c72a0873cf50a660": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAnnouncement"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastLeaveRequests"]),
    "4098d8639b4d7e181c4a232b77c397aee879de1de4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPositionsForDepartment"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDailyAttendanceData"]),
    "40a69a957b01cb08f497843c9138b9020dea342972": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePosition"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchedule"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeDashboardData"]),
    "40d9a51fb28edbd77052634e1d4229df7421a16ff4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployee"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayPeriods"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"]),
    "40ed5a75d32568df3e02e1d7138130c11b0fa518ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeById"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReportDetails"]),
    "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHrBranchAllocation"]),
    "604206acd9d9cff37b360a36edb47864916be42ac7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployee"]),
    "6093911139f7f04c7d4349f18c45e70c1cd12710b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPosition"]),
    "609822123b4518f2a5ebec8d5029d0aa257facd731": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranch"]),
    "60a9cb6eb3ceaacad191d5184a4122349a0d55217a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeaveRequestStatus"]),
    "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAnnouncement"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "002dd23120083517493f1856b5ce3e27ca1098d244": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dd23120083517493f1856b5ce3e27ca1098d244"]),
    "0041d2031c64a9612535dcab2138817eeef5f5974c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0041d2031c64a9612535dcab2138817eeef5f5974c"]),
    "00651499873cf7b226d6bebda46391ddb16c9e3017": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00651499873cf7b226d6bebda46391ddb16c9e3017"]),
    "0067b71c9617499970f47f615b607f992a7b35b7ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0067b71c9617499970f47f615b607f992a7b35b7ca"]),
    "006f92dd1eaec6e537e91dc9dec624243ee6afc955": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["006f92dd1eaec6e537e91dc9dec624243ee6afc955"]),
    "0081b652a1ba97ae17200b5330a84c1eaee2045820": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0081b652a1ba97ae17200b5330a84c1eaee2045820"]),
    "009e1e55ed3679817775f3fa1467d6a8d3d8736c4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["009e1e55ed3679817775f3fa1467d6a8d3d8736c4a"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c619ec02afa7d57568b4e0406ecec6a6bf21e12a"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00d5a8089689a75a56fcc38e7013d6855f6b64deb6"]),
    "400c24efbdff8ad0edbd723316ed5350a26ca81947": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["400c24efbdff8ad0edbd723316ed5350a26ca81947"]),
    "402bf722be4a91aa4ab56f119fd6bbe1240abba9d6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402bf722be4a91aa4ab56f119fd6bbe1240abba9d6"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40360376d7fc3085764bf086e59364b9a7bd931021"]),
    "403bd6deaf58cedd1f69830ca2372388b1774aab05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["403bd6deaf58cedd1f69830ca2372388b1774aab05"]),
    "405c3db62c447e59c0ae7044461282afdf964ae1bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405c3db62c447e59c0ae7044461282afdf964ae1bd"]),
    "405d0bc438bbb2c7f72de945affb8287da8e3ec894": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405d0bc438bbb2c7f72de945affb8287da8e3ec894"]),
    "406a1f92adca3011402ab7c759c72a0873cf50a660": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406a1f92adca3011402ab7c759c72a0873cf50a660"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40885e633df6cf5d24407734484d3a4bcc7bc878e0"]),
    "4098d8639b4d7e181c4a232b77c397aee879de1de4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4098d8639b4d7e181c4a232b77c397aee879de1de4"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a5b75da077963d47ebe0f5fc53e2a123ce19ae24"]),
    "40a69a957b01cb08f497843c9138b9020dea342972": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a69a957b01cb08f497843c9138b9020dea342972"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b0eb7305a3d24b1488b76f6edba4bab27c969bfe"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b7b79cef1785e3c75ae17348edfad469c103bb85"]),
    "40d9a51fb28edbd77052634e1d4229df7421a16ff4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40d9a51fb28edbd77052634e1d4229df7421a16ff4"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e36f9c74786f4cdb1a562f7c79abdf9440a06d44"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e89487447e1f133bfc1c734cc2338626fb053105"]),
    "40ed5a75d32568df3e02e1d7138130c11b0fa518ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ed5a75d32568df3e02e1d7138130c11b0fa518ff"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40fdc91fc4350406f04eb4a57938354df3e9a76bac"]),
    "6034bd75e3ee5334cb7cb149ba648ab4d639d921dd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6034bd75e3ee5334cb7cb149ba648ab4d639d921dd"]),
    "604206acd9d9cff37b360a36edb47864916be42ac7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["604206acd9d9cff37b360a36edb47864916be42ac7"]),
    "6093911139f7f04c7d4349f18c45e70c1cd12710b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6093911139f7f04c7d4349f18c45e70c1cd12710b1"]),
    "609822123b4518f2a5ebec8d5029d0aa257facd731": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["609822123b4518f2a5ebec8d5029d0aa257facd731"]),
    "60a9cb6eb3ceaacad191d5184a4122349a0d55217a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60a9cb6eb3ceaacad191d5184a4122349a0d55217a"]),
    "70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["70b877cecdc386a8a18ed56ee7a4f1ed9d86f3d177"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$schedule$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/schedule/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/dashboard/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/ui/card.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Card component and its parts.
 * A card is a flexible and extensible content container. It includes options for
 * headers, footers, titles, descriptions, and content.
 */ __turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-rsc] (ecmascript)");
;
;
;
/**
 * The main container for the card component.
 */ const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
/**
 * The header section of the card. Typically contains the title and description.
 */ const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
/**
 * The title of the card. Should be placed inside a CardHeader.
 */ const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 41,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
/**
 * A description for the card. Should be placed inside a CardHeader.
 */ const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
/**
 * The main content area of the card.
 */ const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 68,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
/**
_The footer section of the card.
*/ const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 76,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/table.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Table component and its parts.
 * This provides a set of styled components for creating tables.
 */ __turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-rsc] (ecmascript)");
;
;
;
/** The root `<table>` element. */ const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.jsx",
            lineNumber: 12,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 11,
        columnNumber: 3
    }, this));
Table.displayName = "Table";
/** The `<thead>` element. */ const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
/** The `<tbody>` element. */ const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
/** The `<tfoot>` element. */ const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
/** The `<tr>` element. */ const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 52,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
/** The `<th>` element. */ const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 65,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
/** The `<td>` element. */ const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 78,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
/** The `<caption>` element. */ const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
;
}}),
"[project]/src/components/ui/badge.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Badge component.
 * Badges are used to highlight small pieces of information, such as a status or a category.
 * They come in different visual styles (variants).
 */ __turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-rsc] (ecmascript)");
;
;
;
;
/**
 * Defines the visual styles for the badge component.
 * Includes variants for different states like 'default', 'secondary', 'destructive', and 'outline'.
 */ const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
/**
 * The Badge component itself.
 * @param {BadgeProps} props - The properties for the badge.
 * @returns {JSX.Element} The rendered badge component.
 */ function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/app/dashboard/schedule/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Schedule page for the employee dashboard.
 * It displays the employee's weekly work schedule in a clear, tabular format.
 */ __turbopack_context__.s({
    "default": (()=>SchedulePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Hardcoded employee ID for demonstration purposes.
const EMPLOYEE_ID = 'EMP-00123';
async function SchedulePage() {
    const schedule = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchedule"])(EMPLOYEE_ID);
    // Get today's day name to highlight in the schedule.
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long"
    });
    const todaysSchedule = schedule.find((s)=>s.day === today);
    const totalWeeklyHours = schedule.reduce((acc, s)=>acc + (s.hours || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "My Schedule"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    "This Week's Schedule"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Your work schedule for the current week."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: schedule.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Day"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Time In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Time Out"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Break"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Hours"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: schedule.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: item.day === today ? 'bg-accent' : '',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium",
                                                    children: [
                                                        item.day,
                                                        item.day === today && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "default",
                                                            className: "ml-2",
                                                            children: "Today"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                            lineNumber: 73,
                                                            columnNumber: 46
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: item.timeIn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: item.timeOut
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: item.break
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: item.hours > 0 ? `${item.hours}` : "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.day, true, {
                                            fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-center",
                            children: "No schedule has been published for this week."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    schedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-muted-foreground flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                        lineNumber: 92,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Today's Total Hours: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-foreground",
                                                children: todaysSchedule?.hours ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                                lineNumber: 93,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold",
                                children: [
                                    "Total Weekly Hours: ",
                                    totalWeeklyHours
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/schedule/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/schedule/page.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/dashboard/schedule/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/schedule/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_c8dcb70c._.js.map