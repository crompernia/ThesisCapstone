import { getDb } from '../src/lib/db.js';
import { sql } from 'drizzle-orm';

async function addRegisteredDevicesColumn() {
  try {
    console.log('Adding registered_devices column to accounts table...');

    const db = await getDb();

    // Add the registered_devices column
    await db.execute(sql`
      ALTER TABLE accounts
      ADD COLUMN IF NOT EXISTS registered_devices JSONB;
    `);

    console.log('✅ Successfully added registered_devices column');
  } catch (error) {
    console.error('❌ Error adding registered_devices column:', error);
    process.exit(1);
  }
}

addRegisteredDevicesColumn();