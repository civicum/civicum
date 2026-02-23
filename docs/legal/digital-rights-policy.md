# 🔐 POLÍTICA DE DERECHOS DIGITALES Y PRIVACIDAD

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación E2-1, E2-2, E2-3

---

## 🎯 Objetivo

Formalizar la gestión de derechos de datos de usuarios (DSAR), el inventario PII, y la evaluación de impacto en privacidad (DPIA) para CIVICUM.

---

## 📋 E2-1: Protocolo DSAR (Data Subject Access Request)

### Canales de Solicitud

| Canal | SLA Respuesta | Implementación |
|-------|--------------|----------------|
| Email (privacidad@civicum.cl) | 10 días hábiles | Manual → ticket |
| In-app (/perfil/mis-datos) | Automático (self-service) | API /api/me/data |
| Formulario web | 10 días hábiles | Redirige a email |

### Tipos de Solicitud

| Tipo | Endpoint Self-Service | SLA Manual |
|------|----------------------|------------|
| **Acceso** (ver mis datos) | `GET /api/me/data` → JSON/CSV | 5 días |
| **Rectificación** (corregir datos) | Editar perfil (in-app) | 5 días |
| **Cancelación** (eliminar cuenta) | `DELETE /api/me/delete` | 10 días |
| **Portabilidad** (exportar datos) | `GET /api/me/export?format=json` | 5 días |
| **Oposición** (opt-out) | Settings → Notificaciones OFF | Inmediato |

### Flujo de Procesamiento DSAR

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Recepción   │────▶│  Verificar   │────▶│  Ejecutar    │────▶│  Confirmar   │
│  solicitud   │     │  identidad   │     │  acción      │     │  al usuario  │
│  (email/app) │     │  (email+RUT) │     │  (API/manual)│     │  + log audit │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
     Día 0               Día 1              Día 2-8              Día 9-10
```

### Registro de DSARs

| Campo | Tipo | Descripción |
|-------|------|-------------|
| dsar_id | UUID | Identificador único |
| type | ENUM | access, rectification, erasure, portability, objection |
| user_email | TEXT | Email del solicitante |
| received_at | TIMESTAMPTZ | Fecha recepción |
| verified_at | TIMESTAMPTZ | Fecha verificación identidad |
| completed_at | TIMESTAMPTZ | Fecha completado |
| sla_days | INT | Días transcurridos |
| status | ENUM | received, verifying, in_progress, completed, rejected |

---

## 📊 E2-2: Inventario PII (Data Map)

### Datos Personales por Tabla

| Tabla | Dato PII | Clasificación | Retención | Base Legal |
|-------|----------|--------------|-----------|------------|
| `profiles` | email | Personal | Hasta cancelación | Consentimiento |
| `profiles` | display_name | Personal | Hasta cancelación | Consentimiento |
| `profiles` | rut_hash | Sensible | Hasta cancelación | Interés legítimo |
| `profiles` | comuna_id | Personal | Hasta cancelación | Consentimiento |
| `profiles` | avatar_url | Personal | Hasta cancelación | Consentimiento |
| `reports` | location (lat/lng) | Sensible | Permanente (anonimizable) | Interés público |
| `reports` | description | UGC | 30d post-delete | Consentimiento |
| `citizen_votes` | user_id + topic_id | Personal | Permanente | Consentimiento |
| `mesa_members` | user_id + mesa_id | Personal | Mientras activo | Consentimiento |
| `audit_logs` | user_id + action | Personal | 1 año | Obligación legal |
| `scraper_logs` | — | No PII | 1 año | N/A |

### Flujo de Datos PII

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│  USUARIO   │────▶│  VERCEL    │────▶│  NEON.TECH │
│  (browser) │     │  (edge fn) │     │ (PostgreSQL│
│            │     │  + RLS     │     │  + RLS)    │
└────────────┘     └────────────┘     └────────────┘
     │                                      │
     ▼                                      ▼
┌────────────┐                       ┌────────────┐
│ IndexedDB  │                       │ Backups    │
│ (offline   │                       │ (Neon auto │
│  cache)    │                       │  encript.) │
└────────────┘                       └────────────┘

PII NUNCA sale a:
❌ Logs de servidor (PII scrubbing - Zeta-2)
❌ Analytics de terceros
❌ CDN/cache público
```

---

## 🔍 E2-3: DPIA Liviana (Data Protection Impact Assessment)

### Riesgos Evaluados

| Riesgo | Probabilidad | Impacto | Mitigación | Estado |
|--------|-------------|---------|-----------|--------|
| Filtración de RUT | Baja | Alto | Hash SHA-256 + RLS + PII scrubbing logs | ✅ Mitigado |
| Profiling político | Media | Alto | No se cruzan votos con perfil público | ✅ Mitigado |
| Geolocalización identifica persona | Media | Medio | Precisión reducida a nivel comuna | ✅ Mitigado |
| Breach de base de datos | Baja | Crítico | Encriptación at-rest + protocolo 72h | ✅ Mitigado |
| Reutilización de datos por terceros | Baja | Alto | No hay API pública de datos personales | ✅ Mitigado |
| Suplantación de identidad | Baja | Alto | Email verificado + RUT hash | ✅ Mitigado |
| Correlación votos-identidad | Media | Crítico | Votos consultables solo por owner (RLS) | ✅ Mitigado |
| Datos de menores | Baja | Crítico | Registro requiere declarar >18 años | ⚠️ Parcial |

### Riesgo Residual: Menores de Edad

> **GAP:** No hay verificación activa de edad más allá de autodeclaración. La Ley 19.628 art. 3° exige consentimiento de representante legal para menores de 14. Si bien CIVICUM no procesa datos especialmente sensibles de menores, debería documentar una política más robusta.

**Acción:** Incluir warning en ToS (Lambda-2) y considerar verificación de edad en registro.

---

## 🛡️ Privacy by Design Checklist

| Principio | Implementación CIVICUM | Check |
|-----------|----------------------|-------|
| Minimización de datos | Solo datos estrictamente necesarios (F-03) | ✅ |
| Privacidad por defecto | Perfil privado por defecto, opt-in para público | ✅ |
| Consentimiento granular | Checkboxes separados por tipo de dato | ✅ |
| Encriptación en tránsito | HTTPS obligatorio (Cloudflare) | ✅ |
| Encriptación en reposo | Neon.tech encrypted at-rest | ✅ |
| Aislamiento por usuario | RLS en todas las tablas con datos personales | ✅ |
| PII scrubbing en logs | Implementado (Zeta-2) | ✅ |
| Derecho al olvido | Soft-delete 30d → hard delete | ✅ |
| Breach notification | Procedimiento 72h documentado | ✅ |
| DPO designado | Rol 26 (Privacy Engineer) + Rol 49 (Abogado Privacidad) | ✅ |

---

## 📅 Schedule

| Acción | Frecuencia | Responsable |
|--------|-----------|-------------|
| Revisión DPIA | Anual | Rol 49 (Abogado Privacidad) |
| Auditoría PII map | Semestral | Rol 26 (Privacy Engineer) |
| Review DSARs pendientes | Semanal | Compliance |
| Update por cambio legislativo | Según webhook BCN | Legal |

---

*Documento generado para cerrar Observaciones E2-1, E2-2 y E2-3*
