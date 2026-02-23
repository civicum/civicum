# 🤐 SILENCIO ELECTORAL: PROTOCOLO DE VEDA (48 HORAS)

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 139 — Tramite-4: Silencio Electoral  
**Soluciona:** Hallazgo TR4-01 (Violación de Ley Electoral)

---

## 🎯 El Problema Burocrático
Viernes a las 23:59 antes de la elección. Empieza la veda.
Si CIVICUM sigue mostrando "Vota por la propuesta del Candidato X" o permite propaganda en los comentarios, la plataforma comete un delito electoral.

---

## 🔇 Modo Veda (Election Mode)

### 1. Congelamiento de Propaganda
*   **Viernes 00:00:** Script automático desactiva:
    *   Creación de nuevas "Propuestas Políticas".
    *   Comentarios en hilos políticos existentes.
    *   Notificaciones push de temas políticos.

### 2. Solo Servicios Esenciales
*   Durante el fin de semana electoral, CIVICUM solo permite:
    *   Reportes de problemas urbanos (baches, luz).
    *   Información oficial del SERVEL (Dónde voto).
    *   Denuncias de irregularidades en locales de votación (Canal especial).

### 3. Banner Informativo
*   Header fijo: *"Estamos en periodo de Veda Electoral. La discusión política se reanudará el Domingo a las 18:00 hrs."*

---

## 🧪 Test del "Candidato Ansioso"
1.  Configurar fecha del servidor como "Sábado pre-elección".
2.  Intentar publicar "¡Voten por mí!".
3.  **Meta:** El sistema rechaza el post con error: `ELECTION_SILENCE_ACTIVE`.

---
*Documento generado para cerrar Hallazgo TR4-01.*
