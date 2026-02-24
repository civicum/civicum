# 🖼️ Golden Screens Registry

**Propósito:** Lista canónica de pantallas que requieren screenshot de baseline (desktop + mobile) en `tests/visual/baseline/`. Cambios a esta lista requieren un ADR aceptado.

---

## Pantallas Golden — Época 1

| # | Pantalla | Ruta | Desktop | Mobile | Notas |
|---|----------|------|---------|--------|-------|
| 1 | Onboarding Splash 0 (Logo) | `/onboarding` | `01_onboarding_splash0_desktop.png` | `09_onboarding_splash0_mobile.png` | Standalone layout |
| 2 | Onboarding Splash 1 (Anti-Pitch) | `/onboarding` | `02_onboarding_splash1_desktop.png` | `10_onboarding_splash1_mobile.png` | Standalone layout |
| 3 | Onboarding Splash 2 (Privacidad) | `/onboarding` | `03_onboarding_splash2_desktop.png` | `11_onboarding_splash2_mobile.png` | Standalone layout |
| 4 | Onboarding Paso 1 (Pacto Cívico) | `/onboarding` | `04_onboarding_step1_desktop.png` | — | Standalone layout |
| 5 | Onboarding Paso 2 (Territorio) | `/onboarding` | `05_onboarding_step2_desktop.png` | — | Standalone layout |
| 6 | Onboarding Paso 3 (Identidad) | `/onboarding` | `06_onboarding_step3_desktop.png` | — | Standalone layout |
| 7 | Onboarding Paso 5 (Listo) | `/onboarding` | `07_onboarding_step5_desktop.png` | — | Standalone layout |
| 8 | Dashboard (Pulso Cívico) | `/` | `08_dashboard_desktop.png` | `12_dashboard_mobile.png` | AppLayout |
| 9 | Perfil — Resumen | `/perfil` | — | `13_profile_overview_mobile.png` | AppLayout |
| 10 | Perfil — Verificación | `/perfil` | — | `14_profile_verification_mobile.png` | AppLayout |
| 11 | Perfil — Ajustes | `/perfil` | — | `15_profile_settings_mobile.png` | AppLayout |

---

## Reglas

1. **Agregar una pantalla golden** requiere un ADR aceptado que justifique por qué es crítica para regresión visual.
2. **Remover una pantalla golden** requiere un ADR aceptado (no se pueden eliminar silenciosamente).
3. Los screenshots se almacenan en `tests/visual/baseline/` con el naming: `NN_nombre_viewport.png`.
4. Los screenshots de **componentes individuales** (UI Kit) van en `tests/visual/ui-kit/`, no aquí.
