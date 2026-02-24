# ADR-0001: SSOT para Documentación UI

- **Estado:** Aceptado
- **Fecha:** 2026-02-24
- **Autor:** Antigravity (Gate 1)
- **Supersede:** Ninguno (ADR inaugural)

---

## Contexto

CIVICUM tiene ~700 archivos de documentación distribuidos en 53 directorios bajo `/docs/`. Muchos de estos archivos contienen directrices de UI, diseño, accesibilidad y UX que fueron escritas en fases de investigación y auditoría, pero no fueron diseñadas como especificaciones ejecutables para el equipo de desarrollo.

Esto genera ambigüedad: cuando un desarrollador necesita saber "¿qué tokens de color usar?" o "¿cómo debe comportarse el Smart Dock?", debe buscar en múltiples documentos que pueden contradecirse o estar desactualizados.

Se necesita una **fuente única de verdad** (SSOT) que sea:
1. **Autoritativa** — si está aquí, es ley
2. **Trazable** — cada regla tiene un origen documentado (DOCREF o ADR)
3. **Verificable** — se puede auditar contra el código real

## Decisión

1. **`/docs-ui/`** es la única fuente normativa de UI. Contiene un pack de 10 documentos (00–09) que cubren contratos, tokens, componentes, layouts, navegación, patrones, contenido, a11y, estados y gobernanza.

2. **`/adr-ui/`** contiene todas las decisiones arquitectónicas de UI en formato ADR (Architecture Decision Record). Cualquier cambio de patrón, token o navegación requiere un ADR aceptado antes de implementarse.

3. **Todo lo demás** (`/docs/knowledge-base/`, `/docs/ux/`, `/docs/frontend/`, etc.) es material histórico o inspiracional. Si una regla de esos documentos debe ser normativa, se importa formalmente a `/docs-ui/` citando la fuente original.

4. **Convención de nombres:**
   - Pack UI: `docs-ui/NN_NOMBRE.md` donde NN = 00–09
   - ADRs: `adr-ui/ADR-NNNN-slug.md` donde NNNN = 0001+
   - Inventarios: `docs-ui/epochN_inventory.md`

## Alternativas Consideradas

### Alternativa A: Usar `/docs/ux/` directamente como SSOT
- **Pros:** No requiere crear estructura nueva, los documentos ya existen
- **Contras:** Esos documentos fueron escritos como investigación/auditoría, no como specs ejecutables. Contienen recomendaciones mezcladas con análisis, sin formato uniforme ni versionado

### Alternativa B: Inline en código (JSDoc / comentarios)
- **Pros:** La documentación vive junto al código, siempre actualizada
- **Contras:** No permite visión sistémica, difícil de auditar, no cubre decisiones de producto

### Alternativa C: Wiki externa (Notion/Confluence)
- **Pros:** Interfaz rica, colaborativa
- **Contras:** Rompe el principio "docs-as-code", no versionable con Git, dependencia externa, viola F-43 (zero-cost)

## Consecuencias

- **Positivas:**
  - Elimina ambigüedad: una sola fuente para buscar respuestas de UI
  - Trazabilidad total: cada regla tiene DOCREF o ADR
  - Auditable: Gate 4 puede verificar que código ↔ docs están sincronizados
  - Compatible con CI: se pueden crear checks automáticos contra el pack

- **Negativas:**
  - Requiere esfuerzo de migración: las reglas de `/docs/` relevantes deben importarse manualmente
  - Overhead de proceso: todo cambio de patrón requiere un ADR (pero es intencional — previene drift)

- **Riesgos:**
  - Si el pack no se mantiene actualizado, pierde valor. Mitigación: Gate 4 lo impone como criterio de "Done UI"

## Referencias

- DOCREF: `docs-ui/README.md` — Declaración SSOT y proceso de cambio
- DOCREF: `docs-ui/epoch1_inventory.md` — Inventario baseline de Época 1
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` — Fuente histórica de tokens
- DOCREF: `docs/ux/soulful-copywriting-terracotta.md` — Fuente histórica de tono y microcopy
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Decisiones_F01_F47_Exhaustivo.docx.md` — Decisiones formales del proyecto
