# 💸 EL PROVEEDOR QUEBRADO (PLAN DE MIGRACIÓN)

**Versión:** 1.0
**Squad:** 314 Supply-4
**Amenaza:** Nuestro proveedor de DB-as-a-Service (Neon, Supabase, PlanetScale) anuncia que cierra operaciones o cambia sus precios un 500% mañana.

---

## 🎯 No te Cases con la Infraestructura
La "Nube" es la computadora de otra persona. Y esa persona puede quebrar.

## 🛡️ VENDOR AGNOSTIC STRATEGY

### 1. El "Eject Button" de Datos
*   No usar características propietarias del vendor que no tengan equivalencia estándar.
*   Si usamos Postgres en Neon, usar **Postgres Standard**. No usar sus funciones "Magic Serverless" si no hay forma de replicarlas en un Docker local.

### 2. Simulacro de Migración (Fire Drill)
*   Una vez al año:
    *   Levantar un dump de la base de datos de producción en un RDS de AWS (o contenedor local).
    *   Apuntar la API de Staging a esa nueva DB.
    *   Verificar que la app siga funcionando.
*   Esto garantiza que el backup es restaurable en otro proveedor.

### 3. Contratos de Escrow (Código Fuente)
*   Para proveedores SaaS de misión crítica pequeños: Exigir cláusula de "Escrow".
*   Si quiebran, liberan su código fuente o herramientas de exportación para que los clientes puedan auto-hostearse temporalmente.

---
*Nuestros datos son nuestros, sin importar dónde duerman hoy.*
