import { getDb } from './src/lib/db.ts';
import { sql } from 'drizzle-orm';

async function addLateDeductionColumn() {
  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE payslips ADD COLUMN IF NOT EXISTS late_deduction numeric(10, 2) DEFAULT 0`);
    console.log('Late deduction column added successfully');
  } catch (error) {
    console.error('Error adding late deduction column:', error);
  }
}

addLateDeductionColumn();