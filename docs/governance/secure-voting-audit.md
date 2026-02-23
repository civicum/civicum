# Protocolo de Auditoría de Voto Seguro (Squad B5)

**Squad:** 46. Escuadrón B5: Voto Seguro  
**Misión:** Auditoría del módulo de votación.  
**Responsables:** Integridad Electoral, Auditor Voto, Criptografía, IAM/Auth, Constitucional.

## 1. El Secreto del Voto (Receipt-Freeness)
Aunque usamos blockchain/logs, está prohibido que un usuario pueda probar ante un tercero (patrón, puntero político) cómo votó.
- **Técnica:** El hash público de la transacción no debe ligarse al RUT del usuario de forma visible sin una llave privada que solo el sistema posee temporalmente.

## 2. Un Hombre, Un Voto (Sybil Resistance)
- **Validación:** Solo RUTs validados con ClaveÚnica pueden emitir votos vinculantes.
- **Detección:** Si un RUT vota desde 5 IPs distintas en 1 hora, se marca para revisión (posible venta de credenciales).

## 3. Integridad del Conteo
- **Verificabilidad Universal:** Cualquiera debe poder sumar los votos anonimizados y llegar al mismo resultado.
- **Prueba de Nulidad:** Los votos nulos/blancos se cuentan y publican con la misma rigurosidad.

## 4. Resistencia a la Coerción
- **Botón de Pánico:** Si un usuario es obligado a votar, puede ingresar un "código de pánico" (o patrón específico) que muestra una pantalla de "Voto Emitido" pero en realidad lo anula o alerta a soporte.

*El voto es sagrado. Si el sistema duda, el voto se anula.*
