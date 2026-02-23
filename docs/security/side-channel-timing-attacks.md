# Mitigación Side-Channel (Timing Attacks) (Squad 269)

**Misión:** Adivinar si una persona del espectro político existe en la base midiendo la latencia de error.

## 1. El Riesgo de Evasión por Milisegundos de Node.js
Un hacker sabe que el Alcalde de un municipio se registró "Oculto" en CIVICUM. Va al formulario `"Olvidé mi contraseña"` en Supabase/Auth0 e introduce el RUT del Alcalde (`run: 8.910.822-2`). 
Si el RUT **NO** existe, la BD responde "Usuario No encontrado" en apenas `9 milisegundos`. 
Si el RUT **SÍ** existe, la BD requiere hashear y lanzar el correo de recuperación a AWS SES, tomando cerca de `150 milisegundos`. Aún si devolvemos "Si la cuenta existe enviamos un correo...", la brecha de tiempo de `140ms` permite que un script automatizado enumere Cuentas Válidas a lo largo de un barrio, doxeando la presencia política encubierta. 

## 2. Ecualización Forense de Respuesta (Constant-Time Resolution)

1.  **Algoritmo de Fricción Idéntica (Delay Injection):** Queda prohibida la finalización temprana (Early-Return `404`) en operaciones asociadas a UUIDs Personales, Auth Tokens, Recuperación o Rut Enumeration. 
2.  **Timer de Compensación Absoluta:** El bloque `catch()` asincrónico evaluará cuánto tiempo demoró la primera capa. Si demoró `25ms`, invoca un esqueleto criptográfico ciego falso: Node procederá de igual modo a calcular un BCrypt Hash inventado (usando la CPU de EC2 por 100ms) o a instanciar un Call de Axios con Promesa rechazada ciegamente. 
3.  **Resultado Invariable:** Todo `POST` al endpoint sensible devolverá un Código Ficticio genérico devolviéndose a la red de origen invariablemente en **~300ms estandarizados** (+- Jitter aleatorio imperceptible). El hacker ve ruidos blancos constantes (Pared de concreto de tiempos), deteniendo la Enumeración Masiva Side-Channel en seco.
