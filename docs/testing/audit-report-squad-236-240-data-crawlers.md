# 🕷️ REPORTE DE AUDITORÍA: SCRAPING Y CRAWLERS (SQUADS 236-240)
**Fecha:** 20 Febrero 2026 | **Auditor:** Antigravity

## 1. Resumen de Hallazgos (Guerra de Datos)
Esta fase audita el motor de extracción de información desde fuentes gubernamentales estáticas o prehistóricas.

*   **Sq-236 (Bloqueo IP Institucional):** Si extraemos datos masivos de la web del Congreso o MercadoPúblico, los firewalls (WAF) estatales bloquearán la IP de Vercel/CIVICUM calificándonos como ataque DDoS en 5 segundos.
*   **Sq-237 (Cambio HTML Sorpresa):** El Estado chileno suele rediseñar sitios web (ej. SERVEL) rompiendo los selectores DOM de los scrapers (XPath). Falla frágil.
*   **Sq-238 (PDFs Escaneados):** Muchos decretos edilicios se suben a Transparencia Activa como imágenes PDF ilegibles (fotos de un papel firmado). Un scraper tradicional devuelve cadena vacía, perdiendo la fiscalización.
*   **Sq-239 (Rate Limiting Ético):** Si nuestro crawler indexa la web del Municipio de Tortel, podríamos botar su frágil servidor cPanel compartido de 10 dólares, haciendo daño real.
*   **Sq-240 (Validación Cruzada):** ¿Qué ocurre si la base del SII dice "X" pero el Servel dice "Y" respecto a la dirección comercial de un proveedor sospechoso? Falta jerarquía de verdad (Source of Truth Protocol).
