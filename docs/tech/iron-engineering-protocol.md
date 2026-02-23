# Protocolo de Ingeniería de Hierro (Squad Delta)

**Squad:** 6. Escuadrón Delta: Arquitectura Técnica  
**Misión:** Revisión profunda del stack, límites de Vercel/Neon y escalabilidad teórica.  
**Responsables:** Arquitecto Software, Frontend Lead, Backend Lead, Performance Web, SRE.

## 1. El Stack del Pueblo
Nuestra tecnología debe ser accesible, barata y fácil de mantener por voluntarios.
- **Frontend:** Next.js (Static Export preferred para IPFS).
- **Backend:** Supabase / Postgres (Neon).
- **Offline:** PWA con Service Workers agresivos (Workbox).

### Restricciones de Diseño
1.  **No Vendor Lock-in Crítico:** Si Vercel cierra, debemos poder movernos a un VPS linux de $5 USD en 24 horas.
2.  **SQL Estándar:** Evitar funciones propietarias de Postgres que no estén en SQLite (para auto-hosting local).
3.  **Zero-Build-Step (Ideal):** El código debe ser comprensible sin 50 pasos de transpilación.

## 2. Escalabilidad de "Golpe Viral"
El sistema debe soportar picos de tráfico masivos (ej: una denuncia nacional en TV).
- **Estrategia CDN:** Todo lo público se cachea en el borde (Edge).
- **Throttling de Escritura:** Si la DB se satura, el frontend pasa a modo "Queue" (guarda en local y reintenta después).
- **Degradación Graciosa:** Si falla la búsqueda, la home sigue funcionando. Si falla la IA, el reporte manual sigue funcionando.

## 3. Límites de Capa Gratuita (The Ceiling)
Monitorizamos activamente:
- **Neon:** Horas de cómputo y almacenamiento.
- **Vercel:** Bandwidth y Serverless Function Invocations.
- **OpenAI:** Token limits.

*Si llegamos al 80% del límite gratuito, se activa el protocolo de "Modo Ahorro" (text-only, no IA).*
