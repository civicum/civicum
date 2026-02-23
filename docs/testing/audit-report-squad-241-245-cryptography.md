# 🔐 REPORTE DE AUDITORÍA: RESILIENCIA CRIPTOGRÁFICA (SQUADS 241-245)
**Fecha:** 20 Febrero 2026 | **Auditor:** Antigravity

## 1. Resumen de Hallazgos (Matemáticas contra tiranos)
Auditoría sobre la irrevocabilidad y seguridad profunda de las matemáticas.

*   **Sq-241 (Rotación de Llave Maestra):** Si el servidor de CI/CD es hackeado y roban la variable `JWT_SECRET` o la llave AES-256 de base de datos, el proyecto muere a menos que exista un protocolo probativo de "Key Rotation" sin downtime.
*   **Sq-242 (Firmas Digitales):** Las respuestas de Alcaldes deben usar validación de Firma Electrónica Avanzada (Ley 19.799 de Gob Digital). Un simple checkbox "Soy el Alcalde" es inaceptable.
*   **Sq-243 (Cifrado en Reposo):** Neon DB cifra AWS S3, pero debemos auditar si exportaciones, backups CSV a Cloudflare R2 o cachés locales Redis están cifrados `at-rest` para prevenir robos físicos forenses.
*   **Sq-244 (Entropía vs Usabilidad):** Exigir 14 caracteres y símbolos en passwords aleja a ciudadanos menos alfabetizados digitalmente. Transición hacia Passkeys (WebAuthn) / Biometría.
*   **Sq-245 (Zero-Knowledge Proofs - Roadmap):** La votación actual en "Alza la Voz" vincula RUT y GPS. A largo plazo (Visión 2028), debemos probar matemáticamente que alguien votó sin que el sistema sepa *qué* votó (zk-SNARKs).
