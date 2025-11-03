import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { eq } from 'drizzle-orm';

async function assignBODPosition() {
  console.log('Assigning Board of Directors position to admin accounts...');

  try {
    const db = await getDb();

    // Employee numbers of the admin accounts
    const employeeNumbers = ['001-00000', '001-00001', '001-00002'];

    for (const empNum of employeeNumbers) {
      const result = await db
        .update(schema.accounts)
        .set({ position: 'Board of Directors' })
        .where(eq(schema.accounts.employeeNumber, empNum));

      console.log(`Updated ${result.rowCount} record for employee ${empNum}`);
    }

    console.log('✅ Board of Directors position assigned to admin accounts successfully!');
  } catch (error) {
    console.error('❌ Error assigning position:', error);
    throw error;
  }
}

// Run the script
assignBODPosition()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });