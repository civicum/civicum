# Protocolo de Dependencias Zombis (Squad Lambda-Tres)

**Squad:** 59. Escuadrón Lambda-Tres: Dependencias Zombis  
**Misión:** ¿Qué pasa si una librería externa (ej: mapas) deja de existir mañana?  
**Responsables:** Arquitecto Software, Security Architect, Compliance, Open Data.

## 1. La Regla de la Abstracción
Nunca importamos librerías de terceros directamente en el código de negocio.
- **Wrapper:** Creamos nuestra propia interfaz (ej: `CivicumMap`) que por debajo usa Mapbox, Google Maps o Leaflet.
- **Beneficio:** Si Mapbox empieza a cobrar caro, cambiamos el adaptador de `CivicumMap` a Leaflet y el resto de la app ni se entera. No hay refactor masivo.

## 2. Vendor Risk Assessment
- **Bus Factor:** No usamos librerías mantenidas por una sola persona en su tiempo libre (salvo que sean triviales de reescribir).
- **Plan B:** Para cada dependencia crítica (Auth, DB, Mapas), debe haber una alternativa identificada y probada conceptualmente.

## 3. Congelamiento de Versiones (Pinning)
- Jamás usamos rangos semánticos (`^1.0.0`) en producción para dependencias críticas. Usamos versiones exactas (`1.2.3`) para evitar que un update automático rompa todo un lunes a las 9 AM.

*El código que no escribimos es el que más debemos vigilar.*
