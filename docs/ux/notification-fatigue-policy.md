# 🔕 RESPETO A LA ATENCIÓN: POLÍTICA ANTI-FATIGA DE NOTIFICACIONES

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 126 — Haptic-1: Fatiga de Notificaciones  
**Soluciona:** Hallazgo H1-01 (Usuario Bloquea la App por Spam)

---

## 🎯 El Problema de UX
"Tu vecino comentó", "Alguien apoyó tu causa", "Mira esta noticia", "No te olvides de votar".
Resultado: El usuario va a Ajustes -> Notificaciones -> Bloquear Todo. Game Over.

---

## 🧘 Estrategia "Calm Notification"

### 1. El Semáforo de Urgencia
Cada notificación debe clasificarse antes de enviarse:
*   **🔴 CRÍTICA (Push Inmediato + Sonido):** "Peligro en tu zona" (Incendio/Sosafe-style), "Tu cuenta fue accedida".
*   **🟡 IMPORTANTE (Push Silencioso):** "Tu reporte fue resuelto por el municipio".
*   **🟢 INFORMATIVA (Solo In-App / Badge):** "A 5 vecinos les gusta tu idea".

### 2. Batching Inteligente (Resumen Diario)
*   En lugar de enviar 50 notificaciones de "Like", enviar 1 al final del día:
    *   *"50 vecinos apoyaron tu causa hoy."*
*   Horario de Corte: Nunca enviar notificaciones no-críticas entre 22:00 y 08:00 (Respeto al Sueño).

### 3. Canal Preferido (Omnichannel)
*   Permitir al usuario elegir: "¿Quieres saber esto por Push, Email o solo verlo cuando abras la app?"
*   Default ético: Email para cosas largas, Push solo para lo urgente.

---

## 🧪 Test del "Día Pesado"
1.  Simular que una causa del usuario se vuelve viral (1000 apoyos en 1 hora).
2.  **Meta:** El celular del usuario NO debe vibrar 1000 veces. Debe vibrar 1 vez ("Tu causa es tendencia") y luego agrupar.

---
*Documento generado para cerrar Hallazgo H1-01.*
