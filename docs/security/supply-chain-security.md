# Protocolo de Seguridad de Cadena de Suministro (Squad D3)

**Squad:** 15. Escuadrón D3: Supply Chain Security  
**Misión:** Verificar que ninguna librería NPM tenga malware o vulnerabilidades.  
**Responsables:** Security Architect, OpSec, Compliance, SRE.

## 1. El Peligro de NPM
El 90% de nuestro código es de terceros. Un `npm install` es un acto de fe que debemos mitigar.

### Reglas de Inclusión de Dependencias
1.  **Popularidad y Mantenimiento:** No usamos librerías con <100 estrellas o sin commits en 1 año (salvo auditoría manual).
2.  **Bundlephobia:** Revisar el peso. Si una librería de fecha pesa 2MB, se rechaza.
3.  **Licencia:** Solo MIT, Apache 2.0, BSD. (AGPL requiere revisión legal).

## 2. Lockfile Inmutable
- `package-lock.json` es la fuente de la verdad.
- En CI/CD usamos `npm ci` (Clean Install), nunca `npm install`, para asegurar que se instalen las versiones exactas hasheadas.

## 3. Auditoría Automatizada (SCA)
- **Dependabot / Renovate:** Activado para alertas de seguridad críticas.
- **npm audit:** Bloquea el deploy si hay vulnerabilidades de nivel `High` o `Critical`.

## 4. Typosquatting Defense
- Antes de añadir una librería, verificar que el nombre sea exacto. (ej: no instalar `react-domm` en vez de `react-dom`).
- Uso de scopes `@org/paquete` cuando sea posible para garantizar autoría.

## 5. Script Injection
- Revisar los `postinstall` scripts de las dependencias. A menudo es donde se esconde el malware para robar env vars.
- Bloquear ejecución de scripts de terceros en entorno de desarrollo si no son necesarios (`--ignore-scripts` con whitelist).

*Nuestro código es tan seguro como la librería más débil que importamos.*
