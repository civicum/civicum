# 🎫 CADUCIDAD DE TOKENS (RESCATE DE TEXTO)

**Versión:** 1.0
**Squad:** 274 Cronos-4
**Escenario:** Usuaria escribe un testimonio desgarrador de 40 minutos. Pulsa "Enviar". El token OAuth expiró hace 10 minutos. La app recarga y borra todo el formulario.

---

## 🎯 La Pesadilla de UX
Perder datos por seguridad (Session Timeout) es un error de diseño imperdonable.

## 🛡️ PERSISTENCIA RESILIENTE

### 1. LocalStorage Drafts
*   Cada `keyup` en un campo de texto largo se guarda automáticamente en `localStorage` (o IndexedDB).
*   Si la página recarga, el script restaura el contenido al montar el componente. "No perdiste nada".

### 2. Silent Refresh (Renovación Silenciosa)
*   Si el usuario está escribiendo (detectamos eventos de teclado), el frontend pide renovar el Token (Refresh Token) proactivamente 5 minutos antes de que expire.
*   La inactividad de red no es inactividad de usuario.

### 3. "Login to Save" Modal
*   Si el token murió y no se puede renovar:
    *   **NO** redirigimos al Login.
    *   Abrimos un Modal (Pop-up) sobre el formulario: *"Tu sesión expiró. Ingresa tu clave aquí para enviar lo que escribiste."*
    *   El usuario se loguea *sin salir* de la pantalla.

---
*La seguridad no puede ser amnesia.*
