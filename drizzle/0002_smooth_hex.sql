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
	"lates" integer DEFAULT 0,
	"absences" integer DEFAULT 0,
	"available_leaves" integer DEFAULT 0,
	"total_work_hours" numeric(8, 2) DEFAULT '0',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "attendance_records_employee_id_period_unique" UNIQUE("employee_id","period")
);
--> statement-breakpoint
ALTER TABLE "attendance_records" ADD CONSTRAINT "attendance_records_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_attendance_records_employee" ON "attendance_records" USING btree ("employee_id");--> statement-breakpoint
CREATE INDEX "idx_attendance_records_period" ON "attendance_records" USING btree ("period");--> statement-breakpoint
CREATE INDEX "idx_attendance_records_created_at" ON "attendance_records" USING btree ("created_at");