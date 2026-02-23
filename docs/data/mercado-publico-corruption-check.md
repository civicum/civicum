# 💰 AUDITORÍA MERCADO PÚBLICO (DETECTANDO CORRUPCIÓN)

**Versión:** 1.0
**Squad:** 203 Clave-3
**Misión:** Usar Open Data para que los vecinos sepan en qué gasta su municipio.

---

## 🎯 El Océano de Datos
Mercado Público tiene millones de transacciones. Nadie las lee. Ahí se esconden las facturas duplicadas.

## 🛡️ ALGORITMOS DE ALERTA TEMPRANA

### 1. Detección de Fragmentación (Pitufeo)
*   La ley exige licitación pública sobre 1000 UTM.
*   **Pattern Match:** Si detectamos 3 compras directas de 330 UTM al mismo proveedor en 1 mes...
*   **Alerta:** *"Posible fragmentación de compra para evadir licitación (Trato Directo encubierto)."*

### 2. Vínculos Familiares (Grafo de Interés)
*   Cruce de datos: `Socios de la Empresa Ganadora` (API SII/Constitución Sociedades) vs `Apellidos de Directivos Municipales` (Transparencia Activa).
*   **Alerta:** *"Coincidencia de apellido poco común entre Jefe de Compras y Socio Proveedor."*

### 3. Sobreprecio Estándar
*   Comparativa transversal: Si el Municipio A compra "Cloro" a $5.000 el litro, y el promedio nacional en Mercado Público es $800...
*   **Alerta:** *"Sobreprecio detectado (+525% vs promedio)."*

---
*Con suficiente luz, las ratas no se atreven a robar.*
