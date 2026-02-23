# 🔓 PROTOCOLO LEGADO (DATA LIBERATION)

**Versión:** 1.0
**Squad:** 196 Legado
**Escenario:** CIVICUM cierra sus puertas. ¿Qué pasa con los datos?

---

## 🎯 El Testamento Digital
Si el servidor se apaga, la inteligencia colectiva no puede morir. Debemos entregar todo a la comunidad, pero sin violar la privacidad de nadie.

## 🛡️ PROCEDIMIENTO DE LIBERACIÓN

### 1. The Great Dump (Archivo SQL Sanitizado)
*   Script automatizado que genera un `dump` de PostgreSQL.
*   **Reglas de Sanitización de Hierro:**
    *   `users`: ELIMINADA completa.
    *   `votes`: Se mantiene `topic_id`, `timestamp`, `value`. Se ELIMINA `user_id` y `ip_address`.
    *   `reports`: Se mantiene título, descripción, lat/long. Se anonimiza el autor (`user_id` -> `NULL`).
    *   `comments`: Se mantienen. Se anonimiza autor.

### 2. Archivo de Medios (IPFS)
*   Todas las fotos de reportes (baches, plazas) se suben a **IPFS** (InterPlanetary File System) para garantizar persistencia descentralizada permanente.
*   Se genera un índice JSON (`hash` -> `report_id`).

### 3. Licenciamiento
*   Todo el dataset se libera bajo **Creative Commons Zero (CC0)** (Dominio Público).
*   Cualquier municipio, universidad o IA puede usarlo para entrenar modelos o planificar ciudades.

---
*CIVICUM puede morir, pero los problemas que documentamos son inmortales.*
