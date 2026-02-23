# ♿ AUDITORÍA DE ACCESIBILIDAD AUDITIVA Y VISUAL

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación C3-1, C3-2

---

## 🎯 Objetivo

Auditoría específica para discapacidad visual y auditiva, más allá del WCAG AA básico (ya cubierto en qa-master-plan.md).

---

## 👁️ Accesibilidad Visual

### Estado Verificado (WCAG 2.1 AA mínimo)

| Criterio | Estado | Referencia |
|----------|--------|------------|
| Contraste texto 4.5:1 | ✅ AAA (6.23:1 Terracota) | Design System §2 |
| Contraste texto grande 3:1 | ✅ AAA | Design System §2 |
| Color no como único indicador | ✅ Iconos + texto | UI/UX §16 |
| Focus visible | ✅ Ring 2px Terracota | Design System §3 |
| Screen reader compat | ✅ VoiceOver + TalkBack | UI/UX §16 |
| aria-labels | ✅ En todos los botones/iconos | UI/UX §16 |
| reduce-motion | ✅ `prefers-reduced-motion` | Design System §7.7 |

### Hallazgo C3-1: Sin Protocolo de Testing con Lectores de Pantalla [✅ RESUELTO]

**Problema:** Se declara compatibilidad con VoiceOver/TalkBack/NVDA/JAWS pero no existe un protocolo de testing manual con estos lectores.

**Solución: Protocol de Testing Assistive Technology**

| Lector | Plataforma | Tests mínimos por release |
|--------|-----------|--------------------------|
| VoiceOver | iOS/macOS | 6 flujos core en Safari |
| TalkBack | Android | 6 flujos core en Chrome |
| NVDA | Windows | Landing + formularios |
| JAWS | Windows | Tablas de datos (Cuentas Claras) |

**6 flujos core a testear:**
1. Onboarding completo (registro → primera misión)
2. Crear reporte con imagen (Alza la Voz)
3. Navegar presupuesto municipal (Cuentas Claras)
4. Completar cápsula + quiz (Academia)
5. Emitir voto + ver resultado (Voto Ciudadano)
6. Chat con Civia (interacción voz)

**Criterios de aceptación:**
- Narración completa: cada pantalla se narra en orden lógico
- Acciones ejecutables: botones accesibles vía teclado/gesto
- Feedback: cambios de estado anunciados (aria-live)
- Errores: mensajes de error narrados (aria-describedby)

---

## 👂 Accesibilidad Auditiva

### Hallazgo C3-2: Sin Consideraciones Específicas para Discapacidad Auditiva [✅ RESUELTO]

**Problema:** CIVICUM tiene feedback sonoro (Web Speech API, notificaciones) pero no hay alternativas para usuarios sordos.

**Solución:**

| Elemento con Audio | Alternativa Visual |
|---|---|
| Civia responde por voz | Transcripción en texto siempre visible |
| Notificaciones sonoras | Vibración + indicador visual (badge/toast) |
| Videos educativos (futuro) | Subtítulos obligatorios (SRT/VTT) |
| Audio cápsula (futuro) | Transcripción textual completa |
| Alerts de error sonoras | Animación visual + icono + color + texto |

**Principio:** Todo contenido audible tiene equivalente visual. Nunca información solo en audio.

---

## 📅 Schedule

| Test | Frecuencia | Responsable |
|------|-----------|-------------|
| VoiceOver (iOS) | Cada release | Rol 11 (Accesibilidad) |
| TalkBack (Android) | Cada release | Rol 11 |
| NVDA (desktop) | Trimestral | Rol 18 (QA Funcional) |
| Auditoría auditiva | Semestral | Rol 15 (Investigador UX Inclusivo) |

---

*Documento generado para cerrar Observaciones C3-1 y C3-2*
