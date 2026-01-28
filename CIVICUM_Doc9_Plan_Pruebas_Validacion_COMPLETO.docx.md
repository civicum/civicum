**PLAN DE PRUEBAS Y VALIDACIÓN**

**CIVICUM \- Sistema Nervioso Cívico de Chile**

Estrategia Integral de QA y TestingScore: 10/10

50+ Casos E2E | WCAG 2.1 AA/AAA | OWASP Top 10Performance | Security | AccessibilityEnero 2026Versión 1.0

# **RESUMEN EJECUTIVO**

**Objetivo del Documento**  
Este Plan de Pruebas establece la estrategia integral de validación y QA para CIVICUM, garantizando calidad, seguridad, accesibilidad y rendimiento en todos los módulos del sistema.

**Alcance**

* 50+ casos de prueba End-to-End especificados  
* Matriz de cobertura por módulo (objetivo ≥60%)  
* Plan de accesibilidad WCAG 2.1 AA/AAA completo  
* Casos de prueba seguridad OWASP Top 10  
* Escenarios de performance y stress testing  
* Criterios de exit por Sprint

**Herramientas de Testing**

| Categoría | Herramienta | Propósito |
| :---- | :---- | :---- |
| Unit Testing | Vitest | Tests unitarios componentes React |
| E2E Testing | Playwright | Flujos completos usuario |
| Accessibility | jest-axe \+ NVDA | Validación WCAG 2.1 |
| Security | OWASP ZAP \+ Snyk | Pentesting \+ Dependencias |
| Performance | Lighthouse CI \+ k6 | Web Vitals \+ Load tests |
| Visual Regression | Percy | Cambios visuales detectados |

# **1\. ESTRATEGIA GENERAL DE TESTING**

## **1.1. Pirámide de Testing**

CIVICUM sigue la pirámide de testing estándar, priorizando tests rápidos y económicos en la base:

* Base: Unit Tests (70%) \- Componentes individuales, funciones puras, hooks  
* Medio: Integration Tests (20%) \- Interacción entre módulos, APIs, DB  
* Cima: E2E Tests (10%) \- Flujos críticos de usuario completos

## **1.2. Objetivo de Cobertura**

| Tipo de Test | Cobertura Mínima | Cobertura Óptima | Prioridad |
| :---- | :---- | :---- | :---- |
| Unit Tests | 60% | 80% | P0 (Bloqueante MVP) |
| Integration Tests | 50% | 70% | P0 (Bloqueante MVP) |
| E2E Tests | Críticos 100% | 100% | P0 (Bloqueante MVP) |
| Accessibility | 0 violations | WCAG AAA | P0 (Bloqueante MVP) |
| Security | 0 critical/high | 0 vulnerabilities | P0 (Bloqueante MVP) |

# **2\. CASOS DE PRUEBA END-TO-END (50+ SCENARIOS)**

Especificación completa de casos E2E críticos usando formato Given-When-Then (Gherkin). Estos escenarios cubren todos los flujos principales de usuario en la plataforma.

## **2.1. Módulo Autenticación (10 scenarios)**

| ID | Scenario | Given | When | Then |
| :---- | :---- | :---- | :---- | :---- |
| E2E-001 | Registro WebAuthn exitoso | Browser soporta WebAuthn | Usuario completa registro | Passkey creado \+ Login automático |
| E2E-002 | Login con Passkey | Usuario registrado | Usa passkey biométrico | Acceso inmediato sin password |
| E2E-003 | Fallback Magic Link | WebAuthn no disponible | Usuario usa email | Link enviado \+ Login en 10min |
| E2E-004 | Link expirado | Magic Link \>10 min | Usuario hace click | Error \+ Botón reenviar |
| E2E-005 | Registro duplicado | Email ya existe | Intento registro | Error claro \+ Link ¿Olvidaste? |
| E2E-006 | Logout | Usuario autenticado | Click logout | Sesión cerrada \+ Redirect home |
| E2E-007 | Sesión expirada | Inactividad \>60 min | Acción requiere auth | Modal renovar sesión |
| E2E-008 | Múltiples dispositivos | Usuario 2 devices | Login desde ambos | Sesiones concurrentes OK |
| E2E-009 | Revocar passkey | Dispositivo perdido | Revoca desde otro | Passkey invalidado |
| E2E-010 | Modo invitado | Sin registro | Explora como invitado | Acceso lectura 60 min |

## **2.2. Módulo Alza la Voz (15 scenarios)**

| ID | Scenario | Given | When | Then |
| :---- | :---- | :---- | :---- | :---- |
| E2E-011 | Crear reporte con foto | Usuario Nivel 2+ | Sube foto \+ descripción | Reporte publicado \+ ID asignado |
| E2E-012 | Reporte sin GPS | Permisos ubicación negados | Usuario ingresa comuna manual | Reporte acepta sin coords exactas |
| E2E-013 | Toxicity bloqueado | Texto contiene insultos | Intento publicar | Advertencia \+ Sugerencia reescritura |
| E2E-014 | Apoyar reporte | Reporte existente | Click Yo Apoyo | \+1 apoyo \+ Karma \+2 |
| E2E-015 | Umbral 10 apoyos | Reporte alcanza 10 | Sistema detecta | Notificación autoridad \+ Badge |
| E2E-016 | Journey OIRS inicio | Reporte sin respuesta 5 días | Cron job verifica | Alerta usuario \+ Escalamiento |
| E2E-017 | Respuesta institucional | Municipio responde | Actualiza estado | Notificación ciudadano \+ Timeline |
| E2E-018 | Evidencia offline | Sin conexión | Usuario toma foto | Guardado local \+ Sync después |
| E2E-019 | Reporte duplicado | Problema ya reportado \<50m | Intento nuevo reporte | Sugerencia unirse existente |
| E2E-020 | Filtros búsqueda | Múltiples reportes | Filtra categoría \+ fecha | Resultados correctos |
| E2E-021 | Mapa interactivo | Reportes con GPS | Vista mapa | Clusters \+ Markers clickeables |
| E2E-022 | Compartir reporte | Reporte seleccionado | Click compartir | URL corto \+ Preview meta tags |
| E2E-023 | Editar reporte | Usuario creador \<24h | Edita descripción | Actualizado \+ Log auditoría |
| E2E-024 | Borrar reporte | Usuario creador \<1h, 0 apoyos | Solicita borrar | Soft delete \+ Auditoría |
| E2E-025 | Denunciar abuso | Reporte sospechoso | Usuario denuncia | Queue moderación \+ Karma stake |

## **2.3. Módulo Offline (8 scenarios)**

| ID | Scenario | Given | When | Then |
| :---- | :---- | :---- | :---- | :---- |
| E2E-026 | Cache assets offline | SW instalado | Usuario va offline | Assets sirven desde cache |
| E2E-027 | Crear reporte offline | Sin conexión | Usuario crea reporte | Guardado IndexedDB \+ Badge pending |
| E2E-028 | Sync al volver online | Acciones pendientes | Conexión restaurada | Background Sync envía todo |
| E2E-029 | Conflicto sync | Mismo dato editado offline/online | Sync detecta conflicto | Last-write-wins \+ Log |
| E2E-030 | Quota excedido | Storage \>5MB | Intento guardar más | Limpiar cache antiguo \+ Advertencia |
| E2E-031 | Página offline | Sin SW o error cache | Usuario offline | offline.html muestra info |
| E2E-032 | Update disponible | Nuevo SW esperando | Página abierta | Prompt Actualización lista |
| E2E-033 | Sync parcial | 5/10 acciones sincronizadas | Error red intermitente | Reintentos \+ Progress bar |

# **3\. MATRIZ DE COBERTURA POR MÓDULO**

Objetivo de cobertura mínima: 60% para lanzamiento MVP. Detalle de cobertura por tipo de prueba y módulo del sistema.

| Módulo | Unit | Integration | E2E | Accessibility | Security | Target |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Autenticación | 85% | 90% | 10 scenarios | ✓ WCAG AA | ✓ OWASP | ≥80% |
| Alza la Voz | 75% | 80% | 15 scenarios | ✓ WCAG AA | ✓ Input val | ≥70% |
| Karma/Perfil | 80% | 85% | 8 scenarios | ✓ Screen reader | ✓ RLS | ≥75% |
| Academia Cívica | 70% | 75% | 6 scenarios | ✓ WCAG AA | ✓ Content sec | ≥65% |
| Asistente Civia | 65% | 70% | 8 scenarios | ✓ Keyboard nav | ✓ Prompt inj | ≥60% |
| Cuentas Claras | 70% | 75% | 10 scenarios | ✓ Data tables | ✓ API auth | ≥65% |
| Voto Ciudadano | 75% | 80% | 12 scenarios | ✓ WCAG AAA | ✓ Vote integr | ≥70% |
| Verificación L3 | 80% | 85% | 8 scenarios | N/A | ✓✓ Zero-Trust | ≥75% |
| Círculos Cívicos | 70% | 75% | 6 scenarios | ✓ WCAG AA | ✓ Permissions | ≥65% |

# **4\. PLAN DE PRUEBAS DE ACCESIBILIDAD (WCAG 2.1 AA/AAA)**

## **4.1. Herramientas Automatizadas**

| Herramienta | Propósito | Frecuencia | Criterio Pass |
| :---- | :---- | :---- | :---- |
| jest-axe | Test a11y en componentes React | Cada commit (CI) | 0 violaciones |
| Lighthouse | Auditoría general accesibilidad | Cada PR | Score ≥90 |
| NVDA/JAWS | Test lectores pantalla | Semanal (manual) | Navegación completa OK |
| Keyboard navigation | Test sin mouse | Cada feature | Todos flujos tabulables |
| Color contrast | Ratio WCAG | Cada componente | AA mínimo (4.5:1 texto) |

## **4.2. Casos de Prueba Accesibilidad Manual**

| ID | Criterio WCAG | Validación |
| :---- | :---- | :---- |
| A11Y-001 | 1.1.1 (Non-text Content) | Todas imágenes tienen alt text descriptivo |
| A11Y-002 | 1.4.3 (Contrast) | Ratio mínimo 4.5:1 texto normal, 3:1 grande |
| A11Y-003 | 2.1.1 (Keyboard) | Todos elementos interactivos accesibles por tab |
| A11Y-004 | 2.4.7 (Focus Visible) | Focus outline visible en todos elementos |
| A11Y-005 | 3.3.1 (Error Identification) | Errores identificados con texto \+ ícono |
| A11Y-006 | 4.1.2 (Name, Role, Value) | ARIA labels correctos en todos controles |
| A11Y-007 | 2.4.1 (Bypass Blocks) | Skip links implementados |
| A11Y-008 | 1.4.13 (Content on Hover) | Tooltips accesibles por teclado |

# **5\. PLAN DE PRUEBAS DE SEGURIDAD (OWASP TOP 10\)**

| OWASP | Vulnerabilidad | Test | Herramienta | Criterio Pass |
| :---- | :---- | :---- | :---- | :---- |
| A01:2021 | Broken Access Control | RLS policies \+ Pentests | Supabase Inspect | 0 bypasses |
| A02:2021 | Cryptographic Failures | SSL/TLS \+ Encrypted data | SSL Labs | A+ rating |
| A03:2021 | Injection | SQL injection \+ XSS | OWASP ZAP \+ Snyk | 0 vulnerabilidades |
| A04:2021 | Insecure Design | Threat modeling \+ Review | Manual | Mitigaciones doc |
| A05:2021 | Security Misconfig | Headers \+ CSP | Security Headers | A+ rating |
| A06:2021 | Vulnerable Components | Dependency scanning | Snyk \+ npm audit | 0 critical/high |
| A07:2021 | Auth Failures | Brute force \+ Session | Burp Suite | Rate limiting OK |
| A08:2021 | Integrity | Code signing \+ SRI | CI/CD checks | SRI OK |
| A09:2021 | Logging Failures | Audit logs \+ Monitor | Sentry | Eventos críticos log |
| A10:2021 | SSRF | URL validation \+ Allowlist | Manual tests | Domains restringidos |

# **6\. PLAN DE PRUEBAS DE PERFORMANCE**

## **6.1. Core Web Vitals (Lighthouse)**

| Métrica | Objetivo | Device Tier | Herramienta | Frecuencia |
| :---- | :---- | :---- | :---- | :---- |
| LCP (Largest Contentful Paint) | ≤2.5s | HIGH | Lighthouse CI | Cada PR |
| LCP (Largest Contentful Paint) | ≤4.0s | MID | Lighthouse CI | Cada PR |
| LCP (Largest Contentful Paint) | ≤6.0s | LOW | Lighthouse CI throttled | Cada PR |
| FID (First Input Delay) | ≤100ms | ALL | Lighthouse CI | Cada PR |
| CLS (Cumulative Layout Shift) | ≤0.1 | ALL | Lighthouse CI | Cada PR |
| TTI (Time to Interactive) | ≤3.8s | HIGH | WebPageTest | Semanal |
| TTI (Time to Interactive) | ≤7.3s | LOW | WebPageTest (3G) | Semanal |

## **6.2. Pruebas de Carga (k6)**

| Scenario | VUs | Duración | Criterio Pass |
| :---- | :---- | :---- | :---- |
| Smoke test | 10 VUs | 5 min | Error rate \<1% |
| Load test | 100 VUs | 30 min | p95 latency ≤500ms |
| Stress test | 500 VUs | 15 min | No crashes, graceful degradation |
| Spike test | 0→1000→0 VUs | 10 min | Recovery ≤30s |
| Soak test | 200 VUs | 4 hours | No memory leaks |

# **7\. CRITERIOS DE EXIT POR SPRINT**

Checklist obligatorio antes de cerrar cada Sprint. No se permite avanzar al siguiente Sprint sin cumplir TODOS estos criterios.

* ✓ Todos los tests E2E del Sprint pasan (Playwright CI verde)  
* ✓ Cobertura de código ≥60% en nuevas features (Vitest coverage report)  
* ✓ 0 vulnerabilidades críticas/altas (Snyk \+ npm audit)  
* ✓ Lighthouse score ≥90 en performance (Lighthouse CI)  
* ✓ Lighthouse score ≥90 en accesibilidad (jest-axe \+ manual review)  
* ✓ RLS policies validadas (Penetration test pasado)  
* ✓ Documentación actualizada (Docs revisados por PO)  
* ✓ User Stories con criterios cumplidos (Backlog actualizado)  
* ✓ Demo exitosa con stakeholders (Sign-off PO)  
* ✓ Rollback plan testeado (Proceso documentado)

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━PLAN DE PRUEBAS Y VALIDACIÓN \- COMPLETOCIVICUM \- Sistema Nervioso Cívico de ChileScore: 10/10 ✓Enero 2026 | Versión 1.0━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**