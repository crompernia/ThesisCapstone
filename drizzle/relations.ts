import { relations } from "drizzle-orm/relations";
import { accounts, attendance, payslips, schedules, announcements, branches, departments, leaveRequests, reports, positions, positionDepartments } from "./schema";

export const attendanceRelations = relations(attendance, ({one}) => ({
	account: one(accounts, {
		fields: [attendance.employeeId],
		references: [accounts.id]
	}),
}));

export const accountsRelations = relations(accounts, ({many}) => ({
	attendances: many(attendance),
	payslips: many(payslips),
	schedules: many(schedules),
	announcements: many(announcements),
	leaveRequests: many(leaveRequests),
	reports: many(reports),
}));

export const payslipsRelations = relations(payslips, ({one}) => ({
	account: one(accounts, {
		fields: [payslips.employeeId],
		references: [accounts.id]
	}),
}));

export const schedulesRelations = relations(schedules, ({one}) => ({
	account: one(accounts, {
		fields: [schedules.employeeId],
		references: [accounts.id]
	}),
}));

export const announcementsRelations = relations(announcements, ({one}) => ({
	account: one(accounts, {
		fields: [announcements.postedBy],
		references: [accounts.id]
	}),
}));

export const departmentsRelations = relations(departments, ({one, many}) => ({
	branch: one(branches, {
		fields: [departments.branchId],
		references: [branches.id]
	}),
	positionDepartments: many(positionDepartments),
}));

export const branchesRelations = relations(branches, ({many}) => ({
	departments: many(departments),
}));

export const leaveRequestsRelations = relations(leaveRequests, ({one}) => ({
	account: one(accounts, {
		fields: [leaveRequests.employeeId],
		references: [accounts.id]
	}),
}));

export const reportsRelations = relations(reports, ({one}) => ({
	account: one(accounts, {
		fields: [reports.generatedBy],
		references: [accounts.id]
	}),
}));

export const positionDepartmentsRelations = relations(positionDepartments, ({one}) => ({
	position: one(positions, {
		fields: [positionDepartments.positionId],
		references: [positions.id]
	}),
	department: one(departments, {
		fields: [positionDepartments.departmentId],
		references: [departments.id]
	}),
}));

export const positionsRelations = relations(positions, ({many}) => ({
	positionDepartments: many(positionDepartments),
}));