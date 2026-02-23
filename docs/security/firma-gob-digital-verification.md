# Validación de Firmas Oficiales (Squad 242)

**Misión:** Validación de documentos firmados electrónicamente por autoridades.

## 1. El Riesgo del Deepfake Burocrático
Un usuario anónimo, simulando ser la directiva municipal, sube un reporte en formato PDF "Aprobando la licitación" respondiendo a un reclamo en *Alza la Voz*. Tiene timbre del municipio y la firma escaneada del alcalde. CIVICUM asume que el hilo se resolvió y marca la queja como *[Solucionada]*, pero todo es una falsificación visual para cerrar la fiscalización vecinal, usando PDFs trucados.

## 2. Certificación Legal de la Meta-Data PDF
El Estado de Chile ya validó este vector bajo las reglas de "Gobierno Digital" (Firma Electrónica Avanzada FEA).

1.  **Integración PKI Estatal:** Todo `.pdf` subido como **"Respuestas Oficiales"** (Por concejales o autoridades Nivel 4) debe venir verificado digitalmente desde *Firma.Gob*. CIVICUM usará un Worker criptográfico para verificar la incrustación del certificado digital `X.509` dentro del PDF antes de darle a ese post de respuesta el cheque azul ("Validado").
2.  **No hay Checkmark sin Llave:** Si un alcalde sube un PDF a CIVICUM que es solo una *"Foto de un papel firmado pero escaneado y exportado al celular"*, no será baneado, pero CIVICUM agregará un disclaimer legal en gris (Alert de advertencia): 
    > ⚠️ *"Respuesta Sometida, pero carente de Firma Electrónica Avanzada del Estado. Carece de presunción de veracidad legal."*
3.  **Prohibición de Sellado Propio:** CIVICUM testifica firmas; Civicum NO firma por las autoridades. La cadena de custodia de llaves públicas depende exclusivamente del Estado Chileno (Certificadoras autorizadas), desligándonos de responsabilidad penal.
