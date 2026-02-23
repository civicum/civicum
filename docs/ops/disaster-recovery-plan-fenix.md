# 🔥 OPERACIÓN FÉNIX (RECONSTRUCCIÓN TOTAL)

**Versión:** 1.0
**Squad:** 197 Fénix
**Escenario:** AWS borra nuestra cuenta por error, o un ataque nuclear táctico borra el data center de Virginia.

---

## 🎯 La Misión
Levantar CIVICUM desde CERO en una nube diferente (ej: Google Cloud o Azure) en menos de 4 horas.

## 🛡️ EL KIT DE RESURRECCIÓN

### 1. Infraestructura como Código (Terraform Aagnóstico)
*   No usamos servicios propietarios (ej: AWS Cognito, AWS Lambda) si es evitable.
*   Preferimos contenedores Docker estándar y Kubernetes (K8s) o Postgres genérico.
*   **Comando:** `terraform apply -var="cloud=gcp"`

### 2. Backups Off-Site (La Caja Negra)
*   Cada 6 horas, un backup encriptado de la DB y el Storage se envía a:
    1.  Un Bucket en Azure (Cold Storage).
    2.  Un servidor físico en la oficina de la ONG (Air-gapped).

### 3. DNS Failover
*   El dominio `civicum.cl` tiene un TTL bajo (300s).
*   En caso de muerte de AWS, cambiamos los Nameservers a Cloudflare y apuntamos a la nueva IP de emergencia en GCP.

### 4. Modo "Solo Lectura" (Static Failover)
*   Mientras se restaura la DB (que puede tardar horas), levantamos una versión estática de la web que dice:
    *   *"Estamos reconstruyendo la democracia. Volvemos en breve. (Tus datos están seguros)"*

---
*No importa qué tan fuerte nos golpeen, siempre volvemos.*
