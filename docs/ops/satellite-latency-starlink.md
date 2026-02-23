# 🛰️ LATENCIA SATELITAL (STARLINK RURAL)

**Versión:** 1.0
**Squad:** 254 Átomo-4
**Escenario:** Un usuario en la Patagonia conectado por satélite. Ancho de banda alto (100Mbps) pero latencia terrible (IPO Ping > 600ms).

---

## 🎯 El Retardo Espacial
La señal viaja al espacio y vuelve. El "lag" hace que los botones parezcan rotos.

## 🛡️ UI REACTIVA, DATA LENTA

### 1. Feedback Inmediato (< 100ms)
*   Cuando el usuario toca un botón, el botón **debe** reaccionar (cambiar color, animarse) localmente en < 100ms, aunque la respuesta del servidor tarde 2 segundos.
*   Nunca esperar el `200 OK` para dar feedback visual de la interacción.

### 2. Prefetching Predictivo
*   Si el cursor (o el scroll) se acerca a un link, empezamos a descargar el JSON antes de que haga clic.
*   Ganamos 300-500ms, compensando el viaje al espacio.

### 3. Websockets vs. Long Polling
*   En conexiones satelitales inestables, el handshake SSL repetido es costoso.
*   Mantenemos un **Websocket persistente** abierto para reducir el overhead de negociación en cada request HTTP.

---
*La velocidad de la luz es constante, nuestra paciencia no.*
