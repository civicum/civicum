# 🔗 OBSOLESCENCIA DE LINKS (LINK ROT)

**Versión:** 1.0
**Squad:** 284 Limpieza-4
**Escenario:** Una denuncia histórica de 2022 sobre un bache referenciaba una foto en `img.servidor-viejo.cl/foto1.jpg`. Ese servidor se apagó. El reporte histórico ahora muestra un icono roto.

---

## 🎯 La Historia Borrada
La web es efímera. Un archivo cívico no puede permitirse enlaces rotos.

## 🛡️ ESTRATEGIA DE PRESERVACIÓN

### 1. Ingesta, no Referencia
*   **Regla:** Nunca guardamos solo la URL de un recurso externo crítico (evidencia).
*   **Acción:** Al momento de recibir el link, un worker descarga el recurso y lo guarda en nuestro propio Object Storage (S3 Glacier para costos bajos) con un Hash de integridad.

### 2. El "Wayback Machine" Interno
*   Si el recurso original muere (404), el sistema automáticamente hace fallback a la copia archivada en Civicum (`/archive/2022/...`).
*   UI visualiza: *"Fuente original no disponible. Mostrando copia archivada el [Fecha]"*.

### 3. Chequeo Periódico (Link Health Check)
*   Un cron job mensual verifica una muestra de enlaces externos en documentos públicos.
*   Si detecta "Rot", marca el link visualmente como [ENLACE ROTO] para no frustrar al usuario y sugiere buscar en el archivo.

---
*Lo que sube a la nube, a veces se evapora. Nosotros lo congelamos.*
