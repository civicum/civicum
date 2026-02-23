# Protocolo de Validez Probatoria (Squad Trámite-1)

**Squad:** 136. Escuadrón Trámite-1: Validez Probatoria  
**Misión:** ¿Sirve un reporte de Civicum como prueba en un juicio local?  
**Responsables:** Abogado Público, Criptografía, Transparencia.

## 1. La Cadena de Custodia Digital
Para que una foto de un bache o un microbasural sea válida en un juzgado de policía local:
- **Hashing:** Cada archivo subido recibe un hash SHA-256 inmediato.
- **Timestamping:** Se firma con una estampa de tiempo confiable (TSA) externa, no la del servidor.

## 2. Metadatos Forenses Extendidos
- No solo guardamos la foto. Guardamos:
    - Azimut y Elevación de la cámara (si disponible).
    - Modelo de dispositivo.
    - Precisión del GPS en metros.
- **Exif Sanitizado:** Se eliminan datos personales del EXIF público, pero se guarda el RAW encriptado ("Cold Storage") por 5 años para requerimientos judiciales.

## 3. Certificado de Autenticidad PDF
- El usuario puede descargar un "Certificado de Reporte" en PDF firmado digitalmente por Civicum S.A., que declara: "La imagen X fue recibida en nuestros sistemas el día Y sin alteraciones detectadas".

*No somos jueces, pero entregamos la evidencia irrefutable.*
