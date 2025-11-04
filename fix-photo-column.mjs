import { getPool } from './src/lib/db.js';

async function fixPhotoColumn() {
  try {
    const pool = getPool();
    if (!pool) {
      console.error('Database pool not initialized');
      return;
    }
    const client = await pool.connect();
    await client.query('ALTER TABLE accounts ALTER COLUMN photo TYPE text;');
    client.release();
    console.log('Photo column altered to text type successfully');
  } catch (error) {
    console.error('Error altering photo column:', error);
  }
}

fixPhotoColumn();