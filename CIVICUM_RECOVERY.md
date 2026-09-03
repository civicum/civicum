# CIVICUM_RECOVERY.md
Documento de recuperacion compacto para continuar Civicum desde un chat nuevo sin perder el estado operativo.

## Rol activo
Daniel: Principal Software Architect / Data Architect / Security Engineer / Technical Lead. Audit-first, sin implementar sin autorización explícita.

## Estado del proyecto
- Branch: feature/empoderamiento-benchmark, commit 9e16049
- Tests: 46/46 E2E pasando
- Lint: ✅ 0 errores. Build: ✅ pasa.
- DB: ✅ Neon conectado, 16 regiones + 71 comunas.
- Stashes: 3 preservados — NO TOCAR.

## SKILLS CREADAS
1. `civicum-obsessive-verification` — 7 gates de validación obligatorios
2. `civicum-ckan-collector` — Procedimiento reproducible para datos.gob.cl
3. `civicum-ine-automation` — Browser automation para INE.Stat (Playwright)

## RECOLECCIÓN MASIVA AUTOMÁTICA — VALIDADA ✅

### Gate A: Skill CKAN Collector ✅ COMPLETADO
- SKILL.md: 4,260 bytes
- 3 scripts: fetch_ckan_bulk.py, fetch_ckan_extra.py, explore_ckan.py
- 3.0 GB datos raw en 13 categorías

### Gate B: Normalización ✅ COMPLETADO
- World Bank CSV: 10KB (65 años × 19 indicadores)
- DIPRES CSV unificado: 908 MB (3,741,431 filas, 114 periodos 2017-2026)
- SISS catálogo: 21KB (47 archivos, 47 categorías)
- 5 scripts de normalización

### Gate C: INE Browser Automation ✅ COMPLETADO
- Script Playwright: 8,188 bytes (fetch_ine_stat.py)
- Skill: 2,785 bytes (civicum-ine-automation)
- Catálogo INE: 656 bytes
- Screenshot: 155KB
- Nota: árbol temático no renderiza en headless, datos mercado laboral migrados a SIMEL

### BANCO CENTRAL ✅ COMPLETADO
- Token API BDE de Daniel funcionando
- 8 series descargadas via API REST BDE
- Datos clave:
  - IPC General mensual desde 1928 (36KB)
  - IPC sin volátiles mensual/anual (35KB c/u)
  - IPC transables, no transables, frutas y verduras (8KB c/u)
  - Tipo de cambio USD/CLP diario desde 2000 (1.1MB, 9,717 observaciones)
- Script: fetch_bcentral_v2.py
- Catálogo: bcentral_catalog.json

## DATOS RAW TOTALES
- **3.0 GB** en webapp/src/data/raw/
- **2,600+ archivos** oficiales
- Fuentes: World Bank API, DIPRES, SISS, BCCh, datos.gob.cl (13 categorías)

## DATOS INTERIM (NORMALIZADOS)
- worldbank_normalized.csv (10KB) — 65 años × 19 indicadores
- dipres_ejecucion_unificado.csv (908MB) — 114 periodos mensuales
- siss_catalog.json (21KB) — 47 archivos catalogados
- bcentral: 8 JSON de series económicas

## SPRINT 1 — INICIADO 2026-08-15 (autorizado por Daniel)

### Documentos maestros creados (no commiteados)
- CIVICUM_EXPANSION_PLAN_v2.md (456 líneas) — plan integral integrado
- CIVICUM_RESEARCH_APPLICATION_PLAN.md (647 líneas) — mapeo investigación → implementación
- CIVICUM_RESEARCH_COVERAGE_AUDIT.md (133 líneas) — auditoría 30/31 sub-secciones
- CIVICUM_EXPANSION_PLAN_VALIDATION.md (293 líneas) — 3 ajustes críticos + 7 oportunidades

### Skill creada
- `rate-limit-resilience` — estrategias anti HTTP 429 y upstream timeout

### Conector SUBDERE SINIM ✅ COMPLETADO (completo)
- Portal: http://datos.sinim.gov.cl/ (ficha comunal HTML)
- Scripts: scripts/fetch_sinim.py (muestra) + fetch_sinim_full.py (completo)
- 345/345 comunas descargadas, 0 errores, ~4 min
- Raw: 345 fichas HTML en webapp/src/data/raw/sinim/
- Consolidado: webapp/src/data/interim/sinim_fichas_comunales.json (3.4 MB)
- Frontend: webapp/src/pages/cuentas-claras/sinimDataComunal.ts (323 KB, generado por scripts/normalize_sinim.py)
- Datos: presupuesto municipal, educación, salud, personal, pobreza, infraestructura

### 6 componentes shadcn/ui nuevos ✅ COMPLETADO
1. skeleton.tsx — SkeletonCard + SkeletonCircle (Parte 5.4: skeletal screens)
2. stale-data-badge.tsx — StaleDataBadge (Parte 5.4: confesar heridas)
3. trust-badge.tsx — TrustBadge "Vecino Verificado #405" (Parte 5.4: anonimato)
4. victory-card.tsx — VictoryCard (Parte 5.4: celebración colectiva sobria)
5. timeline-gestiones.tsx — TimelineGestiones (Parte 5.4: retroalimentación ciclo cerrado)
6. quick-report-button.tsx — QuickReportButton FAB (Parte 5.4: entrada cero fricción)

### Validación ✅ COMPLETADO
- Lint: 0 errores (3 corregidos: imports unused + Date.now purity)
- Build: ✅ pasa (41.38s, chunk 835KB — optimización pendiente)
- Tests E2E: 46/46 pasando (1.9m)

### Integración Cuentas Claras SINIM ✅ COMPLETADO
- Toggle Nacional/Mi Comuna con ComunaSelector (búsqueda 345 comunas)
- StaleDataBadge visible en vista comunal (datos SINIM año más reciente)
- Población e indicadores por comuna reales de SINIM
- Sobrescribe datos sintéticos cuando está en modo comunal

### Landing Pública ✅ COMPLETADO
- Ruta: /landing (pública, sin auth, antes del onboarding)
- Archivo: webapp/src/pages/landing/LandingPage.tsx
- Tagline: "De la queja a la acción" (Paleta Terracota)
- CTA: "Empieza ya" → onboarding / "Solo mirar" → dashboard
- Victorias ciudadanas + sección Quiénes Somos + Transparencia
- Framer Motion, WCAG AA, mobile-first
- Build: 843KB (68s) | Lint: 0 | Tests: 46/46

### Asistente Cívico (Civia) Mejorado ✅ COMPLETADO
- Chat interactivo funcional (input real + respuestas mock)
- Placeholders conversacionales ("🔎 Buscando en Diario Oficial...")
- Rotación de placeholders por mensaje enviado
- Microcopy contextual según investigación (6 contextos emocionales)
- Política Honestidad Radical visible
- Sugerencias habilitadas con respuestas detalladas
- WCAG: disabled states, aria-labels, keyboard Enter to send
- Lint: 0 errores | Build: 846KB | Tests: 46/46

## PRÓXIMO PASO
1. ~~Normalizar datos SINIM~~ → ✅ Completado
2. ~~Integrar datos SINIM en Cuentas Claras~~ → ✅ Completado
3. ~~Landing page inmersiva~~ → ✅ Completado (/landing)
4. ~~Asistente Cívico mejorado~~ → ✅ Completado (/civia)
5. **Optimización chunk >500KB** (code-splitting de datos SINIM)
6. **Sprint 2**: Canal Universal de Acceso (SMS bidireccional + IVR) + Radar Vecinal
7. **Commit del Sprint 1** (pending autorización)
