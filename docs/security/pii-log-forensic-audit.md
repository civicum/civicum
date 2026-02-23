# 🔎 AUDITORÍA FORENSE DE PII EN LOGS

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 65 — Defcon-5: Fuga de Logs (PII Leak)  
**Soluciona:** DC5-1, DC5-2  
**Complementa:** Zeta-2 PII Scrubbing (§11.3.3), `anti-panoptico-blindaje.md` V3

---

## 🎯 Problema

Revisar CADA línea de log buscando un RUT, teléfono o email olvidado.

---

## 🔴 HALLAZGO DC5-1: Sin Scanner Automático de PII en Logs

**Problema:** Zeta-2 define la función `scrubPII()` y existe middleware de ofuscación, pero no hay un scanner que VERIFIQUE que ningún PII se escapó. El scrubbing es preventivo; falta la auditoría.

**Solución: PII Scanner Forense**

```typescript
// piiScanner.ts — se ejecuta como cron diario a las 03:00 UTC
const PII_PATTERNS = [
  // RUT chileno: 12.345.678-9 o 12345678-9 o 123456789
  { name: 'RUT', regex: /\b\d{1,2}\.?\d{3}\.?\d{3}-?[\dkK]\b/g, severity: 'CRITICAL' },
  
  // Email
  { name: 'EMAIL', regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, severity: 'HIGH' },
  
  // Teléfono chileno: +56 9 1234 5678 o 912345678
  { name: 'PHONE', regex: /\b(\+?56\s?)?9\s?\d{4}\s?\d{4}\b/g, severity: 'HIGH' },
  
  // IP address (v4)
  { name: 'IP', regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, severity: 'MEDIUM' },
  
  // UUID (puede ser user_id)
  { name: 'UUID_AS_USER', regex: /user[_-]?id["':=\s]+[0-9a-f]{8}-[0-9a-f]{4}/gi, severity: 'HIGH' },
  
  // Bearer tokens
  { name: 'TOKEN', regex: /Bearer\s+[A-Za-z0-9._-]{20,}/gi, severity: 'CRITICAL' },
  
  // Tarjeta de crédito (16 dígitos)
  { name: 'CARD', regex: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, severity: 'CRITICAL' },
];

async function scanLogs(dayOffset: number = 0): Promise<PIIFinding[]> {
  const logs = await fetchLogs(dayOffset); // Cloudflare + Vercel + Neon
  const findings: PIIFinding[] = [];
  
  for (const logEntry of logs) {
    for (const pattern of PII_PATTERNS) {
      const matches = logEntry.message.match(pattern.regex);
      if (matches) {
        findings.push({
          pattern: pattern.name,
          severity: pattern.severity,
          logSource: logEntry.source,
          timestamp: logEntry.timestamp,
          linePreview: logEntry.message.substring(0, 100) + '...',
          matchCount: matches.length,
        });
      }
    }
  }
  
  return findings;
}
```

**Pipeline diario:**
```
03:00 UTC: PII Scanner ejecuta
  → Si 0 findings: ✅ Log "PII_SCAN_CLEAN"
  → Si findings CRITICAL: 🔴 Slack alert inmediato a Rol 26 + Rol 49
  → Si findings HIGH: 🟠 Email a Rol 26
  → Si findings MEDIUM: 🟡 Log para revisión semanal
  
03:05 UTC: Auto-remediation
  → Para cada CRITICAL finding: ejecutar scrubPII() retroactivo en esa entrada
  → Generar reporte diario
```

---

## 🟠 HALLAZGO DC5-2: Sin Inventario de Puntos de Emisión de Logs

**Problema:** No se sabe cuántos puntos del código emiten logs. Sin inventario, no se puede garantizar que TODOS pasan por `scrubPII()`.

**Solución: Inventario + Lint Rule**

### Inventario de emisores de log

| Capa | Emisor | Pasa por scrubPII? | Datos que loguea |
|------|--------|-------------------|-----------------|
| Frontend | `console.log` (dev only) | ❌ No llega a prod | Debug info |
| Frontend | Analytics (Plausible) | ✅ No PII by design | Page views, UTM |
| Edge Functions | `logger.info/warn/error` | ✅ Via middleware | Request metadata |
| Edge Functions | Error stack traces | ⚠️ Puede contener params | Error + stack |
| Neon | pg_stat_statements | ✅ No loguea valores | Query patterns |
| Neon | Slow query log | ⚠️ Puede contener WHERE values | Queries lentas |
| Cloudflare | Access logs | ✅ IP redactable via config | HTTP requests |
| Cloudflare Workers AI | Inference logs | ⚠️ Puede contener prompt con PII | IA requests |
| Scraper jobs | Job logs | ✅ Via middleware | Scrape results |

### Lint Rule: Prohibir log sin scrub

```typescript
// ESLint custom rule: no-raw-log
// Bloquea: console.log(), console.warn(), console.error() en producción
// Permite: logger.info(), logger.warn(), logger.error() (que pasan por middleware)

module.exports = {
  rules: {
    'no-raw-log': {
      create(context) {
        return {
          MemberExpression(node) {
            if (node.object.name === 'console' && 
                ['log', 'warn', 'error', 'info'].includes(node.property.name)) {
              context.report({ node, message: 'Use logger.* instead of console.* — PII scrubbing required' });
            }
          }
        };
      }
    }
  }
};
```

### Mitigaciones adicionales para ⚠️

| Emisor problemático | Mitigación |
|---------------------|-----------|
| Error stack traces | Middleware de error que redacta params antes de loguear |
| Neon slow query log | `log_min_duration_statement = 1000ms` + no loguear binds |
| Workers AI prompts | Scrub PII del prompt ANTES de enviar a Workers AI |

---

*Documento generado para Escuadrón 65 Defcon-5. Resolución DC5-1 + DC5-2.*
