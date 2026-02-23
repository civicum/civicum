# 🗳️ ESPECIFICACIÓN DE INTEGRIDAD DE VOTACIÓN

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Mu-1, Mu-2

---

## 🎯 Objetivo

Consolidar todas las protecciones anti-manipulación del sistema de votación simbólica en un documento único auditable, y definir el esquema de audit trail para votos.

---

## 🔒 Principio Fundamental: 1 Persona = 1 Voto (F-10)

```sql
-- Constraint en base de datos (ya implementado §2.2.8)
CONSTRAINT unique_vote_per_topic UNIQUE(user_id, topic_id)
-- 1 persona = 1 voto por tema, enforced a nivel DB
```

---

## 🛡️ Protecciones Anti-Manipulación (Consolidación)

### Capa 1: Verificación de Identidad

| Protección | Implementación | Referencia |
|-----------|---------------|------------|
| Email verificado | `email_verified = true` requerido para votar | Auth flow |
| RUT hasheado | Verificación unicidad sin almacenar en claro | §2.4.2 |
| Rate limiting | Max 50 acciones/hora por usuario | Capacidades §2.10 |

### Capa 2: Anti-Bot

| Protección | Implementación | Referencia |
|-----------|---------------|------------|
| Velocidad sospechosa | >50 supports en 1h → flagForReview() | Capacidades §2.10 |
| Cuenta verificada | Solo usuarios con email_verified pueden votar | Auth |
| Apoyo único | checkExistingSupport() previene duplicados | Capacidades §2.10 |
| Credential stuffing | SEC-012 detecta patrones | Plan Implementación |

### Capa 3: Anti-Élite (F-10)

| Protección | Implementación | Referencia |
|-----------|---------------|------------|
| Karma con topes | Reputación Cívica limitada, no afecta peso de voto | F-10, Decisiones |
| Badges no ponderan | Insignias ≠ más poder de voto (G-27.1) | Protección Originalidad |
| Sin privilegios | Karma alto no da ventajas en votación | F-10, MVP Spec |

### Capa 4: Retractación (F-54)

| Protección | Implementación | Referencia |
|-----------|---------------|------------|
| Ventana 2h | `VOTE_RETRACTION_WINDOW_HOURS: 2` | F-54, Decisiones |
| Máximo 1 cambio | Voto final reemplaza original, sin historial visible | F-54 |
| Disclaimer obligatorio | "Este voto es simbólico y no tiene efecto legal" | F-02 |

### Capa 5: Escalamiento de Reportes

| Nivel | Umbral | Protección |
|-------|--------|-----------|
| Local | 1-9 apoyos | Visible solo en comuna |
| Comunitario | 10+ | Visible en comuna |
| Impacto | 50+ | Visible regionalmente |
| Interés Público | 200+ | Nacional + notificación Contraloría |

---

## 📊 Audit Trail de Votos (Saneamiento Mu-2)

### Schema: `vote_audit_log`

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | PK |
| vote_id | UUID | FK a citizen_votes.id |
| user_id_hash | TEXT | Hash del user_id (no almacenar en claro en audit) |
| action | TEXT | 'cast', 'retract', 'recast' |
| topic_id | UUID | FK al tema votado |
| vote_value | TEXT | Valor del voto |
| ip_hash | TEXT | Hash de IP (anti-bot, no tracking) |
| user_agent_hash | TEXT | Hash de UA (anti-bot) |
| timestamp | TIMESTAMPTZ | Momento exacto |
| previous_vote_value | TEXT | NULL si 'cast', valor anterior si 'retract'/'recast' |

```sql
-- RLS: solo el propio usuario puede ver su audit trail
CREATE POLICY vote_audit_own ON vote_audit_log
  FOR SELECT USING (user_id_hash = hash(auth.uid()));

-- Admin puede ver agregados anonimizados, nunca individuales
CREATE POLICY vote_audit_admin ON vote_audit_log
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'admin' 
    AND current_setting('app.audit_mode') = 'aggregate'
  );
```

### Métricas de Integridad (Dashboard)

| Métrica | Alerta Si |
|---------|-----------|
| Votos/hora por IP | >20 → flag |
| Retractaciones/total | >15% → investigar |
| Votos desde IP único concentrado | >50 votos/día → bloquear IP |
| Usuarios nuevos votando masivamente | Cuenta <24h con >10 votos → flag |

---

## 📅 Auditoría Periódica

| Check | Frecuencia | Responsable |
|-------|-----------|-------------|
| Constraint UNIQUE verificado | Tras cada deploy | CI/CD |
| Rate limiting funcional | Semanal | QA |
| Métricas de integridad | Diario (automático) | Dashboard |
| Revisión de flags | Semanal | Rol 67 (Integridad Electoral) |

---

*Documento generado para cerrar Observaciones Mu-1 y Mu-2*
