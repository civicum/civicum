# Service Worker Cache Strategy (Squad 178)

**Auditoría:** Roles 14 (Arquitecto), 15 (Frontend), 70 (Support), 06 (UX Researcher), 17 (Performance)

## El Riesgo del Caché Zombie
CIVICUM está construido como una PWA offline-first. Los Service Workers almacenan todo el App Shell en el dispositivo del usuario (`CacheStorage`). Si se descubre un fallo de seguridad crítico en las reglas de votación, el equipo despliega el parche en Vercel. 
Sin embargo, un usuario con el Caché Zombie seguirá ejecutando el viejo código de Javascript desde su teléfono. La democracia operaría con dos reglas distintas al mismo tiempo. Mutación silenciosa.

## 1. Flujo "Update on Reload" (La Nuclear Option)
Las PWA por defecto esperan a que todas las pestañas de la aplicación se cierren para actualizarse (Lifecycle `waiting`). CIVICUM no puede permitirse esta latencia legal.

### Configuración de Workbox
El Service Worker debe configurarse para saltar la línea y reclamar los clientes inmediatamente:

1.  **Instalación Forzada:** Se invoca `self.skipWaiting()` durante el evento `install`.
2.  **Toma de Control:** Se invoca `clients.claim()` durante el evento `activate`.

Esto significa que cuando CIVICUM detecta un nuevo Service Worker en background, asume el control del hardware al instante y forzará que las próximas llamadas a red pasen a la nueva versión.

## 2. Invalidador Forzoso de Emergencia (Kill-Switch)
Si el Caché IndexedDB o del Service Worker se corrompe por un error humano, se necesita un botón de pánico global en Vercel para forzar una amnesia en todos los teléfonos del país.

Se implementa el header nuclear:
`Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"`

Ante una brecha de Caché Zombie Grado 0:
1.  El Admin enciende la flag de emergencia.
2.  Vercel Edge interviene todos los request añadiendo este Header.
3.  El navegador borra de inmediato el caché de la PWA, cookies, y expulsa al Service Worker corrupto. El usuario experimentará un log-out abrupto, es el costo de sanear el hardware.
