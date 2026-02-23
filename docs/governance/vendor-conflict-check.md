# 🤝 CONFLICTO DE INTERÉS: PROVEEDORES

**Versión:** 1.0
**Squad:** 175 Conflicto
**Alcance:** Compras y Contrataciones de CIVICUM

---

## 🎯 El Problema
Descubrir que la empresa de hosting contratada pertenece al cuñado del CTO. O que el proveedor de auditoría es socio del Director de Finanzas.

## 📋 LISTA DE CHEQUEO AUTOMATIZADA (VENDOR CHECK)

### 1. Declaración Jurada de Vínculos (DoV)
*   Todo proveedor debe declarar accionistas finales (UBO - Ultimate Beneficial Owner).
*   Todo empleado de CIVICUM con poder de compra debe declarar sus vínculos comerciales y familiares anualmente.

### 2. Cruce de Datos (The Matcher)
*   Script trimestral que cruza:
    *   Lista de Socios de Proveedores.
    *   Lista de Empleados y sus familiares directos (hasta 2do grado).
*   **Alerta:** Coincidencia de Apellidos + Direcciones + RUTs.

### 3. Regla de "Tres Cotizaciones" Blockchain
*   Para cualquier compra > $1.000 USD:
    *   Deben existir 3 cotizaciones comparables subidas al sistema.
    *   La decisión de adjudicación queda registrada inmutablemente.
    *   Si se elige la opción más cara, requiere justificación técnica firmada por 2 directores.

---
*La mujer del César no solo debe ser honesta, sino parecerlo.*
