# Self-Hosting Municipal Guidelines (Squad 198)

**Misión:** ¿Puede un municipio instalar su propio Civicum local (Self-hosted)?

## 1. Riesgo de Centralización (SaaS Hub)
CIVICUM está pensado como una "Plaza Pública Nacional" única alojada en el dominio `civicum.cl`. Pero, si un municipio remoto en zona extrema de telecomunicaciones (Ej: Isla Juan Fernández) o una comunidad indígena autónoma en zona de conflicto requiere soberanía total de datos, la plataforma actual basada fuertemente en servicios Serverless gringos (Vercel, Neon, Clerk) no servirá.

## 2. La Versión "Civicum-Espejo" (Docker Monolith)
Para el caso de uso `Enterprise-Soberano`, se debe mantener viva en el monorepo una configuración `docker-compose.baremetal.yml`.

### Requisitos de Arquitectura Desconectada
*   **Desacople:** No se obligará el uso de Clerk (Auth0). El modo Espejo debe soportar Login local tradicional (Postgres Auth) o integrarse a un Active Directory municipal.
*   **Base de datos Local:** Se reemplaza el conector *Neon Serverless* por una imagen canónica nativa `postgres:16-alpine`.
*   **Ejecución Vercel-free:** Se utiliza el modo "Standalone Export" de Next.js, empaquetado en un contenedor Node.js puro capaz de correr detrás de un Nginx reverso en un servidor físico alojado en la DIDECO comunal.

El Estado y la comunidad tienen derecho a ejecutar las herramientas democráticas bajo sus propias reglas físicas y de fibra oscura.
