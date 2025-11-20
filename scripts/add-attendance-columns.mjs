import { getDb } from '../src/lib/db.ts';
import { sql } from 'drizzle-orm';

async function addAttendanceColumns() {
  console.log('Adding additional columns to attendance table...');

  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS night_hours numeric(5, 2)`);
    await db.execute(sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS overtime_hours numeric(5, 2)`);
    await db.execute(sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS undertime_hours numeric(5, 2)`);
    await db.execute(sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS overtime_type varchar(50)`);
    await db.execute(sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS overtime_approved boolean DEFAULT false`);
    console.log('✅ Attendance columns added successfully');
  } catch (error) {
    console.error('❌ Error adding attendance columns:', error);
    throw error;
  }
}

// Run the script
addAttendanceColumns()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });