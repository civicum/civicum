# WebAuthn y Passkeys vs Contraseñas Débiles (Squad 244)

**Misión:** Política de contraseñas. ¿Obligamos a caracteres especiales o usamos passkeys?

## 1. El Riesgo del Abuelito y el "Admin123"
Si obligamos a crearse una contraseña para entrar a CIVICUM, exigiéndole "1 mayúscula, 1 número y 1 símbolo" a un Adulto Mayor, no lo logrará, se le olvidará, y dejará de participar. La democracia falla por UX Cryptográfica mala.
Si lo dejamos elegir libremente, usará *"Colocolo1991"*, un bot ruso que corra diccionarios (Brute-Force Attack) robará la cuenta, subirá Spam a "Las Quejas de mi Barrio" y comprometerá el peso de la comuna en algoritmos espurios.

## 2. Paradigma Zero-Password (FIDO2)
Clerk B2C o Supabase Auth asumen el flujo nativo "Passwordless".

1.  **Muerte del Sistema de Contraseña Clásico:** Se elimina la base de datos de Hashes de Contraseñas del código nativo. CIVICUM ya no valida ni compara hashes de strings (BCrypt/Argon2). No hay nada que el atacante pueda robarnos en ese modelo.
2.  **Passkeys por Defecto:** La prioridad de enrolamiento utiliza FaceID / Huella Dactilar Local / Windows Hello (WebAuthn). Las llaves criptográficas asimétricas de los ciudadanos las gestiona el chip TPM/Secure Enclave de sus propios teléfonos celulares, no la nube.
3.  **Fallback Cívico OTP:** Si el celular es antiguo, se utiliza Login sin Password Vía Email / SMS / WhatsApp enviando un Código de 6 Dígitos TDAH amigable (`Magic Link / OTP`).
La seguridad es impecable y la fricción de memoria ciudadana baja a Cero.
