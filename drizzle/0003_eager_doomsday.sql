CREATE TABLE "loans" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" uuid NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"months" integer NOT NULL,
	"interest_rate" numeric(5, 4) NOT NULL,
	"total_amount" numeric(10, 2) NOT NULL,
	"status" varchar(50) DEFAULT 'Pending',
	"requested_at" timestamp with time zone DEFAULT now(),
	"approved_at" timestamp with time zone,
	"approved_by" uuid,
	"notes" text
);
--> statement-breakpoint
ALTER TABLE "loans" ADD CONSTRAINT "loans_employee_id_accounts_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "loans" ADD CONSTRAINT "loans_approved_by_accounts_id_fk" FOREIGN KEY ("approved_by") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_loans_employee" ON "loans" USING btree ("employee_id" uuid_ops);--> statement-breakpoint
CREATE INDEX "idx_loans_status" ON "loans" USING btree ("status" text_ops);