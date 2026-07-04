# 🖼️ Golden Screens Registry

**Propósito:** Lista canónica de pantallas que requieren evidencia visual (idealmente desktop + mobile) en `tests/visual/baseline/`. Época 1 contiene entradas parciales que deben cerrarse en Gate 5+. Cambios a esta lista requieren un ADR aceptado.

---

## Pantallas Golden — Época 1

| # | Pantalla | Ruta | Step Key | Cómo reproducir | Desktop | Mobile | Estado |
|---|----------|------|----------|-----------------|---------|--------|--------|
| 1 | Onboarding Splash 0 (Logo) | `/onboarding` | `splash0` | Limpiar localStorage → abrir `/` | `01_onboarding_splash0_desktop.png` | `09_onboarding_splash0_mobile.png` | Completo |
| 2 | Onboarding Splash 1 (Anti-Pitch) | `/onboarding` | `splash1` | splash0 → click "Descubrir" | `02_onboarding_splash1_desktop.png` | `10_onboarding_splash1_mobile.png` | Completo |
| 3 | Onboarding Splash 2 (Privacidad) | `/onboarding` | `splash2` | splash1 → click "Continuar" | `03_onboarding_splash2_desktop.png` | `11_onboarding_splash2_mobile.png` | Completo |
| 4 | Onboarding Paso 1 (Pacto Cívico) | `/onboarding` | `step1` | splash2 → click "Siguiente" | `04_onboarding_step1_desktop.png` | — | Parcial |
| 5 | Onboarding Paso 2 (Territorio) | `/onboarding` | `step2` | step1 → click "Acepto" | `05_onboarding_step2_desktop.png` | — | Parcial |
| 6 | Onboarding Paso 3 (Identidad) | `/onboarding` | `step3` | step2 → seleccionar comuna → "Siguiente" | `06_onboarding_step3_desktop.png` | — | Parcial |
| 7 | Onboarding Paso 4 (Elige tus Batallas) | `/onboarding` | `step4` | step3 → click "Entendido" | — | — | Pendiente |
| 8 | Onboarding Paso 5 (Listo) | `/onboarding` | `step5` | step4 → click "Siguiente" | `07_onboarding_step5_desktop.png` | — | Parcial |
| 9 | Dashboard (Pulso Cívico) | `/` | `dashboard` | Completar onboarding → redirect `/` | `08_dashboard_desktop.png` | `12_dashboard_mobile.png` | Completo |
| 10 | Perfil — Resumen | `/perfil` | `profile-overview` | Dashboard → click "Mi Perfil" | — | `13_profile_overview_mobile.png` | Parcial |
| 11 | Perfil — Verificación | `/perfil` | `profile-verification` | Perfil → tab "Estado de Verificación" | — | `14_profile_verification_mobile.png` | Parcial |
| 12 | Perfil — Ajustes | `/perfil` | `profile-settings` | Perfil → tab "Ajustes App" | — | `15_profile_settings_mobile.png` | Parcial |

**Leyenda de Estado:**
- **Completo:** Screenshot desktop + mobile presentes
- **Parcial:** Falta uno de los dos viewports
- **Pendiente:** Sin screenshots

---

## Reglas

1. **Agregar una pantalla golden** requiere un ADR aceptado que justifique por qué es crítica para regresión visual.
2. **Remover una pantalla golden** requiere un ADR aceptado (no se pueden eliminar silenciosamente).
3. Los screenshots se almacenan en `tests/visual/baseline/` con el naming: `NN_nombre_viewport.png`.
4. **Convención de naming:** `Step Key` es el ID canónico de cada pantalla (estable e inmutable). `NN_` es solo orden de sorting histórico — no se renumeran archivos al insertar pantallas nuevas. Pantallas nuevas reciben el siguiente `NN_` disponible.
5. Los screenshots de **componentes individuales** (UI Kit) van en `tests/visual/ui-kit/`, no aquí.
6. **Una pantalla solo cuenta para "Done UI → Visual baseline" cuando su Estado = Completo.**
7. **Completar viewport faltante (Parcial → Completo):** cuando una pantalla existente está Parcial y se agrega el screenshot faltante (desktop o mobile), debe usar el **mismo `NN_`** y el **mismo basename** que el screenshot existente; solo cambia el sufijo de viewport (`_desktop` / `_mobile`). Esto NO cuenta como pantalla nueva y NO consume un `NN_` nuevo.
