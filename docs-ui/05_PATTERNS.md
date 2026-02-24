# 05 — Patrones de UI Recurrentes

**Propósito:** Cataloga los patrones de interacción repetibles en CIVICUM: cómo se construyen formularios, cards de métricas, listas paginadas, modales de confirmación, y otros elementos que aparecen en múltiples pantallas. Evita reinventar la rueda.

## Decisiones que debe contener

- [ ] Patrón Card de Métrica: estructura (icono + badge + número + subtítulo + footer)
- [ ] Patrón Card de Acción (CTA): estructura (icono + título + descripción + botón)
- [ ] Patrón Formulario Multi-Step: estructura (indicador de progreso + contenido + nav)
- [ ] Patrón Lista Paginada: paginación (NO infinite scroll, F-05), filtros, ordenamiento
- [ ] Patrón Modal de Confirmación: estructura, botones, escape/overlay behavior
- [ ] Patrón Tab Panel: estructura (triggers + contenido), comportamiento responsivo
- [ ] Patrón Glassmorphism: cuándo usar, valores de backdrop-blur/opacity/ring

## Evidencia exigida en Gate 4

> Todo patrón debe tener al menos 1 ejemplo concreto implementado en código y screenshot de referencia.

---

## TODO

- Extraer patrones de `DashboardPage.tsx` (Card Métrica, Card CTA)
- Extraer patrón Tab Panel de `ProfilePage.tsx`
- Extraer patrón Multi-Step de `OnboardingFlow.tsx`
- Formalizar uso de Glassmorphism (usado en Onboarding cards y theme toggle)
