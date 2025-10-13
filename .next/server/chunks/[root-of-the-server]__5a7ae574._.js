module.exports = {

"[project]/.next-internal/server/app/api/auth/login/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/pg [external] (pg, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/db.js [app-route] (ecmascript)": ((__turbopack_context__) => {
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
// Create a new connection pool.
// A pool is better than a single client for web applications
// because it can manage multiple connections at once.
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'employeedb',
    password: process.env.DB_PASSWORD || 'password',
    port: parseInt(process.env.DB_PORT || '5432', 10)
});
const query = (text, params)=>{
    return pool.query(text, params);
};
async function initializeDb() {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        // Check if employees table exists
        const employeesTableExists = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE  table_name   = 'employees'
            );
        `);
        if (!employeesTableExists.rows[0].exists) {
            console.log("Creating database schema...");
            await client.query(`
                -- Table for storing basic employee data
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
                    status VARCHAR(50) DEFAULT 'Active', -- e.g., Active, On Leave, Resigned
                    photo_url TEXT,
                    password VARCHAR(255)
                );

                -- Table for HR personnel accounts
                CREATE TABLE hr_personnel (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL
                );
                
                -- Table for Administrator accounts
                CREATE TABLE admins (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL
                );

                -- Table for attendance records
                CREATE TABLE attendance (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    attendance_date DATE NOT NULL,
                    time_in TIMESTAMP,
                    time_out TIMESTAMP,
                    status VARCHAR(50), -- e.g., Present, Late, Absent
                    notes TEXT,
                    UNIQUE(employee_id, attendance_date)
                );
                
                -- Table for schedules
                CREATE TABLE schedules (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    week_start_date DATE NOT NULL,
                    schedule_data JSONB -- Stores the entire week's schedule as a JSON object
                );

                -- Table for payslips
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
                
                -- Table for leave requests
                CREATE TABLE leave_requests (
                    id SERIAL PRIMARY KEY,
                    employee_id VARCHAR(255) REFERENCES employees(id),
                    leave_type VARCHAR(100),
                    start_date DATE,
                    end_date DATE,
                    reason TEXT,
                    status VARCHAR(50) DEFAULT 'Pending' -- e.g., Pending, Approved, Rejected
                );

                -- Table for company-wide announcements
                CREATE TABLE announcements (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    content TEXT,
                    posted_by INTEGER REFERENCES hr_personnel(id),
                    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    status VARCHAR(50) DEFAULT 'Draft' -- e.g., Draft, Published
                );
            `);
            console.log("Inserting sample data...");
            /**
             * Default User Accounts for Testing:
             * 
             * 1. Employee Account
             *    - Identifier: EMP-00123
             *    - Password:   password
             * 
             * 2. HR Account
             *    - Identifier: olivia.chen.hr@example.com
             *    - Password:   password
             * 
             * 3. Admin Account
             *    - Identifier: super@example.com
             *    - Password:   password
             */ await client.query(`
                INSERT INTO employees (id, first_name, last_name, position, department, branch, status, password) VALUES 
                ('EMP-00123', 'Maria', 'Rodriguez', 'Senior Software Engineer', 'Technology', 'Headquarters', 'Active', 'password');

                INSERT INTO hr_personnel (first_name, last_name, email, password) VALUES 
                ('Olivia', 'Chen', 'olivia.chen.hr@example.com', 'password');

                INSERT INTO admins (first_name, last_name, email, password) VALUES 
                ('Super', 'Admin', 'super@example.com', 'password');

                INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason, status) VALUES
                ('EMP-00123', 'Vacation', '2024-09-01', '2024-09-05', 'Family trip to Japan.', 'Pending');
            `);
            console.log("Database initialized successfully.");
        }
        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally{
        client.release();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/auth/login/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/**
 * @fileoverview API route for handling user authentication.
 * It validates credentials against the database for all user roles.
 */ __turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
async function POST(req) {
    try {
        const { identifier, password } = await req.json();
        if (!identifier || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Identifier and password are required.'
            }, {
                status: 400
            });
        }
        const isEmail = identifier.includes('@');
        if (isEmail) {
            // 1. Check HR personnel table
            const hrResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('SELECT * FROM hr_personnel WHERE email = $1', [
                identifier
            ]);
            if (hrResult.rows.length > 0) {
                const user = hrResult.rows[0];
                if (user.password && password === user.password) {
                    const responseUser = {
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        role: 'hr'
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        message: 'Login successful',
                        user: responseUser,
                        redirectUrl: '/hr/dashboard'
                    }, {
                        status: 200
                    });
                }
            }
            // 2. If not in HR, check Admins table
            const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])('SELECT * FROM admins WHERE email = $1', [
                identifier
            ]);
            if (adminResult.rows.length > 0) {
                const user = adminResult.rows[0];
                if (user.password && password === user.password) {
                    const responseUser = {
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        role: 'admin'
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        message: 'Login successful',
                        user: responseUser,
                        redirectUrl: '/admin/dashboard'
                    }, {
                        status: 200
                    });
                }
            }
        } else {
            // 3. If not an email, assume it's an employee ID
            const employeeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])("SELECT * FROM employees WHERE id = $1 AND status = 'Active'", [
                identifier
            ]);
            if (employeeResult.rows.length > 0) {
                const user = employeeResult.rows[0];
                if (user.password && password === user.password) {
                    const responseUser = {
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`,
                        role: 'employee'
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        message: 'Login successful',
                        user: responseUser,
                        redirectUrl: '/dashboard'
                    }, {
                        status: 200
                    });
                }
            }
        }
        // If no user was authenticated after all checks, return invalid credentials.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Invalid credentials.'
        }, {
            status: 401
        });
    } catch (error) {
        console.error('Login API Error:', error);
        // Return a generic error to the client
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'An internal server error occurred.'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5a7ae574._.js.map