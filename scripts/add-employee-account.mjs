import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';
import { hashPassword } from '../src/lib/auth.js';

async function addEmployeeAccount() {
  console.log('Adding new Employee account for Reynalyn HR with employee number 002-00074...');

  try {
    const db = await getDb();
    const hashedPassword = await hashPassword('password');

    await db.insert(schema.accounts).values({
      employeeNumber: '002-00074',
      firstName: 'Reynalyn',
      lastName: 'Sarcon',
      email: 'reynalyn.sarcon.employee@chumting.com',
      role: 'Employee',
      status: 'Active',
      dateHired: new Date().toISOString().split('T')[0], // Today's date
      password: hashedPassword,
      branch: 'Headquarters',
      department: 'HR',
      position: 'HR Specialist',
      availableLeaves: 15,
      // Other fields default to null
    });

    console.log('✅ Employee account for Reynalyn Sarcon created successfully!');
    console.log('Employee Number: 002-00074');
    console.log('Email: reynalyn.sarcon.employee@chumting.com');
    console.log('Password: password');
    console.log('Role: Employee (can login with employee number)');
  } catch (error) {
    console.error('❌ Error creating employee account:', error);
    throw error;
  }
}

// Run the script
addEmployeeAccount()
  .then(() => {
    console.log('\nScript finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });