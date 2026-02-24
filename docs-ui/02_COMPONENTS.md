# 02 — Catálogo de Componentes UI

**Propósito:** Inventario autoritativo de todos los componentes UI de CIVICUM: qué existe, qué variantes tiene, qué API pública expone, y cuáles faltan. Funciona como el "catálogo de piezas" del sistema de diseño.

## Decisiones que debe contener

- [ ] Lista de componentes instalados (shadcn/ui + custom) con variantes
- [ ] API pública de cada componente: props obligatorias, opcionales, y defaults
- [ ] Reglas de composición: qué componentes pueden anidarse y cómo
- [ ] Componentes pendientes de instalación (gap vs catálogo del Master Plan)
- [ ] Iconografía: catálogo de íconos Lucide utilizados + convenciones (stroke, size)
- [ ] Componente `CivicumLogo`: variantes, tamaños y reglas de uso

## Evidencia exigida en Gate 4

> Todo componente listado debe tener correspondencia 1:1 con un archivo en `src/components/ui/` o `src/components/`. Toda variante debe estar demostrada en al menos un screenshot de baseline.

---

## TODO

- Importar lista de componentes instalados desde `epoch1_inventory.md §4`
- Cruzar con catálogo requerido del Master Plan (§Semana 2)
- Documentar API de cada componente shadcn/ui en uso
