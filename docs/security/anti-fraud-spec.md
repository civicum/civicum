# 🛡️ ESPECIFICACIÓN ANTI-FRAUDE ELECTORAL

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación D4-1

---

## 🎯 Objetivo

Consolidar todas las protecciones anti-fraude (bots, granjas, sybil attacks) en especificación auditable, complementando `voting-integrity-spec.md`.

---

## 🔍 Vectores de Ataque y Mitigaciones

### Vector 1: Granjas de Bots

| Señal | Detección | Acción |
|-------|-----------|--------|
| >50 supports/hora/usuario | `validateSupport()` rate check | Flag + bloqueo temporal |
| Cuentas creadas en ráfaga | Clustering por IP + timestamp | Revisión manual |
| Patrones idénticos de voto | Análisis de similaridad | Flag + investigación |
| IP concentrado | >50 votos/día/IP | Bloqueo IP temp |
| User-Agent idéntico masivo | Clustering por UA | Flag |

### Vector 2: Sybil Attack (Múltiples Cuentas)

| Protección | Implementación | Estado |
|-----------|---------------|--------|
| Email verificado | Obligatorio para votar/apoyar | ✅ |
| RUT hash único | UNIQUE constraint en profiles | ✅ |
| 1 persona = 1 voto | UNIQUE(user_id, topic_id) en DB | ✅ |
| Detección duplicados | Hash comparison | ✅ |
| Biometría (futuro) | Rol 24 roadmap | ⏳ Roadmap |

### Vector 3: Manipulación de Escalamiento de Reportes

| Señal | Detección | Acción |
|-------|-----------|--------|
| Apoyos coordinados geográficamente | Geolocalización clustering | Flag |
| Apoyos desde cuentas nuevas (<24h) | Age check en validateSupport() | Flag |
| Velocidad anómala de escalamiento | Análisis temporal | Congelamiento temporal |

### Vector 4: Credential Stuffing

| Protección | Implementación | Ref |
|-----------|---------------|-----|
| SEC-012 | Detector de patrones | Plan Implementación |
| SEC-013 | Bloqueo temporal IPs | Plan Implementación |
| Rate limiting reforzado | 60/min en producción | staging.md |

---

## 📊 Dashboard Anti-Fraude

| Métrica | Umbral Alerta | Frecuencia Check |
|---------|--------------|-------------------|
| Cuentas nuevas/hora | >100 → investigar | Continuo |
| Votos/hora pico | >10x promedio → flag | Continuo |
| Ratio IP/usuarios | <2 usuarios/IP → normal; >10 → flag | Diario |
| Cuentas flaggeadas | >0 → cola de revisión | Continuo |
| Retractaciones anómalas | >15% total → investigar | Diario |

---

## 📅 Auditoría

| Check | Frecuencia | Responsable |
|-------|-----------|-------------|
| Review flags pendientes | Semanal | Rol 67 (Integridad Electoral) |
| Análisis de patrones | Mensual | Rol 29 (Trust & Safety Técnico) |
| Simulacro attack | Trimestral | Rol 60 (Auditor Voto) |

---

*Documento generado para cerrar Observación D4-1*
