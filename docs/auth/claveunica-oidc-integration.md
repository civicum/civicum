# Integración ClaveÚnica (Squad 201)

**Misión:** Auditoría del protocolo OIDC. ¿Podemos integrar el login del Estado sin romper la seguridad?

## 1. El Riesgo del Replay Attack y Leak de PII
ClaveÚnica utiliza el protocolo **OpenID Connect (OIDC) sobre OAuth 2.0**.
Si CIVICUM implementa un flujo *Authorization Code* de manera insegura (sin PKCE, ignorando el parámetro `nonce` o `state`), un atacante podría reutilizar una respuesta de autorización (Replay Attack) y suplantar la identidad de un alcalde o del administrador en pleno proceso cívico. Adicionalmente, almacenar los datos brutos del RUN entregados en el JWT generaría dependencia jurídica a la Ley de Privacidad chilena.

## 2. Abstracción Segura (Clerk OIDC)
El equipo de Identity & Access (Rol 23) determina:
*   CIVICUM no manejará directamente la criptografía JWS/JWE de los tokens de Gobierno Digital. Todo el flujo OIDC de ClaveÚnica será ruteado a través del proveedor de identidad certificado (Ej: Clerk Enterprise OIDC Flow o Supabase Auth).
*   **Parámetros Obligatorios:**
    *   `state`: Obligatorio para prevenir CSRF (Cross-Site Request Forgery). Validación de Sesión.
    *   `nonce`: Obligatorio en el JWT ID Token para ligar la identidad con la petición de cliente, eliminando *Replay Attacks*.
*   **Hashing de RUT Temprano:** Tras recibir el Payload `{"RolUnico": {"numero": X, "DV": Y}}`, el RUT se anonimiza usando un Hash Criptográfico unidireccional (Bcrypt/Argon2) en memoria. El RUT real **nunca entra en contacto físico y persistente con los discos (Data-at-rest)** de Vercel/Neon para cuentas normales ciudadanas (Nivel 1).
