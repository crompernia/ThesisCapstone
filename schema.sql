-- ============================================
-- Human Resources Management System (HRMS)
-- Complete Database Schema
-- PostgreSQL Database
-- ============================================
-- This schema is generated based on actual usage across the entire codebase.
-- It includes all tables currently implemented in db.js and additional tables
-- referenced in the code for future implementation.
--
-- Last Updated: 2025-10-15
-- ============================================

-- Drop existing tables in proper order (reverse dependency order)
DROP TABLE IF EXISTS reports CASCADE;
DROP TABLE IF EXISTS payslips CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS leave_requests CASCADE;
DROP TABLE IF EXISTS announcements CASCADE;
DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS positions CASCADE;
DROP TABLE IF EXISTS branches CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;

-- ============================================
-- CORE TABLE: accounts
-- ============================================
-- Central table for all system users (Employees, HR Personnel, Admins)
-- Replaces separate employees, hr_personnel, and admins tables
CREATE TABLE accounts (
    id VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('Employee', 'HR', 'Admin')),
    position VARCHAR(255),
    department VARCHAR(255),
    branch VARCHAR(255),
    status VARCHAR(50) NOT NULL CHECK (status IN ('Active', 'Pending Approval', 'Inactive')),
    date_hired DATE NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(50),
    available_leaves INT DEFAULT 0,
    sss_number VARCHAR(255),
    philhealth_number VARCHAR(255),
    pagibig_number VARCHAR(255),
    tin VARCHAR(255),
    managed_branches VARCHAR(255)[] -- Array field for HR personnel to track which branches they manage
);

-- Performance indexes
CREATE INDEX idx_accounts_email ON accounts(email);
CREATE INDEX idx_accounts_role ON accounts(role);
CREATE INDEX idx_accounts_status ON accounts(status);
CREATE INDEX idx_accounts_branch ON accounts(branch);

COMMENT ON TABLE accounts IS 'Unified accounts table for all users: Employees, HR Personnel, and Admins';
COMMENT ON COLUMN accounts.role IS 'User role: Employee, HR, or Admin';
COMMENT ON COLUMN accounts.status IS 'Account status: Active, Pending Approval, or Inactive';
COMMENT ON COLUMN accounts.managed_branches IS 'Array of branch names managed by HR personnel (only for role=HR)';

-- ============================================
-- MASTER DATA: branches
-- ============================================
-- Stores company branch/location information
CREATE TABLE branches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    coordinates VARCHAR(255)
);

COMMENT ON TABLE branches IS 'Company branches/locations master data';
COMMENT ON COLUMN branches.coordinates IS 'Geographic coordinates for geolocation features';

-- ============================================
-- MASTER DATA: positions
-- ============================================
-- Stores job positions and their daily rates
CREATE TABLE positions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    rate NUMERIC(10, 2) NOT NULL
);

COMMENT ON TABLE positions IS 'Job positions master data with daily rates';
COMMENT ON COLUMN positions.rate IS 'Daily rate for this position in local currency';

-- ============================================
-- MASTER DATA: departments (Future)
-- ============================================
-- Stores department information per branch
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    branch_id INT REFERENCES branches(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(name, branch_id)
);

COMMENT ON TABLE departments IS 'Departments within each branch';

-- ============================================
-- ANNOUNCEMENTS
-- ============================================
-- Company-wide announcements posted by HR
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status VARCHAR(50) NOT NULL CHECK (status IN ('Draft', 'Published')),
    posted_by VARCHAR(255) REFERENCES accounts(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_announcements_status ON announcements(status);
CREATE INDEX idx_announcements_created_at ON announcements(created_at DESC);

COMMENT ON TABLE announcements IS 'Company-wide announcements managed by HR';
COMMENT ON COLUMN announcements.posted_by IS 'References accounts.id of HR personnel who created this announcement';
COMMENT ON COLUMN announcements.status IS 'Draft or Published';

-- ============================================
-- LEAVE MANAGEMENT: leave_requests
-- ============================================
-- Employee leave requests and their approval status
CREATE TABLE leave_requests (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    leave_type VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason TEXT,
    status VARCHAR(50) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Approved', 'Rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_leave_requests_employee ON leave_requests(employee_id);
CREATE INDEX idx_leave_requests_status ON leave_requests(status);
CREATE INDEX idx_leave_requests_created_at ON leave_requests(created_at DESC);

COMMENT ON TABLE leave_requests IS 'Employee leave requests with approval workflow';
COMMENT ON COLUMN leave_requests.leave_type IS 'e.g., Sick Leave, Vacation Leave, Emergency Leave';
COMMENT ON COLUMN leave_requests.status IS 'Pending, Approved, or Rejected';

-- ============================================
-- ATTENDANCE TRACKING (Future Implementation)
-- ============================================
-- Daily attendance records with clock-in/clock-out times
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    time_in TIMESTAMPTZ,
    time_out TIMESTAMPTZ,
    status VARCHAR(50) DEFAULT 'Present' CHECK (status IN ('Present', 'Late', 'Absent', 'Leave')),
    hours_worked NUMERIC(5, 2),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(employee_id, date)
);

-- Performance indexes
CREATE INDEX idx_attendance_employee_date ON attendance(employee_id, date DESC);
CREATE INDEX idx_attendance_date ON attendance(date DESC);

COMMENT ON TABLE attendance IS 'Daily attendance records for all employees';
COMMENT ON COLUMN attendance.hours_worked IS 'Total hours worked for the day';
COMMENT ON COLUMN attendance.status IS 'Present, Late, Absent, or Leave';

-- ============================================
-- SCHEDULING (Future Implementation)
-- ============================================
-- Employee work schedules
CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    shift_start TIME NOT NULL,
    shift_end TIME NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(employee_id, date)
);

-- Performance indexes
CREATE INDEX idx_schedules_employee_date ON schedules(employee_id, date);
CREATE INDEX idx_schedules_date ON schedules(date);

COMMENT ON TABLE schedules IS 'Employee work schedules by date';

-- ============================================
-- PAYROLL: payslips (Future Implementation)
-- ============================================
-- Generated payslips for each pay period
CREATE TABLE payslips (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(255) NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    pay_period VARCHAR(50) NOT NULL,
    pay_date DATE NOT NULL,

    -- Earnings
    basic_pay NUMERIC(10, 2) DEFAULT 0,
    daily_rate NUMERIC(10, 2) DEFAULT 0,
    days_worked INT DEFAULT 0,
    overtime NUMERIC(10, 2) DEFAULT 0,
    night_differential NUMERIC(10, 2) DEFAULT 0,
    allowances NUMERIC(10, 2) DEFAULT 0,

    -- Government Contributions
    sss_deduction NUMERIC(10, 2) DEFAULT 0,
    philhealth_deduction NUMERIC(10, 2) DEFAULT 0,
    pagibig_deduction NUMERIC(10, 2) DEFAULT 0,
    tax_deduction NUMERIC(10, 2) DEFAULT 0,

    -- Loans
    sss_loan NUMERIC(10, 2) DEFAULT 0,
    hdmf_loan NUMERIC(10, 2) DEFAULT 0,
    company_loan NUMERIC(10, 2) DEFAULT 0,
    other_deductions NUMERIC(10, 2) DEFAULT 0,

    -- Net Pay
    net_pay NUMERIC(10, 2) NOT NULL,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(employee_id, pay_period)
);

-- Performance indexes
CREATE INDEX idx_payslips_employee ON payslips(employee_id);
CREATE INDEX idx_payslips_pay_period ON payslips(pay_period);
CREATE INDEX idx_payslips_pay_date ON payslips(pay_date DESC);

COMMENT ON TABLE payslips IS 'Generated payslips for each employee per pay period';
COMMENT ON COLUMN payslips.pay_period IS 'e.g., "January 2025", "February 2025"';
COMMENT ON COLUMN payslips.night_differential IS 'Additional pay for night shift hours';
COMMENT ON COLUMN payslips.hdmf_loan IS 'Home Development Mutual Fund (Pag-IBIG) loan deduction';

-- ============================================
-- REPORTS (Future Implementation)
-- ============================================
-- System-generated reports
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(100) NOT NULL,
    generated_by VARCHAR(255) REFERENCES accounts(id) ON DELETE SET NULL,
    generated_at TIMESTAMPTZ DEFAULT NOW(),
    data JSONB,
    status VARCHAR(50) DEFAULT 'Draft' CHECK (status IN ('Draft', 'Completed', 'Failed'))
);

-- Performance indexes
CREATE INDEX idx_reports_type ON reports(report_type);
CREATE INDEX idx_reports_generated_at ON reports(generated_at DESC);

COMMENT ON TABLE reports IS 'System-generated reports with flexible JSONB data storage';
COMMENT ON COLUMN reports.data IS 'Report data stored as JSON for flexibility';

-- ============================================
-- SAMPLE DATA
-- ============================================

-- Sample branches
INSERT INTO branches (name, coordinates) VALUES
('Headquarters', '14.5995,120.9842'),
('Downtown Office', '14.5547,121.0244'),
('Remote', '0.0000,0.0000');

-- Sample positions
INSERT INTO positions (title, rate) VALUES
('Senior Software Engineer', 1200.00),
('Project Manager', 1500.00),
('UX Designer', 1000.00),
('QA Tester', 800.00),
('Software Engineer', 1000.00);

-- Sample admin account
INSERT INTO accounts (id, first_name, last_name, email, password, role, status, date_hired, available_leaves) VALUES
('ADMIN-001', 'Super', 'Admin', 'super@example.com', 'password', 'Admin', 'Active', '2020-01-01', 0);

-- Sample HR account
INSERT INTO accounts (id, first_name, last_name, email, password, role, status, date_hired, available_leaves, managed_branches) VALUES
('HR-001', 'Olivia', 'Chen', 'olivia.chen.hr@example.com', 'password', 'HR', 'Active', '2021-01-15', 15, ARRAY['Headquarters', 'Downtown Office']);

-- Sample employee accounts
INSERT INTO accounts (id, first_name, last_name, middle_name, email, password, role, position, department, branch, status, date_hired, date_of_birth, gender, available_leaves, sss_number, philhealth_number, pagibig_number, tin) VALUES
('EMP-00123', 'Maria', 'Rodriguez', 'Veronica', 'maria.rodriguez@example.com', 'password', 'Employee', 'Senior Software Engineer', 'Technology', 'Headquarters', 'Active', '2022-01-15', '2001-12-01', 'Female', 15, '34-1234567-8', '12-123456789-0', '1234-5678-9012', '123-456-789-000'),
('EMP-00456', 'David', 'Lee', 'Sanchez', 'david.lee@example.com', 'password', 'Employee', 'Project Manager', 'Management', 'Headquarters', 'Active', '2021-05-20', '2001-10-01', 'Male', 15, '34-2345678-9', '12-234567890-1', '2345-6789-0123', '234-567-890-111'),
('EMP-00789', 'James', 'White', 'Vin', 'james.white@example.com', 'password', 'Employee', 'UX Designer', 'Design', 'Downtown Office', 'Active', '2022-08-01', '1999-03-06', 'Male', 15, '34-3456789-0', '12-345678901-2', '3456-7890-1234', '345-678-901-222'),
('EMP-01011', 'Emily', 'Carter', 'San', 'emily.carter@example.com', 'password', 'Employee', 'QA Tester', 'Technology', 'Remote', 'Active', '2023-02-10', '2002-04-20', 'Female', 12, '34-4567890-1', '12-456789012-3', '4567-8901-2345', '456-789-012-333'),
('EMP-01121', 'Sarah', 'Williams', 'Rain', 'sarah.williams@example.com', 'password', 'Employee', 'Software Engineer', 'Technology', 'Headquarters', 'Active', '2023-06-22', '2000-05-25', 'Female', 15, '34-5678901-2', '12-567890123-4', '5678-9012-3456', '567-890-123-444');

-- Sample announcements
INSERT INTO announcements (title, content, status, posted_by, created_at) VALUES
('Welcome to the Company', 'We are excited to have you join our team!', 'Published', 'HR-001', NOW() - INTERVAL '30 days'),
('Holiday Schedule', 'Please note the upcoming holiday schedule for December.', 'Published', 'HR-001', NOW() - INTERVAL '15 days'),
('System Maintenance', 'The HRMS will be under maintenance this weekend.', 'Draft', 'HR-001', NOW() - INTERVAL '5 days');

-- Sample leave requests
INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason, status, created_at) VALUES
('EMP-00123', 'Vacation Leave', '2024-09-01', '2024-09-05', 'Family trip to Japan.', 'Pending', NOW() - INTERVAL '10 days'),
('EMP-00456', 'Sick Leave', '2024-08-20', '2024-08-21', 'Fever and flu.', 'Approved', NOW() - INTERVAL '25 days'),
('EMP-01011', 'Vacation Leave', '2024-07-20', '2024-07-25', 'Annual vacation.', 'Approved', NOW() - INTERVAL '60 days');

-- ============================================
-- END OF SCHEMA
-- ============================================
