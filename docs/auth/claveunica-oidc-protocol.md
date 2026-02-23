# 🔐 PROTOCOLO CLAVEÚNICA (INTEGRACIÓN OIDC)

**Versión:** 1.0
**Squad:** 201 Clave-1
**Misión:** Autenticación oficial del Estado sin venderle el alma al Estado.

---

## 🎯 El Desafío
Usar ClaveÚnica sube la confianza (sabemos que eres una persona real), pero asusta a los usuarios preocupados por la vigilancia estatal.

## 🛡️ ESTRATEGIA DE INTEGRACIÓN (MINIMAL DISCLOSURE)

### 1. Scopes Limitados (OIDC)
*   Al solicitar el token a `accounts.claveunica.gob.cl`, solo pedimos:
    *   `run` (RUT): Para unicidad.
    *   `name`: Para dirigirnos a ti.
    *   **NO SOLICITAMOS:** Domicilio electoral, estado civil, ni datos extra que la API a veces ofrece.

### 2. Hashing del Identificador (Privacy-First)
*   En nuestra BD, **NO GUARDAMOS EL RUT** en texto plano si no es estrictamente necesario para trámites legales.
*   Guardamos `Hash(RUT + SALT_SECRETO)` para uso general de la app (votar, comentar).
*   Esto impide que un leak de CIVICUM exponga los RUTs de todos los chilenos.

### 3. Logout Sincronizado
*   Seguridad: Si el usuario cierra sesión en CIVICUM, forzamos el `end_session_endpoint` de ClaveÚnica para evitar que la sesión quede abierta en un ciberbarrio.

---
*Identidad verificada, privacidad blindada.*
