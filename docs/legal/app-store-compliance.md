# 🍏 STORE COMPLIANCE: REGLAS DE SUPERVIVENCIA EN APPLE/GOOGLE

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 133 — Distribución-3: App Store Compliance  
**Soluciona:** Hallazgo D3-01 (Riesgo de Ban por "User Generated Content")

---

## 🎯 El Problema de Distribución
Apple y Google son estrictos con apps que permiten contenido generado por usuarios (UGC). Si un usuario sube una foto ilegal y no la borramos rápido, nos banean la app entera.

---

## 📋 Checklist de Aprobación (Review Guidelines)

### 1. Moderación de Contenido (UGC)
*   **Regla:** Debe haber mecanismo para reportar contenido ofensivo in-app.
*   **Regla:** Capacidad de bloquear usuarios abusivos.
*   **Cumplimiento:** Botón "Reportar" en cada post visible. Panel de Admin para banear en < 24h. EULA visible al registro aceptando "No tolerancia a contenido objetable".

### 2. Privacidad y Datos
*   **Apple:** "Sign in with Apple" obligatorio si usamos Google/Facebook Auth.
*   **Permiso de Ubicación:** Explicación clara en el prompt del sistema: *"Civicum necesita tu ubicación para georreferenciar tu reporte en el mapa vecinal."* (No solo "Para funcionar").

### 3. Pagos y Donaciones
*   **Regla:** Apple cobra 30% de "Digital Goods".
*   **Estrategia:** Las donaciones a la Fundación son "Donaciones a ONG", exentas de comisión si se hacen vía Web (Safari View Controller) o Apple Pay Donations específico. NO usar In-App Purchase estándar para donaciones.

---

## 🧪 Test del "Reviewer"
1.  Enviar build a TestFlight.
2.  Simular reporte de contenido ofensivo.
3.  **Meta:** El mecanismo funciona y el EULA cubre las espaldas legales. Aprobación en primer intento.

---
*Documento generado para cerrar Hallazgo D3-01.*
