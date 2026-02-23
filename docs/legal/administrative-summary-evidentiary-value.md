# Valor Probatorio y Sumario Administrativo (Squad 216)

**Misión:** ¿Puede un reporte de Civicum servir de prueba para iniciar un sumario a un funcionario?

## 1. El Riesgo Jurídico del Testimonio Blando
Un vecino sube un reporte de corrupción municipal documentado ("Alza la Voz"). Si Contraloría o el Alcalde rechaza la foto alegando que "el archivo puede ser inteligencia artificial o alterado digitalmente", la denuncia cívica colapsa y la herramienta pierde legitimidad fiscalizadora.

## 2. Archivo Forense Cripto-Sellado
CIVICUM debe convertirse en una notaría automática de metadata. No validamos la *veracidad* física de la declaración (eso lo hace la ley), pero sí su inmutabilidad digital al momento de la captura:

1.  **Sellado de Tiempo (Timestamping Autoridad Autónoma):** Al momento de subir el `POST /api/reports`, se calcula un hash `SHA-256` combinado de la imagen JPEG, el UserID (RUT), la Latitud/Longitud (EXIF) y el texto. 
2.  **Notarización Exponencial:** Ese Hash Maestro se introduce en una cadena inmutable (Merkle Tree o Ledger Público Estatal). Si el municipio cambia 1 pixel o un abogado altera el texto a posteriori, el validador oficial de CIVICUM (Botón en UI: `Validar Certificado de Integridad`) alertará "DOCUMENTO CORROMPIDO". 
3.  **Admisibilidad Contraloría:** Se instruye un PDF de exportación forense, incluyendo el hash de verificación de integridad validado bajo la Ley 19.799 sobre Documentos Electrónicos en Chile. CIVICUM genera **Presunción Cierta de Origen Temporal**.
