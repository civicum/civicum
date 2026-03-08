# 08 — Estados de UI, Offline y Performance

**Propósito:** Define cómo se comporta la interfaz bajo condiciones no-ideales: estados de carga, vacío, error, y modo offline. También establece los presupuestos de rendimiento visual (bundle size, FCP, LCP, CLS) por tier de dispositivo.

## Decisiones que debe contener

- [x] Estados obligatorios por pantalla: loading, empty, error, offline, success (5-state pattern — ADR-0006)
- [x] Success requerido (mínimo): checkmark + texto confirmatorio + siguiente paso (DOCREF: S01 → §12, L1361)
- [ ] Mapping de Success por pantalla (Gate 5+; depende del flujo)
- [ ] Patrón de skeleton loading: cuándo usar, estructura visual
- [ ] Patrón de error: mensajes según `soulful-copywriting`, botón retry, fallback
- [ ] Patrón empty state: ilustración (opcional), mensaje empático, CTA de acción
- [ ] Offline: 3 tiers (HIGH/MEDIUM/LOW), qué se muestra offline por tier
- [x] Indicador de conectividad: OfflineBanner integrado en producción vía AppLayout (Gate 5.4)
- [ ] Performance budgets: FCP, LCP, TTI, CLS por tier (HIGH/MID/LOW)
- [ ] Bundle size: < 800KB gzip total, presupuesto por chunk
- [ ] Font loading: estrategia por tier (HIGH: web fonts, LOW: system-ui)

## Evidencia exigida en Gate 4

> Toda pantalla debe demostrar sus 5 estados (loading, empty, error, offline, success) en tests o screenshots. Loading se demuestra en UI-kit Playwright. Empty se incluye en golden screenshots solo si es estado estable y la pantalla está en Estado=Completo. Error, Offline y Success se verifican vía E2E Playwright. Performance budgets deben tener medición con Lighthouse CI.

## Reglas consolidadas (Gate 4)

### 5-state pattern obligatorio (ADR-0006)

Toda pantalla CIVICUM debe manejar 5 estados:

| Estado | Componente | Verificación |
|--------|-----------|-------------|
| **Loading** | Skeleton shimmer (UI-STP-002) | UI-kit Playwright |
| **Empty** | Ilustración + CTA por módulo (UI-STP-003) | Golden screenshots (solo si es estado estable de golden screen) |
| **Error** | Toast Terracota + retry (UI-STP-004) | E2E Playwright |
| **Offline** | Banner NO alarma + Tier LOW (UI-STP-005) | E2E Playwright (evidencia en producción vía AppLayout; ver `traceability_matrix.md`) |
| **Success** | Mínimo según DOCREF (checkmark + texto + siguiente paso); variantes según contexto (S01 → §12, L1361) | E2E Playwright |

**Performance:** Skeleton debe minimizar trabajo extra de JS; no debe introducir CLS. Se valida con Lighthouse en Gate 5+.

> **DOCREF:** ADR-0006 (ACCEPTED) + S01 → §12 (L1356), §12.1 (L1357–1360), §12.3 (L1387)

---

## TODO

- Importar performance budgets del Master Plan (§Época 4, Performance)
- Importar 3 tiers offline de `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md §1.2.4`
- ~~Documentar GAPs actuales: G2 (sin error en geolocation), G4/G7 (sin dark mode en Dashboard/Layout)~~ → Dark mode resuelto por ADR-0005
- Definir skeleton patterns para Dashboard y Perfil
- ~~Indicador de conectividad: banner, toast, o badge~~ → Gate 5.4 integró `OfflineBanner` en producción vía `AppLayout`; ver `traceability_matrix.md` UI-STP-005.

