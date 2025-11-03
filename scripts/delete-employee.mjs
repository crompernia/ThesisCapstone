import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { eq } from 'drizzle-orm';

async function deleteEmployee() {
  console.log('Deleting employee with email: reynalyn.sarcon@hr.com');

  try {
    const db = await getDb();

    const result = await db.delete(schema.accounts).where(eq(schema.accounts.email, 'reynalyn.sarcon@hr.com'));

    console.log('✅ Employee deleted successfully!');
    console.log('Rows affected:', result.rowCount);
  } catch (error) {
    console.error('❌ Error deleting employee:', error);
    throw error;
  }
}

// Run the script
deleteEmployee()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });