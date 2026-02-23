# El Apagón Nacional: Offline-First Survival (Squad 226)

**Misión:** Chile sin luz por 48 horas. ¿Civicum sirve de algo offline?

## 1. El Riesgo del Cero Cívico en Catástrofe (Cisne Negro Físico)
El 27F (2010), un terremoto 8.8 apagó las comunicaciones y la red eléctrica del centro-sur. En un estallido futuro o catástrofe telúrica, la fibra óptica nacional caerá. 
Si CIVICUM se convierte en una simple pantalla blanca `"ERR_NAME_NOT_RESOLVED"` en los celulares, deja de ser la plaza pública precisamente cuando la población más requiere organización de subsistencia, información y protección de la vida.

## 2. La PWA en Modo "Store and Forward" (Zombie Network)
CIVICUM debe mutar a arquitectura Local-First.

1.  **Cacheo de Emergencia Preventivo:** La Progressive Web App (Service Workers en IndexedDB) siempre pre-cachea los manuales básicos de primeros auxilios y el "Directorio PDF Textual" con las direcciones estáticas de Bomberos, FACh y Comisarías de la comuna local del usuario de forma proactiva cada 7 días.
2.  **Bandeja de Salida (Outbox Queue):** Si un vecino intenta publicar un *"Alza la Voz"* pidiendo agua o reportando pillaje sin 4G activo, la UI intercepta el botón `Send()`. CIVICUM no fracasa; guarda el JSON del reporte, la foto y el GPS Timestamped forense en el almacenamiento del navegador, mostrando el estado **[Encolado Localmente]**.
3.  **Sync-Zombie (Mesh Latent):** Cuando el teléfono reciba 1 solo bit de señal 3G (Background Sync API de Android), la aplicación inyectará el Payload acumulado a los servidores Vercel de manera asíncrona, diseminando los gritos de auxilio acumulados durante el apagón en un solo torrente.
