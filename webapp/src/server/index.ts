import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { desc, eq } from 'drizzle-orm'
import { getDb } from './db'
import { communityReports, profiles } from '../db/schema'

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

/**
 * POST /api/community-reports — Create a new community report
 * Expects JSON: { title, description, evidenceUrls?: string[] }
 * - title: required string
 * - description: required string (includes category and location from frontend)
 * - evidenceUrls: optional array of base64-encoded image strings
 */
app.post('/api/community-reports', async (c) => {
    const db = getDb()
    let body
    try {
        body = await c.req.json()
    } catch (_err) {
        void _err
        return c.json({ error: 'Invalid JSON' }, 400)
    }

    const { title, description, evidenceUrls = [] } = body
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return c.json({ error: 'Title is required' }, 400)
    }
    if (!description || typeof description !== 'string' || description.trim() === '') {
        return c.json({ error: 'Description is required' }, 400)
    }
    if (!Array.isArray(evidenceUrls)) {
        return c.json({ error: 'evidenceUrls must be an array' }, 400)
    }

    // Get or create system user for anonymous reports
    const systemEmail = 'system@civicum.cl'
    let systemUser
    try {
        // Try to find existing system user
        const [existing] = await db
            .select()
            .from(profiles)
            .where(eq(profiles.email, systemEmail))
            .limit(1)

        if (existing) {
            systemUser = existing
        } else {
            // Create system user if not exists
            const [inserted] = await db
                .insert(profiles)
                .values({
                    email: systemEmail,
                    fullName: 'System User',
                })
                .returning()

            systemUser = inserted
        }
    } catch (error) {
        console.error('[community-reports] Error getting/creating system user:', error)
        return c.json({ error: 'Unable to process request' }, 500)
    }

    // Insert the report
    try {
        const [report] = await db
            .insert(communityReports)
            .values({
                authorId: systemUser.id,
                communeId: null, // TODO: Set via reverse geocoding in future phase
                title: title.trim(),
                description: description.trim(),
                evidenceUrls: evidenceUrls,
                status: 'PENDING',
            })
            .returning()

        return c.json({ report }, 201)
    } catch (error) {
        console.error('[community-reports] Error inserting report:', error)
        return c.json({ error: 'Failed to create report' }, 500)
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