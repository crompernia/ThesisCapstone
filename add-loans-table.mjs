import { getDb } from './src/lib/db.ts';
import fs from 'fs';

async function addLoansTable() {
  try {
    const db = await getDb();

    // Read the migration SQL
    const migrationSQL = fs.readFileSync('./drizzle/0002_ancient_sabretooth.sql', 'utf8');

    // Split by statement-breakpoint and execute each statement
    const statements = migrationSQL.split('--> statement-breakpoint');

    for (const statement of statements) {
      const trimmed = statement.trim();
      if (trimmed && !trimmed.startsWith('--')) {
        console.log('Executing:', trimmed);
        await db.execute(trimmed);
      }
    }

    console.log('Loans table added successfully!');
  } catch (error) {
    console.error('Error adding loans table:', error);
  }
}

addLoansTable();