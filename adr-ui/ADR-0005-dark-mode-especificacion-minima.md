# ADR-0005: Dark mode — especificación mínima implementable

- **Estado:** ACCEPTED
- **Fecha:** 2026-02-25
- **Daniel decision:** ACCEPTED — opción elegida: A (única propuesta)
- **Decision date:** 2026-02-26
- **Autor:** Antigravity (para aprobación de Daniel)
- **Afecta:** UI-LAY-007 | GAP-005
- **Supersede:** —

---

## Contexto

`README.md` → Done UI incluye "Dark mode: responde a la fuente de tema definida en el sistema" como criterio de completitud. Sin embargo, ninguna fuente de diseño define una paleta dark mode implementable para CIVICUM. S02 (Design System Terracota) menciona dark mode como concepto pero no provee tokens, contrastes ni mapping de colores para un tema oscuro.

Esto genera GAP-005: la regla existe como criterio, pero no hay especificación para cumplirla.

- **DOCREF:** `docs-ui/README.md` → Done UI → "Dark mode" (L82)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-005

## Decisión

**Posponer dark mode a Época 3+**, con las siguientes condiciones:

1. **Época 1-2:** Solo tema claro. Eliminarlo de Done UI como bloqueante; mantenerlo como aspiración documentada.
2. **Época 3 (prerrequisito):** Crear spec de tokens dark mode en `01_TOKENS.md`. Requisitos verificables:
   - (i) Dark mode se define vía **tokens semánticos** (background, surface, text-primary, accent) — valores concretos TBD en la spec de tokens.
   - (ii) Activación **class-based** (`[data-theme="dark"]`) + respeto a `prefers-color-scheme` del usuario.
   - (iii) **Contraste WCAG AA** en ambos temas como condición de "Done".
3. **Criterio de aceptación:** No se marca dark mode como "hecho" hasta que los 3 requisitos anteriores se cumplan y verifiquen.

## Alternativas Consideradas

### Alternativa A: Posponer a Época 3+ con spec mínima documentada (propuesta)
- **Pros:** No bloquea Época 1-2, documenta intención, define prerequisitos claros
- **Contras:** Dark mode no disponible para usuarios que lo necesitan (AMOLED battery, preferencia visual)

### Alternativa B: Implementar dark mode mínimo ahora (Azul Profundo base)
- **Pros:** Disponible desde Época 1, cubre usuarios con preferencia dark
- **Contras:** Sin spec aprobada = tokens inventados, alto riesgo de contrastes fallidos, doble trabajo si la spec final difiere, no hay golden screenshots de referencia

### Alternativa C: Eliminar dark mode del roadmap completamente
- **Pros:** Simplifica, no hay deuda
- **Contras:** Ignora una proporción significativa de usuarios móviles que prefieren dark mode (hipótesis a validar con datos reales), reduce opciones de accesibilidad, competitivamente débil

## Consecuencias

- **Positivas:** Desbloquea Épocas 1-2 sin deuda de calidad, prioriza funcionalidad core sobre cosmética
- **Negativas:** Usuarios con `prefers-color-scheme: dark` reciben tema claro (no roto, solo no adaptado)
- **Riesgos:** Si se pospone más allá de Época 3, se acumula deuda visual. Mitigación: token spec ready en 01_TOKENS antes de Época 3.

## Verificación (Gate 5+)

- **Época 1-2:** Verificar que tema claro funciona sin errores cuando `prefers-color-scheme: dark` está activo (no romper nada)
- **Época 3+:** Test a11y de contrastes en tema dark, golden screenshots dark, visual regression dual-theme

## Plan de implementación (no ejecutar aún)

1. Actualizar `README.md` Done UI: dark mode pasa de bloqueante a "aspiración Época 3+" 
2. Crear placeholder en `01_TOKENS.md` → "§ Dark Mode: TBD — ver ADR-0005"
3. En Época 3: diseñar tokens dark, implementar CSS toggle, verificar contrastes
4. Actualizar golden screenshots para incluir dark variants

## Referencias

- DOCREF: `docs-ui/README.md` → Done UI → "Dark mode" (L82)
- DOCREF: `docs-ui/_gate2/gaps_log.md` → GAP-005
- DOCREF: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md` (dark mode mencionado sin tokens)
- Hipótesis a validar: beneficio de batería AMOLED con dark mode — requiere datos reales antes de usar como argumento de decisión

## Cierre de loop (Gate 4, si se aprueba este ADR)

- Actualizar `docs-ui/README.md` → Done UI para reflejar que Dark Mode no bloquea Época 1–2.
- Actualizar `docs-ui/traceability_matrix.md` → UI-LAY-007 para anotar decisión tomada y referencia a este ADR.
- GAP-005 pasa de backlog a "decisión tomada" en `gaps_log.md`.

---

> ✅ **Aprobación (Daniel): COMPLETADA** — se autoriza implementación según el plan (Gate 5+).
