/**
 * @fileoverview Drizzle ORM Schema Definition
 * This file contains the database schema definitions using Drizzle ORM for PostgreSQL.
 *
 * Tables:
 * - accounts: Unified user accounts (Employees, HR, Admins)
 * - branches: Company branch/location information
 * - positions: Job positions with daily rates
 * - departments: Departments within branches
 * - announcements: Company-wide announcements
 * - leave_requests: Employee leave request management
 * - attendance: Daily attendance tracking
 * - schedules: Employee work schedules
 * - payslips: Payroll and payslip generation
 * - reports: System-generated reports
 */

import {
  pgTable,
  varchar,
  integer,
  date,
  timestamp,
  serial,
  text,
  numeric,
  time,
  jsonb,
  index,
  unique,
  uuid,
  type PgTable,
} from 'drizzle-orm/pg-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

// ============================================
// CORE TABLE: accounts
// ============================================
export const accounts = pgTable('accounts', {
  id: uuid('id').defaultRandom().primaryKey(),
  employeeNumber: varchar('employee_number', { length: 50 }).unique(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  middleName: varchar('middle_name', { length: 255 }),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull(), // 'Employee', 'HR', 'Admin'
  position: varchar('position', { length: 255 }),
  department: varchar('department', { length: 255 }),
  branch: varchar('branch', { length: 255 }),
  status: varchar('status', { length: 50 }).notNull(), // 'Active', 'Pending Approval', 'Inactive'
  dateHired: date('date_hired').notNull(),
  dateOfBirth: date('date_of_birth'),
  gender: varchar('gender', { length: 50 }),
  availableLeaves: integer('available_leaves').default(0),
  sssNumber: varchar('sss_number', { length: 255 }),
  philhealthNumber: varchar('philhealth_number', { length: 255 }),
  pagibigNumber: varchar('pagibig_number', { length: 255 }),
  tin: varchar('tin', { length: 255 }),
  managedBranches: varchar('managed_branches', { length: 255 }).array(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  emailIdx: index('idx_accounts_email').on(table.email),
  employeeNumberIdx: index('idx_accounts_employee_number').on(table.employeeNumber),
  roleIdx: index('idx_accounts_role').on(table.role),
  statusIdx: index('idx_accounts_status').on(table.status),
  branchIdx: index('idx_accounts_branch').on(table.branch),
}));

// ============================================
// MASTER DATA: branches
// ============================================
export const branches = pgTable('branches', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).unique().notNull(),
  coordinates: varchar('coordinates', { length: 255 }),
});

// ============================================
// MASTER DATA: positions
// ============================================
export const positions = pgTable('positions', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).unique().notNull(),
  rate: numeric('rate', { precision: 10, scale: 2 }).notNull(),
});

// ============================================
// MASTER DATA: departments
// ============================================
export const departments = pgTable('departments', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  branchId: integer('branch_id').references(() => branches.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  uniqueNamePerBranch: unique().on(table.name, table.branchId),
}));

// ============================================
// ANNOUNCEMENTS
// ============================================
export const announcements = pgTable('announcements', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  status: varchar('status', { length: 50 }).notNull(), // 'Draft', 'Published'
  postedBy: uuid('posted_by').references(() => accounts.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  statusIdx: index('idx_announcements_status').on(table.status),
  createdAtIdx: index('idx_announcements_created_at').on(table.createdAt),
}));

// ============================================
// LEAVE MANAGEMENT: leave_requests
// ============================================
export const leaveRequests = pgTable('leave_requests', {
  id: serial('id').primaryKey(),
  employeeId: uuid('employee_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  leaveType: varchar('leave_type', { length: 255 }).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  reason: text('reason'),
  status: varchar('status', { length: 50 }).default('Pending'), // 'Pending', 'Approved', 'Rejected'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  employeeIdx: index('idx_leave_requests_employee').on(table.employeeId),
  statusIdx: index('idx_leave_requests_status').on(table.status),
  createdAtIdx: index('idx_leave_requests_created_at').on(table.createdAt),
}));

// ============================================
// ATTENDANCE TRACKING
// ============================================
export const attendance = pgTable('attendance', {
  id: serial('id').primaryKey(),
  employeeId: uuid('employee_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  date: date('date').notNull(),
  timeIn: timestamp('time_in', { withTimezone: true }),
  timeOut: timestamp('time_out', { withTimezone: true }),
  status: varchar('status', { length: 50 }).default('Present'), // 'Present', 'Late', 'Absent', 'Leave'
  hoursWorked: numeric('hours_worked', { precision: 5, scale: 2 }),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  uniqueEmployeeDate: unique().on(table.employeeId, table.date),
  employeeDateIdx: index('idx_attendance_employee_date').on(table.employeeId, table.date),
  dateIdx: index('idx_attendance_date').on(table.date),
}));

// ============================================
// SCHEDULING
// ============================================
export const schedules = pgTable('schedules', {
  id: serial('id').primaryKey(),
  employeeId: uuid('employee_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  date: date('date').notNull(),
  shiftStart: time('shift_start').notNull(),
  shiftEnd: time('shift_end').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  uniqueEmployeeDate: unique().on(table.employeeId, table.date),
  employeeDateIdx: index('idx_schedules_employee_date').on(table.employeeId, table.date),
  dateIdx: index('idx_schedules_date').on(table.date),
}));

// ============================================
// PAYROLL: payslips
// ============================================
export const payslips = pgTable('payslips', {
  id: serial('id').primaryKey(),
  employeeId: uuid('employee_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  payPeriod: varchar('pay_period', { length: 50 }).notNull(),
  payDate: date('pay_date').notNull(),

  // Earnings
  basicPay: numeric('basic_pay', { precision: 10, scale: 2 }).default('0'),
  dailyRate: numeric('daily_rate', { precision: 10, scale: 2 }).default('0'),
  daysWorked: integer('days_worked').default(0),
  overtime: numeric('overtime', { precision: 10, scale: 2 }).default('0'),
  nightDifferential: numeric('night_differential', { precision: 10, scale: 2 }).default('0'),
  allowances: numeric('allowances', { precision: 10, scale: 2 }).default('0'),

  // Government Contributions
  sssDeduction: numeric('sss_deduction', { precision: 10, scale: 2 }).default('0'),
  philhealthDeduction: numeric('philhealth_deduction', { precision: 10, scale: 2 }).default('0'),
  pagibigDeduction: numeric('pagibig_deduction', { precision: 10, scale: 2 }).default('0'),
  taxDeduction: numeric('tax_deduction', { precision: 10, scale: 2 }).default('0'),

  // Loans
  sssLoan: numeric('sss_loan', { precision: 10, scale: 2 }).default('0'),
  hdmfLoan: numeric('hdmf_loan', { precision: 10, scale: 2 }).default('0'),
  companyLoan: numeric('company_loan', { precision: 10, scale: 2 }).default('0'),
  otherDeductions: numeric('other_deductions', { precision: 10, scale: 2 }).default('0'),

  // Net Pay
  netPay: numeric('net_pay', { precision: 10, scale: 2 }).notNull(),

  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  uniqueEmployeePayPeriod: unique().on(table.employeeId, table.payPeriod),
  employeeIdx: index('idx_payslips_employee').on(table.employeeId),
  payPeriodIdx: index('idx_payslips_pay_period').on(table.payPeriod),
  payDateIdx: index('idx_payslips_pay_date').on(table.payDate),
}));

// ============================================
// REPORTS
// ============================================
export const reports = pgTable('reports', {
  id: serial('id').primaryKey(),
  reportType: varchar('report_type', { length: 100 }).notNull(),
  generatedBy: uuid('generated_by').references(() => accounts.id, { onDelete: 'set null' }),
  generatedAt: timestamp('generated_at', { withTimezone: true }).defaultNow(),
  data: jsonb('data'),
  status: varchar('status', { length: 50 }).default('Draft'), // 'Draft', 'Completed', 'Failed'
}, (table) => ({
  reportTypeIdx: index('idx_reports_type').on(table.reportType),
  generatedAtIdx: index('idx_reports_generated_at').on(table.generatedAt),
}));

// ============================================
// TypeScript Types
// ============================================

// Account types
export type Account = InferSelectModel<typeof accounts>;
export type NewAccount = InferInsertModel<typeof accounts>;

// Branch types
export type Branch = InferSelectModel<typeof branches>;
export type NewBranch = InferInsertModel<typeof branches>;

// Position types
export type Position = InferSelectModel<typeof positions>;
export type NewPosition = InferInsertModel<typeof positions>;

// Department types
export type Department = InferSelectModel<typeof departments>;
export type NewDepartment = InferInsertModel<typeof departments>;

// Announcement types
export type Announcement = InferSelectModel<typeof announcements>;
export type NewAnnouncement = InferInsertModel<typeof announcements>;

// Leave request types
export type LeaveRequest = InferSelectModel<typeof leaveRequests>;
export type NewLeaveRequest = InferInsertModel<typeof leaveRequests>;

// Attendance types
export type Attendance = InferSelectModel<typeof attendance>;
export type NewAttendance = InferInsertModel<typeof attendance>;

// Schedule types
export type Schedule = InferSelectModel<typeof schedules>;
export type NewSchedule = InferInsertModel<typeof schedules>;

// Payslip types
export type Payslip = InferSelectModel<typeof payslips>;
export type NewPayslip = InferInsertModel<typeof payslips>;

// Report types
export type Report = InferSelectModel<typeof reports>;
export type NewReport = InferInsertModel<typeof reports>;

// Export all table schemas
export const schema = {
  accounts,
  branches,
  positions,
  departments,
  announcements,
  leaveRequests,
  attendance,
  schedules,
  payslips,
  reports,
};
