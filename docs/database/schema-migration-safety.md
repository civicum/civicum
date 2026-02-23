# 🗄️ SEGURIDAD DE DATOS: PROTOCOLO DE MIGRACIÓN DE ESQUEMA

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 116 — Entropía-1: Schema Migration Nightmare  
**Soluciona:** Hallazgo E1-01 (Corrupción de Datos Históricos en Update)

---

## 🎯 La Amenaza Entrópica
Un developer junior añade una columna `NOT NULL` sin valor por defecto a una tabla con 1 millón de filas. O cambia el tipo de dato de `text` a `varchar(50)` y trunca las descripciones largas.
Resultado: **Downtime catastrófico o pérdida de datos silenciosa.**

---

## 🛡️ Protocolo de Migración Invencible

### 1. Regla de Oro: "Expand & Contract"
Nunca hacer cambios destructivos en un solo paso.
1.  **Expand:** Añadir nueva columna (nullable). El código escribe en ambas, lee de la vieja.
2.  **Migrate:** Script de fondo copia datos viejos a nuevos.
3.  **Contract:** El código lee de la nueva. Se borra la columna vieja (en el siguiente deploy).

### 2. CI/CD Migration Sandbox
*   Antes de producción, las migraciones corren en un entorno efímero con una **copia anonimizada de datos de producción** (no base vacía).
*   Si la migración tarda > 5 segundos o bloquea la tabla, el CI falla.

### 3. Backup Instantáneo (Point-in-Time Recovery)
*   Antes de aplicar `drizzle-kit push` o `migrate`, el pipeline toma un snapshot de la DB (`pg_dump` o snapshot de Neon).
*   **Rollback Automatizado:** Si el healthcheck falla post-deploy, se restaura el snapshot automáticamente.

### 4. Prohibición de `DROP TABLE` / `DROP COLUMN`
*   Estas sentencias requieren aprobación manual explícita de `Rol 30 (Data Architect)` y solo se ejecutan en ventanas de mantenimiento anunciadas.

---

## 🧪 Simulacro "El Becario Destructor"
1.  Crear migración que borra la tabla `votes`.
2.  Intentar deployar.
3.  **Éxito:** El CI detecta la operación destructiva y bloquea el PR con una alerta roja gigante.

---
*Documento generado para cerrar Hallazgo E1-01.*
