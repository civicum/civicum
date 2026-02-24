# 08 — Estados de UI, Offline y Performance

**Propósito:** Define cómo se comporta la interfaz bajo condiciones no-ideales: estados de carga, vacío, error, y modo offline. También establece los presupuestos de rendimiento visual (bundle size, FCP, LCP, CLS) por tier de dispositivo.

## Decisiones que debe contener

- [ ] Estados obligatorios por pantalla: loading (skeleton/spinner), empty (con CTA), error (con retry)
- [ ] Patrón de skeleton loading: cuándo usar, estructura visual
- [ ] Patrón de error: mensajes según `soulful-copywriting`, botón retry, fallback
- [ ] Patrón empty state: ilustración (opcional), mensaje empático, CTA de acción
- [ ] Offline: 3 tiers (HIGH/MEDIUM/LOW), qué se muestra offline por tier
- [ ] Indicador de conectividad: banner, toast, o badge (según estado de red)
- [ ] Performance budgets: FCP, LCP, TTI, CLS por tier (HIGH/MID/LOW)
- [ ] Bundle size: < 800KB gzip total, presupuesto por chunk
- [ ] Font loading: estrategia por tier (HIGH: web fonts, LOW: system-ui)

## Evidencia exigida en Gate 4

> Toda pantalla debe demostrar sus 4 estados (normal, loading, empty, error) en screenshots o tests. Performance budgets deben tener medición con Lighthouse CI.

---

## TODO

- Importar performance budgets del Master Plan (§Época 4, Performance)
- Importar 3 tiers offline de `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md §1.2.4`
- Documentar GAPs actuales: G2 (sin error en geolocation), G4/G7 (sin dark mode en Dashboard/Layout)
- Definir skeleton patterns para Dashboard y Perfil
