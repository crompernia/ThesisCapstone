--
-- This SQL script is for creating the database schema for the application.
-- It's designed for PostgreSQL.
--

-- Drop existing tables to start fresh on each run
DROP TABLE IF EXISTS attendance;
DROP TABLE IF EXISTS leave_requests;
DROP TABLE IF EXISTS payslips;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS hr_personnel;
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS announcements;

-- Admins Table
-- Stores credentials for system administrators who have the highest level of access.
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- In a real app, this should be a hash
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- HR Personnel Table
-- Stores credentials for HR staff who manage the HR portal.
CREATE TABLE hr_personnel (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- In a real app, this should be a hash
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Employees Table
-- Stores all employee data. This is the central table for employee information.
CREATE TABLE employees (
    id VARCHAR(20) PRIMARY KEY, -- e.g., EMP-00123
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    position VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    branch VARCHAR(100),
    gender VARCHAR(10),
    date_of_birth DATE,
    date_of_hire DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'Active', -- e.g., Active, On Leave, Resigned
    photo_url VARCHAR(255),
    password VARCHAR(255) NOT NULL, -- In a real app, this should be a hash
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- Schedules Table
-- Stores weekly work schedules for each employee.
CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) REFERENCES employees(id),
    week_start_date DATE NOT NULL,
    day_of_week INT NOT NULL, -- 1 for Monday, 7 for Sunday
    time_in TIME,
    time_out TIME,
    notes TEXT,
    UNIQUE(employee_id, week_start_date, day_of_week)
);

-- Attendance Table
-- Records daily clock-in and clock-out times for each employee.
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) REFERENCES employees(id),
    attendance_date DATE NOT NULL,
    time_in TIMESTAMP WITH TIME ZONE,
    time_out TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20), -- e.g., Present, Late, Absent
    notes TEXT,
    UNIQUE(employee_id, attendance_date)
);

-- Leave Requests Table
-- Manages all employee leave requests.
CREATE TABLE leave_requests (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) REFERENCES employees(id),
    leave_type VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'Pending', -- e.g., Pending, Approved, Rejected
    requested_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Payslips Table
-- Stores generated payslip information for each employee for each pay period.
CREATE TABLE payslips (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) REFERENCES employees(id),
    pay_period_start DATE NOT NULL,
    pay_period_end DATE NOT NULL,
    gross_pay NUMERIC(10, 2) NOT NULL,
    deductions NUMERIC(10, 2) NOT NULL,
    net_pay NUMERIC(10, 2) NOT NULL,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(employee_id, pay_period_start, pay_period_end)
);

-- Announcements Table
-- Stores company-wide announcements posted by HR.
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    posted_by INT REFERENCES hr_personnel(id),
    status VARCHAR(20) DEFAULT 'Draft', -- e.g., Draft, Published
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--
-- Insert Sample Data
--
INSERT INTO admins (first_name, last_name, email, password) VALUES
('Super', 'Admin', 'super@example.com', 'password');

INSERT INTO hr_personnel (first_name, last_name, email, password) VALUES
('Olivia', 'Chen', 'olivia.chen.hr@example.com', 'password');

INSERT INTO employees (id, first_name, last_name, position, department, status, password) VALUES
('EMP-00123', 'Maria', 'Rodriguez', 'Senior Software Engineer', 'Technology', 'Active', 'password'),
('EMP-00456', 'David', 'Lee', 'Project Manager', 'Management', 'Active', 'password'),
('EMP-00789', 'James', 'White', 'UX Designer', 'Design', 'Active', 'password'),
('EMP-01011', 'Emily', 'Carter', 'QA Tester', 'Technology', 'On Leave', 'password'),
('EMP-01121', 'Sarah', 'Williams', 'Software Engineer', 'Technology', 'Active', 'password');

INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, status, reason) VALUES
('EMP-00123', 'Vacation', '2024-09-01', '2024-09-05', 'Pending', 'Family trip.'),
('EMP-00456', 'Sick Leave', '2024-08-20', '2024-08-21', 'Pending', 'Fever and flu.'),
('EMP-01011', 'Vacation', '2024-07-20', '2024-07-25', 'Approved', 'Annual vacation.');