# 🔐 ENTROPÍA DE PASSWORDS & PASSKEYS

**Versión:** 1.0
**Squad:** 244 Enigma-4
**Misión:** Matar el "123456" sin obligar al usuario a usar "P@$$w0rd!".

---

## 🎯 La Paradoja de la Complejidad
Obligar a cambiar la clave cada 3 meses y pedir caracteres raros hace que la gente la anote en un post-it. Eso es MENOS seguridad.

## 🛡️ NUEVO ESTÁNDAR DE AUTENTICACIÓN

### 1. Longitud > Complejidad
*   Rechazamos claves cortas (< 12 caracteres).
*   Aceptamos frases largas ("micaballocomepasto") sin exigir números ni símbolos. Son más fáciles de recordar y matemáticamente más difíciles de romper por fuerza bruta.

### 2. Ban-List de Diccionario
*   Integramos `zxcvbn` y la lista de "Have I Been Pwned".
*   Si tu clave es "ColoColo2026", el sistema la rechaza por ser **común**, no por ser simple.

### 3. Passkeys First (FIDO2)
*   Promovemos agresivamente el uso de **Passkeys** (Huella/FaceID del dispositivo).
*   El usuario promedio no debería ver un campo de password nunca más. Transformamos la autenticación en criptografía asimétrica invisible.

---
*La mejor contraseña es la que no tienes que recordar.*
