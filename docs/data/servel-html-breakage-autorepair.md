# Cambio de HTML Sorpresa en el Servel (Squad 237)

**Misión:** Detección de ruptura si el Servel o SII rediseñan su web antigua y rompen el Scraper.

## 1. El Riesgo de Ecosistemas Web Inestables
Las empresas liciten un rediseño de un ministerio. El `<table id="resultados">` original se transforma abruptamente en un `<div class="react-grid-245">`. 
Nuestro script de Puppeteer/Cheerio extrae nulos (NullPointerException). Los datos ciudadanos dejan de actualizarse y CIVICUM alucina asumiendo "Ausencia de Corrupción" porque "No se encontraron nuevas multas".

## 2. Auto-Sanación y Dead-Letter Queues (DLQ)

1.  **Auditoría de Desviación Estándar (Data Drift):** Si el cron job diario del Scraper históricamente inserta un promedio de 40 licitaciones nuevas a la DB, y súbitamente reporta 0 inserciones, un AWS Lambda se acciona catalogando el evento no como "Día Tranzquilo", sino como "Selector Roto". Envío de PagerDuty / Telegram rojo inmediato al Lead Developer.
2.  **Fuerza Bruta Heurística (AI DOM Scanner):** Si la estructura HTML cambió, un subscritpt invocará a GPT-4o-Mini enviándole el HTML raw completo. Su único prompt es: *"Encuentra el Div que contiene las resoluciones legales que solían estar en esta tabla, devuelve el nuevo selector CSS".* Si la respuesta confidence-score es mayor a 90, el worker se re-configura temporalmente con la respuesta de la IA.
3.  **Dead Letter Logging:** Toda extracción pervertida no se pierde en `/dev/null`. Se serializa en crudo y viaja a S3 para investigación del rol `Data Engineer 31`.
