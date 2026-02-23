# 🔗 INTEGRACIÓN BLOCKCHAIN (EVALUACIÓN SENSATA)

**Versión:** 1.0
**Squad:** 246 Horizonte-1
**Pregunta:** ¿Necesitamos Blockchain o solo una base de datos segura?

---

## 🎯 El Hype vs. La Utilidad
El 99% de los proyectos "GovTech con Blockchain" son marketing. Civicum no vende humo.

## 🛡️ CRITERIOS DE IMPLEMENTACIÓN

### 1. Dónde NO usarlo
*   **Identidad de Usuario:** Lento, caro y viola el derecho al olvido (GDPR).
*   **Almacenamiento de Reportes:** Ineficiente. Una foto de un bache no necesita inmutabilidad eterna distribuida.

### 2. Dónde SÍ usarlo (Transparency Ledger)
*   **Trazabilidad de Fondos Públicos:**
    *   Hash de cada transacción financiera del municipio anclado en una cadena pública (Ethereum/Polygon) diaria.
    *   Objetivo: Que el municipio no pueda "editar" el historial de gastos 6 meses después.

### 3. Voto (Solo como Notario)
*   No guardamos el voto en blockchain (riesgo de privacidad).
*   Guardamos el **Hash del Acta Final de Escrutinio**. Así garantizamos que los resultados totales no fueron alterados post-conteo.

---
*Blockchain es un notario caro y lento. Úsalo solo cuando no confíes en el administrador de la BD.*
