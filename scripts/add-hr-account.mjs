import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { hashPassword } from '../src/lib/auth.js';

async function addHRAccount() {
  console.log('Adding new HR account for Reynalyn Sarcon...');

  try {
    const db = await getDb();
    const hashedPassword = await hashPassword('password');

    await db.insert(schema.accounts).values({
      firstName: 'Reynalyn',
      lastName: 'Sarcon',
      email: 'reynalyn.sarcon.hr@chumting.com',
      role: 'HR',
      status: 'Active',
      dateHired: new Date().toISOString().split('T')[0], // Today's date
      password: hashedPassword,
      // Other fields default to null
    });

    console.log('✅ HR account for Reynalyn Sarcon created successfully!');
    console.log('Email: reynalyn.sarcon.hr@chumting.com');
    console.log('Password: password');
  } catch (error) {
    console.error('❌ Error creating HR account:', error);
    throw error;
  }
}

// Run the script
addHRAccount()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });