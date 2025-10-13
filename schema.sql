-- Drop existing tables to start fresh
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS leave_requests CASCADE;
DROP TABLE IF EXISTS payslips CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS hr_personnel CASCADE;
DROP TABLE IF EXISTS admins CASCADE;
DROP TABLE IF EXISTS announcements CASCADE;
DROP TABLE IF EXISTS reports CASCADE;

-- ENUM Types for specific fields
CREATE TYPE gender_enum AS ENUM ('Male', 'Female', 'Other');
CREATE TYPE employee_status AS ENUM ('Active', 'On Leave', 'Resigned');
CREATE TYPE leave_status AS ENUM ('Pending', 'Approved', 'Rejected');
CREATE TYPE attendance_status AS ENUM ('Present', 'Late', 'Absent', 'On Leave');
CREATE TYPE report_status AS ENUM ('Success', 'Failed', 'In Progress');

-- Table for Employees
CREATE TABLE employees (
    id TEXT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    middle_name VARCHAR(50),
    date_of_birth DATE,
    gender gender_enum,
    position VARCHAR(100),
    department VARCHAR(100),
    branch VARCHAR(100),
    date_hired DATE,
    status employee_status,
    photo_url TEXT, -- URL to the photo in a storage service
    password TEXT -- In a real app, this should be a hashed password
);

-- Table for HR Personnel
CREATE TABLE hr_personnel (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password TEXT -- Hashed password
);

-- Table for System Administrators
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password TEXT -- Hashed password
);

-- Table for Announcements
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    posted_by INTEGER REFERENCES hr_personnel(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Draft' -- e.g., 'Draft', 'Published'
);

-- Table for Attendance Records
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    employee_id TEXT REFERENCES employees(id),
    attendance_date DATE,
    time_in TIMESTAMP WITH TIME ZONE,
    time_out TIMESTAMP WITH TIME ZONE,
    status attendance_status,
    notes TEXT,
    UNIQUE (employee_id, attendance_date) -- An employee can only have one record per day
);

-- Table for Leave Requests
CREATE TABLE leave_requests (
    id SERIAL PRIMARY KEY,
    employee_id TEXT REFERENCES employees(id),
    leave_type VARCHAR(50),
    start_date DATE,
    end_date DATE,
    reason TEXT,
    status leave_status DEFAULT 'Pending',
    reviewed_by INTEGER REFERENCES hr_personnel(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for Schedules
CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    employee_id TEXT REFERENCES employees(id),
    week_start_date DATE,
    day_of_week INTEGER, -- 1 for Monday, 7 for Sunday
    shift_start TIME,
    shift_end TIME,
    UNIQUE(employee_id, week_start_date, day_of_week)
);

-- Table for Payslips
CREATE TABLE payslips (
    id SERIAL PRIMARY KEY,
    employee_id TEXT REFERENCES employees(id),
    pay_period_start DATE,
    pay_period_end DATE,
    gross_pay NUMERIC(10, 2),
    deductions NUMERIC(10, 2),
    net_pay NUMERIC(10, 2),
    generated_by INTEGER REFERENCES hr_personnel(id),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for System Reports
CREATE TABLE reports (
    id VARCHAR(50) PRIMARY KEY,
    report_type VARCHAR(100),
    generated_by VARCHAR(100), -- Can be HR personnel or 'System'
    timestamp TIMESTAMP WITH TIME ZONE,
    status report_status,
    details JSONB -- Store variable data like report parameters or results
);

-- Insert Sample Data
INSERT INTO employees (id, first_name, last_name, position, department, branch, status, date_hired, password) VALUES
('EMP-00123', 'Maria', 'Rodriguez', 'Senior Software Engineer', 'Technology', 'Headquarters', 'Active', '2022-01-15', 'password'),
('EMP-00456', 'David', 'Lee', 'Project Manager', 'Management', 'Headquarters', 'Active', '2021-05-20', 'password'),
('EMP-00789', 'James', 'White', 'UX Designer', 'Design', 'Downtown Office', 'Active', '2022-08-01', 'password'),
('EMP-01011', 'Emily', 'Carter', 'QA Tester', 'Technology', 'Remote', 'On Leave', '2023-02-10', 'password'),
('EMP-01121', 'Sarah', 'Williams', 'Software Engineer', 'Technology', 'Headquarters', 'Active', '2023-06-22', 'password');

INSERT INTO hr_personnel (first_name, last_name, email, password) VALUES
('Olivia', 'Chen', 'olivia.chen.hr@example.com', 'password');

INSERT INTO admins (first_name, last_name, email, password) VALUES
('Super', 'Admin', 'super@example.com', 'password');

INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason, status) VALUES
('EMP-00123', 'Vacation', '2024-09-01', '2024-09-05', 'Family trip to Japan.', 'Pending');

INSERT INTO accounts (id, first_name, last_name, middle_name, email, password, role, position, department, branch, status, date_hired, date_of_birth, gender, available_leaves) VALUES
('EMP-00123', 'Maria', 'Rodriguez', 'Veronica', 'maria.rodriguez@example.com','password', 'Employee', 'Senior Software Engineer', 'Technology', 'Headquarters', 'Active', '2021-05-20', '2001-12-01', 'Female', '3'),
('EMP-00456', 'David', 'Lee', 'Sanchez', 'david.lee@example.com', 'password', 'Employee', 'Project Manager', 'Management', 'Headquarters', 'Active', '2021-05-20', '2001-10-01', 'Male', '3'),
('EMP-00789', 'James', 'White', 'Vin', 'james.white@example.com', 'password', 'Employee', 'UX Designer', 'Design', 'Downtown Office', 'Active', '2022-08-01', '1999-03-06', 'Male', '3'),
('EMP-01011', 'Emily', 'Carter', 'San', 'emily.carter@example.com', 'password' , 'Employee' ,'QA Tester', 'Technology', 'Remote', 'On Leave', '2023-02-10', '2002-04-20', 'Female', '3'),
('EMP-01121', 'Sarah', 'Williams', 'Rain', 'sarah.williams@example.com' , 'password', 'Employee' , 'Software Engineer', 'Technology', 'Headquarters', 'Active', '2023-06-22', '2000-05-25', 'Male', '3');

INSERT INTO branches(id, name, coordinates) VALUES
('01', 'Headquarters', '123456');