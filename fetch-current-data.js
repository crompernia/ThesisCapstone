import { getDb } from './src/lib/db.js';
import * as schema from './src/lib/schema.js';
import fs from 'fs';

async function fetchData() {
  const db = await getDb();

  // Fetch all data from each table
  const tables = [
    'accounts',
    'branches',
    'positions',
    'departments',
    'positionDepartments',
    'announcements',
    'leaveRequests',
    'overtimeRequests',
    'loans',
    'attendance',
    'schedules',
    'payslips',
    'attendanceRecords',
    'reports'
  ];

  const data = {};

  for (const table of tables) {
    try {
      const result = await db.select().from(schema[table]);
      data[table] = result;
      console.log(`Fetched ${result.length} records from ${table}`);
    } catch (error) {
      console.error(`Error fetching ${table}:`, error.message);
      data[table] = [];
    }
  }

  // Write to file
  fs.writeFileSync('current-db-data.json', JSON.stringify(data, null, 2));
  console.log('Data written to current-db-data.json');
}

fetchData().catch(console.error);