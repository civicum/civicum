# Protocolo Omega (Cierre Definitivo de Emergencia)

**Versión:** 1.0
**Misión:** Establecer el procedimiento inquebrantable para apagar Civicum con dignidad, evitando que sea cooptado, monetizado indebidamente o convertido en un panóptico en caso de colapso extremo (Escuadrón 150 - Omega-Finalísimo).

## 1. Criterios de Muerte (Activadores)
El Protocolo Omega debe ser invocado de forma unánime por el Comité de Continuidad (Product Lead, Arquitecto, Abogado Público) si ocurre **CUALQUIERA** de estos eventos:
- **Quiebra Financiera:** Imposibilidad de mantener el servidor o la infraestructura de privacidad básica, arriesgando exposición de datos.
- **Cooptación Maliciosa:** Compra hostil por entidades que exigen abandonar el modelo apartidista, monetizar datos personales o violar las licencias (AGPL/Data).
- **Infiltración Irreversible:** Una brecha de seguridad que exponga RUTs y sea imposible de mitigar, o presión estatal inconstitucional para entregar las identidades de usuarios amparados en el secreto de denuncia.

## 2. Puesta del Sol (Sunset Period - 30 a 90 días)
Una vez activado, Civicum entra en "Freeze":
- No se permiten nuevos reportes, ni nuevos registros de usuarios.
- El home de la app y del portal web principal se reemplaza por el **"Manifiesto del Ocaso"**, explicando transparente e inmutablemente por qué Civicum cierra.
- Todas las APIs pasan a estado `Read-Only`.

## 3. Data Exodus (Exportación Masiva)
- Durante el Sunset Period, los usuarios tendrán un botón grande de "Exportar mi Historia Cívica".
- Se generarán empaquetados JSON/PDF firmados criptográficamente para que el usuario retenga su historial de participación.
- Los datasets públicos anonimizados (Cuentas Claras, Historia de Reportes Públicos) se publicarán de forma perpetua y gratuita en la red IPFS, Archive.org y repositorios universitarios, bajo licencia Open Data (CC BY 4.0). Civicum morirá, pero la verdad de lo que pasó en el país quedará.

## 4. Digital Cremation (Borrado Seguro "Wipe & Release")
Cumplido el Sunset Period:
1. Se invocan scripts "Kill Switch" que realizan múltiples pases de borrado (`Shred`/`Wipe`) en todos los clusters de base de datos Postgres (Neon) y Storage (R2).
2. Se eliminan irrevocablemente las llaves criptográficas (KMS) usadas para encriptar los datos PII.
3. Se purgan los backups y copias frías de toda empresa de nube externa.
4. El repositorio de código fuente se bloquea y se archiva globalmente (Read-Only) como bien público open-source para futuras generaciones.

>*Un ecosistema cívico sano incluye el coraje de auto-destruirse antes de convertirse en el monstruo que juró combatir.*
