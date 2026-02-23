# Huso Horario Magallanes e Isla de Pascua (Squad 271)

**Misión:** Chile tiene horarios diferentes. ¿Los plazos legales se calculan bien?

## 1. El Riesgo de la Extradición Temporal (Timezone Bug)
Una ley municipal de Punta Arenas establece que las objeciones a un proyecto inmobiliario vencen a las 23:59 del viernes. Un vecino austral sube su documento a las 23:30 (Hora de Magallanes UTC-3). 
Si CIVICUM Vercel procesa el Timestamp basándose en la Hora Local de Santiago (UTC-4) o en UTC Puro, y no hay conversión específica, el sistema podría marcar la entrada como *"Sábado 00:30, Fuera de Plazo"*. El vecino pierde su derecho constitucional a reclamo ambiental por un simple Parse Exception de Javascript.

## 2. Normalización de Cero Absoluto (Z-Time)

1.  **Backend UTC Estricto:** Prohibido el uso de la función `new Date()` sin casteos UTC implícitos en PostgreSQL. Drizzle ORM y Node.js deben procesar, guardar y comparar todos los plazos legales absolutos en la base de datos usando ISO-8601 con letra `Z` al final (`2026-02-20T03:59:00.000Z`).
2.  **Renderizado Relativo al Geo-Dispositivo:** La Interfaz (Next.js Client Components) solo "pinta" la hora traduciendo `Intl.DateTimeFormat().resolvedOptions().timeZone` del navegador del vecino, mostrando "Vence a tus 23:59".
3.  **Conflict Binding:** En discusiones de leyes nacionales cruzadas que afectan islas (Rapa Nui UTC-6), el Header de la Iniciativa muestra el Deadline en ambos horarios simultáneamente: *"Cierre de Urna: 18:00 Continental / 16:00 Insular"*, eliminando ambigüedades civiles.
