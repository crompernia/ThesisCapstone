/**
 * @fileoverview Database seeding script
 * Populates the database with current NeonDB data
 * Auto-generated from fetch-neondb-data.js
 */
import { getDb } from './db.js';
import * as schema from './schema.js';
import { hashPassword } from './auth.js';

async function seed() {
  console.log('Starting database seeding with NeonDB data...');

  try {
    const db = await getDb();

    // Hash the default password once to use for all accounts
    console.log('Hashing passwords...');
    const hashedPassword = await hashPassword('password');

    // Insert branches
  /**   console.log('Inserting branches...');
    await db.insert(schema.branches).values([
  {
    "id": 1,
    "name": "Headquarters",
    "coordinates": "14.5995,120.9842"
  },
  {
    "id": 2,
    "name": "Downtown Office",
    "coordinates": "14.5547,121.0244"
  },
  {
    "id": 3,
    "name": "Remote",
    "coordinates": "0.0000,0.0000"
  }
]);*/

    //  Insert positions
    /**console.log('Inserting positions...');
    await db.insert(schema.positions).values([
  {
    "id": 1,
    "title": "Senior Software Engineer",
    "rate": "1200.00"
  },
  {
    "id": 2,
    "title": "Project Manager",
    "rate": "1500.00"
  },
  {
    "id": 3,
    "title": "UX Designer",
    "rate": "1000.00"
  },
  {
    "id": 4,
    "title": "QA Tester",
    "rate": "800.00"
  },
  {
    "id": 5,
    "title": "Software Engineer",
    "rate": "1000.00"
  }
]);*/

    // Insert departments
    console.log('Inserting departments...');
    await db.insert(schema.departments).values([]);

    // Insert position_departments
    console.log('Inserting position_departments...');
    await db.insert(schema.positionDepartments).values([
 
]);

    // Insert accounts (without password - will be hashed)
    console.log('Inserting accounts...');
    const accountInserts = [
  {
    "id": "3976ee29-6973-44f0-ae4a-ccabe26ebc92",
    "employeeNumber": null,
    "firstName": "Super",
    "lastName": "Admin",
    "middleName": null,
    "email": "super@example.com",
    "role": "Admin",
    "position": null,
    "department": null,
    "branch": null,
    "status": "Active",
    "dateHired": "2020-01-01",
    "dateOfBirth": null,
    "gender": null,
    "availableLeaves": 0,
    "sssNumber": null,
    "philhealthNumber": null,
    "pagibigNumber": null,
    "tin": null,
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.713Z",
    "updatedAt": "2025-10-21T23:05:21.713Z"
  },
  {
    "id": "1f1dda4d-f422-4553-a41c-9ce7f1312ff8",
    "employeeNumber": null,
    "firstName": "Olivia",
    "lastName": "Chen",
    "middleName": null,
    "email": "olivia.chen.hr@example.com",
    "role": "HR",
    "position": null,
    "department": null,
    "branch": null,
    "status": "Active",
    "dateHired": "2021-01-15",
    "dateOfBirth": null,
    "gender": null,
    "availableLeaves": 15,
    "sssNumber": null,
    "philhealthNumber": null,
    "pagibigNumber": null,
    "tin": null,
    "managedBranches": [
      "Headquarters",
      "Downtown Office"
    ],
    "createdAt": "2025-10-21T23:05:21.758Z",
    "updatedAt": "2025-10-21T23:05:21.758Z"
  },
  {
    "id": "alvin-gonzales-admin-uuid",
    "employeeNumber": null,
    "firstName": "Alvin",
    "lastName": "Gonzales",
    "middleName": null,
    "email": "alvin.gonzales@admin.com",
    "role": "Admin",
    "position": null,
    "department": null,
    "branch": null,
    "status": "Active",
    "dateHired": "2024-01-01",
    "dateOfBirth": null,
    "gender": null,
    "availableLeaves": 0,
    "sssNumber": null,
    "philhealthNumber": null,
    "pagibigNumber": null,
    "tin": null,
    "managedBranches": null,
    "createdAt": "2025-10-24T06:55:30.000Z",
    "updatedAt": "2025-10-24T06:55:30.000Z"
  }
];

    for (const account of accountInserts) {
      await db.insert(schema.accounts).values({
        ...account,
        password: hashedPassword // Use hashed password
      });
    }

    // Insert announcements
    console.log('Inserting announcements...');
    await db.insert(schema.announcements).values([]);

    // Insert leave requests
    console.log('Inserting leave requests...');
    await db.insert(schema.leaveRequests).values([]);

    // Insert attendance
    console.log('Inserting attendance...');
    await db.insert(schema.attendance).values([]);

    // Insert schedules
    console.log('Inserting schedules...');
    await db.insert(schema.schedules).values([]);

    // Insert payslips
    console.log('Inserting payslips...');
    await db.insert(schema.payslips).values([]);

    // Insert attendance records
    console.log('Inserting attendance records...');
    await db.insert(schema.attendanceRecords).values([]);

    // Insert reports
    console.log('Inserting reports...');
    await db.insert(schema.reports).values([]);

    console.log('✅ Database seeding completed successfully with NeonDB data!');
    console.log(`\n${'='.repeat(60)}`);
    console.log('📊 Seeded with current NeonDB data');
    console.log(`${'='.repeat(60)}`);
    console.log(`\n🔐 Default Password: "password"`);
    console.log('💡 All accounts use the same password');
    console.log(`${'='.repeat(60)}\n`);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
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
