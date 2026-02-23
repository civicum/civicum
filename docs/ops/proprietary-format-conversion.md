# 📠 FORMATOS PROPIETARIOS (LEGACY)

**Versión:** 1.0
**Squad:** 287 Burocracia-2
**Escenario:** El municipio responde una solicitud de transparencia adjuntando un archivo `.wpd` (WordPerfect), `.rar` o un Excel con macros `.xlsm` que no abren en el celular del vecino.

---

## 🎯 La Barrera del Software Privativo
La información pública no debe requerir comprar una licencia de software para ser leída.

## 🛡️ UNIVERSALIZACIÓN DE FORMATOS

### 1. El "Universal Viewer" (LibreOffice Headless)
*   Microservicio dockerizado con `LibreOffice` en modo headless.
*   **Misión:** Convertir cualquier monstruosidad legacy (.doc, .rtf, .wpd, .odp) a **PDF Estándar** (PDF/A-1a para archivo) y **HTML Plano** para lectura rápida en móvil.

### 2. Decompression Sandbox
*   Si llega un `.rar` o `.zip`:
    *   Nunca se le pasa directo al usuario (riesgo de malware).
    *   El worker lo descomprime en un entorno aislado, extrae los archivos legibles, los convierte a PDF y ofrece la descarga limpia.

### 3. Alerta de Accesibilidad
*   Si el documento es una imagen pegada en un Word (sin texto seleccionable), se marca como `ACCESSIBILIDAD_BAJA` y se envía a la cola de OCR (Squad 238).

---
*El estado puede usar software de 1995, pero el ciudadano vive en el 2026.*
