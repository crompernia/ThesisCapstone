/**
 * @fileoverview Database connection using Drizzle ORM
 * This file provides a connection pool to PostgreSQL using Drizzle ORM.
 */
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config();

type DrizzleDB = NodePgDatabase<typeof schema>;

let pool: Pool | null = null;
let db: DrizzleDB | null = null;

/**
 * Initializes the database connection pool and Drizzle instance.
 */
async function initializeDb(): Promise<DrizzleDB> {
  if (db) return db; // Already initialized

  try {
    // Create PostgreSQL connection pool
    const isLocalhost = (process.env.DATABASE_URL || process.env.POSTGRES_URL || '').includes('localhost');
    pool = new Pool({
      connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
      ssl: isLocalhost ? false : { rejectUnauthorized: false },
      max: 10, // Maximum number of clients in the pool
    });

    // Initialize Drizzle ORM with the pool and schema
    db = drizzle(pool, { schema });

    console.log('Database pool created and Drizzle ORM initialized.');

    // Test the connection
    const client = await pool.connect();
    console.log('Database client connected successfully.');
    client.release();

    return db;
  } catch (err) {
    console.error('Error initializing database:', err);
    pool = null;
    db = null;
    throw err;
  }
}

// Initialize on module load
initializeDb().catch((err) => {
  console.error('Failed to initialize database on startup:', err);
});

/**
 * Get the Drizzle database instance.
 */
export async function getDb(): Promise<DrizzleDB> {
  if (!db) {
    await initializeDb();
  }
  return db!;
}

/**
 * Executes a raw SQL query against the database (for backward compatibility).
 * @deprecated Use Drizzle ORM queries instead
 */
export async function query(text: string, params?: unknown[]): Promise<{ rows: unknown[]; rowCount: number | null }> {
  if (!pool) {
    console.error('Database not initialized, cannot execute query.');
    return { rows: [], rowCount: 0 };
  }

  const start = Date.now();
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } finally {
    client.release();
  }
}

/**
 * Get the raw PostgreSQL pool (for advanced use cases).
 */
export function getPool(): Pool | null {
  return pool;
}

/**
 * Close the database connection pool.
 */
export async function closeDb(): Promise<void> {
  if (pool) {
    await pool.end();
    console.log('Database pool closed.');
    pool = null;
    db = null;
  }
}

// Export the database instance as default
export default db;
