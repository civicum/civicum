# 🔁 AUDITORÍA DEL LOOP DE RETENCIÓN Y HÁBITO

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación C2-1, C2-2

---

## 🎯 Objetivo

Auditoría del ciclo de retorno del usuario. ¿Por qué vuelve? ¿Es por valor real o por manipulación psicológica? Verificar que cumpla F-08 (Anti-adicción).

---

## ✅ Loop de Retención Diseñado

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌─────────┐   ┌──────────┐   ┌──────────────┐      │
│  │ Trigger │──▶│  Acción  │──▶│   Reward     │──┐   │
│  │ externo │   │  útil    │   │   de valor   │  │   │
│  └─────────┘   └──────────┘   └──────────────┘  │   │
│       ▲                                          │   │
│       └──────────────────────────────────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Mecanismos de Retorno

| Trigger | Tipo | Anti-adicción | Estado |
|---------|------|--------------|--------|
| Plazo legal vence | 🟢 Real | ✅ Basado en hecho real | OK |
| Nuevo dato disponible | 🟢 Real | ✅ Valor informativo | OK |
| Reporte fue respondido | 🟢 Real | ✅ Motivación legítima | OK |
| Badge desbloqueado | 🟡 Gamificación | ✅ F-08: solo logros reales | OK |
| Notificación push | 🟡 Nudge | ⚠️ Debe ser opt-in y relevante | Verificar |
| Streak/racha | 🔴 Adictivo | ✅ PROHIBIDO (Rho-1) | OK |
| FOMO "últimas horas" | 🔴 Adictivo | ✅ PROHIBIDO (Rho-1) | OK |
| Guilt trip | 🔴 Adictivo | ✅ PROHIBIDO (Rho-1) | OK |

---

## 🔍 Hallazgos

### C2-1: Sin Política de Notificaciones Push [✅ RESUELTO]

**Problema:** Notificaciones push diseñadas pero sin política clara de frecuencia, opt-out, y relevancia.

**Solución:**

| Regla | Límite |
|-------|--------|
| Máximo notificaciones/día | 2 |
| Máximo notificaciones/semana | 5 |
| Opt-in granular | Por tipo (legal, reportes, educación) |
| 1-tap unsubscribe | Cada notificación tiene "No recibir más de este tipo" |
| Horario silencioso | 22:00-08:00 (configurable) |
| Re-engagement | Máximo 1 email/mes si inactivo >30 días |
| Contenido | Solo datos nuevos o plazos reales, NUNCA fabricados |

### C2-2: Sin KPI de Retención Sostenible [✅ RESUELTO]

**Problema:** Se miden D7/D30 retention pero no se distingue si la retención es por valor o por manipulación.

**Solución: Framework de Retención Ética**

| Métrica | Definición | Target | "Saludable si..." |
|---------|-----------|--------|-------------------|
| D7 retention | % que vuelve en 7 días | >25% | Sin push de tipo 🔴 |
| D30 retention | % que vuelve en 30 días | >15% | Sesiones cortas (<5min) |
| Session quality | Acciones útiles / sesión | >1 | Reportes, aprendizaje, consulta |
| Churn por frustración | % que sale tras intento fallido | <10% | Error messages claros |
| Satisfacción post-sesión | NPS in-app (trimestral) | >30 | Sin survey fatigue |
| Dopamina check | % acciones vacías (like sin leer) | <10% | Engagement es participación real |

---

*Documento generado para cerrar Observaciones C2-1 y C2-2*
