import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

app.get('/health', (c) => c.json({ status: 'ok', version: '1.0.0' }))

// Auth middleware structure (L0-L4 validation)
app.use('/api/protected/*', async (c, next) => {
    // TODO: Implement JWT validation and Level authorization here
    await next()
})

app.get('/api/protected/profile', (c) => {
    return c.json({ message: 'Profile data protected by L2 validation' })
})

export default app
