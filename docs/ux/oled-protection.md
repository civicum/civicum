# 📺 PROTECCIÓN DE PANTALLA: OLED BURN-IN MITIGATION

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 102 — Joule-2: Quemadura de Pantalla  
**Soluciona:** Hallazgo J2-01 (Elementos UI Fijos en OLED Barato)

---

## 🎯 El Problema Físico
Muchos dispositivos gama media/baja (ej: Samsung serie A antiguos, Motorola) usan paneles OLED baratos que sufren "Burn-in" (quemado de imagen fantasmal) si se muestran elementos blancos fijos con brillo alto por mucho tiempo.

---

## 🛡️ Técnicas de Mitigación UI

### 1. Evitar "Blanco Puro" (Pure White #FFFFFF)
*   En OLED, #FFFFFF enciende el subpixel azul al máximo (el que más rápido se degrada).
*   **Regla:** Usar `#F2F2F2` o gris muy claro para fondos "blancos". Nunca `#FFFFFF` puro en barras de navegación fijas.

### 2. Pixel Shifting (Imperceptible)
*   Los elementos fijos de la UI (Bottom Bar, FAB) deben moverse 1px aleatoriamente cada 60 segundos.
*   Esto distribuye la carga de "quemado" entre los píxeles adyacentes.

### 3. Dark Mode "True Black" vs "Dark Grey"
*   **Sujeto de debate:** "True Black" (#000000) apaga el pixel (ahorra batería) pero causa "Black Smear" al scrollear en pantallas baratas.
*   **Decisión CIVICUM:** Usar `#121212` (Gris muy oscuro) para superficies grandes (evita Smear) y `#000000` solo para márgenes o videos.

### 4. Toast Notifications no intrusivas
*   No usar Toasts fijos que duren > 5s.
*   Transparencia al 95% en elementos persistentes si es posible.

---

## 🧪 Validación Visual
1.  Abrir app en cuarto oscuro con brillo al 100%.
2.  Verificar que no hay "halos" o retención de imagen tras 10 minutos de uso estático.
3.  Comprobar "Black Smear" haciendo scroll rápido en listas oscuras.

---
*Documento generado para cerrar Hallazgo J2-01.*
