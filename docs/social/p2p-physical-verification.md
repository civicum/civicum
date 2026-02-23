# 🤝 VERIFICACIÓN P2P (PRUEBA HUMANA)

**Versión:** 1.0
**Squad:** 325 Mesh-5
**Escenario:** Alguien reporta un "Hoyo Gigante" para que arreglen su calle rápido, pero es mentira. El GPS se puede falsear. ¿La presencia física de otro vecino? Difícil.

---

## 🎯 El Testigo Ocular
Nada supera a un par de ojos en el terreno.

## 🛡️ PROOF OF LOCATION (PoL)

### 1. Desafío de Verificación
*   Cuando un reporte es dudoso o de alto impacto, el sistema genera una "Misión de Verificación".
*   Notifica a 3 usuarios confiables (Rango "Veedor") que estén pasando *cerca* físicamente.
*   Misión: "Acércate a 10 metros de [Coordenada] y confirma si ves el bache".

### 2. Handshake Criptográfico de Proximidad
*   Para validar que el "Veedor" realmente fue al lugar (y no solo puso "Sí" desde su sofá):
    *   Debe escanear un QR físico pegado en el lugar (si existe infraestructura).
    *   O debe hacer "Check-in" vía Bluetooth con el dispositivo del denunciante original si ambos están ahí.

### 3. Consenso de Testigos
*   Se requiere:
    *   1 Denunciante.
    *   2 Testigos independientes (sin relación social en la app) que validen in-situ.
*   Resultado: Reporte marcado como **`VERIFIED_ON_CHAIN`** (Verdad absoluta).

---
*La verdad se construye entre varios.*
