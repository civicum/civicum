# Protocolo de Integridad de Datos Offline (Squad Lambda-Uno)

**Squad:** 57. Escuadrón Lambda-Uno: Corrupción de Datos Offline  
**Misión:** Interrumpir la sincronización a la mitad (cortar internet). ¿Se pierden datos?  
**Responsables:** Backend Lead, Arquitecto Software, SRE, Data Architect.

## 1. La Prueba del "Corte de Cable"
Simulamos que el usuario entra a un túnel justo cuando la barra de progreso de "Enviendo reporte..." va en 99%.
- **Resultado Esperado:** La app detecta el fallo de red, guarda el payload exacto en IndexedDB y reintenta automáticamente cuando vuelve la conexión (Background Sync).
- **Resultado Prohibido:** Estado "Zombie" (ni guardado ni enviado) o duplicación de datos.

## 2. Idempotencia Sagrada
Si el cliente envía el mismo reporte 5 veces por error de red:
- El servidor recibe 5 requests pero *solo crea 1 registro*.
- Uso de `Idempotency-Key` (UUID generado en el cliente al momento de crear el reporte).

## 3. Conflict Resolution (Last Write Wins?)
Si dos usuarios editan el mismo reporte offline:
- **Estrategia:** "Merge Inteligente" si son campos distintos. Si es el mismo campo, priorizamos la edición más reciente (basada en timestamp del servidor, no del cliente, para evitar fraudes de reloj).

*Internet es efímero. Los datos del usuario deben ser eternos.*
