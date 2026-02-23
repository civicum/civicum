# 🪞 KIT DE AUTOGESTIÓN (SELF-HOSTING)

**Versión:** 1.0
**Squad:** 198 Espejo
**Misión:** "Tu Comuna, Tu Servidor". Soberanía digital local.

---

## 🎯 Descentralización Radical
Un municipio rural en la patagonia no quiere depender de un servidor en Virginia. Quieren tener sus datos en su edificio consistorial.

## 🛡️ CIVICUM IN A BOX (DOCKER)

### 1. El `docker-compose.yml` Maestro
Un solo archivo para levantarlo todo:
```yaml
version: '3.8'
services:
  app:
    image: civicum/core:latest
  db:
    image: postgres:15
  redis:
    image: redis:alpine
  proxy:
    image: nginx:alpine
```
**Comando:** `docker-compose up -d`

### 2. Federación (ActivityPub)
*   El Civicum de "Punta Arenas" puede hablar con el Civicum de "Arica".
*   Usamos protocolo **ActivityPub** (el mismo de Mastodon) para compartir alertas nacionales o estadísticas, manteniendo las bases de datos de usuarios separadas y soberanas.

### 3. Licencia (AGPLv3)
*   El código es libre, pero con "Copyleft Fuerte".
*   Si una consultora modifica Civicum para vendérselo a un municipio, **ESTÁ OBLIGADA** a liberar esas modificaciones al público. No pueden cerrar el código.

---
*La democracia no se escala verticalmente, se federa horizontalmente.*
