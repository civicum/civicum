# 📊 RÚBRICA DE MADUREZ OPERATIVA

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación OC-5 (Auditoría OpenClaw)

---

## 🎯 Objetivo

Evaluar madurez operativa de OpenClaw trimestralmente (EVAL-010).

---

## 📈 Niveles de Madurez

| Nivel | Nombre | Descripción |
|-------|--------|-------------|
| 1 | Inicial | Procesos ad-hoc, reactivo |
| 2 | Definido | Procesos documentados |
| 3 | Gestionado | Métricas y seguimiento |
| 4 | Optimizado | Mejora continua activa |
| 5 | Excelencia | Automatización completa |

---

## 📋 Dimensiones Evaluadas

### 1. Operaciones (OPS-*)
| Criterio | Nivel 1 | Nivel 3 | Nivel 5 |
|----------|---------|---------|---------|
| Runbooks | No existen | Documentados | Auto-ejecutados |
| Incidentes | Reactivo | Postmortem | Predictivo |
| Alertas | Ruido alto | Priorizadas | Auto-triaged |

### 2. Seguridad (SEC-*)
| Criterio | Nivel 1 | Nivel 3 | Nivel 5 |
|----------|---------|---------|---------|
| Vulnerabilidades | Sin escaneo | CVE mensual | CVE diario |
| Secretos | Hardcodeados | Vault manual | Rotación auto |
| HITL | Inconsistente | 100% enforced | Auditado |

### 3. Knowledge Pack (KP-*)
| Criterio | Nivel 1 | Nivel 3 | Nivel 5 |
|----------|---------|---------|---------|
| Publicación | Manual | HITL + tests | Canary auto |
| Rollback | No existe | Manual | <5min auto |
| Neutralidad | Sin auditar | Muestreo | 100% validado |

### 4. Datos (DATA-*)
| Criterio | Nivel 1 | Nivel 3 | Nivel 5 |
|----------|---------|---------|---------|
| Frescura | Sin monitoreo | Alertas | Auto-refresh |
| PII | Sin ofuscación | Middleware | Validación E2E |
| Consistencia | Sin validar | Checks manuales | Auto-detect |

---

## 📅 Roadmap de Maduración

| Fase | Target | Dimensiones |
|------|--------|-------------|
| Mes 0-3 | Nivel 2 | Todas |
| Mes 3-6 | Nivel 3 | OPS, SEC |
| Mes 6-9 | Nivel 3 | KP, DATA |
| Mes 9-12 | Nivel 4 | OPS, SEC |

---

## 📊 Scorecard Trimestral

```
| Dimensión | Q1 | Q2 | Q3 | Q4 |
|-----------|----|----|----|----|
| OPS       | _  | _  | _  | _  |
| SEC       | _  | _  | _  | _  |
| KP        | _  | _  | _  | _  |
| DATA      | _  | _  | _  | _  |
| PROMEDIO  | _  | _  | _  | _  |
```

---

*Documento generado para cerrar Observación OC-5*
