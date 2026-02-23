# Rayos Cósmicos y ECC RAM (Squad 251)

**Misión:** Un bit cambia espontáneamente. ¿Corrompe un voto o crashea?

## 1. El Riesgo Cósmico (Single-Event Upset / SEU)
Un rayo cósmico del espacio profundo (partículas de alta energía) choca con los servidores Vercel AWS en la capa de la tropósfera. Causa un "Bit Flip" físico en la Memoria RAM. Un `0` se vuelve un `1`.
Si esta partícula choca **exactamente** en el espacio de memoria donde estaba la orden booleana JSON en Node.js de: `is_voto_falso: false`, la plataforma validará un reporte corrupto y lo consolidará en la base de datos permanente, quebrando la sanidad transaccional y la fe legal en CIVICUM.

## 2. Hardening Molecular (Física de Servidor)
No controlamos la física solar, pero controlamos la abstracción de nube.

1.  **ECC Memory Assurance:** Rol 21 (SRE) garantiza contractualmente que toda instancia EC2 de AWS arrendada indirectamente o directamente (Neon Postgres Workers / Redis Node) corra sobre procesadores AMD/Intel de servidor con módulos de RAM **ECC (Error-Correcting Code)** nativos y rigurosamente activados. La CPU detecta el bit cósmico volteado e intercepta la modificación usando paridad estricta.
2.  **Idempotencia de Estado Reactivo:** Vercel Edge Functions matan los procesos instántáneamente (Stateless execution). El ciclo vital del Javascript no dura lo suficiente en memoria general de servidor (heap) prolongada para aumentar el riesgo superficial. Edge computing diseminado mitiga las vulnerabilidades continuas frente a la radiación local estática de datacenters.
