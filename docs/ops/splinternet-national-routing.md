# 🇨🇱 INTERNET FRAGMENTADA (SPLINTERNET NACIONAL)

**Versión:** 1.0
**Squad:** 291 Survival-1
**Escenario:** Un evento geopolítico mayor corta los cables submarinos. Chile queda desconectado de AWS (USA) y Google (Europa). Solo funciona la red nacional (PIT Chile).

---

## 🎯 Soberanía Digital Forzada
Si nuestra nube está en Virginia (us-east-1), Civicum muere aunque el usuario y el servidor estén en Santiago.

## 🛡️ RUTA NACIONAL OBLIGATORIA

### 1. Multi-Cloud Nacional
*   No depender 100% de regiones extranjeras.
*   Mantener una réplica "Standby" mínima (solo base de datos y API core) en un data center físico en territorio chileno (ej: GTD, Entel o Huawei Cloud Santiago Region).

### 2. DNS Failover Local
*   Si los roots servers del mundo no responden:
    *   Configurar TTLs largos en DNS.
    *   Promover el uso de DNS públicos chilenos (NIC Chile) que resuelvan rutas locales sin salir al exterior.

### 3. Dependencias "Vendored"
*   El frontend no puede cargar `fonts.googleapis.com` o `cdn.jsdelivr.net`.
*   **Regla Survival:** Todos los assets críticos (fuentes, JS, CSS) deben estar hosteados en nuestro propio dominio o empaquetados en la app móvil. Nada de CDNs extranjeros para el Core.

---
*Cuando el mundo se apaga, Chile debe seguir conectado.*
