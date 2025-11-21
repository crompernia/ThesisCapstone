import { getDb } from '../src/lib/db.ts';
import { sql } from 'drizzle-orm';

async function addFaceEncodingColumn() {
  console.log('Adding face_encoding column to accounts table...');

  try {
    const db = await getDb();
    await db.execute(sql`ALTER TABLE accounts ADD COLUMN IF NOT EXISTS face_encoding varchar(5000)`);
    console.log('✅ Face encoding column added successfully');
  } catch (error) {
    console.error('❌ Error adding face encoding column:', error);
    throw error;
  }
}

// Run the script
addFaceEncodingColumn()
  .then(() => {
    console.log('\nScript finished successfully.');
  })
  .catch((error) => {
    console.error('\nScript failed:', error);
    process.exit(1);
  });