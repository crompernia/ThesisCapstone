import { getDb } from '../src/lib/db.js';
import { sql } from 'drizzle-orm';

async function addPhoneNumberColumn() {
  console.log('Adding phone_number column to accounts table...');

  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE accounts ADD COLUMN IF NOT EXISTS phone_number varchar(20)`);
    console.log('✅ Phone number column added successfully');
  } catch (error) {
    console.error('❌ Error adding phone number column:', error);
    throw error;
  }
}

// Run the script
addPhoneNumberColumn()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });