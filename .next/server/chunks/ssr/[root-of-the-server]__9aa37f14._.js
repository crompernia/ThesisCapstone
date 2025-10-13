module.exports = {

"[externals]/pg [external] (pg, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/db.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview This file contains the database connection configuration and utilities.
 * It uses the 'pg' library to connect to a PostgreSQL database.
 * The connection details are sourced from environment variables for security.
 */ __turbopack_context__.s({
    "initializeDb": (()=>initializeDb),
    "query": (()=>query)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
let pool;
try {
    // Create a new connection pool.
    // A pool is better than a single client for web applications
    // because it can manage multiple connections at once.
    pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'employeedb',
        password: process.env.DB_PASSWORD || 'password',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        // Add a connection timeout to prevent hanging connections
        connectionTimeoutMillis: 5000
    });
    pool.on('error', (err, client)=>{
        console.error('Unexpected error on idle client', err);
        process.exit(-1);
    });
} catch (error) {
    console.error("Failed to create a database connection pool:", error);
    pool = null; // Ensure pool is null if creation fails
}
const query = async (text, params)=>{
    if (!pool) {
        console.error("Database connection pool is not available. Skipping query.");
        return undefined;
    }
    const start = Date.now();
    let client;
    try {
        client = await pool.connect();
        const res = await client.query(text, params);
        const duration = Date.now() - start;
        // console.log('executed query', { text, duration, rows: res.rowCount });
        return res;
    } catch (error) {
        // Do not re-throw the error. Return undefined to be handled by the data fetching function.
        return undefined;
    } finally{
        if (client) {
            client.release();
        }
    }
};
async function initializeDb() {
    if (!pool) {
        console.error("Skipping DB initialization because the pool is not available.");
        return;
    }
    let client;
    try {
        client = await pool.connect();
    } catch (error) {
        // Fail silently if the database isn't available at startup.
        if (client) client.release();
        return;
    }
    try {
        const tableCheck = await client.query("SELECT to_regclass('public.employees');");
        const tableExists = tableCheck.rows[0].to_regclass;
        if (!tableExists) {
            console.log("Database schema not found. Creating tables and seeding data...");
            await client.query('BEGIN');
            // Create Tables
            await client.query(`
                CREATE TABLE employees (
                    id VARCHAR(255) PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    middle_name VARCHAR(255),
                    position VARCHAR(255),
                    department VARCHAR(255),
                    branch VARCHAR(255),
                    gender VARCHAR(50),
                    date_of_birth DATE,
                    date_hired DATE,
                    status VARCHAR(50) DEFAULT 'Active',
                    photo_url TEXT,
                    available_leaves INT DEFAULT 15
                );
                CREATE TABLE hr_personnel (
                    id VARCHAR(255) PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL
                );
                CREATE TABLE admins (
                    id VARCHAR(255) PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL
                );
                CREATE TABLE attendance (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    attendance_date DATE NOT NULL,
                    time_in TIMESTAMP,
                    time_out TIMESTAMP,
                    status VARCHAR(50),
                    notes TEXT,
                    UNIQUE(employee_id, attendance_date)
                );
                CREATE TABLE schedules (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    week_start_date DATE NOT NULL,
                    schedule_data JSONB
                );
                CREATE TABLE payslips (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    period_start DATE NOT NULL,
                    period_end DATE NOT NULL,
                    pay_date DATE,
                    earnings JSONB,
                    deductions JSONB,
                    net_pay NUMERIC(10, 2)
                );
                CREATE TABLE leave_requests (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    leave_type VARCHAR(100),
                    start_date DATE,
                    end_date DATE,
                    reason TEXT,
                    status VARCHAR(50) DEFAULT 'Pending'
                );
                CREATE TABLE announcements (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    content TEXT,
                    posted_by_id VARCHAR(255) REFERENCES hr_personnel(id),
                    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    status VARCHAR(50) DEFAULT 'Draft'
                );
            `);
            // Insert Sample Data
            await client.query(`
                INSERT INTO employees (id, first_name, last_name, position, department, branch, status, date_hired) VALUES 
                ('EMP-00123', 'Maria', 'Rodriguez', 'Senior Software Engineer', 'Technology', 'Headquarters', 'Active', '2022-01-15'),
                ('EMP-00124', 'David', 'Lee', 'Project Manager', 'Management', 'Headquarters', 'Active', '2021-03-20'),
                ('EMP-00125', 'Sarah', 'Chen', 'UX Designer', 'Design', 'Downtown Office', 'Active', '2023-05-10'),
                ('EMP-00126', 'John', 'Doe', 'QA Tester', 'Technology', 'Remote', 'On Leave', '2022-08-01');

                INSERT INTO hr_personnel (id, first_name, last_name, email) VALUES 
                ('HR-001', 'Olivia', 'Chen', 'olivia.chen.hr@example.com');

                INSERT INTO admins (id, first_name, last_name, email) VALUES 
                ('ADM-001', 'Super', 'Admin', 'super@example.com');

                INSERT INTO announcements (title, content, posted_by_id, status, posted_at) VALUES
                ('Annual Company Retreat 2024', 'We are excited to announce that this years company retreat will be held at Lakeview Resort from October 10th to 12th. More details to follow!', 'HR-001', 'Published', '2024-08-15 10:00:00'),
                ('New Health Insurance Policy', 'Please review the updated health insurance policy documents available on the employee portal. The new policy will be effective starting next month.', 'HR-001', 'Published', '2024-08-10 14:30:00'),
                ('Q3 Performance Reviews', 'The Q3 performance review cycle will begin next week. Please schedule a meeting with your manager to discuss your progress.', 'HR-001', 'Draft', '2024-08-05 11:00:00');

                INSERT INTO attendance (employee_id, attendance_date, time_in, time_out, status) VALUES
                ('EMP-00123', CURRENT_DATE - 3, (CURRENT_DATE - 3) + interval '9 hour', (CURRENT_DATE - 3) + interval '17 hour', 'Present'),
                ('EMP-00123', CURRENT_DATE - 2, (CURRENT_DATE - 2) + interval '9 hour 15 minute', (CURRENT_DATE - 2) + interval '17 hour 5 minute', 'Late'),
                ('EMP-00123', CURRENT_DATE - 1, (CURRENT_DATE - 1) + interval '8 hour 58 minute', (CURRENT_DATE - 1) + interval '17 hour 2 minute', 'Present'),
                ('EMP-00124', CURRENT_DATE - 1, NULL, NULL, 'Absent');


                INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason, status) VALUES
                ('EMP-00123', 'Vacation', '2024-09-01', '2024-09-05', 'Family trip to Japan.', 'Approved'),
                ('EMP-00124', 'Sick Leave', CURRENT_DATE - 1, CURRENT_DATE - 1, 'Feeling unwell, have a fever.', 'Approved'),
                ('EMP-00125', 'Personal Day', CURRENT_DATE + 5, CURRENT_DATE + 5, 'Important personal appointment.', 'Pending'),
                ('EMP-00123', 'Bereavement', '2024-07-20', '2024-07-22', 'Family emergency.', 'Rejected');
                
                INSERT INTO schedules (employee_id, week_start_date, schedule_data) VALUES
                ('EMP-00123', date_trunc('week', current_date), 
                    '[
                        {"day": "Monday", "date": "Aug 19", "timeIn": "09:00", "timeOut": "17:00", "break": "1 hour", "hours": 7},
                        {"day": "Tuesday", "date": "Aug 20", "timeIn": "09:00", "timeOut": "17:00", "break": "1 hour", "hours": 7},
                        {"day": "Wednesday", "date": "Aug 21", "timeIn": "09:00", "timeOut": "17:00", "break": "1 hour", "hours": 7},
                        {"day": "Thursday", "date": "Aug 22", "timeIn": "09:00", "timeOut": "17:00", "break": "1 hour", "hours": 7},
                        {"day": "Friday", "date": "Aug 23", "timeIn": "09:00", "timeOut": "17:00", "break": "1 hour", "hours": 7},
                        {"day": "Saturday", "date": "Aug 24", "timeIn": "OFF", "timeOut": "OFF", "break": "-", "hours": 0},
                        {"day": "Sunday", "date": "Aug 25", "timeIn": "OFF", "timeOut": "OFF", "break": "-", "hours": 0}
                    ]'::jsonb
                );

                INSERT INTO payslips (employee_id, period_start, period_end, pay_date, earnings, deductions, net_pay) VALUES
                ('EMP-00123', (date_trunc('month', current_date) - interval '1 month'), (date_trunc('month', current_date) - interval '1 day'), current_date,
                    '[
                        {"name": "Basic Salary", "amount": 75000.00},
                        {"name": "Overtime Pay", "amount": 5000.00},
                        {"name": "Transportation Allowance", "amount": 2000.00}
                    ]'::jsonb,
                    '[
                        {"name": "Tax", "amount": 8500.00},
                        {"name": "Social Security", "amount": 1500.00},
                        {"name": "Health Insurance", "amount": 1000.00}
                    ]'::jsonb,
                    61000.00
                );
            `);
            await client.query('COMMIT');
            console.log("Database initialized successfully.");
        } else {
        // console.log("Database schema already exists. Skipping creation.");
        }
    } catch (e) {
        if (client) {
            await client.query('ROLLBACK');
        }
        console.error("Database initialization failed:", e.message);
    } finally{
        if (client) {
            client.release();
        }
    }
}
// Immediately try to initialize the DB when this module is loaded.
initializeDb();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview This file contains all the functions for fetching data from the database.
 * It acts as a centralized and server-side-only data access layer.
 * All functions include error handling to return safe default values in case of
 * a database error, preventing the application from crashing.
 */ /* __next_internal_action_entry_do_not_use__ [{"002dd23120083517493f1856b5ce3e27ca1098d244":"getEmployeesWithPayslipStatus","0041d2031c64a9612535dcab2138817eeef5f5974c":"getHRDashboardData","0081b652a1ba97ae17200b5330a84c1eaee2045820":"getPastAnnouncements","00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524":"getLeaveRequests","00c619ec02afa7d57568b4e0406ecec6a6bf21e12a":"getEmployees","00d5a8089689a75a56fcc38e7013d6855f6b64deb6":"getEmployeesForScheduling","40360376d7fc3085764bf086e59364b9a7bd931021":"getAttendanceData","40885e633df6cf5d24407734484d3a4bcc7bc878e0":"getPastLeaveRequests","40a5b75da077963d47ebe0f5fc53e2a123ce19ae24":"getDailyAttendanceData","40b0eb7305a3d24b1488b76f6edba4bab27c969bfe":"getSchedule","40b7b79cef1785e3c75ae17348edfad469c103bb85":"getEmployeeDashboardData","40e36f9c74786f4cdb1a562f7c79abdf9440a06d44":"getPayPeriods","40e89487447e1f133bfc1c734cc2338626fb053105":"createLeaveRequest","40fdc91fc4350406f04eb4a57938354df3e9a76bac":"getReportDetails"},"",""] */ __turbopack_context__.s({
    "createLeaveRequest": (()=>createLeaveRequest),
    "getAttendanceData": (()=>getAttendanceData),
    "getDailyAttendanceData": (()=>getDailyAttendanceData),
    "getEmployeeDashboardData": (()=>getEmployeeDashboardData),
    "getEmployees": (()=>getEmployees),
    "getEmployeesForScheduling": (()=>getEmployeesForScheduling),
    "getEmployeesWithPayslipStatus": (()=>getEmployeesWithPayslipStatus),
    "getHRDashboardData": (()=>getHRDashboardData),
    "getLeaveRequests": (()=>getLeaveRequests),
    "getPastAnnouncements": (()=>getPastAnnouncements),
    "getPastLeaveRequests": (()=>getPastLeaveRequests),
    "getPayPeriods": (()=>getPayPeriods),
    "getReportDetails": (()=>getReportDetails),
    "getSchedule": (()=>getSchedule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.mjs [app-rsc] (ecmascript)");
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
    try {
        const employeeCountQuery = "SELECT COUNT(*) FROM employees WHERE status = 'Active'";
        const pendingLeaveQuery = "SELECT COUNT(*) FROM leave_requests WHERE status = 'Pending'";
        const recentActivityQuery = `
            SELECT 
                lr.id, 
                e.first_name || ' ' || e.last_name as employee_name, 
                lr.leave_type, 
                lr.start_date 
            FROM leave_requests lr
            JOIN employees e ON lr.employee_id = e.id
            ORDER BY lr.id DESC
            LIMIT 5;
        `;
        const [employeeResult, pendingLeaveResult, activityResult] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(employeeCountQuery),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(pendingLeaveQuery),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(recentActivityQuery)
        ]);
        if (!employeeResult || !pendingLeaveResult || !activityResult) {
            throw new Error("One or more database queries failed for HR dashboard.");
        }
        const employeeCount = employeeResult.rows[0].count;
        const pendingLeaves = pendingLeaveResult.rows[0].count;
        const recentActivities = activityResult.rows.map((row)=>({
                id: row.id,
                activity: `${row.employee_name} requested ${row.leave_type.toLowerCase()} leave`,
                timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(row.start_date), {
                    addSuffix: true
                }),
                type: 'Leave'
            }));
        return {
            stats: [
                {
                    title: 'Total Employees',
                    value: employeeCount,
                    icon: '<Users />',
                    change: '+2 this month'
                },
                {
                    title: 'On Time Percentage',
                    value: '96%',
                    icon: '<CheckCircle />',
                    change: '-1% from last month'
                },
                {
                    title: 'Active Job Postings',
                    value: '4',
                    icon: '<Briefcase />',
                    change: '+1 new posting'
                },
                {
                    title: 'Pending Leave Requests',
                    value: pendingLeaves,
                    icon: '<Bell />',
                    change: `${pendingLeaves} new today`
                }
            ],
            recentActivities
        };
    } catch (error) {
        console.error("Database Error fetching HR dashboard data:", error);
        return {
            stats: [],
            recentActivities: []
        };
    }
}
async function getPastAnnouncements() {
    try {
        const announcementsQuery = `
            SELECT 
                a.id, 
                a.title, 
                p.first_name || ' ' || p.last_name as "postedBy",
                to_char(a.posted_at, 'YYYY-MM-DD') as date,
                a.status
            FROM announcements a
            JOIN hr_personnel p ON a.posted_by_id = p.id
            ORDER BY a.posted_at DESC;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(announcementsQuery);
        return result ? result.rows : [];
    } catch (error) {
        console.error("Database error fetching announcements:", error);
        return [];
    }
}
async function getDailyAttendanceData(date) {
    try {
        const attendanceQuery = `
            SELECT 
                e.id, 
                e.first_name || ' ' || e.last_name as name,
                e.position,
                e.branch,
                to_char(a.time_in, 'HH24:MI') as "timeIn",
                to_char(a.time_out, 'HH24:MI') as "timeOut",
                a.status
            FROM employees e
            LEFT JOIN attendance a ON e.id = a.employee_id AND a.attendance_date = $1
            WHERE e.status = 'Active'
            ORDER BY e.last_name, e.first_name;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(attendanceQuery, [
            date
        ]);
        if (!result) return [];
        return result.rows.map((row)=>({
                ...row,
                status: row.status || 'Absent'
            }));
    } catch (error) {
        console.error("Database Error fetching daily attendance data:", error);
        return [];
    }
}
async function getEmployees() {
    try {
        const employeesQuery = `
            SELECT 
                id,
                first_name || ' ' || last_name as name,
                position,
                branch,
                status
            FROM employees
            ORDER BY last_name, first_name;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(employeesQuery);
        return result ? result.rows : [];
    } catch (error) {
        console.error("Database error fetching employees:", error);
        return [];
    }
}
async function getLeaveRequests() {
    try {
        const leaveRequestsQuery = `
            SELECT 
                lr.id,
                e.first_name || ' ' || e.last_name as "employeeName",
                e.id as "employeeId",
                lr.leave_type,
                to_char(lr.start_date, 'YYYY-MM-DD') as "startDate",
                to_char(lr.end_date, 'YYYY-MM-DD') as "endDate",
                lr.reason,
                lr.status
            FROM leave_requests lr
            JOIN employees e ON lr.employee_id = e.id
            ORDER BY 
                CASE lr.status
                    WHEN 'Pending' THEN 1
                    WHEN 'Approved' THEN 2
                    WHEN 'Rejected' THEN 3
                    ELSE 4
                END,
                lr.start_date ASC;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(leaveRequestsQuery);
        return result ? result.rows : [];
    } catch (error) {
        console.error("Database error fetching leave requests:", error);
        return [];
    }
}
async function getEmployeesWithPayslipStatus() {
    try {
        const employeesQuery = `
            SELECT 
                e.id,
                e.first_name || ' ' || e.last_name as name,
                e.position,
                e.department,
                CASE 
                    WHEN p.id IS NOT NULL THEN 'Generated'
                    ELSE 'Pending'
                END as "payslipStatus"
            FROM employees e
            LEFT JOIN payslips p ON e.id = p.employee_id 
                AND p.period_start >= date_trunc('month', current_date)
                AND p.period_end <= (date_trunc('month', current_date) + interval '1 month - 1 day')
            WHERE e.status = 'Active'
            ORDER BY e.last_name, e.first_name;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(employeesQuery);
        return result ? result.rows : [];
    } catch (error) {
        console.error("Database error fetching employee payslip status:", error);
        return [];
    }
}
async function getEmployeesForScheduling() {
    try {
        const employeesQuery = `
            SELECT id, first_name || ' ' || last_name as name
            FROM employees
            WHERE status = 'Active'
            ORDER BY last_name, first_name;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(employeesQuery);
        if (!result) return [];
        return result.rows.map((emp)=>({
                ...emp,
                shift: '9:00 - 17:00'
            }));
    } catch (error) {
        console.error("Database Error fetching employees for scheduling:", error);
        return [];
    }
}
async function getEmployeeDashboardData(employeeId) {
    try {
        const employeeQuery = "SELECT id as \"employeeId\", first_name || ' ' || last_name as name, position, department FROM employees WHERE id = $1";
        const announcementsQuery = "SELECT id, title, content, to_char(posted_at, 'Month DD, YYYY') as date FROM announcements WHERE status = 'Published' ORDER BY posted_at DESC LIMIT 5";
        const [employeeResult, announcementsResult] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(employeeQuery, [
                employeeId
            ]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(announcementsQuery)
        ]);
        return {
            employee: employeeResult?.rows[0] || null,
            announcements: announcementsResult?.rows || []
        };
    } catch (error) {
        console.error("Database Error fetching employee dashboard data:", error);
        return {
            employee: null,
            announcements: []
        };
    }
}
async function getAttendanceData(employeeId) {
    const defaultData = {
        summary: {
            daysAttended: 0,
            lates: 0,
            absences: 0,
            totalHours: 0,
            availableLeaves: 0
        },
        records: []
    };
    try {
        const attendanceQuery = `
            SELECT 
                attendance_date, 
                to_char(time_in, 'HH24:MI') as "time_in", 
                to_char(time_out, 'HH24:MI') as "time_out", 
                status
            FROM attendance
            WHERE employee_id = $1 
              AND attendance_date >= date_trunc('month', current_date)
            ORDER BY attendance_date DESC;
        `;
        const leaveBalanceQuery = `
            SELECT available_leaves FROM employees WHERE id = $1;
        `;
        const [attendanceResult, leaveResult] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(attendanceQuery, [
                employeeId
            ]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(leaveBalanceQuery, [
                employeeId
            ])
        ]);
        if (!attendanceResult || !leaveResult) {
            return defaultData;
        }
        const records = attendanceResult.rows.map((r)=>({
                date: new Date(r.attendance_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }),
                timeIn: r.time_in,
                timeOut: r.time_out,
                status: r.status
            }));
        let daysAttended = 0;
        let lates = 0;
        let absences = 0;
        let totalHours = 0;
        records.forEach((record)=>{
            if (record.status === 'Present' || record.status === 'Late') {
                daysAttended++;
                totalHours += 8;
            }
            if (record.status === 'Late') {
                lates++;
            }
        });
        const availableLeaves = leaveResult.rows.length > 0 ? leaveResult.rows[0].available_leaves : 0;
        const summary = {
            daysAttended,
            lates,
            absences,
            totalHours,
            availableLeaves
        };
        return {
            summary,
            records
        };
    } catch (error) {
        console.error("Database Error fetching attendance data:", error);
        return defaultData;
    }
}
async function getPastLeaveRequests(employeeId) {
    try {
        const pastRequestsQuery = `
            SELECT 
                id, 
                leave_type, 
                to_char(start_date, 'YYYY-MM-DD') as "startDate", 
                to_char(end_date, 'YYYY-MM-DD') as "endDate", 
                status 
            FROM leave_requests 
            WHERE employee_id = $1 
            ORDER BY start_date DESC;
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(pastRequestsQuery, [
            employeeId
        ]);
        return result ? result.rows : [];
    } catch (error) {
        console.error("Database error fetching leave requests:", error);
        return [];
    }
}
async function createLeaveRequest(leaveRequest) {
    const { employeeId, leaveType, startDate, endDate, reason } = leaveRequest;
    try {
        const insertQuery = `
            INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(insertQuery, [
            employeeId,
            leaveType,
            startDate,
            endDate,
            reason
        ]);
    } catch (error) {
        console.error("Database error creating leave request:", error);
        throw new Error("Failed to create leave request in database.");
    }
}
async function getPayPeriods(employeeId) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(`SELECT 
                id,
                period_start,
                period_end,
                to_char(pay_date, 'Month DD, YYYY') as "payDate",
                earnings,
                deductions,
                net_pay
             FROM payslips 
             WHERE employee_id = $1 
             ORDER BY period_start DESC`, [
            employeeId
        ]);
        if (!result) return [];
        const formattedPeriods = result.rows.map((p)=>({
                ...p,
                period: `${new Date(p.period_start).toLocaleDateString()} - ${new Date(p.period_end).toLocaleDateString()}`
            }));
        return formattedPeriods;
    } catch (error) {
        console.error("Failed to fetch pay periods:", error);
        return [];
    }
}
async function getSchedule(employeeId) {
    try {
        const scheduleQuery = `
            SELECT schedule_data 
            FROM schedules
            WHERE employee_id = $1 
              AND week_start_date = date_trunc('week', current_date);
        `;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(scheduleQuery, [
            employeeId
        ]);
        if (result && result.rows.length > 0 && result.rows[0].schedule_data) {
            return result.rows[0].schedule_data;
        }
        return [];
    } catch (error) {
        console.error("Database error fetching schedule:", error);
        return [];
    }
}
async function getReportDetails(id) {
    try {
        // In a real application, this would query the database.
        // For now, we return null to simulate a report not being found
        // which demonstrates the UI's handling of this case.
        return null;
    } catch (error) {
        console.error("Database Error fetching report details:", error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getHRDashboardData,
    getPastAnnouncements,
    getDailyAttendanceData,
    getEmployees,
    getLeaveRequests,
    getEmployeesWithPayslipStatus,
    getEmployeesForScheduling,
    getEmployeeDashboardData,
    getAttendanceData,
    getPastLeaveRequests,
    createLeaveRequest,
    getPayPeriods,
    getSchedule,
    getReportDetails
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHRDashboardData, "0041d2031c64a9612535dcab2138817eeef5f5974c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPastAnnouncements, "0081b652a1ba97ae17200b5330a84c1eaee2045820", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDailyAttendanceData, "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeaveRequests, "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesWithPayslipStatus, "002dd23120083517493f1856b5ce3e27ca1098d244", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesForScheduling, "00d5a8089689a75a56fcc38e7013d6855f6b64deb6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeDashboardData, "40b7b79cef1785e3c75ae17348edfad469c103bb85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendanceData, "40360376d7fc3085764bf086e59364b9a7bd931021", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPastLeaveRequests, "40885e633df6cf5d24407734484d3a4bcc7bc878e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "40e89487447e1f133bfc1c734cc2338626fb053105", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPayPeriods, "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSchedule, "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReportDetails, "40fdc91fc4350406f04eb4a57938354df3e9a76bac", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "002dd23120083517493f1856b5ce3e27ca1098d244": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesWithPayslipStatus"]),
    "0041d2031c64a9612535dcab2138817eeef5f5974c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHRDashboardData"]),
    "0081b652a1ba97ae17200b5330a84c1eaee2045820": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastAnnouncements"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeaveRequests"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesForScheduling"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttendanceData"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastLeaveRequests"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDailyAttendanceData"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchedule"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeDashboardData"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayPeriods"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReportDetails"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "002dd23120083517493f1856b5ce3e27ca1098d244": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dd23120083517493f1856b5ce3e27ca1098d244"]),
    "0041d2031c64a9612535dcab2138817eeef5f5974c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0041d2031c64a9612535dcab2138817eeef5f5974c"]),
    "0081b652a1ba97ae17200b5330a84c1eaee2045820": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0081b652a1ba97ae17200b5330a84c1eaee2045820"]),
    "00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00acc9d5c2e411c4f8f6e3b8e0c4a2c3da73708524"]),
    "00c619ec02afa7d57568b4e0406ecec6a6bf21e12a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c619ec02afa7d57568b4e0406ecec6a6bf21e12a"]),
    "00d5a8089689a75a56fcc38e7013d6855f6b64deb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00d5a8089689a75a56fcc38e7013d6855f6b64deb6"]),
    "40360376d7fc3085764bf086e59364b9a7bd931021": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40360376d7fc3085764bf086e59364b9a7bd931021"]),
    "40885e633df6cf5d24407734484d3a4bcc7bc878e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40885e633df6cf5d24407734484d3a4bcc7bc878e0"]),
    "40a5b75da077963d47ebe0f5fc53e2a123ce19ae24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a5b75da077963d47ebe0f5fc53e2a123ce19ae24"]),
    "40b0eb7305a3d24b1488b76f6edba4bab27c969bfe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b0eb7305a3d24b1488b76f6edba4bab27c969bfe"]),
    "40b7b79cef1785e3c75ae17348edfad469c103bb85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b7b79cef1785e3c75ae17348edfad469c103bb85"]),
    "40e36f9c74786f4cdb1a562f7c79abdf9440a06d44": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e36f9c74786f4cdb1a562f7c79abdf9440a06d44"]),
    "40e89487447e1f133bfc1c734cc2338626fb053105": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e89487447e1f133bfc1c734cc2338626fb053105"]),
    "40fdc91fc4350406f04eb4a57938354df3e9a76bac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40fdc91fc4350406f04eb4a57938354df3e9a76bac"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/payslip/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$payslip$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
"[project]/src/app/dashboard/payslip/payslip-client-page.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/payslip/payslip-client-page.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/payslip/payslip-client-page.jsx <module evaluation>", "default");
}}),
"[project]/src/app/dashboard/payslip/payslip-client-page.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/dashboard/payslip/payslip-client-page.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/dashboard/payslip/payslip-client-page.jsx", "default");
}}),
"[project]/src/app/dashboard/payslip/payslip-client-page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$payslip$2f$payslip$2d$client$2d$page$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/payslip/payslip-client-page.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$payslip$2f$payslip$2d$client$2d$page$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/payslip/payslip-client-page.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$payslip$2f$payslip$2d$client$2d$page$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/dashboard/payslip/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview This file defines the Payslip page for the employee dashboard.
 * It allows an employee to view their detailed payslip for a selected period,
 * including earnings, deductions, and net pay.
 */ __turbopack_context__.s({
    "default": (()=>PayslipPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$payslip$2f$payslip$2d$client$2d$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/payslip/payslip-client-page.jsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
// Hardcoded employee ID for demonstration purposes.
const EMPLOYEE_ID = 'EMP-00123';
async function PayslipPage() {
    const payPeriods = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayPeriods"])(EMPLOYEE_ID);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$payslip$2f$payslip$2d$client$2d$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        payPeriods: payPeriods
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/payslip/page.jsx",
        lineNumber: 20,
        columnNumber: 12
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/dashboard/payslip/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/payslip/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9aa37f14._.js.map