# Rotación de Seguridad (Key Compromise Protocol) (Squad 241)

**Misión:** Procedimiento de emergencia si perdemos la llave maestra de encriptación.

## 1. El Riesgo de Cripto-Decapitación
Si la clave secreta `JWT_SIGNING_KEY` y la `SESSION_SECRET` de servidor NodeJS terminan publicadas en un repo público de GitHub por error de un Junior o son filtradas por un administrador en descontento, todo usuario activo es vulnerable de *Account Takeover*. Un atacante podría falsificar tokens y votar mil veces en nombre de la Alcaldesa.

## 2. Arquitectura Secret Manager "Sin-Toque"
CIVICUM debe diseñar su nube para desconfiar de sí mismo.

1.  **Zero-Env-Local Prod:** Las credenciales que tocan instancias productivas (`DATABASE_URL`, `JWT_KEY`, `RESEND_API`) jamás se alojan estáticas en un archivo `.env` o en la consola manual de Vercel de la ONG (`Click-Ops`). Proceden exclusivamente a través de un gestor de secretos efímero tipo *HashiCorp Vault*, *AWS Secrets Manager* o *Doppler*.
2.  **Zero-Downtime Rotation (Key Staggering):** Ante la brecha, se activa el "Panic Button". Vercel/Node expulsa a todo JWT activo de Redis (Forzando re-login masivo nacional), e inicia la emisión en 30 minutos de JWTs usando una *Llave Criptográfica Primaria B*. La clave comprometida "A" pasa temporalmente a estado *Read-Only Verification* para validar votos antiguos rezagados (en caché offline) sin tumbar su validez ciudadana (hasta que su TTL muera).
