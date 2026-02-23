# 📸 POLÍTICA DE GESTIÓN DE METADATOS (EXIF SCRUBBING)

**Versión:** 1.0
**Squad:** 166 Metadatos
**Implementación:** Backend (Edge Functions)

---

## 🎯 El Dilema
Las fotos de denuncia contienen coordenadas GPS precisas y datos del dispositivo.
*   **Riesgo Vital:** Publicarlas sin procesar puede revelar la ubicación exacta donde vive el denunciante (doxing).
*   **Necesidad Legal:** Borrarlas impide validar que la foto es real y del lugar correcto.

## 🛡️ SOLUCIÓN: MODELO DE DOBLE ALMACENAMIENTO

### 1. Archivo Original (Evidence Vault)
*   **Acceso:** Solo Administradores de Nivel 4 y Fiscales (con orden).
*   **Tratamiento:** Se guarda el archivo `RAW/HEIC/JPG` **intacto**, con todos sus metadatos EXIF.
*   **Uso:** Validación de autenticidad y certificados legales (`legal-evidence-protocol.md`).
*   **Storage:** Bucket S3 privado con Object Lock.

### 2. Archivo Público (Public CDN)
*   **Acceso:** Todo internet.
*   **Tratamiento:** **Exif Scrubbing Total**. Se procesa la imagen (sharp/ffmpeg) para eliminar TODOS los metadatos.
*   **Inyección:** Se inyecta una firma digital visible (watermark) con el ID del reporte y fecha, pero sin coordenadas.
*   **Storage:** CDN pública optimizada (WebP).

## ⚙️ IMPLEMENTACIÓN TÉCNICA

```typescript
// Pseudo-código del Worker de Procesamiento
async function handleUpload(file) {
  // 1. Calcular Hash SHA-256 del original
  const hash = await crypto.subtle.digest(file);
  
  // 2. Guardar Original en Vault
  await vaultBucket.put(`evidence/${hash}`, file);
  
  // 3. Scrubbing
  const cleanImage = await sharp(file)
    .rotate() // Auto-rotar según orientación
    .withMetadata(false) // BORRAR EXIF
    .toFormat('webp')
    .toBuffer();
    
  // 4. Publicar
  await publicBucket.put(`public/${reportId}.webp`, cleanImage);
}
```

---
*Privacidad en público, evidencia en privado.*
