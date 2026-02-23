# 🖼️ EL MEME OFENSIVO (VISIÓN POR COMPUTADOR)

**Versión:** 1.0
**Squad:** 341 Dawkins-1
**Problema:** Los filtros de texto no detectan una foto de un prócer nacional con símbolos de odio superpuestos. Los memes son el vector principal de radicalización.

---

## 🎯 Si una imagen vale mil palabras, necesitamos leerlas todas
La moderación debe poder "ver".

## 🛡️ PROTOCOLO DE ANÁLISIS VISUAL

### 1. OCR + Contexto (Meme-Text)
*   Extraemos el texto dentro de la imagen.
*   No basta con leerlo. *"¡Qué linda chimenea!"* sobre una foto de un incendio es odio, no arquitectura.
*   Analizamos la **Disonancia Texto-Imagen**.

### 2. Detección de Simbología de Odio (Hate Symbol Database)
*   Base de datos visual de símbolos de odio locales (ej: parches de grupos extremistas, caricaturas deshumanizantes).
*   Fine-tuning del modelo de visión para reconocer variantes locales (no solo svásticas, sino símbolos específicos de la historia de Chile).

### 3. Hashing Perceptual (PDQ Hash)
*   Si un meme es marcado como ilegal (pornografía infantil, incitación a violencia), calculamos su **Hash Perceptual**.
*   Los filtros bloquean automáticamente cualquier re-subida de esa imagen, incluso si le cambian un poco el color o la recortan. Evita el "Whack-a-Mole".

---
*El odio no se puede esconder en un JPG.*
