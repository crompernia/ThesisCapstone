const fs = require('fs');
const { Client } = require('pg');
require('dotenv/config');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function pushSchema() {
  try {
    await client.connect();
    console.log('Connected to Neon DB');

    // Split the SQL file into individual statements
    const schemaSQL = fs.readFileSync('./schema.sql', 'utf8');
    const statements = schemaSQL.split(';').map(stmt => stmt.trim()).filter(stmt => stmt.length > 0);

    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await client.query(statement);
          console.log('Executed statement successfully');
        } catch (error) {
          if (error.code === '42P07') { // relation already exists
            console.log('Table already exists, skipping...');
          } else {
            console.error('Error executing statement:', error.message);
          }
        }
      }
    }

    console.log('Schema push completed');
  } catch (error) {
    console.error('Error pushing schema:', error);
  } finally {
    await client.end();
  }
}

pushSchema();