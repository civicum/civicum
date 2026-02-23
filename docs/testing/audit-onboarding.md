# 👋 AUDITORÍA DE ONBOARDING

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación C1-1, C1-2

---

## 🎯 Objetivo

Auditoría del flujo de bienvenida: 5 fases según UI/UX §10, F-29 motivación, F-30 Preview de Poder.

---

## ✅ Flujo de 5 Fases (UI/UX §10)

```
1. Bienvenida → 2. "¿Qué te trajo?" → 3. Preview de Poder → 4. Primera cápsula → 5. Primera victoria
```

### Verificación por Fase

| Fase | Check | Estado |
|------|-------|--------|
| 1. Bienvenida | Tono cálido, no épico, sin jerga | ✅ F-13 chilenización |
| 2. Intención | "¿Qué te trajo hoy?" → 3 rutas por intención | ✅ T-001/T-002 |
| 3. Preview | Ecosistema autoridades del usuario (F-30) | ✅ Diseñado |
| 4. Primera cápsula | 15-30s, valor inmediato | ✅ Estructura |
| 5. Primera victoria | Badge o logro verificable en <90s | ✅ F-29 micro-victorias |

---

## 🔍 Hallazgos

### C1-1: Sin Métricas de Éxito de Onboarding [✅ RESUELTO]

**Problema:** Se diseñó el flujo pero no se definieron métricas para saber si el onboarding "funciona".

**Solución:**

| Métrica | Definición | Target | Alerta |
|---------|-----------|--------|--------|
| Completion rate | % usuarios que completan 5 fases | >60% | <40% |
| Drop-off por fase | % abandono en cada fase | <15%/fase | >25% |
| Time to value | Segundos hasta primera victoria | <90s | >180s |
| Confusion detection | SUP-005: patrones de confusión | <5% | >10% |
| D7 retention post-onboarding | % que vuelve en 7 días | >30% | <15% |

### C1-2: Sin Test A/B para Flujo de Intención [✅ RESUELTO]

**Problema:** Se diseñaron 3 rutas por intención pero no hay framework para experimentar con variantes de onboarding.

**Solución:**

| Experimento | Variante A | Variante B | Métrica |
|------------|-----------|-----------|---------|
| Question first | "¿Qué te trajo hoy?" | Directo a Preview | Completion rate |
| Preview format | Cards estáticas | Mapa interactivo | Engagement |
| Primera victoria | Badge visual | Dato útil revelado | D7 retention |

**Framework ético de A/B:** Rol 76 (Growth) ejecuta, pero:
- Solo métricas de comprensión (no engagement adictivo)
- Transparencia: "Estamos probando mejoras" en Settings
- Sin dark patterns (Rho-1 verificado)

---

*Documento generado para cerrar Observaciones C1-1 y C1-2*
