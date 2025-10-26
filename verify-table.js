const { Client } = require('pg');
require('dotenv/config');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function verifyTable() {
  try {
    await client.connect();
    console.log('Connected to Neon DB');

    // Check if table exists
    const tableResult = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'accounts';
    `);

    if (tableResult.rows.length === 0) {
      console.log('❌ Table accounts does not exist');
      return;
    }

    console.log('✅ Table accounts exists');

    // Get column information
    const columnResult = await client.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'accounts'
      ORDER BY ordinal_position;
    `);

    console.log('\n📋 Table structure:');
    columnResult.rows.forEach(col => {
      console.log(`- ${col.column_name}: ${col.data_type} (${col.is_nullable === 'YES' ? 'nullable' : 'not null'}) default: ${col.column_default || 'none'}`);
    });

    // Check constraints
    const constraintResult = await client.query(`
      SELECT conname, contype, conkey, confkey
      FROM pg_constraint
      WHERE conrelid = 'accounts'::regclass;
    `);

    console.log('\n🔗 Constraints:');
    constraintResult.rows.forEach(con => {
      console.log(`- ${con.conname}: ${con.contype === 'f' ? 'foreign key' : con.contype === 'u' ? 'unique' : 'other'}`);
    });

  } catch (error) {
    console.error('Error verifying table:', error);
  } finally {
    await client.end();
  }
}

verifyTable();