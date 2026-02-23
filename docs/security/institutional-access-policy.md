# 🏥 ACCESO INSTITUCIONAL: REDES RESTRINGIDAS Y DISPOSITIVOS COMPARTIDOS

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 108 — Margen-3: El Usuario Institucionalizado  
**Soluciona:** Hallazgo M3-01 (Bloqueo en Cárceles/Hospitales)

---

## 🎯 El Problema Social
Personas en cárceles (que mantienen derecho a voto salvo pena aflictiva >3 años), hospitales psiquiátricos, o zonas militares acceden a internet bajo firewalls estrictos o usan un solo computador compartido ("kiosko") para 50 personas.

---

## 🔓 Estrategia de Permeabilidad

### 1. "Kiosk Mode" (Seguridad en Dispositivo Compartido)
*   **Problema:** Usuario A se loguea. Se va. Usuario B llega y ve la sesión de A.
*   **Solución:**
    *   Si se detecta IP institucional (lista blanca) o flag "Dispositivo Público":
    *   **Timeout Sesión:** 5 minutos de inactividad -> Logout forzoso.
    *   **No guardar credenciales:** `Autocomplete=off` estricto.
    *   **Botón Pánico:** "Salir Cuidando mi Privacidad" (Logout + Redirige a Google).

### 2. Compatibilidad con Firewalls Estricts
*   Muchos firewalls corporativos bloquean WebSockets o puertos no-80/443.
*   **Protocolo:** CIVICUM debe funcionar 100% sobre HTTP/1.1 estándar si WebSocket falla (Long Polling legacy).
*   **Dominios:** Evitar dominios categorizados como "Social Networking" en listas negras tipo Fortinet. Categorizar como "Government/Education".

### 3. Privacidad Visual
*   Botón "Ocultar Contenido Sensible" en el header.
*   Difumina nombres y fotos de perfil con un click, para que quien pase por detrás no vea qué estás leyendo/votando.

---

## 🧪 Test del "Ciber Café"
1.  Loguearse en un PC público.
2.  Cerrar la pestaña sin hacer logout.
3.  Volver a abrir CIVICUM.
4.  **Éxito:** La sesión NO debe persistir si estaba en "Modo Kiosko/Público".

---
*Documento generado para cerrar Hallazgo M3-01.*
