# 💸 RESILIENCIA FINANCIERA: EXIT STRATEGY Y "ASFIXIA"

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 113 — Sun-Tzu-3: Asfixia Financiera  
**Soluciona:** Hallazgo SZ3-01 (Vendor Lock-in Vercel/Neon)

---

## 🎯 La Amenaza Asimétrica
CIVICUM se vuelve molesto. Alguien presiona, o simplemente cambian las condiciones.
Escenario: Vercel sube precios 500% o bloquea la cuenta por "términos de servicio". Neon quita el Free Tier. Las donaciones caen a cero.

---

## 📉 Estrategia "Cockroach" (Cucaracha)

### 1. El "Búnker" (Self-Hosting Fallback)
*   **Objetivo:** Poder correr CIVICUM en un VPS de $5 USD (DigitalOcean/Hetzner) en 4 horas.
*   **Tecnología:** Docker Compose.
    *   Vercel Edge -> Node.js Server (Fastify).
    *   Neon Postgres -> PostgreSQL Container estándar.
    *   Cloudflare R2 -> MinIO o disco local.

### 2. Fondo de Guerra (War Chest)
*   Mantener siempre **6 meses de operación "Piso 0"** en caja chica (Stablecoins o cuenta segura).
*   Si el costo mensual supera el ingreso x2 meses seguidos -> Activar "Modo Guerra" (Apagar features caros: IA, imágenes HD).

### 3. Independencia de Proveedor (No Vendor Lock-in duro)
*   Código agnóstico: Usar estándares web (Fetch, Request) en vez de SDKs propietarios oscuros siempre que sea posible.
*   Base de datos: SQL estándar, sin stored procedures propietarios de Neon.

---

## 🧪 Simulacro "Apagón Nube"
1.  Suposición: Vercel caído.
2.  Ejecutar `docker-compose up` en un servidor virgen.
3.  Restaurar backup database.
4.  **Meta:** Sitio arriba (lento, pero vivo) en < 4 horas.

---
*Documento generado para cerrar Hallazgo SZ3-01.*
