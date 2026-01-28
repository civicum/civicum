

**CIVICUM**

Sistema Nervioso Cívico de Chile

**DOCUMENTO DE ARQUITECTURA SOFTWARE**  
**(SAD \- Software Architecture Document)**

*Stack Zero-Cost \+ Arquitectura IA Distribuida*

Versión: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **1\. INTRODUCCIÓN**

## **1.1. Propósito del Documento**

Este documento describe la arquitectura software de CIVICUM, proporcionando una visión comprehensiva de decisiones técnicas, componentes del sistema, patrones de diseño y estrategias de implementación.

## **1.2. Alcance**

Este SAD cubre:

* Arquitectura general del sistema (frontend, backend, base de datos, IA)  
* Stack tecnológico completo con justificación de cada componente  
* Decisiones arquitectónicas documentadas (ADRs)  
* Patrones de diseño aplicados  
* Estrategias de seguridad, escalabilidad y resiliencia  
* Diagramas de arquitectura (vistas 4+1)  
* Consideraciones de deployment y operación

## **1.3. Audiencia**

Documento dirigido a:

* Arquitectos y desarrolladores del equipo técnico  
* Auditores de seguridad y calidad  
* Product Owner y stakeholders técnicos  
* Equipos de operaciones e infraestructura  
* Validadores externos (expertos en 80+ revisiones MVP)

## **1.4. Referencias**

| Documento | Descripción |
| :---- | :---- |
| **ERS IEEE 830** | Especificación Requisitos Software |
| **Decisiones F-43 a F-47** | Stack Zero-Cost \+ IA Distribuida \+ Testing |
| **Plan Desarrollo Integral** | Roadmap 48 semanas MVP→V1→V2 |
| **Plan Pruebas** | Estrategia Shift-Left \+ Tests E2E bloqueantes |
| **DER (Doc 5\)** | Diagrama Entidad-Relación base de datos |
| **API Doc (Doc 6\)** | Especificación OpenAPI endpoints |

# **2\. VISIÓN ARQUITECTÓNICA GENERAL**

## **2.1. Principios Arquitectónicos**

| Principio | Aplicación en CIVICUM |
| :---- | :---- |
| **COSTO CERO PERPETUO** | Stack completo Free Tier sin límites temporales (F-43) |
| **OFFLINE-FIRST** | PWA con 3 tiers (HIGH/MEDIUM/LOW) funciona sin conexión (F-07) |
| **CLIENT-FIRST IA** | IA ejecuta en dispositivo usuario primero, nube fallback (F-44) |
| **SIMPLICIDAD** | Monolito modular frontend, evitar microservicios prematuros |
| **SEGURIDAD POR DISEÑO** | RLS PostgreSQL, cifrado E2E, WebAuthn sin contraseñas |
| **ESCALABILIDAD ELÁSTICA** | Serverless auto-scaling sin gestión servidores |
| **OBSERVABILIDAD** | Logs estructurados, métricas tiempo real, trazabilidad completa |
| **PORTABILIDAD** | Docker \+ IaC evita vendor lock-in crítico |

## **2.2. Modelo de Vistas 4+1**

Siguiendo el modelo de Kruchten, documentamos la arquitectura en 5 vistas complementarias:

### **2.2.1. Vista Lógica (Componentes)**

Organización funcional del sistema en capas:

┌─────────────────────────────────────┐  
│      CAPA PRESENTACIÓN (PWA)        │  
│  React 18 \+ shadcn/ui \+ Zustand     │  
├─────────────────────────────────────┤  
│      CAPA APLICACIÓN (Edge)         │  
│  Vercel Functions \+ Hono/tRPC       │  
├─────────────────────────────────────┤  
│      CAPA NEGOCIO (Servicios)       │  
│  ai-moderator | legal-drafter       │  
│  geo-tagger | data-sync | auth      │  
├─────────────────────────────────────┤  
│      CAPA DATOS (PostgreSQL)        │  
│  Neon.tech \+ RLS \+ pgvector         │  
└─────────────────────────────────────┘

#### ***Módulos Principales:***

* Mi CIVICUM: Onboarding \+ gestión perfil \+ niveles identidad (0-3)  
* Alza la Voz: Reportes ciudadanos geolocalizados \+ seguimiento  
* Cuentas Claras: Promesómetro 552+ autoridades \+ presupuestos  
* Voto Ciudadano: Votación simbólica leyes \+ Match Democrático  
* Academia Cívica: Microlearning 5-10 min \+ retos \+ certificación  
* Asistente Cívico (Civia): Conversacional \+ gen documentos \+ moderación

### **2.2.2. Vista Proceso (Flujos)**

Flujos críticos del sistema:

| Flujo | Componentes Involucrados | Tiempo Objetivo |
| :---- | :---- | :---- |
| **Autenticación WebAuthn** | Frontend → Vercel Edge → Neon auth.users → RLS | \<500ms |
| **Crear Reporte Offline** | PWA Local Storage → Service Worker → Background Sync | \<2s |
| **Consulta IA Tier HIGH** | Frontend → WebLLM (local) → Respuesta | \<3s |
| **Consulta IA Tier LOW** | Frontend → Plantilla JSON (local) | \<100ms |
| **Sincronización Datos Cívicos** | GitHub Actions Cron → APIs Gov → ETL → Neon | Diario 3am |
| **Moderación Contenido** | TF.js (local toxicity) → Jurado Digital → Vercel Edge | \<5s |

### **2.2.3. Vista Desarrollo (Organización Código)**

Estructura de directorios proyecto:

civicum/  
├── apps/  
│   ├── web/              \# Frontend PWA (React)  
│   │   ├── src/  
│   │   │   ├── components/  \# shadcn/ui \+ custom  
│   │   │   ├── modules/     \# 6 módulos core  
│   │   │   ├── services/    \# API clients  
│   │   │   ├── stores/      \# Zustand state  
│   │   │   └── utils/       \# Helpers  
│   │   └── public/  
│   │       ├── sw.js        \# Service Worker  
│   │       └── manifest.json  
│   └── api/              \# Vercel Edge Functions  
│       ├── auth/  
│       ├── reports/  
│       ├── ia/  
│       └── etl/  
├── packages/  
│   ├── db/               \# Drizzle ORM schemas  
│   ├── ui/               \# Shared components  
│   └── types/            \# TypeScript types  
├── tests/  
│   ├── unit/             \# Vitest  
│   └── e2e/              \# Playwright  
└── infra/  
    ├── docker/           \# Desarrollo local  
    └── scripts/          \# Deploy, backup

### **2.2.4. Vista Física (Infraestructura)**

Topología de deployment:

┌─────────────────┐  
│   CLOUDFLARE    │ CDN \+ WAF \+ DNS  
│   (Edge 300+)   │ DDoS Protection  
└────────┬────────┘  
         │  
         ▼  
┌─────────────────┐  
│     VERCEL      │ Frontend PWA  
│  Edge Functions │ \+ API Serverless  
└────────┬────────┘  
         │  
    ┌────┴────┬──────────┬───────────┐  
    ▼         ▼          ▼           ▼  
┌────────┐ ┌──────┐ ┌────────┐ ┌──────────┐  
│ NEON   │ │  R2  │ │Workers │ │ External │  
│PostGres│ │Storage│ │   AI   │ │APIs Gob  │  
│10GB    │ │10GB  │ │Fallback│ │43+ srcs  │  
└────────┘ └──────┘ └────────┘ └──────────┘

| Componente | Proveedor | Free Tier | Región |
| :---- | :---- | :---- | :---- |
| **Base Datos** | Neon.tech | 10GB \+ 1CPU | us-west-2 (Oregon) |
| **Hosting Frontend** | Vercel | 100GB bandwidth | Edge global |
| **CDN \+ WAF** | Cloudflare | Ilimitado | 300+ PoPs global |
| **Storage Archivos** | Cloudflare R2 | 10GB \+ 1M ops | Auto-global |
| **IA Fallback** | Workers AI | 10k tokens/día | Edge global |
| **CI/CD** | GitHub Actions | Ilimitado público | GitHub infra |

### **2.2.5. Vista Escenarios (Casos de Uso Clave)**

| Escenario | Descripción | Requisitos No Funcionales |
| :---- | :---- | :---- |
| **Terremoto 8.0** | Pico 50x tráfico normal reportando emergencias | Elasticidad, Modo Crisis activo, Degradación elegante |
| **Usuario Zona Rural** | Señal 2G, 512MB RAM, conexión intermitente | Tier LOW (800KB), Offline 100% funcional, Sync Background |
| **Autoridad Responde** | Municipio actualiza 200 reportes simultáneos | Realtime updates WebSocket, notificaciones push |
| **Ataque DDoS** | 100k req/s maliciosos sostenidos 1 hora | Cloudflare WAF auto-mitiga, uptime \>99.9% |
| **Verificación Nivel 3** | Usuario sube selfie+carnet para votar | Biometría procesada \<24h, evidencia eliminada, hash guardado |
| **Exportar Datos** | Usuario ejerce derecho portabilidad GDPR | JSON/ZIP completo en \<30s, formato estructurado |

# **3\. DECISIONES ARQUITECTÓNICAS (ADRs)**

Documentación de decisiones arquitectónicas clave siguiendo formato ADR estándar.

## **ADR-001: Neon.tech como Base de Datos Primaria**

**Estado:** APROBADO | **Fecha:** Enero 2026 | **Decisión:** F-43

### **Contexto:**

CIVICUM requiere PostgreSQL para datos relacionales \+ GIS (cuadrantes) \+ embeddings (pgvector). Alternativas evaluadas: Supabase Free (0.5GB límite), PlanetScale MySQL (incompatible PostGIS), Railway/Render (requieren tarjeta crédito).

### **Decisión:**

Usar Neon.tech como base de datos primaria PostgreSQL.

### **Justificación:**

* Free Tier: 10GB (20x Supabase), 1 vCPU, 1GB RAM \- suficiente MVP  
* PostgreSQL 16 completo: PostGIS \+ pgvector nativos  
* Branching: DB branches Git-like para testing  
* Serverless: Auto-pause tras inactividad, ahorro recursos  
* Zero vendor lock-in: pg\_dump estándar, migración trivial  
* Backups automáticos incluidos

### **Consecuencias:**

* Positivas: Capacidad 20x mayor, compatibilidad total PostgreSQL  
* Negativas: No incluye auth (manejado Vercel), no real-time (polling cada 5s)  
* Mitigación: WebSockets vía Vercel Edge para real-time crítico

## **ADR-002: Vercel para Hosting y Edge Functions**

**Estado:** APROBADO | **Decisión:** F-43

### **Contexto:**

Frontend PWA necesita hosting global con deployment automático. Backend requiere edge functions sin servidores.

### **Decisión:**

Vercel para frontend \+ edge functions. Cloudflare solo CDN/WAF.

### **Justificación:**

* Free Tier: 100GB bandwidth/mes, 500K edge requests  
* Deployment automático: Push a main → deploy en \<60s  
* Preview deploys: PR automáticamente con URL única  
* Edge Runtime: V8 isolates, cold start \<50ms  
* DX superior: Zero-config para Next.js/React

## **ADR-003: PWA Offline-First (No Apps Nativas)**

**Estado:** APROBADO | **Decisión:** F-07

### **Contexto:**

Usuarios en zonas rurales con conectividad intermitente. Apps nativas iOS+Android requieren \\$99+\\$25/año \+ mantenimiento dual.

### **Decisión:**

PWA instalable, no apps nativas inicialmente.

### **Justificación:**

* Costo \\$0: Sin fees stores, updates instantáneos  
* Offline funcional: Service Worker \+ IndexedDB \+ Background Sync  
* Instalable: Add to Home Screen, funciona como app  
* Single codebase: Mismo código web/mobile  
* Push notifications: Soportado (excepto iOS \<16.4)  
* Actualizaciones: Sin app review, deploy inmediato

### **Trade-offs:**

* Sin acceso APIs nativas avanzadas (NFC, Bluetooth)  
* Performance ligeramente menor vs nativa  
* Mitigación: WebAssembly para procesamiento pesado

## **ADR-004: Arquitectura IA Distribuida Client-First**

**Estado:** APROBADO | **Decisión:** F-44

### **Contexto:**

LLM cloud costaría \\$2,000+/mes con 10K usuarios. Dispositivos modernos tienen GPU capaz de inferencia local.

### **Decisión:**

IA ejecuta en cliente primero, nube solo fallback. 3 pisos:

Piso 0 (TIER LOW): Plantillas JSON \+ Reglas  
  ├─ Sin IA, sin costo  
  └─ Funcional 100% offline

Piso 1 (TIER HIGH): WebLLM \+ TensorFlow.js  
  ├─ Llama 3 8B cuantizado (1.2GB)  
  ├─ Toxicity classifier local  
  └─ Respuestas \<3s en dispositivo

Piso 2 (Fallback): Cloudflare Workers AI  
  ├─ Solo cuando Piso 1 falla  
  └─ 10k tokens/día gratis

### **Beneficios:**

* Costo LLM → \\$0/mes (90% consultas en cliente)  
* Privacidad: Datos no salen del dispositivo  
* Latencia \<3s vs 10-15s cloud  
* Funciona offline completo

# **4\. STACK TECNOLÓGICO DETALLADO**

## **4.1. Frontend Stack**

| Tecnología | Versión | Propósito | Alternativa Evaluada |
| :---- | :---- | :---- | :---- |
| **React** | 18.3+ | Framework UI, hooks, concurrent rendering | Vue 3, Svelte |
| **TypeScript** | 5.3+ | Type safety, DX, refactoring seguro | JavaScript puro |
| **shadcn/ui** | Latest | Componentes accesibles Radix \+ Tailwind | Material-UI, Chakra |
| **TanStack Query** | v5 | State server-side, cache, mutations | SWR, Apollo |
| **Zustand** | 4.x | State local ligero | Redux, Jotai |
| **Tailwind CSS** | 3.4+ | Utility-first CSS, tema Terracota | Styled-components |
| **Vite** | 5.x | Build tool rápido, HMR | Webpack, Turbopack |
| **Workbox** | 7.x | Service Worker, offline, cache strategies | Custom SW |
| **Lucide React** | Latest | Iconografía oficial CIVICUM | Hero Icons, Feather |

## **4.2. Backend Stack**

| Tecnología | Versión | Propósito | Alternativa |
| :---- | :---- | :---- | :---- |
| **Vercel Edge Runtime** | Latest | Serverless functions \<50ms cold start | AWS Lambda, CF Workers |
| **Hono** | 4.x | Router ultrarrápido Edge | Express, Fastify |
| **tRPC** | 11.x | End-to-end type safety | REST manual, GraphQL |
| **Drizzle ORM** | 0.33+ | ORM TypeScript-first, migraciones | Prisma, TypeORM |
| **Zod** | 3.x | Validación runtime schemas | Yup, Joi |

## **4.3. Base de Datos Stack**

| Componente | Tecnología | Uso |
| :---- | :---- | :---- |
| **RDBMS** | PostgreSQL 16 | Datos relacionales, transacciones ACID |
| **GIS** | PostGIS 3.4 | Cuadrantes, geolocalizaciónreportes |
| **Vector Search** | pgvector 0.7 | Embeddings similitud semántica |
| **Full-Text Search** | pg\_trgm \+ GiST | Búsqueda leyes, autoridades |
| **Row Level Security** | RLS Policies | Multi-tenancy, seguridad datos |
| **Connection Pool** | Neon Serverless | Auto-scaling connections |

## **4.4. IA Stack (3 Pisos)**

### **Piso 0: Sin IA (TIER LOW)**

* Plantillas JSON pre-definidas por módulo  
* Motor reglas if-then-else para lógica simple  
* Sin dependencias externas, 100% offline  
* Tamaño: \<50KB templates comprimidos  
* Ejemplo: "Reportar bache" → template con campos pre-llenados

### **Piso 1: IA Local (TIER HIGH/MEDIUM)**

| Librería | Modelo | Función |
| :---- | :---- | :---- |
| **WebLLM** | Llama 3 8B Q4 | Conversación general, gen documentos |
| **TensorFlow.js** | Toxicity Classifier | Moderación local pre-envío |
| **Transformers.js** | BGE Reranker | Re-ranking retrieval RAG |
| **ml5.js** | Face Detection | Validación biométrica (opcional) |
| **ONNX Runtime** | Custom Models | Modelos propios optimizados |

**Capacidades Piso 1:**

* Respuestas conversacionales Civia (asistente)  
* Generación oficios/cartas/recursos  
* Resumen debates Academia Cívica  
* Detección toxicidad pre-moderación  
* Text-to-SQL consultas presupuesto

### **Piso 2: IA Cloud Fallback (Todos Tiers)**

| Proveedor | Modelo | Límite Free |
| :---- | :---- | :---- |
| **Cloudflare Workers AI** | Llama 3 8B | 10k tokens/día |
| **Hugging Face Inference** | Varios OSS | 30k chars/mes |
| **OpenRouter (backup)** | Claude/GPT | API keys usuario |

**Estrategia Fallback:**

1. 1\. Intenta Piso 1 (local)  
2. 2\. Si falla (OOM, timeout): Piso 2 (cloud)  
3. 3\. Si falla Piso 2: Piso 0 (template)  
4. 4\. Si todo falla: Mensaje "Servicio temporalmente no disponible, intenta offline"

## **4.5. Infraestructura y DevOps**

| Servicio | Proveedor | Uso |
| :---- | :---- | :---- |
| **CDN Global** | Cloudflare | 300+ PoPs, cache assets estáticos |
| **WAF \+ DDoS** | Cloudflare Free | Protección ataques, rate limiting |
| **DNS** | Cloudflare | Gestión dominio civicum.cl |
| **Storage Archivos** | Cloudflare R2 | Fotos reportes, docs generados |
| **CI/CD** | GitHub Actions | Lint, test, build, deploy automático |
| **Monitoreo Errores** | Sentry Free | 5k events/mes, stack traces |
| **Analytics** | Plausible Self-hosted | Métricas uso sin tracking |
| **Uptime Monitor** | UptimeRobot Free | 50 monitors, alertas email |

# **5\. PATRONES DE DISEÑO APLICADOS**

## **5.1. Patrones Arquitectónicos**

| Patrón | Implementación | Beneficio |
| :---- | :---- | :---- |
| **Layered Architecture** | Presentación → Aplicación → Negocio → Datos | Separación concerns, mantenibilidad |
| **Backend for Frontend** | Edge functions especializadas por módulo | Optimización específica frontend |
| **CQRS Simplificado** | Queries separadas de Commands | Performance reads, validación writes |
| **Event Sourcing Parcial** | Audit logs inmutables críticos | Trazabilidad, compliance |
| **Circuit Breaker** | Fallback IA Piso 2→1→0 | Resiliencia, degradación elegante |
| **Repository Pattern** | Drizzle abstracts DB queries | Testability, portabilidad DB |

## **5.2. Patrones de Diseño Frontend**

* Compound Components: Componentes complejos composables  
* Render Props: Compartir lógica entre componentes  
* Custom Hooks: Encapsular lógica reutilizable  
* Context \+ Hooks: State management ligero  
* Suspense \+ Error Boundaries: Loading y error handling declarativo  
* Controlled Components: Forms con single source of truth

## **5.3. Patrones Backend**

* Middleware Chain: Validación → Auth → Lógica → Response  
* Dependency Injection: Services inyectados, no singletons  
* Factory Pattern: Crear objetos complejos (reports, documents)  
* Strategy Pattern: Seleccionar algoritmo moderación según contexto  
* Observer Pattern: WebSocket notifications subscribers

# **6\. ARQUITECTURA DE SEGURIDAD**

## **6.1. Defensa en Profundidad (Capas)**

┌─────────────────────────────────┐  
│  Capa 1: Cloudflare WAF \+ DDoS │ Rate limit, bot detection  
├─────────────────────────────────┤  
│  Capa 2: Vercel Edge Security  │ CORS, CSP headers, sanitize  
├─────────────────────────────────┤  
│  Capa 3: Aplicación (Input Val)│ Zod schemas, XSS prevention  
├─────────────────────────────────┤  
│  Capa 4: Base Datos (RLS)      │ Row Level Security policies  
├─────────────────────────────────┤  
│  Capa 5: Auditoría (Logs)      │ Inmutable audit trail  
└─────────────────────────────────┘

## **6.2. Autenticación y Autorización**

| Mecanismo | Detalles Implementación |
| :---- | :---- |
| **WebAuthn (Passkeys)** | Autenticación sin contraseñas, FIDO2, biometría dispositivo |
| **JWT Tokens** | Firmados con RS256, refresh token rotation, expiración 15min access |
| **RLS PostgreSQL** | Policies por tabla, usuario solo ve sus datos \+ institución |
| **RBAC (Roles)** | 4 roles: citizen, moderator, institution\_admin, super\_admin |
| **Nivel Identidad** | 0-3 según verificación, privilegios incrementales |
| **2FA Opcional** | TOTP (Google Authenticator) para nivel 3+ sensible |

## **6.3. Protección Datos en Reposo y Tránsito**

* Tránsito: TLS 1.3 obligatorio, HSTS strict  
* Reposo: Neon.tech cifrado AES-256 automático  
* Datos sensibles: pgcrypto para RUT (hash SHA-256), biometría (hash eliminado post-validación)  
* Backups: Cifrados con contraseña antes subir R2  
* Secrets: GitHub Secrets \+ Vercel Environment Variables, nunca en código

## **6.4. Prevención Vulnerabilidades OWASP Top 10**

| Vulnerabilidad | Mitigación | Herramienta |
| :---- | :---- | :---- |
| **A01 Broken Access** | RLS \+ JWT validation | PostgreSQL RLS |
| **A02 Cryptographic Failures** | TLS 1.3, bcrypt hashes | Neon encryption |
| **A03 Injection** | Prepared statements Drizzle | Zod validation |
| **A04 Insecure Design** | Threat modeling, ADRs | Manual review |
| **A05 Security Misconfiguration** | IaC, config audits | GitHub Actions |
| **A06 Vulnerable Components** | Dependabot, npm audit | Snyk Free |
| **A07 Auth Failures** | WebAuthn, JWT rotation | Vercel Edge |
| **A08 Data Integrity** | CSP, SRI, audit logs | Cloudflare |
| **A09 Logging Failures** | Structured logs, Sentry | Sentry Free |
| **A10 SSRF** | Whitelist APIs, no user URLs | Edge validation |

## **6.5. Monitoreo y Respuesta Incidentes**

**Plan de Respuesta Incidentes:**

5. 1\. Detección: Alertas Sentry \+ UptimeRobot \+ Cloudflare Analytics  
6. 2\. Clasificación: P0 (crítico) vs P1 (alto) vs P2 (medio)  
7. 3\. Contención: Rollback Vercel instantáneo (\<2min) si deploy causó  
8. 4\. Erradicación: Fix root cause, deploy hotfix  
9. 5\. Recuperación: Validar servicio, monitorear métricas  
10. 6\. Post-mortem: Documento incidente, acciones preventivas

**FIN DEL DOCUMENTO**

**Software Architecture Document (SAD)**  
**CIVICUM \- Sistema Nervioso Cívico de Chile**

**Stack Zero-Cost \+ IA Distribuida Client-First**  
**Diseñado para Escala Nacional con $0/mes**

**\#SomosIdeasNoBandos**

*Versión 1.0 | Enero 2026 | Actualizado: 24/01/2026*  
*Documento técnico para validación 80+ expertos profesionales*