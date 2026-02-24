# 04 — Sistema de Navegación

**Propósito:** Define todas las rutas, transiciones, guards y la lógica de navegación de CIVICUM. Incluye el mapa completo de URLs, el comportamiento del Smart Dock, deep links, y las reglas de protección de rutas.

## Decisiones que debe contener

- [ ] Mapa completo de rutas con jerarquía (públicas vs protegidas)
- [ ] Lógica de guards: qué protege cada ruta y bajo qué criterio
- [ ] Smart Dock: tabs, iconos, labels, badges, comportamiento activo/inactivo
- [ ] Desktop nav: links, orden, estados hover/active
- [ ] Transiciones entre rutas: animaciones, preservación de scroll
- [ ] Deep links y share URLs: formato y comportamiento
- [ ] Ruta 404: diseño y comportamiento
- [ ] Back navigation: reglas de "Atrás" (especialmente Onboarding → Splash)

## Evidencia exigida en Gate 4

> Toda ruta definida debe existir en `main.tsx`. Todo guard debe tener test E2E. El mapa de navegación debe coincidir con el de `epoch1_inventory.md §7`.

---

## TODO

- Importar mapa de rutas de `epoch1_inventory.md §1 + §7`
- Formalizar inconsistencia de labels detectada en G8 (Smart Dock "Reportar" vs Nav "Alza la Voz")
- Definir ruta 404 (GAP G1 del inventario)
- Documentar cambio atmosférico `data-module` requerido por UI/UX §2.7 (GAP G9)
