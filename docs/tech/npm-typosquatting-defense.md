# 🧶 NPM TYPOSQUATTING (CADENA DE SUMINISTRO)

**Versión:** 1.0
**Squad:** 311 Supply-1
**Amenaza:** Un desarrollador escribe `npm install react-domm` (con doble m) por error. Descarga un paquete malware que roba las variables de entorno (`.env`) y las envía a un servidor en Rusia.

---

## 🎯 El Error de Dedo Fatal
La seguridad de toda la plataforma depende de que nadie se equivoque al tipear.

## 🛡️ DEPENDENCY LOCKDOWN

### 1. `.npmrc` Estricto
*   Configurar `save-exact=true` para evitar rangos de versiones ambiguos (`^1.0.0`).
*   Usar un **Proxy de Registro Privado** (Verdaccio o Nexus) que solo permita descargar paquetes previamente aprobados ("Allowlist").

### 2. Validación de Typosquatting en CI
*   Script que corre antes del `npm install`.
*   Compara el `package.json` contra una lista de "paquetes populares" (React, Lodash, Express).
*   Si encuentra un paquete con Distancia de Levenshtein < 2 de un paquete popular (ej: `expressjs` vs `express`), aborta el build y alerta al equipo de Seguridad.

### 3. Lockfile Inmutable
*   El `package-lock.json` es sagrado.
*   En CI/CD, usar siempre `npm ci` (Clean Install), que respeta el lockfile al byte. Nunca usar `npm install` en producción, porque podría resolver a una versión infectada nueva.

---
*Un caracter de más puede costar la base de datos.*
