# ✍️ FIRMAS DIGITALES Y FIRMAGOB

**Versión:** 1.0
**Squad:** 242 Enigma-2
**Misión:** Saber si el PDF que subió el Alcalde es real o un Photoshop.

---

## 🎯 La Confianza Criptográfica
Un documento oficial vale por su firma, no por su logo.

## 🛡️ VALIDACIÓN DE PKI (INFRAESTRUCTURA DE CLAVE PÚBLICA)

### 1. Verificación de FirmaGob
*   Civicum integra la lista de confianza (Trust Store) de la entidad certificadora del Estado.
*   Al subir un decreto o acta, el sistema:
    *   Extrae el hash del PDF.
    *   Verifica la firma criptográfica contra la llave pública del firmante.
    *   Consulta via OCSP (Online Certificate Status Protocol) si el certificado estaba vigente al momento de la firma.

### 2. Sello de "Verificado por Civicum"
*   Si la firma es válida criptográficamente, mostramos un **tic azul** ("Documento Certificado").
*   Si la firma es inválida o el PDF fue modificado 1 bit después de firmar, mostramos **rojo** ("Integridad Comprometida").

### 3. Long-Term Validation (LTV)
*   Guardamos la prueba de validación (Timestamp) para que el documento siga siendo válido en 10 años, incluso si el certificado del alcalde expira mañana.

---
*Las matemáticas no mienten. Los políticos a veces sí.*
