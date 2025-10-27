const { getDb } = require('./src/lib/db.ts');
const schema = require('./src/lib/schema.ts');
const fs = require('fs');

async function importSchedulesOnly() {
  const db = await getDb();

  // Read the data from current-db-data.json
  const data = JSON.parse(fs.readFileSync('current-db-data.json', 'utf8'));

  console.log('🚀 Starting schedules-only import from current-db-data.json');
  console.log('===========================================================');

  // Only import schedules
  const tableName = 'schedules';
  const tableData = data[tableName] || [];
  console.log(`\n📊 Importing ${tableData.length} records into ${tableName}...`);

  if (tableData.length === 0) {
    console.log(`   ⚠️  No data to import for ${tableName}`);
    return;
  }

  try {
    // Skip clearing data for now since delete is failing
    console.log(`   📝 Processing ${tableData.length} records for ${tableName}`);

    // Insert data one by one to handle errors gracefully
    let imported = 0;
    let failed = 0;

    for (const record of tableData) {
      try {
        // Clean the record - only keep the fields we need and ensure proper types
        const cleanRecord = {
          employeeId: record.employeeId || record.employee_id,
          date: record.date,
          shiftStart: record.shiftStart || record.shift_start,
          shiftEnd: record.shiftEnd || record.shift_end,
          notes: typeof record.notes === 'string' ? record.notes : JSON.stringify(record.notes),
        };

        // Try inserting without specifying id or created_at since they're auto-generated
        const { id, createdAt, ...recordWithoutAutoFields } = cleanRecord;
        await db.insert(schema[tableName]).values(recordWithoutAutoFields);
        imported++;
      } catch (recordError) {
        failed++;
        if (failed <= 5) { // Only log first 5 failures
          console.log(`   ⚠️  Failed to import record:`, recordError.message);
        }
      }
    }

    console.log(`   🎉 Successfully imported ${imported} records into ${tableName}`);
    if (failed > 0) {
      console.log(`   ⚠️  Failed to import ${failed} records`);
    }

  } catch (error) {
    console.error(`   ❌ Error importing ${tableName}:`, error.message);
  }

  console.log('\n🎊 Schedules import completed!');
  console.log('================================');
  console.log('The schedules table should now be populated.');
}

importSchedulesOnly().catch(console.error);