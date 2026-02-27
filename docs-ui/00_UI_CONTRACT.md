# 00 — Contrato Maestro de UI

**Propósito:** Define las garantías que la interfaz de CIVICUM ofrece al usuario final y al equipo de desarrollo. Es el "contrato social" visual: qué puede esperar un ciudadano al abrir la app, y qué debe cumplir un developer al entregar una pantalla.

## Decisiones que debe contener

- [ ] Principios de diseño (máx 5) con prioridad explícita
- [ ] Promesas al usuario: velocidad percibida, accesibilidad, consistencia, offline
- [ ] Restricciones de UI (ej.: "nunca infinite scroll", "nunca colores partidistas")
- [ ] Definición de "calidad visual mínima" por tier de dispositivo (HIGH/MID/LOW)
- [ ] SLA visual: tiempos máximos aceptables de renderizado por componente

## Evidencia exigida en Gate 4

> Toda regla debe tener DOCREF (referencia a documento fuente en `/docs/`) o ADR en `/adr-ui/`.

---

<!-- TODO: Completar con reglas extraídas de docs/knowledge-base/ y decisiones F-01 a F-47 -->

## Reglas consolidadas (Gate 4)

### Dark mode (ADR-0005)

Dark mode **no es bloqueante** para Época 1–2; se pospone a Época 3+ con spec mínima. Requisitos cuando se implemente:

1. Tokens semánticos `--color-*` (no valores duros)
2. Activación vía clase CSS (`.dark`)
3. Contraste WCAG AA en ambos modos

> **DOCREF:** ADR-0005 (ACCEPTED) + S01 → Done UI → "Dark mode" (L82)

---

## TODO

- Extraer principios de `CIVICUM_Identidad_de_Marca_Propuesta_Mision_Vision_Manifiesto.md`
- Importar restricciones de `CIVICUM_Anexo_Decisiones_F01_F47` (F-05: sin algoritmos, F-08: badges opcionales, etc.)
- Definir SLA visual basado en `docs/performance/` y Core Web Vitals del Master Plan

