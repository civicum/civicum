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

> Toda ruta definida debe existir en el router entrypoint del proyecto (archivo donde se declara el router). Todo guard debe tener test E2E. El mapa de navegación debe coincidir con el de `epoch1_inventory.md §7`.

## Reglas consolidadas (Gate 4)

### Pantalla 404 (ADR-0004)

**Scope:** Solo para rutas dentro de AppLayout (Smart Dock visible). 404 para flujos standalone/onboarding queda fuera de scope (requiere ADR separado).

**Requisitos:**
1. Ruta catch-all (`path="*"`) en el router
2. Logo CIVICUM centrado
3. Copy aprobado: "Esta página no existe — pero tu camino cívico sí." + "Quizás la dirección cambió o escribiste algo distinto."
4. CTA primario: ir al Dashboard. CTA secundario: explorar módulos. *(Nota: validar en Gate 5+ que "explorar módulos" sea accesible sin login; si requiere auth, usar guard o redirect.)*
5. Smart Dock permanece visible (no standalone layout)
6. 404 **no es golden por defecto**; se agrega a `golden_screens.md` solo vía ADR explícito.

> **DOCREF:** ADR-0004 (ACCEPTED) + UI-NAV-008 + S01 → §15.1 (L1500), §15.4 (L1532)

---

## TODO

- Importar mapa de rutas de `epoch1_inventory.md §1 + §7`
- ~~Formalizar inconsistencia de labels detectada en G8 (Smart Dock "Reportar" vs Nav "Alza la Voz")~~ → Resuelto por ADR-0009
- ~~Definir ruta 404 (GAP G1 del inventario)~~ → Resuelto por ADR-0004
- Documentar cambio atmosférico `data-module` requerido por UI/UX §2.7 (GAP G9)

