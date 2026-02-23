# 🌑 MODO OSCURO REAL (OLED SAVING)

**Versión:** 1.0
**Squad:** 308 Greta-3
**Misión:** No usar "Gris Oscuro" (#121212) por estética. Usar "Negro Puro" (#000000) por física.

---

## 🎯 Apagar Píxeles es Ahorrar Energía
En pantallas OLED/AMOLED, el color negro (#000000) apaga el píxel. El gris oscuro lo mantiene encendido.

## 🛡️ DISEÑO "PIXEL-OFF"

### 1. Paleta "Midnight Save"
*   Fondo base: `#000000` (100% Black). No gradientes, no pattern backgrounds.
*   Texto: Gris claro (#E0E0E0), no blanco puro (para evitar "smearing" y fatiga visual excesiva).
*   Ahorro estimado: 60% de batería en pantallas OLED vs modo claro.

### 2. Detección de Batería Baja
*   Si `BatteryManager.level < 20%`:
    *   El sistema fuerza automáticamente el tema "OLED Black" y reduce el brillo de las imágenes, aunque el usuario tenga el tema claro por preferencia.
    *   (Se puede desactivar en ajustes, pero por defecto salva energía).

### 3. Menos Fotones Azules
*   Reducción de componentes azules en la UI nocturna. La luz azul requiere más energía (frecuencia más alta) y altera el ciclo circadiano del usuario.

---
*La mejor interfaz ecológica es la que no emite luz.*
