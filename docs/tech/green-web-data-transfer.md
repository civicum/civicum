# 📉 TRANSFERENCIA DE DATOS (GREEN WEB)

**Versión:** 1.0
**Squad:** 309 Greta-4
**Problema:** Mover 1GB de datos por 4G consume energía en a) la antena, b) el router, c) el servidor, d) el teléfono. Web obesa = Web sucia.

---

## 🎯 Dieta Digital
Cada kilobyte cuenta.

## 🛡️ MINIMALISMO DE RED

### 1. Formatos de Próxima Generación (AVIF/WebP)
*   Prohibido JPG/PNG para fotos.
*   Todo se convierte a **AVIF** en el servidor (30-50% menos peso que WebP, 80% menos que JPG).
*   Miniaturas: Usar BlurHash (string de 30 bytes) mientras carga, en lugar de placeholders de imagen.

### 2. Evitar "Over-fetching" (GraphQL)
*   No usar APIs REST que devuelven el objeto `User` completo (50 campos) cuando solo necesitamos mostrar el `nombre`.
*   Usar Queries GraphQL precisas o DTOs (Data Transfer Objects) "Slim".

### 3. Lazy Loading Extremo
*   No descargar el mapa si el usuario no hizo scroll hasta el mapa.
*   No cargar el script de comentarios si el usuario no abrió la sección.
*   El bundle inicial de JS debe ser < 100KB (Gzipped).

---
*Transferir basura datos es desperdiciar electricidad.*
