# 🍪 HONEST COOKIES: CONSENTIMIENTO SIN TRUCOS

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 140 — Tramite-5: Gestión de Cookies/Consent  
**Soluciona:** Hallazgo TR5-01 (Banner de Cookies Ilegal/Engañoso)

---

## 🎯 El Problema Burocrático
El usuario entra y ve un banner gigante. El botón "Aceptar Todo" es verde y enorme. El botón "Rechazar" está escondido en un link gris tamaño 8px.
Esto viola GDPR y la Ley de Protección al Consumidor (Patrón Oscuro).

---

## 🛡️ Diseño Ético de Consentimiento

### 1. Igualdad de Armas (Button Equality)
*   **Regla:** El botón "Rechazar Todo" debe tener el **mismo tamaño, color y visibilidad** que "Aceptar Todo".
*   Nada de "Configurar" para esconder el rechazo.

### 2. Cero Cookies por Defecto (Privacy by Default)
*   Hasta que el usuario no haga click, **NO se carga Google Analytics ni Pixel de Meta**.
*   Solo se carga la cookie técnica de sesión (`civicum_session`), que es exenta de consentimiento.

### 3. Lenguaje Claro
*   No: "Usamos cookies para mejorar tu experiencia..." (Mentira genérica).
*   Sí: "Usamos cookies para saber cuánta gente entra. No vendemos tus datos."

---

## 🧪 Test del "Click Rápido"
1.  Entrar en modo incógnito.
2.  Revisar consola de desarrollador -> Application -> Cookies.
3.  **Meta:** La lista debe estar **VACÍA** (salvo estrictamente necesarias).
4.  Hacer click en "Rechazar".
5.  **Meta:** La lista sigue vacía y el banner desaparece.

---
*Documento generado para cerrar Hallazgo TR5-01.*
