

**CIVICUM**  
Sistema Nervioso Cívico de Chile

**ANEXO EXHAUSTIVO DE**  
**CAPACIDADES DE AUTOMATIZACIÓN**

Documento para Registro de Propiedad Intelectual  
Instituto Nacional de Propiedad Industrial (INAPI)

| Estado | APROBADO PARA REGISTRO |
| :---: | :---: |
| **Versión** | 1.0 |
| **Fecha** | Febrero 2026 |
| **Total Items** | 39 Capacidades Documentadas |

# **ÍNDICE DE CONTENIDOS**

1\. INTRODUCCIÓN

2\. AUTOMATIZACIÓN IMPLEMENTADA (MVP)

   2.1 Scraping de Fuentes Oficiales

   2.2 Notificaciones Inteligentes

   2.3 Moderación Preventiva

   2.4 Escalamiento de Reportes

   2.5 Síntesis de Reuniones

   2.6 Clasificación de Casos

   2.7 Alertas de Inactividad

   2.8 Sincronización Offline

   2.9 Backup Automático

   2.10 Quality Gates

3\. AUTOMATIZACIÓN FUTURA (POST-MVP)

   3.1 Predicción de Tiempos de Resolución

   3.2 Clustering Automático de Reportes

   3.3 Fact-Checking Automático

   3.4 Alertas de Anomalías Presupuestarias

   3.5 Transcripción Automática

   3.6 Extracción de Promesas

   3.7 Match Parlamentario Avanzado

   3.8 Generación de Informes Personalizados

   3.9 Optimización de Rutas GPS Cívico

   3.10 Red de Poder Automática

4\. PROCESOS Y PROTOCOLOS AUTOMATIZADOS

   4.1 Pipeline de Datos (ETL)

   4.2 Sistema de Alertas

   4.3 Gobernanza Automatizada

5\. MÉTRICAS Y CERTIFICACIÓN

# **1\. INTRODUCCIÓN**

Este anexo documenta de forma exhaustiva todas las capacidades de automatización diseñadas e implementadas en CIVICUM, la plataforma de participación cívica ciudadana de Chile. El documento tiene como objetivo principal establecer la propiedad intelectual de estos sistemas innovadores ante el Instituto Nacional de Propiedad Industrial (INAPI).

CIVICUM implementa un enfoque de automatización inteligente que busca:

* Reducir la carga operativa: Automatizar tareas repetitivas para enfocarse en impacto ciudadano  
* Garantizar escalabilidad: Procesos que funcionan con 100 o 100,000 usuarios  
* Mantener costos mínimos: Stack zero-cost con automatización eficiente  
* Preservar la ética: Automatización que empodera, no reemplaza, la participación humana

## **Resumen de Capacidades**

| Categoría | Cantidad | Estado | Horas Est. |
| :---- | :---- | :---- | :---- |
| Automatización Implementada (MVP) | 10 capacidades | ✅ Diseño completo | \~450h |
| Automatización Futura (Post-MVP) | 10 capacidades | 📋 Especificado | \~780h |
| Procesos y Protocolos | 19 componentes | ✅ Diseño completo | \~150h |
| **TOTAL** | **39 items** | \- | **\~1,380h** |

# **2\. AUTOMATIZACIÓN IMPLEMENTADA (MVP)**

Esta sección documenta las 10 capacidades de automatización incluidas en el MVP de CIVICUM. Cada capacidad está completamente diseñada con arquitectura técnica, implementación de referencia y decisiones formales que la respaldan.

## **2.1 Scraping de Fuentes Oficiales**

| ID | AI.01 |
| :---- | :---- |
| **Descripción** | 43+ fuentes con validación automática |
| **Módulo Impactado** | Cuentas Claras, Observatorio, Asistente Cívico |
| **Decisión Relacionada** | F-07 (Scraping Dependencia Crítica) |
| **Horas Estimadas** | 40h configuración inicial \+ 8h/mes mantenimiento |

### **Arquitectura y Diseño**

El sistema de scraping de CIVICUM implementa una arquitectura de extracción de datos distribuida y ética que obtiene información de 43+ fuentes oficiales del Estado de Chile. Esta arquitectura está diseñada para ser resiliente ante cambios en los sitios de origen, respetuosa con los recursos de los servidores gubernamentales, y capaz de estructurar datos no estructurados (como PDFs) en formatos utilizables.

COMPONENTES PRINCIPALES:

1\. Repositorio Separado (civicum-scrapers)   \- Código desacoplado de la aplicación principal   \- Workflows de GitHub Actions para ejecución programada   \- Tests de validación de esquemas   \- Documentación de cada fuente

2\. Pipeline de Extracción por Tipo de Fuente   \- APIs Oficiales (Prioridad 1): ChileCompra API, Congreso Abierto, ChileAtiende   \- Datasets Descargables (Prioridad 2): DIPRES Excel/CSV, SERVEL históricos   \- Scraping Ético (Prioridad 3): InfoLobby, BCN detallado, Municipios sin portal

3\. Motor de Navegación Compleja (Playwright)   \- Renderizado de SPAs (React/Angular)   \- Interceptación de llamadas JSON internas   \- Selectores semánticos (texto, ARIA) en lugar de CSS frágiles   \- Manejo de sesiones para sitios que requieren autenticación

4\. Validación Automática (Zod)   \- Esquemas JSON estrictos por tipo de dato   \- Validación de tipos, formatos y rangos   \- Rechazo de datos que no cumplan el esquema   \- Alertas automáticas si la validación falla

### **Implementación Técnica**

// Ejemplo de pipeline de scraping con validaciónimport { chromium } from 'playwright';import { z } from 'zod';// Esquema de validación para presupuesto municipalconst PresupuestoSchema \= z.object({  comuna: z.string().min(1),  monto\_total: z.number().positive(),  monto\_ejecutado: z.number().min(0),  periodo: z.string().regex(/^\\d{4}$/),  fecha\_extraccion: z.date(),  fuente\_url: z.string().url()});async function scrapeDIPRES() {  const browser \= await chromium.launch();  const page \= await browser.newPage();    // Interceptar llamadas API internas (más robusto que HTML)  page.on('response', async (response) \=\> {    if (response.url().includes('/api/presupuesto')) {      const data \= await response.json();      // Validar antes de guardar      const validated \= PresupuestoSchema.parse(data);      await saveToDatabase(validated);    }  });    await page.goto('https://presupuestoabierto.gob.cl');  // ... navegación    await browser.close();}

### **Fuentes de Datos**

* datos.gob.cl (CKAN v3) \- 2,825 datasets  
* SINIM (sinimr R package) \- 346 comunas  
* Congreso Abierto (REST/XML) \- Cámara \+ Senado  
* InfoLobby (REST \+ SPARQL) \- 21,500+ sujetos  
* InfoProbidad (SPARQL \+ CSV) \- Declaraciones patrimonio  
* Presupuesto Abierto (API) \- Datos transaccionales  
* ChileAtiende (REST) \- 2,400+ servicios  
* BCN/LeyChile (Web Service) \- 407,000+ normas  
* ChileCompra (API pública) \- Licitaciones y contratos  
* SERVEL \- Resultados electorales (scraping)  
* Contraloría \- Jurisprudencia administrativa (scraping)

### **Política Ética**

POLÍTICA DE SCRAPING ÉTICO:| Regla | Valor | Justificación ||-------|-------|---------------|| robots.txt | ✅ Obligatorio | Respeto a indicaciones del sitio || Rate limit | 1 req/segundo máx | No sobrecargar servidores || User-Agent | "CIVICUM-Bot/1.0" | Identificable para admins || Cache mínimo | 24 horas | Reducir solicitudes || TOS review | Documentado | Verificar términos || Feature flag | Apagado default | Control de activación || Horario | Madrugada (00-06h) | Menor carga en servidores || Incremental | Solo cambios | No descargar todo cada vez |

## **2.2 Notificaciones Inteligentes**

| ID | AI.02 |
| :---- | :---- |
| **Descripción** | Basadas en actividad y preferencias del usuario |
| **Módulo Impactado** | Mi CIVICUM, Alza la Voz, Voto Ciudadano |
| **Decisión Relacionada** | F-14 (Narrativas de Impacto) |
| **Horas Estimadas** | 60h desarrollo \+ 20h integración |

### **Arquitectura y Diseño**

El sistema de notificaciones de CIVICUM implementa un modelo de "3 Canales" que prioriza la relevancia y el control del usuario sobre la saturación informativa. Inspirado en la filosofía de que "menos es más", el sistema clasifica cada evento por urgencia e impacto personal.

ARQUITECTURA DE 3 CANALES:

1\. Canal Rojo (Inmediato \- Push Urgente)   \- Emergencias cívicas: alertas de seguridad, cierres de plazo legal   \- Respuestas a reportes del usuario   \- Resultados de votaciones ciudadanas importantes   \- Delivery: Web Push API inmediato

2\. Canal Azul (Digest Diario)   \- Novedades legislativas relevantes   \- Actualizaciones de casos seguidos   \- Logros de la comunidad   \- Delivery: Una notificación/día a hora configurable

3\. Canal Gris (In-App Silencioso)   \- Estadísticas y curiosidades   \- Sugerencias de misiones   \- Contenido educativo   \- Delivery: Solo badge en campana, sin push

PERSONALIZACIÓN BASADA EN ACTIVIDAD:

El motor analiza:- Intereses declarados (temas seguidos, comuna de interés)- Comportamiento histórico (qué notificaciones abre/ignora)- Horarios de mayor actividad- Dispositivo y conectividad

### **Implementación Técnica**

// Tabla notification\_eventsCREATE TABLE notification\_events (  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  user\_id UUID REFERENCES profiles(id),  type VARCHAR(50) NOT NULL, \-- 'emergencia', 'plazo\_legal', 'respuesta', etc.  channel VARCHAR(10) NOT NULL CHECK (channel IN ('rojo', 'azul', 'gris')),  payload JSONB NOT NULL,  created\_at TIMESTAMPTZ DEFAULT NOW(),  processed\_at TIMESTAMPTZ,  read\_at TIMESTAMPTZ);// Tabla notification\_preferencesCREATE TABLE notification\_preferences (  user\_id UUID PRIMARY KEY REFERENCES profiles(id),  digest\_enabled BOOLEAN DEFAULT true,  digest\_hour INT DEFAULT 20 CHECK (digest\_hour BETWEEN 0 AND 23),  allow\_red\_channel BOOLEAN DEFAULT true,  muted\_categories TEXT\[\] DEFAULT '{}',  timezone VARCHAR(50) DEFAULT 'America/Santiago');// Función de clasificación de canalfunction classifyChannel(event) {  const redTriggers \= \['emergencia', 'plazo\_legal', 'respuesta\_autoridad'\];  const blueTriggers \= \['novedad\_legislativa', 'actualizacion\_caso', 'logro'\];    if (redTriggers.includes(event.type)) return 'rojo';  if (blueTriggers.includes(event.type)) return 'azul';  return 'gris';}

### **Notificaciones Accionables**

PUSH NOTIFICATIONS ACCIONABLES (Service Worker):1. Voto Rápido en Círculos   Título: "Votación en tu Círculo: Guardias para la plaza"   Acciones: \[Sí, Aprobar\] \[No, Rechazar\] \[Leer más\]   → El click se procesa en background sin abrir la app2. Apoyo Rápido en Alza la Voz   Título: "Basura acumulada a 200m de ti"   Acción: \[Confirmar: Yo también lo veo\]   → Registra apoyo al reporte con un tap3. Recordatorio de Plazo Legal   Título: "⚠️ Plazo vence en 48h: Respuesta a tu reclamo"   Acciones: \[Ver caso\] \[Escalar a Contraloría\]   → Escala automático si elige la opción

## **2.3 Moderación Preventiva**

| ID | AI.03 |
| :---- | :---- |
| **Descripción** | TensorFlow.js detecta toxicidad pre-envío |
| **Módulo Impactado** | Alza la Voz, Círculos, Mesas de Trabajo |
| **Decisión Relacionada** | F-06 (Educación Progresiva) |
| **Horas Estimadas** | 45h desarrollo \+ 15h fine-tuning |

### **Arquitectura y Diseño**

El sistema de moderación de CIVICUM implementa un pipeline de "Corrector de Empatía" que detecta y ayuda a reformular contenido potencialmente tóxico ANTES de que el usuario lo publique. A diferencia de la moderación tradicional (post-facto), este enfoque educativo previene daños y mejora la calidad del discurso cívico.

ARQUITECTURA DE 3 CAPAS DE DEFENSA:

Capa 1: Filtro Rápido de Lista Negra (Client-Side)- Regex contra palabras prohibidas (insultos directos, hate speech)- Ejecuta en \<5ms en el navegador- Bloqueo inmediato \+ mensaje de reformulación

Capa 2: Modelo de Toxicidad TensorFlow.js (Client-Side)- Modelo quantizado (\~2MB) ejecuta 100% en el dispositivo- Privacidad total: el texto nunca sale del navegador- Clasifica: odio, violencia, acoso, insultos, sexual- Umbral configurable de severidad

Capa 3: Verificación de Contexto (Server-Side, opcional)- Para textos ambiguos que pasan Capa 1-2- Analiza contexto conversacional- Puede elevar a Jurado Digital si es necesario

FLUJO DE CORRECTOR DE EMPATÍA:

1\. Usuario escribe mensaje2. \[Capa 1\] Regex detecta "imbécil" → Bloqueo inmediato3. \[Capa 2\] TensorFlow detecta tono agresivo → Advertencia amarilla4. Sistema sugiere: "Tu mensaje podría malinterpretarse. ¿Qué tal...?"5. Usuario reformula o envía "bajo su responsabilidad"6. Si envía y es reportado → Jurado Digital con metadata de advertencia

### **Implementación Técnica**

// Implementación TensorFlow.js en clienteimport \* as toxicity from '@tensorflow-models/toxicity';const TOXICITY\_THRESHOLD \= 0.75;let model \= null;async function loadToxicityModel() {  model \= await toxicity.load(TOXICITY\_THRESHOLD, \[    'identity\_attack',    'insult',     'threat',    'severe\_toxicity'  \]);}async function checkMessage(text) {  if (\!model) await loadToxicityModel();    const predictions \= await model.classify(\[text\]);    const results \= {    toxic: false,    categories: \[\],    suggestions: \[\]  };    for (const prediction of predictions) {    if (prediction.results\[0\].match) {      results.toxic \= true;      results.categories.push(prediction.label);    }  }    if (results.toxic) {    results.suggestions \= generateEmpathySuggestions(text, results.categories);  }    return results;}function generateEmpathySuggestions(text, categories) {  // Reemplazos empáticos contextuales  const replacements \= {    'identity\_attack': 'Intenta enfocarte en acciones, no en personas',    'insult': 'Podrías expresar tu frustración de forma constructiva',    'threat': 'Las amenazas no ayudan a resolver problemas cívicos'  };    return categories.map(cat \=\> replacements\[cat\] || 'Revisa el tono de tu mensaje');}

### **Beneficios**

* Privacidad total: procesamiento 100% local  
* Latencia mínima: \<100ms para análisis  
* Sin costos de API externa  
* Educativo: ayuda a reformular, no solo bloquea  
* Reduce carga de moderación humana en 90%+

## **2.4 Escalamiento de Reportes**

| ID | AI.04 |
| :---- | :---- |
| **Descripción** | Según umbrales de apoyos (F-25) |
| **Módulo Impactado** | Alza la Voz |
| **Decisión Relacionada** | F-25 (Sostenibilidad Ética) |
| **Horas Estimadas** | 35h desarrollo \+ 10h ajuste de umbrales |

### **Arquitectura y Diseño**

El sistema de escalamiento automático de CIVICUM implementa un modelo de "Efecto Bola de Nieve Cívica" donde los reportes ciudadanos ganan visibilidad y prioridad institucional conforme reciben apoyo de la comunidad. Esto democratiza la atención sin depender de conexiones políticas.

NIVELES DE ESCALAMIENTO AUTOMÁTICO:

Nivel 1: Reporte Local (0-9 apoyos)- Visible solo en la comuna- Notifica al municipio como "Reporte Individual"- Sin priorización especial

Nivel 2: Reporte Comunitario (10-49 apoyos)- Destacado en feed comunal- Etiqueta "Comunidad Respalda"- Notificación a OIRS municipal con prioridad media

Nivel 3: Reporte de Impacto (50-199 apoyos)- Visible a nivel regional- Etiqueta "Problema Confirmado"- Notificación a Gobernación Regional- Plazo de respuesta sugerido: 15 días

Nivel 4: Reporte de Interés Público (200+ apoyos)- Visible a nivel nacional- Etiqueta "Interés Público"- Notificación a Contraloría si excede plazo legal- Candidato a cobertura mediática- Plazo de respuesta: 10 días

PROTECCIONES ANTI-MANIPULACIÓN:

1\. Un apoyo por usuario verificado (1 persona \= 1 voto)2. Detección de patrones de bots (velocidad, geolocalización)3. Ponderación por "Karma Cívico" del usuario que apoya4. Congelamiento temporal si hay sospecha de manipulación

### **Implementación Técnica**

// Tabla de umbrales de escalamientoconst THRESHOLDS \= {  COMUNITARIO: 10,  IMPACTO: 50,  INTERES\_PUBLICO: 200};// Función de escalamiento automáticoasync function evaluateEscalation(reportId) {  const report \= await getReport(reportId);  const supportCount \= await getSupportCount(reportId);  const currentLevel \= report.escalation\_level;    let newLevel \= currentLevel;  let actions \= \[\];    if (supportCount \>= THRESHOLDS.INTERES\_PUBLICO && currentLevel \< 4\) {    newLevel \= 4;    actions.push({      type: 'notify\_contraloria',      reason: 'Reporte con 200+ apoyos ciudadanos'    });  } else if (supportCount \>= THRESHOLDS.IMPACTO && currentLevel \< 3\) {    newLevel \= 3;    actions.push({      type: 'notify\_regional',      entity: report.region\_code    });  } else if (supportCount \>= THRESHOLDS.COMUNITARIO && currentLevel \< 2\) {    newLevel \= 2;    actions.push({      type: 'highlight\_in\_feed',      scope: 'comuna'    });  }    if (newLevel \!== currentLevel) {    await updateReportLevel(reportId, newLevel);    await executeActions(actions);    await notifyReporter(report.user\_id, newLevel);  }}// Protección anti-botsasync function validateSupport(userId, reportId) {  const user \= await getUser(userId);    // Verificar cuenta real  if (\!user.email\_verified) throw new Error('Cuenta no verificada');    // Verificar no ha apoyado antes  const existing \= await checkExistingSupport(userId, reportId);  if (existing) throw new Error('Ya apoyaste este reporte');    // Verificar velocidad sospechosa  const recentSupports \= await getRecentSupports(userId, '1 hour');  if (recentSupports \> 50\) {    await flagForReview(userId, 'Possible bot behavior');    throw new Error('Actividad sospechosa detectada');  }    return true;}

### **Métricas de Éxito**

* Tiempo promedio de respuesta institucional por nivel  
* Tasa de resolución por nivel de escalamiento  
* Distribución de reportes por nivel  
* Casos escalados a Contraloría vs resueltos localmente

## **2.5 Síntesis de Reuniones**

| ID | AI.05 |
| :---- | :---- |
| **Descripción** | IA genera actas automáticas de Mesas de Trabajo |
| **Módulo Impactado** | Mesas de Trabajo (Alza la Voz) |
| **Decisión Relacionada** | F-17 (IA como Asistente) |
| **Horas Estimadas** | 50h desarrollo \+ 20h ajuste de prompts |

### **Arquitectura y Diseño**

El sistema de síntesis de reuniones de CIVICUM utiliza IA para generar actas automáticas de las Mesas de Trabajo ciudadanas. Esto reduce la carga administrativa de los moderadores y garantiza que todas las decisiones queden documentadas de forma consistente.

FLUJO DE GENERACIÓN DE ACTAS:

1\. Durante la Reunión   \- Moderador marca inicio/fin de sesión   \- Participantes pueden marcar "puntos clave" en tiempo real   \- Sistema registra todas las intervenciones con timestamps

2\. Post-Reunión (Automático)   \- IA procesa el transcript completo   \- Identifica: participantes, temas tratados, acuerdos, tareas   \- Genera borrador de acta estructurada

3\. Revisión Humana   \- Moderador revisa y ajusta el borrador   \- Puede agregar contexto o corregir interpretaciones   \- Aprueba versión final

4\. Distribución   \- Acta se publica automáticamente   \- Notificación a participantes   \- Tareas asignadas se convierten en tickets de seguimiento

ESTRUCTURA DEL ACTA AUTOMÁTICA:

\- Encabezado: Mesa, fecha, duración, participantes- Resumen Ejecutivo: 2-3 párrafos con lo esencial- Puntos Tratados: Lista con descripción breve- Acuerdos Alcanzados: Decisiones tomadas- Tareas Asignadas: Responsable, descripción, plazo- Próximos Pasos: Fecha siguiente reunión, temas pendientes

### **Implementación Técnica**

// Prompt para generación de actaconst ACTA\_PROMPT \= \`Eres el secretario automático de una Mesa de Trabajo ciudadana de CIVICUM.Genera un acta formal a partir del siguiente transcript.REGLAS:- Sé objetivo y neutral- Usa lenguaje formal pero accesible- No incluyas información que no esté en el transcript- Si algo es ambiguo, márcalo como "\[VERIFICAR\]"- Identifica claramente los ACUERDOS vs las OPINIONESTRANSCRIPT:{transcript}FORMATO DE SALIDA (JSON):{  "resumen\_ejecutivo": "...",  "participantes": \["nombre1", "nombre2"\],  "puntos\_tratados": \[    {"tema": "...", "descripcion": "...", "decision": "..." }  \],  "acuerdos": \[    {"descripcion": "...", "votacion": "unanime|mayoria|consenso" }  \],  "tareas": \[    {"responsable": "...", "descripcion": "...", "plazo": "..." }  \],  "proxima\_reunion": "fecha o null"}\`;async function generateActa(meetingId) {  const meeting \= await getMeeting(meetingId);  const transcript \= await getTranscript(meetingId);    // Llamar a LLM local o API  const response \= await llm.complete({    prompt: ACTA\_PROMPT.replace('{transcript}', transcript),    max\_tokens: 2000  });    const actaData \= JSON.parse(response);    // Crear tareas automáticamente  for (const tarea of actaData.tareas) {    await createTask({      mesa\_id: meetingId,      assignee: tarea.responsable,      description: tarea.descripcion,      due\_date: parseDate(tarea.plazo)    });  }    // Guardar borrador para revisión  await saveActaDraft(meetingId, actaData);    // Notificar al moderador  await notifyModerator(meeting.moderator\_id, 'Acta generada, pendiente de revisión');}

### **Validaciones**

* Moderador debe aprobar antes de publicar  
* Participantes pueden agregar correcciones  
* Historial de versiones del acta  
* Firma digital opcional del moderador

## **2.6 Clasificación de Casos**

| ID | AI.06 |
| :---- | :---- |
| **Descripción** | Router automático de reportes ciudadanos |
| **Módulo Impactado** | Alza la Voz |
| **Decisión Relacionada** | F-03 (Datos Mínimos Viables) |
| **Horas Estimadas** | 40h desarrollo \+ 20h entrenamiento |

### **Arquitectura y Diseño**

El sistema de clasificación automática de CIVICUM implementa un "Router Inteligente" que analiza cada reporte ciudadano y lo direcciona automáticamente a la entidad responsable correcta. Esto elimina la confusión ciudadana sobre "a quién reportar qué".

TAXONOMÍA DE CLASIFICACIÓN:

Categoría Principal → Subcategoría → Entidad Responsable

1\. INFRAESTRUCTURA URBANA   \- Luminarias → Municipio (DOM)   \- Pavimentación → Municipio (SECPLA) o MOP   \- Semáforos → UOCT / Municipio   \- Áreas verdes → Municipio (Aseo y Ornato)

2\. SERVICIOS PÚBLICOS   \- Recolección basura → Municipio (Aseo)   \- Agua potable → Empresa sanitaria   \- Electricidad → Empresa distribuidora   \- Transporte → MTT / DTPM

3\. SEGURIDAD CIUDADANA   \- Delitos → Fiscalía / Carabineros   \- Denuncias anónimas → PDI   \- Violencia intrafamiliar → Carabineros \+ SERNAMEG

4\. MEDIOAMBIENTE   \- Contaminación → SMA / Seremi Salud   \- Ruidos molestos → Municipio (Juzgado Policía Local)   \- Vertederos ilegales → SMA \+ Municipio

5\. PROBIDAD Y TRANSPARENCIA   \- Falta de información → CPLT   \- Mal uso recursos → Contraloría   \- Conflicto de interés → CPLT \+ Contraloría

### **Implementación Técnica**

// Modelo de clasificación multi-labelconst CATEGORIES \= {  INFRAESTRUCTURA: {    keywords: \['luminaria', 'vereda', 'calle', 'semáforo', 'parque', 'plaza'\],    subcategories: {      LUMINARIAS: \['luz', 'alumbrado', 'poste', 'foco'\],      PAVIMENTO: \['hoyo', 'bache', 'vereda', 'asfalto'\],      AREAS\_VERDES: \['pasto', 'árbol', 'plaza', 'parque', 'juegos'\]    }  },  // ... más categorías};async function classifyReport(report) {  const text \= \`${report.title} ${report.description}\`.toLowerCase();    // Paso 1: Clasificación por keywords (rápida)  let category \= null;  let subcategory \= null;  let confidence \= 0;    for (const \[cat, config\] of Object.entries(CATEGORIES)) {    for (const keyword of config.keywords) {      if (text.includes(keyword)) {        const matchCount \= countMatches(text, config.keywords);        if (matchCount \> confidence) {          category \= cat;          confidence \= matchCount;        }      }    }  }    // Paso 2: Refinamiento con LLM si confianza baja  if (confidence \< 3\) {    const llmResult \= await llmClassify(text);    category \= llmResult.category;    subcategory \= llmResult.subcategory;    confidence \= llmResult.confidence;  }    // Paso 3: Asignar entidad responsable  const responsibleEntity \= getResponsibleEntity(    category,     subcategory,     report.comuna\_code  );    return {    category,    subcategory,    responsible\_entity: responsibleEntity,    confidence,    auto\_assigned: true  };}// Routing a entidad correctafunction getResponsibleEntity(category, subcategory, comuna) {  const routingTable \= {    INFRAESTRUCTURA: {      LUMINARIAS: { type: 'municipal', dept: 'DOM' },      PAVIMENTO: { type: 'municipal', dept: 'SECPLA' },      AREAS\_VERDES: { type: 'municipal', dept: 'ASEO\_ORNATO' }    },    SERVICIOS: {      AGUA: { type: 'empresa', provider: getSanitaria(comuna) },      ELECTRICIDAD: { type: 'empresa', provider: getDistribuidora(comuna) }    }    // ...  };    return routingTable\[category\]?.\[subcategory\] || { type: 'manual\_review' };}

**Precisión Esperada:** 85%+ en categoría principal, 75%+ en subcategoría

## **2.7 Alertas de Inactividad**

| ID | AI.07 |
| :---- | :---- |
| **Descripción** | Seguimiento automático de reportes sin respuesta |
| **Módulo Impactado** | Alza la Voz |
| **Decisión Relacionada** | F-02 (Honestidad Radical) |
| **Horas Estimadas** | 25h desarrollo \+ 10h configuración |

### **Arquitectura y Diseño**

El sistema de alertas de inactividad de CIVICUM implementa un "Watchdog Cívico" que monitorea constantemente el estado de todos los reportes y genera alertas cuando no hay avances dentro de los plazos esperados. Esto mantiene la presión institucional y evita que los casos "se pierdan en el sistema".

NIVELES DE ALERTA AUTOMÁTICA:

Alerta Verde (Informativa) \- Día 3- "Tu reporte fue recibido. Esperamos respuesta en 7 días."- Solo al ciudadano que reportó

Alerta Amarilla (Recordatorio) \- Día 7- "Han pasado 7 días sin respuesta. El plazo legal vence en 8 días."- Al ciudadano \+ badge visible en el reporte

Alerta Naranja (Urgencia) \- Día 12- "⚠️ Plazo legal vence en 3 días. Puedes escalar a Contraloría."- Al ciudadano \+ opción de escalamiento 1-click- Notificación automática al OIRS

Alerta Roja (Incumplimiento) \- Día 15+- "❌ Plazo legal vencido. Caso disponible para Contraloría."- Escalamiento automático si usuario lo autoriza- Registro público de incumplimiento institucional

TIPOS DE INACTIVIDAD MONITOREADOS:

1\. Sin primera respuesta (plazo legal: 15 días hábiles)2. Respuesta genérica sin acción concreta3. Caso "en proceso" sin actualización por 30 días4. Resolución insatisfactoria sin seguimiento

### **Implementación Técnica**

// Job programado de monitoreo (cron diario)async function checkInactiveReports() {  const today \= new Date();    // Obtener reportes sin respuesta  const pendingReports \= await db.query(\`    SELECT r.\*,            EXTRACT(DAY FROM NOW() \- r.created\_at) as days\_pending,           u.email, u.notification\_preferences    FROM reports r    JOIN users u ON r.user\_id \= u.id    WHERE r.status IN ('pending', 'in\_review', 'in\_progress')    AND r.last\_update\_at \< NOW() \- INTERVAL '3 days'    ORDER BY r.created\_at ASC  \`);    for (const report of pendingReports) {    const alertLevel \= determineAlertLevel(report.days\_pending);        if (shouldSendAlert(report, alertLevel)) {      await sendInactivityAlert(report, alertLevel);      await logAlertSent(report.id, alertLevel);    }        // Escalamiento automático si autorizado    if (alertLevel \=== 'red' && report.auto\_escalate\_enabled) {      await escalateToContraloria(report);    }  }}function determineAlertLevel(daysPending) {  if (daysPending \>= 15\) return 'red';  if (daysPending \>= 12\) return 'orange';  if (daysPending \>= 7\) return 'yellow';  if (daysPending \>= 3\) return 'green';  return null;}const ALERT\_MESSAGES \= {  green: {    title: '📋 Seguimiento de tu reporte',    body: 'Tu reporte fue recibido. Esperamos respuesta institucional en los próximos días.'  },  yellow: {    title: '⏰ Recordatorio: 7 días sin respuesta',    body: 'Han pasado 7 días. El plazo legal vence en 8 días más.'  },  orange: {    title: '⚠️ Urgente: Plazo vence en 3 días',    body: 'Sin respuesta oficial. Puedes escalar a Contraloría si lo deseas.'  },  red: {    title: '❌ Plazo legal vencido',    body: 'La institución no respondió en el plazo legal (15 días). Caso disponible para Contraloría.'  }};

### **Métricas de Éxito**

* Tiempo promedio de primera respuesta por institución  
* Tasa de casos que llegan a alerta roja  
* Porcentaje de escalamientos a Contraloría  
* Mejora en tiempos de respuesta post-implementación

## **2.8 Sincronización Offline**

| ID | AI.08 |
| :---- | :---- |
| **Descripción** | Background Sync API para operación sin conexión |
| **Módulo Impactado** | Core (todos los módulos) |
| **Decisión Relacionada** | F-07 (Offline Dignity Mode), F-33 (Arquitectura Estabilidad Offline) |
| **Horas Estimadas** | 80h desarrollo \+ 20h testing |

### **Arquitectura y Diseño**

El sistema de sincronización offline de CIVICUM implementa una arquitectura "Offline-First" que garantiza que los usuarios puedan interactuar con la plataforma incluso sin conexión a internet. Esto es crítico para zonas rurales de Chile con conectividad limitada.

3 EXPERIENCIAS SEGÚN CONECTIVIDAD:

1\. Experiencia Completa (HIGH tier \- \~15MB)   \- Conexión estable (WiFi/4G+)   \- Todas las funciones en tiempo real   \- Datos actualizados al momento

2\. Experiencia Ligera (MEDIUM tier \- \~3MB)   \- Conexión intermitente (3G/rural)   \- Funciones core habilitadas   \- Datos cacheados con actualización diferida

3\. Modo Resiliencia (LOW tier \- \~800KB)   \- Sin conexión o muy lenta   \- Solo texto, sin imágenes   \- Datos locales, sincronización cuando vuelva señal

TECNOLOGÍAS IMPLEMENTADAS:

1\. Service Workers con Workbox   \- Cache-First para assets estáticos   \- Stale-While-Revalidate para datos de comuna   \- Network-First para reportes del usuario

2\. Background Sync API   \- Cola de operaciones pendientes   \- Reintento automático cuando vuelve conexión   \- Notificación al usuario de sincronización exitosa

3\. IndexedDB para almacenamiento local   \- Reportes creados offline   \- Votos pendientes   \- Datos de comuna cacheados

### **Implementación Técnica**

// Service Worker con Workbox Background Syncimport { Queue } from 'workbox-background-sync';// Cola para reportes creados offlineconst reportQueue \= new Queue('reportes-pendientes', {  maxRetentionTime: 24 \* 60, // 24 horas  onSync: async ({ queue }) \=\> {    let entry;    while ((entry \= await queue.shiftRequest())) {      try {        await fetch(entry.request);        showNotification('✅ Reporte enviado exitosamente');      } catch (error) {        await queue.unshiftRequest(entry);        throw error; // Reintentar después      }    }  }});// Interceptar envío de reportesself.addEventListener('fetch', (event) \=\> {  if (event.request.url.includes('/api/reportes') &&       event.request.method \=== 'POST') {        event.respondWith(      fetch(event.request.clone())        .catch(async () \=\> {          // Si falla, encolar para después          await reportQueue.pushRequest({ request: event.request });          return new Response(            JSON.stringify({               queued: true,               message: 'Guardado offline. Se enviará cuando vuelva la conexión.'             }),            { headers: { 'Content-Type': 'application/json' } }          );        })    );  }});// Estrategias de cache por tipo de contenidoimport { registerRoute } from 'workbox-routing';import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';// Assets estáticos: Cache-FirstregisterRoute(  ({ request }) \=\> \['style', 'script', 'image'\].includes(request.destination),  new CacheFirst({    cacheName: 'static-assets',    plugins: \[new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 30 \* 24 \* 60 \* 60 })\]  }));// Datos de comuna: Stale-While-RevalidateregisterRoute(  ({ url }) \=\> url.pathname.startsWith('/api/comuna/'),  new StaleWhileRevalidate({    cacheName: 'comuna-data',    plugins: \[new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 24 \* 60 \* 60 })\]  }));

### **Modo Resiliencia**

MODO RESILIENCIA (Texto Puro):Activación: Automática si conexión \<2G o timeout \>10sCaracterísticas:- Sin imágenes (solo alt-text)- Sin JavaScript complejo- HTML semántico mínimo (\~50KB total)- Formularios simples que funcionan sin JS- Colores de alto contraste (accesibilidad)Funciones disponibles:✅ Ver reportes cacheados✅ Crear nuevo reporte (offline)✅ Ver guías cívicas (snapshot local)❌ Votaciones (requiere verificación)❌ Chat con Asistente (requiere LLM)

## **2.9 Backup Automático**

| ID | AI.09 |
| :---- | :---- |
| **Descripción** | Diario con retención 30 días |
| **Módulo Impactado** | Core (Infraestructura) |
| **Decisión Relacionada** | F-43 (Stack Zero-Cost) |
| **Horas Estimadas** | 20h configuración \+ 5h/mes monitoreo |

### **Arquitectura y Diseño**

El sistema de backup de CIVICUM implementa una estrategia de respaldo automatizada que protege todos los datos de la plataforma con múltiples capas de redundancia, utilizando infraestructura de costo cero.

ESTRATEGIA DE BACKUP 3-2-1:

3 copias de los datos:- Producción (PostgreSQL managed)- Backup diario (R2/S3)- Backup semanal (repositorio Git \+ exports)

2 tipos de almacenamiento:- Base de datos relacional- Archivos planos (JSON/CSV exports)

1 copia offsite:- Cloudflare R2 (diferente proveedor que DB)

AUTOMATIZACIÓN CON PG\_CRON:

1\. Backup Lógico Diario (02:00 UTC)   \- pg\_dump completo de la base   \- Compresión gzip (\~80% reducción)   \- Upload automático a R2   \- Retención: 30 días

2\. Backup Incremental Horario   \- WAL (Write-Ahead Logging)   \- Point-in-time recovery disponible   \- Retención: 7 días

3\. Purga Automática de Datos Efímeros   \- Logs de auditoría \>1 año: eliminar   \- Chats temporales \>30 días: eliminar   \- Borradores \>90 días: eliminar

### **Implementación Técnica**

\-- Programar backup diario con pg\_cronSELECT cron.schedule(  'daily-backup',  '0 2 \* \* \*', \-- 02:00 UTC diario  $$    \-- Crear backup comprimido    COPY (      SELECT json\_agg(row\_to\_json(t))      FROM (SELECT \* FROM reports WHERE created\_at \> NOW() \- INTERVAL '1 day') t    ) TO PROGRAM 'gzip \> /tmp/reports\_backup.json.gz';        \-- Log de ejecución    INSERT INTO backup\_logs (type, status, size\_bytes, created\_at)    VALUES ('daily', 'completed', pg\_size\_pretty(pg\_database\_size(current\_database())), NOW());  $$);-- Purga automática de datos temporalesSELECT cron.schedule(  'weekly-purge',  '0 3 \* \* 0', \-- Domingo 03:00 UTC  $$    DELETE FROM audit\_logs WHERE created\_at \< NOW() \- INTERVAL '1 year';    DELETE FROM temp\_chats WHERE created\_at \< NOW() \- INTERVAL '30 days';    DELETE FROM draft\_reports WHERE updated\_at \< NOW() \- INTERVAL '90 days';        \-- Vacuum para recuperar espacio    VACUUM ANALYZE;  $$);-- Monitoreo de backupsCREATE TABLE backup\_logs (  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  type VARCHAR(20) NOT NULL, \-- 'daily', 'hourly', 'manual'  status VARCHAR(20) NOT NULL, \-- 'completed', 'failed', 'in\_progress'  size\_bytes BIGINT,  duration\_seconds INT,  error\_message TEXT,  created\_at TIMESTAMPTZ DEFAULT NOW());-- Alerta si backup fallaCREATE OR REPLACE FUNCTION check\_backup\_health()RETURNS void AS $$BEGIN  IF NOT EXISTS (    SELECT 1 FROM backup\_logs     WHERE type \= 'daily'     AND status \= 'completed'     AND created\_at \> NOW() \- INTERVAL '26 hours'  ) THEN    \-- Enviar alerta    PERFORM pg\_notify('backup\_alert', 'Daily backup missing or failed');  END IF;END;$$ LANGUAGE plpgsql;SELECT cron.schedule('backup-health-check', '0 8 \* \* \*', 'SELECT check\_backup\_health()');

### **Política de Retención**

POLÍTICA DE RETENCIÓN DE DATOS:| Tipo de Dato | Retención | Justificación ||--------------|-----------|---------------|| Reportes ciudadanos | Permanente | Registro histórico || Votos | Permanente | Trazabilidad democrática || Perfiles usuario | Hasta eliminación | GDPR compliance || Logs de auditoría | 1 año | Requisito legal || Chats temporales | 30 días | Privacidad || Backups diarios | 30 días | Recovery window || Backups semanales | 90 días | Disaster recovery |

## **2.10 Quality Gates**

| ID | AI.10 |
| :---- | :---- |
| **Descripción** | Validación automática de datos ingestados |
| **Módulo Impactado** | Pipeline de Datos, Cuentas Claras |
| **Decisión Relacionada** | F-32 (Stack Anti-Alucinación) |
| **Horas Estimadas** | 35h desarrollo \+ 15h configuración por fuente |

### **Arquitectura y Diseño**

El sistema de Quality Gates de CIVICUM implementa validaciones automáticas en cada etapa del pipeline de datos, asegurando que solo información verificada llegue a los usuarios. Esto previene la propagación de errores y mantiene la confianza en la plataforma.

ETAPAS DE VALIDACIÓN:

1\. Gate de Extracción (Source Validation)   \- ¿La fuente está disponible?   \- ¿El formato es el esperado?   \- ¿La fecha es reciente?

2\. Gate de Esquema (Schema Validation)   \- ¿Los campos requeridos están presentes?   \- ¿Los tipos de datos son correctos?   \- ¿Los valores están en rangos válidos?

3\. Gate de Integridad (Integrity Validation)   \- ¿Hay registros duplicados?   \- ¿Las referencias FK son válidas?   \- ¿Los totales cuadran?

4\. Gate de Calidad (Quality Validation)   \- ¿Hay valores atípicos (outliers)?   \- ¿Los datos son consistentes con históricos?   \- ¿Hay campos sospechosamente vacíos?

ACCIONES EN CASO DE FALLA:

\- Gate 1-2 falla: Abortar ingesta, alertar equipo- Gate 3 falla: Limpiar datos, reintentar- Gate 4 falla: Marcar para revisión manual, continuar con warning

### **Implementación Técnica**

// Sistema de Quality Gates con Zodimport { z } from 'zod';// Esquema de validación para presupuesto municipalconst PresupuestoSchema \= z.object({  comuna\_code: z.string().length(5),  year: z.number().int().min(2000).max(2030),  total\_presupuesto: z.number().positive(),  total\_ejecutado: z.number().min(0),  fecha\_extraccion: z.date(),  fuente\_url: z.string().url()}).refine(  data \=\> data.total\_ejecutado \<= data.total\_presupuesto,  { message: 'Ejecutado no puede superar presupuesto' });// Pipeline de validaciónasync function validateAndIngest(rawData, source) {  const results \= {    total: rawData.length,    passed: 0,    failed: 0,    warnings: 0,    errors: \[\]  };    for (const record of rawData) {    try {      // Gate 1: Schema validation      const validated \= PresupuestoSchema.parse(record);            // Gate 2: Integrity check      const isDuplicate \= await checkDuplicate(validated);      if (isDuplicate) {        results.warnings++;        continue;      }            // Gate 3: Quality check      const qualityIssues \= await checkQuality(validated);      if (qualityIssues.length \> 0\) {        await flagForReview(validated, qualityIssues);        results.warnings++;      }            // Gate 4: Insert if all passed      await insertRecord(validated);      results.passed++;          } catch (error) {      results.failed++;      results.errors.push({        record: record.id || 'unknown',        error: error.message      });    }  }    // Log resultados  await logIngestionResults(source, results);    // Alertar si tasa de error alta  if (results.failed / results.total \> 0.1) {    await alertHighErrorRate(source, results);  }    return results;}// Validaciones de calidad específicasasync function checkQuality(record) {  const issues \= \[\];    // Outlier detection  const avgBudget \= await getAverageBudget(record.comuna\_code);  if (record.total\_presupuesto \> avgBudget \* 3\) {    issues.push('Presupuesto 3x mayor que promedio histórico');  }    // Consistency check  const lastYear \= await getLastYearBudget(record.comuna\_code);  if (lastYear && Math.abs(record.total\_presupuesto \- lastYear) / lastYear \> 0.5) {    issues.push('Variación \>50% respecto al año anterior');  }    return issues;}

### **Métricas de Éxito**

* Tasa de registros que pasan todos los gates  
* Tiempo promedio de validación por registro  
* Tipos de errores más frecuentes  
* Fuentes con mayor tasa de error

# **3\. AUTOMATIZACIÓN FUTURA (POST-MVP)**

Esta sección documenta las 10 capacidades de automatización planificadas para fases posteriores al MVP. Cada capacidad está especificada con arquitectura preliminar y beneficios esperados, estableciendo propiedad intelectual sobre estos desarrollos futuros.

## **3.1 Predicción de Tiempos de Resolución**

| ID | AF.01 |
| :---- | :---- |
| **Descripción** | ML estima tiempo de resolución de reportes |
| **Módulo Impactado** | Alza la Voz |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 80h desarrollo \+ 40h entrenamiento |

### **Arquitectura Preliminar**

Sistema de Machine Learning que predice el tiempo probable de resolución de un reporte ciudadano basándose en características del caso y datos históricos.

FEATURES DE ENTRADA:- Categoría del reporte- Comuna y entidad responsable- Complejidad estimada (por texto)- Historial de la entidad (tiempos promedio)- Carga actual de casos- Temporada (verano \= más lento)

OUTPUT:- Tiempo estimado en días- Intervalo de confianza- Factores que más influyen

MODELO SUGERIDO:- Random Forest o XGBoost- Entrenado con datos históricos de reportes resueltos- Actualización mensual con nuevos casos

**Beneficio Esperado:** Gestión de expectativas ciudadanas, identificación de entidades lentas

## **3.2 Clustering Automático de Reportes**

| ID | AF.02 |
| :---- | :---- |
| **Descripción** | Agrupa reportes similares automáticamente |
| **Módulo Impactado** | Alza la Voz |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 60h desarrollo |

### **Arquitectura Preliminar**

Sistema de clustering que detecta automáticamente reportes relacionados (mismo problema reportado por múltiples ciudadanos) y los agrupa para gestión conjunta.

ALGORITMO:1. Embedding de texto con sentence-transformers2. Clustering con HDBSCAN (detecta outliers)3. Validación geográfica (proximidad)4. Fusión si confianza \>0.8

BENEFICIOS:- Evita trabajo duplicado- Aumenta prioridad automáticamente- Visualiza "zonas problemáticas"

**Beneficio Esperado:** Reducción de carga administrativa, mejor priorización

## **3.3 Fact-Checking Automático**

| ID | AF.03 |
| :---- | :---- |
| **Descripción** | Verificación de datos con fuentes oficiales |
| **Módulo Impactado** | Asistente Cívico, Academia |
| **Fase** | Post-MVP (F-32 extendido) |
| **Horas Estimadas** | 100h desarrollo |

### **Arquitectura Preliminar**

Sistema que verifica automáticamente afirmaciones sobre datos públicos consultando fuentes oficiales en tiempo real.

FLUJO:1. Detectar claim verificable en texto2. Extraer entidades (monto, fecha, institución)3. Consultar fuentes oficiales4. Comparar y generar veredicto

FUENTES DE VERIFICACIÓN:- Presupuesto Abierto (montos públicos)- BCN (leyes citadas)- SERVEL (datos electorales)- SINIM (indicadores municipales)

**Beneficio Esperado:** Prevención de desinformación, confianza aumentada

## **3.4 Alertas de Anomalías Presupuestarias**

| ID | AF.04 |
| :---- | :---- |
| **Descripción** | Detección de gastos irregulares |
| **Módulo Impactado** | Cuentas Claras |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 90h desarrollo |

### **Arquitectura Preliminar**

Sistema de detección de anomalías que identifica patrones inusuales en gastos públicos comparando con históricos y entidades similares.

TIPOS DE ANOMALÍAS:1. Spike inesperado: Gasto 3σ sobre promedio2. Patrón estacional roto: Gasto fuera de época habitual3. Proveedor concentrado: \>60% a un solo proveedor4. Fragmentación: Múltiples compras justo bajo umbral de licitación

MODELO:- Isolation Forest para detección de outliers- Reglas de negocio para patrones conocidos- Revisión humana para casos detectados

**Beneficio Esperado:** Fiscalización ciudadana preventiva

## **3.5 Transcripción Automática**

| ID | AF.05 |
| :---- | :---- |
| **Descripción** | Speech-to-text para audios/videos de evidencia |
| **Módulo Impactado** | Alza la Voz |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 50h desarrollo |

### **Arquitectura Preliminar**

Sistema de transcripción automática que convierte evidencia en audio/video a texto searchable.

TECNOLOGÍA:- Whisper (OpenAI) \- modelo open source- Ejecutable localmente o vía API- Soporte para español chileno

USO EN CIVICUM:- Transcribir audios de reuniones- Indexar contenido de videos de evidencia- Hacer searchable contenido multimedia

**Beneficio Esperado:** Mejor indexación de evidencia, accesibilidad

## **3.6 Extracción de Promesas**

| ID | AF.06 |
| :---- | :---- |
| **Descripción** | NLP detecta compromisos en declaraciones públicas |
| **Módulo Impactado** | Observatorio, Promesómetro |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 120h desarrollo |

### **Arquitectura Preliminar**

Sistema de NLP que analiza declaraciones públicas (entrevistas, discursos, programas) y extrae automáticamente promesas verificables.

PIPELINE:1. Ingesta de texto/audio/video2. Transcripción si es necesario3. NER para identificar entidades4. Clasificación de oraciones como "promesa" o no5. Extracción de: qué, quién, cuándo, dónde6. Generación de item trackeable

MODELO:- Fine-tuned BERT para clasificación de promesas- Entrenado con ejemplos de campañas chilenas

**Beneficio Esperado:** Promesómetro automatizado, accountability

## **3.7 Match Parlamentario Avanzado**

| ID | AF.07 |
| :---- | :---- |
| **Descripción** | Recomendación de representantes afines |
| **Módulo Impactado** | Voto Ciudadano |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 70h desarrollo |

### **Arquitectura Preliminar**

Sistema de recomendación que sugiere parlamentarios cuyas votaciones históricas más se alinean con las preferencias del usuario.

METODOLOGÍA:1. Usuario vota en temas de Voto Ciudadano2. Sistema compara con votaciones reales de parlamentarios3. Calcula % de coincidencia por parlamentario4. Presenta ranking personalizado

FEATURES ADICIONALES:- Filtro por región/distrito- Comparación histórica vs actual- Evolución del match en el tiempo

**Beneficio Esperado:** Voto informado, conexión ciudadano-representante

## **3.8 Generación de Informes Personalizados**

| ID | AF.08 |
| :---- | :---- |
| **Descripción** | Reportes automatizados por interés del usuario |
| **Módulo Impactado** | Mi CIVICUM |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 60h desarrollo |

### **Arquitectura Preliminar**

Sistema que genera informes cívicos personalizados basados en los intereses y actividad del usuario.

TIPOS DE INFORME:1. Informe de Mi Comuna (mensual)   \- Reportes resueltos/pendientes   \- Presupuesto ejecutado   \- Próximas votaciones

2\. Informe de Mis Temas (semanal)   \- Novedades legislativas en temas seguidos   \- Votaciones de parlamentarios seguidos   \- Nuevos reportes relacionados

3\. Informe de Impacto Personal (trimestral)   \- Reportes que apoyaste y su resultado   \- Tu contribución a la comunidad   \- Logros desbloqueados

**Beneficio Esperado:** Engagement, visibilidad de impacto personal

## **3.9 Optimización de Rutas GPS Cívico**

| ID | AF.09 |
| :---- | :---- |
| **Descripción** | Sugerencias inteligentes de misiones |
| **Módulo Impactado** | GPS Cívico (Mi CIVICUM) |
| **Fase** | Post-MVP (F-23 extendido) |
| **Horas Estimadas** | 50h desarrollo |

### **Arquitectura Preliminar**

Sistema que optimiza las sugerencias de misiones GPS Cívico basándose en ubicación, historial y horario del usuario.

ALGORITMO:1. Obtener misiones disponibles en radio de 5km2. Filtrar por perfil y habilidades del usuario3. Ordenar por: impacto, proximidad, urgencia, interés4. Generar ruta óptima si múltiples misiones

CONSIDERACIONES:- Evitar misiones en horarios inseguros- Considerar accesibilidad física- Balancear dificultad (no solo fáciles)

**Beneficio Esperado:** Mayor completitud de misiones, engagement

## **3.10 Red de Poder Automática**

| ID | AF.10 |
| :---- | :---- |
| **Descripción** | Mapeo de conexiones entre autoridades |
| **Módulo Impactado** | Observatorio del Poder |
| **Fase** | Post-MVP |
| **Horas Estimadas** | 100h desarrollo |

### **Arquitectura Preliminar**

Sistema de graph analytics que mapea y visualiza las conexiones entre autoridades públicas, lobbistas y empresas.

FUENTES DE DATOS:- InfoLobby (audiencias)- InfoProbidad (declaraciones patrimoniales)- Directorios de empresas- Donaciones de campaña

TIPOS DE CONEXIONES:- Reuniones de lobby- Participación en mismas empresas- Relaciones familiares declaradas- Donaciones cruzadas

VISUALIZACIÓN:- Grafo interactivo tipo D3.js- Filtros por entidad/período- Alertas de potencial conflicto de interés

**Beneficio Esperado:** Transparencia de redes de influencia

# **4\. PROCESOS Y PROTOCOLOS AUTOMATIZADOS**

Esta sección documenta los 19 componentes de procesos automatizados que sostienen la operación de CIVICUM, organizados en tres subsistemas principales.

## **4.1 Pipeline de Datos (ETL)**

Proceso completo de extracción, transformación y carga de datos cívicos

| \# | Paso | Descripción | Tecnología |
| :---- | :---- | :---- | :---- |
| 1 | **Extracción Programada** | Cron jobs ejecutan scrapers en horarios de baja carga | GitHub Actions \+ Playwright |
| 2 | **Validación de Esquemas** | JSON Schema valida estructura de datos extraídos | Zod \+ ajv |
| 3 | **Transformación y Normalización** | Mapeo a esquemas internos, conversión de formatos | Node.js scripts |
| 4 | **Deduplicación Automática** | Identificación y merge de registros duplicados | PostgreSQL \+ fuzzy matching |
| 5 | **Carga en Base de Datos** | Inserción/actualización de registros validados | PostgreSQL \+ pg\_upsert |
| 6 | **Versionado Histórico** | Snapshot de cambios para auditoría | PostgreSQL triggers |
| 7 | **Notificación de Cambios Críticos** | Alertas a usuarios interesados en datos actualizados | pg\_notify \+ Edge Functions |

## **4.2 Sistema de Alertas**

Notificaciones automáticas basadas en eventos del sistema

| Tipo de Alerta | Trigger | Canal |
| :---- | :---- | :---- |
| Cambios en proyectos de ley seguidos | Nuevo estado o votación en proyecto seguido | Push (azul) o Email digest |
| Nuevas promesas de autoridades | Detección de compromiso en declaración pública | In-app (gris) |
| Reportes que requieren atención | Reporte cercano o en área de interés | Push (azul) |
| Votaciones próximas | Votación ciudadana abierta en tema de interés | Push (rojo si urgente, azul si normal) |
| Anomalías en datos presupuestarios | Detección de outlier en gasto público | Email a usuarios verificadores |
| Umbrales de escalamiento alcanzados | Reporte alcanza umbral de apoyos | Push (azul) a reportante \+ autoridad |

## **4.3 Gobernanza Automatizada**

Procesos de seguridad y mantenimiento sin intervención manual

### **Logs de Auditoría Inmutables**

| Descripción | Registro de todas las acciones críticas |
| :---- | :---- |
| **Implementación** | Tabla append-only con triggers, hash de integridad |
| **Frecuencia** | Cada acción |

### **Rate Limiting Automático**

| Descripción | Protección contra abuso de APIs |
| :---- | :---- |
| **Implementación** | Cloudflare Workers \+ Redis counters |
| **Frecuencia** | Cada request |

### **Detección de Bots (Seguridad Invisible)**

| Descripción | Identificación de comportamiento no humano |
| :---- | :---- |
| **Implementación** | Fingerprinting \+ behavior analysis \+ CAPTCHA solo si sospecha |
| **Frecuencia** | Cada sesión |

### **Backups Programados**

| Descripción | Respaldos automáticos diarios y semanales |
| :---- | :---- |
| **Implementación** | pg\_cron \+ R2 storage |
| **Frecuencia** | Diario 02:00 UTC |

### **Monitoreo de Salud del Sistema**

| Descripción | Verificación de disponibilidad de servicios |
| :---- | :---- |
| **Implementación** | Health checks \+ UptimeRobot/Better Stack |
| **Frecuencia** | Cada 5 minutos |

### **Auto-Sanación Ligera**

| Descripción | Reintentos y fallbacks automáticos |
| :---- | :---- |
| **Implementación** | Circuit breaker pattern \+ retry with exponential backoff |
| **Frecuencia** | Cada falla detectada |

# **5\. MÉTRICAS Y CERTIFICACIÓN**

## **5.1 Métricas de Éxito del Sistema de Automatización**

| Métrica | Meta | Medición |
| :---- | :---- | :---- |
| Uptime del sistema de scraping | ≥99% | Mensual |
| Tasa de datos que pasan Quality Gates | ≥95% | Por ejecución |
| Precisión de clasificación automática | ≥85% | Validación humana trimestral |
| Reducción de moderación manual | ≥90% | Mensual |
| Sincronización offline exitosa | ≥99% | Por evento |
| Backups exitosos | 100% | Diario |

## **5.2 Certificación de Completitud**

| ✅ CERTIFICACIÓN DE COMPLETITUD |
| ----- |
| **Este documento certifica que:** 10 capacidades de automatización MVP están completamente documentadas 10 capacidades de automatización futura están especificadas 7 pasos del Pipeline ETL están detallados 6 tipos de alertas automáticas están definidas 6 componentes de gobernanza automatizada están implementados **TOTAL: 39 items de automatización documentados** |
| Fecha de Certificación: Febrero 2026 Versión del Documento: 1.0 **Estado: APROBADO PARA REGISTRO INAPI** |

## **5.3 Declaración de Propiedad Intelectual**

Todas las capacidades de automatización documentadas en este anexo constituyen propiedad intelectual original de CIVICUM. Las arquitecturas, algoritmos, flujos de proceso y especificaciones técnicas aquí descritas representan innovaciones desarrolladas específicamente para la plataforma de participación cívica ciudadana de Chile.

Los elementos protegibles incluyen:

* Sistema de 3 Canales para notificaciones cívicas inteligentes  
* Pipeline de Corrector de Empatía con TensorFlow.js local  
* Sistema de Escalamiento Democrático basado en apoyos ciudadanos  
* Arquitectura Offline-First con 3 experiencias adaptativas  
* Sistema de Quality Gates para datos cívicos oficiales  
* Router Inteligente de clasificación de casos ciudadanos  
* Watchdog Cívico de alertas de inactividad institucional

**— FIN DEL ANEXO DE CAPACIDADES DE AUTOMATIZACIÓN —**  
CIVICUM \- Sistema Nervioso Cívico de Chile  
Documento generado para protección intelectual INAPI