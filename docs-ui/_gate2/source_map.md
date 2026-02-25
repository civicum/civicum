# 📍 Gate 2 — Source Map

**Propósito:** Registro canónico de todas las fuentes consultadas para extracción de reglas UI. Ninguna regla puede entrar a la matriz de trazabilidad si su fuente no aparece aquí.

**Fecha:** 2026-02-24
**Gate:** Gate 2 — Extracción Documental

---

## Fuentes Consultadas

| # | Fuente (path exacto) | Tipo | Relevancia UI | Estado |
|---|----------------------|------|---------------|--------|
| S01 | `/docs/knowledge-base/CIVICUM_Diseno_UI_UX_Definitivo.md` | UX / Design | Documento canónico: 21 secciones, tokens, tipografía, breakpoints, componentes, navegación, estados, a11y, microcopy, animaciones, onboarding, atmósferas | Usada |
| S02 | `/docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` | Design System | Paleta completa, escalas de color, semántica, contrastes WCAG, CSS variables, dark mode, tipografía, espaciado | Usada |
| S03 | `/docs/knowledge-base/CIVICUM_Anexo_Decisiones_F01_F47_Exhaustivo.docx.md` | Producto / Decisiones | 47 decisiones formales: F-01 MVP, F-02 honestidad, F-03 datos mínimos, F-05 apartidismo, F-07 offline dignity, F-08 gamificación, F-09 coherencia marca, F-14 modo lite, F-45 testing | Usada |
| S04 | `/docs/knowledge-base/CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` | Tech / Arquitectura | Stack, Core Web Vitals por tier, offline-first strategy, 3 tiers de experiencia, service worker | Revisada sin reglas nuevas (cubierta por S01/S03) |
| S05 | `/docs/knowledge-base/CIVICUM_Identidad_de_Marca_Propuesta_Mision_Vision_Manifiesto.md` | Marca / Identidad | Misión, visión, manifiesto, tono de voz, valores de marca | Revisada sin reglas nuevas (cubierta por S01/S02) |
| S06 | `/docs/knowledge-base/CIVICUM_Anexo_Modulos_MVP_Especificacion_Exhaustiva.docx.md` | Producto | Especificación MVP por módulo, flujos, pantallas | Revisada sin reglas nuevas (cubierta por S01) |
| S07 | `/docs/governance/anti-dark-patterns.md` | Governance / Ética | 20+ prohibiciones de dark patterns organizadas por categoría: onboarding, notificaciones, gamificación, retención, contenido | Usada |
| S08 | `/docs/governance/brand-coherence-audit.md` | Governance / Marca | Auditoría de coherencia de marca, checklist visual | Revisada sin reglas nuevas (cubierta por S02 F-09) |
| S09 | `/docs/ux/anti-dark-patterns.md` | UX / Ética | Guías UX anti-manipulación | Revisada sin reglas nuevas (cubierta por S07) |
| S10 | `/docs/ux/error-messages.md` | UX / Copy | Patrones de mensajes de error | Revisada sin reglas nuevas (cubierta por S01 §15) |
| S11 | `/docs/ux/fat-finger-defense.md` | UX / Accesibilidad | Defensa contra errores de toque accidental | Revisada sin reglas nuevas (cubierta por S01 §21.4) |
| S12 | `/docs/ux/reduced-motion-accessibility.md` | UX / A11y | Manejo de movimiento reducido | Revisada sin reglas nuevas (cubierta por S01 §16) |
| S13 | `/docs/frontend/fonts.md` | Tech / Tipografía | Especificaciones de carga de fuentes | Revisada sin reglas nuevas (cubierta por S01 §3) |
| S14 | `/docs/frontend/service-worker-cache-strategy.md` | Tech / Offline | Estrategia de cache del service worker | Revisada sin reglas nuevas (cubierta por S01 §18) |
| S15 | `/docs/roadmap/CIVICUM_ULTIMATE_MASTER_PLAN.md` | Master Plan | Épocas, módulos, requisitos de performance y a11y, épocas de implementación | Revisada sin reglas nuevas (cubierta por S01/S03/S04) |
| S16 | `/docs/legal/honest-cookie-consent.md` | Legal | Consentimiento de cookies honesto | Revisada sin reglas nuevas (cubierta por S07 pre-checked consent) |
| S17 | `/docs/knowledge-base/CIVICUM_Anexo_Fundamentos_Antropologicos_Culturales_Exhaustivo.docx.md` | Cultural / UX | Hallazgos culturales H1-H9 aplicados al diseño | Revisada sin reglas nuevas (cubierta por S01 §14) |

---

## Reglas del Source Map

1. **Solo las fuentes marcadas "Usada"** han generado reglas en la matriz de trazabilidad. Fuentes activas: S01, S02, S03, S07.
2. **"Revisada sin reglas nuevas"** = se leyó y las reglas relevantes ya están cubiertas por otra fuente.
3. Ninguna regla en `traceability_matrix.md` puede tener un DOCREF a una fuente no listada aquí.
4. Nuevas fuentes descubiertas en gates posteriores deben añadirse aquí primero.
