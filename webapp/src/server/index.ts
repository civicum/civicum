import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { desc } from 'drizzle-orm'
import { getDb } from './db'
import { communityReports } from '../db/schema'

const app = new Hono()
const corsOrigin = process.env.CIVICUM_CORS_ORIGIN ?? 'http://localhost:5173'

app.use('*', logger())
app.use('*', cors({ origin: corsOrigin }))

app.get('/health', (c) => c.json({ status: 'ok', version: '1.0.0' }))

/**
 * GET /api/community-reports — Read-only endpoint (Gate 5.7)
 *
 * Real query to communityReports table via Drizzle + Neon.
 * - If DATABASE_URL is missing → real 500 error
 * - If DB is connected but table is empty → real empty array
 * - If DB is connected and has data → real data
 * No fake data. No fallback arrays.
 */
app.get('/api/community-reports', async (c) => {
    try {
        const db = getDb()
        const reports = await db
            .select()
            .from(communityReports)
            .orderBy(desc(communityReports.createdAt))
            .limit(50)
        return c.json({ reports })
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Error desconocido'
        console.error('[community-reports] Query failed:', message)
        return c.json(
            { error: 'No se pudieron cargar los reportes comunitarios.' },
            500
        )
    }
})

// Auth middleware structure (L0-L4 validation)
app.use('/api/protected/*', async (c) => {
    return c.json({ error: 'Protected API is not implemented yet.' }, 501)
})

app.get('/api/protected/profile', (c) => {
    return c.json({ error: 'Protected API is not implemented yet.' }, 501)
})

export default app
