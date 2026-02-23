# Protocolo Anti-Pitufeo (Squad Finanzas-1)

**Squad:** 171. Escuadrón Pitufeo: Micro-donaciones Sospechosas  
**Misión:** Si aceptamos donaciones, detectar patrones de lavado de activos (muchos montos chicos).  
**Responsables:** Finanzas, Compliance, Data Scientist.

## 1. Detección de Patrones Temporales
- **Alerta Roja:** 50 donaciones de $1.000 CLP desde distintas IPs pero en un intervalo de 1 minuto.
- **Alerta Naranja:** 100 donaciones desde la misma subred de IP en un día.
- Acción automática: Congelamiento de fondos en cuenta "Escrow" hasta verificación humana.

## 2. Límite de Velocidad (Rate Limiting Financiero)
- Ningún usuario puede donar más de 5 veces en una hora.
- Ninguna campaña puede recibir más del 500% de su promedio histórico en 1 hora sin gatillar una "Auditoría Flash".

## 3. KYC Progresivo
- Donar $1.000: Anónimo.
- Donar $100.000: Requiere RUT validados.
- Donar $1.000.000: Requiere origen de fondos declarado.

*La caridad no puede ser una lavandería.*
