# 💻 LAPTOP ROBADO: DEFENSA ANTE ROBO DE IDENTIDAD ADMIN

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 144 — Zero-4: Robo de Identidad del Admin  
**Soluciona:** Hallazgo Z4-01 (Admin Logueado en PC Robado)

---

## 🎯 El Escenario Apocalíptico
Roban la mochila del Admin. El laptop está en suspensión (no apagado). El atacante lo abre y tiene acceso a la consola de Vercel, la DB y el correo.
Puede borrar todo o robar los datos de todos los chilenos.

---

## 🔐 Defensas de Capa 8

### 1. El Botón Rojo (Remote Wipe & Revoke)
*   Desde el celular, el Admin puede activar `emergency-revoke.sh`:
    *   Invalida TODAS las sesiones activas de Admin.
    *   Rota las claves de API de Vercel y Neon.
    *   Fuerza re-login con MFA para todos los staff.

### 2. MFA Hardware Obligatorio (YubiKey)
*   Para acciones destructivas (Borrar DB, Desplegar Prod), no basta estar logueado.
*   Se requiere tocar la **YubiKey física**. Si el ladrón no tiene la llave (que va en el llavero, no en la mochila), no puede destruir nada.

### 3. Tiempos de Sesión Cortos (TTL Aggressive)
*   Sesión de Admin expira en 1 hora de inactividad.
*   Requiere re-autenticación constante.

---

## 🧪 Simulacro "El Cafetería"
1.  Simular robo. El Admin "reporta" robo desde su celular.
2.  Intentar hacer un cambio en el laptop "robado" 5 minutos después.
3.  **Meta:** Acceso denegado. Token inválido.

---
*Documento generado para cerrar Hallazgo Z4-01.*
