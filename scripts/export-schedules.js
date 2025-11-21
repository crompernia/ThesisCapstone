const { getDb } = require('../src/lib/db');
const fs = require('fs');
const path = require('path');

async function exportSchedules() {
  try {
    console.log('Connecting to database...');
    const db = await getDb();

    console.log('Exporting schedules...');
    const schedules = await db
      .select()
      .from(require('../src/lib/schema').schedules);

    console.log(`Found ${schedules.length} schedules`);

    // Export to JSON file
    const exportPath = path.join(__dirname, '..', 'schedule-export.json');
    fs.writeFileSync(exportPath, JSON.stringify(schedules, null, 2));

    console.log(`Schedules exported to: ${exportPath}`);
    console.log('Sample schedules:', schedules.slice(0, 3));

    process.exit(0);
  } catch (error) {
    console.error('Export failed:', error);
    process.exit(1);
  }
}

exportSchedules();