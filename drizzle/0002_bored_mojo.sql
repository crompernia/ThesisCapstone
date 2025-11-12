ALTER TABLE "attendance" ADD COLUMN "night_hours" numeric(5, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "attendance" ADD COLUMN "overtime_hours" numeric(5, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "attendance" ADD COLUMN "overtime_type" varchar(20) DEFAULT 'regular';--> statement-breakpoint
ALTER TABLE "attendance" ADD COLUMN "overtime_approved" boolean DEFAULT false;