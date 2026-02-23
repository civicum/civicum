# Internet Fragmentada (Splinternet) (Squad 291)

**Misión:** Chile queda aislado (Cables transoceánicos caen). ¿CIVICUM muere?

## 1. El Riesgo de la Nube Aristocrática Rehen
En la actualidad, el 90% del internet chileno viaja hacia Ashburn Virginia (AWS `us-east-1`). Un Estallido 2.0 con censura gubernamental de cables ópticos internacionales, o un cataclismo tectónico grado 9 en Valparaíso, aislará a Chile de la Matrix global. 
Si eso pasa, CIVICUM Hosted-in-Vercel no cargará jamás. En el momento de mayor urgencia organizativa de la historia de la nación (Para repartir agua, coordinar barricadas o rescatar víctimas), la plataforma que prometió ayudar se ahogará en la nube inalcanzable.

## 2. Redundancia de Frontera Autónoma (PIT Chile)

1.  **Espejo Cero en Subtel IXP:** Además del Hosted-App principal, CIVICUM mantiene un "Docker Image Compacto" (Lite Version) dormido en servidores locales chilenos atados directamente a los Puntos de Intercambio de Tráfico (PIT Chile). Si el cable submarino global cae, el enrutamiento BGP interno del país sigue vivo. El DNS local `emergencia.civicum.cl` despertará sirviendo la App solo a redes Wom/Entel/Movistar usando Peering local incondicional (Desconectados del mundo, conectados entre nosotros).
2.  **Autonomía Mesh-Network (P2P Bluetooth):** La PWA de CIVICUM cacheará un ServiceWorker que, al detectar pérdida total de "Ping" a Next.js, enciende la alerta *`Red Mesh`*. Habilita el envío de mensajes de reporte de la junta de vecinos (Ej: "Necesitamos insulina") a través del protocolo Bluetooth Low Energy (BLE) pasando el mensaje criptográfico al teléfono del vecino, de 30 metros en 30 metros, hasta dar con un equipo que tenga conexión y despache la base de datos (Sneakernet Arquitectónico).
