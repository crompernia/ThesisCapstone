import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { eq } from 'drizzle-orm';

async function updateEmployeeNumber() {
  console.log('Updating employee number for email: reynalyn.sarcon.hr@chumting.com');

  try {
    const db = await getDb();

    const result = await db.update(schema.accounts)
      .set({ employeeNumber: '002-00074' })
      .where(eq(schema.accounts.email, 'reynalyn.sarcon.hr@chumting.com'));

    console.log('✅ Employee number updated successfully!');
    console.log('Rows affected:', result.rowCount);
  } catch (error) {
    console.error('❌ Error updating employee number:', error);
    throw error;
  }
}

// Run the script
updateEmployeeNumber()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });