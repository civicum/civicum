# 📳 FEEL THE APP: FEEDBACK HÁPTICO Y SONORO ACCESIBLE

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 127 — Haptic-2: Feedback Sonoro y Háptico  
**Soluciona:** Hallazgo H2-01 (Falta de Confirmación No Visual)

---

## 🎯 El Problema de UX
Un usuario ciego (Screen Reader) o un usuario en un entorno ruidoso (Metro) aprieta "Votar".
Si solo cambia un color en pantalla, no saben si funcionó. La incertidumbre genera ansiedad y doble click.

---

## 🎵 Estrategia Multisensorial

### 1. Haptics Semánticos (Vibración)
Usar `Navigator.vibrate()` con patrones distintivos:
*   **Éxito:** `vibrate([50])` (Un toque corto y seco). "Tick".
*   **Error/Alerta:** `vibrate([50, 100, 50])` (Doble toque rápido). "Tun-tun".
*   **Acción Larga:** `vibrate(200)` (Vibración suave al completar hold-to-press).

### 2. Diseño Sonoro Funcional (UI Sounds)
*   Sonidos *muy* breves y sutiles (tipo Nintendo Switch) para confirmar acciones críticas.
*   **Voto Registrado:** Sonido ascendente ("Pling!").
*   **Reporte Enviado:** Sonido de "papel deslizándose" o check metálico.
*   **Error:** Sonido grave sordo ("Bonk").
*   *Nota:* Siempre respetar el "Modo Silencio" del sistema.

### 3. Accesibilidad Primero
*   Los sonidos y vibraciones son **redundantes**, nunca la única señal.
*   Siempre acompañan a un `aria-live="polite"` que anuncia "Voto registrado correctamente" al lector de pantalla.

---

## 🧪 Test "Ojos y Oídos Cerrados"
1.  Usuario con tapones y ojos vendados.
2.  Intenta realizar una acción (ej: dar like).
3.  **Meta:** Debe saber si lo logró solo por el tacto (vibración).

---
*Documento generado para cerrar Hallazgo H2-01.*
