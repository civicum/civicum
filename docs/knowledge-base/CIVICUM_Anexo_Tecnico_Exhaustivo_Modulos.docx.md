

**CIVICUM**  
Sistema Nervioso Cívico de Chile

**ANEXO TÉCNICO EXHAUSTIVO**  
Módulos Expandidos al Máximo Detalle

Versión 1.0 | Enero 2026  
**Estado: APROBADO PARA MVP**

*Basado en investigación aprobada: 27 de diciembre de 2025*  
*47 decisiones formales (F-01 a F-47) validadas*

# **TABLA DE CONTENIDOS**

1\. Knowledge Cache \- Sistema de Conocimiento Cívico

   1.1 Visión General y Arquitectura

   1.2 Los 8 Documentos Maestros

   1.3 Las 10 Entidades de Datos

   1.4 Roadmap de 16 Semanas

2\. GPS Cívico \- Sistema de Misiones

   2.1 Catálogo de 50 Misiones

   2.2 Las 3 Trayectorias de Usuario

3\. Sistema de Frescura y Limpieza

4\. Pipelines de Automatización

5\. Los 6 Módulos MVP \- Especificaciones Completas

   5.1 Mi CIVICUM (\~85h)

   5.2 Academia Cívica (\~385h)

   5.3 Asistente Cívico \- Civia (\~120h)

   5.4 Alza la Voz \+ Mesas (\~150h)

   5.5 Cuentas Claras (\~180h)

   5.6 Voto Ciudadano (\~150h)

6\. Arquitectura Técnica Consolidada

7\. Métricas y KPIs de Éxito

8\. Cobertura de Decisiones F-01 a F-47

# **1\. KNOWLEDGE CACHE \- SISTEMA DE CONOCIMIENTO CÍVICO**

## **1.1 Visión General y Arquitectura**

El Knowledge Cache es la Capa 2 del sistema de IA híbrida de CIVICUM. Constituye una base de conocimiento curada que permite respuestas precisas sin depender constantemente de APIs externas costosas, garantizando operación offline y reduciendo costos operacionales a $100-260/mes.

### **Arquitectura de IA en 3 Capas**

| Capa | Componente | Función |
| :---- | :---- | :---- |
| Capa 1 | Frontend Inteligente | Device tier detection (HIGH/MID/LOW), Modo Lite automático, Service Workers offline |
| Capa 2 | Knowledge Cache | 43+ fuentes oficiales, 10 entidades JSON, TTL por tipo, Actualización automática |
| Capa 3 | Stack Anti-Alucinación | 12 técnicas $0, Evidence-Only, Abstención Dura, BGE Reranker, Verificador NLI |

### **Taxonomía del Conocimiento Cívico \- 8 Dominios**

| \# | Dominio | Items Estimados | Descripción |
| :---- | :---- | :---- | :---- |
| 1 | Uso de CIVICUM | \~260 items | Onboarding, módulos, karma, guardianes |
| 2 | Instituciones Nacionales | \~342 items | Ejecutivo, Legislativo, Judicial, Autónomos |
| 3 | Gobierno Regional | \~693 items | GOBEs, SEREMIs, COREs, Delegados |
| 4 | Gobierno Local | \~3,200+ items | 346 comunas, alcaldes, concejales, COSOC |
| 5 | Marco Legal | \~290 items | Constitución, leyes, ordenanzas, reglamentos |
| 6 | Procesos Cívicos | \~50+ items | Transparencia, participación, denuncias |
| 7 | Datos Municipales | \~5,500+ items | Presupuestos, indicadores SINIM, contratos |
| 8 | Contenido Educativo | \~250+ items | Cápsulas, FAQs, glosario, rutas |

**Total estimado: \~7,560 items de conocimiento estructurado**

## **1.2 Los 8 Documentos Maestros (Aprobados 27-dic-2025)**

| \# | Documento | Tamaño | Contenido Principal |
| :---- | :---- | :---- | :---- |
| 1 | CIVICUM\_Cache\_Investigacion\_Consolidada.md | 29KB | Documento maestro integrado con visión completa |
| 2 | CIVICUM\_Cache\_Fase1\_Taxonomia.md | 25KB | 8 dominios, \~7,560 items de conocimiento |
| 3 | CIVICUM\_Cache\_Fase2\_Fuentes.md | 14KB | Catálogo de 43+ fuentes oficiales chilenas |
| 4 | CIVICUM\_Cache\_Fase3\_Esquemas.md | 53KB | 8 esquemas JSON originales \+ 2 adicionales |
| 5 | Benchmark\_Global\_Civic\_Tech.md | 21KB | Análisis de 12 plataformas internacionales |
| 6 | CIVICUM\_Cache\_Fase5\_Roadmap.md | 18KB | Plan 16 semanas, costos $100-260/mes |
| 7 | CIVICUM\_Gaps\_Resueltos.md | \~30KB | Esquemas Cápsula, Plantilla \+ 50 misiones GPS |
| 8 | CIVICUM\_Validacion\_Final.md | \~25KB | Certificación de integridad 100% |

## **1.3 Las 10 Entidades de Datos \- Esquemas Completos**

### **Entidad 1: COMUNA (18 campos, 8 críticos)**

*Representa una de las 346 comunas de Chile. Entidad central del sistema.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: comuna\_XXXXX (ej: comuna\_13101) |
| nombre | CRITICAL | Nombre oficial de la comuna |
| codigo\_territorial | CRITICAL | Código único territorial chileno |
| region\_id | CRITICAL | Referencia a entidad Región |
| contacto.direccion | CRITICAL | Dirección física de la municipalidad |
| contacto.telefono | CRITICAL | Teléfono de contacto principal |
| contacto.portal\_transparencia | CRITICAL | URL del portal de transparencia |
| contacto.email | CRITICAL | Email institucional |
| provincia\_id | HIGH | Referencia a entidad Provincia |
| poblacion | HIGH | Población según último censo |
| indicadores\_sinim | HIGH | Objeto con indicadores municipales |
| sitio\_web | HIGH | URL del sitio web municipal |
| superficie\_km2 | MEDIUM | Superficie en kilómetros cuadrados |
| tipo | MEDIUM | urbana | rural | mixta |
| geojson | LOW | Polígono de límites comunales |

*Relaciones: alcalde\_id, concejales\_ids\[\], cosoc\_id, distrito\_electoral\_id, circunscripcion\_senatorial\_id*  
*Cobertura: 346 comunas de Chile | Fuente: SINIM \- SUBDERE*

### **Entidad 2: AUTORIDAD (21 campos, 7 críticos)**

*Representa cualquier autoridad pública electa o designada.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: autoridad\_\[tipo\]\_\[territorio\]\_\[año\] |
| nombre\_completo | CRITICAL | Nombre completo de la autoridad |
| cargo | CRITICAL | Cargo oficial que ocupa |
| nivel | CRITICAL | nacional | regional | provincial | comunal |
| territorio\_id | CRITICAL | ID del territorio que representa |
| como\_contactar | CRITICAL | Información de contacto ciudadano |
| funciones\[\] | CRITICAL | Array de funciones principales |
| partido\_politico | HIGH | Afiliación política actual |
| periodo.inicio | HIGH | Fecha inicio del mandato |
| periodo.fin | HIGH | Fecha fin del mandato |
| transparencia.declaracion\_patrimonio\_url | HIGH | Link a InfoProbidad |
| transparencia.audiencias\_url | HIGH | Link a InfoLobby |
| biografia.profesion | MEDIUM | Profesión declarada |
| biografia.estudios | MEDIUM | Nivel educacional |

*Cargos soportados: presidente, ministro, subsecretario, senador, diputado, gobernador\_regional, delegado\_presidencial, consejero\_regional, alcalde, concejal, seremi*  
*Cobertura estimada: \~2,850 autoridades | Fuentes: SERVEL, Congreso Abierto, InfoProbidad, InfoLobby*

### **Entidad 3: INSTITUCIÓN (19 campos, 6 críticos)**

*Representa órganos del Estado chileno.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: institucion\_\[nombre\] |
| nombre | CRITICAL | Nombre oficial completo |
| nombre\_corto | CRITICAL | Sigla o nombre abreviado |
| tipo | CRITICAL | poder\_ejecutivo | legislativo | judicial | autonomo | ministerio | servicio |
| nivel | CRITICAL | nacional | regional | comunal |
| contacto | CRITICAL | Objeto con dirección, teléfono, web, OIRS |
| descripcion | HIGH | Descripción de funciones |
| funciones\_principales\[\] | HIGH | Array de funciones clave |
| portal\_transparencia | HIGH | URL de transparencia activa |
| marco\_legal | MEDIUM | Ley orgánica y URL |

*Cobertura estimada: \~200 instituciones | Fuentes: Sitios oficiales, ChileAtiende*

### **Entidad 4: PROCESO CÍVICO (22 campos, 6 críticos)**

*Representa mecanismos de participación ciudadana paso a paso.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: proceso\_\[nombre\] |
| nombre | CRITICAL | Nombre descriptivo del proceso |
| categoria | CRITICAL | transparencia | participacion | denuncia | recurso\_legal | electoral | legislativo |
| dificultad | CRITICAL | facil | media | dificil |
| tiempo\_estimado | CRITICAL | Duración aproximada |
| pasos\[\] | CRITICAL | Array de {numero, titulo, descripcion, documentos\[\], plazo, costo} |
| quien\_puede | HIGH | Quién puede iniciar el proceso |
| requisitos\[\] | HIGH | Lista de requisitos previos |
| documentos\_necesarios\[\] | HIGH | Documentos requeridos |
| plazos | HIGH | Objeto con plazo\_respuesta, plazo\_apelacion |
| donde\_realizar | HIGH | Presencial y/o online |
| marco\_legal | HIGH | Ley principal y artículos |
| consejos\[\] | MEDIUM | Tips prácticos para el ciudadano |
| que\_pasa\_si\[\] | MEDIUM | FAQ sobre el proceso |

*Cobertura estimada: \~50 procesos MVP | Fuentes: ChileAtiende, BCN, leyes específicas*

### **Entidad 5: DERECHO (15 campos, 5 críticos)**

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: derecho\_\[nombre\] |
| nombre | CRITICAL | Nombre del derecho |
| descripcion\_simple | CRITICAL | Explicación en lenguaje ciudadano |
| como\_ejercerlo | CRITICAL | Guía práctica de ejercicio |
| marco\_legal | CRITICAL | Constitución y leyes base |
| limitaciones\[\] | HIGH | Excepciones legales |
| ejemplos\_aplicacion\[\] | MEDIUM | Casos prácticos |

*Cobertura: \~100 derechos | Fuentes: Constitución, BCN, INDH*

### **Entidad 6: FAQ (16 campos, 5 críticos)**

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: faq\_\[tema\] |
| pregunta | CRITICAL | Pregunta en lenguaje natural |
| respuesta\_simple | CRITICAL | Respuesta clara y concisa |
| categoria | CRITICAL | onboarding | modulos | procesos | derechos | instituciones |
| dificultad | CRITICAL | basica | intermedia | avanzada |
| respuesta\_detallada | HIGH | Explicación extendida |
| keywords\[\] | HIGH | Palabras clave para búsqueda |
| pregunta\_variantes\[\] | HIGH | Formas alternativas de preguntar |

*Cobertura: \~150 FAQs | Fuentes: Documentación CIVICUM, leyes, ChileAtiende*

### **Entidad 7: TÉRMINO (13 campos, 4 críticos)**

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: termino\_\[sigla\] |
| termino | CRITICAL | El término o sigla a definir |
| definicion\_simple | CRITICAL | Definición en lenguaje ciudadano |
| categoria | CRITICAL | institucional | legal | presupuestario | electoral | tecnico |
| sigla | HIGH | Acrónimo si aplica |
| ejemplo | MEDIUM | Ejemplo de uso |
| no\_confundir\_con\[\] | LOW | Términos similares pero diferentes |

*Cobertura: \~150 términos | Fuentes: Glosarios oficiales, BCN, DIPRES*

### **Entidad 8: EVENTO CÍVICO (14 campos, 4 críticos)**

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: evento\_\[tipo\]\_\[año\] |
| nombre | CRITICAL | Nombre del evento |
| tipo | CRITICAL | eleccion | plebiscito | cuenta\_publica | consulta | plazo\_legal |
| fecha | CRITICAL | Fecha del evento |
| como\_participar | HIGH | Instrucciones de participación |
| requisitos\[\] | HIGH | Requisitos para participar |

*Cobertura: \~50 eventos | Fuentes: SERVEL, calendarios oficiales*

### **Entidad 9: CÁPSULA (18 campos, 6 críticos) \- Gap \#1 Resuelto**

*Unidad de micro-aprendizaje cívico. Formato Stories consumible en 15-30 segundos.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: capsula\_M\[modulo\]-C\[numero\] (ej: M1-C001) |
| titulo | CRITICAL | Título atractivo, máximo 80 caracteres |
| modulo | CRITICAL | fundamentos | presupuesto | justicia | participacion | transparencia | electoral | municipal | derechos |
| categoria | CRITICAL | conceptual | procedimental | contextual | quiz |
| duracion\_estimada | CRITICAL | Segundos (típico: 15-30) |
| stories\[\] | CRITICAL | Array 3-7 tarjetas {tipo, contenido, visual, duracion} |
| quiz | HIGH | Objeto {pregunta, opciones\[\], respuesta\_correcta, explicacion} |
| cta | HIGH | Call-to-action {texto, accion, destino} |
| desbloquea\[\] | MEDIUM | Funcionalidades que se desbloquean al completar |
| triggers\_contextuales\[\] | LOW | Cuándo mostrar automáticamente |

*Cobertura: 100-250 cápsulas iniciales | Fuentes: Contenido CIVICUM curado*

### **Entidad 10: PLANTILLA (16 campos, 5 críticos) \- Gap \#2 Resuelto**

*Documento pre-formateado para facilitar trámites ciudadanos.*

| Campo | Prioridad | Descripción |
| :---- | :---- | :---- |
| id | CRITICAL | Formato: plantilla\_\[tipo\] |
| nombre | CRITICAL | Nombre descriptivo |
| categoria | CRITICAL | solicitud | reclamo | propuesta | denuncia | consulta |
| proceso\_id | CRITICAL | Proceso cívico relacionado |
| texto\_base | CRITICAL | Template con variables {{nombre}}, {{rut}}, etc. |
| campos\_variables\[\] | HIGH | Array de campos a completar |
| auto\_completar\_desde{} | HIGH | Mapeo a datos del perfil usuario |
| advertencias\[\] | HIGH | Disclaimers legales (F-02) |
| formato\_salida\[\] | HIGH | PDF | DOCX | TXT | email |

*Cobertura: 20 plantillas MVP*

### **Catálogo de 20 Plantillas MVP**

| \# | Plantilla | Tipo | Proceso |
| :---- | :---- | :---- | :---- |
| 1 | Solicitud de Acceso a Información Pública | Solicitud | Transparencia |
| 2 | Reclamo Municipal por Servicios | Reclamo | Municipal |
| 3 | Denuncia a Contraloría | Denuncia | Fiscalización |
| 4 | Solicitud de Audiencia con Autoridad | Solicitud | Participación |
| 5 | Propuesta para Presupuesto Participativo | Propuesta | Participación |
| 6 | Reclamo por Servicios Básicos | Reclamo | Municipal |
| 7 | Consulta Jurídica Básica | Consulta | Legal |
| 8 | Solicitud de Información Pública Específica | Solicitud | Transparencia |
| 9 | Denuncia por Falta a la Probidad | Denuncia | Fiscalización |
| 10 | Reclamo por Discriminación | Reclamo | Derechos |
| 11 | Propuesta de Ordenanza Municipal | Propuesta | Legislativo |
| 12 | Solicitud de Subvención Municipal | Solicitud | Municipal |
| 13 | Reclamo Ambiental | Reclamo | Ambiental |
| 14 | Solicitud de Patente Comercial | Solicitud | Municipal |
| 15 | Denuncia Laboral | Denuncia | Laboral |
| 16 | Propuesta al COSOC | Propuesta | Participación |
| 17 | Reclamo de Salud | Reclamo | Salud |
| 18 | Solicitud de Beneficio Social | Solicitud | Social |
| 19 | Denuncia por Corrupción | Denuncia | Fiscalización |
| 20 | Carta Formal a Autoridad | Solicitud | General |

## **1.4 Roadmap de Implementación \- 16 Semanas**

### **Fase 1: Fundamentos (Semanas 1-4)**

| Semana | Foco | Entregables |
| :---- | :---- | :---- |
| 1 | Infraestructura | PostgreSQL \+ schemas, pipeline básico, bundle offline |
| 2 | Autoridades municipales | 346 alcaldes con contacto básico |
| 3 | Marco legal | 50 derechos, 30 procesos básicos, 110 términos glosario |
| 4 | CIVICUM interno | 50 FAQs, 20 guías módulos, 10 misiones iniciales |

**Entregable Fase 1: Bundle offline (\~900 items, \<5MB)**

### **Fase 2: Gobierno Local (Semanas 5-8)**

| Semana | Foco | Entregables |
| :---- | :---- | :---- |
| 5 | Concejales | \~2,400 concejales con período y partido |
| 6 | SINIM | Extractor automatizado, 20 indicadores por comuna |
| 7 | Presupuestos | 346 presupuestos municipales vigentes |
| 8 | Participación | COSOC por comuna, info juntas de vecinos |

**Entregable Fase 2: Cache municipal completo (\~3,200 items)**

### **Fase 3: Instituciones Nacionales (Semanas 9-12)**

| Semana | Foco | Entregables |
| :---- | :---- | :---- |
| 9 | Parlamentarios | 155 diputados \+ 50 senadores \+ votaciones recientes |
| 10 | Poder Ejecutivo | 24 ministerios, ministros, 40 subsecretarías, SEREMIs |
| 11 | Órganos autónomos | Contraloría, CPLT, tribunales clave |
| 12 | Procesos detallados | 15+ procesos cívicos paso a paso |

**Entregable Fase 3: Expedientes parlamentarios con votaciones**

### **Fase 4: Dinámicos \+ Integración (Semanas 13-16)**

| Semana | Foco | Entregables |
| :---- | :---- | :---- |
| 13 | Pipeline diario | Congreso Abierto, histórico 2022-2025 |
| 14 | Transparencia | InfoLobby \+ InfoProbidad integrados |
| 15 | Calendario | Eventos cívicos, plazos, alertas personalizadas |
| 16 | Integración final | Relaciones completas, API v1.0, tests E2E |

**Entregable Fase 4: Sistema en producción beta**

# **2\. GPS CÍVICO \- SISTEMA DE MISIONES**

El GPS Cívico (F-23) guía al usuario desde frustración pasiva hacia acción democrática efectiva mediante misiones gamificadas que conectan los 6 módulos del MVP.

## **2.1 Catálogo Completo de 50 Misiones**

### **Categoría CRECIMIENTO \- Aprender y Explorar (25 misiones)**

**Onboarding (Días 1-7) \- 7 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 1 | mision\_bienvenida | Bienvenido a CIVICUM | Fácil | 3 min |
| 2 | mision\_completa\_perfil | Completa tu Perfil Cívico | Fácil | 5 min |
| 3 | mision\_primera\_capsula | Tu Primera Cápsula de Poder | Fácil | 2 min |
| 4 | mision\_conoce\_asistente | Conoce al Asistente Cívico | Fácil | 3 min |
| 5 | mision\_explora\_comuna | Explora tu Comuna | Fácil | 5 min |
| 6 | mision\_conoce\_alcalde | Conoce a tu Alcalde/sa | Fácil | 3 min |
| 7 | mision\_primer\_voto | Tu Primer Voto Simbólico | Fácil | 5 min |

**Academia Cívica \- 8 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 8 | mision\_tres\_poderes | Los 3 Poderes del Estado | Fácil | 5 min |
| 9 | mision\_como\_funciona\_congreso | ¿Cómo Funciona el Congreso? | Media | 10 min |
| 10 | mision\_entender\_presupuesto | Entender el Presupuesto Municipal | Media | 10 min |
| 11 | mision\_derechos\_ciudadanos | Tus Derechos como Ciudadano | Fácil | 8 min |
| 12 | mision\_ley\_transparencia | Domina la Ley de Transparencia | Media | 12 min |
| 13 | mision\_participacion\_ciudadana | Participación Ciudadana 101 | Fácil | 8 min |
| 14 | mision\_que\_es\_cosoc | ¿Qué es el COSOC? | Media | 7 min |
| 15 | mision\_ruta\_fundamentos | Completa Ruta: Fundamentos | Media | 30 min |

**Asistente Cívico \- 5 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 16 | mision\_primera\_pregunta | Haz tu Primera Pregunta | Fácil | 3 min |
| 17 | mision\_genera\_plantilla | Genera tu Primera Plantilla | Media | 10 min |
| 18 | mision\_encuentra\_proceso | Encuentra un Proceso Cívico | Fácil | 5 min |
| 19 | mision\_busca\_autoridad | Busca Información de Autoridad | Fácil | 5 min |
| 20 | mision\_explora\_glosario | Explora el Glosario Cívico | Fácil | 5 min |

**Cuentas Claras \- 5 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 21 | mision\_lee\_presupuesto | Lee el Presupuesto de tu Comuna | Media | 10 min |
| 22 | mision\_compara\_comunas | Compara tu Comuna con Otra | Media | 8 min |
| 23 | mision\_identifica\_gasto | Identifica un Gasto Cuestionable | Difícil | 15 min |
| 24 | mision\_exporta\_analisis | Exporta tu Primer Análisis | Media | 10 min |
| 25 | mision\_dependencia\_fcm | Entiende la Dependencia FCM | Media | 12 min |

### **Categoría IMPACTO \- Actuar y Transformar (25 misiones)**

**Alza la Voz \- 8 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 26 | mision\_primer\_reporte | Crea tu Primer Reporte | Fácil | 5 min |
| 27 | mision\_reporte\_con\_foto | Reporte con Evidencia Fotográfica | Fácil | 7 min |
| 28 | mision\_apoya\_reporte | Apoya un Reporte de tu Barrio | Fácil | 3 min |
| 29 | mision\_seguimiento\_reporte | Dale Seguimiento a un Reporte | Media | 10 min |
| 30 | mision\_crea\_mesa | Crea una Mesa de Trabajo | Media | 15 min |
| 31 | mision\_unete\_mesa | Únete a una Mesa Existente | Fácil | 5 min |
| 32 | mision\_primera\_tarea\_mesa | Completa tu Primera Tarea en Mesa | Media | 20 min |
| 33 | mision\_cierra\_caso | Cierra un Caso con Evidencia | Difícil | 30 min |

**Voto Ciudadano \- 7 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 34 | mision\_sigue\_parlamentario | Sigue a un Parlamentario | Fácil | 3 min |
| 35 | mision\_revisa\_votacion | Revisa una Votación Reciente | Media | 10 min |
| 36 | mision\_compara\_promesa | Compara Promesa vs. Voto | Media | 15 min |
| 37 | mision\_exporta\_mandato | Exporta tu Mandato Documentado | Media | 10 min |
| 38 | mision\_vota\_tema\_nacional | Vota en un Tema Nacional | Fácil | 5 min |
| 39 | mision\_vota\_5\_temas | Vota en 5 Temas Diferentes | Media | 20 min |
| 40 | mision\_informe\_autoridad | Revisa el Informe de una Autoridad | Media | 10 min |

**Transparencia y Fiscalización \- 5 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 41 | mision\_solicitud\_transparencia | Envía Solicitud de Transparencia | Media | 15 min |
| 42 | mision\_revisa\_lobby | Revisa Reuniones de Lobby | Media | 10 min |
| 43 | mision\_declaracion\_patrimonio | Consulta Declaración de Patrimonio | Media | 10 min |
| 44 | mision\_denuncia\_contraloria | Prepara Denuncia a Contraloría | Difícil | 20 min |
| 45 | mision\_fiscaliza\_contrato | Fiscaliza un Contrato Público | Difícil | 25 min |

**Misiones Colaborativas y Estacionales \- 5 misiones**

| \# | ID | Nombre | Dificultad | Tiempo |
| :---- | :---- | :---- | :---- | :---- |
| 46 | mision\_mentor\_novato | Ayuda a un Usuario Nuevo | Media | 15 min |
| 47 | mision\_evento\_electoral | Prepárate para la Elección | Media | 20 min |
| 48 | mision\_cuenta\_publica | Analiza la Cuenta Pública Municipal | Difícil | 30 min |
| 49 | mision\_presupuesto\_participativo | Participa en Presupuesto Participativo | Media | 25 min |
| 50 | mision\_expediente\_completo | Crea Expediente de Evidencia Completo | Difícil | 45 min |

## **2.2 Distribución y Trayectorias**

### **Distribución por Módulo**

| Módulo | Cantidad | Porcentaje |
| :---- | :---- | :---- |
| Mi CIVICUM | 9 | 18% |
| Academia Cívica | 8 | 16% |
| Asistente Cívico | 8 | 16% |
| Alza la Voz \+ Mesas | 8 | 16% |
| Cuentas Claras | 9 | 18% |
| Voto Ciudadano | 8 | 16% |
| **TOTAL** | **50** | **100%** |

### **Distribución por Dificultad**

| Dificultad | Cantidad | Porcentaje |
| :---- | :---- | :---- |
| Fácil | 20 | 40% |
| Media | 23 | 46% |
| Difícil | 7 | 14% |
| **TOTAL** | **50** | **100%** |

### **Las 3 Trayectorias de Usuario**

**Trayectoria 1: Ciudadano Informado (10 misiones, \~90 min)**  
*Objetivo: Entender cómo funciona el Estado y conocer tus derechos básicos.*

1. mision\_bienvenida → mision\_completa\_perfil → mision\_primera\_capsula  
2. mision\_tres\_poderes → mision\_derechos\_ciudadanos → mision\_conoce\_asistente  
3. mision\_explora\_comuna → mision\_conoce\_alcalde → mision\_primera\_pregunta  
4. mision\_ruta\_fundamentos

**Trayectoria 2: Fiscalizador Municipal (12 misiones, \~150 min)**  
*Objetivo: Aprender a fiscalizar el uso de recursos públicos en tu comuna.*

5. mision\_bienvenida → mision\_entender\_presupuesto → mision\_lee\_presupuesto  
6. mision\_ley\_transparencia → mision\_genera\_plantilla → mision\_solicitud\_transparencia  
7. mision\_revisa\_lobby → mision\_declaracion\_patrimonio → mision\_identifica\_gasto  
8. mision\_denuncia\_contraloria → mision\_fiscaliza\_contrato → mision\_expediente\_completo

**Trayectoria 3: Activista Vecinal (10 misiones, \~120 min)**  
*Objetivo: Resolver problemas de tu barrio colaborando con otros vecinos.*

9. mision\_bienvenida → mision\_participacion\_ciudadana → mision\_que\_es\_cosoc  
10. mision\_primer\_reporte → mision\_reporte\_con\_foto → mision\_apoya\_reporte  
11. mision\_crea\_mesa → mision\_primera\_tarea\_mesa → mision\_cierra\_caso  
12. mision\_presupuesto\_participativo

# **3\. SISTEMA DE FRESCURA Y LIMPIEZA**

El Sistema de Frescura garantiza que los datos del Knowledge Cache estén actualizados y sean confiables. Implementa F-02 (Honestidad Radical) y F-06 (Moderación). Estimación: \~100h de desarrollo.

## **3.1 TTL por Tipo de Dato**

| Tipo de Dato | TTL | Justificación |
| :---- | :---- | :---- |
| Legislación | 90 días | Cambios poco frecuentes, estable |
| Autoridades | 30 días | Cambios moderados por rotación |
| Presupuestos | 365 días | Ciclo anual fiscal |
| Votaciones parlamentarias | 7 días | Alta frecuencia de cambio |
| Eventos cívicos | 1 día | Tiempo real crítico |
| Trámites/Procesos | 180 días | Relativamente estables |

## **3.2 Estados de Documento**

| Estado | Indicador | Acción |
| :---- | :---- | :---- |
| FRESH | 🟢 Verde | Dentro de TTL, datos confiables, mostrar normalmente |
| STALE\_WARNING | 🟡 Amarillo | Cerca de vencer TTL, advertencia sutil al usuario |
| STALE\_ERROR | 🔴 Rojo | TTL vencido, advertencia prominente, priorizar actualización |
| SOSPECHOSO | ⚠️ Naranja | Cambios detectados en fuente pero no ingresados, verificar |
| CUARENTENA | ⛔ Gris | Validación pendiente, no mostrar hasta confirmar |

## **3.3 Sistema de Deduplicación**

* **Exacta:** Checksum SHA-256 para detectar duplicados idénticos  
* **Near-duplicate:** Similitud semántica \>95% usando embeddings  
* **Canonicalización:** Normalización de formatos antes de comparar

## **3.4 Versionado Histórico**

Tabla documentos\_versionados con campos:

* version (número secuencial)  
* effective\_from (fecha inicio vigencia)  
* effective\_to (fecha fin vigencia, NULL si actual)  
* motivo\_cambio (razón del cambio)

*Vista documentos\_current: effective\_to IS NULL para obtener siempre la versión actual.*

## **3.5 Blue/Green Indices**

Sistema de deployment sin downtime para actualizaciones de datos:

13. Índice BLUE (activo) \- sirve tráfico  
14. Índice GREEN (staging) \- recibe actualizaciones  
15. Quality Gates obligatorios antes de cambio  
16. Alias "current" apunta al activo  
17. Cambio atómico tras pasar todas las validaciones

## **3.6 Quality Gates Obligatorios**

| Gate | Verificación | Umbral |
| :---- | :---- | :---- |
| Schema Validation | 100% campos requeridos presentes | 100% |
| Freshness Check | TTL válido para tipo de dato | 100% |
| Deduplication Check | Sin duplicados exactos | 0 duplicados |
| Coherence Check | Relaciones válidas entre entidades | 100% |
| Source Verification | Fuente oficial verificable | 100% |

# **4\. PIPELINES DE AUTOMATIZACIÓN**

Sistema de ingesta automática de datos desde fuentes oficiales. Implementa F-07 (Investigación Autónoma Resiliente) con principios éticos de scraping.

## **4.1 Arquitectura de Ingesta**

* **Repositorio separado:** civicum-scrapers (scripts, workflows, tests)  
* **Ejecución:** GitHub Actions programados (nocturno/semanal)  
* **Feature flag:** Apagado por defecto, activación manual

## **4.2 Principios Éticos de Scraping**

| Principio | Implementación |
| :---- | :---- |
| Respetar robots.txt | Obligatorio \- verificación antes de cada request |
| Rate limiting | 1 request/segundo máximo, configurable por fuente |
| User-Agent identificable | CIVICUM-Bot/1.0 (+https://civicum.cl/bot) |
| Cache mínimo | 24 horas entre requests idénticos |
| TOS review | Documentado para cada fuente |
| Horarios baja carga | Ejecución nocturna (2-6 AM) |

## **4.3 Priorización de Fuentes**

| Prioridad | Tipo | Ejemplos |
| :---- | :---- | :---- |
| 1 (Preferida) | APIs oficiales | ChileCompra API, BCN endpoints, Congreso Abierto API |
| 2 | Datasets descargables | DIPRES Excel/CSV, Servel resultados, Datos abiertos municipales |
| 3 (Último recurso) | Scraping ético | InfoLobby, Votaciones BCN, Municipios sin portal |

## **4.4 Jobs Programados**

| Job | Frecuencia | Fuente |
| :---- | :---- | :---- |
| bcn-laws-daily | Diario (nocturno) | Biblioteca del Congreso Nacional |
| dipres-budgets-weekly | Semanal | DIPRES \- Presupuestos |
| mercadopublico-tenders-daily | Diario | ChileCompra \- Licitaciones |
| congreso-votaciones-daily | Diario | Congreso Abierto \- Votaciones |
| sinim-indicadores-monthly | Mensual | SINIM \- Indicadores municipales |
| infolobby-audiencias-weekly | Semanal | InfoLobby \- Audiencias |

## **4.5 Pipeline PDF \+ OCR \+ LLM**

Para documentos PDF que requieren extracción estructurada:

18. Descarga PDF desde fuente oficial  
19. Extracción texto: pdf-parse (digital) o Tesseract (escaneado)  
20. Estructuración IA: Prompt "Extrae tabla compromisos → JSON {compromiso, plazo}"  
21. Validación contra esquema antes de guardar  
22. Resultado: datos estructurados listos para SQL

## **4.6 Monitoreo y Alertas**

Tabla scraper\_logs para trazabilidad completa:

* id, source, job\_name, status, records\_ingested, error\_message, run\_at  
* Alertas automáticas en fallos (email/Slack)  
* Dashboard: "Última actualización: hace X días" en UI

# **5\. LOS 6 MÓDULOS MVP \- ESPECIFICACIONES COMPLETAS**

## **5.1 Mi CIVICUM (\~85 horas)**

*Centro de identidad cívica del usuario. Gestiona perfil, verificación, karma y navegación.*

**Loop End-to-End:**  
Registro → Perfil → Preferencias → Ver historial → Exportar datos

**Decisiones Aplicadas:**

* F-01: Complejidad MVP \- Módulo core obligatorio  
* F-03: Constitución de Datos \- Datos mínimos necesarios  
* F-07: Confianza Progresiva \- Verificación en niveles 0-4  
* F-10: Anti-Élite \- Karma con topes, 1 persona \= 1 voto  
* F-16: Expediente de Usuario \- Historial exportable  
* F-23: GPS Cívico \- Integración de misiones

**Sistema de Verificación Progresiva:**

| Nivel | Requisito | Desbloquea |
| :---- | :---- | :---- |
| 0 | Ninguno (anónimo) | Ver contenido público, consumir cápsulas |
| 1 | Email verificado | Comentar, apoyar reportes, guardar favoritos |
| 2 | RUT validado | Crear reportes, unirse a mesas, votar simbólico |
| 3 | Dirección verificada | Crear mesas, propuestas, moderar |
| 4 | Biométrico (futuro) | Roles de alta confianza, guardianes |

**Funcionalidades Principales:**

| Funcionalidad | Descripción |
| :---- | :---- |
| Perfil Cívico | Nombre, comuna, intereses, preferencias de privacidad |
| Dashboard de Actividad | Resumen de misiones, karma, participación |
| Sistema Karma | Puntos por acciones positivas, topes anti-élite |
| GPS Cívico | Siguiente misión sugerida, progreso de trayectorias |
| Exportación Total | Descarga todos tus datos en formato portable (F-02) |
| Configuración de Alertas | Notificaciones personalizadas por tema/comuna |

## **5.2 Academia Cívica (\~385 horas con F-27/F-29)**

*Plataforma de micro-aprendizaje cívico. Transforma ciudadanos pasivos en informados.*

**Loop End-to-End:**  
Descubrir cápsula → Consumir (15-30 seg) → Marcar completada → Quiz opcional → Recibir siguiente

**Decisiones Aplicadas:**

* F-06: Moderación \- Contenido curado y verificado  
* F-08: Disyuntor Humano \- Revisión de contenido sensible  
* F-27: Máximo Realista \- Escala optimizada de contenido  
* F-29: Plan de Producción \- Workflow de creación de cápsulas

**Estructura de Contenido (F-27):**

| Componente | Cantidad | Descripción |
| :---- | :---- | :---- |
| Rutas Ciudadanas | 50 | Caminos temáticos de aprendizaje |
| Cápsulas | 250+ | Unidades de micro-aprendizaje (15-30 seg) |
| Power Duels | 200 | Comparativas rápidas entre conceptos |
| Quizzes | 100 | Evaluaciones de conocimiento |
| Plantillas Educativas | 80 | Templates para acciones cívicas |
| Badges | 48 | Reconocimientos por logros (8 dominios × 6 niveles) |

**Los 8 Dominios Temáticos:**

| \# | Dominio | Temas Incluidos |
| :---- | :---- | :---- |
| 1 | Fundamentos | 3 poderes, estructura del Estado, Constitución |
| 2 | Presupuesto | Finanzas públicas, FCM, presupuesto municipal |
| 3 | Justicia | Sistema judicial, recursos legales, derechos |
| 4 | Participación | COSOC, juntas de vecinos, consultas ciudadanas |
| 5 | Transparencia | Ley 20.285, acceso a información, CPLT |
| 6 | Electoral | Sistema electoral, SERVEL, procesos de votación |
| 7 | Municipal | Alcalde, concejo, servicios municipales |
| 8 | Derechos | Constitucionales, laborales, consumidor |

## **5.3 Asistente Cívico \- Civia (\~120 horas)**

*IA conversacional que orienta al ciudadano con información verificada y genera documentos.*

**Loop End-to-End:**  
Preguntar → Orientación con fuentes → Generar documento → Exportar/Enviar

**Decisiones Aplicadas:**

* F-01: Complejidad MVP \- Módulo core de asistencia  
* F-02: Honestidad Radical \- Respuestas siempre con fuente y fecha  
* F-03: Constitución de Datos \- Datos mínimos en plantillas  
* F-17: IA como Asistente \- No reemplaza decisión humana  
* F-41: Identidad Civia \- Personalidad definida, tono cálido/institucional

**Stack Anti-Alucinación (12 técnicas $0):**

| \# | Técnica | Implementación |
| :---- | :---- | :---- |
| 1 | Evidence-Only Policy | Respuestas solo con fuentes citadas del Knowledge Cache |
| 2 | Abstención Dura | "No tengo datos verificados sobre esto" |
| 3 | BGE Reranker | Retrieval híbrido para mejor relevancia |
| 4 | Verificador NLI | Chequeo de coherencia lógica |
| 5 | Confidence Scoring | Nivel de confianza explícito en respuestas |
| 6 | Source Attribution | Cita obligatoria de fuente y fecha |
| 7 | Freshness Check | Advertencia si datos cerca de TTL |
| 8 | Contradiction Detection | Alerta si fuentes contradicen |

**Personalidad Civia (F-41):**

* 18 bienvenidas en tono cálido (para onboarding)  
* 21 bienvenidas en tono institucional (para trámites)  
* Cambio automático de tono según contexto  
* Nunca finge emociones, siempre transparente sobre ser IA

## **5.4 Alza la Voz \+ Mesas Ciudadanas (\~150 horas)**

*Sistema de reportes ciudadanos y resolución colaborativa de problemas vecinales.*

**Loop End-to-End:**  
Reportar problema → Crear/unirse a Mesa → Asignar tareas → Seguir avance → Cerrar con evidencia

**Decisiones Aplicadas:**

* F-01: Complejidad MVP \- Módulo core de acción  
* F-06: Moderación \- Revisión de reportes  
* F-19: Advertencia de Riesgo \- Alertas sobre denuncias sensibles  
* F-21: Mesas Ciudadanas \- Colaboración estructurada  
* F-24: Expediente de Evidencia \- Trazabilidad completa  
* F-38: Semáforo Eficiencia Alcalde \- Indicador de respuesta municipal

**Flujo de Reportes:**

| Estado | Actor | Acciones |
| :---- | :---- | :---- |
| NUEVO | Ciudadano | Crea reporte con descripción, fotos, ubicación |
| VALIDANDO | Sistema | Categorización automática, verificación de duplicados |
| PUBLICADO | Comunidad | Otros apoyan, comentan, se unen a Mesa |
| EN\_MESA | Mesa | Se asignan tareas, se coordina solución |
| EN\_PROGRESO | Responsable | Se trabaja en solución, se actualiza avance |
| RESUELTO | Mesa | Se cierra con evidencia verificable |
| ESCALADO | Sistema | Inactividad \>30 días, escalamiento automático (F-25) |

**Semáforo de Eficiencia (F-38):**

* 🟢 Verde: \<15 días promedio de respuesta  
* 🟡 Amarillo: 15-30 días promedio  
* 🔴 Rojo: \>30 días promedio

## **5.5 Cuentas Claras (\~180 horas)**

*Visualización y fiscalización de datos públicos: presupuestos, contratos, lobby, patrimonio.*

**Loop End-to-End:**  
Seleccionar dataset → Visualizar → Comparar comunas → Identificar anomalías → Exportar análisis

**Decisiones Aplicadas:**

* F-01: Complejidad MVP \- Módulo core de transparencia  
* F-02: Honestidad Radical \- Datos siempre con fuente  
* F-15: Termómetro Cívico \- Dashboard público de indicadores  
* F-16: Expediente de Autoridad \- Perfil completo de cada autoridad  
* F-24: Expediente de Evidencia \- Exportación documentada

**Fuentes de Datos:**

| Fuente | Datos | Actualización |
| :---- | :---- | :---- |
| SINIM (sinimr) | 20+ indicadores municipales | Mensual |
| Presupuesto Abierto | Presupuestos nacionales y municipales | Anual |
| DIPRES | 442 datasets de finanzas públicas | Variable |
| InfoLobby | Audiencias de autoridades | Semanal |
| InfoProbidad | Declaraciones de patrimonio | Anual |
| ChileCompra | Licitaciones y contratos | Diario |

**Principio Fundamental:**  
Funciona completo SIN scraping activo \- todos los datos son datasets públicos cargados y curados.

## **5.6 Voto Ciudadano (\~150 horas)**

*Sistema de votación simbólica y seguimiento de representantes.*

**Loop End-to-End:**  
Ver tema → Informarse (cápsula) → Votar simbólico → Ver resultado → Exportar mandato

**Decisiones Aplicadas:**

* F-01: Complejidad MVP \- Módulo de participación  
* F-02: Honestidad Radical \- Votaciones con contexto  
* F-09: Coherencia de Marca \- UI "Tinder Cívico" neutral  
* F-11: North Star \- Métricas de impacto real  
* F-23: GPS Cívico \- Integración con misiones de votación

**Funcionalidades:**

| Funcionalidad | Descripción |
| :---- | :---- |
| VotingCard (Tinder Cívico) | Interfaz de swipe para votar temas rápidamente |
| Feed Personalizado | Temas relevantes según comuna e intereses |
| Feedback Inmediato | "65% de tu comuna votó igual" |
| Match Parlamentario | Comparación de tu voto con votaciones reales |
| Mandato Exportable | Documento de posiciones para enviar a representantes |
| Seguimiento de Parlamentarios | Notificaciones de votaciones de interés |

# **6\. ARQUITECTURA TÉCNICA CONSOLIDADA**

## **6.1 Stack Tecnológico**

| Capa | Tecnología | Justificación |
| :---- | :---- | :---- |
| Frontend | React \+ PWA | Offline-first, instalable, responsive |
| Backend | Node.js / Python | APIs REST, pipelines de datos |
| Base de Datos | PostgreSQL managed | Relacional, JSON support, escalable |
| Caché | Redis / LocalStorage | Datos offline, sincronización |
| CDN | Cloudflare / Vercel | Assets estáticos, edge caching |
| IA | LLM externo (Claude/GPT) | Asistente con RAG \+ anti-alucinación |
| Hosting | Railway / Render / Vercel | PaaS con auto-scaling |

## **6.2 Arquitectura Offline-First (F-04, F-20)**

| Modo | Tamaño | Funcionalidad |
| :---- | :---- | :---- |
| Experiencia Completa (HIGH) | \~15MB | Todas las funciones, datos en tiempo real |
| Experiencia Ligera (MEDIUM) | \~3MB | Funciones core, datos cacheados 24h |
| Modo Resiliencia (LOW) | \~800KB | Offline total, datos locales, sync diferido |

## **6.3 Costos Operacionales Estimados**

| Componente | Costo/mes | Notas |
| :---- | :---- | :---- |
| PostgreSQL managed (Neon.tech) | $0-50 | Free tier \+ scaling |
| Hosting (Vercel) | $0-20 | Free tier inicial |
| CDN (Cloudflare) | $0 | Free tier suficiente |
| Pipelines (GitHub Actions) | $0 | Free para público |
| Monitoreo | $0-50 | Free tier \+ alertas |
| LLM API (Claude/GPT) | Variable | Según uso, optimizado con cache |
| **TOTAL ESTIMADO** | **$100-260** | **Sin contar LLM** |

# **7\. MÉTRICAS Y KPIs DE ÉXITO**

## **7.1 KPIs de Datos**

| Métrica | Meta MVP | Meta V1 |
| :---- | :---- | :---- |
| Items en caché | 900 | 7,560+ |
| Cobertura comunas | 346/346 | 346/346 |
| Cobertura parlamentarios | 0 | 205/205 |
| Datos con source verificable | 100% | 100% |
| Datos dentro de TTL | \>95% | \>98% |

## **7.2 KPIs de Calidad**

| Métrica | Umbral | Meta |
| :---- | :---- | :---- |
| Errores de validación | \<1% | \<0.1% |
| Rollbacks por datos corruptos | \<5 | 0 |
| Precisión de datos (muestreo) | \>95% | \>98% |
| Tiempo respuesta búsqueda | \<500ms P95 | \<200ms P95 |

## **7.3 KPIs de Usuario (North Star \- F-11)**

| Métrica | Descripción |
| :---- | :---- |
| Reportes con resolución verificable | Casos cerrados con evidencia de solución |
| Solicitudes de transparencia enviadas | Acciones reales de fiscalización |
| Participación en presupuesto participativo | Impacto en decisiones municipales |
| Tasa de retención D7/D30 | Usuarios que vuelven después de 7/30 días |
| NPS ciudadano | ¿Recomendarías CIVICUM a un vecino? |

# **8\. COBERTURA DE DECISIONES F-01 A F-47**

## **8.1 Decisiones Bloqueantes (F-01 a F-04)**

| ID | Nombre | Cobertura en Anexo |
| :---- | :---- | :---- |
| F-01 | Complejidad MVP (6 módulos) | ✅ 6 módulos especificados completos |
| F-02 | Honestidad Radical | ✅ \_metadata en todas las entidades |
| F-03 | Constitución de Datos | ✅ Campos offline\_priority definidos |
| F-04 | Construcción Secuencial | ✅ Roadmap 16 semanas por fases |

## **8.2 Decisiones de Alta Severidad (F-05 a F-09)**

| ID | Nombre | Cobertura en Anexo |
| :---- | :---- | :---- |
| F-05 | Inclusión por Tiers | ✅ 3 paquetes offline (15MB/3MB/800KB) |
| F-06 | Moderación | ✅ Sistema de frescura \+ Quality Gates |
| F-07 | Confianza Progresiva | ✅ Niveles 0-4 especificados |
| F-08 | Disyuntor Humano | ✅ Cola de revisión en flujo de reportes |
| F-09 | Coherencia de Marca | ✅ Paleta Terracota en documento |

## **8.3 Decisiones de Media Severidad (F-10 a F-12)**

| ID | Nombre | Cobertura en Anexo |
| :---- | :---- | :---- |
| F-10 | Anti-Élite | ✅ Karma con topes en Mi CIVICUM |
| F-11 | North Star | ✅ KPIs de impacto real definidos |
| F-12 | Sistema IA 3 Capas | ✅ Arquitectura completa documentada |

## **8.4 Decisiones Funcionales (F-13 a F-25)**

| ID | Nombre | Cobertura |
| :---- | :---- | :---- |
| F-13 | Tier Detection | ✅ Arquitectura offline-first |
| F-14 | Modo Lite Automático | ✅ 3 niveles de experiencia |
| F-15 | Termómetro Cívico | ✅ Dashboard en Cuentas Claras |
| F-16 | Expediente Autoridad | ✅ Entidad Autoridad completa |
| F-17 | IA como Asistente | ✅ Stack anti-alucinación |
| F-20 | Offline Dignity Mode | ✅ Modo Resiliencia 800KB |
| F-21 | Mesas Ciudadanas | ✅ Flujo completo documentado |
| F-23 | GPS Cívico | ✅ 50 misiones \+ 3 trayectorias |
| F-24 | Expediente Evidencia | ✅ Exportación en módulos |
| F-25 | Escalamiento Automático | ✅ En flujo Alza la Voz |

## **8.5 Decisiones Complementarias (F-26 a F-47)**

Las decisiones F-26 a F-47 están cubiertas por referencia en los documentos maestros del proyecto. Este anexo se enfoca en las especificaciones técnicas de los módulos y el Knowledge Cache.

**CERTIFICACIÓN DE COMPLETITUD**

Este documento constituye el Anexo Técnico Exhaustivo de CIVICUM.

**Contenido validado:**

* ✅ Knowledge Cache: 8 documentos maestros, 10 entidades, roadmap 16 semanas  
* ✅ GPS Cívico: 50 misiones catalogadas, 3 trayectorias de usuario  
* ✅ Sistema de Frescura: TTL, estados, deduplicación, versionado  
* ✅ Pipelines: Arquitectura de ingesta ética, jobs programados  
* ✅ 6 Módulos MVP: Especificaciones completas con loops y decisiones  
* ✅ Arquitectura técnica: Stack, offline-first, costos  
* ✅ Métricas: KPIs de datos, calidad y usuario  
* ✅ Cobertura: F-01 a F-47 verificadas

**Estado: APROBADO PARA IMPLEMENTACIÓN MVP**  
Versión: 1.0 | Enero 2026

*Basado en investigación aprobada: 27 de diciembre de 2025*

─────────────────────────────────────────  
CIVICUM \- Sistema Nervioso Cívico de Chile  
*Transformando frustración en acción democrática*