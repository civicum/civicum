# El Olvido Digital y Purga TTL (Squad 275)

**Misión:** ¿Los logs de IP se borran a los 30 días como promete la Política?

## 1. El Riesgo de Acumulación (Data Hoarding)
CIVICUM promete en el FAQ: *"Los datos brutos de su IP de conexión solo se usan 30 días por seguridad Anti-DDoS o por si la PDI lo requiriera bajo orden fiscal, luego los borramos"*.
Pero en Arquitectura Cloud, Vercel o Cloudflare exportan los logs silenciosamente a AWS S3 y nunca se configuran los Lifecycle Rules. La ONG (a través de Civia) sin querer en el año 2028 posee todo el historial de movimiento físico y conexión (IP) de 4 millones de Chilenos, volviendo a CIVICUM el blanco perfecto de un ataque hacker para rastrearlos o de extorsión de Estado. Promesa Rota = Cárcel.

## 2. Garantía de Inexistencia Material

1.  **S3 Bucket Lifecycle Rules (Muerte Automática):** Queda prohibida la dependencia en el equipo "Humano". Todo Log que viaja a almacenamiento frío (Cold Storage en AWS/R2) es forzado vía `Terraform` a entrar con Metadata `ExpirationRules`. A los 30 días (T+30), Amazon destruye los bytes de la infraestructura física del mundo real irreversiblemente mediante Wiping del File System.
2.  **Purga PostgreSQL Oculta (Soft a Hard Delete):** Si Juan cancela su cuenta de CIVICUM en un ataque de cólera con el alcalde. El sistema hace Soft Delete (`deleted_at = Now()`) para no descuadrar la contabilidad relacional en los 15 días posteriores por gracia legal. Pero una lambda T+15 despierta de madrugada y hace un `CASCADE DELETE` pericial, quemando fotos de perfil, email, RUT y logs UUID del esquema Postgres para siempre.
3.  **The "Nothing to Give" Defense:** Si el presidente de facto (Año imaginario 2038) manda un Subpoena forzando a entregar el historial de conexión IP del año anterior de los vecinos que se organizaron para protestar, la ONG se cruzará de brazos ante tribunales indicando: *"La Data no existe físicamente en el silicio"*. La mejor defensa jurídica es la ignorancia de código (Data Minimalism).
