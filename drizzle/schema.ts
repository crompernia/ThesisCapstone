import { pgTable, index, foreignKey, unique, serial, uuid, varchar, integer, numeric, timestamp, date, text, time, jsonb } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

// NextAuth.js database adapter tables
export const verificationTokens = pgTable("verificationtoken", {
  identifier: varchar("identifier", { length: 255 }).primaryKey().notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: 'date' }).notNull(),
});

export const nextAuthAccounts = pgTable("account", {
  userId: uuid("user_id").notNull(),
  type: varchar("type", { length: 255 }).$type<"email" | "oauth" | "oidc" | "webauthn">().notNull(),
  provider: varchar("provider", { length: 255 }).notNull(),
  providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: varchar("token_type", { length: 255 }),
  scope: varchar("scope", { length: 255 }),
  id_token: text("id_token"),
  session_state: varchar("session_state", { length: 255 }),
}, (table) => [
  foreignKey({
    columns: [table.userId],
    foreignColumns: [nextAuthUsers.id],
    name: "account_user_id_users_id_fk"
  }).onDelete("cascade"),
  unique("account_provider_provider_account_id_unique").on(table.provider, table.providerAccountId),
]);

export const nextAuthSessions = pgTable("session", {
  sessionToken: varchar("session_token", { length: 255 }).primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  expires: timestamp("expires", { mode: 'date' }).notNull(),
}, (table) => [
  foreignKey({
    columns: [table.userId],
    foreignColumns: [nextAuthUsers.id],
    name: "session_user_id_users_id_fk"
  }).onDelete("cascade"),
]);

export const nextAuthUsers = pgTable("user", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("email_verified", { mode: 'date' }),
  image: varchar("image", { length: 255 }),
});



export const attendanceRecords = pgTable("attendance_records", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	employeeNumber: varchar("employee_number", { length: 50 }),
	firstName: varchar("first_name", { length: 255 }),
	lastName: varchar("last_name", { length: 255 }),
	position: varchar({ length: 255 }),
	department: varchar({ length: 255 }),
	branch: varchar({ length: 255 }),
	period: varchar({ length: 50 }).notNull(),
	daysAttended: integer("days_attended").default(0),
	totalDaysAttended: integer("total_days_attended").default(0),
	lates: integer().default(0),
	absences: integer().default(0),
	availableLeaves: integer("available_leaves").default(0),
	totalWorkHours: numeric("total_work_hours", { precision: 8, scale:  2 }).default('0'),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
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

export const attendance = pgTable("attendance", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	date: date().notNull(),
	timeIn: timestamp("time_in", { withTimezone: true, mode: 'string' }),
	timeOut: timestamp("time_out", { withTimezone: true, mode: 'string' }),
	status: varchar({ length: 50 }).default('Present'),
	hoursWorked: numeric("hours_worked", { precision: 5, scale:  2 }),
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

export const branches = pgTable("branches", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	coordinates: varchar({ length: 255 }),
}, (table) => [
	unique("branches_name_unique").on(table.name),
]);

export const schedules = pgTable("schedules", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	date: date().notNull(),
	shiftStart: time("shift_start").notNull(),
	shiftEnd: time("shift_end").notNull(),
	notes: text(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	index("idx_schedules_date").using("btree", table.date.asc().nullsLast().op("date_ops")),
	index("idx_schedules_employee_date").using("btree", table.employeeId.asc().nullsLast().op("date_ops"), table.date.asc().nullsLast().op("date_ops")),
	foreignKey({
			columns: [table.employeeId],
			foreignColumns: [accounts.id],
			name: "schedules_employee_id_accounts_id_fk"
		}).onDelete("cascade"),
	unique("schedules_employee_id_date_unique").on(table.employeeId, table.date),
]);

export const announcements = pgTable("announcements", {
	id: serial().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	content: text().notNull(),
	status: varchar({ length: 50 }).notNull(),
	postedBy: uuid("posted_by"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	index("idx_announcements_created_at").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_announcements_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.postedBy],
			foreignColumns: [accounts.id],
			name: "announcements_posted_by_accounts_id_fk"
		}).onDelete("set null"),
]);

export const departments = pgTable("departments", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	branchId: integer("branch_id"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.branchId],
			foreignColumns: [branches.id],
			name: "departments_branch_id_branches_id_fk"
		}).onDelete("cascade"),
	unique("departments_name_branch_id_unique").on(table.name, table.branchId),
]);

export const leaveRequests = pgTable("leave_requests", {
	id: serial().primaryKey().notNull(),
	employeeId: uuid("employee_id").notNull(),
	leaveType: varchar("leave_type", { length: 255 }).notNull(),
	startDate: date("start_date").notNull(),
	endDate: date("end_date").notNull(),
	reason: text(),
	status: varchar({ length: 50 }).default('Pending'),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
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

export const reports = pgTable("reports", {
	id: serial().primaryKey().notNull(),
	reportType: varchar("report_type", { length: 100 }).notNull(),
	generatedBy: uuid("generated_by"),
	generatedAt: timestamp("generated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
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

export const accounts = pgTable("accounts", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	employeeNumber: varchar("employee_number", { length: 50 }),
	firstName: varchar("first_name", { length: 255 }).notNull(),
	lastName: varchar("last_name", { length: 255 }).notNull(),
	middleName: varchar("middle_name", { length: 255 }),
	email: varchar({ length: 255 }).notNull(),
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
	managedBranches: varchar("managed_branches", { length: 255 }).array(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	photo: text(),
}, (table) => [
	index("idx_accounts_branch").using("btree", table.branch.asc().nullsLast().op("text_ops")),
	index("idx_accounts_email").using("btree", table.email.asc().nullsLast().op("text_ops")),
	index("idx_accounts_employee_number").using("btree", table.employeeNumber.asc().nullsLast().op("text_ops")),
	index("idx_accounts_role").using("btree", table.role.asc().nullsLast().op("text_ops")),
	index("idx_accounts_status").using("btree", table.status.asc().nullsLast().op("text_ops")),
	unique("accounts_employee_number_unique").on(table.employeeNumber),
	unique("accounts_email_unique").on(table.email),
]);

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
	otherDeductions: numeric("other_deductions", { precision: 10, scale:  2 }).default('0'),
	netPay: numeric("net_pay", { precision: 10, scale:  2 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	lateDeduction: numeric("late_deduction", { precision: 10, scale:  2 }).default('0'),
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

export const positions = pgTable("positions", {
	id: serial().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	rate: numeric({ precision: 10, scale:  2 }).notNull(),
}, (table) => [
	unique("positions_title_unique").on(table.title),
]);

export const positionDepartments = pgTable("position_departments", {
	id: serial().primaryKey().notNull(),
	positionId: integer("position_id").notNull(),
	departmentId: integer("department_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
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
