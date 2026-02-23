# 🦠 REPORTE DE AUDITORÍA: HIGIENE DE DATOS (SQUADS 281-285)
**Fecha:** 20 Febrero 2026 | **Auditor:** Antigravity

## 1. Resumen de Hallazgos (Limpieza Base de Datos)
*   **Sq-281 (Direcciones Mutantes):** Falta de estandarización GIS. Un usuario escribe `"Avenida Matta"` y otro `"Av Matta"`. El sistema crea dos denuncias en lugar de unirlas, disipando la urgencia comunal.
*   **Sq-282 (Clones Humanos):** Bases de datos importadas de Transparencia duplicando personas porque una tiene segundo nombre comercial. Falla en Fuzzy-Matching de RUTs (Juan Pérez = Juan A. Pérez).
*   **Sq-283 (Caracteres Malditos de Word):** Copiar actas alcaldicias desde MS Word incluye caracteres zero-width (`\u200B`) que destrozan la ingestión de JSON de Civia provocando un SyntaxError inatrapable en Drizzle/PlanetScale.
*   **Sq-284 (Pudrición de Enlaces Opendata):** El 40% de las imágenes subidas a Transparencia en Chile arrojan "404 Not Found" a los 2 años. Si CIVICUM solo "guarda links", nuestra evidencia muere rápido (Link Rot).
*   **Sq-285 (Dicotomía de la Nada):** El backend almacena el dato `presupuesto: 0` cuando las municipalidades ocultan la data de gastos (y debió ser `null`). CIVICUM le dirá falsamente al pueblo chileno que la "Inversión en Salúd es Cero" causando indignación masiva equivocada (Calumnia Algorítmica).
