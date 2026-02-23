# Hyper-Scale Survival Protocol (Squad 199)

**Misión:** Todo el país usa la app por un paro nacional. El gobierno colapsa por exceso de solicitudes. ¿Qué hacemos?

## 1. El Riesgo del Éxito Catastrófico (DDoS Social)
Octubre de 2019 es un ejemplo de crisis cívica distribuida. Si CIVICUM sufre un pico mediático y 3 millones de ciudadanos (15% del padrón electoral) entran simultáneamente a votar a una iniciativa o ver el Feed de Crisis, la base de datos alcanzará límites de conexiones TCP/IP concurrentes.
Dado el modelo de pagos "Zero-Cost / Usage-based", esto podría generar dos colapsos:
A) Caída funcional por saturación de CPU de Base de Datos.
B) Ruina económica (Facturas sobre $50,000 USD al día por Compute/bandwidth).

## 2. Escalabilidad Degradada (Stale-While-Revalidate Aggressive)
En modo Hyper-Scale, la aplicación renuncia a la sincronización transaccional 1 a 1 para salvar la infraestructura.

1.  **Dumb CDN:** Cloudflare sube su caché a modo *Cache Everything*. El "Feed Cívico Principal" pasa de ser renderizado por Vercel Edge dinámicamente, a ser servido como un HTML estático regenerado cada 5 minutos (`revalidate: 300` en Next.js App Router).
2.  **Queue de Votos en Memoria:** Si el `/api/votes` detecta latencia en la DB > 1 seg, pasa a escribir masivamente a un Upstash Redis o a una mensajería (Kafka/SQS) en lugar de intentar insertar directamente en Postgres en forma paralela. Un Worker procesará y consolidará los votos en batch.
3.  **Tope Financiero Estricto:** Si se vulnera el límite del **Fondo Frío de Finanzas F-50**, un Cloudflare Worker se enciende y devuelve a los usuarios Free/No-autenticados una pantalla estática SVG de *"Capacidad Cívica Temporalmente Superada (Estamos haciendo fila)"* ahorrando ancho de banda.
