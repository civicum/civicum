# Proyecto Sunset: Cierre y Liberación de Datos (Squad 196)

**Misión:** Si el proyecto cierra, ¿cómo liberamos los datos a la comunidad de forma segura?

## 1. Riesgo de "Vendor Lock-in" de la Muerte
Si la ONG o grupo de voluntarios detrás de CIVICUM se queda sin fondos para operar los servidores Vercel/Neon, el peor escenario es apagar los servidores y que el historial cívico chileno (mesas de trabajo, votos, auditorías a autoridades) se evapore. Esto viola el principio fundamental Open Data.

## 2. Protocolo Sunset (Data Release)
Frente a un inminente "Sunset" (cierre de operaciones a 90 días):

1.  **Dumb-Down Mode:** La plataforma entra en estado *Read-Only*. El backend desactiva todos los *cron jobs*, integraciones OIDC (ClaveÚnica) y sistemas de notificaciones (Sengrid/Twilio) para hundir instantáneamente los costos operativos a casi 0.
2.  **Anonimización Forense:** Un script `npm run db:anonymize` altera todos los campos PII (Nombres Reales, IPs, Emails, Teléfonos, RUT) a hashes no reversibles, excepto para las **Cuentas Nivel 4 (Autoridades Oficiales)** cuyas promesas y respuestas son públicas por ley.
3.  **Exportación Torrent y SQLite:** 
    *   La base de datos relacional Neon se comprime en un único archivo `civicum_history_final.sqlite`.
    *   Los assets de Cloudflare R2 (Fotos de incidencias) se zipifican.
    *   El código fuente de frontend y backend se congela en GitHub.
    *   Todo se semilla mediante un archivo `.torrent` publicado en la portada de la web de cierre y anclado a IPFS.

**El legado sobrevivirá a las finanzas.**
