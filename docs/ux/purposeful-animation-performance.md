# 🎬 ANIMACIONES CON PROPÓSITO

**Versión:** 1.0
**Squad:** 233 Joy-3
**Misión:** Que nada aparezca de golpe. La física digital debe tener sentido.

---

## 🎯 Movimiento vs. Distracción
Una animación lenta frustra. Una animación excesiva marea.

## 🛡️ FÍSICA DE INTERFAZ

### 1. Coreografía de "Origen y Destino"
*   Si toco una tarjeta y se abre un detalle, la tarjeta **debe expandirse** desde su posición original. No puede haber corte directo.
*   **Por qué:** Ayuda al usuario a mantener el "mapa mental" de dónde está en la app.

### 2. Duraciones Perceptuales (200-300ms)
*   **100ms:** Instantáneo (feedback de botón).
*   **250ms:** Transición suave (cambio de página).
*   **>500ms:** Solo para estados de carga o celebración.
*   *Nunca hacer esperar al usuario por ver una animación.*

### 3. Respeto a la Accesibilidad (Prefers-Reduced-Motion)
*   Si el sistema operativo tiene activado "Reducir movimiento" (Squad 158 Vértigo), todas las animaciones de desplazamiento se convierten en **disolvencias suaves (fade-in)**. Cero zoom, cero slide.

---
*La mejor animación es la que se siente, no la que se ve.*
