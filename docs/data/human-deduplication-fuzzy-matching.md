# Desduplicación de Humanos y RUT (Squad 282)

**Misión:** "Juan Pérez" con RUT X y "Juan A. Pérez" con mismo RUT.

## 1. El Riesgo de los Votos Clones Zombis
CIVICUM ingestó automáticamente 3 millones de registros públicos para armar los perfiles pasivos de los cabildos (Data Pública Servel/Registro Civil). Por la pésima calidad histórica del Estado de Chile, los CSV públicos a veces traen duplicados con ligeras mutaciones de tipeo en el segundo apellido. 
Si el motor relacional no fuerza una unicidad molecular absoluta (UNIQUE Constraint estricto), Juan Pérez podría votar 2 veces o figurar 2 veces en la demografía de Puntas Arenas, diluyendo o manchando irremediablemente la confiabilidad pericial de CIVICUM. Un solo clon comprobable ante la prensa tumba la Legitimidad del proyecto entero.

## 2. Unificación Molecular (Fuzzy RUT + Clean Room)

1.  **Drizzle Hard-Unique en National_ID:** La arquitectura de base de datos prohíbe las importaciones masivas tipo `INSERT INTO` genérico. Toda importación o registro de Auth corre por Peticiones con lógica `ON CONFLICT (national_id_hash) DO UPDATE...`.
2.  **Pipeline de Auto-Limpieza Asíncrona:** Si el State Data contiene dos RUTs iguales (ej, sin puntos ni guion vs. con guion), una Lambda de Sanitización ("El Cirujano") que corre tras bambalinas limpia todo símbolo no alfanumérico (`\D`) de las claves primarias identificatorias en la etapa T-0 de Ingestión.
3.  **La Fusión del Gemelo:** Si se detecta un gemelo huérfano (El RUT Mapeó, pero un perfil tiene fotos y el otro tiene votos históricos sueltos). El Nodo Maestro realiza una Fusión Transaccional Unificada (Merge), transfiere todas las Foreing Keys (Votos, Reportes) al UUID más viejo (Seniority), y elimina el UUID más reciente registrando un Log Criptográfico Notarial de la Fusión ("De-duplication Audit Record").
