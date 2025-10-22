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
    console.log('Inserting branches...');
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
]);

    // Insert positions
    console.log('Inserting positions...');
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
]);

    // Insert departments
    console.log('Inserting departments...');
    await db.insert(schema.departments).values([]);

    // Insert position_departments
    console.log('Inserting position_departments...');
    await db.insert(schema.positionDepartments).values([
  {
    "id": 8,
    "positionId": 9,
    "departmentId": 4,
    "createdAt": "2025-10-21T22:37:12.761Z"
  },
  {
    "id": 9,
    "positionId": 14,
    "departmentId": 4,
    "createdAt": "2025-10-21T22:37:18.233Z"
  },
  {
    "id": 10,
    "positionId": 15,
    "departmentId": 4,
    "createdAt": "2025-10-21T22:37:23.253Z"
  },
  {
    "id": 11,
    "positionId": 16,
    "departmentId": 4,
    "createdAt": "2025-10-21T22:37:27.451Z"
  },
  {
    "id": 12,
    "positionId": 17,
    "departmentId": 4,
    "createdAt": "2025-10-21T22:37:31.876Z"
  }
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
    "id": "51b64979-853e-4307-9746-d787a4df2ef9",
    "employeeNumber": "10001",
    "firstName": "Maria",
    "lastName": "Rodriguez",
    "middleName": "Veronica",
    "email": "maria.rodriguez@example.com",
    "role": "Employee",
    "position": "Senior Software Engineer",
    "department": "Technology",
    "branch": "Headquarters",
    "status": "Active",
    "dateHired": "2022-01-15",
    "dateOfBirth": "2001-12-01",
    "gender": "Female",
    "availableLeaves": 15,
    "sssNumber": "34-1234567-8",
    "philhealthNumber": "12-123456789-0",
    "pagibigNumber": "1234-5678-9012",
    "tin": "123-456-789-000",
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.792Z",
    "updatedAt": "2025-10-21T23:05:21.792Z"
  },
  {
    "id": "d4b0a0a7-99fd-4464-95b8-c273d79b76ac",
    "employeeNumber": "10002",
    "firstName": "David",
    "lastName": "Lee",
    "middleName": "Sanchez",
    "email": "david.lee@example.com",
    "role": "Employee",
    "position": "Project Manager",
    "department": "Management",
    "branch": "Headquarters",
    "status": "Active",
    "dateHired": "2021-05-20",
    "dateOfBirth": "2001-10-01",
    "gender": "Male",
    "availableLeaves": 15,
    "sssNumber": "34-2345678-9",
    "philhealthNumber": "12-234567890-1",
    "pagibigNumber": "2345-6789-0123",
    "tin": "234-567-890-111",
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.792Z",
    "updatedAt": "2025-10-21T23:05:21.792Z"
  },
  {
    "id": "dc11906d-0dba-4eb8-a666-86e6b0272530",
    "employeeNumber": "10003",
    "firstName": "James",
    "lastName": "White",
    "middleName": "Vin",
    "email": "james.white@example.com",
    "role": "Employee",
    "position": "UX Designer",
    "department": "Design",
    "branch": "Downtown Office",
    "status": "Active",
    "dateHired": "2022-08-01",
    "dateOfBirth": "1999-03-06",
    "gender": "Male",
    "availableLeaves": 15,
    "sssNumber": "34-3456789-0",
    "philhealthNumber": "12-345678901-2",
    "pagibigNumber": "3456-7890-1234",
    "tin": "345-678-901-222",
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.792Z",
    "updatedAt": "2025-10-21T23:05:21.792Z"
  },
  {
    "id": "8e9e5ee1-d6e7-471a-916f-c9e42601c989",
    "employeeNumber": "10004",
    "firstName": "Emily",
    "lastName": "Carter",
    "middleName": "San",
    "email": "emily.carter@example.com",
    "role": "Employee",
    "position": "QA Tester",
    "department": "Technology",
    "branch": "Remote",
    "status": "Active",
    "dateHired": "2023-02-10",
    "dateOfBirth": "2002-04-20",
    "gender": "Female",
    "availableLeaves": 12,
    "sssNumber": "34-4567890-1",
    "philhealthNumber": "12-456789012-3",
    "pagibigNumber": "4567-8901-2345",
    "tin": "456-789-012-333",
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.792Z",
    "updatedAt": "2025-10-21T23:05:21.792Z"
  },
  {
    "id": "951c9e1c-a6c8-49d9-b532-c205e120433d",
    "employeeNumber": "10005",
    "firstName": "Sarah",
    "lastName": "Williams",
    "middleName": "Rain",
    "email": "sarah.williams@example.com",
    "role": "Employee",
    "position": "Software Engineer",
    "department": "Technology",
    "branch": "Headquarters",
    "status": "Active",
    "dateHired": "2023-06-22",
    "dateOfBirth": "2000-05-25",
    "gender": "Female",
    "availableLeaves": 15,
    "sssNumber": "34-5678901-2",
    "philhealthNumber": "12-567890123-4",
    "pagibigNumber": "5678-9012-3456",
    "tin": "567-890-123-444",
    "managedBranches": null,
    "createdAt": "2025-10-21T23:05:21.792Z",
    "updatedAt": "2025-10-21T23:05:21.792Z"
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
