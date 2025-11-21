import { pgTable, index, foreignKey, unique, serial, uuid, date, timestamp, varchar, numeric, text, integer, time, jsonb, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

// ============================================
// CORE TABLE: accounts
// ============================================
export const accounts = pgTable("accounts", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	employeeNumber: varchar("employee_number", { length: 50 }),
	firstName: varchar("first_name", { length: 255 }).notNull(),
	lastName: varchar("last_name", { length: 255 }).notNull(),
	middleName: varchar("middle_name", { length: 255 }),
	email: varchar({ length: 255 }).notNull(),
	phoneNumber: varchar("phone_number", { length: 20 }),
	password: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 50 }).notNull(),
	position: varchar({ length: 255 }),
	department: varchar({ length: 255 }),
	branch: varchar({ length: 255 }),
	status: varchar({ length: 50 }).notNull(),
	dateHired: date("date_hired").notNull(),
	dateOfBirth: date("date_of_birth"),
	gender: varchar({ length: 50 }),
	availableLeaves: integer("available_leaves").default(0),
	sssNumber: varchar("sss_number", { length: 255 }),
	philhealthNumber: varchar("philhealth_number", { length: 255 }),
	pagibigNumber: varchar("pagibig_number", { length: 255 }),
	tin: varchar({ length: 255 }),
	photo: varchar({ length: 500 }),
	managedBranches: varchar("managed_branches", { length: 255 }).array(),
	registeredDevices: jsonb("registered_devices"),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_accounts_branch").using("btree", table.branch.asc().nullsLast().op("text_ops")),
	index("idx_accounts_email").using("btree", table.email.asc().nullsLast().op("text_ops")),
	index("idx_accounts_employee_number").using("btree", table.employeeNumber.asc().nullsLast().op("text_ops")),
	index("idx_accounts_role").using("btree", table.role.asc().nullsLast().op("text_ops")),
	index("idx_accounts_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	unique("accounts_employee_number_unique").on(table.employeeNumber),
	unique("accounts_email_unique").on(table.email),
]);

// ============================================
// MASTER DATA: branches
// ============================================
export const branches = pgTable("branches", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	coordinates: varchar({ length: 255 }),
}, (table) => [
	unique("branches_name_unique").on(table.name),
]);

// ============================================
// MASTER DATA: positions
// ============================================
export const positions = pgTable("positions", {
	id: serial().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	rate: numeric({ precision: 10, scale:  2 }).notNull(),
}, (table) => [
	unique("positions_title_unique").on(table.title),
]);

// ============================================
// MASTER DATA: departments
// ============================================
export const departments = pgTable("departments", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	branchId: integer("branch_id"),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.branchId],
			foreignColumns: [branches.id],
			name: "departments_branch_id_branches_id_fk"
		}).onDelete("cascade"),
	unique("departments_name_branch_id_unique").on(table.name, table.branchId),
]);

// ============================================
// ANNOUNCEMENTS
// ============================================
export const announcements = pgTable("announcements", {
	id: serial().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	content: text().notNull(),
	status: varchar({ length: 50 }).notNull(),
	postedBy: uuid("posted_by"),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_announcements_created_at").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_announcements_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.postedBy],
			foreignColumns: [accounts.id],
			name: "announcements_posted_by_accounts_id_fk"
		}).onDelete("set null"),
]);

// ============================================
// LEAVE MANAGEMENT: leave_requests
// ============================================
export const leaveRequests = pgTable("leave_requests", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	leaveType: varchar("leave_type", { length: 255 }).notNull(),
	startDate: date("start_date").notNull(),
	endDate: date("end_date").notNull(),
	reason: text(),
	status: varchar({ length: 50 }).default('Pending'),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_leave_requests_created_at").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_leave_requests_employee").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops")),
	index("idx_leave_requests_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "leave_requests_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
]);

// ============================================
// OVERTIME MANAGEMENT: overtime_requests
// ============================================
export const overtimeRequests = pgTable("overtime_requests", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	date: date().notNull(),
	hoursRequested: numeric("hours_requested", { precision: 4, scale: 2 }).notNull(),
	reason: text(),
	status: varchar({ length: 50 }).default('Pending'),
	approvedBy: uuid("approved_by"),
	approvedAt: timestamp("approved_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_overtime_requests_created_at").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_overtime_requests_employee").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops")),
	index("idx_overtime_requests_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	index("idx_overtime_requests_date").using("btree", table.date.asc().nullsLast().op("date_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "overtime_requests_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.approvedBy],
			foreignColumns: [accounts.id],
			name: "overtime_requests_approved_by_accounts_id_fk"
		}).onDelete("set null"),
]);

// ============================================
// LOAN MANAGEMENT: loans
// ============================================
export const loans = pgTable("loans", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
	months: integer().notNull(),
	interestRate: numeric("interest_rate", { precision: 5, scale: 4 }).notNull(),
	totalAmount: numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
	monthlyPayment: numeric("monthly_payment", { precision: 10, scale: 2 }).notNull(),
	status: varchar({ length: 50 }).default('Pending'),
	approvedBy: uuid("approved_by"),
	approvedAt: timestamp("approved_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_loans_employee").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops")),
	index("idx_loans_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "loans_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.approvedBy],
			foreignColumns: [accounts.id],
			name: "loans_approved_by_accounts_id_fk"
		}).onDelete("set null"),
]);

// ============================================
// ATTENDANCE TRACKING
// ============================================
export const attendance = pgTable("attendance", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	date: date().notNull(),
	timeIn: timestamp("time_in", { withTimezone: true, mode: 'string' }),
	timeOut: timestamp("time_out", { withTimezone: true, mode: 'string' }),
	status: varchar({ length: 50 }).default('Present'),
	hoursWorked: numeric("hours_worked", { precision: 5, scale:  2 }),
	nightHours: numeric("night_hours", { precision: 5, scale:  2 }).default('0'), // Hours worked between 10 PM and 6 AM
	overtimeHours: numeric("overtime_hours", { precision: 5, scale:  2 }).default('0'), // Total overtime hours
	overtimeType: varchar("overtime_type", { length: 20 }).default('regular'), // 'regular', 'holiday_regular', 'holiday_special', 'rest_day'
	overtimeApproved: boolean("overtime_approved").default(false), // Whether overtime was approved by HR
	notes: text(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	index("idx_attendance_date").using("btree", table.date.asc().nullsLast().op("date_ops")),
	index("idx_attendance_employee_date").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops"), table.date.asc().nullsLast().op("date_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "attendance_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	unique("attendance_employee_id_date_unique").on(table.employeeId, table.date),
]);


// ============================================
// SCHEDULING
// ============================================
export const schedules = pgTable("schedules", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	date: date().notNull(),
	shiftStart: time("shift_start").notNull(),
	shiftEnd: time("shift_end").notNull(),
	notes: text(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_schedules_date").using("btree", table.date.asc().nullsLast().op("date_ops")),
	index("idx_schedules_employee_date").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops"), table.date.asc().nullsLast().op("date_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "schedules_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	unique("schedules_employee_id_date_unique").on(table.employeeId, table.date),
]);

// ============================================
// PAYROLL: payslips
// ============================================
export const payslips = pgTable("payslips", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	payPeriod: varchar("pay_period", { length: 50 }).notNull(),
	payDate: date("pay_date").notNull(),
	basicPay: numeric("basic_pay", { precision: 10, scale:  2 }).default('0'),
	dailyRate: numeric("daily_rate", { precision: 10, scale:  2 }).default('0'),
	daysWorked: integer("days_worked").default(0),
	overtime: numeric({ precision: 10, scale:  2 }).default('0'),
	nightDifferential: numeric("night_differential", { precision: 10, scale:  2 }).default('0'),
	allowances: numeric({ precision: 10, scale:  2 }).default('0'),
	sssDeduction: numeric("sss_deduction", { precision: 10, scale:  2 }).default('0'),
	philhealthDeduction: numeric("philhealth_deduction", { precision: 10, scale:  2 }).default('0'),
	pagibigDeduction: numeric("pagibig_deduction", { precision: 10, scale:  2 }).default('0'),
	taxDeduction: numeric("tax_deduction", { precision: 10, scale:  2 }).default('0'),
	sssLoan: numeric("sss_loan", { precision: 10, scale:  2 }).default('0'),
	hdmfLoan: numeric("hdmf_loan", { precision: 10, scale:  2 }).default('0'),
	companyLoan: numeric("company_loan", { precision: 10, scale:  2 }).default('0'),
	lateDeduction: numeric("late_deduction", { precision: 10, scale:  2 }).default('0'),
	undertimeDeduction: numeric("undertime_deduction", { precision: 10, scale:  2 }).default('0'),
	otherDeductions: numeric("other_deductions", { precision: 10, scale:  2 }).default('0'),
	netPay: numeric("net_pay", { precision: 10, scale:  2 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_payslips_employee").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops")),
	index("idx_payslips_pay_date").using("btree", table.payDate.asc().nullsLast().op("date_ops")),
	index("idx_payslips_pay_period").using("btree", table.payPeriod.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "payslips_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	unique("payslips_employee_id_pay_period_unique").on(table.employeeId, table.payPeriod),
]);

// ============================================
// ATTENDANCE RECORDS (Aggregated Summary with Employee Details)
// ============================================
export const attendanceRecords = pgTable("attendance_records", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	employeeNumber: varchar("employee_number", { length: 50 }),
	firstName: varchar("first_name", { length: 255 }),
	lastName: varchar("last_name", { length: 255 }),
	position: varchar("position", { length: 255 }),
	department: varchar("department", { length: 255 }),
	branch: varchar("branch", { length: 255 }),
	period: varchar("period", { length: 50 }).notNull(),
	daysAttended: integer("days_attended").default(0),
	totalDaysAttended: integer("total_days_attended").default(0),
	lates: integer("lates").default(0),
	absences: integer("absences").default(0),
	availableLeaves: integer("available_leaves").default(0),
	totalWorkHours: numeric("total_work_hours", { precision: 8, scale: 2 }).default('0'),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	index("idx_attendance_records_created_at").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_attendance_records_employee").using("btree", table.employeeId.asc().nullsLast().op("uuid_ops")),
	index("idx_attendance_records_period").using("btree", table.period.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "attendance_records_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	unique("attendance_records_employee_id_period_unique").on(table.employeeId, table.period),
]);

// ============================================
// REPORTS
// ============================================
export const reports = pgTable("reports", {
	id: serial().primaryKey().notNull(),
	reportType: varchar("report_type", { length: 100 }).notNull(),
	generatedBy: uuid("generated_by"),
	generatedAt: timestamp("generated_at", { withTimezone: true }).defaultNow(),
	data: jsonb(),
	status: varchar({ length: 50 }).default('Draft'),
}, (table) => [
	index("idx_reports_generated_at").using("btree", table.generatedAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_reports_type").using("btree", table.reportType.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.generatedBy],
			foreignColumns: [accounts.id],
			name: "reports_generated_by_accounts_id_fk"
		}).onDelete("set null"),
]);

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

// ============================================
// POSITION-DEPARTMENT ALLOCATIONS
// ============================================
export const positionDepartments = pgTable("position_departments", {
	id: serial().primaryKey().notNull(),
	positionId: integer("position_id").notNull(),
	departmentId: integer("department_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.positionId],
			foreignColumns: [positions.id],
			name: "position_departments_position_id_positions_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.departmentId],
			foreignColumns: [departments.id],
			name: "position_departments_department_id_departments_id_fk"
		}).onDelete("cascade"),
	unique("position_departments_position_id_department_id_unique").on(table.positionId, table.departmentId),
]);

export type PositionDepartment = InferSelectModel<typeof positionDepartments>;
export type NewPositionDepartment = InferInsertModel<typeof positionDepartments>;

// Announcement types
export type Announcement = InferSelectModel<typeof announcements>;
export type NewAnnouncement = InferInsertModel<typeof announcements>;

// Leave request types
export type LeaveRequest = InferSelectModel<typeof leaveRequests>;
export type NewLeaveRequest = InferInsertModel<typeof leaveRequests>;

// Overtime request types
export type OvertimeRequest = InferSelectModel<typeof overtimeRequests>;
export type NewOvertimeRequest = InferInsertModel<typeof overtimeRequests>;

// Loan types
export type Loan = InferSelectModel<typeof loans>;
export type NewLoan = InferInsertModel<typeof loans>;

// Attendance types
export type Attendance = InferSelectModel<typeof attendance>;
export type NewAttendance = InferInsertModel<typeof attendance>;


// Schedule types
export type Schedule = InferSelectModel<typeof schedules>;
export type NewSchedule = InferInsertModel<typeof schedules>;

// Payslip types
export type Payslip = InferSelectModel<typeof payslips>;
export type NewPayslip = InferInsertModel<typeof payslips>;

// Attendance record types
export type AttendanceRecord = InferSelectModel<typeof attendanceRecords>;
export type NewAttendanceRecord = InferInsertModel<typeof attendanceRecords>;

// Report types
export type Report = InferSelectModel<typeof reports>;
export type NewReport = InferInsertModel<typeof reports>;

// Export all table schemas
export const schema = {
  accounts,
  branches,
  positions,
  departments,
  positionDepartments,
  announcements,
  leaveRequests,
  overtimeRequests,
  loans,
  attendance,
  schedules,
  payslips,
  attendanceRecords,
  reports,
};
