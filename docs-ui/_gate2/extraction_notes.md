# 📝 Gate 2 — Extraction Notes

**Propósito:** Reglas atómicas extraídas de las fuentes permitidas, cada una con DOCREF. Alimenta `traceability_matrix.md`.

---

## CONTRACT (00_UI_CONTRACT)

- **MUST** usar paleta Terracota como identidad visual oficial. DOCREF: S01 → §2 "Design System Terracota — Tokens Completos" → "Decisión F-09: Paleta Terracota como identidad visual oficial" (línea 98)
- **PROHIBIDO** colores partidistas (rojo UDI, azul PS, amarillo DC). DOCREF: S03 → F-05 → "Paleta Terracota: sin colores partidistas (rojo UDI, azul PS, amarillo DC prohibidos)" (línea 271)
- **MUST** fuentes de datos siempre citadas y verificables. DOCREF: S03 → F-02 → "Fuentes siempre citadas y verificables" (línea 102)
- **MUST** disclaimers visibles sobre limitaciones del sistema. DOCREF: S03 → F-02 → "Disclaimers visibles sobre limitaciones" (línea 121)
- **PROHIBIDO** dark patterns en toda la interfaz. DOCREF: S07 → §Objetivo → "Garantizar que CIVICUM no utilice patrones engañosos" (línea 11)
- **MUST** aplicar "Regla de Oro": si S4 (65+, Android Go $50, 3G) no puede completar un flujo sin ayuda, rediseñar. DOCREF: S01 → §6.2 → "Si S4 puede completar un flujo sin ayuda externa, el diseño es correcto" (línea 629)
- **MUST** 3 tiers de experiencia (HIGH/MEDIUM/LOW). DOCREF: S01 → §17.1 → "Tres niveles de experiencia según dispositivo" (línea 1578)

## TOKENS (01_TOKENS)

- **MUST** usar colores primarios: Terracota #C2503A, Azul Profundo #264653, Verde Esperanza #0D7A5F, Azul Protección #2563EB. DOCREF: S02 → §1.1 → "Los 4 colores core que definen la identidad visual" (línea 71)
- **MUST** mapear semántica: Éxito=#0D7A5F, Error=#C2503A, Advertencia=#B56D18, Info=#2563EB. DOCREF: S02 → §1.2 → tabla de colores semánticos (línea 136)
- **MUST** usar escala de espaciado base 4px: space-1(4px) a space-16(64px). DOCREF: S01 → §5.1 → "Escala de Espaciado (Base 4px)" (línea 570)
- **MUST** sombras definidas: shadow-sm a shadow-xl. DOCREF: S01 → §5.2 → tabla de sombras (línea 585)
- **MUST** border-radius definidos: radius-sm(4px) a radius-full(9999px). DOCREF: S01 → §5.3 → tabla de border radius (línea 594)
- **MUST** CSS variables según esquema :root con --color-terracota-*, --color-azul-*, etc. DOCREF: S01 → §2.7 → bloque CSS ":root" (línea 308)
- **MUST** módulos con data-module y --module-accent / --module-bg. DOCREF: S01 → §2.7 → "[data-module='mi-civicum']" (línea 355)
- **SHOULD** Advertencia (Amarillo Mostaza #D4872E) siempre con texto oscuro (#264653 o negro). DOCREF: S02 → §1.2.1 → "Usar siempre con texto oscuro" (línea 155)

## COMPONENTS (02_COMPONENTS)

- **MUST** iconos Lucide React, stroke 2px, viewbox 24x24, round linecap/linejoin. DOCREF: S01 → §4.1 → "Base: Lucide React (stroke 2px, viewbox 24×24)" (línea 452)
- **MUST** iconos decorativos con aria-hidden="true" focusable="false". DOCREF: S01 → §4.4 → bloque JSX accesibilidad (línea 548)
- **MUST** iconos funcionales (sin texto) con aria-label. DOCREF: S01 → §4.4 → "Icono funcional — sin texto" (línea 555)
- **MUST** skeleton shimmer animation: linear-gradient Gris100→Gris200→Gris100, 1.5s infinite. DOCREF: S01 → §12.2 → "Shimmer: linear-gradient" (línea 1381)
- **MUST** spinner Terracota rotación 0.8s, tamaños SM(16px)/MD(24px)/LG(48px). DOCREF: S01 → §7 tabla Feedback → "Spinner: SM (16px) / MD (24px) / LG (48px), Terracota rotación 0.8s" (línea 744)
- **MUST** Smart Dock bottom bar: 5 tabs + "Más", badge punto rojo 8px (sin número). DOCREF: S01 → §9.1 → tabla posiciones + §9.2 "Badge notificación: Punto rojo 8px (sin número — reduce ansiedad)" (línea 1146)
- **SHOULD** Bottom Sheet con drag handle, snap points (25%, 50%, 90%), backdrop dim. DOCREF: S01 → §7 tabla Navegación → "Bottom Sheet" (línea 754)

## LAYOUTS (03_LAYOUTS)

- **MUST** breakpoints mobile-first: XS(360px), SM(480px), MD(768px), LG(1024px), XL(1280px), 2XL(1536px). DOCREF: S01 → §6.1 → tabla "Breakpoints Oficiales" (línea 618)
- **MUST** grid 12 columnas, gutter 24px desktop / 16px mobile, max-width 1280px. DOCREF: S01 → §5.4 → tabla "Grid System" (línea 604)
- **MUST** márgenes laterales: 16px (XS-SM), 24px (MD), 32px (LG+). DOCREF: S01 → §5.4 → "Márgenes laterales" (línea 608)
- **MUST** Smart Dock: bottom bar en XS-MD, side rail en LG+. DOCREF: S01 → §6.3 → "Smart Dock: Bottom bar 5 tabs | Side rail" (línea 635)
- **MUST** modales: full-screen en XS, centered 80% en MD, centered 560px max en LG. DOCREF: S01 → §6.3 → fila Modales (línea 637)
- **MUST** tablas responsive: cards apiladas en XS, tabla responsive en MD, tabla completa en LG. DOCREF: S01 → §6.3 → fila Tablas (línea 638)
- **GAP** dark mode no definido en breakpoints/layouts — ver GAP_ID: GAP-005

## NAVIGATION (04_NAVIGATION)

- **MUST** Smart Dock: Home | Aprende | Civia | Reporta | Más (en ese orden). DOCREF: S01 → §9.1 → tabla de posiciones 1-5 (línea 1129)
- **MUST** Smart Dock altura 56px + safe area iOS. DOCREF: S01 → §9.2 → "Altura: 56px (+ safe area iOS)" (línea 1141)
- **MUST** icono activo usa color del módulo + filled variant. DOCREF: S01 → §9.2 → "Icono activo: Color módulo, 24px, filled variant" (línea 1144)
- **MUST** transición entre módulos = cambio de atmósfera cromática. DOCREF: S01 → §9.3 → "Cada cambio de módulo es un cambio de atmósfera" (línea 1152)
- **MUST** tab bounce al seleccionar (scale 1.2→1, 150ms). DOCREF: S01 → §9.3 → "Smart Dock icon bounces al seleccionar" (línea 1154)
- **MUST** prefers-reduced-motion: corte directo sin animación. DOCREF: S01 → §9.3 → "Si prefers-reduced-motion: corte directo" (línea 1158)
- **MUST** breadcrumbs máx 4 niveles, "← Volver" en mobile. DOCREF: S01 → §7 tabla Navegación → "Breadcrumbs: máx 4 niveles, ← Volver en mobile" (línea 751)
- **GAP** falta ruta 404 — ver GAP_ID: GAP-001

## PATTERNS (05_PATTERNS)

- **MUST** onboarding inmersivo en 5 fases, ~8 min total. DOCREF: S01 → §10 → "ONBOARDING INMERSIVO — 5 FASES, Duración total objetivo: ~8 minutos" (línea 1171)
- **MUST** atmósferas por módulo con metáfora espacial, paleta dominante y emoción objetivo. DOCREF: S01 → §8 → "Cada módulo es un 'mundo' con metáfora espacial, paleta dominante y emociones objetivo" (línea 774)
- **MUST** cada animación tiene propósito funcional o emocional. DOCREF: S01 → §13.1 → "Cada animación tiene un propósito funcional o emocional" (línea 1432)
- **MUST** animaciones solo con transform y opacity (no layout thrashing). DOCREF: S01 → §13.1 → "Solo transform y opacity (evitar layout thrashing)" (línea 1431)
- **MUST** duración máxima: 300ms para transiciones UI, 800ms para celebraciones. DOCREF: S01 → §13.1 → "300ms para transiciones UI, 800ms para celebraciones" (línea 1428)
- **MUST** frustración → acción: siempre mostrar "siguiente paso" después de pantalla negativa. DOCREF: S01 → §14.1 → tabla principios emocionales, fila 1 (línea 1468)
- **MUST** F-54 reversibilidad: snackbar con deshacer, grace period 5s, soft-delete 30 días. DOCREF: S01 → §19 → fila F-54 (línea 1679)
- **MUST** F-55 botones opuestos: stacked vertical en XS, gap 16px. DOCREF: S01 → §19 → fila F-55 (línea 1680)

## CONTENT/STYLE (06_CONTENT_STYLE)

- **MUST** tono "Vecino Organizado": empática, directa, cero paternalismo. DOCREF: S01 → §15.1 → tabla atributos de voz (línea 1500)
- **MUST** registro formal-cercano: tú (no usted), sin exceso de chilenismos. DOCREF: S01 → §15.1 → "Registro: Formal-cercano (tú, no usted)" (línea 1503)
- **PROHIBIDO** palabras: revolución, derrocar, enemigo, traidor, "la casta", "verdad absoluta", "garantizamos". DOCREF: S01 → §15.3 → lista completa de palabras prohibidas (línea 1513)
- **MUST** errores humanos, no técnicos: "Algo falló de nuestro lado." DOCREF: S01 → §15.4 → "Errores (humanos, no técnicos)" (línea 1532)
- **MUST** invitación sin presión: "Puedes explorar sin registrarte." DOCREF: S01 → §15.4 → "Invitación sin presión" (línea 1527)
- **SHOULD** disclaimers de votos simbólicos siempre visibles. DOCREF: S01 → §15.4 → "Limitaciones (Honestidad Radical, F-02)" (línea 1522)

## A11Y (07_A11Y)

- **MUST** contraste texto normal 4.5:1 mínimo, objetivo 7:1. DOCREF: S01 → §16.1 → tabla requisitos "Contraste texto normal: 4.5:1, Objetivo: 7:1" (línea 1545)
- **MUST** contraste texto grande 3:1 mínimo. DOCREF: S01 → §16.1 → "Contraste texto grande: 3:1" (línea 1546)
- **MUST** área táctil mínima 44×44px, objetivo 48×48px. DOCREF: S01 → §16.1 → "Área táctil: 44×44px, Objetivo: 48×48px" (línea 1547)
- **MUST** focus visible ring 2px + offset 2px. DOCREF: S01 → §16.1 → "Focus visible: Ring 2px, Objetivo: Ring 2px + offset 2px" (línea 1548)
- **MUST** navegación por teclado 100% de flujos. DOCREF: S01 → §16.1 → "Navegación teclado: 100% flujos" (línea 1549)
- **MUST** screen reader compatible con VoiceOver + TalkBack. DOCREF: S01 → §16.1 → "Screen reader: Compatibilidad total" (línea 1550)
- **MUST** 4 modos adaptativos: alto contraste, daltónicos, texto grande, reducción movimiento. DOCREF: S01 → §16.2 → tabla de modos adaptativos (línea 1556)
- **MUST** prefers-reduced-motion → cero animaciones, transiciones instantáneas. DOCREF: S01 → §16.2 → "Reducción Movimiento: cero animaciones" (línea 1561)

## STATES/PERF (08_STATES_OFFLINE_PERF)

- **MUST** 5 estados por pantalla: loading, empty, error, offline, success. DOCREF: S01 → §12 → tabla 5 estados (línea 1356)
- **MUST** loading: skeleton shimmer (no spinner vacío). DOCREF: S01 → §12.1 → fila Loading (línea 1357)
- **MUST** empty: ilustración + CTA contextual por módulo. DOCREF: S01 → §12.3 → tabla empty states por módulo (línea 1387)
- **MUST** error: toast Terracota + guardado de trabajo + retry. DOCREF: S01 → §12.1 → fila Error (línea 1359)
- **MUST** offline: banner informativo (no alarma) + funcionalidad completa Tier LOW. DOCREF: S01 → §12.1 → fila Offline + §12.4 → "NO es una página de error genérica" (línea 1360, 1399)
- **MUST** offline dignity: offline.html digno con logo + capacidades + CTA. DOCREF: S03 → F-07 → "Dignidad = experiencia completa sin internet" (línea 365)
- **MUST** Core Web Vitals Tier LOW: FCP≤2.0s, LCP≤4.0s, TTI≤5.0s, CLS≤0.2. DOCREF: S01 → §17.2 → tabla Core Web Vitals (línea 1590)
- **MUST** critical pack 800KB para funcionalidad básica. DOCREF: S03 → F-07 → "CRITICAL_PACK_SIZE_KB: 800" (línea 383)
- **GAP** estados loading/error no implementados en Época 1 — ver GAP_ID: GAP-006

## GOVERNANCE (09_GOVERNANCE)

- **PROHIBIDO** notificaciones manipulativas (FOMO, urgencia falsa). DOCREF: S07 → §Notificaciones → "FOMO manipulation: Prohibido, F-02 Honestidad Radical" (línea 31)
- **PROHIBIDO** gamificación adictiva (loops, loss aversion, streaks). DOCREF: S07 → §Gamificación → "Addictive loops: Prohibido, F-08 Anti-adicción" (línea 37)
- **MUST** karma basado en servicio, no opinión; tope diario. DOCREF: S03 → F-08 → "Sistema de Karma basado en SERVICIO, no opinión" + "Tope diario de Karma" (líneas 418-420)
- **MUST** eliminación de cuenta en 1 click + export JSON/CSV. DOCREF: S07 → §Retención → "/api/me/delete en 1 click" + "Export JSON/CSV + delete" (líneas 46-47)
- **PROHIBIDO** guilt trips al salir. DOCREF: S07 → §Retención → "Guilt trips on leaving: Prohibido" (línea 48)
- **MUST** auditoría anti-dark-patterns trimestral. DOCREF: S07 → §Auditoría → "Revisión UX flows completos: Trimestral" (línea 65)
