CREATE TABLE "overtime_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"date" date NOT NULL,
	"hours_requested" numeric(4, 2) NOT NULL,
	"reason" text,
	"status" varchar(50) DEFAULT 'Pending',
	"approved_by" uuid,
	"approved_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "payslips" ADD COLUMN "late_deduction" numeric(10, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "overtime_requests" ADD CONSTRAINT "overtime_requests_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "overtime_requests" ADD CONSTRAINT "overtime_requests_approved_by_accounts_id_fk" FOREIGN KEY ("approved_by") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_overtime_requests_created_at" ON "overtime_requests" USING btree ("created_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_overtime_requests_employee" ON "overtime_requests" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_overtime_requests_status" ON "overtime_requests" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "idx_overtime_requests_date" ON "overtime_requests" USING btree ("date" date_ops);