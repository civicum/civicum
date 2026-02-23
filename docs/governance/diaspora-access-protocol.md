# 🌍 PROTOCOLO DE ACCESO: DIÁSPORA Y TURISTAS 

**Versión:** 1.0
**Squad:** 161 Diáspora / 162 Turista
**Políticas:** Overrides a `geo-anomaly-detection.md`

---

## 🎯 Objetivo
Permitir que chilenos en el exterior y visitantes temporales participen en CIVICUM sin comprometer la seguridad electoral ni la integridad de los datos locales.

## ✈️ PERFIL 1: EL CHILENO EN EL EXTRANJERO (DIÁSPORA)
**Definición:** Usuario con RUT válido y ClaveÚnica que accede desde una IP no chilena.

### Reglas de Acceso (Override Geo-Blocking)
1.  **Login Permitido:** Si el login es vía ClaveÚnica (GobID), se **permite** el acceso desde cualquier país.
    *   *Excepción:* IPs de data centers conocidos por botnets (ASN Blacklist), salvo que pasen challenge biométrico.
2.  **Modo "Voto Exterior":**
    *   El usuario NO vota en temas vecinales (baches, plazas) de su última comuna en Chile (para no distorsionar la realidad local).
    *   El usuario SÍ vota en: Temas Nacionales, Plebiscitos Simbólicos, y Consultas Consulares.
3.  **Etiqueta de Reporte:** Los reportes creados desde el exterior se marcan como "Origen: Diáspora" (ej: ideas globales aplicables a Chile), no como incidencias territoriales activas.

## 📷 PERFIL 2: EL TURISTA / RESIDENTE TEMPORAL
**Definición:** Usuario sin RUT chileno que quiere reportar un problema (ej: un hoyo peligroso o un robo).

### Reglas de Acceso
1.  **Nivel 0 (Guest):** Puede ver mapas y alertas de seguridad.
2.  **Reporte "Buen Samaritano":**
    *   Puede reportar incidencias de seguridad/ciudad con validación SMS (SIM extranjera permitida).
    *   Sus reportes entran a una cola de "Moderación Preventiva" antes de publicarse.
    *   No pueden votar ni influir en presupuestos.

---
*La ciudadanía va en la identidad, no en la IP.*
