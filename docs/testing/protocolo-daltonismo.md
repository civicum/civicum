# 🎨 PROTOCOLO DE TESTING DALTONISMO

**Versión:** 1.0
**Squad:** 157 Dalton
**Prueba:** QA Manual / Visual Regression

---

## 🎯 Objetivo
Asegurar que la interfaz de CIVICUM sea completamente utilizable por personas con Deuteranopia, Protanopia y Tritanopia, verificando que **el color nunca sea el único indicador de estado**.

## 🛠️ HERRAMIENTAS DE SIMULACIÓN

1.  **Chrome DevTools (Rendering):**
    *   `Ctrl+Shift+P` > "Show Rendering" > "Emulate vision deficiencies"
    *   Seleccionar: "Blurred vision" (baja visión), "Protanopia", "Deuteranopia", "Tritanopia".
2.  **Plugin Figma Stark:** Para validar diseños antes de código.
3.  **Toptal Color Blind Filter:** Para capturas de pantalla de análisis post-mortem.

## 🧪 CASOS DE PRUEBA OBLIGATORIOS (Checklist QA)

### 1. Estados de Error y Éxito
*   [ ] **Input Error:** El borde rojo se acompaña de un *icono de exclamación* y un *texto de ayuda*.
    *   *Fail:* Solo borde rojo.
*   [ ] **Toast Success:** El fondo verde se acompaña de un *icono de check* y texto "Éxito".
    *   *Fail:* Solo cambio de color de fondo.

### 2. Mapas y Visualizaciones
*   [ ] **Mapas de Calor:** Las zonas "calientes" (rojas) deben tener *patrones de trama* o bordes definidos, no solo gradiente de color.
*   [ ] **Gráficos de Torta:** Cada segmento debe tener una etiqueta directa o textura, no depender de leyenda de colores.

### 3. Botones y Enlaces
*   [ ] **Botones Primarios vs Secundarios:** La jerarquía debe ser clara por *contraste de luminosidad*, no solo tono.
*   [ ] **Enlaces en Texto:** Deben tener *subrayado* (underline) o *icono externo*, no solo color azul.

## 🚦 SEMÁFORO DE APROBACIÓN

*   🔴 **FALLA CRÍTICA:** Información invisible o indistinguible en simulación (ej: texto rojo sobre fondo gris oscuro que se vuelve ilegible).
*   🟡 **ADVERTENCIA:** Se distingue pero con esfuerzo (bajo contraste).
*   🟢 **APROBADO:** Información clara mediante redundancia (Color + Forma + Texto).

---
*Si necesitas ver el color para entenderlo, está mal diseñado.*
