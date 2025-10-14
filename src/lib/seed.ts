/**
 * @fileoverview Database seeding script
 * Populates the database with initial sample data
 */
import { getDb } from './db.js';
import * as schema from './schema.js';
import { hashPassword } from './auth.js';

async function seed() {
  console.log('Starting database seeding...');

  try {
    const db = await getDb();

    // Hash the default password once to use for all accounts
    console.log('Hashing passwords...');
    const hashedPassword = await hashPassword('password');

    // Insert branches
    console.log('Inserting branches...');
    await db.insert(schema.branches).values([
      { name: 'Headquarters', coordinates: '14.5995,120.9842' },
      { name: 'Downtown Office', coordinates: '14.5547,121.0244' },
      { name: 'Remote', coordinates: '0.0000,0.0000' },
    ]);

    // Insert positions
    console.log('Inserting positions...');
    await db.insert(schema.positions).values([
      { title: 'Senior Software Engineer', rate: '1200.00' },
      { title: 'Project Manager', rate: '1500.00' },
      { title: 'UX Designer', rate: '1000.00' },
      { title: 'QA Tester', rate: '800.00' },
      { title: 'Software Engineer', rate: '1000.00' },
    ]);

    // Insert admin account (UUID will be auto-generated)
    console.log('Inserting admin account...');
    const [adminAccount] = await db.insert(schema.accounts).values({
      firstName: 'Super',
      lastName: 'Admin',
      email: 'super@example.com',
      password: hashedPassword,
      role: 'Admin',
      status: 'Active',
      dateHired: '2020-01-01',
      availableLeaves: 0,
    }).returning();

    // Insert HR account
    console.log('Inserting HR account...');
    const [hrAccount] = await db.insert(schema.accounts).values({
      firstName: 'Olivia',
      lastName: 'Chen',
      email: 'olivia.chen.hr@example.com',
      password: hashedPassword,
      role: 'HR',
      status: 'Active',
      dateHired: '2021-01-15',
      availableLeaves: 15,
      managedBranches: ['Headquarters', 'Downtown Office'],
    }).returning();

    // Insert employee accounts
    console.log('Inserting employee accounts...');
    const employees = await db.insert(schema.accounts).values([
      {
        employeeNumber: '10001',
        firstName: 'Maria',
        lastName: 'Rodriguez',
        middleName: 'Veronica',
        email: 'maria.rodriguez@example.com',
        password: hashedPassword,
        role: 'Employee',
        position: 'Senior Software Engineer',
        department: 'Technology',
        branch: 'Headquarters',
        status: 'Active',
        dateHired: '2022-01-15',
        dateOfBirth: '2001-12-01',
        gender: 'Female',
        availableLeaves: 15,
        sssNumber: '34-1234567-8',
        philhealthNumber: '12-123456789-0',
        pagibigNumber: '1234-5678-9012',
        tin: '123-456-789-000',
      },
      {
        employeeNumber: '10002',
        firstName: 'David',
        lastName: 'Lee',
        middleName: 'Sanchez',
        email: 'david.lee@example.com',
        password: hashedPassword,
        role: 'Employee',
        position: 'Project Manager',
        department: 'Management',
        branch: 'Headquarters',
        status: 'Active',
        dateHired: '2021-05-20',
        dateOfBirth: '2001-10-01',
        gender: 'Male',
        availableLeaves: 15,
        sssNumber: '34-2345678-9',
        philhealthNumber: '12-234567890-1',
        pagibigNumber: '2345-6789-0123',
        tin: '234-567-890-111',
      },
      {
        employeeNumber: '10003',
        firstName: 'James',
        lastName: 'White',
        middleName: 'Vin',
        email: 'james.white@example.com',
        password: hashedPassword,
        role: 'Employee',
        position: 'UX Designer',
        department: 'Design',
        branch: 'Downtown Office',
        status: 'Active',
        dateHired: '2022-08-01',
        dateOfBirth: '1999-03-06',
        gender: 'Male',
        availableLeaves: 15,
        sssNumber: '34-3456789-0',
        philhealthNumber: '12-345678901-2',
        pagibigNumber: '3456-7890-1234',
        tin: '345-678-901-222',
      },
      {
        employeeNumber: '10004',
        firstName: 'Emily',
        lastName: 'Carter',
        middleName: 'San',
        email: 'emily.carter@example.com',
        password: hashedPassword,
        role: 'Employee',
        position: 'QA Tester',
        department: 'Technology',
        branch: 'Remote',
        status: 'Active',
        dateHired: '2023-02-10',
        dateOfBirth: '2002-04-20',
        gender: 'Female',
        availableLeaves: 12,
        sssNumber: '34-4567890-1',
        philhealthNumber: '12-456789012-3',
        pagibigNumber: '4567-8901-2345',
        tin: '456-789-012-333',
      },
      {
        employeeNumber: '10005',
        firstName: 'Sarah',
        lastName: 'Williams',
        middleName: 'Rain',
        email: 'sarah.williams@example.com',
        password: hashedPassword,
        role: 'Employee',
        position: 'Software Engineer',
        department: 'Technology',
        branch: 'Headquarters',
        status: 'Active',
        dateHired: '2023-06-22',
        dateOfBirth: '2000-05-25',
        gender: 'Female',
        availableLeaves: 15,
        sssNumber: '34-5678901-2',
        philhealthNumber: '12-567890123-4',
        pagibigNumber: '5678-9012-3456',
        tin: '567-890-123-444',
      },
    ]).returning();

    // Insert announcements
    console.log('Inserting announcements...');
    await db.insert(schema.announcements).values([
      {
        title: 'Welcome to the Company',
        content: 'We are excited to have you join our team!',
        status: 'Published',
        postedBy: hrAccount.id,
      },
      {
        title: 'Holiday Schedule',
        content: 'Please note the upcoming holiday schedule for December.',
        status: 'Published',
        postedBy: hrAccount.id,
      },
      {
        title: 'System Maintenance',
        content: 'The HRMS will be under maintenance this weekend.',
        status: 'Draft',
        postedBy: hrAccount.id,
      },
    ]);

    // Insert leave requests
    console.log('Inserting leave requests...');
    await db.insert(schema.leaveRequests).values([
      {
        employeeId: employees[0].id, // Maria
        leaveType: 'Vacation Leave',
        startDate: '2024-09-01',
        endDate: '2024-09-05',
        reason: 'Family trip to Japan.',
        status: 'Pending',
      },
      {
        employeeId: employees[1].id, // David
        leaveType: 'Sick Leave',
        startDate: '2024-08-20',
        endDate: '2024-08-21',
        reason: 'Fever and flu.',
        status: 'Approved',
      },
      {
        employeeId: employees[3].id, // Emily
        leaveType: 'Vacation Leave',
        startDate: '2024-07-20',
        endDate: '2024-07-25',
        reason: 'Annual vacation.',
        status: 'Approved',
      },
    ]);

    console.log('Database seeding completed successfully!');
    console.log(`\n${'='.repeat(60)}`);
    console.log('Created accounts (all passwords are "password"):');
    console.log(`${'='.repeat(60)}`);
    console.log(`\n📧 Admin Login:`);
    console.log(`   Email: ${adminAccount.email}`);
    console.log(`   ID: ${adminAccount.id}`);
    console.log(`\n📧 HR Login:`);
    console.log(`   Email: ${hrAccount.email}`);
    console.log(`   ID: ${hrAccount.id}`);
    console.log(`\n👥 Employee Logins:`);
    employees.forEach((emp, idx) => {
      console.log(`   ${idx + 1}. Employee #: ${emp.employeeNumber} | ${emp.email}`);
    });
    console.log(`\n${'='.repeat(60)}`);
    console.log('🔐 Default Password: "password"');
    console.log('💡 Employee Login: Use Employee Number (e.g., 10001)');
    console.log('💡 HR/Admin Login: Use Email Address');
    console.log(`${'='.repeat(60)}\n`);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
    .then(() => {
      console.log('\nSeed script finished.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Seed script failed:', err);
      process.exit(1);
    });
}

export default seed;
