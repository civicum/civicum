# 🔍 REQUEST TRACING (X-Request-ID)

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación D1-1

---

## 🎯 Implementación

### Middleware (Next.js)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: Request) {
  const requestId = request.headers.get('x-request-id') || uuidv4();
  
  const response = NextResponse.next();
  response.headers.set('x-request-id', requestId);
  
  return response;
}
```

### Logger Actualizado

```typescript
// lib/logger.ts
import { getRequestId } from './request-context';

export function log(level: string, message: string, meta?: object) {
  const requestId = getRequestId();
  
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level,
    requestId,
    message,
    ...meta
  }));
}
```

---

## 📋 Formato de Log

```json
{
  "timestamp": "2026-02-06T14:30:00.000Z",
  "level": "info",
  "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "message": "API request completed",
  "path": "/api/promesas",
  "method": "GET",
  "duration": 145
}
```

---

*Documento generado para cerrar Observación D1-1*
