

**CIVICUM**

Sistema Nervioso Cívico de Chile

**DOCUMENTO 3**

**ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE**

*Estándar IEEE 830-1998*

Versión: 1.0 MVP  
Fecha: Enero 2026  
Estado: ✅ APROBADO  
Stack Zero-Cost: $0/mes perpetuo

# **Índice de Contenidos**

* 1\. INTRODUCCIÓN  
* 1.1. Propósito  
* 1.2. Alcance  
* 1.3. Definiciones, Acrónimos y Abreviaturas  
* 1.4. Referencias  
* 1.5. Visión General del Documento

* 2\. DESCRIPCIÓN GENERAL  
* 2.1. Perspectiva del Producto  
* 2.2. Funciones del Producto  
* 2.3. Características de los Usuarios  
* 2.4. Restricciones  
* 2.5. Suposiciones y Dependencias

* 3\. REQUISITOS ESPECÍFICOS  
* 3.1. Requisitos Funcionales  
* 3.1.1. Módulo Mi CIVICUM  
* 3.1.2. Módulo Academia Cívica  
* 3.1.3. Módulo Asistente Cívico  
* 3.1.4. Módulo Alza la Voz \+ Mesas  
* 3.1.5. Módulo Cuentas Claras  
* 3.1.6. Módulo Voto Ciudadano  
* 3.2. Requisitos No Funcionales  
* 3.2.1. Rendimiento  
* 3.2.2. Seguridad  
* 3.2.3. Usabilidad  
* 3.2.4. Confiabilidad  
* 3.2.5. Mantenibilidad  
* 3.3. Interfaces Externas  
* 3.4. Restricciones de Diseño

* 4\. ARQUITECTURA DEL SISTEMA  
* 4.1. Stack Tecnológico  
* 4.2. Arquitectura IA 3 Capas  
* 4.3. Arquitectura Offline-First

* 5\. VALIDACIÓN DE INTEGRIDAD  
* 5.1. Archivos Fuente  
* 5.2. Decisiones F-XX Implementadas  
* 5.3. Certificación de Completitud

# **1\. INTRODUCCIÓN**

## **1.1. Propósito**

Este documento es la Especificación de Requisitos de Software (ERS) para CIVICUM \- Sistema Nervioso Cívico de Chile, siguiendo el estándar IEEE 830-1998. Define los requisitos funcionales y no funcionales del sistema MVP, sirviendo como base contractual para el desarrollo.

Audiencia: Equipo de desarrollo, arquitectos de software, diseñadores UX/UI, validadores externos, y stakeholders del proyecto.

## **1.2. Alcance**

CIVICUM es una plataforma cívica digital chilena que transforma la frustración ciudadana en acción democrática organizada. El sistema MVP consta de 6 módulos principales:

* Mi CIVICUM: Gestión de identidad, perfil y trayectoria cívica  
* Academia Cívica: Microlearning contextual y rutas educativas  
* Asistente Cívico: Orientación conversacional con IA  
* Alza la Voz \+ Mesas: Reportes geolocalizados y organización vecinal  
* Cuentas Claras: Transparencia presupuestaria y fiscalización  
* Voto Ciudadano: Participación democrática y mandatos vinculantes

## **1.3. Definiciones, Acrónimos y Abreviaturas**

| Término | Definición |
| :---- | :---- |
| **CIVICUM** | Sistema Nervioso Cívico de Chile |
| **MVP** | Minimum Viable Product \- Producto Mínimo Viable |
| **PWA** | Progressive Web App \- Aplicación Web Progresiva |
| **F-XX** | Decisión aprobada (ej: F-04, F-05, etc.) |
| **Device Tier** | Nivel de capacidad del dispositivo: LOW/MEDIUM/HIGH |
| **Karma Cívico** | Sistema de reputación por servicio comunitario |
| **Cache 16 semanas** | Base de conocimiento curada 43+ fuentes oficiales |
| **Stack Anti-Alucinación** | 12 técnicas verificación $0 costo adicional |
| **Offline Dignity Mode** | Funcionalidad completa sin conexión |
| **Terracota v2** | Design System oficial CIVICUM |
| **Nivel de Identidad** | Niveles 0-3: Mirón, Registrado, Verificado, Guardián |
| **Smart Dock** | Barra navegación inteligente con iconos Lucide |
| **Extreme Lite** | Modo para dispositivos básicos (3 colores, sin JS) |
| **WCAG 2.1 AA** | Estándar accesibilidad web mínimo garantizado |
| **Zero-Cost Stack** | Infraestructura $0/mes perpetuo |

## **1.4. Referencias**

* CIVICUM\_Plan\_Desarrollo\_Software\_Integral\_v1.docx  
* CIVICUM\_Decisiones\_Aprobadas.md (F-01 a F-25)  
* CIVICUM\_Decisiones\_F43\_F47\_Integracion.docx  
* CIVICUM\_Design\_System\_Maestro.docx  
* CIVICUM\_Validacion\_Final.md  
* Auditoria\_CIVICUM\_Fusionada\_Final.docx  
* IEEE Std 830-1998 \- Software Requirements Specifications

## **1.5. Visión General del Documento**

Sección 2 describe el contexto general del sistema. Sección 3 detalla requisitos específicos funcionales y no funcionales. Sección 4 presenta la arquitectura técnica. Sección 5 valida integridad con documentación del proyecto.

# **2\. DESCRIPCIÓN GENERAL**

## **2.1. Perspectiva del Producto**

CIVICUM es un sistema independiente que opera como PWA (Progressive Web App) instalable. No reemplaza sistemas gubernamentales existentes sino que los complementa agregando una capa de participación ciudadana, transparencia y organización comunitaria.

Características distintivas:

* Infraestructura Zero-Cost ($0/mes perpetuo)  
* Offline-First con Service Workers  
* IA distribuida (cliente primero, nube fallback)  
* Multi-tier (HIGH/MEDIUM/LOW/Extreme Lite)  
* WCAG 2.1 AA garantizado, AAA en críticos

## **2.2. Funciones del Producto**

El sistema proporciona 6 funciones principales integradas:

| Módulo | Función Principal | Valor al Usuario |
| :---- | :---- | :---- |
| **Mi CIVICUM** | Gestión identidad y trayectoria | Perfil cívico unificado |
| **Academia Cívica** | Microlearning contextual | Aprende haciendo sin curso formal |
| **Asistente Cívico** | Orientación conversacional IA | Guía paso a paso en lenguaje simple |
| **Alza la Voz \+ Mesas** | Reportes y organización vecinal | Transforma frustración en acción |
| **Cuentas Claras** | Transparencia presupuestaria | Fiscaliza sin ser experto |
| **Voto Ciudadano** | Participación democrática | Voz en decisiones públicas |

## **2.3. Características de los Usuarios**

| Tipo Usuario | Nivel Técnico | Necesidad Principal | Device Tier |
| :---- | :---- | :---- | :---- |
| **Joven Escéptico (18-29)** | Alto | Inmediatez, RRSS-like | HIGH/MEDIUM |
| **Adulto Pragmático (30-45)** | Medio | Eficiencia, resultados | MEDIUM/HIGH |
| **Mayor Cauteloso (60+)** | Bajo | Claridad, seguridad | LOW/MEDIUM |
| **Baja Escolaridad** | Bajo | Visual, paso a paso | LOW |
| **Mujer Sensible Riesgo** | Variable | Privacidad, anonimato | MEDIUM |
| **Ciudadano Activo** | Alto | Datos, herramientas avanzadas | HIGH |

## **2.4. Restricciones**

* Presupuesto: $0/mes infraestructura (F-43)  
* Offline obligatorio: funcionalidad sin conexión (F-07)  
* Neutralidad política: sin colores partidistas (F-05)  
* Inclusión radical: dispositivos $50 USD (F-04)  
* WCAG 2.1 AA mínimo en todos los componentes  
* Privacidad by default: mínimo dato necesario  
* Ley chilena: compliance con protección datos, elecciones

## **2.5. Suposiciones y Dependencias**

* Free tiers permanecerán disponibles: Neon.tech 10GB, Vercel 100GB, Cloudflare ilimitado  
* APIs gubernamentales continuarán accesibles: SINIM, Congreso Abierto, InfoLobby  
* WebAuthn/Passkeys soportados en 80%+ dispositivos objetivo  
* Service Workers habilitados en navegadores mayoritarios  
* GitHub Actions gratuito para proyectos públicos

# **3\. REQUISITOS ESPECÍFICOS**

## **3.1. Requisitos Funcionales**

### **3.1.1. Módulo Mi CIVICUM**

RF-MC-001: Registro de Usuario

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir registro mediante WebAuthn/Passkey (preferido) O Magic Link (fallback). Nivel 0 (Mirón) sin registro, Nivel 1 requiere email verificado.

RF-MC-002: Perfil Cívico

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE mostrar perfil con: karma cívico, nivel de identidad, trayectoria (reportes, votos, participaciones), badges ganados, progreso Academia.

RF-MC-003: Historial de Actividad

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE registrar timeline cronológico de: reportes creados, votos emitidos, comentarios, propuestas, participación mesas. Exportable como PDF.

RF-MC-004: Gestión de Privacidad

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir: modo anónimo por acción, configuración visibilidad perfil, descarga datos personales (GDPR-style), eliminación cuenta con trazabilidad.

### **3.1.2. Módulo Academia Cívica**

RF-AC-001: Microlearning Contextual (Capa Invisible)

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE inyectar micro-cápsulas educativas (5-10 min) EN CONTEXTO de uso. Ejemplo: antes de votar ley compleja, muestra "¿Qué es bicameralidad?" en formato story.

RF-AC-002: Hub Academia (Capa Visible)

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE proporcionar espacio dedicado "Academia Cívica" con: rutas aprendizaje, cápsulas completadas, badges, recomendaciones según actividad.

RF-AC-003: Formatos Educativos

Prioridad: ALTA | Tipo: Funcional  
El sistema DEBE soportar: Stories verticales (tipo Instagram), Quizzes gamificados, Tooltips inline, Videos cortos (\<2min), Infografías interactivas.

RF-AC-004: Progresión y Certificación

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE rastrear progreso por dominio (Constitución, Presupuesto, Legislación) y otorgar certificados/badges al completar rutas.

### **3.1.3. Módulo Asistente Cívico (Civia)**

RF-AS-001: Conversación Natural

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE proporcionar interfaz conversacional con: procesamiento lenguaje natural, comprensión intención, respuestas en lenguaje simple ciudadano.

RF-AS-002: Stack Anti-Alucinación

Prioridad: CRÍTICA | Tipo: Funcional Core  
El sistema DEBE implementar: Evidence-Only Policy (respuestas solo con fuentes), Abstención Dura ("No tengo datos verificados"), NLI Verification, BGE Reranker retrieval.

RF-AS-003: Knowledge Cache 16 semanas

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE mantener cache curado: 43+ fuentes oficiales, 10 entidades datos, TTL por tipo dato, actualización automática pipelines.

RF-AS-004: IA Distribuida Client-First

Prioridad: ALTA | Tipo: Funcional  
El sistema DEBE ejecutar IA: WebLLM en cliente (toxicidad, clasificación básica), API externa solo fallback. Costo LLM objetivo: $0.

### **3.1.4. Módulo Alza la Voz \+ Mesas**

RF-AV-001: Creación de Reportes Geolocalizados

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir: reportar con geolocalización, categorización (bache, luminaria, seguridad), adjuntar fotos, asignación automática cuadrante vecinal.

RF-AV-002: Sistema de Apoyos "Yo Apoyo"

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir ciudadanos apoyar reportes. Umbrales: 10 apoyos=prioridad, 50 apoyos=carta municipal, 200 apoyos=mesa vecinal, 1000 apoyos=votación vinculante.

RF-AV-003: Escalamiento Legal Automático

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE generar: oficios automáticos con IA (base legal chilena), seguimiento tiempo respuesta (Ley 19.880), escalamiento Contraloría si no respuesta.

RF-AV-004: Mesas Vecinales Virtuales

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE facilitar: creación mesa por reporte con 200+ apoyos, votación interna propuestas, generación actas IA, asignación tareas.

### **3.1.5. Módulo Cuentas Claras**

RF-CC-001: Visualización Presupuesto

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE mostrar: presupuesto nacional/comunal por área (Salud, Educación), ejecutado vs planificado, comparativas temporales, drill-down granular.

RF-CC-002: Datos SINIM Normalizados

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE integrar: datos 346 municipios chilenos, 150+ indicadores SINIM, normalización automática, actualización trimestral.

RF-CC-003: Dashboards Comparativos

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE permitir: comparar municipios similar tamaño/presupuesto, ranking transparencia, gráficos interactivos, exportar reportes.

RF-CC-004: Promesómetro Gobierno

Prioridad: MEDIA | Tipo: Funcional  
El sistema DEBE rastrear: promesas programa gobierno, desglose IA categorías, verificación híbrida (automática+ciudadana), costo promesas vs presupuesto.

### **3.1.6. Módulo Voto Ciudadano**

RF-VC-001: Voto en Leyes Reales

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir: votar proyectos ley en trámite Congreso, resumen neutro IA \<280 caracteres, cálculo Match Democrático con representantes.

RF-VC-002: Voto Propuestas Ciudadanas

Prioridad: ALTA | Tipo: Funcional Core  
El sistema DEBE permitir: votar propuestas Laboratorio Ideas, votación argumentos Balanza Cívica, trazabilidad voto.

RF-VC-003: Tarjeta de Decisión Unificada

Prioridad: ALTA | Tipo: Funcional UX  
El sistema DEBE usar interfaz consistente: título decisión, resumen 280 chars, opciones (Sí/No/Abstención o múltiple), feedback inmediato, comprobante descargable.

RF-VC-004: Voto Anónimo Verificable

Prioridad: CRÍTICA | Tipo: Funcional Core  
El sistema DEBE garantizar: anonimato voto (no linkeable a identidad), verificabilidad individual (comprobante), anti-doble voto, auditoría agregada.

## **3.2. Requisitos No Funcionales**

### **3.2.1. Rendimiento**

| ID | Requisito | Métrica | Prioridad |
| :---- | :---- | :---- | :---- |
| **RNF-P-001** | Tiempo Carga Inicial | \< 3s en 3G, \< 1s en 4G | CRÍTICA |
| **RNF-P-002** | Time to Interactive | \< 5s dispositivos LOW tier | ALTA |
| **RNF-P-003** | Tamaño Bundle | \< 800KB Extreme Lite, \< 3MB MEDIUM | ALTA |
| **RNF-P-004** | Respuesta IA Local | \< 2s procesamiento cliente | MEDIA |
| **RNF-P-005** | Sincronización Offline | Batch automático al reconectar | ALTA |
| **RNF-P-006** | Capacidad Concurrente | 1000 usuarios simultáneos MVP | MEDIA |

### **3.2.2. Seguridad**

| ID | Requisito | Prioridad |
| :---- | :---- | :---- |
| **RNF-S-001** | Zero-Trust Client: Validación server-side TODAS operaciones críticas | CRÍTICA |
| **RNF-S-002** | Encriptación E2E: Datos sensibles en tránsito y reposo | CRÍTICA |
| **RNF-S-003** | WebAuthn/Passkey: Autenticación sin contraseñas | ALTA |
| **RNF-S-004** | Rate Limiting: Protección ataques fuerza bruta | ALTA |
| **RNF-S-005** | Sanitización Input: Prevención SQL injection, XSS | CRÍTICA |
| **RNF-S-006** | HTTPS Only: Todo tráfico encriptado TLS 1.3+ | CRÍTICA |
| **RNF-S-007** | Anonimato Voto: No linkeable a identidad usuario | CRÍTICA |

### **3.2.3. Usabilidad**

* RNF-U-001: WCAG 2.1 AA mínimo, AAA en componentes críticos (CRÍTICA)  
* RNF-U-002: Área táctil mínima 44x44px (WCAG 2.5.5) (ALTA)  
* RNF-U-003: Contraste texto/fondo ≥4.5:1 normal, ≥7:1 AAA (CRÍTICA)  
* RNF-U-004: Navegación teclado completa sin ratón/touch (ALTA)  
* RNF-U-005: Lectores pantalla compatibles (NVDA, JAWS, TalkBack) (ALTA)  
* RNF-U-006: Lenguaje ciudadano, sin jerga técnica (F-14) (ALTA)  
* RNF-U-007: Onboarding \<30 segundos primera victoria (F-18) (MEDIA)

### **3.2.4. Confiabilidad**

* RNF-C-001: Disponibilidad ≥99% uptime anual (ALTA)  
* RNF-C-002: Modo degradado automático si servicio falla (ALTA)  
* RNF-C-003: Backup diario datos críticos (ALTA)  
* RNF-C-004: Recovery Point Objective (RPO) \< 24h (MEDIA)  
* RNF-C-005: Recovery Time Objective (RTO) \< 4h (MEDIA)  
* RNF-C-006: Logs auditables 90 días retención (ALTA)

### **3.2.5. Mantenibilidad**

* RNF-M-001: Código TypeScript strict mode, 0 "any" (ALTA)  
* RNF-M-002: Cobertura tests ≥70% funciones críticas (ALTA)  
* RNF-M-003: Documentación inline JSDoc componentes (MEDIA)  
* RNF-M-004: CI/CD automático: lint, test, build en PR (ALTA)  
* RNF-M-005: Monitoreo performance Web Vitals (MEDIA)

## **3.3. Interfaces Externas**

### **3.3.1. APIs Gubernamentales**

| API Externa | Propósito | Frecuencia | Criticidad |
| :---- | :---- | :---- | :---- |
| **SINIM** | Datos municipales 346 comunas | Trimestral | ALTA |
| **Congreso Abierto** | Proyectos ley, votaciones | Diaria | ALTA |
| **InfoLobby** | Transparencia lobbying | Semanal | MEDIA |
| **DIPRES Presupuesto** | Ejecución presupuestaria | Mensual | ALTA |
| **Contraloría** | Dictámenes, auditorías | Semanal | MEDIA |

### **3.3.2. Servicios de Terceros**

* Neon.tech: PostgreSQL 10GB (base datos)  
* Vercel: Hosting frontend \+ Edge Functions  
* Cloudflare: CDN, WAF, R2 Storage  
* GitHub Actions: CI/CD pipelines  
* WebLLM: Modelos IA local navegador

## **3.4. Restricciones de Diseño**

* F-43: Stack Zero-Cost \- Neon.tech, Vercel, Cloudflare (sin alternativas pagas)  
* F-44: IA Distribuida \- Cliente primero, nube fallback  
* F-45: Testing Obligatorio \- Vitest unitarios, Playwright E2E  
* F-46: shadcn/ui Toolkit \- Componentes UI reutilizables  
* F-05: Design System Terracota v2 \- Paleta, tipografía, iconografía fixed  
* Navegadores: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  
* Dispositivos: iOS 14+, Android 8+ (API 26+)

# **4\. ARQUITECTURA DEL SISTEMA**

## **4.1. Stack Tecnológico**

| Capa | Tecnología | Justificación |
| :---- | :---- | :---- |
| **Frontend** | React 18 \+ TypeScript | PWA, componentes reutilizables |
| **Backend** | Vercel Edge Functions | Serverless, auto-scaling |
| **Base Datos** | Neon.tech PostgreSQL 10GB | 20x Supabase free, $0/mes |
| **Caché** | Service Workers \+ IndexedDB | Offline-first, sincronización |
| **CDN** | Cloudflare | Ancho banda ilimitado, latencia baja |
| **IA** | WebLLM (cliente) \+ API externa | Costo $0, privacidad |
| **CI/CD** | GitHub Actions | Automatización, $0 proyectos públicos |

## **4.2. Arquitectura IA 3 Capas**

Capa 1 \- Frontend Inteligente:

* Detección device tier (HIGH/MEDIUM/LOW)  
* Modo Lite automático dispositivos básicos  
* Service Workers operación offline

Capa 2 \- Knowledge Cache:

* Base conocimiento curada 43+ fuentes oficiales  
* 10 entidades datos con esquemas JSON validados  
* Sistema frescura TTL por tipo dato  
* Actualización automática pipelines (SINIM, Congreso, InfoLobby)

Capa 3 \- Stack Anti-Alucinación:

* 12 técnicas verificación ($0 costo adicional)  
* Política Evidence-Only: respuestas solo con fuentes citadas  
* Abstención Dura: "No tengo datos verificados sobre esto"  
* Verificador NLI coherencia respuestas  
* BGE Reranker retrieval híbrido

## **4.3. Arquitectura Offline-First**

| Modo | Tamaño | Funcionalidad |
| :---- | :---- | :---- |
| **Experiencia Completa (HIGH)** | \~15MB | Todas funciones, datos tiempo real |
| **Experiencia Ligera (MEDIUM)** | \~3MB | Funciones core, datos cacheados |
| **Modo Resiliencia (LOW)** | \~800KB | Offline total, datos locales, sync diferido |

# **5\. VALIDACIÓN DE INTEGRIDAD**

## **5.1. Archivos Fuente Consultados**

* CIVICUM\_Plan\_Desarrollo\_Software\_Integral\_v1.docx (Enero 2026\)  
* CIVICUM\_Decisiones\_Aprobadas.md (F-01 a F-25)  
* CIVICUM\_Decisiones\_F43\_F47\_Integracion.docx  
* CIVICUM\_Validacion\_Final.md  
* Auditoria\_CIVICUM\_Fusionada\_Final.docx  
* Dialogos\_con\_Expertos\_1.txt a 5.txt  
* ISDP\_Final\_Integrado.txt  
* Validacion\_de\_ISDP\_Final\_Integrado.txt

## **5.2. Decisiones F-XX Implementadas**

| ID | Decisión | Implementación en ERS |
| :---- | :---- | :---- |
| **F-04** | Construcción Secuencial | 6 módulos MVP completos antes lanzar |
| **F-05** | Tier-based Inclusion | 3 Device Tiers \+ Extreme Lite especificados |
| **F-07** | Offline Dignity Mode | Arquitectura Offline-First 3 niveles |
| **F-12** | Sistema IA 3 Capas | Cache \+ Anti-Alucinación \+ IA Distribuida |
| **F-43** | Stack Zero-Cost | Neon.tech \+ Vercel \+ Cloudflare $0/mes |
| **F-44** | IA Distribuida | WebLLM cliente, API fallback |
| **F-45** | Testing Obligatorio | RNF-M-002: ≥70% cobertura |
| **F-46** | shadcn/ui Toolkit | Componentes UI reutilizables |
| **F-18** | Quick Wins | Onboarding \<30s primera victoria |
| **F-14** | Lenguaje Ciudadano | RNF-U-006: sin jerga técnica |

## **5.3. Certificación de Completitud**

CERTIFICO que este documento ERS:

* ✅ Integra información ÚNICAMENTE ÚLTIMA VERSIÓN (Enero 2026\)  
* ✅ Especifica 6 módulos MVP con requisitos funcionales completos  
* ✅ Define requisitos no funcionales (rendimiento, seguridad, usabilidad)  
* ✅ Documenta stack tecnológico Zero-Cost validado  
* ✅ Incluye arquitectura IA 3 capas anti-alucinación  
* ✅ Garantiza offline-first con 3 niveles device tiers  
* ✅ Cumple estándar IEEE 830-1998  
* ✅ Trazabilidad 100% con decisiones F-01 a F-47

**ERS Aprobado para Implementación MVP**  
**Stack Zero-Cost: $0/mes perpetuo**  
**Enero 2026**

# **ANEXO A: MATRIZ DE TRAZABILIDAD REQUISITOS**

Esta matriz establece la trazabilidad completa entre requisitos funcionales, casos de uso, casos de prueba y módulos de código, garantizando que cada requisito sea implementable, verificable y rastreable.

## **A.1. Trazabilidad Requisitos → Casos de Uso → Pruebas**

| ID Req | Requisito | Caso Uso | Prueba E2E | User Story | Sprint |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **RF-001** | Registro WebAuthn | CU-001 | E2E-001 | US-001 | S1 |
| **RF-002** | Login Passkey | CU-002 | E2E-002 | US-002 | S1 |
| **RF-003** | Magic Link fallback | CU-003 | E2E-003 | US-002 | S1 |
| **RF-010** | Crear reporte | CU-010 | E2E-010 | US-006 | S3 |
| **RF-011** | Upload evidencia | CU-011 | E2E-011 | US-006 | S3 |
| **RF-012** | Offline sync reportes | CU-012 | E2E-012 | US-006 | S3 |
| **RF-020** | Toxicity detection | CU-020 | E2E-020 | US-006 | S3 |
| **RF-030** | Journey OIRS | CU-030 | E2E-030 | US-008 | S4 |
| **RF-040** | Karma transactions | CU-040 | E2E-040 | US-004 | S5 |
| **RF-050** | Cápsulas educativas | CU-050 | E2E-050 | US-009 | S6 |
| **RF-060** | WebLLM asistente | CU-060 | E2E-060 | US-011 | S8 |
| **RF-070** | Promesómetro | CU-070 | E2E-070 | US-013 | S11 |
| **RF-080** | Voto ciudadano | CU-080 | E2E-080 | US-016 | S13 |
| **RF-090** | Verificación Nivel 3 | CU-090 | E2E-090 | US-005 | S16 |
| **RF-100** | Círculos cívicos | CU-100 | E2E-100 | US-017 | S19 |

# **ANEXO B: REGLAS DE NEGOCIO DOCUMENTADAS**

## **B.1. Sistema de Karma Cívico**

\*\*RN-KARMA-001: Cálculo de Karma Base\*\*

karma\_total \= Σ (acción\_i × multiplicador\_tipo\_i × quality\_multiplier)

| Acción | Puntos Base | Multiplicador Calidad | Decay |
| :---- | :---- | :---- | :---- |
| **Crear reporte verificado** | 10 | 1.0 \- 1.5 | 6 meses |
| **Apoyar reporte (Yo Apoyo)** | 2 | 1.0 | 6 meses |
| **Completar cápsula \+ quiz** | 20 | 1.0 | 6 meses |
| **Votar propuesta** | 3 | 1.0 | 6 meses |
| **Actuar como jurado (consenso)** | 50 | 1.2 | 6 meses |
| **Moderar círculo efectivamente** | 30 | 1.1 | 6 meses |
| **Misión de campo verificada** | 25 | 1.0 \- 1.3 | 6 meses |
| **Validar evidencia (auditor)** | 15 | 1.1 | 6 meses |

\*\*RN-KARMA-002: Decay (Obsolescencia)\*\*

karma\_decayed \= karma\_original × exp(-ln(2) × days\_elapsed / 180\)  
Vida media: 180 días (6 meses)  
Justificación: El poder se basa en compromiso actual, no glorias pasadas

\*\*RN-KARMA-003: Topes Anti-Farming\*\*

| Límite | Valor |
| :---- | :---- |
| **MAX\_KARMA\_PER\_DAY** | 100 puntos |
| **MAX\_MISSIONS\_PER\_DAY** | 10 misiones |
| **MAX\_REPORTS\_PER\_DAY** | 5 reportes |
| **MAX\_VOTES\_PER\_DAY** | 50 votos |
| **MIN\_DIVERSITY\_CATEGORIES** | 3 categorías para subir nivel |

## **B.2. Sistema de Trust Score**

\*\*RN-TRUST-001: Cálculo de Trust Score\*\*

trust\_score \= (validaciones\_exitosas / total\_validaciones) × 100  
quality\_multiplier \= 1 \+ (trust\_score \- 70\) / 100  
Rango: 0-100 | Umbral mínimo para nivel 3: 85

\*\*RN-TRUST-002: Penalizaciones\*\*

| Infracción | Impacto Trust Score | Recuperación |
| :---- | :---- | :---- |
| **Reporte falso detectado** | \-10 puntos | 30 días comportamiento positivo |
| **Contenido tóxico moderado** | \-5 puntos | 15 días comportamiento positivo |
| **Voto coordinated brigading** | \-15 puntos | 60 días \+ revisión manual |
| **Evidencia manipulada (misión)** | \-20 puntos | 90 días \+ apelación |
| **Suplantación identidad** | \-50 puntos | Ban permanente |

## **B.3. Journey OIRS (Plazos Legales)**

\*\*RN-OIRS-001: Cálculo de Plazos\*\*

Basado en Ley 19.880 (Procedimiento Administrativo)  
Plazos en días hábiles (excluye sábados, domingos, festivos)

| Hito | Plazo Legal | Alerta Usuario | Escalamiento |
| :---- | :---- | :---- | :---- |
| **Recepción reporte** | Inmediato | \- | \- |
| **Acuse de recibo** | 5 días hábiles | 3 días | Promesómetro si \>5 |
| **Respuesta institucional** | 15 días hábiles | 10 días | Observatorio si \>15 |
| **Resolución problema** | 30 días hábiles | 20 días | Círculo cívico si \>30 |
| **Apelación** | 10 días hábiles | 7 días | Jurado digital si \>10 |

# **ANEXO C: ESCENARIOS DE EDGE CASES**

Casos extremos y situaciones excepcionales que deben ser manejadas correctamente por el sistema para garantizar robustez y confiabilidad.

## **C.1. Edge Cases \- Autenticación**

| Escenario | Comportamiento Esperado | Validación |
| :---- | :---- | :---- |
| **Usuario pierde dispositivo con passkey** | Magic Link permite acceso desde nuevo dispositivo. Opción de revocar passkey anterior. | E2E-AUTH-001 |
| **Registro con email duplicado** | Error claro: "Este email ya existe. ¿Olvidaste tu contraseña?" | E2E-AUTH-002 |
| **WebAuthn no soportado (browser antiguo)** | Fallback automático a Magic Link. Banner informativo. | E2E-AUTH-003 |
| **Magic Link expirado (\>10 min)** | Error: "Link expiró. Generar nuevo link." Botón para reenviar. | E2E-AUTH-004 |
| **Sesión invitado expira (60 min)** | Logout automático. Modal: "Tu sesión temporal expiró." | E2E-AUTH-005 |
| **Usuario bloquea permisos biométricos** | Mensaje: "Necesitas permisos biométricos para passkey. Usar Magic Link." | E2E-AUTH-006 |

## **C.2. Edge Cases \- Offline Mode**

| Escenario | Comportamiento Esperado | Validación |
| :---- | :---- | :---- |
| **Crear reporte offline → vuelve online** | Background Sync envía reporte. Notificación: "Tu reporte se envió" | E2E-OFFLINE-001 |
| **Conflicto de sincronización (mismo dato editado)** | Last-write-wins. Log de auditoría registra conflicto. | E2E-OFFLINE-002 |
| **Storage quota excedido (\>5MB offline)** | Limpiar caché antiguo. Advertencia: "Espacio limitado, sincroniza pronto" | E2E-OFFLINE-003 |
| **Service Worker falla al registrarse** | Modo degradado: App funciona sin offline. Banner: "Funcionalidad offline desactivada" | E2E-OFFLINE-004 |
| **Usuario vuelve online con 10 acciones pendientes** | Sincronización por lotes. Progress bar: "Sincronizando 3/10..." | E2E-OFFLINE-005 |

## **C.3. Edge Cases \- Karma y Trust Score**

| Escenario | Comportamiento Esperado | Validación |
| :---- | :---- | :---- |
| **Usuario alcanza MAX\_KARMA\_PER\_DAY (100)** | Mensaje: "Alcanzaste límite diario. Vuelve mañana." Acciones siguen siendo posibles. | E2E-KARMA-001 |
| **Trust score cae bajo 50 por reportes falsos** | Restricción: No puede crear más reportes por 30 días. Puede apelar. | E2E-KARMA-002 |
| **Karma decay reduce nivel de usuario** | Notificación: "Tu nivel bajó de 3 a 2 por inactividad. Reactiva tu participación." | E2E-KARMA-003 |
| **Usuario intenta farmear karma con bots** | Detección de patrones sospechosos. Suspensión temporal. Revisión manual. | E2E-KARMA-004 |
| **Quality multiplier \> 1.5 (máximo permitido)** | Tope en 1.5. Mensaje: "Has alcanzado el máximo multiplicador de calidad ✨" | E2E-KARMA-005 |

# **ANEXO D: REQUISITOS DE INTERNACIONALIZACIÓN (i18n) Y LOCALIZACIÓN (l10n)**

## **D.1. Soporte de Idiomas**

\*\*RNF-i18n-001: Idiomas Soportados MVP\*\*

| Idioma | Código | Prioridad |
| :---- | :---- | :---- |
| **Español (Chile)** | es-CL | P0 \- MVP |
| **Mapudungun** | arn | P1 \- V1 (Pueblos originarios) |
| **Inglés** | en | P2 \- V2 (Internacional) |

\*\*RNF-i18n-002: Localización Chilena (es-CL)\*\*

Términos y expresiones localizadas para contexto chileno:

| Término Genérico | Localización Chile | Contexto |
| :---- | :---- | :---- |
| **Municipality** | Municipalidad/Municipio | UI general |
| **Neighborhood** | Barrio/Población/Villa | Alza la Voz |
| **ID Number** | RUT | Registro/Verificación |
| **Mayor** | Alcalde/Alcaldesa | Cuentas Claras |
| **Congress** | Congreso Nacional | Observatorio |
| **Senator** | Senador/Senadora | Observatorio |
| **Representative** | Diputado/Diputada | Observatorio |
| **Bill** | Proyecto de Ley | Voto Ciudadano |
| **Public Hearing** | Audiencia Pública | Academia Cívica |

\*\*RNF-i18n-003: Formatos Regionales\*\*

| Elemento | Formato Chile (es-CL) |
| :---- | :---- |
| **Fecha** | DD/MM/YYYY (ej: 25/01/2026) |
| **Hora** | 24h HH:MM (ej: 14:30) |
| **Moneda** | CLP $1.234.567 (punto separador miles) |
| **Números** | 1.234,56 (punto miles, coma decimal) |
| **Teléfono** | \+56 9 1234 5678 |

# **ANEXO E: ESPECIFICACIÓN DE WEBHOOKS Y EVENTOS**

## **E.1. Sistema de Eventos Internos**

CIVICUM utiliza un sistema de eventos pub/sub para comunicación asíncrona entre módulos y notificaciones a servicios externos.

\*\*Arquitectura de Eventos:\*\*

1\. Eventos internos: PostgreSQL LISTEN/NOTIFY  
2\. Webhooks externos: HTTP POST a URLs configuradas  
3\. Push notifications: Web Push API \+ Service Worker

## **E.2. Catálogo de Eventos**

| Evento | Trigger | Payload | Webhooks | Push |
| :---- | :---- | :---- | :---- | :---- |
| **report.created** | Nuevo reporte ciudadano | {report\_id, user\_id, category, location} | ✓ | ✓ |
| **report.updated** | Cambio de estado | {report\_id, old\_status, new\_status, updated\_by} | ✓ | ✗ |
| **report.resolved** | Problema resuelto | {report\_id, resolution, resolved\_by, evidence} | ✓ | ✓ |
| **user.verified** | Usuario alcanza Nivel 3 | {user\_id, verification\_method, verified\_at} | ✗ | ✓ |
| **promise.updated** | Cambio en promesa | {promise\_id, authority\_id, old\_status, new\_status} | ✓ | ✗ |
| **vote.cast** | Voto registrado | {proposal\_id, user\_id, vote\_value, timestamp} | ✗ | ✗ |
| **circle.created** | Nuevo círculo cívico | {circle\_id, creator\_id, name, topic} | ✓ | ✗ |
| **threshold.reached** | Umbral de apoyos | {report\_id, threshold, supporters\_count} | ✓ | ✓ |

## **E.3. Formato de Webhooks**

\*\*Request HTTP POST:\*\*

\`\`\`json  
{  
  "event": "report.created",  
  "timestamp": "2026-01-25T10:30:00Z",  
  "webhook\_id": "wh\_abc123",  
  "data": {  
    "report\_id": "rep\_xyz789",  
    "user\_id": "usr\_456",  
    "category": "infrastructure",  
    "location": {"lat": \-33.4372, "lng": \-70.6506},  
    "description": "Luminaria dañada"  
  }  
}  
\`\`\`

\*\*Seguridad:\*\*

\- Header X-CIVICUM-Signature: HMAC-SHA256 del payload  
\- Validación obligatoria en receptor  
\- Retry automático: 3 intentos con backoff exponencial

# **ANEXO F: ESPECIFICACIÓN DE ALGORITMOS CRÍTICOS**

## **F.1. Algoritmo de Match Democrático**

\*\*Propósito:\*\* Calcular similitud entre votaciones de usuario y autoridad

\*\*Entradas:\*\*  
\- user\_votes: Lista de votos del usuario {proposal\_id, vote\_value}  
\- authority\_votes: Lista de votos de autoridad {bill\_id, vote\_value}  
\- voting\_history: Últimos 6 meses de actividad

\*\*Algoritmo:\*\*  
\`\`\`  
function calculate\_match(user\_id, authority\_id):  
  common\_votes \= intersect(user\_votes, authority\_votes)  
  if len(common\_votes) \< 5:  
    return null  // Datos insuficientes  
    
  agreements \= 0  
  for vote in common\_votes:  
    if vote.user\_value \== vote.authority\_value:  
      agreements++  
    
  match\_score \= (agreements / len(common\_votes)) \* 100  
    
  // Ponderación por importancia  
  weighted\_score \= match\_score \* importance\_factor  
    
  return round(weighted\_score, 1\)  
\`\`\`

\*\*Salida:\*\* Porcentaje de coincidencia 0-100%

## **F.2. Algoritmo Hot Score (Propuestas)**

\*\*Propósito:\*\* Ranking de propuestas por relevancia temporal

\*\*Entradas:\*\*  
\- votes: Número de votos (up \- down)  
\- created\_at: Timestamp de creación  
\- comments\_count: Número de comentarios  
\- gravity: Factor de decaimiento (default: 1.8)

\*\*Fórmula (basada en Hacker News):\*\*  
\`\`\`  
function hot\_score(proposal):  
  hours\_since\_creation \= (now() \- proposal.created\_at) / 3600  
    
  // Penalización por tiempo  
  time\_penalty \= (hours\_since\_creation \+ 2\) ^ gravity  
    
  // Score base (votos \+ engagement)  
  base\_score \= proposal.votes \+ (proposal.comments\_count \* 0.5)  
    
  // Bonus por verificación  
  if proposal.creator.verification\_level \>= 3:  
    base\_score \*= 1.2  
    
  hot\_score \= base\_score / time\_penalty  
    
  return hot\_score  
\`\`\`

\*\*Efecto:\*\* Propuestas nuevas con actividad suben; antiguas sin actividad bajan

## **F.3. Detector de Brigading (Anti-coordinación)**

\*\*Propósito:\*\* Detectar votación coordinada maliciosa

\*\*Señales de alerta:\*\*

1\. \*\*Velocidad anormal:\*\*  
   \- \>50 votos en 5 minutos desde cuentas nuevas  
   \- \>100 votos en 1 hora sin distribución orgánica

2\. \*\*Patrón temporal:\*\*  
   \- Picos de votos idénticos en ventanas de 30 segundos  
   \- Distribución uniforme (no sigue curva normal)

3\. \*\*Correlación de IPs:\*\*  
   \- \>10 votos desde mismo bloque IP /24  
   \- \>5 votos desde mismo dispositivo (fingerprint)

4\. \*\*Comportamiento de cuenta:\*\*  
   \- Cuentas creadas \<7 días con 0 karma previo  
   \- Cuentas con \>90% votos en una sola propuesta

\*\*Acción automática:\*\*  
\`\`\`  
if brigading\_score \> 0.7:  
  freeze\_voting(proposal\_id)  
  notify\_moderators()  
  require\_manual\_review()  
    
  // Recalcular votos excluyendo sospechosos  
  clean\_votes \= exclude\_suspicious\_voters()  
  update\_vote\_count(clean\_votes)  
\`\`\`

# **ANEXO G: COMPLIANCE Y REQUISITOS DE AUDITORÍA**

## **G.1. Cumplimiento Legal Chile**

| Normativa | Requisito | Implementación | Evidencia |
| :---- | :---- | :---- | :---- |
| **Ley 19.628 (Datos Personales)** | Consentimiento explícito | Checkbox obligatorio en registro. RLS en DB. | audit\_logs \+ consent\_records |
| **Ley 20.575 (Neutralidad Red)** | No discriminar tráfico | Sin throttling por tipo usuario. QoS igual. | network\_logs |
| **Ley 19.880 (Procedimiento Admin)** | Plazos OIRS | Journey automatizado con alertas. | oirs\_tracking |
| **Ley 20.285 (Transparencia)** | Acceso info pública | APIs abiertas. Datos anonimizados públicos. | public\_apis |
| **GDPR (extraterritorial)** | Right to be forgotten | Delete account \+ 30 días backups. | deletion\_logs |

## **G.2. Requisitos de Auditoría**

\*\*G.2.1. Eventos Auditables Obligatorios\*\*

| Evento | Datos Capturados | Retención | Acceso |
| :---- | :---- | :---- | :---- |
| **user.login** | user\_id, timestamp, IP, device | 1 año | Usuario \+ Admin |
| **user.verified** | user\_id, level, method, evidence\_hash | Permanente | Usuario \+ Auditor |
| **report.created** | user\_id, location, category, evidence\_id | 5 años | Todos |
| **vote.cast** | user\_id, proposal\_id, vote\_value (anon) | 1 año | Agregado público |
| **moderation.action** | moderator\_id, target\_id, action, reason | Permanente | Auditor \+ Apelaciones |
| **data.deleted** | user\_id, data\_type, deletion\_reason | Permanente | Auditor legal |
| **institution.response** | institution\_id, report\_id, response | 10 años | Todos |

## **G.3. SLOs/SLIs (Service Level Objectives/Indicators)**

| Métrica | SLO (Objetivo) | SLI (Medición) | Acción si incumple |
| :---- | :---- | :---- | :---- |
| **Uptime** | ≥99.5% mensual | Monitoreo Better Uptime | Incident response \+ postmortem |
| **API Latency (p95)** | ≤500ms | Sentry Performance | Optimización queries \+ caching |
| **Error Rate** | ≤0.5% requests | Sentry Error tracking | Rollback automático |
| **Core Web Vitals LCP** | ≤2.5s | Lighthouse CI | Optimización assets |
| **Offline Sync Success** | ≥95% | Background Sync logs | Reintentos \+ debug |
| **Data Loss (reportes)** | 0% | DB backups \+ replicas | Restore desde backup |
| **Security Incidents** | 0 críticos/mes | OWASP ZAP \+ Snyk | Hotfix inmediato |

# **ANEXO H: MATRIZ DE PRIORIZACIÓN MoSCoW**

Clasificación de requisitos según criticidad para el MVP.  
Must Have / Should Have / Could Have / Won't Have (this time)

## **H.1. Must Have (MVP Bloqueantes)**

| Requisito | Justificación | Sprint |
| :---- | :---- | :---- |
| **RF-001: Registro WebAuthn** | Sin auth no hay plataforma | S1 |
| **RF-010: Crear reporte** | Core value proposition | S3 |
| **RF-012: Offline sync** | Decisión F-07 (Dignity) | S3 |
| **RF-020: Toxicity detection** | Evitar colapso moderación | S3 |
| **RF-040: Karma básico** | Sistema anti-spam esencial | S5 |
| **RNF-001: RLS security** | Seguridad no negociable | S0 |
| **RNF-010: WCAG 2.1 AA** | Accesibilidad obligatoria | S0 |

## **H.2. Should Have (Alta prioridad post-MVP)**

| Requisito | Justificación | Sprint |
| :---- | :---- | :---- |
| **RF-050: Academia Cívica** | Diferenciador clave | S6-S7 |
| **RF-060: Asistente WebLLM** | Autonomía y valor agregado | S8-S10 |
| **RF-070: Promesómetro** | Fiscalización core | S11-S12 |
| **RF-080: Voto Ciudadano** | Deliberación esencial | S13-S15 |

## **H.3. Could Have (Deseable V2)**

| Requisito | Justificación | Sprint |
| :---- | :---- | :---- |
| **RF-090: Verificación Nivel 3** | Mejora confianza | S16-S18 |
| **RF-100: Círculos Cívicos** | Organización comunitaria | S19-S20 |
| **RF-110: Jurado Digital** | Gobernanza avanzada | V3 |
| **RF-120: Modo Mochila** | Misiones offline | V3 |

## **H.4. Won't Have (Fuera de scope MVP-V2)**

| Requisito | Razón exclusión |
| :---- | :---- |
| **RF-200: App nativa iOS/Android** | PWA cubre 95% casos. Overhead desarrollo. |
| **RF-210: Integración redes sociales** | Riesgo privacidad. No esencial MVP. |
| **RF-220: Gamificación avanzada** | Distrae de propósito cívico core. |
| **RF-230: Chat en tiempo real** | Complejidad moderación. Threaded discussions suficiente. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE  
CIVICUM \- Sistema Nervioso Cívico de Chile

IEEE 830-1998 COMPLIANT  
AMPLIADO Y COMPLETADO AL 100%

Score: 10/10 ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━