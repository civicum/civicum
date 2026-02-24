# 📐 CIVICUM — UI Architecture Pack

**Branch de origen:** `ui-architecture-foundation`
**Última actualización:** 2026-02-24

---

## 🔒 SSOT (Single Source of Truth)

> **La única fuente normativa de UI para CIVICUM es `/docs-ui/*` + decisiones formalizadas en `/adr-ui/*`.**

Todo componente, token, patrón de navegación, contrato de layout o regla de accesibilidad que se aplique en código **debe** estar respaldado por un documento dentro de este directorio o por un ADR aceptado.

## ⚠️ No-SSOT

> **Cualquier otra referencia en el repo o en documentos externos es histórica o inspiracional, no normativa**, salvo que esté **citada e incorporada explícitamente** en `/docs-ui` o en un ADR dentro de `/adr-ui`.

Esto incluye:
- Documentos en `/docs/knowledge-base/` (son fuente de investigación, no especificaciones ejecutables)
- Documentos en `/docs/ux/` (son guías históricas de tono, no contratos de implementación)
- Conversaciones previas de desarrollo (contexto, no norma)
- Mockups o wireframes no formalizados

Si un patrón o decisión de esos documentos debe ser normativo, **debe importarse** formalmente mediante un ADR o incorporarse en el archivo correspondiente de este pack (00–09).

## 📚 Fuentes Permitidas para Extracción (Gate 2)

Las siguientes fuentes del repo son **material legítimo** del cual extraer reglas, tokens, patrones y restricciones para importar a `/docs-ui/`:

| Fuente | Ubicación | Tipo de contenido |
|--------|-----------|-------------------|
| UX / Copywriting | `/docs/ux/` | Tono Terracota, microcopy, reglas de redacción |
| Knowledge Base | `/docs/knowledge-base/` | Design System, módulos MVP, arquitectura técnica, decisiones F-01–F-47, identidad de marca |
| Master Plan | `/docs/roadmap/CIVICUM_ULTIMATE_MASTER_PLAN.md` | Épocas, módulos, requisitos de performance y a11y |
| Anexos Técnicos | `/docs/knowledge-base/CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` | Stack, offline tiers, breakpoints, auth levels |
| Anexos Legales | `/docs/legal/` | Disclaimers, términos de servicio, compliance |
| Governance | `/docs/governance/` | Anti-dark-patterns, coherencia de marca, ética |

> [!IMPORTANT]
> Estas fuentes **no son normativas hasta ser importadas** en un archivo del pack (`/docs-ui/00–09`) o formalizadas en un ADR (`/adr-ui/`). La extracción debe citar siempre el DOCREF de origen.

---

## 📦 Mapa del UI Architecture Pack

| # | Archivo | Propósito |
|---|---------|-----------|
| 00 | [00_UI_CONTRACT.md](./00_UI_CONTRACT.md) | Contrato maestro de UI: qué garantiza la app al usuario y al dev |
| 01 | [01_TOKENS.md](./01_TOKENS.md) | Design tokens: colores, tipografía, espaciado, sombras, radios |
| 02 | [02_COMPONENTS.md](./02_COMPONENTS.md) | Catálogo de componentes UI: inventario, variantes, API pública |
| 03 | [03_LAYOUTS.md](./03_LAYOUTS.md) | Layouts y grids: AppShell, breakpoints, zonas de contenido |
| 04 | [04_NAVIGATION.md](./04_NAVIGATION.md) | Sistema de navegación: rutas, Smart Dock, deep links, guards |
| 05 | [05_PATTERNS.md](./05_PATTERNS.md) | Patrones de UI recurrentes: formularios, cards, modales, listas |
| 06 | [06_CONTENT_STYLE.md](./06_CONTENT_STYLE.md) | Guía de contenido y microcopy: tono, placeholders, errores |
| 07 | [07_A11Y.md](./07_A11Y.md) | Accesibilidad: WCAG 2.1 AA, ARIA, focus, contraste, motion |
| 08 | [08_STATES_OFFLINE_PERF.md](./08_STATES_OFFLINE_PERF.md) | Estados de UI (loading/empty/error), offline y performance |
| 09 | [09_GOVERNANCE.md](./09_GOVERNANCE.md) | Gobernanza UI: proceso de cambio, roles, auditoría |

---

## 🔄 Proceso de Cambio

> **No se introduce patrón, token ni regla de navegación nueva sin un ADR aceptado.**

1. **Proponer:** Crear un ADR en `/adr-ui/` usando la plantilla `ADR-0000-template.md`
2. **Revisar:** El ADR debe incluir contexto, decisión, alternativas y consecuencias
3. **Aceptar:** El ADR se marca como `Aceptado` tras revisión del responsable de UI
4. **Implementar:** Solo después de aceptación se modifica código
5. **Verificar:** El cambio debe reflejarse en el archivo correspondiente del pack (00–09)

---

## ✅ Definición de "Done UI" (nivel mínimo)

Una pantalla o componente se considera "Done UI" si cumple **todos** estos criterios:

- [ ] **AppShell:** Renderiza correctamente dentro de `AppLayout` (o layout propio si es standalone como Onboarding)
- [ ] **Tokens:** Usa exclusivamente tokens del Design System Terracota (sin colores hardcodeados)
- [ ] **Estados:** Implementa al menos: normal, loading (skeleton/spinner), empty (con CTA), error (con retry)
- [ ] **Accesibilidad mínima:** Contraste AA (4.5:1 texto, 3:1 UI), focus-visible, labels ARIA en interactivos
- [ ] **Visual baseline:** Tiene screenshot en `tests/visual/baseline/` en desktop y mobile
- [ ] **Dark mode:** Responde al tema del `useUIStore` (si aplica al contexto de la pantalla)
- [ ] **Responsive:** Funciona en 360px–1536px sin overflow horizontal

---

## 📎 Referencia: Baseline de Época 1

- **Inventario completo:** [epoch1_inventory.md](./epoch1_inventory.md)
- **Screenshots baseline:** [`tests/visual/baseline/`](../tests/visual/baseline/) (15 capturas: 8 desktop + 7 mobile)

> [!NOTE]
> Época 1 es **baseline documentado**; no implica aprobación final de UI. Los GAPs identificados en el inventario (§9) son deuda técnica reconocida que se abordará en gates posteriores.
