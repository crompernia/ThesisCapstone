import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';

async function createBODPosition() {
  console.log('Creating Board of Directors position...');

  try {
    const db = await getDb();

    // Create the position
    await db.insert(schema.positions).values({
      title: 'Board of Directors',
      rate: '0', // No rate for BOD
    });

    console.log('✅ Board of Directors position created successfully!');
  } catch (error) {
    console.error('❌ Error creating position:', error);
    throw error;
  }
}

// Run the script
createBODPosition()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });