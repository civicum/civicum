# 📖 ESPECIFICACIÓN: MODO DISLEXIA

**Versión:** 1.0
**Squad:** 160 Dislexia
**Implementación:** Frontend (Theme Toggle)

---

## 🎯 Objetivo
Reducir la carga cognitiva y el "baile de letras" para usuarios con dislexia, proporcionando una tipografía optimizada y reglas de espaciado que faciliten la lectura fluida.

## 🔤 FUENTE ALTERNATIVA

Se implementará un toggle en `Configuración > Accesibilidad > Modo Lectura Fácil`.

### Opción A: OpenDyslexic (Ideal)
*   Fuente con peso inferior (bottom-heavy) que ancla las letras.
*   **Licencia:** Open source.
*   **Download:** Cargar via CDN o assets locales solo si el modo está activo.

### Opción B: Sans-Serif Optimizada (Fallback)
Si no se carga OpenDyslexic, usar:
*   `font-family: 'Comic Sans MS', 'Verdana', sans-serif;` (Sí, Comic Sans es excelente para dislexia por sus formas irregulares).
*   `font-weight: 500` (Semi-bold para mayor definición).

## 📏 REGLAS DE ESPACIADO Y LAYOUT

Al activar el modo, aplicar globalmente:

1.  **Espaciado de Caracteres:**
    *   `letter-spacing: 0.12em;` (Aumentar separación entre letras).
2.  **Espaciado de Palabras:**
    *   `word-spacing: 0.16em;` (Evitar que las palabras se peguen).
3.  **Interlineado:**
    *   `line-height: 2.0;` (Doble espacio, estándar WCAG AAA para dislexia).
4.  **Párrafos:**
    *   `margin-bottom: 2em;` (Separación clara entre bloques).
    *   **Prohibido:** `text-align: justify;` (Crea "ríos" de espacio blanco irregulares). Forzar `text-align: left;`.
5.  **Ancho de Línea:**
    *   `max-width: 60ch;` (60 caracteres por línea máximo para evitar pérdida de retorno).

## 🎨 IMPLEMENTACIÓN CSS

```css
body.mode-dyslexia {
  font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;
  line-height: 2.0 !important;
  letter-spacing: 0.12em !important;
}

body.mode-dyslexia p, 
body.mode-dyslexia h1, 
body.mode-dyslexia h2, 
body.mode-dyslexia h3 {
  text-align: left !important;
  max-width: 800px;
}
```

---
*La lectura es un derecho, no una carrera de obstáculos.*
