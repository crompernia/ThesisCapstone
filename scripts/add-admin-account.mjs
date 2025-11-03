import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { hashPassword } from '../src/lib/auth.js';

async function addAdminAccount() {
  console.log('Adding new Admin account for Narissa Laro Bias...');

  try {
    const db = await getDb();
    const hashedPassword = await hashPassword('password');

    await db.insert(schema.accounts).values({
      employeeNumber: '001-00002',
      firstName: 'Narissa',
      lastName: 'Bias',
      middleName: 'Laro',
      email: 'bias.admin@chumting.com',
      role: 'Admin',
      status: 'Active',
      dateHired: new Date().toISOString().split('T')[0], // Today's date
      password: hashedPassword,
      branch: 'Headquarters',
      department: 'Administration',
      position: 'Administrator',
      availableLeaves: 30,
      // Other fields default to null
    });

    console.log('✅ Admin account for Narissa Laro Bias created successfully!');
    console.log('Employee Number: 001-00002');
    console.log('Email: bias.admin@chumting.com');
    console.log('Password: password');
    console.log('Role: Admin');
  } catch (error) {
    console.error('❌ Error creating admin account:', error);
    throw error;
  }
}

// Run the script
addAdminAccount()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });