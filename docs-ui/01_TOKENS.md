# 01 — Design Tokens

**Propósito:** Centraliza todas las variables de diseño visual de CIVICUM: colores, tipografía, espaciado, sombras, radios y breakpoints. Son los "átomos" del Design System Terracota — todo CSS custom property o clase Tailwind extendida debe originarse aquí.

## Decisiones que debe contener

- [ ] Paleta Terracota completa: 5 escalas cromáticas × 10 tonos (50–900) + semánticos
- [ ] Tipografía: familias (Nunito Sans, IBM Plex Sans, IBM Plex Mono), escala, pesos
- [ ] Espaciado: escala base (4px grid vs 8px grid), márgenes y paddings estándar
- [ ] Sombras: niveles (sm, md, lg, xl, 2xl) con valores exactos
- [ ] Radios: escala (sm, md, lg, xl, 2xl, full)
- [ ] Breakpoints: valores exactos y nombres (xs, sm, md, lg, xl, 2xl)
- [ ] Animaciones: durations, easings, motion tokens
- [ ] Dark mode: mapeo token-por-token de light → dark

## Evidencia exigida en Gate 4

> Toda regla debe tener DOCREF (ej.: `docs/knowledge-base/CIVICUM_Anexo_Design_System_Terracota.docx.md §1-2`) o ADR.

---

## TODO

- Extraer tokens de `CIVICUM_Anexo_Design_System_Terracota.docx.md`
- Cruzar con `tailwind.config.ts` actual para detectar drift
- Documentar mapeo dark mode (actualmente parcial según epoch1_inventory.md G4/G7)
