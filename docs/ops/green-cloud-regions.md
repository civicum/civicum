# 🍃 SERVIDORES VERDES (CLOUD SUSTAINABILITY)

**Versión:** 1.0
**Squad:** 310 Greta-5
**Misión:** Tu código corre en una computadora física en algún lugar. ¿Esa computadora usa carbón o viento?

---

## 🎯 La Nube no es Etérea
La nube son galpones llenos de servidores calientes.

## 🛡️ CARBON-AWARE INFRASTRUCTURE

### 1. Selección de Región (Green Region Picking)
*   Priorizar regiones de AWS/Google/Azure certificadas **100% Renovable** (ej: `us-west-2` Oregon suele ser hidroeléctrica, `us-east-1` Virginia suele ser mixta/sucia).
*   Sí, aunque `us-east-1` sea 5ms más rápido, elegimos la verde si la latencia es aceptable (< 100ms).

### 2. "Scale to Zero"
*   En la noche (3 AM - 7 AM), el tráfico baja el 95%.
*   Uso de arquitecturas Serverless (Lambda, Cloud Run) que apagan *realmente* el cómputo (0 instancias activas) cuando no hay demanda.
*   Las VMs encendidas esperando tráfico ("Idle") son un desperdicio energético.

### 3. Proveedores Comprometidos
*   Preferir proveedores con compromiso "Carbon Negative" o "Water Positive" (para refrigeración).
*   Auditoría anual de PUE (Power Usage Effectiveness) de nuestro proveedor.

---
*Nuestro backend respira energía limpia.*
