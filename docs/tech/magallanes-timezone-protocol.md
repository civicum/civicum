# 🕰️ HUSO HORARIO MAGALLANES (MULTITIMEZONE)

**Versión:** 1.0
**Squad:** 271 Cronos-1
**Problema:** Un concurso se cierra a las "23:59". ¿Hora de Santiago o de Punta Arenas? Si un magallánico sube a las 23:30 (su hora) y Santiago son las 22:30, ¿pasa? Si es al revés, ¿pierde?

---

## 🎯 La Relatividad Geográfica
Chile tiene 3 husos horarios activos: Continental (UTC-3/4), Insular (UTC-5/6) y Magallanes (UTC-3 permanente).

## 🛡️ ESTANDARIZACIÓN TEMPORAL

### 1. Storage en UTC, Display en Local
*   **Regla de Oro:** En base de datos, TODO se guarda en **UTC (Coordinated Universal Time)**. Sin excepción.
*   En el frontend, se convierte al tiempo local del navegador del usuario.

### 2. Plazos Legales Explícitos
*   Las bases de licitación o votación nunca dicen "hasta las 23:59".
*   Deben decir: **"Hasta las 23:59 hora Continental (UTC-4)"**.
*   Si el usuario está en Magallanes, la UI le muestra: *"Cierra a las 00:59 de tu hora local"*.

### 3. "The Midnight Edge Case"
*   Evitamos cerrar procesos a medianoche. Es ambiguo.
*   Cerramos procesos a las **12:00 PM (Mediodía)** para evitar confusiones de cambio de día y horario de verano/invierno inesperado.

---
*El tiempo es relativo, pero la ley debe ser absoluta.*
