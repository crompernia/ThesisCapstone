import { getDb } from '../src/lib/db.ts';
import { sql } from 'drizzle-orm';

async function addUndertimeDeductionColumn() {
  console.log('Adding undertime_deduction column to payslips table...');

  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE payslips ADD COLUMN IF NOT EXISTS undertime_deduction numeric(10, 2) DEFAULT 0`);
    console.log('✅ Undertime deduction column added successfully');
  } catch (error) {
    console.error('❌ Error adding undertime deduction column:', error);
    throw error;
  }
}

// Run the script
addUndertimeDeductionColumn()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });