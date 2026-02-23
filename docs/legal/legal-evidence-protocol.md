# ⚖️ EVIDENCIA DIGITAL: PROTOCOLO DE VALIDEZ PROBATORIA

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 136 — Tramite-1: Validez Probatoria  
**Soluciona:** Hallazgo TR1-01 (Duda sobre validez de reportes en juicio)

---

## 🎯 El Problema Burocrático
Un vecino reporta un delito ambiental en CIVICUM. Meses después, hay un juicio.
El abogado de la empresa contaminante dice: *"Esa foto pudo ser alterada con Photoshop o IA. No es prueba válida."*

---

## 🛡️ Cadena de Custodia Digital

### 1. Sellado de Tiempo (TSA - Time Stamping Authority)
*   Cada reporte crítico recibe un sello de tiempo certificado (RFC 3161) de una autoridad externa o blockchain pública.
*   Esto prueba matemáticamente que **la foto existía en esa fecha y no fue modificada después**.

### 2. Metadatos Forenses Inmutables
*   Guardamos el archivo original (RAW/HEIC si es posible) en almacenamiento inmutable (WORM - Write Once Read Many) en Cloudflare R2 con Object Lock activado por 5 años.
*   Guardamos hash SHA-256 de la imagen y de los metadatos EXIF (GPS, Modelo Cámara).

### 3. Certificado de Autenticidad (PDF Export)
*   Botón "Exportar para Juicio": Genera un PDF firmado digitalmente por la Fundación CIVICUM.
*   Incluye: Foto, Mapa, Hash, Log de cambios, y declaración jurada del custodio de datos.

---

## 🧪 Test del "Perito Informático"
1.  Subir una foto.
2.  Esperar 24 horas.
3.  Intentar modificar la foto en la base de datos directamente.
4.  Generar el Certificado de Autenticidad.
5.  **Meta:** El certificado muestra "ERROR DE INTEGRIDAD" o la foto original inalterada, detectando el intento de manipulación.

---
*Documento generado para cerrar Hallazgo TR1-01.*
