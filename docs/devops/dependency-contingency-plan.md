# 🧟 PLAN DE CONTINGENCIA PARA DEPENDENCIAS ZOMBIS

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 59 — Lambda-Tres: Dependencias Zombis  
**Soluciona:** L3-1, L3-2  
**Complementa:** Supply Chain Security (D3, escuadrón 15)

---

## 🎯 Problema

¿Qué pasa si una librería externa deja de existir mañana? ¿O si un proveedor de servicios desaparece?

---

## 🔴 HALLAZGO L3-1: Sin Inventario de Dependencias Críticas con Plan B

**Problema:** D3 (Supply Chain Security) aborda verificación de integridad pero no un plan de contingencia si una dependencia desaparece o se vuelve maliciosa.

**Solución: Inventario de Dependencias Críticas**

### Dependencias de Software (npm)

| Dependencia | Función | Riesgo si desaparece | Plan B | Esfuerzo migración |
|------------|---------|---------------------|--------|-------------------|
| React 18 | UI Framework | 🔴 App no funciona | Preact (drop-in) | 4h |
| TanStack Query | Data fetching/cache | 🟠 Sin caché ni refetch | SWR o fetch manual | 16h |
| Zustand | State management | 🟡 Refactor a useContext | Jotai o Context API | 8h |
| Hono | Edge API framework | 🟠 APIs caen | Express/Fastify | 12h |
| Leaflet | Mapas | 🔴 Sin geolocalización visual | MapLibre GL JS (OSS fork) | 20h |
| Workbox | Service Worker/offline | 🔴 Sin offline | sw-precache o manual SW | 24h |
| WebLLM | IA local | 🟡 Sin IA local, caer a Civia cloud | Workers AI (Cloudflare) | 8h |
| shadcn/ui | Componentes UI | 🟢 Solo copy-paste, ya vendored | Radix primitives directo | 2h |
| Playwright | Testing E2E | 🟡 Sin E2E automatizado | Cypress | 8h |
| Vitest | Unit testing | 🟡 Sin unit tests | Jest | 4h |

### Dependencias de Servicios (SaaS)

| Servicio | Función | Riesgo | Plan B | Esfuerzo |
|----------|---------|--------|--------|----------|
| Neon.tech | PostgreSQL | 🔴 Sin DB | Supabase / Railway PostgreSQL | 4h config |
| Vercel | Hosting + Edge | 🔴 Sin hosting | Cloudflare Pages + Workers | 8h |
| Cloudflare | CDN + WAF + R2 | 🟠 Sin protección | Vercel Edge + AWS S3 | 12h |
| Twilio | SMS/Voice | 🟡 Sin SMS canal | Vonage / API SMS local Chile | 4h |
| GitHub | Repositorio + CI | 🟠 Sin CI/CD | GitLab self-hosted | 8h |

### Dependencias de Datos

| Fuente | Datos | Riesgo | Plan B | Cache local |
|--------|-------|--------|--------|-------------|
| BCN (Biblioteca del Congreso) | Leyes, legisladores | 🟠 Datos desactualizados | Scraping + caché 30d | Sí, 30d |
| SERVEL | Electoral | 🟡 Solo periódico | Caché electoral permanente | Sí, indefinido |
| DIPRES | Presupuestos | 🟡 Anual | Caché anual + aviso | Sí, 365d |
| ChileCompra | Licitaciones | 🟡 Diario | Caché 7d + aviso | Sí, 7d |

---

## 🟠 HALLAZGO L3-2: Sin Monitoreo de Salud de Dependencias

**Problema:** No hay sistema que alerte si una dependencia es abandonada, deprecada o comprometida.

**Solución: Pipeline de Monitoreo**

| Check | Herramienta | Frecuencia | Acción si falla |
|-------|------------|-----------|-----------------|
| Vulnerabilidades conocidas | `npm audit` + Dependabot | Cada PR | Bloquear merge si critical/high |
| Dependencia abandonada | `npx is-my-dep-deprecated` | Semanal (cron) | Alert Slack + evaluar Plan B |
| Licencia cambiada | `license-checker` | Cada release | Alert Legal (Rol 48) |
| Peso de bundle | `bundlesize` | Cada PR | Bloquear si >10% growth |
| Lockfile integrity | `npm ci --ignore-scripts` then hash | Cada merge a main | Bloquear si hash diferente |
| Servicio externo caído | Uptime checks (Cloudflare) | Cada 5min | Failover automático si >5min down |

**Lockfile policy:**
```
- NUNCA `npm install` en CI. SIEMPRE `npm ci`
- Lockfile committeado y revisado en PR
- Dependabot PRs: merge SOLO si tests pasan
- Auditoría manual trimestral de todas las dependencias con Plan B
```

---

*Documento generado para Escuadrón 59 Lambda-Tres. Resolución L3-1 + L3-2.*
