# 🔗 REPORTE DE AUDITORÍA: INTEROPERABILIDAD ESTATAL (SQUADS 201-205)
**Fecha:** 20 Febrero 2026 | **Auditor:** Antigravity

## 1. Resumen de Hallazgos (ClaveÚnica y APIs Estatales)
¿Cómo nos conectamos al Estado sin romper la privacidad ni la seguridad?

*   **Sq-201 (ClaveÚnica):** La integración del protocolo estatal requiere estricto manejo de Tokens JWT OIDC. Si el `nonce` se salta, abrimos paso a ataques *Replay*.
*   **Sq-202 (Comisaría Virtual):** CIVICUM no puede ser un repositorio permanente de salvoconductos o antecedentes penales. Requiere diseño arquitectónico *Stateless* para consumir y olvidar.
*   **Sq-203 (Mercado Público):** CIVICUM debe automatizar alertas sobre licitaciones de la comuna vía API pública, pero sin saturar los propios servidores de *rate limits* estatales.
*   **Sq-204 (Servel Directo):** No podemos cruzar RUT con geolocalización política (Ley 19.628). Sincronización criptográficamente anonimizada o hashing ciego requerido.
*   **Sq-205 (Salud):** Datos categorizados como "Sensibles" bajo ley chilena. Abstención total en la plataforma de requerir historial médico; validaciones heurísticas para no almacenar "Reportes vecinales de enfermedades" indiscriminadamente.
