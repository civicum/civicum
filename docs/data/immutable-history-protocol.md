# Protocolo de Historia Inmutable (Squad Orwell-4)

**Squad:** 84. Escuadrón Orwell-4: Historia Inmutable  
**Misión:** Verificar que nadie pueda reescribir el pasado (logs de promesas).  
**Responsables:** Data Architect, Criptografía, Auditoría Ciudadana, SRE.

## 1. Prohibido `UPDATE` en Promesas
Si un candidato promete "Construir puente" y luego quiere cambiarlo a "Estudiar factibilidad de puente":
- **DB:** No se hace un `UPDATE`. Se hace un `INSERT` de una nueva versión.
- **UI:** Se muestra el historial de cambios ("Diff") visible para todos. "El candidato editó su promesa el [FECHA]".

## 2. Log Merkle (Blockchain-lite)
- Cada acción crítica genera un hash que incluye el hash de la acción anterior.
- Si un admin de base de datos intenta borrar un registro antiguo, rompe la cadena criptográfica y salta una alarma de integridad global.

## 3. "Screenshots" Notariales
- Periódicamente, congelamos el estado de las promesas y lo subimos a IPFS o una red pública inmutable. Civicum no puede borrar la historia ni aunque nos presionen legalmente.

*El pasado ya no se puede borrar, solo se puede aprender de él.*
