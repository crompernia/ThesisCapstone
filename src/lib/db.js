
/**
 * @fileoverview This file contains the database connection and query logic.
 * It uses the `pg` library to connect to a PostgreSQL database.
 */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool;

if (!pool) {
    if (!process.env.DATABASE_URL) {
        console.error("Missing DATABASE_URL environment variable.");
    } else {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }
}

/**
 * Initializes the database connection pool and creates tables if they don't exist.
 * This function is called automatically when this module is first imported.
 */
async function initializeDb() {
  if (pool) return; // Avoid re-initializing

  try {
    pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
      max: 1, // Limit connections in a serverless environment
    });

    console.log('Database pool created.');

    const client = await pool.connect();
    console.log('Database client connected.');
    
    // Create tables if they don't exist
    await client.query(`
        CREATE TABLE IF NOT EXISTS accounts (
            id VARCHAR(255) PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            middle_name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            "password" VARCHAR(255) NOT NULL,
            "role" VARCHAR(50) NOT NULL,
            "position" VARCHAR(255),
            department VARCHAR(255),
            branch VARCHAR(255),
            status VARCHAR(50) NOT NULL,
            date_hired DATE NOT NULL,
            date_of_birth DATE,
            gender VARCHAR(50),
            available_leaves INT DEFAULT 0,
            sss_number VARCHAR(255),
            philhealth_number VARCHAR(255),
            pagibig_number VARCHAR(255),
            tin VARCHAR(255),
            managed_branches VARCHAR(255)[]
        );

        CREATE TABLE IF NOT EXISTS announcements (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            status VARCHAR(50) NOT NULL, -- Draft, Published
            posted_by_id VARCHAR(255) REFERENCES accounts(id),
            posted_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS leave_requests (
            id SERIAL PRIMARY KEY,
            account_id VARCHAR(255) REFERENCES accounts(id) ON DELETE CASCADE,
            leave_type VARCHAR(255) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            reason TEXT,
            status VARCHAR(50) DEFAULT 'Pending', -- Pending, Approved, Rejected
            created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS branches (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            coordinates VARCHAR(255)
        );

        CREATE TABLE IF NOT EXISTS positions (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) UNIQUE NOT NULL,
            rate NUMERIC(10, 2) NOT NULL
        );
    `);
    
    console.log('Tables are successfully created or already exist.');

    client.release();

  } catch (err) {
    console.error('Error initializing database:', err);
    // Set pool to null so we know initialization failed
    pool = null; 
  }
}

// Ensure the database is initialized when the module is loaded
initializeDb();


/**
 * Executes a SQL query against the database.
 * @param {string} text - The SQL query string.
 * @param {Array<any>} [params] - The parameters to pass to the query.
 * @returns {Promise<import('pg').QueryResult<any>>} The result of the query.
 */
export async function query(text, params) {
    if (!pool) {
        console.error("Database not initialized, cannot execute query.");
        // Return a structure that looks like a query result to avoid crashes downstream
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
