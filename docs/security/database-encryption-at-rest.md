# Verificación Forense de Cifrado At-Rest (Squad 243)

**Misión:** Verificación forense de que los discos de la BD estén realmente cifrados.

## 1. El Riesgo del Robo Físico (Data-at-Rest Leak)
Si un Datacenter en AWS o Vercel R2 (Cloudflare) sufre una intrusión física o reciclaje descuidado de discos de estado sólido (SSDs), todo el JSON de nuestra base de datos relacional (incluidas las quejas anónimas) es volcado.
Si Neon Postgres no tiene habilitado explícitamente el cifrado en reposo (At-Rest), el atacante simplemente corre un montador de volumen y lee en texto plano a los 100,000 usuarios de la comuna.

## 2. Pautaje "Always Encrypted" de Nivel País
No damos por sentado la seguridad "por defecto" de los proveedores cloud.

1.  **Neon DB `pg_crypto` mandatory:** Los volúmenes EBS subyacentes donde reside CIVICUM deben forzar encriptación AES-256 manejada por el KMS de la nube.
2.  **Cifrado Activo por Fila (Column-Level Encryption):** Información confidencial crítica, como los correos electrónicos o los teléfonos del Padrón de Voluntarios, sufren doble encriptación. No solo el disco, sino la propia Data dentro de Drizzle a nivel de código (`crypto.subtle.encrypt` o pgcrypto SQL). Si Neon como servicio es bypaseado y la contraseña de la conexión Postgres se filtra desde un frontend, el hacker al hacer `SELECT * FROM users` solo obtendrá `0xAE8C11...` en los campos críticos de contacto.
3.  **Auditoría ISO 27001 Estricta:** Si usamos Redis Global (Upstash) para Rate Limiting, la configuración TLS está habilitada, y todo Cache Snapshot hacia S3 Bucket debe incluir KMS encryption. Ningún byte se archiva "desnudo" en frío.
