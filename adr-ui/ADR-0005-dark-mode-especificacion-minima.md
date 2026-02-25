# ADR-0005: Dark mode — especificación mínima implementable

- **Estado:** PROPOSED
- **Fecha:** 2026-02-25
- **Autor:** Antigravity (para aprobación de Moska)
- **Afecta:** UI-LAY-007 | GAP-005
- **Supersede:** —

---

## Contexto

`README.md` → Done UI incluye "Dark mode: responde a la fuente de tema definida en el sistema" como criterio de completitud. Sin embargo, ninguna fuente de diseño define una paleta dark mode implementable para CIVICUM. S02 (Design System Terracota) menciona dark mode como concepto pero no provee tokens, contrastes ni mapping de colores para un tema oscuro.

Esto genera GAP-005: la regla existe como criterio, pero no hay especificación para cumplirla.

- **DOCREF:** `docs-ui/README.md` → Done UI → "Dark mode" (L82)
- **DOCREF:** `docs-ui/_gate2/gaps_log.md` → GAP-005

## Decisión (propuesta)

**Posponer dark mode a Época 3+**, con las siguientes condiciones:

1. **Época 1-2:** Solo tema claro. Eliminarlo de Done UI como bloqueante; mantenerlo como aspiración documentada.
2. **Época 3 (prerrequisito):** Crear spec de tokens dark mode en `01_TOKENS.md` con paleta derivada:
   - Background: Gris 900 (`#111827`) base
   - Surface: Gris 800 (`#1F2937`)
   - Text primary: Gris 50 (`#F9FAFB`)
   - Acentos: los 4 colores primarios con ajuste de luminosidad (+10-15% para contraste sobre oscuro)
3. **Activación:** Via `prefers-color-scheme: dark` + toggle manual en Settings
4. **Criterio de implementación:** Todos los contrastes WCAG AA deben verificarse en ambos temas antes de marcar dark mode como "hecho"

## Alternativas Consideradas

### Alternativa A: Posponer a Época 3+ con spec mínima documentada (propuesta)
- **Pros:** No bloquea Época 1-2, documenta intención, define prerequisitos claros
- **Contras:** Dark mode no disponible para usuarios que lo necesitan (AMOLED battery, preferencia visual)

### Alternativa B: Implementar dark mode mínimo ahora (Azul Profundo base)
- **Pros:** Disponible desde Época 1, cubre usuarios con preferencia dark
- **Contras:** Sin spec aprobada = tokens inventados, alto riesgo de contrastes fallidos, doble trabajo si la spec final difiere, no hay golden screenshots de referencia

### Alternativa C: Eliminar dark mode del roadmap completamente
- **Pros:** Simplifica, no hay deuda
- **Contras:** Ignora 40-60% usuarios móviles que usan dark mode, viola accesibilidad (AMOLED battery saving), competitivamente débil

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
- Referencia: `/docs/ux/amoled-true-black-battery-survival.md` (consideraciones battery)

---

> ✅ **Aprobación (Moska): PENDIENTE** — no ejecutar implementación hasta aprobación.
