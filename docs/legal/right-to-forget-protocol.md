# 🗑️ PROTOCOLO DE DERECHO AL OLVIDO — BORRADO TOTAL

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 69 — Kafka-Delta: Derecho al Olvido  
**Soluciona:** KD-1, KD-2  
**Complementa:** `docs/legal/digital-rights-policy.md` (derechos ARCO), `docs/legal/terms-of-service-template.md` (ToS §4)

---

## 🎯 Problema

Un usuario pide borrar todo su historial. ¿Se borra DE VERDAD? ¿Incluyendo backups, logs, analytics, caché CDN?

---

## 🔴 HALLAZGO KD-1: Sin Mapeo Exhaustivo de Persistencia de Datos del Usuario

**Problema:** `/api/me/delete` existe y `digital-rights-policy.md` define soft-delete 30d → hard-delete, pero no hay inventario de TODOS los lugares donde persisten datos del usuario.

**Solución: Mapa de Persistencia del Usuario**

| Almacén | Datos del usuario | Borrado automático | Tiempo hasta borrado total |
|---------|-------------------|-------------------|--------------------------|
| **Neon PostgreSQL** | | | |
| `profiles` | email, alias, RUT hash, comuna | soft-delete 30d → hard-delete | 30 días |
| `reports` (autor) | author_id, contenido, fotos | Anonimizar: author_id → NULL | 30 días |
| `report_supports` | user_id + report_id | DELETE rows | 30 días |
| `votes` | user_id + vote_data | DELETE rows | 30 días |
| `community_circles` | member_id | REMOVE membership | 30 días |
| `audit_logs` | user_id + actions | Anonimizar: user_id → `[DELETED]` | 30 días |
| `vote_audit_log` | voter_id_hash | Ya es hash, pero DELETE anyway | 30 días |
| `notification_events` | user_id | DELETE rows | 30 días |
| `notification_preferences` | user_id | DELETE row | 30 días |
| **Cloudflare R2** | | | |
| Fotos de reportes | Se vinculan a report_id | DELETE objetos vía API | 30 días |
| **Cloudflare CDN** | | | |
| Cache de páginas con UGC | Contenido con alias visible | Purge cache keys | Inmediato |
| **Neon Backups** | | | |
| Backups automáticos (PITR) | Snapshot de toda la DB | ⚠️ Retención de backup (ver KD-2) | Variable |
| **IndexedDB (dispositivo)** | | | |
| Datos offline locales | Reportes, votos, perfil local | clear() vía Service Worker | Próximo sync |
| **Plausible Analytics** | | | |
| Page views | Sin PII by design | N/A — no hay PII | No necesario |
| **Vercel Logs** | | | |
| Request logs | IP + user agent | Auto-purge 30d por Vercel | 30 días |
| **Cloudflare Logs** | | | |
| WAF/access logs | IP | Auto-purge por config | Config-dependent |

### Flujo de borrado completo

```
PASO 1 (D+0): Usuario solicita borrado
  → Marcar profile.status = 'pending_deletion'
  → Email de confirmación: "Tienes 7 días para cancelar"
  → Desloguear de todos los dispositivos

PASO 2 (D+7): Periodo de gracia vence
  → Si no canceló: iniciar soft-delete
  → profile.status = 'soft_deleted'
  → Contenido oculto públicamente

PASO 3 (D+37): Hard delete (30 días post soft-delete)
  → DELETE FROM profiles WHERE id = $1
  → DELETE FROM report_supports WHERE user_id = $1
  → DELETE FROM votes WHERE user_id = $1
  → DELETE FROM notification_events WHERE user_id = $1
  → DELETE FROM notification_preferences WHERE user_id = $1
  → UPDATE reports SET author_id = NULL WHERE author_id = $1
  → UPDATE audit_logs SET user_id = '[DELETED]' WHERE user_id = $1
  → DELETE objetos R2 vía S3 API
  → Purgar CDN cache
  → Log: 'USER_DELETED' (sin PII, solo timestamp + conteo de items borrados)

PASO 4 (D+37): Verificación
  → Query: SELECT count(*) FROM [todas las tablas] WHERE user_id = $1
  → Si count > 0 → ALERTA A Rol 26 (Privacy Engineer)
  → Enviar confirmación a email (último uso): "Tus datos fueron eliminados"
```

---

## 🟠 HALLAZGO KD-2: Sin Protocolo de Purga en Backups

**Problema:** Neon.tech hace backups PITR (Point In Time Recovery). Si se borra un usuario de la DB, sus datos persisten en los backups. Esto es un riesgo legal bajo Ley 19.628.

**Solución: Política de Backups vs. Derecho al Olvido**

### Análisis legal
| Factor | Situación | Riesgo |
|--------|----------|--------|
| Ley 19.628 | Exige supresión pero no especifica backups | Bajo — ley es antigua |
| GDPR (referencia) | Acepta que backups retengan temporalmente | Bajo |
| Práctica estándar | Backups se sobrescriben por rotación natural | Aceptable |
| Neon PITR | Retención configurable (7-30 días) | Configurable |

### Política adoptada
```
1. PITR window de Neon: 7 DÍAS (mínimo posible)
   → Datos eliminados desaparecen de backups en 7 días máximo
   
2. Si se necesita restore desde backup:
   → ANTES de poner en producción: ejecutar script de borrado
      para usuarios marcados como deleted
   → Script: SELECT id FROM deletion_log WHERE deleted_at < backup_date
              → Re-ejecutar borrado para cada usuario
   
3. Tabla de control:
   CREATE TABLE deletion_log (
     user_id UUID PRIMARY KEY,
     requested_at TIMESTAMPTZ NOT NULL,
     confirmed_at TIMESTAMPTZ,
     hard_deleted_at TIMESTAMPTZ,
     items_deleted JSONB  -- {reports: 3, votes: 12, supports: 45}
   );
   → Retención del log: 1 año (sin PII, solo UUID + timestamps)
   → Propósito: si restore de backup, saber qué re-borrar
```

---

*Documento generado para Escuadrón 69 Kafka-Delta. Resolución KD-1 + KD-2.*
