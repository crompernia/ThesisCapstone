CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"employee_number" varchar(50),
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"middle_name" varchar(255),
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) NOT NULL,
	"position" varchar(255),
	"department" varchar(255),
	"branch" varchar(255),
	"status" varchar(50) NOT NULL,
	"date_hired" date NOT NULL,
	"date_of_birth" date,
	"gender" varchar(50),
	"available_leaves" integer DEFAULT 0,
	"sss_number" varchar(255),
	"philhealth_number" varchar(255),
	"pagibig_number" varchar(255),
	"tin" varchar(255),
	"photo" varchar(500),
	"managed_branches" varchar(255)[],
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "accounts_employee_number_unique" UNIQUE("employee_number"),
	CONSTRAINT "accounts_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "announcements" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"status" varchar(50) NOT NULL,
	"posted_by" uuid,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "attendance" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"date" date NOT NULL,
	"time_in" timestamp with time zone,
	"time_out" timestamp with time zone,
	"status" varchar(50) DEFAULT 'Present',
	"hours_worked" numeric(5, 2),
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "attendance_employee_id_date_unique" UNIQUE("employee_id","date")
);
--> statement-breakpoint
CREATE TABLE "attendance_records" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"employee_number" varchar(50),
	"first_name" varchar(255),
	"last_name" varchar(255),
	"position" varchar(255),
	"department" varchar(255),
	"branch" varchar(255),
	"period" varchar(50) NOT NULL,
	"days_attended" integer DEFAULT 0,
	"total_days_attended" integer DEFAULT 0,
	"lates" integer DEFAULT 0,
	"absences" integer DEFAULT 0,
	"available_leaves" integer DEFAULT 0,
	"total_work_hours" numeric(8, 2) DEFAULT '0',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "attendance_records_employee_id_period_unique" UNIQUE("employee_id","period")
);
--> statement-breakpoint
CREATE TABLE "branches" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"coordinates" varchar(255),
	CONSTRAINT "branches_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"branch_id" integer,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "departments_name_branch_id_unique" UNIQUE("name","branch_id")
);
--> statement-breakpoint
CREATE TABLE "leave_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"leave_type" varchar(255) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"reason" text,
	"status" varchar(50) DEFAULT 'Pending',
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "payslips" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"pay_period" varchar(50) NOT NULL,
	"pay_date" date NOT NULL,
	"basic_pay" numeric(10, 2) DEFAULT '0',
	"daily_rate" numeric(10, 2) DEFAULT '0',
	"days_worked" integer DEFAULT 0,
	"overtime" numeric(10, 2) DEFAULT '0',
	"night_differential" numeric(10, 2) DEFAULT '0',
	"allowances" numeric(10, 2) DEFAULT '0',
	"sss_deduction" numeric(10, 2) DEFAULT '0',
	"philhealth_deduction" numeric(10, 2) DEFAULT '0',
	"pagibig_deduction" numeric(10, 2) DEFAULT '0',
	"tax_deduction" numeric(10, 2) DEFAULT '0',
	"sss_loan" numeric(10, 2) DEFAULT '0',
	"hdmf_loan" numeric(10, 2) DEFAULT '0',
	"company_loan" numeric(10, 2) DEFAULT '0',
	"other_deductions" numeric(10, 2) DEFAULT '0',
	"net_pay" numeric(10, 2) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "payslips_employee_id_pay_period_unique" UNIQUE("employee_id","pay_period")
);
--> statement-breakpoint
CREATE TABLE "position_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"position_id" integer NOT NULL,
	"department_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "position_departments_position_id_department_id_unique" UNIQUE("position_id","department_id")
);
--> statement-breakpoint
CREATE TABLE "positions" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"rate" numeric(10, 2) NOT NULL,
	CONSTRAINT "positions_title_unique" UNIQUE("title")
);
--> statement-breakpoint
CREATE TABLE "reports" (
	"id" serial PRIMARY KEY NOT NULL,
	"report_type" varchar(100) NOT NULL,
	"generated_by" uuid,
	"generated_at" timestamp with time zone DEFAULT now(),
	"data" jsonb,
	"status" varchar(50) DEFAULT 'Draft'
);
--> statement-breakpoint
CREATE TABLE "schedules" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"date" date NOT NULL,
	"shift_start" time NOT NULL,
	"shift_end" time NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "schedules_employee_id_date_unique" UNIQUE("employee_id","date")
);
--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_posted_by_accounts_id_fk" FOREIGN KEY ("posted_by") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments" ADD CONSTRAINT "departments_branch_id_branches_id_fk" FOREIGN KEY ("branch_id") REFERENCES "public"."branches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leave_requests" ADD CONSTRAINT "leave_requests_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payslips" ADD CONSTRAINT "payslips_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "position_departments" ADD CONSTRAINT "position_departments_position_id_positions_id_fk" FOREIGN KEY ("position_id") REFERENCES "public"."positions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "position_departments" ADD CONSTRAINT "position_departments_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reports" ADD CONSTRAINT "reports_generated_by_accounts_id_fk" FOREIGN KEY ("generated_by") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_accounts_branch" ON "accounts" USING btree ("branch" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_email" ON "accounts" USING btree ("email" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_employee_number" ON "accounts" USING btree ("employee_number" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_role" ON "accounts" USING btree ("role" text_ops);--> statement-breakpoint
CREATE INDEX "idx_accounts_status" ON "accounts" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_announcements_created_at" ON "announcements" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_announcements_status" ON "announcements" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_date" ON "attendance" USING btree ("date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_employee_date" ON "attendance" USING btree ("employee_id" uuid_ops,"date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_created_at" ON "attendance_records" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_employee" ON "attendance_records" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_attendance_records_period" ON "attendance_records" USING btree ("period" text_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_created_at" ON "leave_requests" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_employee" ON "leave_requests" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_leave_requests_status" ON "leave_requests" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_employee" ON "payslips" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_pay_date" ON "payslips" USING btree ("pay_date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_payslips_pay_period" ON "payslips" USING btree ("pay_period" text_ops);--> statement-breakpoint
CREATE INDEX "idx_reports_generated_at" ON "reports" USING btree ("generated_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_reports_type" ON "reports" USING btree ("report_type" text_ops);--> statement-breakpoint
CREATE INDEX "idx_schedules_date" ON "schedules" USING btree ("date" date_ops);--> statement-breakpoint
CREATE INDEX "idx_schedules_employee_date" ON "schedules" USING btree ("employee_id" uuid_ops,"date" date_ops);