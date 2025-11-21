const { getDb } = require('../src/lib/db');
const fs = require('fs');
const path = require('path');

async function importSchedules() {
  try {
    console.log('Connecting to database...');
    const db = await getDb();

    // Read exported schedules
    const importPath = path.join(__dirname, '..', 'schedule-export.json');
    if (!fs.existsSync(importPath)) {
      console.error('Export file not found. Run export-schedules.js first.');
      process.exit(1);
    }

    const schedules = JSON.parse(fs.readFileSync(importPath, 'utf8'));
    console.log(`Found ${schedules.length} schedules to import`);

    // Clear existing schedules (optional - be careful!)
    console.log('Clearing existing schedules...');
    await db.delete(require('../src/lib/schema').schedules);

    // Import schedules
    console.log('Importing schedules...');
    for (const schedule of schedules) {
      try {
        await db.insert(require('../src/lib/schema').schedules).values({
          employeeId: schedule.employeeId,
          date: schedule.date,
          shiftStart: schedule.shiftStart,
          shiftEnd: schedule.shiftEnd,
          createdAt: schedule.createdAt || new Date().toISOString()
        });
        console.log(`Imported schedule for ${schedule.employeeId} on ${schedule.date}`);
      } catch (error) {
        console.error(`Failed to import schedule:`, schedule, error);
      }
    }

    console.log('Schedule import completed!');
    process.exit(0);
  } catch (error) {
    console.error('Import failed:', error);
    process.exit(1);
  }
}

importSchedules();