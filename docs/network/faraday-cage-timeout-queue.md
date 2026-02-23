# Zonas Muertas (Jaula de Faraday Urbana) (Squad 253)

**Misión:** Reportar desde un ascensor subterráneo. Gestión de timeout.

## 1. El Riesgo de Mutismo Arquitectónico
Si un conserje detecta una filtración de agua mayor en el nivel -4 de un edificio de estacionamientos comerciales (o una balacera en un metro) y decide abrir CIVICUM para emitir una denuncia cívica, el 99% de las aplicaciones React SPA fallarán instantáneamente bajo una "Jaula de Faraday" (Capa de hormigón armado y varillas de hierro que bloquen el 4G). 
El `fetch().catch()` reventará en 10 milisegundos acusando *"No network"*. El conserje creerá que la app "es muy mala", la cerrará, y el reporte crítico se perderá.

## 2. Abrazar la Jaula (Graceful Latency Tolerance)

1.  **Timeouts de Resiliencia Absurda:** CIVICUM no tira la toalla. Las llamadas a las mutaciones críticas API cambian de un timeout estricto corporativo (3000ms) a un Tolerance-Timer elástico (30.000ms - 30 segundos). La UI en el teléfono mostrarán a Civia "Mascando el Reporte" (Animación lúdica "Buscando antena salvaje...") para entretener al usuario y evitar el cierre de la PWA.
2.  **Fallback Ciego:** Si a los 31 segundos la conexión no vuelve a negociar el SSL Handshake con Vercel, el Promise cae pero **sin mensaje de Error**. Cambia a estado `[Guardado en el Teléfono - Se enviará al salir a la superficie]`. El Service Worker inyecta el reporte con Timestamp falso de la hora de la red al almacén de la caché offline.
