

**CIVICUM**  
*Sistema Nervioso Cívico de Chile*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**ANEXO MASIVO:**  
**PROTECCIÓN SOLICITADA Y**  
**DECLARACIÓN DE ORIGINALIDAD**

*Secciones 13 y 14 — Especificación Exhaustiva para Registro INAPI*

| Campo | Valor |
| :---- | :---- |
| Estado | ✅ COMPLETO Y EXHAUSTIVO |
| Versión | 1.0 — Anexo Definitivo |
| Fecha | Febrero 2026 |
| Propósito | Complementar secciones 13 y 14 del documento principal de Protección Intelectual |
| Secciones documentadas | 13\. Protección Solicitada \+ 14\. Declaración de Originalidad |
| Items documentados | 32 items expandidos exhaustivamente |
| Formato | Solicitud formal de registro de derechos de autor |

# **ÍNDICE DE CONTENIDOS**

13\. PROTECCIÓN SOLICITADA

   13.1 Software y Código (6 elementos)

   13.2 Contenido y Metodologías (8 elementos)

   13.3 Documentación Técnica (6 elementos)

   13.4 Marca y Diseño (6 elementos)

14\. DECLARACIÓN DE ORIGINALIDAD

   14.1 Declaraciones Formales (6 declaraciones)

   14.2 Certificación Final

# **13\. PROTECCIÓN SOLICITADA**

Se solicita registro de derechos de autor sobre los siguientes elementos originales del proyecto CIVICUM:

## **13.1 Software y Código**

Se solicita protección sobre todo el software, código fuente y arquitectura técnica de CIVICUM:

**13.1.1 Plataforma CIVICUM Completa (6 Módulos \+ Expansiones)**

| Módulo | Componentes | Funcionalidad | Líneas Est. |
| :---- | :---- | :---- | :---- |
| Mi CIVICUM | Onboarding, Perfil, Dashboard, GPS Cívico, Karma | Centro de usuario con verificación progresiva y misiones personalizadas | \~15,000 |
| Academia Cívica | 50 Rutas, 50 Duelos, 250+ Cápsulas, 12 Badges | Educación cívica gamificada con microlearning y certificaciones | \~25,000 |
| Asistente Cívico (Civia) | IA 3 Capas, 50+ Plantillas, RAG, Anti-alucinación | Guía inteligente con generación de documentos verificados | \~30,000 |
| Alza la Voz \+ Mesas | Reportes geolocalizados, Deliberación, Escalamiento | Participación ciudadana con seguimiento y organización colectiva | \~20,000 |
| Cuentas Claras | 43+ Fuentes, Visualizaciones, Comparador territorial | Transparencia presupuestaria con análisis accesible | \~18,000 |
| Voto Ciudadano | VotingCard, Match Parlamentario, Promesómetro | Democracia paralela con votación simbólica verificable | \~15,000 |
| **TOTAL ESTIMADO** | **6 módulos \+ expansiones** | **Plataforma cívica integral** | **\~123,000** |

**13.1.2 Arquitectura de IA Distribuida (3 Capas)**

| Capa | Tecnología | Funcionalidad | Componentes |
| :---- | :---- | :---- | :---- |
| Capa 0 — Sin LLM | Plantillas \+ Reglas \+ Wizards | 50+ plantillas legales, 20+ formularios guiados, FAQs pre-cacheadas, árboles de decisión | \~8,000 líneas |
| Capa 1 — IA Local | WebLLM (Llama 3 8B) \+ TensorFlow.js | Procesamiento 100% en dispositivo, moderación local, text-to-SQL, clasificación, interfaz de voz | \~12,000 líneas |
| Capa 2 — IA Nube | Cloudflare Workers AI | Fallback para dispositivos sin WebGPU, tareas complejas, caché semántico | \~5,000 líneas |
| Router de Hardware | Detección automática de tier | Selección óptima HIGH/MEDIUM/LOW según capacidades del dispositivo | \~3,000 líneas |

**Detalle Capa 0 — Sin LLM**

• 50+ plantillas legales/administrativas: Oficios, cartas, solicitudes de transparencia, recursos de protección, denuncias CGR, solicitudes OIRS

• 20+ formularios guiados (wizards): Recolección estructurada paso a paso sin necesidad de IA

• 100+ FAQs pre-cacheadas: Respuestas verificadas a preguntas frecuentes sobre trámites cívicos

• 15+ árboles de decisión: Flujos condicionales para guiar al usuario según su situación específica

• Visualizaciones directas: Gráficos y tablas precalculados que no requieren procesamiento LLM

**Detalle Capa 1 — IA Local**

• WebLLM: Llama 3 8B cuantizado (\~200MB), ejecuta en navegador usando WebGPU, descarga inicial cacheada

• TensorFlow.js: Modelo toxicity-classifier para moderación local pre-envío de comentarios

• Web Speech API: Dictado (speech-to-text) y lectura en voz alta (text-to-speech) para accesibilidad

• Text-to-SQL: Traduce preguntas naturales a consultas seguras, IA NUNCA inventa números

• Clasificación de reportes: Categorización automática por tipo, urgencia y autoridad responsable

• Reescritura de texto: Mejora de redacción manteniendo intención original del usuario

**Detalle Capa 2 — IA Nube**

• Cloudflare Workers AI: 10,000 'neuronas' gratis/día, modelos Llama/Mistral en el edge

• Uso restringido: Solo cuando Capa 0 y Capa 1 no pueden resolver la tarea

• Caché semántico: Respuestas similares se cachean para reducir llamadas y costos

• Control de cuota: Límites configurables para evitar costos inesperados ($0/mes objetivo)

• Tareas complejas: Resúmenes largos, análisis de documentos extensos, generación avanzada

**13.1.3 Sistema de Knowledge Cache (8 Docs, 10 Entidades, 50 Misiones)**

| Componente | Cantidad | Descripción |
| :---- | :---- | :---- |
| Documentos de Investigación | 8 | Taxonomía, Fuentes, Esquemas, Benchmark, Roadmap, Gaps, Validación, Consolidado |
| Entidades de Datos | 10 | Comuna, Autoridad, Institución, Proceso, Derecho, FAQ, Término, Evento, Cápsula, Plantilla |
| Misiones GPS Cívico | 50 | Catálogo completo de misiones de Crecimiento e Impacto personalizadas |
| Campos por Entidad | \~150 | Esquemas JSON completos con validación, metadatos y relaciones |
| Items de Conocimiento | \~7,560 | Taxonomía de 8 dominios cívicos con contenido estructurado |
| Fuentes Oficiales | 43+ | APIs y datos de gobierno integrados (SINIM, Congreso, InfoLobby, etc.) |

**Las 10 Entidades del Knowledge Cache**

| \# | Entidad | Campos | Items Estimados | Descripción |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Comuna | 18 | 346 | Información territorial de todas las comunas de Chile |
| 2 | Autoridad | 21 | \~2,850 | Alcaldes, concejales, diputados, senadores, ministros |
| 3 | Institución | 19 | \~200 | Entidades gubernamentales con competencias y contactos |
| 4 | Proceso Cívico | 22 | \~50 | Trámites ciudadanos con pasos, plazos y requisitos |
| 5 | Derecho | 15 | \~100 | Derechos fundamentales con base legal y ejemplos |
| 6 | FAQ | 16 | \~150 | Preguntas frecuentes con respuestas verificadas |
| 7 | Término | 13 | \~150 | Glosario cívico con definiciones accesibles |
| 8 | Evento Cívico | 14 | \~50 | Calendario de eventos relevantes para ciudadanos |
| 9 | Cápsula | 18 | 100-250 | Contenido educativo de Academia Cívica |
| 10 | Plantilla | 16 | 20-80 | Documentos pre-estructurados para trámites |

**Las 50 Misiones GPS Cívico**

| Categoría | Cantidad | Ejemplos |
| :---- | :---- | :---- |
| Onboarding y Perfil | 10 | Completa tu perfil, Conoce tu ecosistema de poder, Primera exportación de datos |
| Academia Cívica | 8 | Primera cápsula, Ruta de tres poderes, Quiz de derechos ciudadanos |
| Alza la Voz \+ Mesas | 8 | Primer reporte, Apoya un vecino, Participa en Mesa Ciudadana |
| Asistente Cívico | 8 | Primera pregunta a Civia, Genera documento, Consulta tus derechos |
| Cuentas Claras | 9 | Explora presupuesto de tu comuna, Compara con comunas similares, Fiscaliza contrato |
| Voto Ciudadano | 8 | Primer voto simbólico, Match parlamentario, Exporta mandato ciudadano |
| Misiones Colaborativas | 5 | Ayuda a usuario nuevo, Prepárate para elección, Expediente de evidencia completo |

**13.1.4 Pipelines de Automatización (ETLs, Scrapers, Alertas)**

| Pipeline | Tecnología | Frecuencia | Fuentes |
| :---- | :---- | :---- | :---- |
| sinim\_extractor | R (sinimr) | Anual (marzo) | SINIM: 346 comunas, 24 años, 9 áreas |
| congress\_extractor | Python \+ requests | Diario | Cámara de Diputados, Senado: proyectos, votaciones |
| bcn\_extractor | Python \+ SPARQL | Semanal | Ley Chile, SIIT: normativa vigente |
| transparency\_extractor | Python \+ REST/SPARQL | Semanal | InfoLobby, InfoProbidad: transparencia autoridades |
| budget\_extractor | Python \+ API | Mensual | Presupuesto Abierto, DIPRES: datos transaccionales |
| municipal\_scraper | Python \+ Scrapy | Trimestral | 346 portales municipales: contactos, noticias |
| alert\_checker | Node.js \+ cron | Diario | Verificación de cambios en fuentes críticas |

**Características de los Pipelines**

• Arquitectura ETL: Extract-Transform-Load con validación de esquemas JSON

• GitHub Actions: Jobs programados con baja frecuencia para respetar límites de APIs

• Logs estructurados: Tabla scraper\_logs con status, records\_ingested, error\_message

• Fallback automático: Si extracción falla, se mantienen datos anteriores con aviso

• Pipeline PDF \+ OCR: Tesseract para documentos escaneados \+ LLM para estructurar

• Monitoreo: Grafana Cloud free tier para alertas de fallos

• Gobernanza: Catálogo data\_sources con URL, tipo, frecuencia, última ingesta

**13.1.5 Design System Terracota Completo**

| Componente | Especificación | Cantidad |
| :---- | :---- | :---- |
| Paleta de Colores | \#C2503A (Terracota), \#264653 (Azul Profundo), \#0D7A5F (Verde), \#2563EB (Azul Protección), \#D4872E (Dorado) | 5 primarios \+ escalas |
| Tipografía | Inter Variable (400-700), Source Serif Pro (400, 600, 700\) | 2 familias |
| Componentes UI | Botones, Cards, Forms, Modals, Navigation, Tables, Alerts, Badges | 50+ componentes |
| Iconografía | Lucide React \+ iconos personalizados CIVICUM | 50+ iconos |
| Breakpoints | Mobile: 320px, Tablet: 768px, Desktop: 1024px, Large: 1440px | 4 breakpoints |
| Espaciado | Sistema de 4px base (4, 8, 12, 16, 24, 32, 48, 64\) | 8 valores |
| Sombras | sm, md, lg, xl con offset y blur definidos | 4 niveles |
| Accesibilidad | WCAG 2.1 AA mínimo, AAA objetivo, contraste 4.5:1+ | 100% cobertura |

**13.1.6 Todos los Componentes, Funciones y Procesos Descritos**

| Categoría | Componentes | Cantidad Est. |
| :---- | :---- | :---- |
| Componentes React | Pages, Layouts, Forms, Cards, Modals, Navigation, Data Display | 150+ |
| Hooks personalizados | useOffline, useAuth, useCivia, useGPS, useKarma, useVote | 30+ |
| Servicios | AuthService, CacheService, SyncService, NotificationService, ExportService | 20+ |
| Utils | Formatters, Validators, Parsers, Converters, Helpers | 50+ |
| APIs internas | REST endpoints para todos los módulos | 80+ |
| Workers | Service Worker, Background Sync, Push Notifications | 5+ |
| Tests | Unit, Integration, E2E con Vitest y Playwright | 500+ |

## **13.2 Contenido y Metodologías**

Se solicita protección sobre todo el contenido educativo, metodologías y sistemas de gamificación originales:

**13.2.1 50 Rutas Ciudadanas (Academia Cívica)**

| Dominio | Rutas MVP | Descripción | Formato |
| :---- | :---- | :---- | :---- |
| D1: Democracia | 6 | Tres poderes, Constitución, historia electoral chilena | 5-10 min cada una |
| D2: Derechos | 6 | Derechos fundamentales, mecanismos de protección | Microlearning |
| D3: Participación | 7 | Plebiscitos, consultas, presupuestos participativos | Stories interactivas |
| D4: Transparencia | 6 | Ley de acceso, portales, cómo solicitar información | Cards deslizables |
| D5: Territorio | 7 | Municipios, GORE, descentralización, urbanismo | Quizzes integrados |
| D6: Justicia | 6 | Sistema judicial, mediación, defensoría ciudadana | Deep links a acción |
| D7: Economía | 6 | Presupuestos, impuestos, gasto público, contraloría | Certificados PDF |
| D8: Medioambiente | 6 | Regulación ambiental, evaluación de impacto | Badges opcionales |

**Estructura de Cada Ruta Ciudadana**

• Objetivo de aprendizaje: Meta clara y verificable al final de la ruta

• Prerequisitos: Rutas previas recomendadas (no obligatorias)

• Cápsulas incluidas: 3-7 cápsulas de diferentes tipos (A-E)

• Quiz final: Evaluación con feedback inmediato (80% para aprobar)

• Artefacto generado: Certificado PDF exportable con código QR de verificación

• Conexión con acción: Link directo a módulo donde aplicar lo aprendido

• Tiempo estimado: 15-45 minutos dependiendo de complejidad

**13.2.2 50 Duelos de Poder (Episodios Educativos)**

| Temporada | Episodios | Tema Central | Formato |
| :---- | :---- | :---- | :---- |
| T1: Fundamentos | 10 | Conceptos básicos de democracia y ciudadanía | Escenarios de decisión |
| T2: Derechos en Acción | 10 | Casos reales de ejercicio de derechos | Dilemas éticos |
| T3: Poder Local | 10 | Fiscalización municipal y participación vecinal | Simulaciones |
| T4: Transparencia | 10 | Acceso a información y fiscalización de gasto | Casos de estudio |
| T5: Cambio Sistémico | 10 | Grandes reformas y movilización ciudadana | Análisis histórico |

**Estructura de Cada Duelo de Poder**

• Contexto narrativo: Historia basada en caso real chileno (anonimizado si necesario)

• Protagonista ciudadano: Usuario toma decisiones como el protagonista

• Antagonista institucional: Obstáculo realista (burocracia, desconocimiento, oposición)

• 3-5 decisiones clave: Puntos donde el usuario elige camino a seguir

• Consecuencias ramificadas: Diferentes finales según decisiones tomadas

• Lección explícita: Aprendizaje cívico extraído del caso

• Conexión con realidad: Link a recursos reales para aplicar lo aprendido

• Duración: 10-15 minutos por episodio

**13.2.3 50 Misiones GPS Cívico**

| Tipo | Cantidad | Características | Recompensa |
| :---- | :---- | :---- | :---- |
| Misiones de Crecimiento | 25 | Aprendizaje, exploración, perfil | Karma \+ Desbloqueos |
| Misiones de Impacto | 20 | Reportar, votar, fiscalizar, participar | Karma \+ Badges |
| Misiones Colaborativas | 5 | Mentoría, eventos, organización | Reconocimiento social |

**13.2.4 Sistema de 12 Insignias**

| \# | Badge | Requisito | Dominio |
| :---- | :---- | :---- | :---- |
| 1 | Ciudadano Informado | Completar 5 cápsulas de cualquier dominio | General |
| 2 | Conocedor Democrático | Completar ruta de tres poderes | D1 |
| 3 | Defensor de Derechos | Completar ruta de derechos fundamentales | D2 |
| 4 | Participante Activo | Completar 3 misiones de impacto | D3 |
| 5 | Fiscal Ciudadano | Hacer 5 reportes verificados | D4/D5 |
| 6 | Líder Vecinal | Participar en 3 Mesas Ciudadanas | D5 |
| 7 | Experto en Presupuesto | Completar ruta de economía pública | D7 |
| 8 | Guardián Ambiental | Completar ruta de medioambiente | D8 |
| 9 | Mentor Cívico | Ayudar a 5 usuarios nuevos | General |
| 10 | Verificador | Confirmar/desmentir 10 reportes | General |
| 11 | Organizador | Crear y completar 1 Mesa Ciudadana | D3/D5 |
| 12 | Ciudadano Completo | Obtener todos los badges anteriores | General |

**Guardarraíles Críticos de Insignias (G-27)**

• G-27.1: Badges NO afectan peso del voto (1 persona \= 1 voto siempre)

• G-27.2: No se otorgan por participar, solo por completar con verificación

• G-27.3: Privacidad por defecto \+ opt-in para compartir públicamente

• G-27.4: Límite de 12 badges MVP (evita inflación de reconocimientos)

• G-27.5: MISSIONS\_GIVE\_KARMA\_POINTS: OFF (misiones NUNCA dan karma extra)

**13.2.5 Fundamentos Antropológicos Aplicados**

| Hallazgo | Descripción | Aplicación en CIVICUM |
| :---- | :---- | :---- |
| H1: Herencia Institucional | Desconfianza histórica hacia instituciones por dictadura y burocracia | Transparencia total, seguimiento visible, disyuntor humano |
| H2: Estallido Social 2019 | Despertar ciudadano masivo, demanda de cambio estructural | Herramientas de organización y fiscalización accesibles |
| H3: Brecha Digital Territorial | Santiago vs regiones, conectividad desigual | Tier-based inclusion, modo offline digno |
| H4: Desigualdad Percibida | Gini bajó pero 89% cree no hay igualdad ante la ley | Visualizaciones comparativas con contexto narrativo |
| H5: Segregación Residencial | Burbujas que no se tocan, prejuicios mutuos | Mesas heterogéneas, emparejamiento diverso |
| H6: Fatiga Democrática | Voto obligatorio pero baja participación real | Gamificación responsable sin FOMO |
| H7: Cultura Adversarial | Confrontación \> colaboración en debate público | Moderación IA, síntesis de consensos |
| H8: Expectativas Ciudadanas | Demanda de resultados tangibles y rápidos | Quick wins visibles, impacto medible |
| H9: Identidad Territorial | Fuerte vínculo con comuna y barrio | GPS Cívico geolocalizado, contenido local |

**13.2.6 Metodología de Onboarding**

| Fase | Componente | Propósito | Duración |
| :---- | :---- | :---- | :---- |
| 1 | Preview de Poder | Mostrar ecosistema de autoridades del usuario | 2 min |
| 2 | Datos Mínimos | Recopilar solo lo necesario con explicación | 1 min |
| 3 | Verificación Progresiva | Nivel inicial sin fricción, desbloqueos graduales | 30 seg |
| 4 | Primera Misión | Quick win inmediato para demostrar valor | 3 min |
| 5 | Tour Contextual | Mostrar módulos relevantes según perfil | 2 min |

**13.2.7 Sistema de Karma y Niveles**

| Nivel | Nombre | Karma Requerido | Capacidades Desbloqueadas |
| :---- | :---- | :---- | :---- |
| 0 | Visitante | 0 | Ver contenido público, explorar plataforma |
| 1 | Vecino | 10 | Reportar problemas, comentar, votar |
| 2 | Ciudadano | 50 | Crear Mesas, proponer iniciativas |
| 3 | Guardián | 150 | Moderar contenido, verificar reportes |
| 4 | Mentor | 300 | Guiar usuarios nuevos, crear contenido |
| 5 | Líder Cívico | 500+ | Representar comunidad, acceso completo |

**Reglas del Sistema de Karma**

• Karma se gana por valor verificado (no por clics o participación superficial)

• Acciones que dan karma: Reportes confirmados, votos fundamentados, contenido útil marcado por otros

• Acciones que restan karma: Reportes falsos, spam, contenido tóxico

• Topes anti-élite (F-10): Karma máximo no da más peso en votos ni más visibilidad desproporcionada

• Privacidad: Nivel visible públicamente solo con opt-in del usuario

• Reset parcial: Inactividad prolongada reduce karma gradualmente (no a cero)

**13.2.8 Protocolo de Moderación**

| Capa | Tecnología | Función | Umbral |
| :---- | :---- | :---- | :---- |
| Pre-moderación Local | TensorFlow.js toxicity | Análisis antes de enviar, advertencia al usuario | \>0.85 toxicidad |
| Moderación Automática | Reglas \+ ML | Filtro de spam, contenido prohibido, duplicados | Patrones conocidos |
| Moderación Comunitaria | Usuarios Nivel 3+ | Reportes de usuarios, verificación de contenido | 3+ reportes |
| Moderación Humana | Equipo CIVICUM | Casos complejos, apelaciones, contenido sensible | Cola de revisión |
| Transparencia | Logs públicos | Registro de acciones de moderación con razones | 100% trazable |

## **13.3 Documentación Técnica**

Se solicita protección sobre toda la documentación técnica original del proyecto:

**13.3.1 12 Documentos Esenciales Validados**

| \# | Documento | Descripción | Tamaño |
| :---- | :---- | :---- | :---- |
| 1 | CIVICUM\_Plan\_Desarrollo\_Software\_Integral\_v1 | Plan maestro de desarrollo con arquitectura y roadmap | \~50KB |
| 2 | CIVICUM\_Documentacion\_Integral\_Proteccion\_Intelectual\_v1 | Documento principal para registro INAPI | \~80KB |
| 3 | CIVICUM\_Design\_System\_Maestro | Sistema de diseño completo Terracota v2 | \~35KB |
| 4 | CIVICUM\_Fundamentos\_Antropologicos\_Chilenos | Investigación cultural aplicada al producto | \~40KB |
| 5 | CIVICUM\_Cache\_Investigacion\_Consolidada | Knowledge Cache: taxonomía, fuentes, esquemas | \~55KB |
| 6 | CIVICUM\_Promesometro\_Integral\_MVP | Sistema de seguimiento de promesas políticas | \~30KB |
| 7 | CIVICUM\_Integracion\_Investigaciones\_Promesometro | Integración del Promesómetro con módulos | \~25KB |
| 8 | CIVICUM\_Reconciliacion\_Oficial | Reconciliación de documentos y versiones | \~20KB |
| 9 | CIVICUM\_Correcciones\_Auditoria\_Consolidadas | Hallazgos de auditoría resueltos | \~35KB |
| 10 | CIVICUM\_Validacion\_Final | Certificación de completitud del caché | \~25KB |
| 11 | CIVICUM\_Decisiones\_Aprobadas | Registro de todas las decisiones F-XX | \~45KB |
| 12 | CIVICUM\_Backlog\_Consolidado | Backlog completo de desarrollo | \~30KB |

**13.3.2 32 Bloques de Implementación**

| Bloque | Módulo | Contenido | Estado |
| :---- | :---- | :---- | :---- |
| 1.1-1.4 | Mi CIVICUM | Onboarding, Perfil, Dashboard, GPS Cívico | Documentado |
| 2.1-2.4 | Academia Cívica | Rutas, Duelos, Cápsulas, Badges | Documentado |
| 3.1-3.4 | Asistente Cívico | IA 3 Capas, Plantillas, Anti-alucinación | Documentado |
| 4.1-4.4 | Alza la Voz \+ Mesas | Reportes, Geolocalización, Deliberación | Documentado |
| 5.1-5.4 | Cuentas Claras | Fuentes, Visualizaciones, Comparador | Documentado |
| 6.1-6.3 | Voto Ciudadano | VotingCard, Match, Promesómetro | Documentado |
| 7.1-7.4 | Fundamentos Antropológicos | Hallazgos, Aplicaciones, Validaciones | Documentado |

**13.3.3 47 Decisiones Formalizadas (ADRs)**

| Rango | Categoría | Ejemplos | Cantidad |
| :---- | :---- | :---- | :---- |
| F-01 a F-04 | Bloqueantes | Complejidad MVP, Honestidad Radical, Datos Mínimos, Construcción Secuencial | 4 |
| F-05 a F-09 | Alta Severidad | Tier Inclusion, Educación Progresiva, Offline Dignity, Gamificación, Coherencia Marca | 5 |
| F-10 a F-25 | Diciembre 2025 | Anti-Élite, North Star, Sistema IA, Métricas, GPS Cívico, Escalamiento | 16 |
| F-26 a F-47 | Enero 2026 | Academia Reestructurada, Autonomía Radical, Civia, Stack Zero-Cost, IA Distribuida | 22 |

**13.3.4 Esquemas de Datos (10 Entidades)**

| Característica | Especificación |
| :---- | :---- |
| Formato | JSON Schema draft-07 compliant |
| Campos por entidad | 13-22 campos con tipos, validaciones, ejemplos |
| Metadatos | Bloque \_metadata en todas las entidades (fuente, fecha, versión) |
| Relaciones | Bloque \_relations con vínculos entre entidades (23 relaciones) |
| Prioridad offline | Campo offline\_priority en todos los campos (HIGH/MEDIUM/LOW) |
| Validaciones | Required, enum, pattern, minLength, maxLength según campo |
| Ejemplos | Ejemplo completo para cada entidad con datos reales chilenos |

**13.3.5 Especificaciones de API**

| API | Tipo | Endpoints | Autenticación |
| :---- | :---- | :---- | :---- |
| API Pública | REST | /comunas, /autoridades, /capsulas, /plantillas | Ninguna (datos públicos) |
| API Privada | REST | /perfil, /votos, /reportes, /misiones | JWT \+ Refresh Token |
| API Admin | REST | /moderacion, /metricas, /cache | JWT \+ Rol admin |
| API WebSocket | WS | /chat, /notificaciones, /mesas | JWT |
| API Interna | gRPC | Comunicación entre microservicios | mTLS |

**13.3.6 Protocolos de Testing y Calidad**

| Tipo | Herramienta | Cobertura | Frecuencia |
| :---- | :---- | :---- | :---- |
| Unit Tests | Vitest | \>80% funciones | En cada commit |
| Integration Tests | Vitest \+ MSW | \>70% flujos | En cada PR |
| E2E Tests | Playwright | 100% happy paths | En cada release |
| Tests Offline | Playwright \+ throttling | 100% funciones offline | En cada PR |
| Accessibility Tests | axe-core | 100% componentes | En cada PR |
| Performance Tests | Lighthouse CI | \>90 score móvil | Semanal |
| Security Tests | OWASP ZAP | 0 vulnerabilidades críticas | Mensual |

## **13.4 Marca y Diseño**

Se solicita protección sobre todos los elementos de marca, identidad visual y diseño originales:

**13.4.1 Nombre CIVICUM**

| Elemento | Especificación |
| :---- | :---- |
| Nombre | CIVICUM |
| Etimología | Del latín CIVICUS (cívico, ciudadano) \+ sufijo \-UM (neutro, lugar) |
| Significado | Lugar donde se ejerce la ciudadanía activa |
| Registro solicitado | Marca denominativa, Clases 9 y 42 INAPI |
| Uso exclusivo | Plataforma de participación ciudadana en Chile |
| Dominio web | civicum.cl (a registrar) |
| Redes sociales | @civicum\_cl (a registrar) |

**13.4.2 Eslogan: 'Sistema Nervioso Cívico de Chile'**

| Elemento | Especificación |
| :---- | :---- |
| Eslogan principal | Sistema Nervioso Cívico de Chile |
| Concepto | CIVICUM como infraestructura que conecta ciudadanos, datos y autoridades |
| Metáfora | Sistema nervioso: red que transmite información y genera respuestas coordinadas |
| Uso | Tagline oficial en todas las comunicaciones y materiales |
| Variantes autorizadas | Sistema Nervioso Cívico, El Sistema Nervioso de Chile |
| Registro solicitado | Eslogan registrable como marca mixta |

**13.4.3 Paleta de Colores Terracota**

| Color | Hex | RGB | Uso Principal |
| :---- | :---- | :---- | :---- |
| Terracota (Primario) | \#C2503A | 194, 80, 58 | Acentos, botones primarios, logotipo |
| Azul Profundo | \#264653 | 38, 70, 83 | Textos, fondos oscuros, headers |
| Verde Esperanza | \#0D7A5F | 13, 122, 95 | Éxito, confirmaciones, progreso |
| Azul Protección | \#2563EB | 37, 99, 235 | Enlaces, información, institucional |
| Dorado Neutro | \#D4872E | 212, 135, 46 | Badges, logros, destacados |
| Gris Claro | \#F8F8F8 | 248, 248, 248 | Fondos, cards, separadores |
| Blanco | \#FFFFFF | 255, 255, 255 | Fondos principales, textos invertidos |

**Justificación de la Paleta Terracota**

• Terracota: Color de la tierra chilena, evoca arraigo territorial y tradición sin asociación política

• Azul Profundo: Transmite confianza institucional y seriedad sin ser frío ni distante

• Verde Esperanza: Representa progreso positivo y esperanza cívica

• Azul Protección: Color estándar de enlaces web, facilita navegación intuitiva

• Dorado: Premio y reconocimiento sin connotación de riqueza material

• Contraste WCAG 2.1: Todas las combinaciones cumplen mínimo AA (4.5:1 para texto)

**13.4.4 Iconografía Personalizada (50+ Iconos)**

| Categoría | Cantidad | Ejemplos | Estilo |
| :---- | :---- | :---- | :---- |
| Navegación | 12 | Home, Perfil, Academia, Asistente, Reportar, Votar | Outline 24px |
| Acciones | 15 | Enviar, Guardar, Exportar, Compartir, Editar, Eliminar | Outline 20px |
| Estados | 8 | Éxito, Error, Advertencia, Info, Cargando, Offline | Filled 24px |
| Módulos | 6 | Mi CIVICUM, Academia, Civia, Alza la Voz, Cuentas, Voto | Ilustración 48px |
| Badges | 12 | Una insignia por cada badge del sistema | Ilustración 64px |
| Decorativos | 10+ | Ilustraciones para onboarding, estados vacíos, errores | Ilustración variable |

**13.4.5 Sistema de Identidad Visual Completo**

| Elemento | Especificación |
| :---- | :---- |
| Logotipo | Wordmark 'CIVICUM' en tipografía Inter Bold con isotipo integrado |
| Isotipo | Símbolo abstracto que representa conexión ciudadana (a diseñar) |
| Tipografía primaria | Inter Variable (400, 500, 600, 700\) para UI y textos cortos |
| Tipografía secundaria | Source Serif Pro (400, 600, 700\) para contenido largo |
| Grid system | 12 columnas con gutter de 24px, márgenes de 16px móvil / 32px desktop |
| Espaciado | Sistema de 4px base (4, 8, 12, 16, 24, 32, 48, 64\) |
| Sombras | sm (0 1px 2px), md (0 4px 6px), lg (0 10px 15px), xl (0 20px 25px) |
| Border radius | sm (4px), md (8px), lg (12px), full (9999px) |
| Animaciones | Transiciones de 150ms ease-in-out, respeto a prefers-reduced-motion |

**13.4.6 Nombre 'Civia' (Asistente Cívico)**

| Elemento | Especificación |
| :---- | :---- |
| Nombre | Civia |
| Género | Femenino (español) |
| Etimología | Derivado de CÍVICO \+ sufijo \-IA (inteligencia artificial) |
| Tagline | Tu guía cívica |
| Microcopy | Estoy aquí para ayudarte, vamos de a poco: simple, claro y con respaldo. |
| Personalidad | Cercana pero profesional, paciente, honesta sobre limitaciones |
| Tono cálido | 18 variantes de bienvenida para contextos informales |
| Tono institucional | 21 variantes de bienvenida para contextos formales |
| Registro solicitado | Marca denominativa como submarca de CIVICUM |

# **14\. DECLARACIÓN DE ORIGINALIDAD**

**El titular de los derechos de CIVICUM declara bajo juramento lo siguiente:**

**14.1.1 Originalidad del Contenido**

**DECLARO QUE: Todo el contenido de CIVICUM es original y de creación propia.**

• El código fuente fue escrito específicamente para este proyecto, sin copiar de otras fuentes

• La arquitectura de 3 capas de IA es diseño original basado en principios de ingeniería de software

• Las 50 Rutas Ciudadanas son creaciones educativas originales basadas en investigación propia

• Los 50 Duelos de Poder son narrativas ficcionalizadas de casos reales chilenos

• Las 50 Misiones GPS Cívico fueron diseñadas específicamente para el contexto chileno

• El sistema de 12 Badges es estructura original de gamificación responsable

• El Design System Terracota fue creado desde cero para este proyecto

• Los textos, microcopy y contenido editorial son creación original

**14.1.2 Licenciamiento Open Source**

**DECLARO QUE: Las tecnologías open source utilizadas están correctamente licenciadas.**

• React (MIT License) \- Framework de interfaz de usuario

• Vite (MIT License) \- Build tool y dev server

• Zustand (MIT License) \- State management

• Tailwind CSS (MIT License) \- Utility-first CSS framework

• Lucide React (ISC License) \- Iconografía base

• Playwright (Apache 2.0) \- Testing E2E

• Vitest (MIT License) \- Unit testing

• WebLLM (Apache 2.0) \- IA local en navegador

• TensorFlow.js (Apache 2.0) \- Machine learning en cliente

• Llama 3 (Meta License) \- Modelo de lenguaje para Capa 1

• Todas las licencias permiten uso comercial y modificación

• Se mantiene atribución apropiada en código y documentación

**14.1.3 Fuentes de Datos Públicos**

**DECLARO QUE: Los datos oficiales provienen de fuentes públicas gubernamentales.**

• SINIM (Sistema Nacional de Información Municipal) \- Datos municipales públicos de SUBDERE

• Congreso Abierto (Cámara de Diputados y Senado) \- APIs públicas de legislación

• BCN Ley Chile \- Base de datos pública de normativa chilena

• InfoLobby y InfoProbidad \- Portales de transparencia con APIs públicas

• Presupuesto Abierto y DIPRES \- Datos fiscales públicos del Ministerio de Hacienda

• ChileCompra \- Licitaciones públicas del Estado

• Servel \- Datos electorales públicos

• Todas las fuentes son de acceso público por mandato legal (Ley 20.285 de Transparencia)

• Los datos se utilizan respetando robots.txt y términos de uso de cada fuente

• No se accede a información restringida o de acceso limitado

**14.1.4 Ausencia de Conflictos**

**DECLARO QUE: No existe conflicto de derechos con terceros.**

• No se han copiado diseños, interfaces o código de otras plataformas cívicas

• Los componentes inspirados en otros proyectos (FixMyStreet, Decidim) fueron reimplementados desde cero

• No se utilizan marcas registradas de terceros sin autorización

• No se reproducen contenidos protegidos por derechos de autor

• El nombre CIVICUM no tiene conflicto con marcas registradas existentes en Chile (verificar)

• El nombre Civia no tiene conflicto con marcas registradas existentes (verificar)

• No existen acuerdos de confidencialidad o no competencia que impidan el desarrollo

• El titular tiene capacidad legal plena para registrar estos derechos

**14.1.5 Investigación Antropológica Original**

**DECLARO QUE: La investigación antropológica es síntesis original de fuentes públicas.**

• Los 9 hallazgos antropológicos son síntesis original de múltiples fuentes académicas públicas

• Se citan fuentes: ELSOC, CASEN, CEP, LAPOP, Latinobarómetro (todas públicas)

• Los 27 bloques de aplicación son interpretaciones originales para el contexto de CIVICUM

• No se reproducen textos académicos completos, solo datos y conclusiones públicas

• La metodología de integración cultural es diseño propio del equipo CIVICUM

• Las recomendaciones de UX basadas en hallazgos son creación original

• Se mantiene atribución académica apropiada en documentación interna

**14.1.6 Unicidad de Diseño y Arquitectura**

**DECLARO QUE: El diseño, arquitectura y metodologías son únicas y originales.**

• La arquitectura de IA de 3 capas (Sin LLM / Local / Nube) es diseño original

• El sistema de 47 decisiones formalizadas (F-XX) es metodología propia

• El concepto de 'Sistema Nervioso Cívico' es metáfora original de CIVICUM

• La paleta Terracota fue seleccionada específicamente para evitar asociaciones políticas

• El sistema de Karma con topes anti-élite es diseño original de gamificación ética

• La metodología de Onboarding con Preview de Poder es creación propia

• El protocolo de moderación de 4 capas es arquitectura original

• Los guardarraíles G-27 de Academia Cívica son reglas originales

• El concepto de 'Offline Dignity Mode' (F-07) es formulación original

• La estructura de 6 módulos con loops end-to-end definidos es arquitectura propia

## **14.2 Certificación Final**

| Sección | Items Requeridos | Items Documentados | Estado |
| :---- | :---- | :---- | :---- |
| 13.1 Software y Código | 6 | 6 \+ expansiones detalladas | ✅ 100% |
| 13.2 Contenido y Metodologías | 8 | 8 \+ especificaciones completas | ✅ 100% |
| 13.3 Documentación Técnica | 6 | 6 \+ inventarios detallados | ✅ 100% |
| 13.4 Marca y Diseño | 6 | 6 \+ justificaciones completas | ✅ 100% |
| 14\. Declaración de Originalidad | 6 | 6 declaraciones formales | ✅ 100% |
| **TOTAL** | **32** | **32 \+ expansiones** | **✅ 100%** |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**CERTIFICACIÓN DE COMPLETITUD Y ORIGINALIDAD**

Certifico que este anexo documenta exhaustivamente todos los elementos solicitados para protección intelectual del proyecto CIVICUM, y que todas las declaraciones de originalidad son verídicas y completas.

Fecha: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ de 2026

Firma del Titular: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Nombre: Daniel  
RUT: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**CIVICUM — Sistema Nervioso Cívico de Chile**  
*Anexo Masivo: Protección Solicitada y Declaración de Originalidad*  
Febrero 2026 — Versión 1.0 Definitiva

32 items documentados | 6 declaraciones formales | 100% completitud