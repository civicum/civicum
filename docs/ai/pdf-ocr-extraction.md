# 📄 DATOS EN PDF ESCANEADO (OCR + IA)

**Versión:** 1.0
**Squad:** 238 Crawler-3
**Problema:** "Transparencia Activa" a veces significa subir fotocopias chuecas de facturas de 1998.

---

## 🎯 La Tumba de la Información
El PDF imagen es donde los datos van a morir.

## 🛡️ PIPELINE DE RESCATE

### 1. Pre-procesamiento de Imagen (Deskew/Denoise)
*   Enderezado automático de páginas chuecas.
*   Aumento de contraste y eliminación de "ruido" (manchas de fotocopiadora) antes de pasar al OCR.

### 2. OCR Contextual (Vision LLM)
*   No usamos Tesseract simple. Usamos modelos multimodales (GPT-4o / Gemini Pro Vision) capaces de entender tablas complejas y escritura a mano.
*   **Prompt:** *"Extrae la tabla de gastos de esta imagen y conviértela a JSON. Ignora los sellos de agua."*

### 3. Validación Humana (Crowdsourcing)
*   Si la confianza del OCR es baja (<80%), el recorte de la imagen se envía a la comunidad (Gamiifcación):
    *   *"¿Qué dice este número? Ayúdanos y gana puntos cívicos."*
    *   (Doble ciego: dos usuarios deben coincidir).

---
*Convertimos píxeles muertos en datos vivos.*
