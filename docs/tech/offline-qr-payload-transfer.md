# 🏁 CÓDIGO QR OFFLINE (PAYLOAD VISUAL)

**Versión:** 1.0
**Squad:** 322 Mesh-2
**Misión:** Transferir una denuncia completa (Texto + Metadatos) de un teléfono a otro sin usar radiofrecuencia (Modo Avión o Silencio de Radio).

---

## 🎯 El Ancho de Banda Óptico
La cámara es un módem.

## 🛡️ ESTÁNDAR "CIVIC-QR"

### 1. Compresión y Cifrado
*   El JSON del reporte se comprime (Brotli/Gzip) y se cifra (ChaCha20).
*   Se genera un **QR de Alta Densidad** (Version 40). Capacidad ~3KB.
*   Suficiente para: Tipo de incidente, Coordenadas GPS exactas, Timestamp, Descripción breve, Hash de la foto (la foto entera no cabe).

### 2. Air-Gap Transfer
*   Vecino A (Sin saldo/señal): Genera el QR en su pantalla.
*   Vecino B (Con plan de datos): Abre Civicum, escanea el QR del Vecino A.
*   La app del Vecino B desencripta, valida la firma digital y encola el reporte para subida inmediata usando su propio internet.

### 3. QR Animado (Para Data Pesada)
*   Si el reporte es muy grande, la pantalla del Vecino A muestra una secuencia de QRs a 10 fps (bucle).
*   El Vecino B graba el video corto y la app reconstruye el archivo completo.

---
*Si puedes verlo, puedes enviarlo.*
