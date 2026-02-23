# 📵 ZONA MUERTA (JAULA DE FARADAY)

**Versión:** 1.0
**Squad:** 253 Átomo-3
**Escenario:** El usuario entra a un ascensor o subterráneo de hormigón mientras envía un reporte.

---

## 🎯 El Limbo de la Conexión
El móvil dice "4G" pero no pasan datos. El timeout es la muerte de la UX.

## 🛡️ GESTIÓN DE INCERTIDUMBRE

### 1. El "Falso Envío" (Optimistic UI Extremo)
*   Si el usuario pulsa "Enviar", la app dice **"¡Listo!"** inmediatamente y guarda en local (IndexedDB).
*   No mostramos un spinner infinito que falla a los 30 segundos.
*   El "Worker" en segundo plano se encarga de reintentar silenciosamente cuando recupere señal, incluso si la app se cerró (Background Sync API).

### 2. Detección de "Conexión Zombie"
*   A veces hay señal pero no datos.
*   El sistema hace pings ligeros (`HEAD /ping`). Si fallan 3 seguidos, pasamos a **Modo Offline Forzado** aunque el OS diga que hay señal, para evitar frustrar al usuario intentando cargar mapas.

### 3. Cola de Prioridad
*   Al recuperar señal, se sube primero el texto (kb) y al final las fotos/videos (mb).

---
*El hormigón armado no detiene a la ciudadanía.*
