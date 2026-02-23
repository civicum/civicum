# 💉 CDN HIJACKING (SUBRESOURCE INTEGRITY)

**Versión:** 1.0
**Squad:** 313 Supply-3
**Escenario:** Usamos jQuery desde `code.jquery.com`. Hackean el CDN de jQuery y reemplazan el archivo `.js` con un criptominero. Todos nuestros usuarios empiezan a minar Monero.

---

## 🎯 Confianza Cero en Terceros
Cargar código ajeno en el navegador del usuario es darle las llaves de su casa a un extraño.

## 🛡️ PROTOCOLO SRI (SUBRESOURCE INTEGRITY)

### 1. Hash Obligatorio en Tags
*   Nunca: `<script src="https://cdn.com/lib.js"></script>`
*   Siempre: `<script src="https://cdn.com/lib.js" integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/ux..." crossorigin="anonymous"></script>`
*   El navegador verifica que el Hash del archivo recibido coincida exáctamente. Si cambia un solo bit (hackeo), el navegador **bloquea la ejecución**.

### 2. Self-Hosting de Críticos
*   Librerías core (React, Analytics propio) **NO** se cargan desde CDNs públicos.
*   Se empaquetan en nuestro propio bundle y se sirven desde nuestro origen (`assets.civicum.cl`), bajo nuestro control y WAF.

### 3. CSP (Content Security Policy) Estricto
*   Cabecera HTTP que dice: *"Solo ejecutar scripts que vengan de `civicum.cl` y `trusted-cdn.com`"*.
*   Si el inyector intenta cargar un script desde `evil-hacker.com`, el navegador lo rechaza.

---
*Si no lo firmamos nosotros, no corre en el cliente.*
