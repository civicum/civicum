# 👴 GUÍA DE ACCESIBILIDAD COGNITIVA PARA TERCERA EDAD

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 55 — Psi-Epsilon: El "Abuelo" Digital  
**Soluciona:** PsiE-1, PsiE-2  
**Complementa:** `docs/testing/audit-accesibilidad.md` (WCAG visual/auditiva)

---

## 🎯 Problema

La accesibilidad cognitiva va más allá de WCAG: tiempos de procesamiento, memoria de trabajo limitada, ansiedad ante errores, baja tolerancia a la frustración técnica.

---

## 🔴 HALLAZGO PsiE-1: Sin Estándares de Accesibilidad Cognitiva

**Problema:** `audit-accesibilidad.md` cubre WCAG 2.1 AA (visual + auditiva) pero no mide carga cognitiva, tiempo de procesamiento ni tolerancia al error.

**Solución: Estándar "Abuelo Digital"**

### Tiempos
| Acción | Estándar actual | Estándar Abuelo | Implementación |
|--------|----------------|-----------------|---------------|
| Leer toast/snackbar | 3s | 8s + no auto-dismiss | Toast permanece hasta tap |
| Completar formulario | Sin timeout | Sin timeout + guardado auto | Autosave cada campo |
| OTP SMS | 5 min | 10 min | Config `OTP_EXPIRY_SENIOR=600` |
| Animaciones | 300ms | Opcional: reducible a 0ms | `prefers-reduced-motion` |
| Carga entre pantallas | <1s target | Skeleton + texto "Cargando..." | Skeleton + texto explícito |

### Memoria de trabajo
| Principio | Implementación |
|-----------|---------------|
| Máximo 3 opciones por pantalla | Redesign: menú con 3 items visibles + "Ver más" |
| Sin navegación profunda (>3 niveles) | Breadcrumbs + botón "Volver al inicio" siempre visible |
| Sin información temporal | No "hace 3 horas". Sí "hoy a las 15:00" |
| Sin abreviaturas | "información" nunca "info", "documento" nunca "doc" |
| Consistencia total | El botón "Volver" SIEMPRE está en el mismo lugar |

### Tolerancia al error
| Escenario | Respuesta |
|-----------|----------|
| Toca algo equivocado | Undo visible 15s (no 5s) |
| Sale de la app accidentalmente | Restaurar estado exacto al volver |
| Pierde conexión | Guardar todo + aviso claro "Sin internet. Tu trabajo está guardado" |
| Cierra pestaña del navegador | Session restore al volver |
| No sabe cómo volver | Floating "🏠 Inicio" siempre visible |

---

## 🟠 HALLAZGO PsiE-2: Sin Testing con Usuarios de Tercera Edad

**Problema:** No hay protocolo de testing con usuarios >65 años en el qa-master-plan.md ni en audit-accesibilidad.md.

**Solución: Protocolo de Testing "Abuelo Digital"**

**Reclutamiento:**
- 5 usuarios ≥65 años
- 3 con smartphone propio, 2 sin experiencia digital
- Idealmente reclutados vía Juntas de Vecinos (canal presencial)

**Entorno:**
- Testing presencial (no remoto)
- Facilitador paciente, sin apurar
- Dispositivo prestado si no tiene (tablet 10" preferido)
- Grabación de pantalla + observación

**Tareas de test:**
| # | Tarea | Máximo aceptable | Criterio |
|---|-------|-------------------|----------|
| T1 | Ver autoridades de su comuna | 3 min | Completa sin ayuda |
| T2 | Leer un reporte existente | 2 min | Entiende el contenido |
| T3 | Crear cuenta con teléfono (Nivel 1) | 5 min | Sin frustración visible |
| T4 | Apoyar un reporte | 1 min | Entiende el concepto |
| T5 | Usar botón "Volver" y "Inicio" | 30s cada uno | Los encuentra |
| T6 | Recuperarse de un error (tap equivocado) | 1 min | Usa undo o vuelve sin perder datos |

**Métricas:**
| Métrica | Target |
|---------|--------|
| Task completion rate | ≥60% sin ayuda |
| SUS score (System Usability Scale) | ≥50 |
| Frustración declarada (1-5) | ≤2.5 |
| "¿Lo recomendarías a un amigo de tu edad?" | ≥60% sí |

**Modo "Letra Grande" (feature flag):**
```
FEATURE_FLAG: SENIOR_MODE = true

Cambios cuando activado:
- font-size base: 20px (vs 16px)
- touch targets: 56px mínimo (vs 44px)
- Contraste: AAA (vs AA)
- Animaciones: desactivadas
- Toasts: permanentes hasta dismissal
- Menú: 3 opciones máximo por pantalla
- Botón "Inicio": floating, siempre visible
```

Activación: Settings > "Vista cómoda" (no "accesibilidad", que suena médico)

---

*Documento generado para Escuadrón 55 Psi-Epsilon. Resolución PsiE-1 + PsiE-2.*
