# 📀 CIFRADO EN REPOSO (VERIFICACIÓN FORENSE)

**Versión:** 1.0
**Squad:** 243 Enigma-3
**Misión:** Si roban el disco duro del servidor, solo deben encontrar ruido blanco.

---

## 🎯 El Descuido Común
"Activar cifrado" es un checkbox que a veces se desmarca en una migración.

## 🛡️ AUDITORÍA DE ENTROPÍA

### 1. Inspección de Bloques (Nivel OS)
*   Script automatizado (`dmsetup status`) verifica que los volúmenes montados sean tipo `crypt` (LUKS/dm-crypt).
*   **Prueba de Ácido:** Intentar montar el volumen desde una instancia de rescate sin la llave KMS. Debe fallar.

### 2. Cifrado a Nivel de Aplicación (Column-Level)
*   Datos ultra-sensibles (RUT, Ficha Médica) no confía solo en el disco. Están cifrados en la columna de la DB (`PGP_SYM_ENCRYPT`).
*   Incluso el DBA con acceso a `SELECT *` ve basura ininteligible sin la llave de aplicación.

### 3. Prueba de "High Entropy"
*   Análisis estadístico de una muestra del archivo de BD (`data.raw`).
*   Si el histograma de bytes es plano (entropía cercana a 8 bits/byte), es encriptado. Si hay patrones repetitivos, es texto plano.

---
*Si puedes leer el disco con 'cat', estás despedido.*
