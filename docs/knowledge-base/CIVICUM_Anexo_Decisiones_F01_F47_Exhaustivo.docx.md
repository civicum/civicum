  
**CIVICUM**  
Sistema Nervioso Cívico de Chile

**ANEXO EXHAUSTIVO DE DECISIONES APROBADAS**  
**F-01 a F-47**

47 Decisiones Formales Detalladas  
*Complementa: Documentación Integral de Protección Intelectual v1*

Versión: 1.0 | Enero 2026  
**Estado: APROBADO PARA REGISTRO INAPI**

# **ÍNDICE DE CONTENIDOS**

* 7.1 Decisiones Bloqueantes (P0): F-01 a F-04

* 7.2 Decisiones Alta Severidad: F-05 a F-09

* 7.3 Decisiones Media Severidad: F-10 a F-12

* 7.4 Decisiones Diciembre 2025: F-13 a F-25

* 7.5 Decisiones Enero 2026 (Parte 1): F-26 a F-35

* 7.6 Decisiones Enero 2026 (Parte 2): F-36 a F-40

* 7.7 Decisiones Técnicas de Integración: F-43 a F-47

* Certificación de Completitud

# **INTRODUCCIÓN**

Este documento presenta el detalle exhaustivo de las 47 decisiones formales aprobadas para el proyecto CIVICUM, numeradas de F-01 a F-47. Cada decisión incluye: origen del problema identificado, decisión aprobada, componentes de implementación, feature flags asociados, y conexiones con otras decisiones del marco.

Las decisiones están organizadas en 7 categorías según su severidad y fecha de aprobación, siguiendo el marco de gobernanza del proyecto.

**Resumen Ejecutivo**

| Métrica | Valor |
| :---- | :---- |
| Total Decisiones | 47 (F-01 a F-47) |
| Bloqueantes (P0) | 4 decisiones (F-01 a F-04) |
| Alta Severidad | 5 decisiones (F-05 a F-09) |
| Media Severidad | 3 decisiones (F-10 a F-12) |
| Diciembre 2025 | 13 decisiones (F-13 a F-25) |
| Enero 2026 (Parte 1\) | 10 decisiones (F-26 a F-35) |
| Enero 2026 (Parte 2\) | 5 decisiones (F-36 a F-40) |
| Técnicas Integración | 5 decisiones (F-43 a F-47) |
| Estado General | 100% APROBADAS |

# **7.1 DECISIONES BLOQUEANTES (P0)**

*Decisiones de máxima prioridad que definen la esencia del proyecto. No negociables bajo ninguna circunstancia.*

### **F-01: COMPLEJIDAD MVP**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | P0 \- BLOQUEANTE |
| Módulo Impactado | Core / Arquitectura |

**Origen / Problema Identificado**

Riesgo de scope creep y features avanzadas que bloqueen el lanzamiento. La tentación de agregar funcionalidades puede impedir completar el MVP funcional.

**Decisión Aprobada**

6 módulos completos con loop end-to-end funcional. Features avanzadas desactivadas por feature flags hasta V1/V2. P0 CORE \= solo funciones necesarias para demostrar valor. Sin atajos que comprometan la visión a largo plazo.

**Componentes de Implementación**

* 6 módulos MVP: Mi CIVICUM, Academia Cívica, Asistente Cívico, Alza la Voz \+ Mesas, Cuentas Claras, Voto Ciudadano

* Feature flags para funcionalidades avanzadas (desactivadas por defecto)

* Loop completo: registro → acción → resultado visible

* Postergados a V1/V2: IA avanzada, Jurado Digital completo, Expedientes Evidencia

**Feature Flags**

* ENABLE\_ADVANCED\_AI: false (V1)

* ENABLE\_JURY\_DIGITAL: false (V1)

* ENABLE\_EVIDENCE\_DOSSIERS: false (V2)

* ENABLE\_PARLIAMENT\_CIVICUM: false (V2)

**Conexiones con Otras Decisiones**

* F-04 (Construcción Secuencial): Bloques completos antes de lanzar

* F-07 (Confianza Progresiva): Niveles 0-4 desde MVP

* F-11 (North Star): Métricas de impacto, no features

────────────────────────────────────────────────────────────────────────────────

### **F-02: HONESTIDAD RADICAL**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | P0 \- BLOQUEANTE |
| Módulo Impactado | Core / Comunicación |

**Origen / Problema Identificado**

Desconfianza ciudadana generalizada hacia instituciones y plataformas. El 73% de chilenos desconfía de instituciones según CEP 2023\.

**Decisión Aprobada**

Cero letra chica, cero promesas vacías, transparencia total sobre capacidades y limitaciones. Comunicar siempre lo que CIVICUM puede y NO puede hacer. Fuentes siempre citadas y verificables.

**Componentes de Implementación**

* Disclaimers visibles sobre limitaciones (ej: 'Votos son SIMBÓLICOS, no vinculantes')

* Fuentes citadas en cada dato mostrado

* Estado del sistema visible públicamente

* Explicación de 'por qué' en cada solicitud de datos

* Comunicación de plazos realistas y consecuencias

**Feature Flags**

* SHOW\_DATA\_SOURCES: true

* SHOW\_SYSTEM\_STATUS: true

* SHOW\_LIMITATIONS\_DISCLAIMER: true

* REQUIRE\_SOURCE\_CITATION: true

**Conexiones con Otras Decisiones**

* F-17 (Termostato): No prometer influencia vinculante

* F-18 (Escudo): No prometer anonimato imposible

* F-19 (Advertencia): Informar riesgos antes de acciones

* F-25 (Sostenibilidad): Transparencia sobre financiamiento

────────────────────────────────────────────────────────────────────────────────

### **F-03: DATOS MÍNIMOS VIABLES**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | P0 \- BLOQUEANTE |
| Módulo Impactado | Core / Privacidad |

**Origen / Problema Identificado**

Privacy by default como principio fundamental. Usuarios deben controlar sus datos en todo momento.

**Decisión Aprobada**

Solo recopilar datos estrictamente necesarios para cada función. Usuario controla siempre exportación y eliminación. Nunca vender datos a terceros bajo ninguna circunstancia.

**Componentes de Implementación**

* Verificación progresiva: solo pedir datos según nivel de acción

* Exportación completa de datos personales (GDPR-like)

* Eliminación real (no soft-delete) a solicitud del usuario

* Encriptación de datos sensibles (RUT hasheado, no en texto plano)

* Política de retención mínima documentada

**Feature Flags**

* ENABLE\_DATA\_EXPORT: true

* ENABLE\_ACCOUNT\_DELETION: true

* HASH\_SENSITIVE\_DATA: true

* DATA\_RETENTION\_DAYS: 365

**Conexiones con Otras Decisiones**

* F-18 (Escudo): Protección de identidad real

* F-25 (Sostenibilidad): Nunca vender datos

* F-31 (Verificación Progresiva): Datos según nivel

────────────────────────────────────────────────────────────────────────────────

### **F-04: CONSTRUCCIÓN SECUENCIAL**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | P0 \- BLOQUEANTE |
| Módulo Impactado | Core / Metodología |

**Origen / Problema Identificado**

Principio rector de completitud sobre velocidad. Evitar lanzamientos parciales que erosionen confianza.

**Decisión Aprobada**

Bloques 1-6 completos antes de lanzar. Sin atajos que comprometan calidad. Cada módulo debe funcionar end-to-end antes de pasar al siguiente. Completitud \> Velocidad.

**Componentes de Implementación**

* Bloques de documentación: 1 (Fundamentos) → 2 (Academia) → 3 (Investigación) → 4 (Datos) → 5 (Design System) → 6 (Círculos) → 7 (Implementación)

* Gate de calidad entre cada bloque

* Validación por expertos antes de avanzar

* Rollback si bloque no cumple criterios

**Feature Flags**

* BLOCK\_GATE\_VALIDATION: true

* REQUIRE\_EXPERT\_APPROVAL: true

* ALLOW\_PARTIAL\_LAUNCH: false

**Conexiones con Otras Decisiones**

* F-01 (Complejidad MVP): 6 módulos completos

* F-45 (Testing Obligatorio): Calidad verificada

* F-11 (North Star): Métricas de completitud

────────────────────────────────────────────────────────────────────────────────

# **7.2 DECISIONES ALTA SEVERIDAD**

*Decisiones críticas para la experiencia de usuario y confianza ciudadana.*

### **F-05: APARTIDISMO TOTAL**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Core / Neutralidad |

**Origen / Problema Identificado**

Chile profundamente polarizado post-estallido social y procesos constitucionales. Cualquier percepción partidista destruiría credibilidad.

**Decisión Aprobada**

Neutralidad política verificable. Solo fuentes oficiales neutras. Sin logos partidistas. Colores que evitan asociaciones políticas (no azul-rojo). Datos presentados sin sesgo editorial.

**Componentes de Implementación**

* Paleta Terracota: sin colores partidistas (rojo UDI, azul PS, amarillo DC prohibidos)

* Fuentes solo oficiales: SINIM, Congreso Abierto, InfoLobby, DIPRES

* Sin opiniones editoriales, solo datos verificables

* Match Parlamentario muestra todos los espectros por igual

* Algoritmos sin sesgo de exposición

**Feature Flags**

* ENFORCE\_NEUTRAL\_COLORS: true

* REQUIRE\_OFFICIAL\_SOURCES: true

* DISABLE\_EDITORIAL\_OPINIONS: true

* BALANCED\_EXPOSURE\_ALGORITHM: true

**Conexiones con Otras Decisiones**

* F-09 (Coherencia de Marca): Paleta Terracota neutral

* F-02 (Honestidad): Datos sin sesgo

* F-25 (Sostenibilidad): Sin financiamiento partidista

────────────────────────────────────────────────────────────────────────────────

### **F-06: EDUCACIÓN PROGRESIVA**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Academia Cívica |

**Origen / Problema Identificado**

Déficit de educación cívica en Chile. Usuarios necesitan aprender gradualmente sin sentirse abrumados.

**Decisión Aprobada**

Microlearning cívico en cápsulas de 5-10 minutos. Contenido progresivo desde básico hasta avanzado. Gamificación responsable sin adicción.

**Componentes de Implementación**

* Cápsulas de 5-10 minutos máximo

* 8 dominios temáticos: Gobierno Local, Regional, Nacional, Legislativo, Judicial, Electoral, Participación, Gobernanza CIVICUM

* Niveles de dificultad: Básico → Intermedio → Avanzado

* Quizzes interactivos al final de cada cápsula

* Certificados de completitud opcionales

**Feature Flags**

* MAX\_CAPSULE\_MINUTES: 10

* ENABLE\_QUIZZES: true

* ENABLE\_CERTIFICATES: true

* PROGRESSIVE\_UNLOCK: true

**Conexiones con Otras Decisiones**

* F-08 (Gamificación Responsable): Sin mecanismos adictivos

* F-27 (Academia Cívica MVP): 50 rutas, 50 duelos

* F-29 (Academia Máximo Realista): 385h producción

────────────────────────────────────────────────────────────────────────────────

### **F-07: OFFLINE DIGNITY MODE**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Core / Accesibilidad |

**Origen / Problema Identificado**

Brecha digital en Chile: 60%+ usa dispositivos gama baja, zonas rurales con conectividad intermitente. 68% usuarios prepago.

**Decisión Aprobada**

Funcionalidad garantizada sin conexión permanente. Service Worker para caché de contenido crítico. Sincronización cuando hay conexión. Dignidad \= experiencia completa sin internet.

**Componentes de Implementación**

* Service Worker con Workbox para caché offline

* Critical pack de 800KB para funcionalidad básica

* Cola de sincronización para acciones pendientes

* Indicador claro de estado de conexión

* Modo offline permite: ver contenido cacheado, crear reportes (sync posterior), consultar FAQs

**Feature Flags**

* ENABLE\_OFFLINE\_MODE: true

* CRITICAL\_PACK\_SIZE\_KB: 800

* ENABLE\_SYNC\_QUEUE: true

* SHOW\_CONNECTION\_STATUS: true

**Conexiones con Otras Decisiones**

* F-20 (Dignidad/Inclusión): Tier-based inclusion

* F-33 (Arquitectura Estabilidad Offline): Especificaciones técnicas

* F-04 (Inclusión por Tiers): Dispositivos gama baja

────────────────────────────────────────────────────────────────────────────────

### **F-08: GAMIFICACIÓN RESPONSABLE**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Core / UX |

**Origen / Problema Identificado**

Necesidad de motivar participación sin crear adicción. Post-polarización, espacios de debate sin violencia.

**Decisión Aprobada**

Karma cívico sin mecanismos adictivos. Dopamina cívica orientada a logros reales, no engagement vacío. Moderación que permite catarsis pero filtra insultos.

**Componentes de Implementación**

* Sistema de Karma basado en SERVICIO, no opinión

* Tope diario de Karma (evita farming)

* Badges por logros verificables (no por actividad)

* Sin notificaciones push manipulativas

* Moderación 3 capas: IA \+ comunidad \+ humanos

**Feature Flags**

* KARMA\_DAILY\_CAP: 100

* ENABLE\_SERVICE\_KARMA: true

* DISABLE\_ADDICTIVE\_NOTIFICATIONS: true

* MODERATION\_LAYERS: 3

**Conexiones con Otras Decisiones**

* F-10 (Anti-Élite): Karma con topes

* F-21 (Guardianes): Moderación visible

* F-22 (Capital Humano): Voluntarios cuidados

────────────────────────────────────────────────────────────────────────────────

### **F-09: COHERENCIA DE MARCA**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Design System |

**Origen / Problema Identificado**

Consistencia visual genera confianza en contexto de desconfianza generalizada.

**Decisión Aprobada**

Paleta Terracota \+ estética cooperativa \+ neutralidad visual. Identidad consistente en todos los touchpoints.

**Componentes de Implementación**

* Colores principales: Terracota \#C2503A, Azul Profundo \#264653, Verde Esperanza \#0D7A5F, Azul Protección \#2563EB

* Tipografía: Nunito Sans (títulos), IBM Plex Sans (body), IBM Plex Mono (código)

* Iconografía: Lucide Icons, stroke 2px

* Tono de voz: vecino organizado, comprometido pero no activista

* Sin colores partidistas (rojo político, azul político prohibidos)

**Feature Flags**

* ENFORCE\_BRAND\_COLORS: true

* ENFORCE\_TYPOGRAPHY: true

* ENFORCE\_ICON\_STYLE: true

**Conexiones con Otras Decisiones**

* F-05 (Apartidismo): Neutralidad en colores

* F-13 (Humanización): Tono cálido

* F-20 (Dignidad): Modos adaptativos de accesibilidad

────────────────────────────────────────────────────────────────────────────────

# **7.3 DECISIONES MEDIA SEVERIDAD**

*Decisiones importantes para gobernanza, métricas y arquitectura técnica.*

### **F-10: NIVEL 3 ELITE / ANTI-ÉLITE**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | MEDIA |
| Módulo Impactado | Core / Gobernanza |

**Origen / Problema Identificado**

Riesgo de que usuarios con mucho tiempo libre capturen la plataforma. Principio: 1 persona \= 1 voto siempre.

**Decisión Aprobada**

Karma con topes operativos. Ningún usuario puede tener influencia desproporcionada. Rotación obligatoria de roles de poder. Selección mixta mérito \+ sorteo.

**Componentes de Implementación**

* KARMA\_CAP\_OPERATIVO: máximo efectivo para sorteos/roles

* Decaimiento de Karma (half-life \~6 meses)

* Rotación de moderadores/jurados cada 3-6 meses

* Selección mixta: % por mérito \+ % por sorteo

* Monitoreo de concentración de influencia

**Feature Flags**

* KARMA\_CAP\_OPERATIVO: 500

* KARMA\_DECAY\_MONTHS: 6

* ROLE\_ROTATION\_MONTHS: 6

* MERIT\_SELECTION\_PERCENT: 60

* RANDOM\_SELECTION\_PERCENT: 40

**Conexiones con Otras Decisiones**

* F-08 (Gamificación Responsable): Karma ético

* F-21 (Guardianes): Rotación de roles

* F-22 (Capital Humano): Cuidado de voluntarios

────────────────────────────────────────────────────────────────────────────────

### **F-11: OKRS Y MÉTRICAS (NORTH STAR)**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | MEDIA |
| Módulo Impactado | Core / Métricas |

**Origen / Problema Identificado**

Riesgo de construir mucho y mejorar poco. Necesidad de métricas de impacto real, no vanidosas.

**Decisión Aprobada**

North Star Metric \= % de reportes cerrados con respuesta institucional verificable. OKRs por fase con criterios go/no-go. Guardrails que no se pueden romper.

**Componentes de Implementación**

* North Star: (Reportes con respuesta documentada / Reportes cerrados)

* OKRs Fase 1: 500 MAU, 200 reportes, 30% respuesta institucional, NPS \>40

* Go/No-Go: ≥3 de 4 OKRs cumplidos \+ 0 incidentes graves

* Guardrails: 0 incidentes privacidad, 100% flujo crítico en LOW tier, uptime \>99%

* Dashboard de métricas público (Termómetro Cívico)

**Feature Flags**

* ENABLE\_PUBLIC\_METRICS: true

* NORTH\_STAR\_METRIC: 'institutional\_response\_rate'

* ENABLE\_OKR\_TRACKING: true

**Conexiones con Otras Decisiones**

* F-15 (Termómetro Cívico): Dashboard público

* F-02 (Honestidad): Métricas transparentes

* F-01 (Complejidad MVP): Métricas, no features

────────────────────────────────────────────────────────────────────────────────

### **F-12: SISTEMA IA 3 CAPAS**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | MEDIA |
| Módulo Impactado | Asistente Cívico |
| Horas Estimadas | \~$4,800/mes proyectado V2 |

**Origen / Problema Identificado**

Necesidad de IA funcional con costo controlado. Funcionalidad incluso con conexión intermitente.

**Decisión Aprobada**

Arquitectura de 3 capas: Cache local (16 semanas de datos), Fallback a plantillas, Conexión en tiempo real como última opción. Costo proyectado \~$4,800/mes en V2 con cache distribuido.

**Componentes de Implementación**

* Capa 1: WebLLM local (Llama 3\) \- $0/mes

* Capa 2: Workers AI fallback (Cloudflare) \- bajo costo

* Capa 3: API externa solo para consultas complejas

* Cache de FAQs y respuestas comunes

* Plantillas pre-construidas para offline

**Feature Flags**

* ENABLE\_LOCAL\_LLM: true

* ENABLE\_WORKERS\_AI\_FALLBACK: true

* CACHE\_DURATION\_WEEKS: 16

* MAX\_API\_CALLS\_PER\_DAY: 1000

**Conexiones con Otras Decisiones**

* F-44 (IA Distribuida): Arquitectura client-first

* F-07 (Offline Dignity): Funcional sin conexión

* F-43 (Stack Zero-Cost): Minimizar costos

────────────────────────────────────────────────────────────────────────────────

# **7.4 DECISIONES DICIEMBRE 2025**

*Decisiones funcionales aprobadas en diciembre 2025, incluyendo la Nonalogía de Diseño Radical (F-17 a F-25).*

### **F-13: HUMANIZANDO EFICIENCIA / TIER DETECTION**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Mi CIVICUM / Core |

**Origen / Problema Identificado**

Voz de 'vecino organizado, comprometido' no de institución fría. Detección automática de capacidad del dispositivo.

**Decisión Aprobada**

Detección automática del tier del dispositivo (HIGH/MEDIUM/LOW). Modo Lite se activa automáticamente en dispositivos de gama baja. Lenguaje humano en todas las interacciones.

**Componentes de Implementación**

* Detección de tier por RAM, CPU, conexión

* HIGH: \>4GB RAM, buen CPU → experiencia completa

* MEDIUM: 2-4GB RAM → reducción de animaciones

* LOW: \<2GB RAM → Modo Lite automático

* Extreme Lite: sin JavaScript, 3 colores, funciona en feature phones

**Feature Flags**

* ENABLE\_TIER\_DETECTION: true

* AUTO\_LITE\_MODE: true

* TIER\_HIGH\_RAM\_MB: 4096

* TIER\_LOW\_RAM\_MB: 2048

**Conexiones con Otras Decisiones**

* F-14 (Modo Lite): Experiencia adaptada

* F-20 (Dignidad): Inclusión por tiers

* F-07 (Offline): Funcionalidad garantizada

────────────────────────────────────────────────────────────────────────────────

### **F-14: NARRATIVAS DE IMPACTO / MODO LITE AUTOMÁTICO**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Todos |

**Origen / Problema Identificado**

Historias reales de ciudadanos que lograron cambios. Experiencia digna en dispositivos limitados.

**Decisión Aprobada**

Modo Lite se activa automáticamente cuando se detecta dispositivo de gama baja. Sin animaciones pesadas, imágenes comprimidas, funcionalidad completa.

**Componentes de Implementación**

* Historias de impacto verificables en cada módulo

* Contador de 'X vecinos lograron Y'

* Modo Lite: sin gradientes, sin sombras, imágenes WebP comprimidas

* Carga progresiva de contenido

* Skeleton screens informativos

**Feature Flags**

* ENABLE\_IMPACT\_STORIES: true

* LITE\_MODE\_NO\_GRADIENTS: true

* LITE\_MODE\_COMPRESSED\_IMAGES: true

* ENABLE\_PROGRESSIVE\_LOADING: true

**Conexiones con Otras Decisiones**

* F-13 (Tier Detection): Detección automática

* F-20 (Dignidad): Experiencia digna

* F-02 (Honestidad): Historias verificables

────────────────────────────────────────────────────────────────────────────────

### **F-15: TERMÓMETRO CÍVICO**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Dashboard público |

**Origen / Problema Identificado**

Feedback público inmediato sobre estado cívico. Visualización de pulso ciudadano.

**Decisión Aprobada**

Dashboard público con indicadores de participación por comuna. Temas más reportados, respuestas institucionales, tendencias. Gradiente de colores neutrales (evita azul-rojo político).

**Componentes de Implementación**

* Mapa de calor por comuna (346 comunas)

* Top 10 temas más reportados

* Tasa de respuesta institucional por municipio

* Tendencias temporales (semana, mes, año)

* Comparador territorial

**Feature Flags**

* ENABLE\_PUBLIC\_DASHBOARD: true

* SHOW\_MUNICIPAL\_RESPONSE\_RATE: true

* ENABLE\_TERRITORIAL\_COMPARISON: true

* NEUTRAL\_GRADIENT\_COLORS: true

**Conexiones con Otras Decisiones**

* F-11 (North Star): Métricas públicas

* F-05 (Apartidismo): Colores neutrales

* F-16 (Expediente Autoridad): Datos por autoridad

────────────────────────────────────────────────────────────────────────────────

### **F-16: EXPEDIENTE DE AUTORIDAD**

**✅ APROBADO** | Fecha: Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Cuentas Claras |

**Origen / Problema Identificado**

Necesidad de contexto sobre autoridades. Quién es, qué prometió, qué cumplió.

**Decisión Aprobada**

Ficha completa de autoridades con datos públicos verificables. Incluye: cargo, partido, promesas de campaña, votaciones, asistencia, declaraciones de interés, lobbying.

**Componentes de Implementación**

* Datos básicos: nombre, cargo, partido, comuna/región

* Promesas de campaña (Promesómetro)

* Historial de votaciones (parlamentarios)

* Asistencia a sesiones

* Declaraciones de patrimonio e intereses (InfoProbidad)

* Audiencias de lobby (InfoLobby)

**Feature Flags**

* ENABLE\_AUTHORITY\_PROFILES: true

* SHOW\_CAMPAIGN\_PROMISES: true

* SHOW\_VOTING\_HISTORY: true

* SHOW\_LOBBY\_MEETINGS: true

**Conexiones con Otras Decisiones**

* F-15 (Termómetro): Métricas por autoridad

* F-24 (Expedientes Evidencia): Evidencia acumulada

* F-02 (Honestidad): Solo datos verificables

────────────────────────────────────────────────────────────────────────────────

### **F-17: TERMOSTATO DE INFLUENCIA / IA COMO ASISTENTE**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Asistente Cívico / Voto Ciudadano |

**Origen / Problema Identificado**

Tensión entre promesa implícita de 'influencia directa' y realidad de votos simbólicos. IA que acompaña, no sustituye.

**Decisión Aprobada**

Reemplazar concepto de 'voto vinculante' por 'Termostato de Influencia'. Los votos ciudadanos son SIMBÓLICOS pero se escalan a autoridades con evidencia. IA asiste pero humanos deciden.

**Componentes de Implementación**

* Votos simbólicos con valor de 'mandato documentado'

* Escalamiento automático cuando umbral de apoyo se alcanza

* Umbrales dinámicos por tamaño de comuna

* Notificación a autoridades con evidencia

* Asistente IA Gen1 con supervisión humana siempre

**Feature Flags**

* ENABLE\_INFLUENCE\_THERMOMETER: true

* AUTO\_ESCALATION\_ENABLED: true

* DYNAMIC\_THRESHOLDS: true

* AI\_HUMAN\_SUPERVISION: true

**Conexiones con Otras Decisiones**

* F-02 (Honestidad): No prometer vinculante

* F-19 (Advertencia): Informar limitaciones

* F-12 (IA 3 Capas): Arquitectura de asistente

────────────────────────────────────────────────────────────────────────────────

### **F-18: ESCUDO DE IDENTIDAD**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Mi CIVICUM |

**Origen / Problema Identificado**

Tensión entre 'anonimato' prometido y realidad técnica/legal de vincular cuentas a identidades. RUT necesario pero protegido.

**Decisión Aprobada**

Reemplazar concepto de 'anonimato' por 'Escudo de Identidad' con dos capas visualmente explicadas: identidad real (protegida por candado) y alias público (protegido por escudo). Transparencia radical sobre qué se protege y qué no.

**Componentes de Implementación**

* Capa 1: Identidad Real (RUT hasheado, nunca en texto plano)

* Capa 2: Alias Público (seudónimo elegido por usuario)

* UI clara con iconos de candado/escudo

* Explicación de qué tribunales pueden solicitar

* Consentimiento informado en cada nivel de verificación

**Feature Flags**

* ENABLE\_IDENTITY\_SHIELD: true

* HASH\_RUT\_STORAGE: true

* SHOW\_PRIVACY\_EXPLANATION: true

* REQUIRE\_INFORMED\_CONSENT: true

**Conexiones con Otras Decisiones**

* F-02 (Honestidad): No prometer anonimato imposible

* F-03 (Datos Mínimos): Solo datos necesarios

* F-19 (Advertencia): Informar riesgos

────────────────────────────────────────────────────────────────────────────────

### **F-19: ADVERTENCIA DE RIESGO**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Alza la Voz |

**Origen / Problema Identificado**

Usuarios necesitan saber riesgos antes de acciones de exposición pública.

**Decisión Aprobada**

Pop-up de advertencia antes de acciones que impliquen exposición o conflicto. Comunicar plazos legales y consecuencias de no-respuesta institucional. Plan B automático si autoridad no responde.

**Componentes de Implementación**

* Modal de advertencia antes de reportes sensibles

* Información sobre plazos de respuesta legal

* Explicación de escalamiento automático

* Opción de reportar anónimamente (con limitaciones)

* Recursos de apoyo si hay represalias

**Feature Flags**

* ENABLE\_RISK\_WARNINGS: true

* SHOW\_LEGAL\_TIMEFRAMES: true

* ENABLE\_ANONYMOUS\_REPORTS: true

* SHOW\_ESCALATION\_PLAN: true

**Conexiones con Otras Decisiones**

* F-18 (Escudo): Protección de identidad

* F-02 (Honestidad): Transparencia sobre riesgos

* F-25 (Sostenibilidad): Escalamiento a Contraloría

────────────────────────────────────────────────────────────────────────────────

### **F-20: DIGNIDAD / INCLUSIÓN TIER-BASED**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Core / Accesibilidad |

**Origen / Problema Identificado**

No puedo dar igual experiencia a todos los dispositivos, pero sí dignidad. 60%+ de chilenos usa dispositivos gama baja.

**Decisión Aprobada**

Sistema de tiers (HIGH/MEDIUM/LOW) con experiencia digna en cada nivel. Funcionalidad completa garantizada en todos los tiers, solo difiere la experiencia visual.

**Componentes de Implementación**

* Tier HIGH: Animaciones, gradientes, imágenes HD

* Tier MEDIUM: Animaciones reducidas, imágenes optimizadas

* Tier LOW (Modo Lite): Sin animaciones, 3 colores, imágenes comprimidas

* Extreme Lite: Funciona sin JavaScript

* Critical pack de 800KB para offline

**Feature Flags**

* ENABLE\_TIER\_SYSTEM: true

* CRITICAL\_PACK\_SIZE\_KB: 800

* EXTREME\_LITE\_NO\_JS: true

* DIGNITY\_MODE\_ENABLED: true

**Conexiones con Otras Decisiones**

* F-13 (Tier Detection): Detección automática

* F-07 (Offline Dignity): Funcionalidad sin conexión

* F-14 (Modo Lite): Experiencia adaptada

────────────────────────────────────────────────────────────────────────────────

### **F-21: GUARDIANES DEL MANIFIESTO**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Gobernanza |

**Origen / Problema Identificado**

Necesidad de gobernanza visible y transparente. Poder debe ser visible y rotativo.

**Decisión Aprobada**

Sistema de Guardianes con perfiles públicos, poderes documentados, y transparencia total. Incluye: Bandera Roja Pública, Postmortems, Sesiones Q\&A mensuales.

**Componentes de Implementación**

* 5 perfiles de Guardianes: Periodista, Abogado, Dirigente vecinal, Ingeniero IA, Psicóloga

* Bandera Roja Pública: señalar contenido problemático visiblemente

* Postmortems mensuales: qué salió mal y cómo se corrigió

* Sesiones Q\&A públicas mensuales

* Rotación cada 2 años, protección legal incluida

**Feature Flags**

* ENABLE\_GUARDIAN\_PROFILES: true

* ENABLE\_PUBLIC\_RED\_FLAGS: true

* ENABLE\_POSTMORTEMS: true

* ENABLE\_PUBLIC\_SESSIONS: true

* GUARDIAN\_ROTATION\_YEARS: 2

**Conexiones con Otras Decisiones**

* F-08 (Disyuntor Humano): Evoluciona visibilidad

* F-10 (Anti-Élite): Rotación de poder

* F-02 (Honestidad): Transparencia de gobernanza

────────────────────────────────────────────────────────────────────────────────

### **F-22: CAPITAL HUMANO CÍVICO**

**✅ APROBADO** | Fecha: 25 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | V1/V2 |

**Origen / Problema Identificado**

Vacío crítico: se asume disponibilidad infinita de voluntarios de calidad. Riesgo de agotamiento, captura por grupos organizados, o colapso operativo.

**Decisión Aprobada**

Modelo de Capital Humano Cívico que cuida a voluntarios. Incluye: Carrera de Criterio (desarrollo), límites de carga, reconocimiento, descanso obligatorio.

**Componentes de Implementación**

* Carrera de Criterio: Observador → Colaborador → Verificador → Mentor → Guardián

* Límites de carga: máximo X casos/semana por jurado

* Descanso obligatorio post-periodo de servicio

* Reconocimiento público de contribuciones

* Certificados para CV de voluntarios

**Feature Flags**

* ENABLE\_CAREER\_PATH: true

* MAX\_JURY\_CASES\_PER\_WEEK: 10

* MANDATORY\_REST\_DAYS: 30

* ENABLE\_VOLUNTEER\_CERTIFICATES: true

**Conexiones con Otras Decisiones**

* F-21 (Guardianes): Roles de gobernanza

* F-10 (Anti-Élite): Rotación y límites

* F-08 (Gamificación): Reconocimiento ético

────────────────────────────────────────────────────────────────────────────────

### **F-23: GPS CÍVICO**

**✅ APROBADO** | Fecha: 26 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Mi CIVICUM |
| Horas Estimadas | \~10 semanas desarrollo |

**Origen / Problema Identificado**

Usuario nunca debe quedar 'a oscuras'. Necesita orientación constante sobre dónde está en su proceso cívico.

**Decisión Aprobada**

Sistema de misiones y trayectorias que orienta al usuario. 50 misiones en 3 categorías (crecimiento, impacto, liderazgo). Panel dinámico que sugiere siguiente acción.

**Componentes de Implementación**

* 50 misiones categorizadas: 🌱 Crecimiento, 🎯 Impacto, 🛡️ Liderazgo

* 3 trayectorias: Fiscalizador, Educador, Organizador

* Panel dinámico con sugerencias contextuales

* Barra de progreso visible

* Misiones especiales: del día, estacionales, reactivas

**Feature Flags**

* ENABLE\_GPS\_CIVICO: true

* ENABLE\_MISSION\_SUGGESTIONS: true

* ENABLE\_TRAJECTORIES: true

* SHOW\_PROGRESS\_BAR: true

**Conexiones con Otras Decisiones**

* F-22 (Capital Humano): Desarrollo de usuarios

* F-08 (Gamificación): Misiones como motivación

* F-07 (Confianza Progresiva): Niveles de acceso

────────────────────────────────────────────────────────────────────────────────

### **F-24: EXPEDIENTES DE EVIDENCIA SISTÉMICA**

**✅ APROBADO** | Fecha: 26 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Alza la Voz |

**Origen / Problema Identificado**

Eslabón perdido: al convertir 100 reportes locales en propuesta formal, se pierde humanidad, urgencia y peso cualitativo.

**Decisión Aprobada**

Dossiers vivos que se generan automáticamente cuando hay suficientes reportes sobre un tema. Incluyen: mapas de calor, fotos verificadas, citas anónimas, estadísticas, evolución temporal.

**Componentes de Implementación**

* Agregación automática de reportes por tema/zona

* Mapa de calor geográfico

* Galería de fotos verificadas

* Citas anónimas de ciudadanos

* Botón 'Citar evidencia' en debates

* Informe ejecutivo auto-generado para autoridades

**Feature Flags**

* ENABLE\_EVIDENCE\_DOSSIERS: true

* AUTO\_AGGREGATE\_REPORTS: true

* ENABLE\_HEAT\_MAPS: true

* ENABLE\_CITE\_EVIDENCE: true

**Conexiones con Otras Decisiones**

* F-16 (Expediente Autoridad): Complementa con evidencia

* F-17 (Termostato): Acompaña escalamiento

* F-02 (Honestidad): Evidencia verificable

────────────────────────────────────────────────────────────────────────────────

### **F-25: SOSTENIBILIDAD ÉTICA**

**✅ APROBADO** | Fecha: 26 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | FUNCIONAL |
| Módulo Impactado | Core / Financiamiento |

**Origen / Problema Identificado**

Paradoja del financiamiento cívico: para defender al ciudadano frente al poder, necesitas recursos que usualmente provienen del poder.

**Decisión Aprobada**

Modelo de Sostenibilidad Ética: (1) Diversificación obligatoria (ninguna fuente \>30%), (2) Lista de fuentes prohibidas, (3) Transparencia total, (4) Prioridad fuentes ciudadanas, (5) Mecanismo de objeción, (6) Auditoría anual.

**Componentes de Implementación**

* Ninguna fuente \>30% del total

* Prohibidos: partidos políticos, gobiernos de turno, sujetos de fiscalización

* Página de transparencia financiera pública

* Mecanismo de objeción ciudadana a financiamiento

* Auditoría anual de conflictos de interés

* Meta: 100% donaciones individuales a largo plazo

**Feature Flags**

* MAX\_SINGLE\_FUNDER\_PERCENT: 30

* ENABLE\_FINANCIAL\_TRANSPARENCY: true

* ENABLE\_CITIZEN\_OBJECTION: true

* REQUIRE\_ANNUAL\_AUDIT: true

**Conexiones con Otras Decisiones**

* F-02 (Honestidad): Transparencia financiera

* F-03 (Datos Mínimos): Nunca vender datos

* F-05 (Apartidismo): Sin dinero partidista

────────────────────────────────────────────────────────────────────────────────

# **7.5 DECISIONES ENERO 2026 (PARTE 1\)**

*Decisiones de consolidación técnica y funcional aprobadas en enero 2026\.*

### **F-26: CONTENIDO SENSIBLE**

**✅ APROBADO** | Fecha: 27 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / UX |

**Origen / Problema Identificado**

Investigación antropológica identificó trauma cívico en población chilena post-estallido y procesos constitucionales.

**Decisión Aprobada**

Sistema de advertencias para contenido que pueda reactivar trauma cívico. Modo 'solo hechos' sin opiniones. Links a recursos de apoyo.

**Componentes de Implementación**

* Advertencias opt-in antes de contenido sensible

* Categorías sensibles: represión, procesos constitucionales, violencia política

* Modo 'Solo Hechos' que elimina opiniones

* Links a recursos de apoyo: 131 (Fono Drogas), 149 (Familia)

* Opción de ocultar contenido sensible permanentemente

**Feature Flags**

* ENABLE\_CONTENT\_WARNINGS: true

* ENABLE\_FACTS\_ONLY\_MODE: true

* SHOW\_SUPPORT\_RESOURCES: true

**Conexiones con Otras Decisiones**

* F-02 (Honestidad): Transparencia sobre contenido

* F-08 (Gamificación): Cuidado emocional

* F-22 (Capital Humano): Bienestar de usuarios

────────────────────────────────────────────────────────────────────────────────

### **F-27: ACADEMIA CÍVICA REESTRUCTURADA**

**✅ APROBADO** | Fecha: 27 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Academia Cívica |
| Horas Estimadas | \~385h producción |

**Origen / Problema Identificado**

Consolidación de módulo educativo con scope realista para MVP.

**Decisión Aprobada**

Academia Cívica MVP con 8 dominios, 50 Rutas Ciudadanas, 50 Duelos de Poder, 12 Badges. Microlearning de 5-10 minutos.

**Componentes de Implementación**

* 8 dominios: Gobierno Local, Regional, Nacional, Legislativo, Judicial, Electoral, Participación, Gobernanza CIVICUM

* 50 Rutas Ciudadanas (trayectorias de aprendizaje)

* 50 Duelos de Poder (episodios educativos gamificados)

* 12 Badges MVP (logros verificables)

* 5 tipos de cápsula: video, quiz, infografía, caso práctico, plantilla

**Feature Flags**

* ENABLE\_CIVIC\_ROUTES: true

* ENABLE\_POWER\_DUELS: true

* ENABLE\_BADGES: true

* MAX\_CAPSULE\_MINUTES: 10

**Conexiones con Otras Decisiones**

* F-06 (Educación Progresiva): Base pedagógica

* F-08 (Gamificación): Duelos sin adicción

* F-29 (Máximo Realista): Scope de producción

────────────────────────────────────────────────────────────────────────────────

### **F-28: AUTONOMÍA RADICAL SOSTENIBLE**

**✅ APROBADO** | Fecha: 27 Diciembre 2025

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / Infraestructura |
| Horas Estimadas | \~45h |

**Origen / Problema Identificado**

Evolución de F-25. Modelo de financiamiento comunitario que garantiza independencia estructural.

**Decisión Aprobada**

Modelo community-funded resilience. Ningún contribuidor \>10% en largo plazo. Fondo de Resiliencia comunitario. Veto ciudadano a fuentes de financiamiento.

**Componentes de Implementación**

* Núcleo Soberano: funciones críticas sin dependencia externa

* Fondo de Resiliencia: reserva para 6 meses de operación

* Degradación Elegante: 5 modos según recursos disponibles

* Veto ciudadano: comunidad puede rechazar financiamiento

* Meta: 100% donaciones individuales

**Feature Flags**

* MAX\_SINGLE\_CONTRIBUTOR\_PERCENT: 10

* ENABLE\_RESILIENCE\_FUND: true

* ENABLE\_CITIZEN\_VETO: true

* DEGRADATION\_MODES: 5

**Conexiones con Otras Decisiones**

* F-25 (Sostenibilidad Ética): Evolución

* F-43 (Stack Zero-Cost): Infraestructura económica

* F-02 (Honestidad): Transparencia de fuentes

────────────────────────────────────────────────────────────────────────────────

### **F-29: ACADEMIA MÁXIMO REALISTA**

**✅ APROBADO** | Fecha: 14 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Academia Cívica |
| Horas Estimadas | 385h producción |

**Origen / Problema Identificado**

Plan de producción realista para Academia Cívica MVP.

**Decisión Aprobada**

Scope máximo realista: 385 horas de producción, 8 dominios cívicos, 50 Rutas, 50 Duelos, 12 Insignias.

**Componentes de Implementación**

* 150h para 50 Rutas Ciudadanas

* 175h para 50 Duelos de Poder

* 15h para 12 Badges MVP

* 20h para 5 tipos de cápsula

* 15h para UI Currículum Cívico

* 10h para conexiones entre módulos

**Feature Flags**

* ACADEMIA\_PRODUCTION\_HOURS: 385

* MAX\_ROUTES: 50

* MAX\_DUELS: 50

* MAX\_BADGES: 12

**Conexiones con Otras Decisiones**

* F-27 (Academia Reestructurada): Especificación

* F-06 (Educación Progresiva): Base

* F-04 (Construcción Secuencial): Metodología

────────────────────────────────────────────────────────────────────────────────

### **F-30: ESTRATEGIAS MOTIVACIÓN ONBOARDING**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Mi CIVICUM / Global |
| Horas Estimadas | \~45h |

**Origen / Problema Identificado**

Análisis de conversión visitante → usuario. Necesidad de comunicar 'por qué' y mostrar valor antes de pedir datos.

**Decisión Aprobada**

Onboarding que comunica valor antes de pedir compromiso. Preview de Poder, Transparencia del Por Qué, Storytelling de Impacto, Micro-victorias Tempranas.

**Componentes de Implementación**

* Preview de Poder: mostrar capacidades antes del registro

* Transparencia del Por Qué: explicar razón de cada solicitud

* Storytelling de Impacto: historias reales de ciudadanos

* Micro-victorias Tempranas: logros en primeros 5 minutos

* Progreso Visible: barra de completitud del perfil cívico

**Feature Flags**

* ENABLE\_POWER\_PREVIEW: true

* SHOW\_WHY\_EXPLANATIONS: true

* ENABLE\_IMPACT\_STORIES: true

* MICRO\_VICTORIES\_IN\_ONBOARDING: true

**Conexiones con Otras Decisiones**

* F-02 (Honestidad): Explicar el por qué

* F-14 (Narrativas Impacto): Historias verificables

* F-18 (Quick Wins): Victoria temprana

────────────────────────────────────────────────────────────────────────────────

### **F-31: SISTEMA COMPARTIR ANTIPLAGIO**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / Verificación |
| Horas Estimadas | \~60h |

**Origen / Problema Identificado**

Necesidad de verificación progresiva con defensas invisibles contra bots y abuso.

**Decisión Aprobada**

Verificación progresiva alineada con poder otorgado. Defensas invisibles desde día 1: Rate Limiting, Turnstile, Fingerprinting, Behavioral Biometrics, CrowdSec.

**Componentes de Implementación**

* Escalera de Verificación: Nivel 0 (explorar) → Nivel 4 (Guardián)

* Rate Limiting: 5 requests/segundo (Nginx)

* Cloudflare Turnstile: CAPTCHA invisible

* Browser Fingerprinting: detección de bots

* Behavioral Biometrics: patrones de uso sospechosos

* CrowdSec: inteligencia colaborativa de amenazas

**Feature Flags**

* ENABLE\_INVISIBLE\_DEFENSES: true

* RUT\_REQUIRED\_LEVEL: 3

* TURNSTILE\_ENABLED: true

* CROWDSEC\_ENABLED: true

**Conexiones con Otras Decisiones**

* F-07 (Confianza Progresiva): Niveles de verificación

* F-18 (Escudo): Protección de identidad

* F-35 (Ciberseguridad): Defensas técnicas

────────────────────────────────────────────────────────────────────────────────

### **F-32: CAPA 2 STACK ANTI-ALUCINACIÓN**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Asistente Cívico |
| Horas Estimadas | \~50h |

**Origen / Problema Identificado**

IA que solo responde con evidencia verificable. Nunca inventar información.

**Decisión Aprobada**

Stack anti-alucinación: Evidence-Only (solo datos con fuente), Abstención Dura (si no hay fuente, decir 'no sé'), Citación obligatoria.

**Componentes de Implementación**

* Evidence-Only: respuestas solo con fuente verificable

* Abstención Dura: 'No tengo información verificable' si no hay datos

* Citación obligatoria: toda respuesta incluye fuente

* Verificación cruzada: mínimo 2 fuentes para afirmaciones importantes

* Flag de confianza: indicador visual de certeza

**Feature Flags**

* ENABLE\_EVIDENCE\_ONLY: true

* ENABLE\_HARD\_ABSTENTION: true

* REQUIRE\_CITATIONS: true

* MIN\_SOURCES\_FOR\_CLAIMS: 2

**Conexiones con Otras Decisiones**

* F-12 (IA 3 Capas): Arquitectura base

* F-02 (Honestidad): No inventar

* F-44 (IA Distribuida): Implementación

────────────────────────────────────────────────────────────────────────────────

### **F-33: ARQUITECTURA ESTABILIDAD OFFLINE**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / PWA |
| Horas Estimadas | \~55h |

**Origen / Problema Identificado**

Especificaciones técnicas para F-07 (Offline Dignity Mode).

**Decisión Aprobada**

Arquitectura PWA completa con Service Worker, IndexedDB para datos locales, cola de sincronización, indicadores de estado.

**Componentes de Implementación**

* Service Worker con Workbox

* IndexedDB para almacenamiento local estructurado

* Cola de sincronización para acciones offline

* Background Sync cuando hay conexión

* Indicador visual de estado de conexión

* Fallback a plantillas cuando IA no disponible

**Feature Flags**

* ENABLE\_SERVICE\_WORKER: true

* ENABLE\_INDEXEDDB: true

* ENABLE\_SYNC\_QUEUE: true

* ENABLE\_BACKGROUND\_SYNC: true

**Conexiones con Otras Decisiones**

* F-07 (Offline Dignity): Requisitos funcionales

* F-20 (Dignidad): Experiencia completa offline

* F-12 (IA 3 Capas): Fallback local

────────────────────────────────────────────────────────────────────────────────

### **F-34: CAPA 2 FRESCURA Y LIMPIEZA**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / Datos |
| Horas Estimadas | \~40h |

**Origen / Problema Identificado**

Datos deben estar actualizados y limpios. Caché con frescura garantizada.

**Decisión Aprobada**

Sistema de frescura de datos con timestamps, invalidación automática, y limpieza periódica. Datos viejos marcados visualmente.

**Componentes de Implementación**

* Timestamp en todos los datos cacheados

* Invalidación automática según TTL por tipo de dato

* Indicador visual de antigüedad de datos

* Limpieza periódica de datos obsoletos

* Refresh automático en background cuando hay conexión

**Feature Flags**

* ENABLE\_DATA\_FRESHNESS: true

* DEFAULT\_TTL\_HOURS: 24

* SHOW\_DATA\_AGE\_INDICATOR: true

* AUTO\_CLEANUP\_ENABLED: true

**Conexiones con Otras Decisiones**

* F-33 (Arquitectura Offline): Sincronización

* F-02 (Honestidad): Transparencia de antigüedad

* F-12 (IA 3 Capas): Cache inteligente

────────────────────────────────────────────────────────────────────────────────

### **F-35: PERSONALIZACIÓN ÉTICA IA**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Asistente Cívico |
| Horas Estimadas | \~65h |

**Origen / Problema Identificado**

Personalización que respeta privacidad. Sin perfilamiento invasivo.

**Decisión Aprobada**

Personalización basada en preferencias explícitas del usuario, no en tracking invisible. Usuario controla qué se personaliza.

**Componentes de Implementación**

* Preferencias explícitas: temas de interés, comuna, nivel educativo

* Sin tracking de comportamiento para ads

* Usuario puede ver y eliminar preferencias

* Personalización opt-in, no opt-out

* Explicación de cómo se usa cada preferencia

**Feature Flags**

* ENABLE\_ETHICAL\_PERSONALIZATION: true

* REQUIRE\_EXPLICIT\_PREFERENCES: true

* ALLOW\_PREFERENCE\_DELETION: true

* PERSONALIZATION\_OPT\_IN: true

**Conexiones con Otras Decisiones**

* F-03 (Datos Mínimos): Solo datos necesarios

* F-02 (Honestidad): Transparencia de uso

* F-18 (Escudo): Control del usuario

────────────────────────────────────────────────────────────────────────────────

# **7.6 DECISIONES ENERO 2026 (PARTE 2\)**

*Decisiones de expansión funcional y capacidades UX avanzadas.*

### **F-36: HISTORIA CÍVICA VIVA**

**✅ APROBADO** | Fecha: 16 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Academia Cívica |
| Horas Estimadas | \~30h |

**Origen / Problema Identificado**

Contexto histórico de instituciones para entender presente.

**Decisión Aprobada**

Módulo de Historia Cívica que contextualiza instituciones actuales. Timeline interactivo, hitos cívicos chilenos, conexión pasado-presente.

**Componentes de Implementación**

* Timeline interactivo de historia institucional chilena

* Hitos cívicos: Constituciones, reformas, movimientos

* Conexión 'Entonces vs Ahora'

* Biografías de figuras cívicas históricas

* Lecciones del pasado para el presente

**Feature Flags**

* ENABLE\_CIVIC\_HISTORY: true

* ENABLE\_TIMELINE: true

* SHOW\_HISTORICAL\_CONTEXT: true

**Conexiones con Otras Decisiones**

* F-27 (Academia Cívica): Complementa educación

* F-06 (Educación Progresiva): Contenido histórico

* F-26 (Contenido Sensible): Temas delicados históricos

────────────────────────────────────────────────────────────────────────────────

### **F-37: OBSERVATORIO JUDICIAL**

**✅ APROBADO** | Fecha: 17 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Cuentas Claras |
| Horas Estimadas | 72h |

**Origen / Problema Identificado**

Poder Judicial como caja negra para ciudadanos.

**Decisión Aprobada**

Observatorio del Poder Judicial: perfiles de jueces, estadísticas de fallos, tiempos de resolución, casos emblemáticos.

**Componentes de Implementación**

* Perfiles de jueces con datos públicos

* Estadísticas de fallos por tipo de causa

* Tiempos promedio de resolución por tribunal

* Casos emblemáticos con timeline

* Comparador entre tribunales

**Feature Flags**

* ENABLE\_JUDICIAL\_OBSERVATORY: true

* SHOW\_JUDGE\_PROFILES: true

* SHOW\_CASE\_STATISTICS: true

**Conexiones con Otras Decisiones**

* F-16 (Expediente Autoridad): Perfiles de jueces

* F-15 (Termómetro): Métricas judiciales

* F-02 (Honestidad): Solo datos verificables

────────────────────────────────────────────────────────────────────────────────

### **F-38: INTEGRACIONES CRUZADAS DE MÓDULOS**

**✅ APROBADO** | Fecha: 17 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / Arquitectura |
| Horas Estimadas | 80h |

**Origen / Problema Identificado**

Módulos deben comunicarse fluidamente. Evitar 'amnesia' entre módulos.

**Decisión Aprobada**

Portapapeles Cívico que permite llevar contexto entre módulos. Botón 'Usar este dato para...' que pre-llena formularios en otros módulos.

**Componentes de Implementación**

* Portapapeles Cívico (Context Carry-Over)

* Botón 'Usar este dato para...' en cada dato

* Pre-llenado automático de formularios con contexto

* Saltos directos módulo↔módulo

* Store global de contexto activo

**Feature Flags**

* ENABLE\_CIVIC\_CLIPBOARD: true

* ENABLE\_CONTEXT\_CARRYOVER: true

* ENABLE\_AUTO\_PREFILL: true

**Conexiones con Otras Decisiones**

* F-01 (Complejidad MVP): 6 módulos integrados

* F-23 (GPS Cívico): Navegación guiada

* F-24 (Expedientes): Agregación de datos

────────────────────────────────────────────────────────────────────────────────

### **F-39: LABORATORIO DE IDEAS EXPANDIDO**

**✅ APROBADO** | Fecha: 17 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Alza la Voz \+ Mesas |
| Horas Estimadas | 104h |

**Origen / Problema Identificado**

Propuestas ciudadanas necesitan herramientas para ser viables.

**Decisión Aprobada**

Laboratorio de Ideas con Wizard Socrático para crear propuestas, Carrito de Compras Público para costear, Semáforo de Viabilidad, Argumentos Blindados con datos.

**Componentes de Implementación**

* Wizard Socrático (LawBuilder): guía paso a paso para crear propuesta

* Carrito de Compras Público: catálogo de costos unitarios (ChileCompra)

* Semáforo de Viabilidad: 🟢 Financiable, 🟡 Requiere reasignación, 🔴 Requiere reforma

* Argumentos Blindados: insertar datos verificados en propuestas

* Botón 'Municiones de datos' en Duelos

**Feature Flags**

* ENABLE\_IDEA\_LAB: true

* ENABLE\_SOCRATIC\_WIZARD: true

* ENABLE\_PUBLIC\_CART: true

* ENABLE\_VIABILITY\_SEMAPHORE: true

**Conexiones con Otras Decisiones**

* F-24 (Expedientes Evidencia): Datos para argumentos

* F-16 (Expediente Autoridad): Contexto de responsables

* F-17 (Termostato): Escalamiento de propuestas

────────────────────────────────────────────────────────────────────────────────

### **F-40: CAPACIDADES UX LATENTES**

**✅ APROBADO** | Fecha: 17 Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | NUEVA |
| Módulo Impactado | Core / UX |
| Horas Estimadas | 88h |

**Origen / Problema Identificado**

Diseños UX sin tareas de desarrollo. Funcionalidades de alto impacto ya diseñadas.

**Decisión Aprobada**

Implementar funcionalidades UX ya diseñadas: Pre-llenado 'Usar este dato', Espejo de Reputación para instituciones, Insignias de Auditoría, Modo Secretario, Mapa de Poder Personal.

**Componentes de Implementación**

* Pre-llenado 'Usar este dato para...': clic en dato → menú de acciones

* Espejo de Reputación: dashboard para instituciones con su calificación ciudadana

* Insignias de Auditoría: Verificador Cívico, Auditor Municipal, Fiscalizador Congreso

* Modo Secretario: síntesis de reuniones en Círculos/Mesas

* Mapa de Poder Personal: visualización de autoridades con las que he interactuado

**Feature Flags**

* ENABLE\_DATA\_PREFILL: true

* ENABLE\_REPUTATION\_MIRROR: true

* ENABLE\_AUDIT\_BADGES: true

* ENABLE\_SECRETARY\_MODE: true

* ENABLE\_POWER\_MAP: true

**Conexiones con Otras Decisiones**

* F-38 (Integraciones): Flujo entre módulos

* F-16 (Expediente Autoridad): Mapa de poder

* F-08 (Gamificación): Insignias

────────────────────────────────────────────────────────────────────────────────

# **7.7 DECISIONES TÉCNICAS DE INTEGRACIÓN**

*Decisiones arquitectónicas y de infraestructura que habilitan el stack tecnológico de CIVICUM.*

### **F-43: STACK ZERO-COST DEFINITIVO**

**✅ APROBADO** | Fecha: Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | TÉCNICA |
| Módulo Impactado | Infraestructura |
| Horas Estimadas | Transversal |

**Origen / Problema Identificado**

Infraestructura con $0/mes perpetuo, sin dependencia de free-tiers temporales.

**Decisión Aprobada**

Stack completo con $0/mes: Neon.tech (10GB PostgreSQL), Vercel (100GB bandwidth), Cloudflare (CDN \+ WAF \+ R2 10GB), GitHub Actions (CI/CD ilimitado en público).

**Componentes de Implementación**

* Neon.tech: 10GB PostgreSQL gratuito (reemplaza Supabase 0.5GB)

* Vercel: hosting con 100GB bandwidth mensual

* Cloudflare: CDN ilimitado \+ WAF \+ R2 storage 10GB

* GitHub Actions: CI/CD ilimitado en repositorios públicos

* Vercel Edge Functions: 500k invocaciones/mes

**Feature Flags**

* INFRASTRUCTURE\_COST\_TARGET: 0

* DATABASE\_PROVIDER: 'neon'

* HOSTING\_PROVIDER: 'vercel'

* CDN\_PROVIDER: 'cloudflare'

**Conexiones con Otras Decisiones**

* F-28 (Autonomía Radical): Independencia de costos

* F-07 (Offline Dignity): Cloudflare R2 para assets

* F-12 (IA 3 Capas): Workers AI como fallback

────────────────────────────────────────────────────────────────────────────────

### **F-44: ARQUITECTURA IA DISTRIBUIDA CLIENT-FIRST**

**✅ APROBADO** | Fecha: Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | TÉCNICA |
| Módulo Impactado | Asistente Cívico |
| Horas Estimadas | Transversal |

**Origen / Problema Identificado**

IA ejecutada en dispositivo del usuario primero. Nube solo como fallback. Costo LLM \= $0.

**Decisión Aprobada**

Arquitectura de 3 pisos: WebLLM local (Llama 3\) → Workers AI fallback → API externa solo emergencia. Router de hardware detecta capacidad del dispositivo.

**Componentes de Implementación**

* Piso 1: WebLLM con Llama 3 (local, $0)

* Piso 2: Cloudflare Workers AI (fallback, bajo costo)

* Piso 3: API externa (solo consultas complejas, última opción)

* Router de Hardware: detecta tier del dispositivo

* Plantillas pre-construidas para tier LOW sin IA

**Feature Flags**

* ENABLE\_LOCAL\_WEBLLM: true

* ENABLE\_WORKERS\_AI\_FALLBACK: true

* ENABLE\_HARDWARE\_ROUTER: true

* LOCAL\_MODEL: 'llama-3-8b'

**Conexiones con Otras Decisiones**

* F-12 (IA 3 Capas): Especificación original

* F-13 (Tier Detection): Detección de capacidad

* F-32 (Anti-Alucinación): Verificación de respuestas

────────────────────────────────────────────────────────────────────────────────

### **F-45: TESTING OBLIGATORIO**

**✅ APROBADO** | Fecha: Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | TÉCNICA |
| Módulo Impactado | Core / Calidad |
| Horas Estimadas | Transversal |

**Origen / Problema Identificado**

Calidad verificada antes de cada deploy. CI bloquea si tests fallan.

**Decisión Aprobada**

Testing obligatorio: Vitest (unit, 60% coverage), Playwright (E2E críticos, 100% passing), jest-axe (accesibilidad, 0 errores en componentes core).

**Componentes de Implementación**

* Vitest: unit tests con mínimo 60% coverage

* Playwright: E2E para flujos críticos (registro, reporte, voto)

* jest-axe: tests de accesibilidad automáticos

* CI/CD bloquea PR sin tests passing

* E2E offline obligatorios para flujos críticos

**Feature Flags**

* MIN\_UNIT\_COVERAGE: 60

* REQUIRE\_E2E\_CRITICAL: true

* REQUIRE\_ACCESSIBILITY\_TESTS: true

* BLOCK\_PR\_WITHOUT\_TESTS: true

**Conexiones con Otras Decisiones**

* F-04 (Construcción Secuencial): Calidad verificada

* F-07 (Offline Dignity): E2E offline

* F-20 (Dignidad): Tests de accesibilidad

────────────────────────────────────────────────────────────────────────────────

### **F-46: TOOLKIT VIBE CODING**

**✅ APROBADO** | Fecha: Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | TÉCNICA |
| Módulo Impactado | Desarrollo |
| Horas Estimadas | Transversal |

**Origen / Problema Identificado**

Herramientas de desarrollo asistido por IA para acelerar implementación.

**Decisión Aprobada**

Toolkit de desarrollo: Cursor AI (IDE con IA), Codeium (autocompletado), v0.dev (generación de componentes), shadcn/ui (biblioteca de componentes).

**Componentes de Implementación**

* Cursor AI: IDE con asistencia de IA integrada

* Codeium: autocompletado inteligente gratuito

* v0.dev: generación de componentes React desde prompts

* shadcn/ui: biblioteca de componentes accesibles

* Reglas de uso: IA asiste, humano valida

**Feature Flags**

* ENABLE\_AI\_ASSISTED\_DEV: true

* USE\_SHADCN\_UI: true

* REQUIRE\_HUMAN\_REVIEW: true

**Conexiones con Otras Decisiones**

* F-47 (Reutilización OSS): Componentes existentes

* F-45 (Testing): Validación de código generado

* F-04 (Construcción Secuencial): Metodología

────────────────────────────────────────────────────────────────────────────────

### **F-47: REUTILIZACIÓN OSS**

**✅ APROBADO** | Fecha: Enero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | TÉCNICA |
| Módulo Impactado | Desarrollo |
| Horas Estimadas | \-1,150h ahorro estimado |

**Origen / Problema Identificado**

Reutilizar componentes open source probados en lugar de reinventar.

**Decisión Aprobada**

Análisis y reutilización de: FixMyStreet (reportes), VotaInteligente (datos parlamentarios), Decidim (deliberación), Pol.is (consenso). CIVICUM adopta licencia AGPL-3.0.

**Componentes de Implementación**

* FixMyStreet (AGPL-3.0): modelo de reportes georreferenciados

* VotaInteligente (GPL-3.0): scraping de datos parlamentarios

* Decidim (AGPL-3.0): patrones de deliberación ciudadana

* Pol.is (AGPL-3.0): algoritmos de consenso

* CIVICUM \= AGPL-3.0: todo código abierto

**Feature Flags**

* ENABLE\_OSS\_REUSE: true

* LICENSE: 'AGPL-3.0'

* REQUIRE\_LICENSE\_CHECK: true

**Conexiones con Otras Decisiones**

* F-43 (Stack Zero-Cost): Componentes gratuitos

* F-02 (Honestidad): Transparencia de código

* F-25 (Sostenibilidad): Modelo open source

────────────────────────────────────────────────────────────────────────────────

### **F-48: FIREWALL DE DATOS PÚBLICOS (Saneamiento Alfa-5/Alfa-6)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | BLOQUEANTE |
| Módulo Impactado | Cuentas Claras, todos los módulos con datos externos |

**Origen / Problema Identificado**

Auditoría de Escuadrón Alfa detectó dos vulnerabilidades críticas:
1. Sin blindaje contra captura institucional (Gobierno manipula datos de Cuentas Claras)
2. Sin validación de integridad de datos externos (si DIPRES miente, CIVICUM replica la mentira)

**Decisión Aprobada**

Implementar Firewall de Datos Públicos con arquitectura de desconfianza por diseño:

| Mecanismo | Descripción |
| :---- | :---- |
| Multi-fuente obligatoria | Datos de presupuesto deben cruzarse con mínimo 2 fuentes independientes |
| Hash verificable | Cada dataset tiene hash SHA-256 publicado en repositorio público |
| Historial inmutable | Todos los cambios en datos se registran en log append-only |
| Alerta de anomalías | Cambio >10% en cualquier partida dispara revisión humana |
| Snapshot ciudadano | Cualquier ciudadano puede descargar snapshot firmado para verificación independiente |

**Componentes de Implementación**

* Pipeline de ingestión con comparación cruzada DIPRES vs Ley de Presupuestos vs SIGFE
* Tabla `public_data_audit_log` con campos: source, hash, timestamp, diff_percentage
* API pública `/api/v1/data-integrity/{dataset}` para verificación externa
* Cron job diario de validación de consistencia
* Dashboard de transparencia: "Última verificación: [timestamp], Fuentes consultadas: [list]"

**Feature Flags**

* ENABLE\_MULTI\_SOURCE\_VALIDATION: true
* ENABLE\_DATA\_HASH\_VERIFICATION: true
* ENABLE\_ANOMALY\_ALERTS: true
* ENABLE\_CITIZEN\_SNAPSHOTS: true

**Conexiones con Otras Decisiones**

* F-01 (Honestidad Radical): No replicar mentiras
* F-02 (Transparencia Total): Datos verificables públicamente
* F-10 (Anti-Captura): Prevenir captura institucional

────────────────────────────────────────────────────────────────────────────────

### **F-49: ANÁLISIS DE RIESGO DE PROVEEDORES (Saneamiento F2-4)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Infraestructura, Sostenibilidad |

**Origen / Problema Identificado**

Auditoría de Escuadrón F2 detectó que se asume perpetuidad de free tiers sin análisis formal. Historial: Heroku eliminó free tier en 2022, Firebase cambió precios en 2023.

**Decisión Aprobada**

Implementar análisis formal de riesgo para cada proveedor crítico:

| Proveedor | Probabilidad Cambio (2 años) | Impacto | Tiempo Migración | Alternativa |
| :---- | :---- | :---- | :---- | :---- |
| Neon.tech | Media (startup, funding incierto) | 🔴 Alto | 8h | Supabase, PlanetScale |
| Vercel | Baja (establecido, modelo freemium sólido) | 🟠 Medio | 4h | Cloudflare Pages |
| Cloudflare | Muy Baja (empresa pública, free tier estratégico) | 🟢 Bajo | 2h | Fastly |
| Upstash | Media (startup) | 🟡 Medio | 2h | Railway Redis |

**Componentes de Implementación**

* Revisión trimestral de términos de servicio de cada proveedor
* Alerta automática si proveedor anuncia cambios de pricing
* Mantener scripts de migración actualizados y testeados
* Prueba anual de migración en ambiente staging

**Feature Flags**

* ENABLE\_VENDOR\_RISK\_MONITORING: true
* ENABLE\_MIGRATION\_SCRIPTS: true

────────────────────────────────────────────────────────────────────────────────

### **F-50: PLAN B FINANCIERO - FONDO DE EMERGENCIA (Saneamiento F2-5)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | BLOQUEANTE |
| Módulo Impactado | Sostenibilidad, Operaciones |

**Origen / Problema Identificado**

Auditoría de Escuadrón F2 identificó que si todos los free tiers desaparecen simultáneamente, no hay plan de supervivencia financiera.

**Decisión Aprobada**

Establecer Plan B Financiero con fondo de emergencia:

| Escenario | Costo Mensual Estimado | Runway Mínimo | Fondo Requerido |
| :---- | :---- | :---- | :---- |
| Operación mínima (sin free tiers) | $100-150/mes | 6 meses | $900 |
| Operación normal (50K MAU sin free) | $200-300/mes | 6 meses | $1,800 |
| Operación alta (100K MAU sin free) | $400-600/mes | 3 meses | $1,800 |

**Componentes de Implementación**

* **Meta de Fondo Inicial:** $2,000 USD (suficiente para 6 meses operación básica)
* **Fuentes de Financiamiento Emergencia:**
  - Crowdfunding de emergencia entre usuarios activos
  - Donaciones de fundaciones sin conflictos (lista blanca F-25)
  - Adelanto de membresías "Ciudadano Premium" (sin funcionalidades extras, solo solidaridad)
* **Trigger de Activación:**
  - Alerta 80% en cualquier proveedor
  - Proveedor anuncia eliminación de free tier
  - Costo mensual supera $50 USD
* **Transparencia:**
  - Dashboard público de estado de fondo de emergencia
  - Notificación a usuarios si fondo cae bajo 3 meses de runway

**Feature Flags**

* ENABLE\_EMERGENCY\_FUND\_DASHBOARD: true
* ENABLE\_CROWDFUNDING\_EMERGENCY: true

**Conexiones con Otras Decisiones**

* F-25 (Sostenibilidad Ética): Fuentes permitidas
* F-28 (Financiamiento Comunitario): Modelo de crowdfunding
* F-49 (Riesgo Proveedores): Triggers de activación

────────────────────────────────────────────────────────────────────────────────

### **F-51: INCIDENT RESPONSE PLAN (Saneamiento Epsilon-4)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Seguridad, Operaciones |

**Origen / Problema Identificado**

Escuadrón Epsilon detectó que no existe un plan documentado de respuesta a incidentes de seguridad.

**Decisión Aprobada**

Plan de 4 fases con responsables y tiempos definidos.

**Fase 1: Detección (0-15 min)**

| Señal | Fuente | Acción |
| :---- | :---- | :---- |
| Alertas Cloudflare | WAF | Revisar logs inmediato |
| Spike de errores 5xx | Grafana | Verificar sistemas |
| Reporte de usuario | Soporte | Escalar a SRE |

**Fase 2: Contención (15-60 min)**

| Tipo de Incidente | Acción Inmediata | Responsable |
| :---- | :---- | :---- |
| DB breach sospechado | Revocar tokens activos | Security Lead |
| DDOS | Activar modo "Under Attack" | SRE |
| Leak de credenciales | Rotar secrets afectados | Backend Lead |

**Fase 3: Erradicación (1-24h)**

- Identificar vector de ataque
- Parchar vulnerabilidad
- Verificar que no haya persistencia

**Fase 4: Recuperación y Post-Mortem (24-72h)**

| Paso | Plazo | Entregable |
| :---- | :---- | :---- |
| Restaurar servicios | 24h | Sistema operativo |
| Notificar afectados | 72h | Email + dashboard |
| Post-mortem escrito | 5 días | Documento interno |
| Mejoras implementadas | 30 días | Parches aplicados |

**Comunicación:**
- Incidentes internos: Slack #seguridad
- Incidentes públicos: Status page + email

────────────────────────────────────────────────────────────────────────────────

### **F-52: BUG BOUNTY POLICY (Saneamiento Epsilon-3)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | MEDIA |
| Módulo Impactado | Seguridad |

**Origen / Problema Identificado**

Escuadrón Epsilon identificó que no existe programa de bug bounty ni pentest manual programado.

**Decisión Aprobada**

Programa de Responsible Disclosure sin recompensa monetaria (proyecto sin fines de lucro).

**Alcance:**

| En Alcance | Fuera de Alcance |
| :---- | :---- |
| civicum.cl, api.civicum.cl | Phishing, social engineering |
| Vulnerabilidades web | DOS/DDOS |
| Auth y autorización | Spam |
| Inyección, XSS, CSRF | Vulnerabilidades en dependencias ya conocidas |

**Proceso de Reporte:**

1. Enviar email a security@civicum.cl
2. Incluir: descripción, pasos para reproducir, impacto
3. NO publicar hasta que se resuelva

**Compromisos de CIVICUM:**

| Compromiso | Plazo |
| :---- | :---- |
| Acuse de recibo | 48 horas |
| Evaluación inicial | 7 días |
| Fix para críticos | 30 días |
| Reconocimiento público | Hall of Fame |

**Reconocimientos:**

- Mención en página security.md
- Badge especial en perfil CIVICUM
- Agradecimiento en release notes

────────────────────────────────────────────────────────────────────────────────

### **F-53: DATA RETENTION POLICY (Saneamiento Zeta-1)**

**✅ APROBADO** | Fecha: 5 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Base de Datos, Privacidad |

**Origen / Problema Identificado**

Escuadrón Zeta identificó que no existe política de retención de datos documentada.

**Decisión Aprobada**

Política de retención diferenciada por tipo de dato y propósito.

**Tabla de Retención:**

| Tipo de Dato | Retención | Justificación | Acción al Vencer |
| :---- | :---- | :---- | :---- |
| Perfil de usuario | Mientras cuenta activa | Funcionalidad | Eliminación total |
| Reportes ciudadanos | 5 años | Valor histórico/legal | Anonimización |
| Votos/Karma | Mientras cuenta activa | Funcionalidad | Eliminación |
| Logs de autenticación | 1 año | Seguridad | Eliminación |
| Logs de aplicación | 90 días | Debugging | Eliminación |
| Analytics agregados | Indefinido | Métricas de impacto | N/A (anónimo) |
| Backups | 30 días | Disaster recovery | Rotación |

**Cuentas Inactivas:**

| Período de Inactividad | Acción |
| :---- | :---- |
| 1 año | Email de advertencia |
| 2 años | Segunda advertencia |
| 3 años | Anonimización de datos |

**Implementación Técnica:**
- Cron job mensual para verificar retención
- Tabla `data_retention_log` para auditoría
- Flag `anonymized` en tablas relevantes

────────────────────────────────────────────────────────────────────────────────

### **F-54: POLÍTICA DE REVERSIBILIDAD Y UNDO (Saneamiento Λ4-1/Λ4-2/Λ4-6)**

**✅ APROBADO** | Fecha: 15 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | BLOQUEANTE |
| Módulo Impactado | Todos los módulos con acciones de usuario |
| Origen Auditoría | Escuadrón 60 Lambda-Cuatro "El Dedo Gordo" — Hallazgos Λ4-1, Λ4-2, Λ4-6 |

**Origen / Problema Identificado**

Auditoría de Escuadrón Lambda-Cuatro detectó tres vulnerabilidades de usabilidad críticas:
1. No existe mecanismo de "Undo" (deshacer) para ninguna acción del usuario en toda la plataforma
2. No hay grace period (ventana de gracia) entre el toque del usuario y la ejecución real de acciones irreversibles
3. No existe soft-delete para contenido generado por usuarios — eliminar un reporte con validaciones ciudadanas es permanente

**Decisión Aprobada**

Implementar Política de Reversibilidad con mecanismos diferenciados por tipo de acción:

| Tipo de Acción | Mecanismo | Ventana | Implementación |
| :---- | :---- | :---- | :---- |
| Enviar reporte | Snackbar "Enviado" con botón [Deshacer] — delay de envío real 5s | 5 segundos | Grace period pre-envío |
| Votar | Pantalla de resumen pre-voto + "Cambiar voto" disponible 2h | 2 horas | Retractación con cooldown |
| Apoyar iniciativa | Toggle inmediato (on/off) | Siempre | Idempotente, sin consecuencia |
| Eliminar borrador | Soft-delete con flag `deleted_at` + restaurar | 30 días | Papelera con expiración |
| Eliminar reporte publicado | Soft-delete + confirmación con motivo | 30 días | Papelera + auditoría |
| Editar perfil | Historial de cambios recientes | 7 días | Log de cambios con rollback |
| Abandonar mesa | Confirmación con resumen de consecuencias | N/A | Dialog informativo |

**Componentes de Implementación**

* **Snackbar con Undo** (patrón Gmail/Slack): Componente global `<UndoSnackbar>` con barra de progreso de 5s, botón "DESHACER" de 48px touch target, auto-dismiss al completar el timer
* **Grace Period Engine**: Cola de acciones pendientes con timer configurable; la acción no se ejecuta en el servidor hasta que expire el grace period sin cancelación
* **Soft-Delete**: Flag `deleted_at TIMESTAMPTZ NULL` en tablas `reports`, `report_drafts`, `mesa_tasks`; query filter `WHERE deleted_at IS NULL` por defecto; endpoint `POST /api/v1/restore/{entity}/{id}` para restaurar
* **Papelera UI**: Sección "Eliminados recientemente" en perfil de usuario con lista de items eliminados y botón "Restaurar"
* **Idempotency Key**: Header `X-Idempotency-Key: {uuid}` obligatorio en requests POST mutantes; backend rechaza duplicados con HTTP 409

**Feature Flags**

* ENABLE\_UNDO\_SNACKBAR: true
* ENABLE\_GRACE\_PERIOD: true
* GRACE\_PERIOD\_REPORT\_MS: 5000
* ENABLE\_SOFT\_DELETE: true
* SOFT\_DELETE\_RETENTION\_DAYS: 30
* ENABLE\_IDEMPOTENCY\_KEY: true
* ENABLE\_VOTE\_RETRACTION: true
* VOTE\_RETRACTION\_WINDOW\_HOURS: 2

**Conexiones con Otras Decisiones**

* F-20 (Dignidad Digital): Respetar la agencia del usuario
* F-08 (Disyuntor Humano): Revisión humana para acciones críticas
* F-53 (Data Retention): Soft-delete alineado con política de retención de 30 días de backups
* F-02 (Honestidad Radical): Transparencia sobre ventanas de reversibilidad

────────────────────────────────────────────────────────────────────────────────

### **F-55: ESTÁNDAR DE PROXIMIDAD DE BOTONES OPUESTOS (Saneamiento Λ4-3)**

**✅ APROBADO** | Fecha: 15 Febrero 2026

| Campo | Valor |
| :---- | :---- |
| Severidad | ALTA |
| Módulo Impactado | Core / UI / Design System |
| Origen Auditoría | Escuadrón 60 Lambda-Cuatro — Hallazgo Λ4-3 |

**Origen / Problema Identificado**

Auditoría de Escuadrón Lambda-Cuatro detectó que en pantallas XS (360px), dos botones con acciones opuestas (ej: "Cancelar" + "Eliminar") tienen solo 8px de separación — margen insuficiente para evitar toques accidentales en el botón equivocado, especialmente para usuarios S4 (Mayor Cauteloso, 65+, Android Go).

**Decisión Aprobada**

Estándar obligatorio para pares de botones con acciones opuestas:

| Breakpoint | Layout obligatorio | Separación mínima | Orden |
| :---- | :---- | :---- | :---- |
| XS (360px) | Vertical (stacked) | 16px entre botones | Cancelar arriba, destructivo abajo |
| SM (480px) | Vertical (stacked) | 16px entre botones | Cancelar arriba, destructivo abajo |
| MD+ (768px+) | Horizontal permitido | 16px entre botones | Cancelar izquierda, destructivo derecha |

**Reglas de Diferenciación Visual Obligatorias:**

| Botón | Estilo | Fondo | Texto |
| :---- | :---- | :---- | :---- |
| Acción destructiva | `Destructive` | Terracota 700 | Blanco |
| Cancelar / Volver | `Ghost` | Transparente | Azul Profundo |

**Componentes de Implementación**

* CSS utility `.action-pair` con media queries para apilamiento automático en XS/SM
* Regla de lint (jest-axe custom rule): dos botones adyacentes con acciones opuestas deben tener gap ≥ 16px
* Documentación en Design System §7.11

**Feature Flags**

* ENABLE\_BUTTON\_PROXIMITY\_RULES: true
* MIN\_OPPOSITE\_BUTTON\_GAP\_PX: 16

**Conexiones con Otras Decisiones**

* F-09 (Coherencia de Marca): Consistencia visual
* F-20 (Dignidad): Evitar frustración por error accidental
* F-54 (Reversibilidad): Complementa — si el botón equivocado se toca pese al spacing, el undo protege

────────────────────────────────────────────────────────────────────────────────

# **CERTIFICACIÓN DE COMPLETITUD**

| Verificación | Estado |
| :---- | :---- |
| Decisiones Bloqueantes (F-01 a F-04) | 4/4 ✅ COMPLETO |
| Decisiones Alta Severidad (F-05 a F-09) | 5/5 ✅ COMPLETO |
| Decisiones Media Severidad (F-10 a F-12) | 3/3 ✅ COMPLETO |
| Decisiones Diciembre 2025 (F-13 a F-25) | 13/13 ✅ COMPLETO |
| Decisiones Enero 2026 Parte 1 (F-26 a F-35) | 10/10 ✅ COMPLETO |
| Decisiones Enero 2026 Parte 2 (F-36 a F-40) | 5/5 ✅ COMPLETO |
| Decisiones Técnicas (F-43 a F-47) | 5/5 ✅ COMPLETO |
| Decisiones Saneamiento (F-48 a F-53) | 6/6 ✅ ACTUALIZADO |
| Decisiones Lambda-Cuatro (F-54 a F-55) | 2/2 ✅ NUEVO |
| TOTAL DECISIONES | 53/55 DOCUMENTADAS\* |

*\*Nota: F-41 (Identidad Civia) y F-42 están reservadas pero no detalladas en la documentación fuente consultada.*

══════════════════════════════════════════════════  
**CIVICUM \- Sistema Nervioso Cívico de Chile**  
Anexo de Decisiones Aprobadas \- Febrero 2026 (Actualizado con F-55)  
══════════════════════════════════════════════════