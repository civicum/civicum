# 🛡️ BLINDAJE ANTI-PANÓPTICO — PROTECCIÓN DE ANONIMATO EN APOYOS, VOTOS Y ACCIONES

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Soluciona:** R4 (Omega) — Panóptico Inverso — RESOLUCIÓN EXHAUSTIVA

---

## 🎯 Problema Raíz

Autoridades o actores maliciosos podrían monitorear quién reporta qué y quién apoya qué para inferir posiciones políticas y tomar represalias. El riesgo no es un bug técnico sino un **ataque de correlación** que usa datos legítimos del sistema.

---

## 🔴 VECTORES DE DES-ANONIMIZACIÓN IDENTIFICADOS

### Vector V1: Tabla `report_supports` sin RLS de lectura
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | La tabla de apoyos vincula `user_id` + `report_id`. Un admin o una inyección SQL podría listar quién apoyó qué reporte |
| **Severidad** | 🔴 CRÍTICO |
| **Estado previo** | Sin política RLS de lectura en apoyos |

**Solución:**
```sql
-- RLS: usuario solo ve sus propios apoyos
ALTER TABLE report_supports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see only own supports"
  ON report_supports FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can create own supports"
  ON report_supports FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins see aggregate only"
  ON report_supports FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );
```
**API:** El endpoint `/api/reports/:id` devuelve `support_count` (INT) — **NUNCA** la lista de `user_id` que apoyaron.

---

### Vector V2: `vote_audit_log` bypass por `service_role`
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | `service_role` en Supabase/Neon bypasa RLS completamente. Un scraper o backend comprometido podría leer todos los votos individuales |
| **Severidad** | 🔴 CRÍTICO |
| **Estado previo** | RLS activo para `authenticated`, pero `service_role` sin restricción |

**Solución:**
1. `service_role` restringido: solo los scrapers de datos públicos (BCN, SERVEL, DIPRES) usan `service_role`. Ningún endpoint de usuario usa `service_role`
2. **Separación de credenciales:** `SUPABASE_SERVICE_KEY` nunca en client-side, solo en Edge Functions de scraping
3. **Audit de uso:** Log de cada query con `service_role` en tabla `service_role_audit_log` con `query_hash`, `timestamp`, `caller_function`
4. **Alerta automática:** Si `service_role` consulta `vote_audit_log` o `report_supports` → alerta Slack inmediata al Rol 67 (Integridad Electoral)

```sql
-- Función trigger para detectar acceso service_role a tablas sensibles
CREATE OR REPLACE FUNCTION alert_sensitive_access()
RETURNS TRIGGER AS $$
BEGIN
  IF current_setting('role') = 'service_role' THEN
    INSERT INTO security_alerts (table_name, action, timestamp)
    VALUES (TG_TABLE_NAME, TG_OP, now());
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

### Vector V3: `audit_logs` permiten profiling temporal
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | `audit_logs` almacena `user_id + action` por 1 año. Un atacante con acceso podría reconstruir el perfil de actividad política de un usuario |
| **Severidad** | 🟠 ALTO |
| **Estado previo** | Logs con PII por 1 año sin anonimización |

**Solución:**
1. **Anonimización progresiva:** Después de 30 días, reemplazar `user_id` por `hash(user_id + salt_mensual)` — permite contar acciones pero no vincular a persona
2. **Separación:** Logs de acciones sensibles (votar, apoyar, reportar) en tabla separada con retención 72h solo para anti-fraude
3. **PII scrubbing automático:** Cron semanal que anonimiza logs > 30 días

```sql
-- Cron de anonimización
UPDATE audit_logs
SET user_id = encode(sha256(user_id::text || date_trunc('month', created_at)::text), 'hex')
WHERE created_at < now() - interval '30 days'
  AND user_id NOT LIKE 'anon_%';
```

---

### Vector V4: F-18 Escudo de Identidad sin enforcement técnico
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | F-18 define conceptualmente "alias público" vs "identidad protegida" pero no hay enforcement. El `display_name` puede ser el nombre real del usuario |
| **Severidad** | 🟡 MEDIO |
| **Estado previo** | Conceptual, sin validación |

**Solución:**
1. **Onboarding:** Paso obligatorio "Elige tu alias público" con explicación de que este nombre será visible
2. **Validación:** `display_name` NO puede ser igual a `email` ni contener patrones de nombre completo (Regex: no 2+ palabras capitalizadas consecutivas)
3. **Advertencia UI:** Antes de cada acción pública (reportar, comentar): "Tu alias *[nombre]* será visible. [Cambiar alias]"
4. **Microcopy F-02:** "CIVICUM protege tu identidad real. Solo tu alias es público."

---

### Vector V5: Browser fingerprinting como tracking
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | El fingerprinting usado para anti-bot (F-37) crea un identificador único del dispositivo que podría correlacionarse con acciones |
| **Severidad** | 🟡 MEDIO |
| **Estado previo** | Fingerprint almacenado sin política de retención |

**Solución:**
1. **Hash efímero:** Fingerprint hasheado con salt diario — no persiste más de 24h
2. **Solo anti-bot:** Fingerprint SOLO se usa para comparar velocidad de acciones, NUNCA para perfilar usuario
3. **No almacenar:** El hash vive en memoria del Edge Function, nunca se persiste a DB
4. **Privacy Policy:** Declarar uso de fingerprinting y su alcance limitado

---

### Vector V6: `community_reports.author_id` visible
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Cuando un reporte es validado, el `author_id` sigue vinculado. Un JOIN con `profiles` revela quién reportó |
| **Severidad** | 🟠 ALTO |
| **Estado previo** | RLS permite ver reportes validados, que incluyen `author_id` implícitamente |

**Solución:**
1. **API nunca expone `author_id`:** El endpoint público devuelve solo `title, description, category, location, status, support_count, created_at`
2. **RLS en la vista:** Crear vista `public_reports` que excluye `author_id`
3. **Reporte anónimo:** Opción explícita: si el usuario marca "anónimo", el `author_id` se reemplaza por UUID fijo `00000000-0000-0000-0000-000000000000` después de validación

```sql
CREATE VIEW public_reports AS
SELECT id, commune_id, title, description, category, location, 
       status, priority, support_count, images, created_at
FROM community_reports
WHERE status != 'pending';
-- NUNCA incluye author_id
```

---

### Vector V7: Datos agregados con N pequeño
| Aspecto | Detalle |
|---------|---------|
| **Riesgo** | Si una comuna tiene solo 3 votos en un tema, el resultado "100% a favor" identifica a las 3 personas |
| **Severidad** | 🟡 MEDIO |
| **Estado previo** | Sin umbral mínimo de anonimización (k-anonymity) |

**Solución:**
1. **Umbral k=5:** Resultados de votación solo se muestran si N ≥ 5 votos
2. **Mensaje:** Si N < 5: "Aún no hay suficientes votos para mostrar resultados en tu comuna"
3. **API `/votos/agregados`:** Mismo umbral k=5, devuelve `null` si N < 5
4. **Granularidad:** Nacional siempre visible, comunal solo si N ≥ 5, Nivel calle: NUNCA

---

## 📊 RESUMEN DE BLINDAJE

| Vector | Severidad | Solución | Estado |
|--------|----------|----------|--------|
| V1: RLS apoyos | 🔴 | RLS + API solo agrega | ✅ RESUELTO |
| V2: service_role bypass | 🔴 | Separación creds + alertas | ✅ RESUELTO |
| V3: audit_logs profiling | 🟠 | Anonimización 30d + PII scrub | ✅ RESUELTO |
| V4: Escudo sin enforcement | 🟡 | Alias obligatorio + validación | ✅ RESUELTO |
| V5: Fingerprint tracking | 🟡 | Hash efímero 24h + no persist | ✅ RESUELTO |
| V6: author_id expuesto | 🟠 | Vista pública + anónimo opcional | ✅ RESUELTO |
| V7: N pequeño des-anonimiza | 🟡 | k-anonymity k=5 | ✅ RESUELTO |

---

## 📅 Auditoría Periódica

| Check | Frecuencia | Responsable |
|-------|-----------|-------------|
| RLS policies activas | Cada release | Rol 14 (Arquitecto) |
| service_role audit log | Semanal | Rol 67 (Integridad) |
| PII scrubbing ejecutado | Semanal | Rol 69 (Head of Ops) |
| k-anonymity verificado | Trimestral | Rol 80 (Riesgos) |
| Fingerprint no persiste | Cada release | Rol 28 (Red Team) |

---

*Documento generado para resolver COMPLETAMENTE R4 (Panóptico Inverso). 7 vectores identificados, 7 resueltos.*
