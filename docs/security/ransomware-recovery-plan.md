# 💀 RANSOMWARE TOTAL: PROTOCOLO DE RESURRECCIÓN

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 141 — Zero-1: Ransomware Total  
**Soluciona:** Hallazgo Z1-01 (Pérdida Total de Datos por Cifrado)

---

## 🎯 El Escenario Apocalíptico
Un hacker ruso entra al servidor, cifra `production.db` y pide 50 BTC.
Si pagamos, financiamos el terrorismo. Si no pagamos, perdemos todo.

---

## 🧟 Estrategia Lázaro (No Negociar)

### 1. Backups Inmutables (Air-Gapped)
*   Backups diarios se envían a AWS S3 con Object Lock (WORM) activado por 30 días.
*   **Ni siquiera el Admin con credenciales root puede borrar o modificar esos archivos.**
*   Copia física mensual en disco duro desconectado (Caja Fuerte Bancaria).

### 2. La "Hora Cero" (Kill Switch)
*   Al detectar actividad de cifrado inusual (IOPS spike):
    *   Se corta el acceso de escritura a la DB principal.
    *   Se revocan TODAS las sesiones de admin y claves API.
    *   Se levanta página estática de mantenimiento ("Estamos bajo ataque").

### 3. Recuperación en "Tierra Quemada"
*   Nunca intentar limpiar el servidor infectado. Se asume comprometido al 100%.
*   Se despliega infraestructura nueva desde cero (IaC Terraform) en una cuenta de nube limpia.
*   Se restaura el backup inmutable.
*   Pérdida máxima aceptable (RPO): 24 horas.

---

## 🧪 Simulacro "WannaCry"
1.  Borrar la base de datos de Staging.
2.  Cronometrar cuánto tarda el equipo en levantar un ambiente nuevo y restaurar el backup inmutable.
3.  **Meta:** < 4 horas.

---
*Documento generado para cerrar Hallazgo Z1-01.*
