const { getDb } = require('./src/lib/db');
const { accounts } = require('./src/lib/schema');
const { eq } = require('drizzle-orm');

async function updateAllEmployees() {
  const db = await getDb();

  try {
    const result = await db
      .update(accounts)
      .set({
        branch: 'Remote',
        department: 'Technology',
        position: 'QA Tester'
      })
      .where(eq(accounts.role, 'Employee'));

    console.log(`Updated ${result.rowCount} employees`);
  } catch (error) {
    console.error('Error updating employees:', error);
  } finally {
    process.exit(0);
  }
}

updateAllEmployees();