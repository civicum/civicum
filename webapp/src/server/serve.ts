import { createServer } from 'node:http';
import app from './index';

const port = parseInt(process.env.PORT || '3001', 10);

/**
 * Standalone Node.js HTTP server for the Hono app.
 * Uses node:http with Hono's fetch adapter — no extra dependency needed.
 * Run with: npx tsx src/server/serve.ts
 */
const server = createServer(async (req, res) => {
    const url = new URL(req.url || '/', `http://localhost:${port}`);

    // Read body for non-GET requests
    let body: string | undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        body = await new Promise<string>((resolve) => {
            let data = '';
            req.on('data', (chunk: Buffer) => { data += chunk.toString(); });
            req.on('end', () => resolve(data));
        });
    }

    const honoReq = new Request(url.toString(), {
        method: req.method || 'GET',
        headers: req.headers as HeadersInit,
        body: body || undefined,
    });

    const honoRes = await app.fetch(honoReq);

    res.writeHead(honoRes.status, Object.fromEntries(honoRes.headers.entries()));
    const resBody = await honoRes.text();
    res.end(resBody);
});

server.listen(port, () => {
    console.log(`[CIVICUM] Hono server running on http://localhost:${port}`);
});
