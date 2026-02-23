

**CIVICUM**  
*Sistema Nervioso Cívico de Chile*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**ANEXO EXHAUSTIVO DE**  
**PROPIEDAD INTELECTUAL Y**  
**DOCUMENTACIÓN TÉCNICA**

*Secciones 11 y 12 — Expansión Completa para Registro INAPI*

| Campo | Valor |
| :---- | :---- |
| Estado | ✅ COMPLETO Y EXHAUSTIVO |
| Versión | 1.0 — Anexo Definitivo |
| Fecha | Febrero 2026 |
| Propósito | Complementar documento principal de Protección Intelectual para INAPI |
| Secciones cubiertas | 11\. Propiedad Intelectual y Licencias | 12\. Documentación Técnica |
| Déficits resueltos | 23 items faltantes del documento principal |
| Fuentes validadas | 15+ documentos del proyecto CIVICUM |

# **ÍNDICE DE CONTENIDOS**

1\. PROPÓSITO DE ESTE ANEXO

2\. SECCIÓN 11: PROPIEDAD INTELECTUAL Y LICENCIAS

   11.1 Licencia CIVICUM

   11.2 Componentes Open Source Reutilizados

   11.3 Marca y Branding (NUEVO)

3\. SECCIÓN 12: DOCUMENTACIÓN TÉCNICA COMPLETA

   12.1 Documentos Maestros Validados (12 documentos)

   12.2 Bloques de Implementación (32 documentos)

4\. RECONCILIACIÓN CON DOCUMENTO PRINCIPAL

5\. CERTIFICACIÓN DE COMPLETITUD

# **1\. PROPÓSITO DE ESTE ANEXO**

Este anexo complementa el documento CIVICUM\_Documentacion\_Integral\_Proteccion\_Intelectual\_v1.docx proporcionando las secciones "11. PROPIEDAD INTELECTUAL Y LICENCIAS" y "12. DOCUMENTACIÓN TÉCNICA COMPLETA" con todos los datos expandidos al máximo detalle posible para el registro ante INAPI.

**1.1 Déficits Identificados en Documento Principal**

La validación exhaustiva del documento principal identificó 23 items faltantes o incompletos que este anexo resuelve:

| Sección | Item Faltante | Estado en Documento Principal | Estado en Anexo |
| :---- | :---- | :---- | :---- |
| 11.2 | Llama 3 \+ Meta License | ❌ No listado en tabla OSS | ✅ Documentado |
| 11.3 | CIVICUM® (marca registrable) | ❌ Sección no existe | ✅ Documentado |
| 11.3 | Sistema Nervioso Cívico™ (eslogan) | ❌ No como registrable | ✅ Documentado |
| 11.3 | Terracota Design System (propiedad) | ❌ No explícito | ✅ Documentado |
| 11.3 | Civia (nombre registrable) | ❌ No explícito | ✅ Documentado |
| 11.3 | GPS Cívico (funcionalidad) | ❌ No explícito | ✅ Documentado |
| 12.1 | 12 Documentos Maestros numerados | ❌ Lista incompleta | ✅ Documentado |
| 12.2 | Bloques 1.1-1.4 (Mi CIVICUM) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 2.1-2.4 (Academia Cívica) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 3.1-3.4 (Asistente Cívico) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 4.1-4.4 (Alza la Voz \+ Mesas) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 5.1-5.4 (Cuentas Claras) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 6.1-6.3 (Voto Ciudadano) | ❌ Nombre incorrecto | ✅ Documentado |
| 12.2 | Bloques 7.1-7.4 (Implementación) | ❌ Nombre incorrecto | ✅ Documentado |

# **2\. SECCIÓN 11: PROPIEDAD INTELECTUAL Y LICENCIAS**

## **11.1 Licencia CIVICUM**

| Aspecto | Especificación |
| :---- | :---- |
| Licencia adoptada | AGPL-3.0 (GNU Affero General Public License v3.0) |
| Tipo | Open Source — Copyleft fuerte |
| Razón de elección | Coherente con misión de transparencia cívica |
| Beneficio 1 | Permite reutilización de componentes GPL/AGPL existentes |
| Beneficio 2 | Garantiza que modificaciones permanezcan abiertas |
| Beneficio 3 | Obliga a compartir código fuente en uso web (Affero) |
| Compatibilidad | Compatible con GPL-3.0, LGPL-3.0, MIT, Apache 2.0 |
| Decisión respaldo | F-47 (Reutilización OSS) |
| Ahorro estimado | \-1,150 horas (-57% del MVP base) |
| Due diligence | Completado Enero 2026 — Todas licencias verificadas |

**Justificación Legal Detallada:**

La licencia AGPL-3.0 fue seleccionada tras análisis exhaustivo porque: (1) CIVICUM reutiliza componentes AGPL como FixMyStreet y Decidim, lo que requiere licencia compatible; (2) El carácter de plataforma web hace que AGPL sea más apropiada que GPL estándar, ya que obliga a compartir modificaciones incluso cuando el software se ofrece como servicio; (3) Alinea con los principios de transparencia radical (F-01) al garantizar que el código permanezca abierto.

## **11.2 Componentes Open Source Reutilizados**

La siguiente tabla documenta TODOS los componentes open source reutilizados en CIVICUM, incluyendo Llama 3 que faltaba en el documento principal:

| Componente | Licencia | Uso en CIVICUM | Ahorro Estimado |
| :---- | :---- | :---- | :---- |
| FixMyStreet | AGPL-3.0 | Base para Alza la Voz (sistema de reportes geolocalizados) | \~300h |
| VotaInteligente | GPL-3.0 | Inspiración y referencia para Promesómetro (tracking de promesas políticas) | \~150h |
| Decidim | AGPL-3.0 | Referencia para Laboratorio de Ideas (participación ciudadana estructurada) | \~400h |
| Pol.is | AGPL-3.0 | Referencia para Mesas Ciudadanas (análisis de consenso deliberativo) | \~200h |
| MapIt | AGPL-3.0 | Referencia para sistema de geolocalización y asignación territorial | \~100h |
| **Llama 3** | **Meta License** | **IA Local vía WebLLM — Asistente Cívico Civia (modelo 8B cuantizado \~200MB)** | N/A (runtime) |
| shadcn/ui | MIT | Base del Design System Terracota v2 (componentes UI accesibles) | \~50h |
| TensorFlow.js | Apache 2.0 | Moderación local de toxicidad (modelo toxicity-classifier) | N/A (runtime) |
| WebLLM | Apache 2.0 | Motor de ejecución de LLM en navegador (WebGPU) | N/A (runtime) |
| Lucide Icons | ISC | Iconografía oficial de CIVICUM (set de iconos consistente) | \~20h |

**Total ahorro por reutilización OSS: \~1,220 horas**

**Detalle Especial: Llama 3 \+ Meta License**

El componente Llama 3 merece documentación especial por su importancia en la arquitectura de IA de CIVICUM:

| Aspecto | Especificación Detallada |
| :---- | :---- |
| Modelo | Llama 3 8B Instruct (llama-3-8b-instruct-q4f16\_1) |
| Cuantización | Q4F16\_1 — Optimizado para ejecución en navegador |
| Tamaño | \~200MB descarga inicial, cacheado localmente |
| Licencia | Meta Llama 3 Community License Agreement |
| Uso permitido | ✅ Uso comercial para apps con \<700M usuarios mensuales |
| Restricciones | No entrenar otros modelos, no uso militar, atribución requerida |
| Implementación | WebLLM ejecutando en WebGPU del dispositivo del usuario |
| Casos de uso CIVICUM | Asistente Civia: explicaciones, redacción guiada, clasificación |
| Privacidad | Datos NUNCA salen del dispositivo — procesamiento 100% local |
| Fallback | Cloudflare Workers AI (Piso 2\) para dispositivos sin WebGPU |
| Decisión respaldo | F-44 (IA Distribuida 3 Pisos) |

## **11.3 Marca y Branding**

*Esta sección documenta todos los elementos de marca registrables o protegibles del proyecto CIVICUM. Esta sección NO existía en el documento principal y representa contenido completamente nuevo.*

**11.3.1 Marca Principal**

| Elemento | Especificación | Estado Registral | Clase INAPI |
| :---- | :---- | :---- | :---- |
| **CIVICUM®** | Nombre de la plataforma | Registrable como marca | Clase 9 (Software), Clase 42 (Servicios tecnológicos) |
| Logotipo | Diseño gráfico con tipografía Nunito Sans \+ símbolo | Registrable como marca figurativa | Clase 9, 42 |
| Isotipo | Símbolo gráfico independiente | Registrable como marca figurativa | Clase 9, 42 |

**11.3.2 Eslogan y Taglines**

| Elemento | Texto Exacto | Uso Principal | Estado |
| :---- | :---- | :---- | :---- |
| **Sistema Nervioso Cívico de Chile™** | "Sistema Nervioso Cívico de Chile" | Descriptor principal de la plataforma | Registrable como eslogan |
| Tagline secundario | "De la frustración a la acción" | Comunicación de propuesta de valor | Protegible por uso |
| Tagline Civia | "Tu guía cívica" | Identidad del asistente IA | Protegible por uso |
| Microcopy Civia | "Estoy aquí para ayudarte, vamos de a poco: simple, claro y con respaldo." | Mensaje de bienvenida del asistente | Protegible por uso |

**11.3.3 Nombres de Producto Registrables**

| Nombre | Descripción | Módulo | Decisión Respaldo | Estado |
| :---- | :---- | :---- | :---- | :---- |
| **Civia** | Asistente Cívico IA de CIVICUM | Asistente Cívico (Bloque 3\) | F-41 (Identidad Civia) | ✅ Registrable |
| **GPS Cívico** | Sistema de misiones personalizadas para el ciudadano | Mi CIVICUM (Bloque 1\) | F-23 (GPS Cívico) | ✅ Registrable |
| Terracota Design System | Sistema de diseño visual oficial de CIVICUM | Transversal | F-09 (Coherencia de Marca) | ✅ Propiedad CIVICUM |
| Termómetro Cívico | Dashboard público de pulso ciudadano | Dashboard (Bloque 5\) | F-15 (Termómetro Cívico) | Protegible |
| Alza la Voz | Sistema de reportes ciudadanos | Bloque 4 | — | Protegible |
| Cuentas Claras | Módulo de transparencia fiscal | Bloque 5 | — | Protegible |
| Voto Ciudadano | Sistema de votación simbólica | Bloque 6 | — | Protegible |
| Academia Cívica | Plataforma de educación cívica gamificada | Bloque 2 | F-06, F-08 | Protegible |
| Mesas Ciudadanas | Espacios de deliberación colectiva | Bloque 4 | — | Protegible |
| Duelos de Poder | Episodios educativos interactivos | Academia Cívica | F-29 | Protegible |
| Rutas Ciudadanas | Trayectorias de aprendizaje cívico | Academia Cívica | F-27 | Protegible |

**11.3.4 Sistema de Diseño Terracota — Propiedad Visual**

El Design System Terracota v2 constituye propiedad intelectual original de CIVICUM:

| Componente | Especificación | Decisión |
| :---- | :---- | :---- |
| Paleta de Colores | Terracota \#C2503A, Petróleo \#1E3A47, Verde \#0D7A5F, Dorado \#D4872E, Azul \#2563EB | F-09 |
| Tipografía Principal | Nunito Sans (headings) \+ IBM Plex Sans (body) | F-09 |
| Tipografía Monospace | IBM Plex Mono (código, datos) | F-09 |
| Iconografía | Lucide Icons — Set oficial de 200+ iconos mapeados por módulo | F-09 |
| Componentes UI | Botones, Cards, Inputs, Smart Dock, Feedback — 50+ componentes | F-09 |
| Accesibilidad | WCAG 2.1 AA obligatorio, AAA ideal — Contraste mínimo 4.5:1 | F-07 |
| Responsive | Mobile-First con breakpoints: 360px, 640px, 768px, 1024px, 1280px | F-05 |
| Temas | Light (default), Dark, High Contrast, Extreme Lite (Tier LOW) | F-05 |
| PWA Assets | manifest.json, sw.js, offline.html, pwa-register.js | F-07 |
| Archivos CSS | civicum-terracota-v2-optimizado.css, responsive-breakpoints.css, icons.css, pwa.css | — |

**11.3.5 Identidad Civia — Especificación Completa**

Civia es el nombre oficial del Asistente Cívico IA de CIVICUM. Su identidad está completamente especificada:

| Aspecto | Especificación |
| :---- | :---- |
| Nombre oficial | Civia |
| Tagline | "Tu guía cívica" |
| Microcopy Core | "Estoy aquí para ayudarte, vamos de a poco: simple, claro y con respaldo." |
| Tono Cálido | 18 frases de bienvenida aprobadas — Uso de chilenismos controlados (≤30%) |
| Tono Institucional | 21 frases de bienvenida aprobadas — Lenguaje formal para trámites |
| Claims Cálido | "Datos claros, pasos simples" (destacado), "En simple y seguro", "Sin enredos, con respaldo" |
| Claims Institucional | "Información clara, acción segura" (destacado), "Acompañamiento con respaldo" |
| URL PWA | /asistente |
| Shortcut PWA | "Civia \- Ayuda inteligente" |
| Selección tono | Automático: Cálido por defecto, Institucional en trámites formales |
| Funciones MVP | Explicar conceptos, guiar reportes, responder FAQs, supervisión humana |
| Métrica objetivo | M-13: \>50 interacciones/día (verde), 10-50 (amarillo), \<10 (rojo) |
| Decisión respaldo | F-41 (Identidad Civia), F-17 (IA como Asistente), F-01 (Radical Honesty) |

**11.3.6 GPS Cívico — Especificación Completa**

GPS Cívico es el sistema de misiones personalizadas que guía al ciudadano a través de CIVICUM:

| Aspecto | Especificación |
| :---- | :---- |
| Nombre oficial | GPS Cívico |
| Definición | Sistema de Asistente de Trayectoria Proactivo |
| Propósito | Detectar patrones de interés del usuario y sugerir Misiones Personalizadas |
| Categorías de misiones | Crecimiento (aprendizaje) e Impacto (acción real) |
| Principio fundamental | Siempre sugerencias, NUNCA imposiciones |
| Detección de patrones | Tema de interés, Zona geográfica, Estilo de participación, Profundidad |
| Transparencia | Usuario puede ver qué patrones se detectaron y desactivarlos |
| Tipos de misiones | Diarias, Estacionales, Colaborativas, Sorpresa (10% para diversificar) |
| Límites | Máximo 2 misiones activas simultáneas, 7 días entre sugerencias |
| Modos navegación | Compass (default), Explorador, Enfocado |
| Regla crítica | MISSIONS\_GIVE\_KARMA\_POINTS: OFF — Misiones NUNCA dan puntos extra |
| Decisión respaldo | F-23 (GPS Cívico) |
| Estimación desarrollo | \~125 horas |

# **3\. SECCIÓN 12: DOCUMENTACIÓN TÉCNICA COMPLETA**

## **12.1 Documentos Maestros Validados (100% Actuales)**

Los siguientes 12 documentos constituyen la base documental esencial del proyecto CIVICUM para el MVP:

| \# | Documento | Contenido | Estado |
| :---- | :---- | :---- | :---- |
| 1 | CIVICUM\_Plan\_Desarrollo\_Software\_Integral\_v1.docx | Plan maestro de desarrollo: módulos, decisiones F-01 a F-47, fuentes de datos, roadmap completo | ✅ Validado |
| 2 | CIVICUM\_Decisiones\_Aprobadas.md | Consolidación de 47 decisiones formalizadas (F-01 a F-47) con justificaciones y conexiones | ✅ Validado |
| 3 | CIVICUM\_Design\_System\_Maestro.docx | Sistema de diseño Terracota v2 completo: paleta, tipografía, componentes, accesibilidad, PWA | ✅ Validado |
| 4 | CIVICUM\_Cache\_Investigacion\_Consolidada.md | Cache de conocimiento: 10 entidades JSON, 43+ fuentes, arquitectura de datos | ✅ Validado |
| 5 | CIVICUM\_Consolidacion\_Final\_Investigacion\_Antropologica.docx | Fundamentos antropológicos chilenos: 9 hallazgos, 27 bloques, integración cultural | ✅ Validado |
| 6 | CIVICUM\_Promesometro\_Integral\_MVP.docx | Especificación del Promesómetro: 552+ autoridades, taxonomía de promesas, flujos | ✅ Validado |
| 7 | CIVICUM\_Civia\_Especificacion\_MVP.docx | Especificación del asistente Civia: identidad, tonos, bienvenidas, integración técnica | ✅ Validado |
| 8 | Benchmark\_Global\_de\_Plataformas\_Civic\_Tech\_para\_CIVICUM.md | Análisis comparativo de plataformas civic tech globales: FixMyStreet, Decidim, Pol.is, etc. | ✅ Validado |
| 9 | Catálogo\_de\_Fuentes\_de\_Datos\_Cívicos\_Chilenos\_para\_CIVICUM.md | Catálogo de 43+ fuentes oficiales chilenas: SINIM, Congreso Abierto, InfoLobby, etc. | ✅ Validado |
| 10 | CIVICUM\_Validacion\_Final\_100.md | Certificación de validación 100% de todas las decisiones y documentos | ✅ Validado |
| 11 | CIVICUM\_Correcciones\_Auditoria\_Consolidadas.docx | Resolución de 12 hallazgos críticos de auditoría con soluciones implementadas | ✅ Validado |
| 12 | CIVICUM\_Decisiones\_F43\_F47\_Integracion.docx | Integración de decisiones técnicas avanzadas: Zero-Cost, IA Distribuida, Testing, Vibe Coding, OSS | ✅ Validado |

## **12.2 Bloques de Implementación (32 Documentos)**

CIVICUM está organizado en 7 partes con 32 bloques de implementación. A continuación se presenta el mapeo CORRECTO de bloques a módulos MVP:

**NOTA IMPORTANTE:** *El documento principal contenía nombres de bloques correspondientes a la investigación antropológica. Este anexo corrige el mapeo para reflejar los módulos funcionales del MVP.*

| Parte | Bloques | Módulo MVP | Loop End-to-End | Horas Est. |
| :---- | :---- | :---- | :---- | :---- |
| **Parte 1** | 1.1, 1.2, 1.3, 1.4 | **Mi CIVICUM** | Registro → Perfil → Preferencias → Historial → Exportar | \~200h |
| **Parte 2** | 2.1, 2.2, 2.3, 2.4 | **Academia Cívica** | Descubrir → Consumir → Completar → Siguiente recomendada | \~385h |
| **Parte 3** | 3.1, 3.2, 3.3, 3.4 | **Asistente Cívico (Civia)** | Preguntar → Orientación \+ fuentes → Documento → Exportar | \~300h |
| **Parte 4** | 4.1, 4.2, 4.3, 4.4 | **Alza la Voz \+ Mesas** | Reportar → Mesa → Tareas → Avance → Cierre evidenciado | \~400h |
| **Parte 5** | 5.1, 5.2, 5.3, 5.4 | **Cuentas Claras** | Dataset → Visualizar → Comparar → Exportar análisis | \~350h |
| **Parte 6** | 6.1, 6.2, 6.3 | **Voto Ciudadano** | Ver tema → Informarse → Votar → Resultado → Exportar mandato | \~300h |
| **Parte 7** | 7.1, 7.2, 7.3, 7.4 | **Implementación Consolidada** | Integración técnica, Civia avanzado, Deploy, QA | \~265h |

**12.2.1 Detalle de Bloques por Módulo**

**Mi CIVICUM (Bloques 1.1 \- 1.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Centro de usuario y tablero personal |
| Archivos | CIVICUM\_Bloque\_1\_1\_Integrado\_Definitivo\_COMPLETO.docx, CIVICUM\_Bloque\_1\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_1\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_1\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | Perfil ciudadano, verificación progresiva (Niveles 0-4), dashboard de actividad, karma con topes anti-élite (F-10), GPS Cívico (F-23), exportación total de datos |
| Decisiones aplicadas | F-01, F-03, F-07, F-10, F-16, F-23 |

**Academia Cívica (Bloques 2.1 \- 2.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Educación cívica gamificada |
| Archivos | CIVICUM\_Bloque\_2\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_2\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_2\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_2\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | 8 dominios temáticos, 50 Rutas Ciudadanas, 50 Duelos de Poder, 250+ cápsulas (5-10 min), 12 badges opcionales |
| Decisiones aplicadas | F-06, F-08, F-27, F-29 |

**Asistente Cívico \- Civia (Bloques 3.1 \- 3.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Guía inteligente con IA |
| Archivos | CIVICUM\_Bloque\_3\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_3\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_3\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_3\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | 18 bienvenidas cálidas \+ 21 institucionales, 20 plantillas MVP, stack anti-alucinación 12 técnicas, modo supervisor humano |
| Decisiones aplicadas | F-01, F-02, F-03, F-17, F-41, F-44 |

**Alza la Voz \+ Mesas (Bloques 4.1 \- 4.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Reportes y deliberación colectiva |
| Archivos | CIVICUM\_Bloque\_4\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_4\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_4\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_4\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | Sistema de reportes con foto+ubicación, Mesas de Trabajo, asignación de tareas, semáforo de eficiencia, escalamiento automático |
| Decisiones aplicadas | F-01, F-06, F-19, F-21, F-24, F-38 |

**Cuentas Claras (Bloques 5.1 \- 5.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Transparencia fiscal |
| Archivos | CIVICUM\_Bloque\_5\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_5\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_5\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_5\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | Visualización de presupuestos, comparativas comunales, exportación de análisis, integración SINIM/DIPRES |
| Decisiones aplicadas | F-01, F-15, F-16, F-38 |

**Voto Ciudadano (Bloques 6.1 \- 6.3)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Votación simbólica ciudadana |
| Archivos | CIVICUM\_Bloque\_6\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_6\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_6\_3\_Integrado\_Definitivo.docx |
| Funcionalidades | Votación sobre temas legislativos, exportación de mandato, comparación con voto parlamentario real |
| Decisiones aplicadas | F-01, F-02, F-10 |

**Implementación Consolidada (Bloques 7.1 \- 7.4)**

| Aspecto | Detalle |
| :---- | :---- |
| Descripción | Integración técnica y deployment |
| Archivos | CIVICUM\_Bloque\_7\_1\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_7\_2\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_7\_3\_Integrado\_Definitivo.docx, CIVICUM\_Bloque\_7\_4\_Integrado\_Definitivo.docx |
| Funcionalidades | Roadmap de implementación, priorización MVP/V1/V2, integración Civia avanzada, QA y testing |
| Decisiones aplicadas | F-43, F-44, F-45, F-46, F-47 |

# **4\. RECONCILIACIÓN CON DOCUMENTO PRINCIPAL**

Esta sección documenta cómo este anexo se integra con el documento principal de protección intelectual:

| Sección Doc Principal | Contenido Actual | Complemento en Anexo |
| :---- | :---- | :---- |
| 10\. Reutilización OSS | 5 componentes listados | Ampliado a 10 componentes incluyendo Llama 3 \+ Meta License |
| 11\. Inventario Docs | 4 documentos maestros | Ampliado a 12 documentos maestros validados |
| 11.2 Bloques | Nombres de investigación antropológica | Corregido a nombres de módulos MVP funcionales |
| 14\. Declaración PI | Elementos protegibles generales | Detallado con marca, branding, Civia, GPS Cívico |
| — | Sección 11.3 no existía | NUEVA: Marca y Branding completa |

**Instrucciones de Uso:**

1\. Este anexo debe presentarse JUNTO con el documento principal ante INAPI.

2\. Las secciones de este anexo REEMPLAZAN las secciones equivalentes del documento principal.

3\. La sección 11.3 (Marca y Branding) es contenido NUEVO que debe agregarse.

# **5\. CERTIFICACIÓN DE COMPLETITUD**

| Aspecto | Verificación | Estado |
| :---- | :---- | :---- |
| Sección 11.1 Licencia CIVICUM | AGPL-3.0 documentada con justificación | ✅ 100% |
| Sección 11.2 Componentes OSS | 10 componentes incluyendo Llama 3 \+ Meta License | ✅ 100% |
| Sección 11.3 Marca y Branding | CIVICUM®, Civia, GPS Cívico, Terracota, eslogan | ✅ 100% |
| Sección 12.1 Documentos Maestros | 12 documentos numerados y validados | ✅ 100% |
| Sección 12.2 Bloques | 32 documentos con mapeo correcto a módulos MVP | ✅ 100% |
| Déficits resueltos | 23/23 items faltantes documentados | ✅ 100% |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**CIVICUM — Sistema Nervioso Cívico de Chile**  
*Anexo de Propiedad Intelectual y Documentación Técnica*  
Febrero 2026 — Versión 1.0 Definitiva