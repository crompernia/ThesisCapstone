/**
 * @fileoverview Script to reset all employees' available leaves to 0
 */
import { getDb } from './db.js';
import * as schema from './schema.js';

async function updateLeaves() {
  console.log('Starting leaves update...');

  try {
    const db = await getDb();

    // Update all accounts to set availableLeaves to 0
    const result = await db.update(schema.accounts)
      .set({ availableLeaves: 0 })
      .execute();

    console.log('Successfully updated all employees\' available leaves to 0');
    console.log(`Affected rows: ${result.rowCount}`);
  } catch (error) {
    console.error('Error updating leaves:', error);
    throw error;
  }
}

// Run update if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updateLeaves()
    .then(() => {
      console.log('\nLeaves update script finished.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Leaves update script failed:', err);
      process.exit(1);
    });
}

export default updateLeaves;