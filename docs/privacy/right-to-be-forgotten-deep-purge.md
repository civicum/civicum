# Protocolo de Derecho al Olvido y Borrado Profundo (Squad Kafka-Delta)

**Squad:** 69. Escuadrón Kafka-Delta: Derecho al Olvido  
**Misión:** Un usuario pide borrar todo su historial. ¿Se borra de verdad (incluyendo backups)?  
**Responsables:** Abogado Privacidad, Privacy Engineer, Data Architect, SRE.

## 1. El Botón Nuclear ("Borrarme de la Historia")
El usuario tiene derecho a desaparecer de Civicum sin dejar rastro.
- **Alcance:** DB PostgreSQL, Logs (Elastic/Datadog), Backups, Cache (Redis), CDN.

## 2. La Paradoja del Backup
No podemos reescribir backups antiguos (inmutables), pero:
- **Crypto-Shredding:** Los datos sensibles de cada usuario están encriptados con una llave única. Al borrar al usuario, borramos su llave maestra. El backup queda con "basura cifrada" irrecuperable.
- **Restauración:** Si restauramos un backup antiguo, una "Lista Negra de IDs Borrados" se ejecuta automáticamente para volver a purgar a los usuarios zombis.

## 3. Excepción de Interés Público
- Si el usuario reportó corrupción y el caso está abierto en fiscalía, conservamos los datos bajo "Nut-Seal" (sellado legal) por el plazo que la ley obligue, pero inaccesibles para la operación diaria.

*El olvido es un derecho humano, no un bug de la base de datos.*
