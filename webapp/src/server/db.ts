import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

/**
 * Real database connection using Neon Serverless driver.
 * Requires DATABASE_URL environment variable.
 * If DATABASE_URL is missing, queries will fail with a real error — no fake fallback.
 */
export function getDb() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('DATABASE_URL is not configured. Cannot connect to database.');
    }
    const sql = neon(databaseUrl);
    return drizzle(sql, { schema });
}
