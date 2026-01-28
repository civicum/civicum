

**CIVICUM**

Sistema Nervioso Cívico de Chile

**PLAN DE PROYECTO GANTT**  
**Roadmap 24 Semanas**

*Cronograma Integrado MVP→V1→V2*  
*Hitos | Dependencias | Recursos*

Versión: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **ÍNDICE**

* 1\. RESUMEN EJECUTIVO  
*    1.1. Información del Proyecto  
*    1.2. Objetivos Estratégicos  
*    1.3. Fases del Proyecto  
* 2\. CRONOGRAMA MAESTRO (24 SEMANAS)  
*    2.1. Fase MVP (S0-S5)  
*    2.2. Fase V1 (S6-S12)  
*    2.3. Fase V2 (S13-S20)  
*    2.4. Cierre y Lanzamiento (S21-S24)  
* 3\. HITOS CRÍTICOS  
*    3.1. Gates de Validación  
*    3.2. Entregables Principales  
* 4\. DEPENDENCIAS Y RUTA CRÍTICA  
*    4.1. Diagrama de Dependencias  
*    4.2. Tareas Críticas  
* 5\. ASIGNACIÓN DE RECURSOS  
*    5.1. Equipo Core  
*    5.2. Distribución por Sprint  
* 6\. GESTIÓN DE RIESGOS  
*    6.1. Matriz de Riesgos  
*    6.2. Plan de Contingencias  
* 7\. ESTIMACIONES Y PRESUPUESTO  
* 8\. ANEXOS

# **1\. RESUMEN EJECUTIVO**

## **1.1. Información del Proyecto**

| Propiedad | Valor |
| :---- | :---- |
| **Proyecto** | CIVICUM \- Sistema Nervioso Cívico de Chile |
| **Tipo** | Plataforma Civic Tech (PWA) |
| **Inicio** | Febrero 2026 |
| **Fin MVP** | Abril 2026 (12 semanas) |
| **Fin V2** | Agosto 2026 (24 semanas) |
| **Presupuesto** | $0 infraestructura \+ \~2,800h desarrollo |
| **Equipo Core** | 1 Product Owner \+ 2 Dev \+ 1 QA |
| **Objetivo MVP** | Demostrar valor real en 1 comuna piloto |
| **North Star Metric** | Problemas ciudadanos resueltos |

## **1.2. Objetivos Estratégicos**

| Objetivo | Métrica | Target MVP |
| :---- | :---- | :---- |
| **Confianza Ciudadana** | Trust Score promedio | ≥7/10 |
| **Impacto Verificable** | Problemas resueltos | ≥10 casos |
| **Adopción** | Usuarios activos | ≥300 en piloto |
| **Calidad Técnica** | Uptime | ≥99% |
| **Inclusión** | Usuarios LOW tier | ≥40% |

## **1.3. Fases del Proyecto**

| Fase | Semanas | Duración | Objetivo | Épicas |
| :---- | :---- | :---- | :---- | :---- |
| **Sprint 0** | S0 | 1 sem | Setup técnico \+ CI/CD | \- |
| **MVP** | S1-S5 | 5 sem | Producto mínimo robusto | É1 \+ É2 parcial |
| **V1** | S6-S12 | 7 sem | Expansión funcional | É2 completa \+ É3 inicio |
| **V2** | S13-S20 | 8 sem | Plataforma avanzada | É3-É6 completas |
| **Cierre** | S21-S24 | 4 sem | Lanzamiento público | Estabilización |

# **2\. CRONOGRAMA MAESTRO (24 SEMANAS)**

Este cronograma sigue el principio de Construcción Secuencial (F-04): completar cada módulo al 100% antes de lanzar.

## **2.1. FASE MVP (S0-S5) \- 6 Semanas**

### **SPRINT 0: Fundamentos (Semana 0\) \- 40h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S0-01** | Setup repo GitHub \+ CI/CD | 4h | Dev Lead | \- |
| **S0-02** | Configurar Neon.tech PostgreSQL | 2h | Backend Dev | S0-01 |
| **S0-03** | Setup Vercel \+ Cloudflare | 2h | DevOps | S0-01 |
| **S0-04** | Configurar Drizzle ORM | 4h | Backend Dev | S0-02 |
| **S0-05** | Implementar RLS base | 8h | Backend Dev | S0-04 |
| **S0-06** | Setup Vitest \+ Playwright | 4h | QA Engineer | S0-01 |
| **S0-07** | Crear PWA base (manifest \+ SW) | 6h | Frontend Dev | S0-03 |
| **S0-08** | Implementar Design System base | 8h | Frontend Dev | S0-07 |
| **S0-09** | E2E test: Deploy pipeline | 2h | QA Engineer | S0-06 |

\*\*Hito S0:\*\* ✓ Stack técnico funcionando end-to-end

### **SPRINT 1-2: Registro y Onboarding (Semanas 1-2) \- 84h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S1-01** | Implementar WebAuthn registration | 12h | Backend Dev | S0-05 |
| **S1-02** | Implementar WebAuthn login | 8h | Backend Dev | S1-01 |
| **S1-03** | Implementar Magic Link flow | 8h | Backend Dev | S1-01 |
| **S1-04** | UI Registro (Passkey \+ email) | 12h | Frontend Dev | S1-01 |
| **S1-05** | UI Login (multi-método) | 8h | Frontend Dev | S1-02, S1-03 |
| **S1-06** | Onboarding 3 slides | 6h | Frontend Dev | S0-08 |
| **S1-07** | Selector comuna (346 comunas) | 8h | Frontend Dev | S1-06 |
| **S1-08** | Hardware tier detection | 6h | Frontend Dev | \- |
| **S1-09** | Modo Lite activación automática | 8h | Frontend Dev | S1-08 |
| **S1-10** | E2E test: Registro completo | 8h | QA Engineer | S1-04 |

\*\*Hito S1-2:\*\* ✓ Usuario puede registrarse y completar onboarding

### **SPRINT 3-4: Alza la Voz Core (Semanas 3-4) \- 120h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S3-01** | Schema DB reportes \+ evidencias | 8h | Backend Dev | S0-05 |
| **S3-02** | API POST /reports (crear reporte) | 12h | Backend Dev | S3-01 |
| **S3-03** | API GET /reports (listar \+ filtros) | 8h | Backend Dev | S3-01 |
| **S3-04** | Upload evidencia (R2 Storage) | 8h | Backend Dev | S3-01 |
| **S3-05** | Integrar TensorFlow.js toxicity | 12h | Frontend Dev | \- |
| **S3-06** | UI Crear reporte (form \+ foto \+ GPS) | 16h | Frontend Dev | S3-02 |
| **S3-07** | UI Listar reportes (cards \+ filtros) | 12h | Frontend Dev | S3-03 |
| **S3-08** | UI Detalle reporte (timeline) | 12h | Frontend Dev | S3-03 |
| **S3-09** | Sistema apoyo "Yo Apoyo" | 12h | Backend Dev | S3-01 |
| **S3-10** | Journey OIRS automático | 8h | Backend Dev | S3-01 |
| **S3-11** | Offline sync reportes (Background Sync) | 12h | Frontend Dev | S0-07 |
| **S3-12** | E2E test: Crear reporte completo | 8h | QA Engineer | S3-06 |

\*\*Hito S3-4:\*\* ✓ Usuario puede crear, ver y apoyar reportes

### **SPRINT 5: Perfil y Karma (Semana 5\) \- 60h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S5-01** | Schema karma\_civico \+ badges | 4h | Backend Dev | S0-05 |
| **S5-02** | API GET /profile/me | 6h | Backend Dev | S5-01 |
| **S5-03** | API PATCH /profile/me | 6h | Backend Dev | S5-01 |
| **S5-04** | Sistema karma: transacciones | 12h | Backend Dev | S5-01 |
| **S5-05** | UI Perfil usuario | 12h | Frontend Dev | S5-02 |
| **S5-06** | UI Editar perfil | 8h | Frontend Dev | S5-03 |
| **S5-07** | UI Currículum cívico | 8h | Frontend Dev | S5-04 |
| **S5-08** | E2E test: Perfil completo | 4h | QA Engineer | S5-05 |

\*\*Hito S5 (MVP GATE):\*\* ✓ MVP funcional completo → Validar en piloto

## **2.2. FASE V1 (S6-S12) \- 7 Semanas**

### **SPRINT 6-7: Academia Cívica (Semanas 6-7) \- 80h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S6-01** | Schema cápsulas \+ user\_progress | 6h | Backend Dev | S0-05 |
| **S6-02** | API GET /capsulas (listar) | 6h | Backend Dev | S6-01 |
| **S6-03** | API GET /capsulas/{id} | 6h | Backend Dev | S6-01 |
| **S6-04** | API POST /capsulas/{id}/complete | 8h | Backend Dev | S6-01 |
| **S6-05** | Crear contenido 50+ cápsulas | 24h | Content Creator | \- |
| **S6-06** | UI Catálogo cápsulas | 10h | Frontend Dev | S6-02 |
| **S6-07** | UI Consumir cápsula (Stories) | 12h | Frontend Dev | S6-03 |
| **S6-08** | UI Quiz integrado | 8h | Frontend Dev | S6-03 |
| **S6-09** | E2E test: Completar cápsula | 6h | QA Engineer | S6-07 |

\*\*Hito S6-7:\*\* ✓ Academia Cívica funcional con 50+ cápsulas

### **SPRINT 8-10: Asistente Cívico (Semanas 8-10) \- 120h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S8-01** | Schema procesos \+ plantillas | 8h | Backend Dev | S0-05 |
| **S8-02** | Integrar WebLLM (Llama 3 8B) | 16h | AI Engineer | \- |
| **S8-03** | Hardware router service | 8h | Frontend Dev | \- |
| **S8-04** | Crear plantillas JSON (Piso 0\) | 16h | Content Creator | \- |
| **S8-05** | API POST /assistant/query | 12h | Backend Dev | S8-01 |
| **S8-06** | API POST /assistant/generate-document | 16h | Backend Dev | S8-01 |
| **S8-07** | UI Chat conversacional | 16h | Frontend Dev | S8-05 |
| **S8-08** | UI Generador documentos | 12h | Frontend Dev | S8-06 |
| **S8-09** | Integrar Text-to-SQL | 8h | AI Engineer | S8-02 |
| **S8-10** | E2E test: Consulta \+ documento | 8h | QA Engineer | S8-07 |

\*\*Hito S8-10:\*\* ✓ Asistente Cívico (Civia) responde consultas y genera docs

### **SPRINT 11-12: Cuentas Claras (Semanas 11-12) \- 100h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S11-01** | Schema autoridades \+ promesas | 8h | Backend Dev | S0-05 |
| **S11-02** | Integrar API VotaInteligente | 12h | Backend Dev | S11-01 |
| **S11-03** | Scraper promesas Presidente | 16h | Backend Dev | S11-01 |
| **S11-04** | API GET /authorities | 8h | Backend Dev | S11-01 |
| **S11-05** | API GET /authorities/{id}/promises | 8h | Backend Dev | S11-01 |
| **S11-06** | Integrar SINIM presupuestos | 16h | Backend Dev | \- |
| **S11-07** | UI Dashboard autoridad | 16h | Frontend Dev | S11-04 |
| **S11-08** | UI Promesómetro | 12h | Frontend Dev | S11-05 |
| **S11-09** | UI Comparativa presupuestos | 12h | Frontend Dev | S11-06 |
| **S11-10** | E2E test: Ver promesas | 6h | QA Engineer | S11-08 |

\*\*Hito S11-12 (V1 GATE):\*\* ✓ Cuentas Claras funcional → Fiscalización operativa

## **2.3. FASE V2 (S13-S20) \- 8 Semanas**

### **SPRINT 13-15: Voto Ciudadano (Semanas 13-15) \- 96h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S13-01** | Schema propuestas \+ votos | 8h | Backend Dev | S0-05 |
| **S13-02** | API POST /proposals | 12h | Backend Dev | S13-01 |
| **S13-03** | API GET /proposals (hot score) | 12h | Backend Dev | S13-01 |
| **S13-04** | API POST /proposals/{id}/vote | 8h | Backend Dev | S13-01 |
| **S13-05** | Detector duplicados (similitud) | 16h | AI Engineer | S13-01 |
| **S13-06** | UI Crear propuesta | 12h | Frontend Dev | S13-02 |
| **S13-07** | UI Feed propuestas (hot/new/top) | 12h | Frontend Dev | S13-03 |
| **S13-08** | UI Votar (disclaimers legales) | 8h | Frontend Dev | S13-04 |
| **S13-09** | Match Democrático algoritmo | 12h | Backend Dev | S11-02 |
| **S13-10** | E2E test: Crear \+ votar propuesta | 8h | QA Engineer | S13-08 |

\*\*Hito S13-15:\*\* ✓ Voto Ciudadano funcional con disclaimers

### **SPRINT 16-18: Verificación Nivel 3 (Semanas 16-18) \- 96h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S16-01** | Schema identity\_claims | 6h | Backend Dev | S0-05 |
| **S16-02** | Integrar MediaPipe liveness | 16h | AI Engineer | \- |
| **S16-03** | Integrar face-api.js matching | 16h | AI Engineer | \- |
| **S16-04** | Protocolo Zero-Trust servidor | 16h | Backend Dev | S16-01 |
| **S16-05** | Challenge aleatorio generator | 8h | Backend Dev | S16-04 |
| **S16-06** | UI Captura video liveness | 12h | Frontend Dev | S16-02 |
| **S16-07** | UI Captura foto carnet | 8h | Frontend Dev | \- |
| **S16-08** | Validación RUT dígito verificador | 8h | Backend Dev | S16-04 |
| **S16-09** | Política eliminación evidencia | 6h | Backend Dev | S16-04 |
| **S16-10** | E2E test: Verificación completa | 12h | QA Engineer | S16-06 |

\*\*Hito S16-18:\*\* ✓ Verificación Nivel 3 operativa (Zero-Trust)

### **SPRINT 19-20: Círculos Cívicos (Semanas 19-20) \- 80h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S19-01** | Schema círculos \+ members | 8h | Backend Dev | S0-05 |
| **S19-02** | API POST /organizations | 12h | Backend Dev | S19-01 |
| **S19-03** | API POST /organizations/{id}/join | 6h | Backend Dev | S19-01 |
| **S19-04** | Sistema threads \+ votos internos | 16h | Backend Dev | S19-01 |
| **S19-05** | Generador actas automático | 12h | AI Engineer | S8-02 |
| **S19-06** | UI Crear círculo | 10h | Frontend Dev | S19-02 |
| **S19-07** | UI Dashboard círculo | 12h | Frontend Dev | S19-04 |
| **S19-08** | UI Recetas Cívicas catálogo | 8h | Frontend Dev | \- |
| **S19-09** | E2E test: Crear círculo \+ votar | 8h | QA Engineer | S19-07 |

\*\*Hito S19-20 (V2 GATE):\*\* ✓ Organización comunitaria operativa

## **2.4. CIERRE Y LANZAMIENTO (S21-S24) \- 4 Semanas**

### **SPRINT 21-22: Estabilización (Semanas 21-22) \- 80h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S21-01** | Bug fixing críticos | 24h | Dev Team | Todos |
| **S21-02** | Optimización performance | 16h | Dev Team | Todos |
| **S21-03** | Auditoría seguridad OWASP | 12h | Security | Todos |
| **S21-04** | Pruebas carga (k6) | 12h | QA Engineer | Todos |
| **S21-05** | Documentación técnica final | 8h | Dev Lead | Todos |
| **S21-06** | Manual usuario final | 8h | Product Owner | Todos |

\*\*Hito S21-22:\*\* ✓ Plataforma estable y lista para lanzamiento

### **SPRINT 23-24: Lanzamiento (Semanas 23-24) \- 60h**

| ID | Tarea | Horas | Responsable | Dependencias |
| :---- | :---- | :---- | :---- | :---- |
| **S23-01** | Material marketing (landing) | 16h | Marketing | \- |
| **S23-02** | Campaña redes sociales | 12h | Marketing | S23-01 |
| **S23-03** | Acuerdos municipios (3-5) | 16h | Product Owner | \- |
| **S23-04** | Capacitación funcionarios | 8h | Product Owner | S23-03 |
| **S23-05** | Monitoreo lanzamiento 24/7 | 8h | Dev Team | Todos |

\*\*Hito S23-24 (LANZAMIENTO PÚBLICO):\*\* 🚀 CIVICUM en producción

# **3\. HITOS CRÍTICOS**

## **3.1. Gates de Validación**

Cada fase termina con un gate de validación obligatorio antes de continuar. Criterio Go/No-Go basado en métricas objetivas.

| Gate | Semana | Criterio Go | Métricas Validadas | Responsable |
| :---- | :---- | :---- | :---- | :---- |
| **Sprint 0 Gate** | S0 | Stack funcionando E2E | Deploy pipeline, DB conectada, CI/CD | Dev Lead |
| **MVP Gate** | S5 | ≥3 OKRs cumplidos, 0 incidentes graves | Trust score ≥7/10, Uptime \>99%, 300+ usuarios piloto | Product Owner |
| **V1 Gate** | S12 | Fiscalización operativa | Promesas sincronizadas, SINIM actualizado, Match democrático funcional | Product Owner |
| **V2 Gate** | S20 | Plataforma completa | Nivel 3 verificado, Círculos activos, Academia con 50+ cápsulas | Product Owner |
| **Lanzamiento Público** | S24 | 3-5 municipios piloto activos | Estabilidad validada, Material marketing listo | Product Owner |

## **3.2. Entregables Principales**

| Entregable | Semana | Descripción | Formato |
| :---- | :---- | :---- | :---- |
| **Stack Técnico Base** | S0 | Repo GitHub \+ CI/CD \+ PWA base \+ Design System | Código |
| **MVP Funcional** | S5 | Registro \+ Reportes \+ Karma funcionales | PWA deployada |
| **Academia Cívica** | S7 | 50+ cápsulas educativas con quiz | Contenido \+ UI |
| **Asistente Civia** | S10 | IA conversacional \+ Generador docs | Backend \+ Frontend |
| **Promesómetro** | S12 | 552+ autoridades con promesas | Dashboard \+ API |
| **Voto Ciudadano** | S15 | Propuestas ciudadanas \+ Match democrático | Módulo completo |
| **Verificación Nivel 3** | S18 | Protocolo Zero-Trust biométrico | Feature \+ Tests |
| **Círculos Cívicos** | S20 | Organización comunitaria \+ Recetas | Módulo completo |
| **Documentación Final** | S22 | Manual técnico \+ Manual usuario | Docs (.docx, .md) |
| **Material Marketing** | S23 | Landing \+ Campaña redes | Web \+ Assets |

# **4\. DEPENDENCIAS Y RUTA CRÍTICA**

## **4.1. Diagrama de Dependencias (Texto)**

\*\*Ruta Crítica Principal (Sprint 0 → MVP → V2):\*\*

S0: Setup Stack Técnico  
  ↓  
S1-2: Registro \+ Onboarding (depende: S0-05 RLS base)  
  ↓  
S3-4: Alza la Voz (depende: S1-01 Auth, S0-07 PWA)  
  ↓  
S5: Perfil \+ Karma (depende: S3-01 Reportes)  
  ↓ MVP GATE  
S6-7: Academia Cívica (independiente, puede paralelizar)  
  ↓  
S8-10: Asistente Cívico (depende: S6-01 Schema cápsulas para contexto)  
  ↓  
S11-12: Cuentas Claras (independiente)  
  ↓ V1 GATE  
S13-15: Voto Ciudadano (depende: S11-02 API VotaInteligente)  
  ↓  
S16-18: Verificación Nivel 3 (independiente, crítico)  
  ↓  
S19-20: Círculos Cívicos (depende: S16-01 Schema identity)  
  ↓ V2 GATE  
S21-22: Estabilización (depende: TODO completado)  
  ↓  
S23-24: Lanzamiento (depende: S21-03 Auditoría seguridad aprobada)

## **4.2. Tareas Críticas (No pueden retrasarse)**

| ID Tarea | Descripción | Semana | Impacto Retraso |
| :---- | :---- | :---- | :---- |
| **S0-01** | Setup repo GitHub \+ CI/CD | S0 | Bloquea todo desarrollo paralelo |
| **S0-05** | Implementar RLS base | S0 | Bloquea seguridad de todos los módulos |
| **S1-01** | WebAuthn registration | S1 | Bloquea todo flujo de usuarios |
| **S3-01** | Schema DB reportes | S3 | Bloquea Alza la Voz (módulo crítico MVP) |
| **S8-02** | Integrar WebLLM | S8 | Bloquea Asistente Cívico (diferenciador clave) |
| **S11-02** | Integrar API VotaInteligente | S11 | Bloquea Cuentas Claras \+ Match Democrático |
| **S16-04** | Protocolo Zero-Trust | S16 | Bloquea verificación Nivel 3 (seguridad crítica) |
| **S21-03** | Auditoría seguridad OWASP | S21 | Bloquea lanzamiento público |

# **5\. ASIGNACIÓN DE RECURSOS**

## **5.1. Equipo Core**

| Rol | Responsabilidades | Dedicación | Skills Clave |
| :---- | :---- | :---- | :---- |
| **Product Owner** | Visión, priorización, validación municipios | Full-time | Civic tech, producto, negociación |
| **Dev Lead (Backend)** | Arquitectura, APIs, RLS, integraciones | Full-time | TypeScript, PostgreSQL, Supabase, NestJS |
| **Frontend Dev** | UI/UX, PWA, Design System, optimización | Full-time | React, Next.js, TailwindCSS, Accessibility |
| **AI Engineer** | WebLLM, TensorFlow.js, liveness, NLP | Part-time | ML/AI, Python, JavaScript |
| **QA Engineer** | Testing E2E, accesibilidad, performance | Part-time | Playwright, Vitest, Lighthouse |
| **Content Creator** | Cápsulas Academia, plantillas legales | Part-time | Redacción, derecho, educación |

## **5.2. Distribución por Sprint**

| Sprint | Backend | Frontend | AI Eng | QA | Content |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **S0** | 16h | 14h | 0h | 6h | 0h |
| **S1-2** | 28h | 38h | 0h | 8h | 0h |
| **S3-4** | 48h | 52h | 12h | 8h | 0h |
| **S5** | 28h | 28h | 0h | 4h | 0h |
| **S6-7** | 20h | 22h | 0h | 6h | 24h |
| **S8-10** | 52h | 44h | 24h | 8h | 16h |
| **S11-12** | 60h | 40h | 0h | 6h | 0h |
| **S13-15** | 40h | 32h | 16h | 8h | 0h |
| **S16-18** | 46h | 20h | 32h | 12h | 0h |
| **S19-20** | 46h | 30h | 12h | 8h | 0h |
| **S21-22** | 40h | 16h | 0h | 24h | 8h |
| **S23-24** | 8h | 16h | 0h | 0h | 28h |

# **6\. GESTIÓN DE RIESGOS**

## **6.1. Matriz de Riesgos**

| Riesgo | Probabilidad | Impacto | Mitigación | Contingencia |
| :---- | :---- | :---- | :---- | :---- |
| **Retraso integración APIs gobierno** | Media | Alto | Iniciar integraciones Sprint 0 (pruebas) | Mockear datos con versión estática |
| **WebLLM no funciona LOW tier** | Baja | Alto | Hardware router \+ fallback Cloudflare Workers | Piso 0 con plantillas JSON |
| **Abandono piloto municipios** | Media | Alto | Seleccionar 3-5 municipios comprometidos | Pivotear a piloto ciudadano directo |
| **Brecha seguridad crítica** | Baja | Crítico | Auditoría OWASP Sprint 21 \+ Pentesting | Rollback \+ hotfix inmediato |
| **Falta recursos (personas)** | Media | Medio | Backlog priorizado P0/P1/P2 | Reducir alcance V2, focus en MVP+V1 |
| **Performance pobre LOW tier** | Media | Alto | Tests continuos Lighthouse (\>90) | Optimización agresiva \+ Modo Ultra-Lite |
| **Incumplimiento accesibilidad** | Baja | Alto | jest-axe en CI desde Sprint 0 | Auditoría experta \+ corrección |
| **Datos municipios desactualizados** | Alta | Medio | Jobs actualización mensual SINIM | Disclaimer fecha datos visible |

# **7\. ESTIMACIONES Y PRESUPUESTO**

## **7.1. Resumen de Horas por Fase**

| Fase | Horas Totales | % del Total |
| :---- | :---- | :---- |
| **Sprint 0** | 40h | 2% |
| **MVP (S1-S5)** | 304h | 15% |
| **V1 (S6-S12)** | 300h | 15% |
| **V2 (S13-S20)** | 352h | 18% |
| **Cierre (S21-S24)** | 140h | 7% |
| **Investigación Antropológica** | \~860h | 43% |
| **\*\*TOTAL PROYECTO\*\*** | \*\*\~1,996h\*\* | \*\*100%\*\* |

\*\*Nota:\*\* Las \~860h de investigación antropológica (27 bloques) ya están completadas. Horas restantes son implementación técnica.

## **7.2. Presupuesto Infraestructura**

| Servicio | Plan | Costo/mes | Total 24 semanas |
| :---- | :---- | :---- | :---- |
| **Neon.tech PostgreSQL** | Free (500MB) | $0 | $0 |
| **Vercel Hosting** | Hobby | $0 | $0 |
| **Cloudflare CDN \+ R2** | Free (10GB) | $0 | $0 |
| **Supabase Auth \+ Storage** | Free (50MB) | $0 | $0 |
| **GitHub Actions CI/CD** | Free (2000 min) | $0 | $0 |
| **Plausible Analytics** | Self-hosted | $0 | $0 |
| **\*\*TOTAL INFRAESTRUCTURA\*\*** |  | \*\*$0/mes\*\* | \*\*$0\*\* |

\*\*Principio F-05 (Frugalidad):\*\* Stack técnico completamente gratuito.

# **8\. ANEXOS**

## **8.1. Referencias del Proyecto**

* Documento 1: Wireframes y Prototipos (Figma)  
* Documento 2: Sistema de Diseño Maestro (Design System)  
* Documento 3: Especificación de Requisitos (SRS)  
* Documento 4: Arquitectura de Software (SAD)  
* Documento 5: Diagrama Entidad-Relación (DER)  
* Documento 6: Especificación API OpenAPI 3.1  
* Documento 8: Plan de Pruebas y Calidad (QA)  
* Documento 9: Manual de Usuario  
* Documento 10: Plan de Implementación  
* Documento 11: Política de Privacidad y Términos  
* Documento 12: Backlog Gherkin (User Stories BDD)  
* Investigación Antropológica (27 bloques)  
* Decisiones F-01 a F-47 aprobadas  
* Backlog Consolidado con 716h adicionales

## **8.2. Glosario de Términos**

| Término | Definición |
| :---- | :---- |
| **Sprint** | Ventana de desarrollo 1-2 semanas con objetivo específico |
| **Gate** | Punto validación obligatorio antes continuar siguiente fase |
| **MVP** | Minimum Viable Product \- Producto mínimo robusto funcional |
| **V1** | Versión 1 \- Primera expansión funcional post-MVP |
| **V2** | Versión 2 \- Plataforma avanzada completa |
| **Épica** | Conjunto de user stories relacionadas (módulo completo) |
| **RLS** | Row Level Security \- Seguridad nivel fila PostgreSQL |
| **PWA** | Progressive Web App \- Aplicación web progresiva offline |
| **E2E** | End-to-End \- Prueba flujo completo usuario |
| **CI/CD** | Continuous Integration/Deployment \- Integración continua |
| **P0/P1/P2** | Prioridades: P0 crítico, P1 importante, P2 deseable |
| **WebLLM** | Large Language Model ejecutando en navegador local |
| **Zero-Trust** | Arquitectura seguridad: no confiar en cliente, validar todo |

## **8.3. Control de Cambios**

| Versión | Fecha | Cambios | Autor |
| :---- | :---- | :---- | :---- |
| **1.0** | 24/01/2026 | Versión inicial completa \- Plan 24 semanas MVP→V2 | Product Owner \+ IA Asistente |

**FIN DEL DOCUMENTO**

**Plan de Proyecto Gantt \- Roadmap 24 Semanas**  
**CIVICUM \- Sistema Nervioso Cívico de Chile**

**\~2,000 horas | 12 entregables | 5 gates validación**

**\#SomosIdeasNoBandos**

*Versión 1.0 | Enero 2026 | Actualizado: 24/01/2026*  
*Documento técnico para validación 80+ expertos profesionales*