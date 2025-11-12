import { getDb } from '../src/lib/db.js';
import { sql } from 'drizzle-orm';

async function addLateDeductionColumn() {
  console.log('Adding late_deduction column to payslips table...');

  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE payslips ADD COLUMN IF NOT EXISTS late_deduction numeric(10, 2) DEFAULT 0`);
    console.log('✅ Late deduction column added successfully');
  } catch (error) {
    console.error('❌ Error adding late deduction column:', error);
    throw error;
  }
}

// Run the script
addLateDeductionColumn()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });