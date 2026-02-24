# 🖼️ Golden Screens Registry

**Propósito:** Lista canónica de pantallas que requieren evidencia visual (idealmente desktop + mobile) en `tests/visual/baseline/`. Época 1 contiene entradas parciales que deben cerrarse en Gate 5+. Cambios a esta lista requieren un ADR aceptado.

---

## Pantallas Golden — Época 1

| # | Pantalla | Ruta | Step Key | Cómo reproducir | Desktop | Mobile | Estado |
|---|----------|------|----------|-----------------|---------|--------|--------|
| 1 | Onboarding Splash 0 (Logo) | `/onboarding` | `splash0` | Limpiar localStorage → abrir `/` | `01_…desktop.png` | `09_…mobile.png` | Completo |
| 2 | Onboarding Splash 1 (Anti-Pitch) | `/onboarding` | `splash1` | splash0 → click "Descubrir" | `02_…desktop.png` | `10_…mobile.png` | Completo |
| 3 | Onboarding Splash 2 (Privacidad) | `/onboarding` | `splash2` | splash1 → click "Continuar" | `03_…desktop.png` | `11_…mobile.png` | Completo |
| 4 | Onboarding Paso 1 (Pacto Cívico) | `/onboarding` | `step1` | splash2 → click "Siguiente" | `04_…desktop.png` | — | Parcial |
| 5 | Onboarding Paso 2 (Territorio) | `/onboarding` | `step2` | step1 → click "Acepto" | `05_…desktop.png` | — | Parcial |
| 6 | Onboarding Paso 3 (Identidad) | `/onboarding` | `step3` | step2 → seleccionar comuna → "Siguiente" | `06_…desktop.png` | — | Parcial |
| 7 | Onboarding Paso 5 (Listo) | `/onboarding` | `step5` | step3 → "Entendido" → step4 → "Siguiente" | `07_…desktop.png` | — | Parcial |
| 8 | Dashboard (Pulso Cívico) | `/` | `dashboard` | Completar onboarding → redirect `/` | `08_…desktop.png` | `12_…mobile.png` | Completo |
| 9 | Perfil — Resumen | `/perfil` | `profile-overview` | Dashboard → click "Mi Perfil" | — | `13_…mobile.png` | Parcial |
| 10 | Perfil — Verificación | `/perfil` | `profile-verification` | Perfil → tab "Estado de Verificación" | — | `14_…mobile.png` | Parcial |
| 11 | Perfil — Ajustes | `/perfil` | `profile-settings` | Perfil → tab "Ajustes App" | — | `15_…mobile.png` | Parcial |

**Leyenda de Estado:**
- **Completo:** Screenshot desktop + mobile presentes
- **Parcial:** Falta uno de los dos viewports
- **Pendiente:** Sin screenshots

---

## Reglas

1. **Agregar una pantalla golden** requiere un ADR aceptado que justifique por qué es crítica para regresión visual.
2. **Remover una pantalla golden** requiere un ADR aceptado (no se pueden eliminar silenciosamente).
3. Los screenshots se almacenan en `tests/visual/baseline/` con el naming: `NN_nombre_viewport.png`.
4. Los screenshots de **componentes individuales** (UI Kit) van en `tests/visual/ui-kit/`, no aquí.
5. **Una pantalla solo cuenta para "Done UI → Visual baseline" cuando su Estado = Completo.**
