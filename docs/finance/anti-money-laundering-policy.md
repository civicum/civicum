# 💸 POLÍTICA ANTI-LAVADO DE ACTIVOS (AML) Y MICRO-DONACIONES

**Versión:** 1.0
**Squad:** 171 Pitufeo
**Riesgo:** Uso de CIVICUM para "limpiar" dinero narco mediante donaciones falsas.

---

## 🎯 El Vector de Ataque: "Pitufeo" (Smurfing)
Un actor malicioso quiere legalizar $100 millones.
*   No dona de golpe.
*   Usa 10.000 cuentas falsas para donar $10.000 cada una a una "Causa Benéfica" controlada por ellos mismos dentro de la plataforma.

## 🛡️ CONTROLES AML (ANTI-MONEY LAUNDERING)

### 1. Límites de Donación (Caps)
*   **Anónimo:** $0 (Prohibido).
*   **Usuario Verificado (Nivel 1):** Máximo $50.000 CLP / mes.
*   **Usuario Verificado (Nivel 2+):** Máximo $500.000 CLP / mes.
*   **Institucional:** Sin límite, pero requiere contrato y KYB (Know Your Business).

### 2. Detección de Patrones de Pitufeo
El sistema levanta una **Alerta AML** si detecta:
*   > 50 donaciones de < $10.000 en < 1 hora hacia el mismo destinatario.
*   Múltiples donantes usando la misma IP o Device ID.
*   Cuentas creadas el mismo día que realizan la donación.

### 3. "Cooling Off" de Retiro
*   El dinero recibido por una Causa **NO puede retirarse inmediatamente**.
*   **Período de retención:** 15 días hábiles. (Da tiempo para análisis de fraude y chargebacks).

### 4. Reporte UAF (Unidad de Análisis Financiero)
*   CIVICUM reportará automáticamente cualquier Operación Sospechosa (ROS) sobre $1.000 USD acumulados que cumpla patrones de pitufeo.

---
*La caridad empieza por casa, pero la limpieza empieza por el origen de los fondos.*
