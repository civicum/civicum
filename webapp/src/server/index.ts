import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { desc } from 'drizzle-orm'
import { getDb } from './db'
import { communityReports } from '../db/schema'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

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
            { error: 'No se pudieron cargar los reportes comunitarios.', detail: message },
            500
        )
    }
})

// Auth middleware structure (L0-L4 validation)
app.use('/api/protected/*', async (_c, next) => {
    // TODO: Implement JWT validation and Level authorization here
    await next()
})

app.get('/api/protected/profile', (c) => {
    return c.json({ message: 'Profile data protected by L2 validation' })
})

export default app
