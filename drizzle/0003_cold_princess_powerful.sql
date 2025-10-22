DROP INDEX "idx_accounts_email";--> statement-breakpoint
DROP INDEX "idx_accounts_employee_number";--> statement-breakpoint
DROP INDEX "idx_accounts_role";--> statement-breakpoint
DROP INDEX "idx_accounts_status";--> statement-breakpoint
DROP INDEX "idx_accounts_branch";--> statement-breakpoint
DROP INDEX "idx_announcements_status";--> statement-breakpoint
DROP INDEX "idx_announcements_created_at";--> statement-breakpoint
DROP INDEX "idx_attendance_employee_date";--> statement-breakpoint
DROP INDEX "idx_attendance_date";--> statement-breakpoint
DROP INDEX "idx_attendance_records_employee";--> statement-breakpoint
DROP INDEX "idx_attendance_records_period";--> statement-breakpoint
DROP INDEX "idx_attendance_records_created_at";--> statement-breakpoint
DROP INDEX "idx_leave_requests_employee";--> statement-breakpoint
DROP INDEX "idx_leave_requests_status";--> statement-breakpoint
DROP INDEX "idx_leave_requests_created_at";--> statement-breakpoint
DROP INDEX "idx_payslips_employee";--> statement-breakpoint
DROP INDEX "idx_payslips_pay_period";--> statement-breakpoint
DROP INDEX "idx_payslips_pay_date";--> statement-breakpoint
DROP INDEX "idx_reports_type";--> statement-breakpoint
DROP INDEX "idx_reports_generated_at";--> statement-breakpoint
DROP INDEX "idx_schedules_employee_date";--> statement-breakpoint
DROP INDEX "idx_schedules_date";--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "created_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
CREATE INDEX "idx_accounts_email" ON "accounts" USING btree ("email" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_employee_number" ON "accounts" USING btree ("employee_number" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_role" ON "accounts" USING btree ("role" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_status" ON "accounts" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_branch" ON "accounts" USING btree ("branch" text_ops);--> statement-breakpoint
CREATE INDEX "idx_announcements_status" ON "announcements" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_announcements_created_at" ON "announcements" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_employee_date" ON "attendance" USING btree ("employee_id" uuid_ops,"date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_date" ON "attendance" USING btree ("date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_employee" ON "attendance_records" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_period" ON "attendance_records" USING btree ("period" text_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_created_at" ON "attendance_records" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_employee" ON "leave_requests" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_status" ON "leave_requests" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_created_at" ON "leave_requests" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_employee" ON "payslips" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_pay_period" ON "payslips" USING btree ("pay_period" text_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_pay_date" ON "payslips" USING btree ("pay_date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_reports_type" ON "reports" USING btree ("report_type" text_ops);--> statement-breakpoint
CREATE INDEX "idx_reports_generated_at" ON "reports" USING btree ("generated_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_schedules_employee_date" ON "schedules" USING btree ("employee_id" uuid_ops,"date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_schedules_date" ON "schedules" USING btree ("date" date_ops);