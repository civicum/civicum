# 🕵️ CHEQUEO DE ESTEGANOGRAFÍA (MENSAJES OCULTOS)

**Versión:** 1.0
**Squad:** 168 Esteganografía
**Riesgo:** Canal encubierto para crimen organizado

---

## 🎯 El Vector de Ataque
Criminales usan fotos de perfil o de "baches" aparentemente inocentes para transmitir órdenes o coordinadas ocultas en los bits menos significativos (LSB) de los pixeles, evadiendo la vigilancia policial convencional.

## 🛡️ TÉCNICA DE SANITIZACIÓN: "DESTRUCTIVE RE-ENCODING"

La defensa más efectiva contra la esteganografía no es *detectarla* (es muy difícil), sino **destruirla**.

### El Proceso de "Lavado de Pixeles"
1.  **Nunca guardar el binario original como público.** (Ver política de EXIF Scrubbing).
2.  **Transcodificación Forzada:**
    *   Entrada: `image.png` (formato lossless, ideal para esteganografía).
    *   Proceso: Convertir a `image.jpg` (lossy) con calidad 85% y luego a `image.webp`.
    *   **Efecto:** La compresión con pérdida altera los valores LSB de los pixeles, corrompiendo cualquier mensaje oculto.
3.  **Redimensionamiento:**
    *   Alterar ligeramente las dimensiones (ej: de 1000x1000 a 998x998). Esto rompe la rejilla de decodificación esteganográfica.

## 🚫 FORMATOS PROHIBIDOS
*   Se prohíbe la subida de archivos `.zip`, `.rar`, `.exe` camuflados.
*   Se bloquean archivos PNG de gran tamaño (>5MB) en perfiles de usuario. Solo JPG/WebP permitidos.

---
*Si la imagen cambia un pixel, el mensaje secreto se destruye. Nosotros cambiamos todos los pixeles.*
