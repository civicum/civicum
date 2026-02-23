# Phoenix Recovery Plan (Squad 197)

**Misión:** Borramos todo el servidor Vercel y Neon. ¿Cuánto tardamos en levantarlo desde 0 en otra nube?

## 1. El Riesgo del Administrador Comprometido (Rogue Admin)
Si un atacante adquiere el Root MFA de Vercel/AWS y ejecuta un borrado total (Terminación de Instancias), la continuidad democrática de la plataforma se detiene. El *Mean Time To Recovery* (MTTR) dicta la vida o muerte del proyecto en la opinión pública.

## 2. Infrastructure as Code (IaC) Strict
CIVICUM prohíbe el "ClickOps" (usar la interfaz gráfica de Vercel/Cloudflare para configurar endpoints, variables o firewalls). Todo debe existir en `Terraform` o `Pulumi`.
Si la nube A (AWS) desaparece, el comando `terraform apply` en un archivo de configuración clonado debe ser capaz de recrear las redes VPC, Edge Functions y colas de Kafka en la Nube B (GCP).

## 3. Estrategia de Backup Frio Diferencial
Para reconstruir la Base de Datos desde 0:
*   Neon implementa Retención Point-In-Time (PITR) y hace volcado automático a S3 Bucket (Cold Storage) no atado a las mismas credenciales de escritura de Neon. Las llaves de acceso al Bucket Maestro deben requerir autenticación multiparte (Shamir's Secret Sharing) de 3 de los 5 fundadores principales para ejecutar la extracción.
*   **MTTR Target:** < 4 horas. El sistema de restauración reconstruye los esquemas con Drizzle, hace `COPY` del dump SQL desde S3, y ajusta los DNS en Cloudflare usando la API. CIVICUM renace como el Fénix.
