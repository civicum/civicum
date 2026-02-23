# 🗳️ AUDITORÍA MÓDULO VOTO CIUDADANO

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación B5-1, B5-2

---

## 🎯 Objetivo

Auditoría específica del módulo de votación simbólica: flujo de voto, retractación, contexto educativo, y UI de resultados.

---

## ✅ Flujo Auditado

```
Descubrir tema → Contexto educativo (cápsula pre-voto) → Resumen pre-voto → Emitir voto
→ Confirmación + retractación (2h) → Resultados → Explorar más
```

### Protecciones Verificadas (Referencia: `voting-integrity-spec.md` + `anti-fraud-spec.md`)

| Protección | Estado |
|-----------|--------|
| 1 persona = 1 voto (UNIQUE constraint) | ✅ |
| Retractación 2h (F-54) | ✅ |
| validateSupport() anti-bot | ✅ |
| F-02 "voto simbólico" disclaimer | ✅ |
| Anti-élite karma cap (F-10) | ✅ |

---

## 🔍 Hallazgos

### B5-1: Sin Flujo de Contexto Pre-Voto Verificado [✅ RESUELTO]

**Problema:** El diseño prevé una cápsula educativa pre-voto pero no hay verificación de que se muestre ANTES de votar y no después.

**Solución:**

| Check | Criterio | E2E Test |
|-------|----------|----------|
| Contexto visible | Cápsula relevante aparece ANTES del botón "Votar" | `expect(capsula).toBeVisible()` antes de voto |
| Skip explícito | Usuario puede saltar pero con texto "Soy consciente, prefiero votar sin contexto" | Checkbox + texto visible |
| Link a Academia | "Quiero aprender más" → link directo a ruta de Academia | Link funcional verificado |
| F-02 en pantalla | "Este es un voto simbólico" visible pre-voto | Texto presente en viewport |

### B5-2: Sin Validación de UI de Resultados [✅ RESUELTO]

**Problema:** Los resultados de votación pueden ser malinterpretados sin contexto (ej: "95% aprobación" con solo 12 votos).

**Solución:**

| Elemento UI | Implementación |
|------------|---------------|
| N visible | "Basado en N votos" siempre presente |
| % + N | "72% (de 1.243 votos)" nunca solo el porcentaje |
| Representatividad | Si N < 100: "Muestra pequeña — resultado preliminar" |
| Disclaimer | "Voto simbólico — no vinculante" en pie de resultados |
| Comparación | No comparar con elecciones reales ni encuestas |
| Export watermark | Screenshots incluyen watermark "CIVICUM — Dato simbólico" |

---

*Documento generado para cerrar Observaciones B5-1 y B5-2*
