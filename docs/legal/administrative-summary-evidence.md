# ⚖️ PROTOCOLO EVIDENCIA SUMARIAL (SUMARIO ADMINISTRATIVO)

**Versión:** 1.0
**Squad:** 216 Ley-1
**Misión:** Que los reportes de Civicum no sean "papel mojado" en un juicio administrativo.

---

## 🎯 El Problema de la Prueba
Un vecino reporta "Uso de vehículo municipal para mudanza personal". Si Civicum solo guarda una foto JPG sin metadata, el abogado defensor del funcionario la desestima por "falta de integridad".

## 🛡️ ESTÁNDAR DE ADMISIBILIDAD DIGITAL

### 1. Cadena de Custodia (Hashing + TimeStamping)
*   Toda evidencia crítica (fotos de faltas a la probidad) se sella criptográficamente al momento de la ingesta.
*   **TimeStamping:** Se usa una TSA (Time Stamping Authority) externa o un bloque de blockchain público para certificar que *la foto existía sin alteraciones en la Fecha X*.

### 2. Metadatos Forenses (EXIF Preservation)
*   Para denuncias graves, **NO SE ELIMINAN LOS EXIF** de la copia "Vault" (aunque sí de la copia pública).
*   Se preserva: GPS preciso, Modelo de Cámara, Fecha de Captura Original.

### 3. Formato de Exportación Judicial
*   Botón "Exportar para Fiscalía/Contraloría": Genera un ZIP con:
    *   PDF del Reporte.
    *   Imágenes originales con Hash SHA-256 verificado.
    *   Certificado de Integridad de Logs.

---
*La verdad digital debe ser tan sólida como una escritura pública.*
