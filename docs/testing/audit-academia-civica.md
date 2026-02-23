# 🎓 AUDITORÍA MÓDULO ACADEMIA CÍVICA

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación B2-1, B2-2

---

## 🎯 Objetivo

Auditoría específica del módulo educativo gamificado: 50 Rutas, 50 Duelos, 250+ Cápsulas, 12 Badges.

---

## ✅ Flujo Auditado

```
Descubrir → Consumir cápsula (15-30s) → Marcar completada → Quiz opcional → Badge → Siguiente
```

### Contenido Verificado

| Tipo | Cantidad MVP | Estado |
|------|-------------|--------|
| Rutas Ciudadanas | 50 (5 dominios × 10) | ✅ Diseñadas |
| Duelos de Poder | 50 episodios interactivos | ✅ Diseñados |
| Cápsulas | 250+ (100-250 palabras c/u) | ✅ Estructura |
| Quizzes | 100 (feedback inmediato) | ✅ Estructura |
| Badges | 12 MVP | ✅ Definidos |
| Certificados | Exportable PDF | ✅ Diseñado |

---

## 🔍 Hallazgos

### B2-1: Sin Validación de Actualización de Contenido [✅ RESUELTO]

**Problema:** Las cápsulas educativas se basan en leyes y datos que pueden cambiar (ej: reforma constitucional, nueva ley). No hay mecanismo para detectar contenido desactualizado.

**Solución:**

| Mecanismo | Implementación |
|-----------|---------------|
| Tag `last_verified_date` | Cada cápsula tiene fecha de última verificación |
| Alerta de frescura | Si `last_verified_date > 6 meses` → cola de revisión |
| Trigger de cambio BCN | Cron RSS de BCN (existente) → flag cápsulas afectadas |
| Quality Gate | Cápsula no publicable si fuente ha cambiado sin verificación |
| Owner | Rol 43 (Educación Cívica) + Rol 47 (Curador) |

### B2-2: Sin Métricas de Aprendizaje Efectivo [✅ RESUELTO]

**Problema:** Se miden completar cápsulas y badges, pero no si el usuario realmente aprendió.

**Solución: Dashboard de Aprendizaje**

| Métrica | Definición | Target |
|---------|-----------|--------|
| Quiz pass rate | % quiz aprobados (≥80%) | >70% |
| Conocimiento pre/post | Score comparado antes y después de ruta | Δ >30% |
| Retención D7 | % que vuelve a Academia en 7 días | >25% |
| Tiempo en cápsula | Promedio segundos por cápsula | 15-30s |
| Progresión | % rutas completadas al 100% | >10% |
| Certificados emitidos | Total exportados | Tracking |

---

*Documento generado para cerrar Observaciones B2-1 y B2-2*
