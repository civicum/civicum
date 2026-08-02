# CIVICUM_RECOVERY.md
Documento de recuperacion compacto para continuar Civicum desde un chat nuevo sin perder el estado operativo. No es una bitacora cruda ni una transcripcion: registra estado, decisiones, comandos relevantes, resultados y el proximo paso.

Ultima actualizacion: 2026-08-02.
Agente actual: Hermes Agent (nvidia/nemotron-3-super-120b-a12b via nvidia).

## 1. Estado actual

- Proyecto: Civicum.
- Ruta local: `C:\Users\daniel.aguirre\Proyectos\civicum`.
- Rama actual: `ui-architecture-foundation`.
- Working tree: **modificado** (Fase 1, Fase 2, Fase 3 y Fase 4 commiteadas; Fase 5 en progreso).
- Origin confirmado: `https://github.com/civicum/civicum.git`.
- Agente: Transicion de Codex (OpenAI) a Hermes Agent (Nous Research).
- Modelo actual: `nvidia/nemotron-3-super-120b-a12b:free` via OpenRouter.
- Ultimo commit Fase 1: `6b8a09a feat(fase1): cimientos`.
- Ultimo commit Fase 2: `0070960 feat(fase2): infraestructura DB conectada, migracion aplicada y datos geograficos sembrados (16 regiones, 71 comunas)`.
- Ultimo commit Fase 3: `b18ba86 feat(fase3): design system Terracota — tokens CSS, paleta completa, tipografia IBM Plex Sans/Nunito Sans, dark mode real, utilidades semanticas y safe-area`.
- Ultimo commit Fase 4: `f5d9996 feat(fase4): modulo Alza la Voz — formulario de reportes con geolocalizacion, captura de evidencia, endpoint POST/GET conectado a Neon DB; validaciones: lint (0), build (ok), health OK, E2E 46 passed`.
- Working tree actual: **modificado** (Archivos de Fase 5 en progreso).

## 2. Cambios Fase 1 realizados (commiteados en 6b8a09a)

- Archivos eliminados: `webapp/src/App.tsx`, `webapp/src/App.css` (placeholder muerto; routing real en main.tsx).
- Paginas nuevas creadas:
  - `webapp/src/pages/academia/AcademiaPage.tsx` — Pagina completa con modulos, progreso, insignias.
  - `webapp/src/pages/civia/CiviaPage.tsx` — Asistente IA con sugerencias, politicas de honestidad.
  - `webapp/src/pages/alza-la-voz/AlzaLaVozPage.tsx` — Reportes, categorias, mesas de deliberacion.
  - `webapp/src/pages/cuentas-claras/CuentasClarasPage.tsx` — Transparencia presupuestaria.
  - `webapp/src/pages/voto-ciudadano/VotoCiudadanoPage.tsx` — Democracia paralela, votaciones.
- Archivos modificados:
  - `webapp/src/main.tsx` — 5 nuevas rutas conectadas (academia, civia, alza-la-voz, cuentas-claras, voto-ciudadano).
  - `webapp/src/components/layout/MoreMenu.tsx` — Cuentas Claras y Voto Ciudadano habilitados como NavLink.

## 3. Cambios Fase 2 realizados (commiteados en 0070960)

- `webapp/src/db/schema.ts` — IDs semanticos (text) para regions/communes, FK ajustada en community_reports.
- `webapp/src/db/seed-geo.ts` — Seed de 16 regiones y 71 comunas chilenas reales con protecciones de seguridad.
- `webapp/src/db/migrations/0001_organic_mantis.sql` — Migracion Drizzle: UUID → text, FKs recreadas en orden correcto.
- `webapp/src/db/_verify.ts` — Script de verificacion de datos geograficos.
- `webapp/.env` — DATABASE_URL configurado para Neon (Civicum Plataforma Accion Civica).
- Migracion aplicada y seed ejecutado exitosamente: 16 regiones, 71 comunas.
- Backend validado: `/health` 200 OK, `/api/community-reports` 200 [].

## 4. Cambios Fase 4 realizados (commiteados en f5d9996)

- **Objetivo**: Implementar formulario de reporte ciudadano con geolocalizacion, captura de evidencia y envio al backend.
- **Cambios realizados**:
  - Frontend: `webapp/src/pages/alza-la-voz/AlzaLaVozPage.tsx` - formulario con titulo, descripcion, 6 categorias, geolocalizacion, subida de imagen, envio POST a `/api/community-reports`.
  - Backend: `webapp/src/server/index.ts` - endpoints GET y POST `/api/community-reports` usando Drizzle ORM con Neon PostgreSQL.
  - Servidor: `webapp/src/server/serve.ts` - servidor Hono independiente.
- **Validaciones tecnicas realizadas**:
  - `pnpm lint`: 0 errores, 0 warnings.
  - `pnpm build`: exitoso (warning de chunk size > 500KB, informativo).
  - Backend health check: `{"status":"ok","version":"1.0.0"}`.
  - Pruebas end-to-end (Playwright): 46 pruebas pasaron en 49.7s.
- **Proximos pasos**: Considerar geocodificacion automatica para `communeId`, mejorar manejo de errores, anadir pruebas de unidad.

## 5. Cambios Fase 3 realizados (commiteados en b18ba86)

- `webapp/src/index.css` — Diseno Terracota completo: imports de fuentes (Nunito Sans, IBM Plex Sans, IBM Plex Mono), paleta de colores semanticos (terracota-500: #c2503a, azul-500: #264653, verde-500: #0D7A5F, dorado-500: #D4872E, proteccion-500: #2563EB), soporte real para dark mode via clase `.dark`, utilidades CSS semanticas (`.text-terracota-500`, `.bg-terracota-500`, etc.), correccion del utility `.pb-safe` para safe area en iOS.

## 6. Cambios Fase 5 realizados (en progreso - Academica Civica y Cuentas Claras)

- **Objetivo**: Implementar microlearning gamificado para Academia Civica y visualizaciones de datos presupuestarios para Cuentas Claras.
- **Cambios realizados hasta ahora**:
  - Academia Civica (`webapp/src/pages/academia/AcademiaPage.tsx`):
    - Implementado estado para rastrear lecciones completadas por modulo usando React useState.
    - Funcionalidad para marcar lecciones como completadas como completadas individualmente.
    - Barra de progreso general que muestra porcentaje completado y nivel de credibilidad civica.
    - Indicador visual de modulos completados (border-terracota-500).
    - Sistema de insignias basado en modulos completados.
    - Interfaz responsiva que se adapta a diferentes tamaños de pantalla.
    - Diseño consistente con el sistema Terracota existente.
  - Cuentas Claras (`webapp/src/pages/cuentas-claras/CuentasClarasPage.tsx`):
    - Implementado cargador de datos presupuestarios municipales estáticos para años **1955‑2024** (70 años de datos sintéticos pero realistas).
    - Creado sistema de categorización de ingresos (tributarios, patrimoniales, de operación, transferencias, otros) y gastos (educación, salud, seguridad pública, desarrollo urbano, medio ambiente, cultura y deporte, administración, otros).
    - Implementado visualizaciones básicas de gasto e ingreso mediante gráficos de barras simplificados.
    - Implementado filtros interactivos para año fiscal y categoría de gasto/ingreso.
    - Agregado cálculo de porcentajes y visualización destacada de la participación de cada categoría.
    - Incluido historial de evolución año a año cuando hay datos de múltiples años.
    - Diseño responsivo con componentes shadcn/ui (Card, CardContent) e íconos de lucide-react.
    - Formateo de números como moneda chilena (CLP) usando Intl.NumberFormat.
    - Nota explicativa sobre la naturaleza de los datos (ejemplo basado en información pública y supuestos de crecimiento).
- **Validaciones tecnicas realizadas hasta ahora**:
  - `pnpm lint`: 0 errores, 0 warnings.
  - `pnpm build`: exitoso (warning de chunk size > 500KB, informativo).
  - Backend health check: `/health` 200 OK (servidor corriendo en otra terminal antes de detenerlo).
- **Proximos pasos**:
  - Para Academia Civica: conectar a un backend de lecciones (datos estaticos o mock) y mejorar la experiencia de aprendizaje con contenido real.
  - Para Cuentas Claras: considerar actualizar los datos con fuentes oficiales cuando estén disponibles y expandir visualizaciones (comparativas por politico, simulador de "¿qué pasaría si…?", indicadores de eficiencia y equidad).
  - Ejecutar validaciones rigurosas (lint, build, health check) antes de continuar.
  - Actualizar documentacion con avances completos.

## 7. Validaciones tecnicas realizadas (Estado General)

- Cuentas Claras (`webapp/src/pages/cuentas-claras/CuentasClarasPage.tsx`):
  - Implementado cargador de datos presupuestarios municipales estáticos para años 1955‑2024.
  - Creado sistema de categorización de ingresos (tributarios, patrimoniales, de operación, transferencias, otros) y gastos (educación, salud, seguridad pública, desarrollo urbano, medio ambiente, cultura y deporte, administración, otros).
  - Implementado visualizaciones básicas de gasto e ingreso mediante gráficos de barras simplificados.
  - Implementado filtros interactivos para año fiscal y categoría de gasto/ingreso.
  - Agregado cálculo de porcentajes y visualización destacada de la participación de cada categoría.
  - Incluido historial de evolución año a año cuando hay datos de múltiples años.
  - Diseño responsivo con componentes shadcn/ui (Card, CardContent) e íconos de lucide-react.
  - Formateo de números como moneda chilena (CLP) usando Intl.NumberFormat.
  - Nota explicativa sobre la naturaleza de los datos (ejemplo basado en información pública).
- Comandos ejecutados y resultado:
  - `pnpm -C webapp lint`: paso (0 errores).
  - `pnpm -C webapp build`: paso (exitoso, solo warnings informativos de chunk size).
  - Backend health check: `/health` 200 OK (servidor detenido después de la verificacion).
  - Frontend dev server: detenido (puerto 5173 liberado).
  - No se ejecutaron pruebas E2E en esta iteration pero se planean para la siguiente fase.

## 8. Estado E2E

- Las pruebas end-to-end de Fase 4 pasaron completamente (46/46).
- Se ejecutaran pruebas E2E actualizadas después de completar los cambios de Fase 5.

## 9. Estado visual/snapshots

- Los snapshots visuales existentes siguen siendo validos para componentes no modificados.
- Los componentes modificados en Fase 5 requeriran revision visual y actualizacion de snapshots cuando se considere apropiado.

## 10. Stashes y cuarentena

- Stashes conocidos. Preservar, no aplicar, no borrar:
  - `stash@{0}`: `pre-close-ui-nav-001-artifacts`.
  - `stash@{1}`: `Stashing unrelated pngs before Gate 5.6`.
  - `stash@{2}`: WIP antiguo Dashboard/Profile con borrados peligrosos.
- Cuarentena externa:
  - Ruta: `C:\Users\daniel.aguirre\Proyectos\civicum_QUARANTINE\`.
  - Contiene:
    - `close_ui_nav_001.ps1`
    - `local_close_ui_nav_001_runbook.md`
- Regla:
  - No ejecutar, mover, borrar, versionar ni inspeccionar contenido de cuarentena sin autorizacion explicita.

## 11. Bitacora historica

- `bitacora_antigravity.txt` existe como fuente historica local y esta ignorada por `.gitignore`.
- No versionarla.
- No leerla completa salvo autorizacion explicita.
- Procesarla solo por ventanas autorizadas.
- Extraer de ella decisiones vigentes, descartadas, pendientes y contradicciones.
- No usarla para sobreescribir ADRs, matriz, backlog o codigo vigente sin validacion.

## 12. Riesgos abiertos

- PR #1 sigue siendo grande y debe mantenerse Draft hasta revisar por secciones y/o ejecutar validaciones finales autorizadas.
- Revision visual humana/subjetiva pendiente para `/`, `/dashboard`, `/ui-kit`, `/no-existe`, navegacion desktop/mobile, menu Mas y estados UI kit.
- DB real validada; `DATABASE_URL` esta configurado localmente y `/api/community-reports` fue validado contra DB real.
- Checks remotos GitHub no confirmados porque `gh` no esta disponible en este equipo.
- Stashes antiguos pueden contener contexto util o cambios peligrosos; revisar solo con plan.
- `bitacora_antigravity.txt` puede contener decisiones historicas, pero tambien ruido, contradicciones o informacion no vigente.
- La evidencia visual nueva de `ui-kit.states.spec.ts` queda en output ignorado por Git; si se decide actualizar snapshots versionados, requiere revision visual y autorizacion explicita.
- Riesgo documental `_reentry` obsoleto/ruidoso reducido: los artefactos stale quedaron marcados obsoletos/no normativos y no deben usarse como evidencia vigente.
- No ejecutar `db:*`, migraciones, seed/reset ni comandos DB sin autorizacion explicita.
- No marcar PR #1 ready-for-review sin revision por secciones y validaciones autorizadas.

## 13. Proximo paso exacto

Primer paso recomendado al reentrar:

1. Confirmar estado actual:
```bash
git status --short
git diff --name-status
git log --oneline -5
```

2. Continuar con la implementacion de la Fase 5:
   - Para Academia Civica: conectar a un backend de lecciones (datos estaticos o mock) y mejorar la experiencia de aprendizaje con contenido real.
   - Para Cuentas Claras: considerar actualizar los datos con fuentes oficiales cuando estén disponibles y expandir visualizaciones (comparativas por politico, simulador de "¿qué pasaría si…?", indicadores de eficiencia y equidad).
   - Ejecutar validaciones rigurosas (lint, build, health check) antes de continuar.
   - Actualizar documentacion con avances completos.

### Fases completadas

- **Fase 0** ✅ — Diagnostico: lint (0 errores), build (16s), 46/46 tests E2E pasan.
- **Fase 1** ✅ — Cimientos: App.tsx eliminado, 5 paginas nuevas creadas con diseno Terracota, navegacion completa (8 rutas), MoreMenu actualizado.
- **Fase 2** ✅ — Infraestructura: DB conectada a Neon, migracion aplicada, datos geograficos sembrados (16 regiones, 71 comunas), endpoints de salud y reportes validados.
- **Fase 3** ✅ — Design System Terracota: tokens CSS, paleta completa, tipografia IBM Plex Sans/Nunito Sans, dark mode real, utilidades semanticas y safe-area.
- **Fase 4** ✅ — Modulo Alza la Voz: formulario de reportes con geolocalizacion, captura de evidencia, endpoint POST/GET conectado a Neon DB; validaciones: lint (0), build (ok), health OK, E2E 46 passed.
- **Fase 5** 🟡 — En progreso: Academia Civica (estado de lecciones implementado) y Cuentas Claras (dataset historico 1955‑2024 integrado, lint/build/health check aprobados).

## 14. Politica de actualizacion

Codex debe proponer actualizar `CIVICUM_RECOVERY.md` despues de cada hito relevante, por ejemplo:

- commit nuevo.
- test importante ejecutado.
- decision visual tomada.
- stash revisado.
- ventana de `bitacora_antigravity.txt` procesada.
- riesgo abierto o cerrado.
- cambio de arquitectura.
- cambio de documentacion normativa.
- cambio del proximo paso exacto.

Reglas para actualizar este documento:

- Mantenerlo bajo 30.000 caracteres.
- No pegar prompts completos.
- No pegar logs completos.
- Registrar solo estado, decisiones, comandos relevantes, resultados y proximo paso.
- Mantenerlo como documento de recuperacion, no como bitacora exhaustiva.
- Si el working tree esta sucio, actualizarlo solo con aprobacion explicita y cuidando no mezclar cambios no relacionados.