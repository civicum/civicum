# Obsolescencia de Links Opendata (Squad 284)

**Misión:** Un reporte histórico depende de una foto en un S3 que el municipio borró (Link Rot).

## 1. El Riesgo del Olvido Burocrático y Encubrimiento Tácito
El Estado Plurinacional levanta una licitación. CIVICUM extrae el dato y muestra: "Contrato Millonario acá: `[Link a MercadoPublico]`". 
Pasa un año, asume un nuevo alcalde con ánimos cuestionables. La municipalidad, misteriosamente "rediseña su sitio web" y el hipervínculo que apuntaba al Excel de Sueldos o la Licitación ahora arroja Error 404 (Link Rot).
Si CIVICUM solo "Referenciaba" URLs externas sin poseer la data, nos hemos vuelto cómplices por ingenuidad a la desaparición y quema de evidencia probatoria cívica. El vecino dirá: "CIVICUM no sirve, puros links caídos".

## 2. Archival Snapshot Inmutable (Wayback Machine Interno)
Todo documento o hipervínculo citado por nuestra plataforma debe ser capturado físicamente en suelo CIVICUM.

1.  **Prohibición de Hotlinking Estatal:** Nunca CIVICUM renderizará un `<img>` o entregará un PDF `<a href>` apuntando en directo al servidor de `.gob.cl`.
2.  **Cámara de Éxtasis en R2 (Puppeteer Archival Worker):** Al momento en que un Crawler ingresa una Iniciativa o Proyecto municipal validado a Civia, un proceso paralelo en Cloudflare Workers abre un navegador en memoria, toma una Captura Fotográfica Total de la página del Alcalde denunciada, y extrae el Bloblet PDF base64. 
3.  **Evidencia Blindada a Costo Cero:** Ese archivo PDF / PNG Fáctico se sube a Almacenamiento S3 Compatible gratuito o barato (Cloudflare R2), catalogado por SHA-256 (Inmutabilidad del Hash). Si a los dos años la Municipalidad borra la página, nuestro Endpoint redirigirá sin problemas a la copia inmutable. CIVICUM se convierte legalmente en la "Máquina del Tiempo Definitiva de la Memoria y Odio Comunal".
