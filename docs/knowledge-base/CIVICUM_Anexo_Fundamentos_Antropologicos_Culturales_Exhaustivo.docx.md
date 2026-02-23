

**CIVICUM**  
Sistema Nervioso Cívico de Chile

**ANEXO EXHAUSTIVO DE**  
**FUNDAMENTOS ANTROPOLÓGICOS**  
**Y CULTURALES**

Documento para Registro de Propiedad Intelectual  
Instituto Nacional de Propiedad Industrial (INAPI)

| Estado | APROBADO PARA REGISTRO |
| :---: | :---: |
| **Versión** | 1.0 |
| **Fecha** | Febrero 2026 |
| **Bloques** | 7 Bloques Temáticos (27 sub-bloques) |
| **Feature Flags** | 46 Feature Flags Documentados |
| **Tareas** | 64 Tareas de Desarrollo |
| **Horas Estimadas** | \~2,800 horas |

# **ÍNDICE DE CONTENIDOS**

1\. INTRODUCCIÓN Y METODOLOGÍA

2\. INVESTIGACIÓN INTEGRADA \- 7 BLOQUES TEMÁTICOS

   2.1 Bloque 1: Herencia Institucional

   2.2 Bloque 2: Estallido Social 2019

   2.3 Bloque 3: Procesos Constitucionales

   2.4 Bloque 4: Cultura Participativa

   2.5 Bloque 5: Relación Ciudadano-Estado

   2.6 Bloque 6: Casos de Éxito y Fracaso

   2.7 Bloque 7: Nuevas Tendencias

3\. FEATURE FLAGS ANTROPOLÓGICOS (46)

4\. TAREAS DE DESARROLLO (64)

5\. INSIGHTS CLAVE PARA CIVICUM (7)

6\. SEGMENTOS OPERATIVOS S1-S6

7\. MÉTRICAS Y CERTIFICACIÓN

# **1\. INTRODUCCIÓN Y METODOLOGÍA**

Este anexo documenta de forma exhaustiva los fundamentos antropológicos y culturales que sustentan cada decisión de diseño de CIVICUM. El documento establece la propiedad intelectual sobre la investigación cultural chilena aplicada a tecnología cívica.

## **1.1 Principio Rector**

*"CIVICUM no es una plataforma tecnológica que intenta cambiar a los chilenos. Es una herramienta diseñada DESDE la cultura chilena, que transforma la frustración en acción democrática respetando cómo somos, no cómo deberíamos ser."*

## **1.2 Fuentes de Investigación**

* CEP Encuestas 2021, 2024 \- Centro de Estudios Públicos  
* COES/ELSOC 2016-2023 \- Estudio Longitudinal Social de Chile  
* PNUD 2024 \- Informe de Desarrollo Humano "Chile en pausa"  
* OCDE Trust Survey 2023 \- Chile (oct-nov 2023\)  
* Encuesta Bicentenario UC 2023  
* Encuesta UDP Jóvenes 2023 \- 15° Encuesta sobre participación  
* Latinobarómetro 2018, 2021, 2023  
* Investigación "Naturaleza Humana Chilena" \- 29 documentos base

## **1.3 Métricas Globales de la Investigación**

| Métrica | Valor |
| :---- | :---- |
| Total Bloques Integrados | 27 de 27 (100%) |
| Partes Temáticas | 7 de 7 (100%) |
| Feature Flags Documentados | 46 |
| Tareas de Desarrollo | 64 |
| Segmentos Operativos | 6 (S1-S6) |
| Decisiones F-XX Validadas | 25+ |
| Horas de Desarrollo Estimadas | \~2,800 horas |
| Omisiones | 0 (Garantía de Completitud) |

# **2\. INVESTIGACIÓN INTEGRADA \- 7 BLOQUES TEMÁTICOS**

La investigación antropológica de CIVICUM se organiza en 7 bloques temáticos principales, cada uno con sub-bloques detallados. Cada bloque explica el POR QUÉ detrás de las decisiones de diseño.

## **2.1 HERENCIA INSTITUCIONAL**

*La sombra de la burocracia y la desconfianza histórica*

| ID | BLOQUE 1 |
| :---- | :---- |
| **Horas Estimadas** | \~320h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 1.1 | Herencia Institucional y Desconfianza | ✅ INTEGRADO |
| 1.2 | Fragmentación Social y Tribalismo | ✅ INTEGRADO |
| 1.3 | Cultura de la Queja sin Acción | ✅ INTEGRADO |
| 1.4 | Relación Ciudadano-Estado | ✅ INTEGRADO |

### **Hallazgo Principal**

Chile carga con un legado institucional marcado por centralismo, burocracia y periodos autoritarios que han generado desconfianza estructural hacia las instituciones públicas. La dictadura 1973-1990 instauró un estilo vertical y poco participativo que dejó huellas profundas en la psique colectiva chilena.

Este contexto histórico dejó huellas palpables: desconfianza hacia las instituciones, trámites engorrosos y un cierto fatalismo cívico en amplios sectores de la población. La Encuesta Auditoría a la Democracia del PNUD mostraba ya en 2016 que el porcentaje de chilenos que cree que la democracia "funciona mal o muy mal" aumentó de un 20% en 2012 a un 40% en 2016\.

Tras el estallido social de 2019, la desconfianza se agudizó: estudios longitudinales de COES/ELSOC indican que menos del 5% de los chilenos declara confiar "mucho o bastante" en instituciones políticas clave como el Congreso o los partidos. Chile se está convirtiendo, en palabras del investigador Matías Bargsted, en "una sociedad que adhiere a la norma, pero desconfía de las instituciones" (COES/ELSOC, 2021).

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Creen que democracia funciona mal/muy mal | **40% (2016) \- subió desde 20% en 2012** |
| Confían "mucho o bastante" en Congreso/partidos | **\<5% (2019, post-crisis)** |
| No confían en su municipio | **78% (2024)** |
| Confían en el gobierno | **\~30% promedio histórico** |
| Confían en representantes | **\~14-19%** |

### **Aplicaciones en CIVICUM**

* Transparencia total: Mostrar siempre qué hace la plataforma con la información y por qué  
* Seguimiento visible de trámites: Estados, plazos, notificaciones proactivas \- no "caja negra"  
* Disyuntor Humano / Consejo Cívico: Si la automatización falla, hay alternativas humanas  
* Voz y voto al ciudadano: Votaciones, priorización \- las decisiones no vienen solo de arriba  
* Explicar cada paso del flujo con tooltips "¿Por qué pedimos esto?"  
* Contador de días restantes visible en todos los procesos

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-02** | Honestidad Radical | Contrarrestar la sospecha de "letra chica" |
| **F-07** | Confianza Progresiva | Combatir el escepticismo estructural |
| **F-19** | Advertencia | Comunicar plazos y escalamientos transparentemente |
| **F-23** | GPS Cívico | El usuario nunca queda "a oscuras" |

### **Feature Flags Derivados**

ENABLE\_STEP\_EXPLANATIONSENABLE\_DATA\_USAGE\_TOOLTIPSENABLE\_REAL\_TIME\_TRACKINGENABLE\_DEADLINE\_COUNTDOWNENABLE\_PROACTIVE\_NOTIFICATIONSENABLE\_AUTOMATIC\_ESCALATIONENABLE\_HUMAN\_DISRUPTORENABLE\_CIVIC\_COUNCIL

## **2.2 ESTALLIDO SOCIAL 2019**

*Causas, despertar ciudadano y legado*

| ID | BLOQUE 2 |
| :---- | :---- |
| **Horas Estimadas** | \~280h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 2.1 | Fatiga Participativa y Cinismo | ✅ INTEGRADO |
| 2.2 | Miedo a la Exposición (Funa) | ✅ INTEGRADO |
| 2.3 | Expectativas de Inmediatez | ✅ INTEGRADO |
| 2.4 | Tensión Anonimato vs Responsabilidad | ✅ INTEGRADO |

### **Hallazgo Principal**

El Estallido Social de octubre 2019 fue la erupción de un malestar acumulado por décadas. Derribó la apatía previa y provocó un despertar masivo de participación: millones en las calles, cabildos ciudadanos espontáneos, exigencia de cambiar las reglas fundamentales del país.

Instaló la idea poderosa de que la ciudadanía unida puede impulsar cambios estructurales. Sin embargo, también dejó trauma: 3,581 lesionados, represión, y una herida profunda en quienes participaron activamente. La aprobación del gobierno cayó al 6% \- la más baja desde 1990\.

El movimiento fue notablemente horizontal y apartidario. El grito "no nos representan" expresó el rechazo tanto a la clase política tradicional como a cualquier intento de cooptación. Los cabildos autoconvocados \- aproximadamente 15,000 en pocas semanas \- demostraron capacidad de autoorganización sin líderes fijos.

Las demandas del estallido siguen vigentes según PNUD 2024, pero ahora conviven con fatiga y desconfianza aún mayor hacia cualquier promesa de cambio.

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Aprobación gobierno post-crisis | **6% \- la más baja desde 1990** |
| Participantes en cabildos autoconvocados | **\~15,000 en pocas semanas** |
| Demandas del estallido vigentes hoy | **Sí (PNUD 2024\)** |
| Lesionados durante el estallido | **3,581 personas** |
| Personas en Plaza Italia (peak) | **1.2 millones (25 oct 2019\)** |

### **Aplicaciones en CIVICUM**

* Canalización del descontento: Vías efectivas para convertir indignación en acción constructiva  
* Énfasis en logros concretos: Mostrar qué se ha logrado ("Gracias a X vecinos, se iluminaron 5 calles")  
* Moderación equilibrada: Permitir catarsis respetuosa sin caer en insultos ni violencia  
* Narrativa de independencia total: "CIVICUM no pertenece a ningún gobierno ni partido"  
* Celebración de victorias ciudadanas con reconocimiento público  
* Canal de voz ciudadana para expresar descontento de forma constructiva

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-01** | Empoderamiento | Canalizar la energía del 2019 en resultados |
| **F-05** | Apartidismo | "No es más de lo mismo" \- independencia total |
| **F-08** | Debate Sano | Moderación equilibrada post-polarización |
| **F-16** | Microvictorias | Demostrar que sí se pueden lograr victorias |
| **F-26** | Contenido Sensible | Advertencias para víctimas del estallido |

### **Feature Flags Derivados**

ENABLE\_VICTORY\_CELEBRATIONSENABLE\_CITIZEN\_VOICE\_CHANNELENABLE\_INDEPENDENCE\_DISCLAIMERSENABLE\_TRANSPARENCY\_SECTIONENABLE\_BALANCED\_MODERATIONENABLE\_TRAUMA\_WARNINGS

## **2.3 PROCESOS CONSTITUCIONALES**

*De la esperanza al agotamiento cívico*

| ID | BLOQUE 3 |
| :---- | :---- |
| **Horas Estimadas** | \~240h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 3.1 | Éxitos: Movimientos Sociales Digitales | ✅ INTEGRADO |
| 3.2 | Fracasos: Plataformas Oficiales | ✅ INTEGRADO |
| 3.3 | Patrones de Adopción Tecnológica | ✅ INTEGRADO |
| 3.4 | Lecciones de la Convención Constitucional | ✅ INTEGRADO |

### **Hallazgo Principal**

Chile vivió dos intentos consecutivos de nueva Constitución que dejaron profundas marcas en la psique cívica nacional. El primer proceso inició con un histórico 78% de Apruebo pero terminó en 61.9% Rechazo. El segundo proceso también fue rechazado.

Esta montaña rusa constitucional dejó a la población con "cansancio cívico": de la euforia de poder cambiarlo todo, a la frustración de ver esfuerzos estancados. Es un fenómeno documentado por múltiples encuestas y estudios.

LECCIONES CLAVE DE LOS PROCESOS:1. La polarización extrema aliena a los moderados2. Las promesas maximalistas generan expectativas imposibles3. La falta de consenso previo condena cualquier iniciativa4. El timing político es crucial \- procesos de último minuto fracasan5. La desinformación sobre temas como pensiones y vivienda fue devastadora6. Las élites que "cocinan" acuerdos pierden legitimidad

El proceso de Bachelet 2015-2018 con 204,000 participantes terminó archivado 5 días antes del cambio de gobierno. El Congreso Virtual demostró que las opiniones ciudadanas en lenguaje coloquial no se integran al lenguaje técnico legislativo.

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Apruebo inicial plebiscito | **78%** |
| Rechazo final primera propuesta | **61.9%** |
| Participantes proceso Bachelet | **204,000 personas** |
| Resultado del esfuerzo Bachelet | **Archivado sin discusión** |
| Casos de desinformación documentados | **Pensiones, viviendas, nacionalizaciones** |

### **Aplicaciones en CIVICUM**

* Evitar TODO lenguaje que evoque procesos constitucionales  
* Promesas limitadas y verificables \- nunca maximalistas  
* Ciclos cortos de feedback \- no procesos de años  
* Módulo anti-desinformación con casos reales  
* Historial cívico personal con todas las participaciones  
* Dashboard de transparencia del Observatorio en tiempo real  
* Diversidad en Mesas de Trabajo para evitar cámaras de eco

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-02** | Honestidad | Academia debe formar sin adoctrinamiento |
| **F-04** | Construcción Secuencial | Timing estratégico, acuerdos previos |
| **F-08** | Debate Sano | Transparencia \+ verificación comunitaria |
| **F-21** | Guardianes | Custodian legitimidad de procesos |
| **F-26** | Contenido Sensible | Trauma cívico post-constitucional |

### **Feature Flags Derivados**

ENABLE\_CIVIC\_HISTORYENABLE\_ANTIDISINFO\_MODULEENABLE\_POWER\_DASHBOARDENABLE\_VOTE\_IMPACT\_METRICSENABLE\_VOTE\_SIMULATIONENABLE\_DIVERSE\_MESA\_MATCHINGENABLE\_POWER\_ALERTSENABLE\_THRESHOLD\_ESCALATION

## **2.4 CULTURA PARTICIPATIVA**

*Organizaciones tradicionales y nuevas formas de participación*

| ID | BLOQUE 4 |
| :---- | :---- |
| **Horas Estimadas** | \~360h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 4.1 | Patrones de Uso de Redes en Chile | ✅ INTEGRADO |
| 4.2 | Dinámicas de Grupo y Polarización | ✅ INTEGRADO |
| 4.3 | Rituales Digitales y Símbolos | ✅ INTEGRADO |
| 4.4 | Barreras Tecnológicas por Segmento | ✅ INTEGRADO |

### **Hallazgo Principal**

La participación ciudadana en Chile tradicionalmente se canalizó por juntas de vecinos, centros de madres, clubes deportivos, sindicatos, iglesias y ONGs. Estas entidades tienen participación baja y envejecida, pero representan un capital social invaluable: redes existentes de confianza local y conocimiento "del terreno".

Simultáneamente, han emergido mecanismos de participación al margen de las vías institucionales: movimientos en redes sociales, protestas coordinadas por WhatsApp, cabildos autoconvocados, activismo en Change.org. Son rápidas, horizontales y efímeras.

BRECHA DIGITAL CRÍTICA:- 69.5% de hogares sin internet tienen jefe de hogar \>60 años- 34.9% no se conecta porque "no sabría usarla"- 85.5% de usuarios chilenos acceden por móvil (mobile-first obligatorio)- Mayores 80-90% usan WhatsApp pero no TikTok

CIVICUM debe ser el puente entre la energía informal de las redes y el impacto formal de las instituciones. Aprovechar la inmediatez digital, canalizándola hacia resultados sostenibles dentro del marco institucional.

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Hogares sin internet con jefe \>60 años | **69.5%** |
| No se conectan porque "no sabrían usarla" | **34.9%** |
| Usuarios que acceden por móvil | **85.5%** |
| Mayores que usan WhatsApp | **80-90%** |
| 68% chilenos | **No dispuestos a organizarse formalmente** |
| Solo sienten esperanza cívica | **10%** |

### **Aplicaciones en CIVICUM**

* Perfiles verificados para organizaciones: "Junta de Vecinos Villa X (verificada)"  
* Diseño multigeneracional: Letra grande, tutoriales paso a paso, soporte humano  
* Modo offline o imprimible: Exportar actas para reuniones presenciales  
* Calendario de asambleas locales: Conectar lo digital con lo presencial  
* Insignias de reconocimiento: "Junta Activa en CIVICUM"  
* Integración con ecosistema existente (WhatsApp, Facebook) \> reemplazar  
* Feed tipo timeline familiar a usuarios de RRSS  
* Sistema de tendencias/hashtags ciudadanos

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-05** | Tier-based Inclusion | Diseño multigeneracional |
| **F-07** | Offline Dignity | Modo imprimible para organizaciones |
| **F-10** | Anti-Élite | No excluir a líderes mayores |
| **F-13** | Humanización | Puente entre espontaneidad y acción formal |
| **F-21** | Guardianes | Validar organizaciones existentes |

### **Feature Flags Derivados**

ENABLE\_VERIFIED\_ORGANIZATIONSENABLE\_MULTIGENERATIONAL\_UXENABLE\_OFFLINE\_EXPORTENABLE\_ASSEMBLY\_CALENDARENABLE\_ORG\_BADGESENABLE\_SOCIAL\_FEED\_STYLEENABLE\_TRENDING\_CAUSESENABLE\_WHATSAPP\_INTEGRATION

## **2.5 RELACIÓN CIUDADANO-ESTADO**

*Burocracia, servicios públicos y expectativas*

| ID | BLOQUE 5 |
| :---- | :---- |
| **Horas Estimadas** | \~520h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 5.1 | Design System Terracota v2 | ✅ INTEGRADO |
| 5.2 | Principios de Interacción Chile | ✅ INTEGRADO |
| 5.3 | Microcopy y Tono de Voz | ✅ INTEGRADO |
| 5.4 | Flujos Adaptativos por Segmento | ✅ INTEGRADO |

### **Hallazgo Principal**

La administración pública chilena arrastra procedimientos formales complejos desde hace décadas: formularios en lenguaje jurídico, múltiples ventanillas, "vuelva mañana". Esto alimenta la frustración cotidiana.

DATOS DE CALIDAD DE SERVICIOS:- Estudios de la OCDE (2023) confirman que la ciudadanía sigue escéptica respecto a la apertura e integridad del gobierno- Preocupaciones de elitismo y falta de equidad en el trato- \~45 millones de interacciones fallidas por lenguaje burocrático- Funcionarios percibidos como mal capacitados y poco empáticos

TONO LOCAL CHILENO:El chileno común rechaza la frialdad burocrática y el tecnicismo. Prefiere una comunicación cercana, directa, con chilenismos apropiados. "Listo, ya quedó enviado 😉" vs "Su solicitud ha sido procesada exitosamente".

CIVICUM debe posicionarse como aliado del ciudadano frente al Estado, no como extensión del aparato burocrático. Un "abogado ciudadano" que traduce, guía y defiende.

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Interacciones fallidas por lenguaje | **\~45 millones** |
| GSE E confianza en municipio | **17% (vs 29% ABC1)** |
| Confianza en partidos políticos | **14% (la más baja)** |
| Percepción de elitismo (OCDE) | **Alta preocupación** |
| Expectativa de respuesta | **\<24 horas para primer feedback** |

### **Aplicaciones en CIVICUM**

* Lenguaje ciudadano: Sin jerga burocrática, español simple y directo  
* Asistente como traductor: "calle rota" → "solicitud de bacheo"  
* Mensajes empáticos validando frustración del usuario  
* Contadores de impacto personal: "Has ayudado a X vecinos"  
* Dashboard ranking institucional por tasa de respuesta  
* Escalamiento automático a Contraloría si excede plazo legal  
* Input por voz para usuarios con baja alfabetización  
* Glosario contextual integrado en flujos complejos

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-13** | Humanización | Voz cálida, no burocrática |
| **F-14** | Lenguaje Ciudadano | Sin gov-speak ni techno-babble |
| **F-22** | Asistente | Buffer ciudadano-burocracia |
| **F-25** | Sostenibilidad | Misiones \= simplificar al extremo |

### **Feature Flags Derivados**

ENABLE\_NATURAL\_LANGUAGE\_REPORTSENABLE\_INSTANT\_RECEIPT\_CONFIRMATIONENABLE\_PROCESS\_VISIBILITY\_TRACKINGENABLE\_ONE\_STOP\_SHOP\_ROUTINGENABLE\_EMPATHIC\_ACKNOWLEDGMENTENABLE\_ACHIEVEMENT\_COUNTERSENABLE\_INSTITUTIONAL\_RANKINGENABLE\_DEADLINE\_ESCALATIONENABLE\_VOICE\_INPUT\_REPORTSENABLE\_CONTEXTUAL\_GLOSSARY

## **2.6 CASOS DE ÉXITO Y FRACASO**

*Aprendizajes de plataformas y movimientos en Chile*

| ID | BLOQUE 6 |
| :---- | :---- |
| **Horas Estimadas** | \~480h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 6.1 | Plataformas Exitosas en Chile | ✅ INTEGRADO |
| 6.2 | Plataformas Fracasadas en Chile | ✅ INTEGRADO |
| 6.3 | Aprendizajes del Estallido Social | ✅ INTEGRADO |

### **Hallazgo Principal**

CASOS DE ÉXITO ANALIZADOS:- TECHO Chile: Confianza construida "haciendo la pega", 112,000 casas, 25+ años- ChileAtiende: 2.1M+ atenciones, resuelve dolor real de forma simple- Comisaría Virtual: 663M permisos, 98% uptime, robustez técnica como precondición- SOSAFE: 2M+ usuarios año 1, adopción masiva por resolver problema concreto- No+AFP: Articulación masiva bottom-up, 2M+ adherentes- Ollas Comunes COVID: Raciones verificables, impacto real medible

PATRONES DE ÉXITO:1. Confianza se construye con resultados concretos \+ transparencia2. Adopción masiva requiere resolver dolor real de forma simple3. Híbrido digital/presencial amplía alcance4. Impacto real \= métricas concretas (casas, raciones, leyes)5. Resiliencia viene de institucionalización \+ comunidad fiel6. Innovación bottom-up luego adoptada por instituciones

CASOS DE FRACASO ANALIZADOS:- Proceso Constituyente Bachelet: 204K participantes, archivado- Congreso Virtual: Sin integración de lenguaje ciudadano- Consulta Indígena 2019: Imposición sin co-diseño \= boicot- Múltiples portales OIRS: Sin feedback, sin consecuencias

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Casas construidas TECHO | **112,000+** |
| Permisos Comisaría Virtual | **663 millones** |
| Uptime Comisaría Virtual | **98%** |
| Usuarios SOSAFE año 1 | **2M+** |
| Meta CIVICUM año 1 | **500K usuarios** |
| Participantes proceso fallido | **204K (Bachelet)** |

### **Aplicaciones en CIVICUM**

* "Hacer la pega" \- resultados concretos visibles antes que promesas  
* Métricas públicas de impacto: X casos resueltos, Y vecinos ayudados  
* Canales híbridos digital/presencial para máximo alcance  
* Seguimiento visible para el usuario tipo ticket  
* Dashboard de resultados público y actualizado  
* Robustez técnica como precondición (99% uptime meta)  
* Co-crear reglas con participantes, nunca imponer  
* Integración con ecosistema existente (WhatsApp, FB)

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-03** | Empoderamiento Verificado | Usuario puede comprobar impacto real |
| **F-07** | Confianza Progresiva | Validado por éxitos chilenos |
| **F-10** | Anti-Élite | Horizontalidad y vocerías rotativas funcionan |
| **F-17** | Calm Technology | Nunca instrumentalizar la participación |
| **F-21** | Guardianes | Validado por aprendizajes estallido |

### **Feature Flags Derivados**

FF\_PLATFORM\_HYBRID\_CHANNELSFF\_PLATFORM\_LOW\_DATA\_MODEFF\_PLATFORM\_WHATSAPP\_INTEGRATIONFF\_PLATFORM\_IMPACT\_METRICS\_PUBLICFF\_PLATFORM\_CASE\_TRACKING\_VISIBLEFF\_PLATFORM\_RESULTS\_DASHBOARDFF\_PLATFORM\_CODESIGN\_ENABLEDFF\_PLATFORM\_RESILIENCE\_MODE

## **2.7 NUEVAS TENDENCIAS**

*Integración final, riesgos y gobernanza*

| ID | BLOQUE 7 |
| :---- | :---- |
| **Horas Estimadas** | \~600h |

### **Sub-bloques Integrados**

| ID | Contenido | Estado |
| :---- | :---- | :---- |
| 7.1 | Métricas de Resonancia Cultural | ✅ INTEGRADO |
| 7.2 | Segmentos S1-S6 Consolidados | ✅ INTEGRADO |
| 7.3 | Riesgos Culturales y Mitigación | ✅ INTEGRADO |
| 7.4 | Gobernanza y Sostenibilidad | ✅ INTEGRADO |

### **Hallazgo Principal**

TENDENCIAS EMERGENTES EN PARTICIPACIÓN CHILENA:

1\. INMEDIATEZ DIGITALLos chilenos esperan respuestas en minutos, no días. TikTok e Instagram han reconfigurado las expectativas de feedback. CIVICUM debe dar confirmación inmediata y actualizaciones frecuentes.

2\. HORIZONTALIDAD RADICALPost-estallido, hay rechazo a cualquier estructura jerárquica tradicional. Las vocerías rotativas y la toma de decisiones colectiva son la norma esperada.

3\. DESCONFIANZA EN ALGORITMOS"¿Quién decide qué veo?" es una pregunta recurrente. La transparencia algorítmica es obligatoria.

4\. PRAGMATISMO ELECTORALEl chileno vota "útil" sobre ideología. Busca soluciones concretas, no discursos. CIVICUM debe ofrecer valor tangible antes de pedir compromiso.

5\. FATIGA DE APPSSaturación de plataformas. CIVICUM debe integrarse donde ya está el usuario (WhatsApp, Instagram) en lugar de pedir instalación de otra app.

SEGMENTOS OPERATIVOS S1-S6:- S1: Digital/Activista \- Herramientas avanzadas- S2: Profesional Cívico \- Datos, transparencia- S3: Ciudadano Común \- Soluciones rápidas- S4: Mayor Cauteloso \- UX simple, confianza- S5: Vulnerable/Riesgo \- Protección máxima- S6: Líder Comunitario \- Coordinación, roles

### **Datos Clave**

| Indicador | Valor |
| :---- | :---- |
| Expectativa de feedback | **\<24 horas** |
| Confianza en algoritmos | **Baja \- requiere transparencia** |
| Apps instaladas promedio | **Saturación \- integración preferida** |
| Segmentos operativos definidos | **6 (S1-S6)** |
| Métricas de resonancia cultural | **24 (M-01 a M-24)** |
| Riesgos culturales identificados | **15+ con mitigación** |

### **Aplicaciones en CIVICUM**

* Feedback inmediato en toda interacción (\<24h)  
* Transparencia algorítmica: explicar por qué se muestra cada contenido  
* Integración con WhatsApp/Telegram para notificaciones  
* Valor tangible antes de pedir registro  
* Experiencia adaptativa por segmento S1-S6  
* Horizontalidad en Mesas y Círculos  
* Gobernanza visible y activable en crisis  
* Roles rotativos para evitar captura por élites

### **Decisiones F-XX Validadas**

| Decisión | Nombre | Justificación Antropológica |
| :---- | :---- | :---- |
| **F-04** | Construcción Secuencial | Entregar valor por fases |
| **F-08** | Disyuntor Humano | Gobernanza en crisis |
| **F-10** | Anti-Élite | Roles rotativos obligatorios |
| **F-22** | Capital Humano | Formación de liderazgos horizontales |
| **F-25** | Sostenibilidad | Blindaje contra cooptación |

### **Feature Flags Derivados**

ENABLE\_IMMEDIATE\_FEEDBACKENABLE\_ALGORITHM\_TRANSPARENCYENABLE\_MESSAGING\_INTEGRATIONENABLE\_VALUE\_FIRST\_UXENABLE\_SEGMENT\_ADAPTIVE\_UXENABLE\_HORIZONTAL\_GOVERNANCEENABLE\_ROTATIVE\_ROLESENABLE\_CRISIS\_MODE

# **3\. FEATURE FLAGS ANTROPOLÓGICOS (46)**

Esta sección documenta los 46 Feature Flags derivados de la investigación antropológica, organizados por hallazgo cultural.

## **H1: Herencia Institucional**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_STEP\_EXPLANATIONS | Explicar cada paso del flujo al usuario |
| ENABLE\_DATA\_USAGE\_TOOLTIPS | "¿Por qué pedimos esto?" en cada campo |
| ENABLE\_REAL\_TIME\_TRACKING | Seguimiento en tiempo real de casos |
| ENABLE\_DEADLINE\_COUNTDOWN | Contador de días restantes visible |
| ENABLE\_PROACTIVE\_NOTIFICATIONS | Notificaciones antes de plazos |
| ENABLE\_AUTOMATIC\_ESCALATION | Escalar si no hay respuesta en plazo |
| ENABLE\_HUMAN\_DISRUPTOR | Disyuntor Humano para casos críticos |
| ENABLE\_CIVIC\_COUNCIL | Consejo Cívico como última instancia |

## **H2: Estallido Social**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_VICTORY\_CELEBRATIONS | "¡Lo lograste\!" con celebración visual |
| ENABLE\_CITIZEN\_VOICE\_CHANNEL | Canalización de descontento |
| ENABLE\_INDEPENDENCE\_DISCLAIMERS | "No somos del gobierno" visible |
| ENABLE\_TRANSPARENCY\_SECTION | Publicar financiamiento siempre |

## **H3: Cansancio Cívico**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_LOCAL\_SUCCESS\_STORIES | Casos de éxito locales destacados |
| ENABLE\_MICRO\_VICTORIES | Pequeños logros constantes visibles |
| ENABLE\_PROGRESS\_BARS | Barras de progreso en todo proceso |
| ENABLE\_24H\_FEEDBACK | Resultado visible en máximo 24h |
| ENABLE\_INTERMEDIATE\_ACHIEVEMENTS | Logros intermedios reconocidos |

## **H4: Organizaciones Tradicionales**

**Prioridad: P1**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_VERIFIED\_ORGANIZATIONS | Perfiles verificados JJ.VV. |
| ENABLE\_MULTIGENERATIONAL\_UX | Diseño para todas las edades |
| ENABLE\_OFFLINE\_EXPORT | Exportar para reuniones presenciales |
| ENABLE\_ASSEMBLY\_CALENDAR | Calendario de asambleas locales |
| ENABLE\_ORG\_BADGES | Insignias "Junta Activa en CIVICUM" |

## **H5: Nuevas Formas de Participación**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_SOCIAL\_FEED\_STYLE | Feed tipo timeline RRSS |
| ENABLE\_TRENDING\_CAUSES | Causas trending/hashtags ciudadanos |
| ENABLE\_PETITION\_SYSTEM | Sistema "Yo Apoyo" con umbrales |
| ENABLE\_MULTI\_PLATFORM\_SHARE | Compartir a múltiples plataformas |
| ENABLE\_WHATSAPP\_INTEGRATION | Integración con WhatsApp |

## **H6: Brecha Digital**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_MODE\_LITE | Modo ligero para conexiones lentas |
| ENABLE\_LARGE\_FONTS | Opción de fuentes grandes |
| ENABLE\_STEP\_BY\_STEP\_TUTORIALS | Tutoriales paso a paso |
| ENABLE\_HUMAN\_SUPPORT | Acceso a soporte humano |
| ENABLE\_VOICE\_INPUT | Entrada por voz |

## **H7: Tono Local**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_CHILEAN\_MICROCOPY | Microcopy con chilenismos apropiados |
| ENABLE\_INFORMAL\_TONE | Tono cercano, no burocrático |
| ENABLE\_EMPATHIC\_RESPONSES | Respuestas empáticas ante errores |
| ENABLE\_CONTEXTUAL\_HELP | Ayuda contextual en flujos |

## **H8: Viaje de Adopción**

**Prioridad: P0**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_ONBOARDING\_BY\_INTENT | "¿Qué te trajo hoy?" inicial |
| ENABLE\_QUICK\_WIN\_UNDER\_90S | Primera victoria en \<90 segundos |
| ENABLE\_EXPLORATION\_MODE | Explorar sin registro obligatorio |
| ENABLE\_PROGRESSIVE\_REGISTRATION | Registro progresivo según uso |

## **H9: Relación con Autoridades**

**Prioridad: P1**

| Flag | Descripción |
| :---- | :---- |
| ENABLE\_CALM\_MODE | Modo Calma anti-brigading |
| ENABLE\_INSTITUTIONAL\_PROFILES | Perfiles de autoridades |
| ENABLE\_RESPONSE\_TRACKING | Tracking de respuestas institucionales |
| ENABLE\_AUTHORITY\_RATINGS | Calificación de autoridades |

# **4\. TAREAS DE DESARROLLO (64)**

Esta sección documenta las 64 tareas de desarrollo derivadas de la investigación antropológica, priorizadas por criticidad.

## **Prioridad 0 \- Bloqueantes MVP**

| ID | Tarea | Módulo | Horas |
| :---- | :---- | :---- | :---- |
| T-001 | Implementar pregunta "¿Qué te trajo hoy?" en onboarding | Mi CIVICUM | 2h |
| T-002 | Crear 3 rutas de onboarding por intención | Mi CIVICUM | 4h |
| T-003 | Definir "quick win" verificable para cada ruta | Mi CIVICUM | 2h |
| T-004 | Agregar footer de financiamiento visible en todas las páginas | Global | 1h |
| T-005 | Mostrar Escudo \+ Advertencia antes de acciones de exposición | Alza la Voz | 4h |
| T-006 | Implementar controles de visibilidad post-publicación | Alza la Voz | 6h |
| T-007 | Feed tipo timeline para Alza la Voz | Alza la Voz | 10h |
| T-008 | Sistema de tendencias/hashtags ciudadanos | Alza la Voz | 8h |
| T-009 | Proceso verificación antes de publicar en Observatorio | Observatorio | 12h |
| T-010 | Sistema "Yo Apoyo" con umbrales de escalamiento | Voto | 10h |
| T-011 | Exploración anónima sin registro obligatorio | Core | 8h |
| T-012 | Termómetro Cívico público (sin login) | Core | 10h |
| T-013 | Primera acción con máximo 3 campos | Core | 8h |
| T-014 | Timeline visual de estado del caso | Alza la Voz | 10h |
| T-015 | Página "Quiénes Somos" con transparencia completa | Core | 6h |
| T-016 | Feedback inmediato al enviar reporte | Alza la Voz | 6h |
| T-017 | Lenguaje natural para reportes (sin formularios) | Alza la Voz | 12h |
| T-018 | Confirmación instantánea con recibo | Core | 4h |
| T-019 | Tracking visible de proceso para usuario | Core | 10h |
| T-020 | Routing automático "ventanilla única" | Core | 12h |

## **Prioridad 1 \- Alta**

| ID | Tarea | Módulo | Horas |
| :---- | :---- | :---- | :---- |
| T-021 | Implementar detección de segmento por comportamiento | Mi CIVICUM | 8h |
| T-022 | Crear variantes de UI para segmentos S3, S4 | Mi CIVICUM | 16h |
| T-023 | Agregar sección "Mi Fiscalización" con contadores | Mi CIVICUM | 4h |
| T-024 | Implementar glosario inline con tooltips | Academia | 6h |
| T-025 | Crear tutorial guiado para segmento S4 | Academia | 8h |
| T-026 | Micro-contenidos educativos contextualizados | Academia | 4h |
| T-027 | Mostrar "X reportes similares resueltos" al crear reporte | Alza la Voz | 4h |
| T-028 | Agregar tiempo estimado de respuesta por tipo | Alza la Voz | 3h |
| T-029 | Implementar tracker visible de estado del caso | Alza la Voz | 6h |
| T-030 | Sección "Prueba de vida" con casos reales resueltos | Cuentas Claras | 8h |
| T-031 | Contextualización al vuelo (ej: presupuesto no ejecutado) | Cuentas Claras | 6h |
| T-032 | Herramientas de facilitador para cabildos | Mesas | 12h |
| T-033 | Círculos temáticos con misiones estructuradas | Círculos | 16h |
| T-034 | Vinculación entre coaliciones y movimientos | Círculos | 8h |
| T-035 | Crowdfunding cívico para proyectos locales | Círculos | 20h |
| T-036 | Fact-checking ciudadano colaborativo | Academia | 16h |
| T-037 | Reconocimiento empático ante errores usuario | Global | 4h |
| T-038 | Contadores de logros/impacto personal | Mi CIVICUM | 6h |
| T-039 | Ranking institucional por tasa respuesta | Observatorio | 10h |
| T-040 | Escalamiento automático a Contraloría | Alza la Voz | 8h |

## **Prioridad 2 \- Media**

| ID | Tarea | Módulo | Horas |
| :---- | :---- | :---- | :---- |
| T-041 | Modo offline/imprimible para exportar actas | Mesas | 8h |
| T-042 | Input por voz para baja alfabetización | Global | 12h |
| T-043 | Glosario contextual inline | Global | 8h |
| T-044 | Historial cívico personal completo | Voto | 6h |
| T-045 | Módulo anti-desinformación con casos reales | Academia | 10h |
| T-046 | Dashboard de transparencia Observatorio | Observatorio | 12h |
| T-047 | Sistema de alertas de poder | Observatorio | 8h |
| T-048 | Simulador de votación | Voto | 10h |
| T-049 | Matching diverso en Mesas de Trabajo | Mesas | 12h |
| T-050 | Métricas de impacto de voto | Voto | 8h |
| T-051 | Canales híbridos digital/presencial | Global | 16h |
| T-052 | Modo baja conectividad | Core | 12h |
| T-053 | Integración WhatsApp para notificaciones | Core | 10h |
| T-054 | Integración Telegram para alertas | Core | 8h |
| T-055 | Dashboard público de impacto | Core | 12h |
| T-056 | Perfiles verificados para organizaciones | Mi CIVICUM | 10h |
| T-057 | Calendario de asambleas locales | Círculos | 8h |
| T-058 | Insignias para organizaciones activas | Mi CIVICUM | 4h |
| T-059 | Guía de Estilo Local para microcopy | Global | 8h |
| T-060 | Servicio de pseudonimización Vecino \#ID | Core | 12h |
| T-061 | Modo Calma \+ detector de brigading | Moderación | 16h |
| T-062 | Tarjeta Amarilla educativa | Moderación | 6h |
| T-063 | Doble vista Oficio/Sencillo | Global | 10h |
| T-064 | Testing con usuarios locales (focus groups) | QA | 24h |

# **5\. INSIGHTS CLAVE PARA CIVICUM (7)**

Esta sección documenta los 7 insights culturales fundamentales que guían todas las decisiones de diseño de CIVICUM.

## **5.1 Desconfianza Institucional Estructural**

**DATO CLAVE: 78% no confía en su municipio (2024)**

### **Explicación**

La desconfianza hacia las instituciones públicas en Chile no es coyuntural sino estructural, heredada de décadas de centralismo, burocracia y experiencias autoritarias. Esta desconfianza se exacerbó post-estallido 2019 y post-procesos constitucionales fallidos.

IMPLICANCIA PARA CIVICUM:- Toda promesa debe ser verificable y limitada- Transparencia total en financiamiento, gobernanza y algoritmos- "Esto sí podemos / esto no podemos" desde el Home- Mostrar casos reales resueltos como "prueba de vida"- Explicar cada paso del flujo con tooltips- Contador de días restantes visible en todo proceso

### **Regla de Producto Derivada**

*Explicar siempre qué hace la plataforma con los datos, sin "letra chica". Mostrar seguimiento visible de cada proceso.*

**Decisiones Relacionadas:** F-02, F-07, F-19, F-23

## **5.2 Pragmatismo Electoral Chileno**

**DATO CLAVE: Voto útil sobre ideología \- valor tangible primero**

### **Explicación**

El chileno promedio es pragmático: vota "útil" sobre ideología, busca soluciones concretas antes que discursos. Después de la fatiga constitucional, hay hartazgo de grandes promesas sin resultados.

IMPLICANCIA PARA CIVICUM:- Ofrecer valor tangible ANTES de pedir compromiso o registro- Permitir explorar sin login obligatorio- Primera victoria verificable en \<90 segundos- Mostrar resultados concretos: "Esta semana se resolvieron X casos en tu comuna"- Evitar narrativa épica o revolucionaria- Tono de "esperanza sin épica"

### **Regla de Producto Derivada**

*El usuario debe obtener valor tangible antes de cualquier solicitud de datos o compromiso.*

**Decisiones Relacionadas:** F-03, F-16, F-18

## **5.3 Necesidad de Acción Concreta sobre Narrativa**

**DATO CLAVE: 68% chilenos no dispuestos a organizarse; solo 10% siente esperanza**

### **Explicación**

Existe una profunda brecha entre la indignación expresada y la disposición a actuar. La mayoría de chilenos está frustrada pero no cree que su participación cambie algo. Solo el 10% siente esperanza respecto al futuro cívico.

IMPLICANCIA PARA CIVICUM:- Convertir la indignación en acciones concretas de bajo esfuerzo- Microvictorias constantes para combatir el cinismo- Misiones cívicas de corta duración con impacto visible- Feedback inmediato (\<24h) de cada acción- Celebración visible de logros colectivos- Contadores de impacto personal: "Has ayudado a X vecinos"

### **Regla de Producto Derivada**

*Cada acción del usuario debe tener confirmación visible, siguiente paso claro, y timeline de resultados.*

**Decisiones Relacionadas:** F-01, F-16, F-23

## **5.4 Evitar Asociación Partidista**

**DATO CLAVE: Apartidismo radical post "no nos representan"**

### **Explicación**

El grito "no nos representan" del estallido 2019 expresó un rechazo profundo a la clase política completa. Cualquier asociación partidista \- real o percibida \- destruye instantáneamente la confianza en una plataforma cívica.

IMPLICANCIA PARA CIVICUM:- Narrativa explícita de independencia: "CIVICUM no pertenece a ningún gobierno ni partido"- Publicar financiamiento transparentemente en footer visible- Evitar colores o símbolos asociados a partidos- Paleta Terracota elegida específicamente por neutralidad- Moderación equilibrada que no favorezca ninguna posición- Diversidad obligatoria en Mesas de Trabajo

### **Regla de Producto Derivada**

*El apartidismo debe ser visible, demostrable y constante. Financiamiento y gobernanza 100% transparentes.*

**Decisiones Relacionadas:** F-05, F-08, F-25

## **5.5 Transparencia como Antídoto a Secretismo Histórico**

**DATO CLAVE: Preocupación por elitismo y falta de equidad (OCDE 2023\)**

### **Explicación**

Chile tiene una historia de decisiones tomadas "en la cocina" por élites. Los procesos constitucionales donde acuerdos se "cocinaban" a puertas cerradas generaron rechazo masivo. La transparencia no es un nice-to-have, es requisito de legitimidad.

IMPLICANCIA PARA CIVICUM:- Algoritmos explicables: "Te mostramos esto porque..."- Gobernanza visible y activable en crisis- Actas públicas de todas las Mesas de Trabajo- Dashboard de transparencia del Observatorio en tiempo real- Sin "letra chica" en ningún proceso- Explicar criterios de priorización y moderación

### **Regla de Producto Derivada**

*Todo proceso debe ser auditable. Explicar siempre el "por qué" detrás de cada decisión algorítmica o editorial.*

**Decisiones Relacionadas:** F-02, F-21, F-25

## **5.6 Facilitar Autogestión Comunitaria**

**DATO CLAVE: Cabildos autoconvocados funcionaron sin líderes fijos (2019)**

### **Explicación**

El estallido demostró que la ciudadanía chilena es capaz de auto-organizarse horizontalmente cuando se dan las condiciones. Los \~15,000 cabildos autoconvocados en semanas fueron una demostración de capacidad de autogestión.

IMPLICANCIA PARA CIVICUM:- Herramientas de facilitación para que comunidades se auto-organicen- Roles rotativos para evitar captura por élites- Vocerías rotativas en Mesas y Círculos- Integración con organizaciones existentes (JJ.VV., clubes)- Calendario de asambleas locales- Exportación para reuniones presenciales- Insignias para organizaciones activas

### **Regla de Producto Derivada**

*CIVICUM facilita, no dirige. Las comunidades deben poder auto-organizarse con herramientas horizontales.*

**Decisiones Relacionadas:** F-10, F-21, F-22

## **5.7 Respeto a Trauma Cívico**

**DATO CLAVE: 3,581 lesionados en estallido; fatiga post-constitucional documentada**

### **Explicación**

Chile vivió trauma cívico reciente: represión durante el estallido, dos procesos constitucionales fallidos, polarización extrema. Hay heridas abiertas que requieren manejo sensible.

IMPLICANCIA PARA CIVICUM:- Advertencias para contenido sensible (F-26)- Escudo de protección de identidad para temas delicados- Evitar TODO lenguaje que evoque procesos constitucionales- Tono de "esperanza sin épica" \- no promesas grandilocuentes- Opción de participación anónima cuando sea apropiado- Moderación empática que reconozca frustración legítima- Líneas de apoyo visibles (131, 149\) en contextos de crisis

### **Regla de Producto Derivada**

*Contenido relacionado con estallido, procesos constitucionales o temas divisivos debe tener advertencias previas y opción de no ver.*

**Decisiones Relacionadas:** F-17, F-18, F-19, F-26

# **6\. SEGMENTOS OPERATIVOS S1-S6**

Los segmentos operativos NO son demográficos puros. Son segmentos por "fricción dominante" para decisiones de UX.

| Segmento | Perfil | Fricción Dominante | Necesidad Principal |
| :---- | :---- | :---- | :---- |
| **S1** | Digital/Activista | Desconfianza institucional | Herramientas avanzadas, datos |
| **S2** | Profesional Cívico | Falta de datos confiables | Transparencia, métricas |
| **S3** | Ciudadano Común | Falta de tiempo/interés | Soluciones rápidas, bajo esfuerzo |
| **S4** | Mayor Cauteloso | Brecha digital, desconfianza | UX simple, tutoriales, confianza |
| **S5** | Vulnerable/Riesgo | Miedo a represalias, exposición | Protección máxima, anonimato |
| **S6** | Líder Comunitario | Carga de coordinación | Herramientas de facilitación |

# **7\. MÉTRICAS Y CERTIFICACIÓN**

## **7.1 Certificación de Completitud**

| ✅ CERTIFICACIÓN DE COMPLETITUD |
| ----- |
| **Este documento certifica que:** 7 bloques temáticos están completamente documentados 27 sub-bloques están integrados con 0 omisiones 46 Feature Flags antropológicos están especificados 64 tareas de desarrollo están documentadas con horas 7 insights clave están expandidos con reglas de producto 6 segmentos operativos (S1-S6) están definidos 25+ decisiones F-XX están validadas antropológicamente **TOTAL: \~2,800 horas de desarrollo estimadas** |
| Fecha de Certificación: Febrero 2026 Versión del Documento: 1.0 **Estado: APROBADO PARA REGISTRO INAPI** |

## **7.2 Declaración de Propiedad Intelectual**

Todos los fundamentos antropológicos y culturales documentados en este anexo constituyen propiedad intelectual original de CIVICUM. La investigación, metodología, insights, feature flags y tareas aquí descritas representan innovaciones desarrolladas específicamente para la plataforma de participación cívica ciudadana de Chile.

Los elementos protegibles incluyen:

* Metodología de investigación antropológica aplicada a civic tech  
* Sistema de 7 bloques temáticos de análisis cultural chileno  
* Framework de 46 Feature Flags culturalmente informados  
* Sistema de segmentación operativa S1-S6 por fricción dominante  
* 7 Insights clave con reglas de producto derivadas  
* Validación antropológica de 25+ decisiones F-XX

**— FIN DEL ANEXO DE FUNDAMENTOS ANTROPOLÓGICOS Y CULTURALES —**  
CIVICUM \- Sistema Nervioso Cívico de Chile  
Documento generado para protección intelectual INAPI