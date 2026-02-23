# 🤖 PILOTO AUTOMÁTICO: CONTINUIDAD OPERATIVA ANTE ABANDONO

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 120 — Entropía-5: El Abandono del Admin  
**Soluciona:** Hallazgo E5-01 (Dependencia Operativa Humana)

---

## 🎯 La Amenaza Entrópica
El administrador principal se enferma, se va de vacaciones a una zona sin señal o simplemente renuncia abruptamente.
El certificado SSL vence, el disco de logs se llena, un token expira. El sistema colapsa por falta de "cariño" humano.

---

## ⚙️ Automatización de Supervivencia

### 1. Renovación de Certificados "Zero-Touch"
*   Certbot / ACME configurado para renovación automática perpetua.
*   Monitoreo externo (UptimeRobot) que alerta vía SMS a 3 personas distintas si falta 1 semana para vencer.

### 2. Limpieza de Logs (Log Rotation)
*   Política de retención estricta: Logs > 30 días se borran o archivan a Cold Storage automáticamente.
*   **Nunca** permitir que el disco se llene. Si llega al 90%, el sistema empieza a borrar logs más nuevos de menor prioridad (INFO/DEBUG) para sobrevivir.

### 3. Actualizaciones de Seguridad Automáticas (Unattended Upgrades)
*   El OS (Ubuntu/Debian) y las dependencias críticas de seguridad se parchean solas.
*   Riesgo de romper algo < Riesgo de ser hackeado por CVE conocido.

### 4. El "Dead Man's Switch" Operativo
*   Si el Admin no se loguea en el panel de Admin en 30 días:
    *   El sistema envía email: "Estás bien? Logueate para confirmar."
    *   Si no hay respuesta en 48h: **Modo Preservación.**
        *   Desactiva features experimentales.
        *   Pone el sitio en "Read-Only" si detecta anomalías graves.
        *   Envía llaves de acceso de emergencia al Consejo Directivo.

---

## 🧪 Simulacro "La Isla Desierta"
1.  Prohibir a todos los admins tocar el sistema por 1 mes.
2.  **Meta:** El sistema sigue arriba, seguro y con SSL válido al volver.

---
*Documento generado para cerrar Hallazgo E5-01.*
