const { getDb } = require('./src/lib/db.ts');
const schema = require('./src/lib/schema.ts');
const fs = require('fs');

async function importData() {
  const db = await getDb();

  // Read the data from current-db-data.json
  const data = JSON.parse(fs.readFileSync('current-db-data.json', 'utf8'));

  console.log('🚀 Starting data import from current-db-data.json');
  console.log('================================================');

  // Define the order of table imports (respecting foreign key constraints)
  const importOrder = [
    'branches',
    'positions',
    'accounts',
    'departments',
    'position_departments',
    'announcements',
    'leave_requests',
    'attendance',
    'schedules',
    'payslips',
    'attendance_records',
    'reports'
  ];

  for (const tableName of importOrder) {
    const tableData = data[tableName] || [];
    console.log(`\n📊 Importing ${tableData.length} records into ${tableName}...`);

    if (tableData.length === 0) {
      console.log(`   ⚠️  No data to import for ${tableName}`);
      continue;
    }

    try {
      // Skip delete for now to avoid foreign key issues
      // await db.delete(schema[tableName]);
      console.log(`   📝 Processing ${tableData.length} records for ${tableName}`);

      // Insert new data in batches to avoid memory issues
      const batchSize = 10; // Very small batch size
      let imported = 0;

      for (let i = 0; i < tableData.length; i += batchSize) {
        const batch = tableData.slice(i, i + batchSize);

        // Process each record to handle date fields
        const processedBatch = batch.map(record => {
          const processed = { ...record };

          // Convert date strings to Date objects for date fields
          Object.keys(processed).forEach(key => {
            if (key.includes('date') || key.includes('Date')) {
              if (typeof processed[key] === 'string' && processed[key]) {
                try {
                  // For date fields, keep as string since Drizzle handles date strings
                  // processed[key] = processed[key]; // Keep as string
                } catch (e) {
                  console.log(`Failed to process ${key}: ${processed[key]}`);
                }
              }
            }
            // Handle timestamp fields - convert to proper Date objects
            if (key.includes('time') || key.includes('Time') || key === 'created_at' || key === 'updated_at') {
              if (typeof processed[key] === 'string' && processed[key]) {
                try {
                  processed[key] = new Date(processed[key]);
                } catch (e) {
                  console.log(`Failed to convert ${key}: ${processed[key]}`);
                  // Keep as string if conversion fails
                }
              }
            }
            // Handle UUID fields that might be strings
            if (key.includes('id') && key !== 'id' && typeof processed[key] === 'string') {
              // Keep UUIDs as strings
            }
            // Handle array fields
            if (Array.isArray(processed[key])) {
              // Keep arrays as they are
            }
            // Handle null/undefined values
            if (processed[key] === null || processed[key] === undefined) {
              // Keep nulls/undefined as they are
            }
          });

          return processed;
        });

        try {
          await db.insert(schema[tableName]).values(processedBatch).onConflictDoNothing();
          imported += batch.length;
          console.log(`   ✅ Imported ${imported}/${tableData.length} records`);
        } catch (batchError) {
          console.log(`   ⚠️  Batch failed, trying individual inserts...`);
          // Try individual inserts
          for (const record of processedBatch) {
            try {
              await db.insert(schema[tableName]).values(record).onConflictDoNothing();
              imported++;
            } catch (recordError) {
              console.log(`   ⚠️  Failed to import record:`, recordError.message);
            }
          }
        }
      }

      console.log(`   🎉 Successfully imported ${imported} records into ${tableName}`);
    } catch (error) {
      console.error(`   ❌ Error importing ${tableName}:`, error.message);
      // Continue with other tables
    }
  }

  console.log('\n🎊 Data import completed!');
  console.log('===============================');
  console.log('You can now run your application with the imported data.');
}

importData().catch(console.error);