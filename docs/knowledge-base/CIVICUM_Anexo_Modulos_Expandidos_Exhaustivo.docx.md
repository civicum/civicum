**CIVICUM**

Sistema Nervioso Cívico de Chile

─────────────────────────────────────

**ANEXO TÉCNICO EXHAUSTIVO**

Módulos Expandidos: Especificaciones Completas

*Documento de Protección Intelectual*

*Registro INAPI \- Chile*

Versión 1.0 \- Enero 2026  
**CONFIDENCIAL \- USO INTERNO**

# **ÍNDICE DE CONTENIDOS**

1\. Resumen Ejecutivo de Módulos Expandidos

2\. Promesómetro Integral (218 horas)

   2.1. Cobertura y Alcance

   2.2. Arquitectura de Datos PostgreSQL

   2.3. Estados y Ciclo de Vida de Promesas

   2.4. Fuentes de Datos por Tipo de Autoridad

   2.5. Funcionalidades Modo Exploración

   2.6. Funcionalidades Nivel 3 (Verificados)

   2.7. Backlog de Desarrollo Detallado

   2.8. Feature Flags y Configuración

   2.9. Principios de Diseño y Neutralidad

   2.10. Hooks de Conversión

   2.11. Wireframes de Interfaz

   2.12. Sistema Antiplagio para Compartir

3\. Observatorio del Poder (72 horas \+ integraciones)

   3.1. Expedientes de Autoridades (21 campos)

   3.2. Termómetro del Poder

   3.3. Termostato Ciudadano

   3.4. Observatorio Judicial (F-37)

   3.5. Radar de Lobby

   3.6. Integraciones con 5+ Fuentes

4\. Laboratorio de Ideas (104 horas)

   4.1. Wizard Socrático (LawBuilder)

   4.2. Carrito de Compras Público

   4.3. Semáforo de Viabilidad

   4.4. Argumentos Blindados

   4.5. Conexión con Voto Ciudadano

5\. Círculos de Acción (120-150 horas)

   5.1. Tablero de Misiones (Kanban)

   5.2. Votación Vinculante Interna

   5.3. Actas Automáticas con IA

   5.4. Gestión de Tareas Colaborativas

   5.5. Briefing de Poder Contextual (F-38)

   5.6. Misiones Colaborativas (F-22)

   5.7. Aprendizajes Estallido Social 2019

6\. Dashboard Institucional (88 horas)

   6.1. Panel de Control Institucional

   6.2. Espejo de Reputación

   6.3. Gestión de Reportes Alza la Voz

   6.4. Métricas de Eficiencia

   6.5. Feedback Accionable con IA

   6.6. Insignias de Auditoría

   6.7. Mapa de Poder Personal

7\. Integraciones Cruzadas entre Módulos

8\. Arquitectura Técnica Compartida

9\. Resumen de Estimaciones

# **1\. RESUMEN EJECUTIVO DE MÓDULOS EXPANDIDOS**

Este anexo técnico documenta las especificaciones completas de los cinco módulos expandidos de CIVICUM, diseñados para transformar la participación ciudadana en Chile mediante herramientas de fiscalización, deliberación y acción colectiva.

**Módulos Documentados**

| Módulo | Horas Desarrollo | Decisiones Clave |
| :---- | :---- | :---- |
| Promesómetro Integral | 218h | F-23, F-24, F-33 |
| Observatorio del Poder | 72h \+ integraciones | F-37, F-38 |
| Laboratorio de Ideas | 104h | F-39 |
| Círculos de Acción | 120-150h (estimado) | F-22, F-38 |
| Dashboard Institucional | 88h | F-40 |
| TOTAL | 602-632 horas |  |

**Principios Rectores**

* Neutralidad Política Absoluta: Sin sesgos partidarios en presentación de datos  
* Verificabilidad Total: Cada dato trazable a fuente oficial  
* Inclusión por Diseño: Funcional en dispositivos básicos y sin conexión  
* Conversión Ética: Hooks que demuestran valor sin manipulación  
* Escalabilidad Progresiva: Feature flags para activación gradual

# **2\. PROMESÓMETRO INTEGRAL**

**Estimación total: 218 horas de desarrollo**

Decisiones asociadas: F-23 (Promesómetro MVP), F-24 (Expansión Territorial), F-33 (Sistema Fuentes)

## **2.1. Cobertura y Alcance**

El Promesómetro cubre 552+ autoridades electas en Chile:

| Nivel | Cantidad | Fuente Principal |
| :---- | :---- | :---- |
| Presidente de la República | 1 | Programa de Gobierno oficial |
| Senadores | 50 | BCN Historia Política, VotaInteligente |
| Diputados | 155 | opendata.camara.cl, tramitacion.senado.cl |
| Alcaldes | 346 | Programas campaña 2024, SINIM |

**Categorías Temáticas de Promesas**

| Categoría | Cantidad Estimada | Ejemplos |
| :---- | :---- | :---- |
| Seguridad | \~60 promesas | Patrullaje, cámaras, prevención |
| Economía | \~50 promesas | Empleo, PYMES, inversión |
| Salud | \~40 promesas | CESFAM, medicamentos, listas espera |
| Educación | \~35 promesas | Infraestructura, becas, calidad |
| Migración | \~15 promesas | Regularización, control fronterizo |
| Vivienda | \~30 promesas | Subsidios, arriendo, campamentos |
| Medio Ambiente | \~25 promesas | Reciclaje, áreas verdes, emisiones |
| Transporte | \~40 promesas | Metro, buses, ciclovías |
| Institucional | \~20 promesas | Reforma Estado, descentralización |
| Otros | \~50 promesas | Cultura, deporte, pueblos originarios |

## **2.2. Arquitectura de Datos PostgreSQL**

Esquema relacional diseñado para trazabilidad completa:

**Tabla: government\_periods**

Almacena períodos de mandato de autoridades electas.

| Campo | Tipo | Descripción |
| :---- | :---- | :---- |
| id | UUID PRIMARY KEY | Identificador único del período |
| authority\_type | TEXT | presidente, senador, diputado, alcalde |
| authority\_id | UUID | Referencia a tabla de autoridades |
| start\_date | DATE | Fecha inicio mandato |
| end\_date | DATE | Fecha fin mandato |
| territory\_id | UUID | Comuna, distrito o región |
| total\_days | INTEGER | Días totales del período (ej: 1460\) |
| current\_day | INTEGER COMPUTED | Día actual del mandato |

**Tabla: campaign\_promises**

Registro central de promesas de campaña.

| Campo | Tipo | Descripción |
| :---- | :---- | :---- |
| id | UUID PRIMARY KEY | Identificador único de promesa |
| period\_id | UUID FK | Referencia al período de gobierno |
| category | TEXT | Categoría temática |
| title | TEXT | Título breve de la promesa |
| description | TEXT | Descripción completa |
| status | ENUM | cumplida, en\_progreso, incumplida, pendiente, descartada |
| progress\_percentage | INTEGER | Porcentaje de avance (0-100) |
| source\_url | TEXT | URL del programa de campaña |
| source\_page | INTEGER | Página del documento fuente |
| territory\_id | UUID | Territorio de aplicación |
| created\_at | TIMESTAMP | Fecha de registro en sistema |
| updated\_at | TIMESTAMP | Última actualización |

**Tabla: promise\_evidence**

Evidencias que respaldan el estado de cada promesa.

| Campo | Tipo | Descripción |
| :---- | :---- | :---- |
| id | UUID PRIMARY KEY | Identificador único |
| promise\_id | UUID FK | Referencia a la promesa |
| evidence\_type | ENUM | documento\_oficial, noticia, declaracion, estadistica |
| title | TEXT | Título de la evidencia |
| url | TEXT | URL de la fuente |
| archive\_url | TEXT | Respaldo en Archive.org |
| date\_added | DATE | Fecha de incorporación |
| verified | BOOLEAN | Verificada por equipo CIVICUM |
| verifier\_id | UUID | Usuario verificador (si aplica) |
| impact\_score | INTEGER | Relevancia de la evidencia (1-10) |

**Tabla: citizen\_validations**

Validaciones ciudadanas sobre el estado de promesas.

| Campo | Tipo | Descripción |
| :---- | :---- | :---- |
| id | UUID PRIMARY KEY | Identificador único |
| promise\_id | UUID FK | Referencia a la promesa |
| user\_id | UUID FK | Usuario que valida (Nivel 3+) |
| validation\_type | ENUM | confirma, disputa |
| comment | TEXT | Justificación de la validación |
| evidence\_url | TEXT | Evidencia aportada (si disputa) |
| timestamp | TIMESTAMP | Momento de la validación |
| status | ENUM | pendiente, aprobada, rechazada |

## **2.3. Estados y Ciclo de Vida de Promesas**

Cada promesa sigue un ciclo de vida con cinco estados posibles:

| Estado | Icono | Criterio | Color |
| :---- | :---- | :---- | :---- |
| Cumplida | ✅ | Evidencia verificable de cumplimiento total | Verde \#0D7A5F |
| En Progreso | ⏳ | Acciones concretas iniciadas, avance parcial | Dorado \#D4872E |
| Incumplida | ❌ | Plazo vencido sin acción o abandono explícito | Terracota \#C2503A |
| Pendiente | 📋 | Sin acciones iniciadas, dentro del plazo | Azul \#264653 |
| Descartada | 🚫 | Autoridad declaró que no implementará | Gris \#666666 |

**Reglas de Transición de Estados**

* Pendiente → En Progreso: Primera evidencia de acción concreta  
* En Progreso → Cumplida: Evidencia de cumplimiento total verificada  
* En Progreso → Incumplida: Plazo vencido sin completar \+ 30 días gracia  
* Pendiente → Incumplida: Plazo vencido sin iniciar acciones  
* Cualquier estado → Descartada: Declaración oficial de abandono

Nota: Las transiciones requieren evidencia verificable. Los ciudadanos Nivel 3 pueden disputar estados con evidencia contraria.

## **2.4. Fuentes de Datos por Tipo de Autoridad**

**Presidente de la República**

| Fuente | Tipo de Dato | Frecuencia Actualización |
| :---- | :---- | :---- |
| Programa de Gobierno oficial (PDF) | Promesas de campaña | Una vez (inicio período) |
| Archive.org (respaldo) | Versión histórica verificable | Una vez |
| Diario Oficial | Decretos, leyes promulgadas | Diaria |
| DIPRES | Ejecución presupuestaria | Mensual |
| Ministerios sectoriales | Avances programáticos | Trimestral |
| Cuenta Pública Anual | Balance oficial de gestión | Anual |

**Senadores y Diputados**

| Fuente | Tipo de Dato | URL |
| :---- | :---- | :---- |
| VotaInteligente | Promesas campaña, match electoral | votainteligente.cl |
| BCN Historia Política | Biografías, historial (4,022+ perfiles) | bcn.cl/historiapolitica |
| opendata.camara.cl | Votaciones, proyectos, asistencia | opendata.camara.cl |
| tramitacion.senado.cl | Tramitación proyectos Senado | tramitacion.senado.cl |
| InfoLobby | Reuniones con lobbistas | infolobby.cl |

**Alcaldes**

| Fuente | Tipo de Dato | Cobertura |
| :---- | :---- | :---- |
| Portal Transparencia Municipal | Presupuesto, contratos, personal | 346 comunas |
| Programas campaña 2024 | Promesas electorales | Variable por comuna |
| SINIM | Indicadores gestión municipal | 346 comunas |
| Cuentas Claras (CIVICUM) | Presupuesto participativo | Integración interna |
| InfoProbidad | Declaraciones patrimoniales | 100% autoridades |

## **2.5. Funcionalidades Modo Exploración (Sin Registro)**

Usuarios no registrados acceden a funcionalidades completas de consulta:

| Funcionalidad | Descripción | Limitación |
| :---- | :---- | :---- |
| Ver todas las promesas | Presidente, alcaldes, parlamentarios | Solo lectura |
| Filtrar por categoría | 10 categorías temáticas | Sin guardar filtros |
| Ver evidencias y fuentes | Enlaces a documentos verificables | Sin agregar evidencias |
| Barra de progreso | Avance general y por autoridad | Sin personalización |
| Contador de días | Día X de 1460 (o período correspondiente) | Sin alertas |
| Comparativas básicas | Autoridad vs promedio nacional | Sin comparativas personalizadas |
| Selector de territorio | Filtrar promesas por comuna/región | Sin guardar territorio |

**Hooks de Conversión en Modo Exploración**

Cada funcionalidad incluye invitaciones sutiles a registrarse:

* Al ver promesa: '¿Quieres que te avisemos cuando cambie el estado?'  
* Al filtrar: 'Guarda tus filtros favoritos creando una cuenta'  
* Al comparar: 'Compara con TU alcalde registrándote'  
* Al terminar sesión: 'Ya revisaste 12 promesas. ¿Quieres seguirlas?'

## **2.6. Funcionalidades Nivel 3 (Usuarios Verificados)**

Usuarios con verificación completa acceden a funciones avanzadas:

| Funcionalidad | Descripción | Requisito |
| :---- | :---- | :---- |
| Validación ciudadana | Confirmar o disputar estado de promesas | Evidencia verificable |
| Disputas con evidencia | Aportar documentos que contradigan estado | URL \+ descripción |
| Badge 'Verificador Cívico' | Reconocimiento por validaciones de calidad | 10+ validaciones aprobadas |
| Alertas personalizadas | Notificaciones de cambios en promesas seguidas | Configuración personal |
| Exportar informes | PDF de fiscalización por autoridad | Sin límite |
| Prioridad en revisión | Disputas revisadas primero | Automático Nivel 3 |

**Sistema de Validación Ciudadana**

Proceso de disputa de una promesa:

* 1\. Usuario Nivel 3 selecciona promesa a disputar  
* 2\. Sistema solicita: tipo de disputa (estado incorrecto, evidencia falsa, información incompleta)  
* 3\. Usuario aporta URL de evidencia contraria  
* 4\. Usuario escribe justificación (mínimo 50 caracteres)  
* 5\. Disputa entra en cola de revisión  
* 6\. Equipo CIVICUM o validadores senior evalúan  
* 7\. Si se aprueba: estado cambia \+ badge para usuario  
* 8\. Si se rechaza: notificación con explicación

## **2.7. Backlog de Desarrollo Detallado**

**P0 \- MVP Febrero 2026 (80 horas)**

| ID | Tarea | Horas | Dependencias |
| :---- | :---- | :---- | :---- |
| PROM.01 | Ingesta programa gobierno (scraping/OCR) | 12h | Ninguna |
| PROM.02 | Categorización promesas con IA | 8h | PROM.01 |
| PROM.03 | Barra progreso \+ contador días | 6h | PROM.01 |
| PROM.04 | Enlaces evidencia oficial | 8h | PROM.01 |
| PROM.05 | Modo Exploración sin registro | 10h | PROM.03, PROM.04 |
| PROM.06 | Microcopy neutralidad (F-02, F-05) | 6h | PROM.05 |
| INV.01 | Investigación fuentes presidente | 8h | Ninguna |
| INV.02 | Investigación formato promesas | 6h | INV.01 |
| INV.03 | Investigación Archive.org respaldo | 4h | Ninguna |
| INV.04 | Investigación categorías temáticas | 6h | INV.02 |
| INV.05 | Investigación UX fiscalización | 4h | Ninguna |
| QA.01 | Testing funcional completo | 8h | PROM.05 |
| QA.02 | Ajustes post-testing | 4h | QA.01 |
| QA.03 | Métricas y analytics | 4h | QA.02 |

**P1 \- Expansión Marzo-Abril 2026 (138 horas)**

| ID | Tarea | Horas | Dependencias |
| :---- | :---- | :---- | :---- |
| PROM.07 | Sistema validación ciudadana (Nivel 3\) | 10h | PROM.05 |
| PROM.08 | Badges Verificador Cívico | 6h | PROM.07 |
| PROM.09 | Alertas cambios promesas | 6h | PROM.05 |
| PROM.10 | Cruce presupuesto (Cuentas Claras) | 12h | PROM.05 |
| PROM.11 | Ingesta 346 alcaldes | 20h | PROM.01 |
| PROM.12 | Ingesta 155 diputados | 8h | PROM.01 |
| PROM.13 | Ingesta 50 senadores | 4h | PROM.01 |
| PROM.14 | Selector territorio | 6h | PROM.11 |
| PROM.15 | Vista comparativa alcalde vs gobierno | 8h | PROM.11, PROM.05 |
| PROM.16 | Exportar informe fiscalización | 6h | PROM.05 |
| INV.06 | Investigación fuentes alcaldes | 12h | Ninguna |
| INV.07 | Investigación fuentes parlamentarios | 10h | Ninguna |
| INV.08 | Investigación comparativas | 8h | INV.06, INV.07 |
| INV.09 | Investigación alertas efectivas | 6h | Ninguna |
| INV.10 | Investigación exportación PDF | 4h | Ninguna |
| QA.04 | Testing expansión completa | 12h | PROM.16 |

## **2.8. Feature Flags y Configuración**

Sistema de activación gradual de funcionalidades:

**Flags P0 (MVP)**

| Flag | Descripción | Default |
| :---- | :---- | :---- |
| ENABLE\_PROMESOMETRO | Activa módulo completo | true |
| ENABLE\_PROMISE\_CATEGORIES | Filtros por categoría temática | true |
| ENABLE\_PROGRESS\_BARS | Barras de progreso visuales | true |
| ENABLE\_EVIDENCE\_LINKS | Enlaces a fuentes verificables | true |
| ENABLE\_DAY\_COUNTER | Contador Día X de 1460 | true |
| ENABLE\_EXPLORATION\_MODE | Acceso sin registro | true |

**Flags P1 (Expansión)**

| Flag | Descripción | Default |
| :---- | :---- | :---- |
| ENABLE\_ALCALDE\_PROMISES | Promesas de 346 alcaldes | false |
| ENABLE\_DIPUTADO\_PROMISES | Promesas de 155 diputados | false |
| ENABLE\_SENADOR\_PROMISES | Promesas de 50 senadores | false |
| ENABLE\_TERRITORY\_SELECTOR | Filtro por comuna/región | false |
| ENABLE\_COMPARATIVE\_VIEW | Comparativas entre autoridades | false |
| ENABLE\_CITIZEN\_VALIDATION | Validación por Nivel 3 | false |
| ENABLE\_PROMISE\_ALERTS | Alertas de cambios | false |
| ENABLE\_BUDGET\_CROSS | Cruce con Cuentas Claras | false |
| ENABLE\_PDF\_EXPORT | Exportar informes PDF | false |

## **2.9. Principios de Diseño y Neutralidad**

**Principio 1: Neutralidad Absoluta**

CIVICUM presenta datos sin juicios de valor. Ejemplos de microcopy:

| Incorrecto | Correcto |
| :---- | :---- |
| 'Promesas de Kast' | 'Programa de Gobierno 2026-2030' |
| 'El presidente falló en...' | 'Estado: Incumplida según evidencia' |
| 'Excelente gestión de...' | 'Estado: Cumplida según evidencia' |
| 'El gobierno mintió sobre...' | 'Discrepancia entre promesa y ejecución' |

**Principio 2: Verificabilidad Total**

* Cada promesa enlaza a documento fuente (PDF programa campaña)  
* Cada evidencia incluye URL original \+ respaldo Archive.org  
* Cada cambio de estado registra timestamp \+ evidencia \+ autor  
* Historial completo disponible para auditoría

**Principio 3: Gamificación Responsable (F-08)**

Los badges y reconocimientos reflejan impacto real, no puntos vacíos:

* 'Verificador Cívico': Requiere 10+ validaciones aprobadas por equipo  
* 'Fiscalizador Activo': Requiere seguimiento consistente durante 30+ días  
* 'Contribuidor de Evidencia': Requiere aportes que cambiaron estados

## **2.10. Hooks de Conversión**

Siete estrategias para convertir exploradores en usuarios registrados:

| Hook | Trigger | Mensaje | CTA |
| :---- | :---- | :---- | :---- |
| 1\. Alertas | Ver promesa específica | ¿Quieres que te avisemos cuando cambie? | Crear cuenta |
| 2\. Disputa | Ver estado cuestionable | ¿Tienes evidencia de que NO se cumplió? | Disputar (requiere cuenta) |
| 3\. Impacto | Ver validaciones | 47 ciudadanos ya verificaron esta promesa | Únete a ellos |
| 4\. Favoritos | Navegar múltiples promesas | Guarda las promesas que te importan | Crear cuenta |
| 5\. Comparativa | Filtrar por territorio | Compara tu alcalde con otros de la región | Ver comparativa |
| 6\. Exportar | Revisar muchas promesas | Descarga informe PDF de fiscalización | Exportar |
| 7\. Territorio | Buscar por comuna | Filtra automáticamente por tu comuna | Configurar |

## **2.11. Wireframes de Interfaz**

**Landing Page \- Promesómetro**

Estructura visual del módulo principal:

┌─────────────────────────────────────────────────────────────┐

│  PROMESÓMETRO INTEGRAL                           \[Filtros\] │

├─────────────────────────────────────────────────────────────┤

│  ████████████████████░░░░░░░░░░░░░  38% Avance General     │

├─────────────────────────────────────────────────────────────┤

│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │

│  │   42    │ │   67    │ │   12    │ │   89    │           │

│  │Cumplidas│ │En Progr.│ │Incumpl. │ │Pendient.│           │

│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │

├─────────────────────────────────────────────────────────────┤

│  Día 287 de 1460  ●  Gobierno 2026-2030                    │

├─────────────────────────────────────────────────────────────┤

│  \[Ver Presidente\]  \[Ver Alcaldes\]  \[Ver Parlamentarios\]    │

├─────────────────────────────────────────────────────────────┤

│  Filtrar por: \[Seguridad ▼\] \[Salud ▼\] \[Educación ▼\] \[+\]    │

└─────────────────────────────────────────────────────────────┘

**Vista Detalle de Promesa**

┌─────────────────────────────────────────────────────────────┐

│  ✅ CUMPLIDA                                                │

│  Aumentar cobertura de salas cuna en 20%                   │

├─────────────────────────────────────────────────────────────┤

│  Categoría: Educación  │  Autoridad: Presidente            │

│  Fecha promesa: Mar 2024  │  Última actualización: Ene 2026│

├─────────────────────────────────────────────────────────────┤

│  Avance: ████████████████████░░░░  85%                     │

│  Meta: 20% más cobertura  │  Actual: 17% logrado           │

├─────────────────────────────────────────────────────────────┤

│  📎 EVIDENCIAS (3 documentos)                              │

│  • Ley 21.XXX Ampliación Salas Cuna \[Ver fuente\]           │

│  • Informe JUNJI Enero 2026 \[Ver fuente\]                   │

│  • Cuenta Pública 2025 \[Ver fuente\]                        │

├─────────────────────────────────────────────────────────────┤

│  👥 VALIDACIÓN CIUDADANA                                    │

│  47 verificaron: 42 confirman ✓  │  5 disputan ✗           │

│  \[Ver disputas\]  \[Aportar evidencia\]                       │

├─────────────────────────────────────────────────────────────┤

│  \[🔔 Seguir promesa\]  \[📤 Compartir\]  \[📥 Exportar PDF\]    │

└─────────────────────────────────────────────────────────────┘

## **2.12. Sistema Antiplagio para Compartir**

Elementos obligatorios en cards compartibles:

| Elemento | Ubicación | Especificación |
| :---- | :---- | :---- |
| Logo CIVICUM | Esquina superior izquierda | SVG 24x24px, fondo transparente |
| URL corta única | Inferior centrado | civicum.cl/p/{id\_promesa} |
| QR Code | Esquina inferior derecha | 32x32px, enlaza a URL corta |
| Marca agua diagonal | Centro, 45° | Texto semitransparente 'CIVICUM' |
| Slogan | Inferior, bajo URL | 'Fiscaliza. Verifica. Actúa.' |
| Fecha generación | Esquina inferior izquierda | DD/MM/AAAA |

**Paleta de Colores por Estado**

| Estado | Color | Código Hex |
| :---- | :---- | :---- |
| Promesa Cumplida | Verde Esperanza | \#0D7A5F |
| En Progreso | Dorado Cívico | \#D4872E |
| Incumplida | Terracota | \#C2503A |
| Pendiente | Azul Profundo | \#264653 |

# **3\. OBSERVATORIO DEL PODER**

**Estimación total: 72 horas \+ integraciones**

Decisiones asociadas: F-37 (Observatorio Judicial), F-38 (Briefing de Poder)

## **3.1. Expedientes de Autoridades (21 Campos)**

Ficha completa de cada autoridad electa:

| \# | Campo | Fuente | Actualización |
| :---- | :---- | :---- | :---- |
| 1 | Biografía completa | BCN Historia Política | Única |
| 2 | Datos de contacto (email, teléfono, redes) | Portales oficiales | Mensual |
| 3 | Declaración patrimonial | InfoProbidad | Anual |
| 4 | Historial de votaciones | opendata.camara.cl | Semanal |
| 5 | Reuniones de lobby | InfoLobby | Mensual |
| 6 | Asistencias a sesiones | Congreso Abierto | Semanal |
| 7 | Proyectos de ley presentados | BCN Tramitación | Semanal |
| 8 | Comisiones que integra | Congreso Abierto | Mensual |
| 9 | Promesas de campaña | Promesómetro (interno) | Continua |
| 10 | Presupuesto gestionado | Cuentas Claras (interno) | Mensual |
| 11 | Reportes Alza la Voz | Alza la Voz (interno) | Continua |
| 12 | Temas prioritarios | Análisis IA de intervenciones | Mensual |
| 13 | Coherencia voto vs promesas | Cálculo interno | Semanal |
| 14 | Match Parlamentario | Cálculo vs preferencias usuario | Dinámico |
| 15 | Redes de influencia | Análisis coautoría proyectos | Trimestral |
| 16 | Recursos disponibles | DIPRES, SINIM | Anual |
| 17 | Histórico de cargos | BCN Historia Política | Única |
| 18 | Formación académica | BCN Historia Política | Única |
| 19 | Trayectoria profesional | BCN \+ LinkedIn (público) | Única |
| 20 | Casos judiciales (públicos) | Poder Judicial (si aplica) | Continua |
| 21 | Indicadores de desempeño | Cálculo multivariable | Mensual |

## **3.2. Termómetro del Poder**

Visualización multidimensional del poder de cada autoridad:

| Dimensión | Indicadores | Peso |
| :---- | :---- | :---- |
| Influencia | Redes, comisiones estratégicas, cargos directivos | 25% |
| Recursos | Presupuesto gestionado, equipo, acceso a medios | 25% |
| Efectividad | Promesas cumplidas, proyectos aprobados, gestiones exitosas | 30% |
| Transparencia | Declaraciones completas, asistencias, respuestas ciudadanas | 20% |

El Termómetro muestra un gráfico radar con las cuatro dimensiones, permitiendo comparar autoridades del mismo nivel (alcalde vs alcalde, diputado vs diputado).

## **3.3. Termostato Ciudadano**

Guía práctica para contactar efectivamente a cada autoridad:

| Información | Descripción | Fuente |
| :---- | :---- | :---- |
| Mejores canales | Email directo, redes sociales, oficina presencial | Análisis histórico respuestas |
| Horarios de atención | Días y horas de atención ciudadana | Portales oficiales |
| Temas que prioriza | Áreas de interés según intervenciones | Análisis IA |
| Historial respuestas | Tasa de respuesta a ciudadanos | Reportes Alza la Voz |
| Tips para ser escuchado | Recomendaciones basadas en éxitos previos | Análisis casos exitosos |

**Ejemplo de Recomendación**

'Para contactar a \[Diputado X\], el canal más efectivo es email directo (tasa respuesta 67%). Prioriza temas de medio ambiente. Incluye datos específicos de tu territorio para mayor impacto. Evita contactar los lunes (menor disponibilidad).'

## **3.4. Observatorio Judicial (F-37)**

Estimación: 72 horas

**Datos Clave**

| Tabla | Campos Principales | Fuente |
| :---- | :---- | :---- |
| judicial\_indicators | tiempos\_tramitacion, backlog, tasa\_cumplimiento\_plazos | Poder Judicial |
| judicial\_cases | causas públicas agregadas (sin datos sensibles) | Poder Judicial |
| thematic\_tags | derechos\_humanos, medio\_ambiente, corrupcion, laboral | Clasificación IA |

**Vistas del Observatorio Judicial**

**Vista 1: Indicadores del Sistema Judicial**

* Mapas de calor: tiempos de espera por tipo de causa y región  
* Indicadores de sobrecarga: tribunales con mayor backlog  
* Inequidades territoriales: regiones con mayor atraso

**Vista 2: Casos Emblemáticos por Tema**

* Fallos clave con impacto en derechos sociales  
* Casos ambientales relevantes  
* Contexto educativo para Academia Cívica

**Vista 3: Dashboard de Tribunales por Región**

* Métricas de eficiencia por tribunal  
* Comparativas regionales  
* Tendencias temporales (mejora/deterioro)

**Integraciones del Observatorio Judicial**

* Alza la Voz: Cuando caso escala a Contraloría/tribunales, alimenta Observatorio  
* Academia Cívica: Cursos 'Qué pasa cuando llevas un caso a tribunales' con datos reales  
* Círculos de Acción: Briefing de poder incluye contexto judicial

## **3.5. Radar de Lobby**

Visualización de reuniones entre autoridades y lobbistas:

**Elementos Visuales**

* Burbujas proporcionales a frecuencia de reuniones  
* Tamaño de burbuja \= cantidad de reuniones  
* Color \= rubro (pesqueras, inmobiliarias, mineras, tecnológicas, etc.)  
* Posición \= cercanía temporal a votación clave

**Alertas de Posible Conflicto de Interés**

Mensaje automático: '⚠️ Podría existir posible conflicto de interés: esta autoridad se ha reunido frecuentemente con actores de este rubro mientras decide sobre este tema. Ver detalle.'

Nota: CIVICUM no acusa ni juzga. Presenta datos verificables para que el ciudadano forme su propia opinión.

**Fuentes y Trazabilidad**

* Cada burbuja tiene botón 'Ver detalle'  
* Lista de reuniones: fecha, entidad, motivo declarado  
* Enlace directo a ficha original en infolobby.cl  
* Texto: 'Fuente: Registro de Lobby oficial'  
* Texto: 'Última actualización: DD/MM/AAAA'

**Modelo de Datos**

| Tabla | Campos | Descripción |
| :---- | :---- | :---- |
| authority\_lobby\_events | authority\_id, entity\_id, date, topic, source\_url | Scraping/ETL del registro de lobby oficial |
| authority\_lobby\_clusters | entity\_id, cluster\_name, industry | Rubros agrupados (clasificador IA o reglas) |

## **3.6. Integraciones con 5+ Fuentes Oficiales**

| Fuente | Datos Obtenidos | Frecuencia |
| :---- | :---- | :---- |
| Congreso Abierto | Votaciones, proyectos de ley, asistencias | Semanal |
| InfoLobby | Reuniones con lobbistas, entidades | Mensual |
| InfoProbidad | Declaraciones patrimoniales | Anual |
| BCN Historia Política | Biografías (4,022+ perfiles), historial cargos | Única |
| SINIM | Indicadores gestión municipal (346 comunas) | Mensual |
| Transparencia Municipal | Presupuestos, contratos, personal | Mensual |
| Cuentas Claras (interno) | Presupuesto participativo | Continua |

**Integraciones Cruzadas Internas**

* Alza la Voz: Contexto de poder al reportar (quién tiene jurisdicción, historial respuestas)  
* Cuentas Claras: Costo de promesas, presupuesto gestionado  
* Academia Cívica: Tooltips educativos sobre funciones de cada autoridad  
* Círculos de Acción: Briefing de poder (F-38) con autoridades clave, promesas vigentes, desempeño

# **4\. LABORATORIO DE IDEAS (F-39)**

**Estimación total: 104 horas**

Decisión asociada: F-39 (Laboratorio de Ideas)

## **4.1. Wizard Socrático (LawBuilder)**

Entrevista guiada paso a paso para construir propuestas ciudadanas:

**Paso 1: Identificación del Problema**

Pregunta: '¿Qué problema quieres resolver?'

* Ejemplos contextuales según territorio del usuario  
* Validación de alcance (local vs nacional)  
* Verificación de que no existe solución en curso

**Paso 2: Análisis de Impacto**

Pregunta: '¿A quiénes afecta este problema?'

* Cuantificación automática: 'Esto afecta a \~45,000 vecinos de tu comuna'  
* Datos demográficos del INE integrados  
* Identificación de grupos vulnerables

**Paso 3: Propuesta de Solución**

Pregunta: '¿Qué propones para resolverlo?'

* Opciones: Nueva ley, modificación de ley existente, programa público, ordenanza municipal  
* Templates legales pre-construidos  
* Sugerencias basadas en soluciones similares en otras comunas/países

**Paso 4: Identificación de Responsable**

Pregunta: '¿Quién debería implementar esta solución?'

* Opciones: Alcalde, Concejo Municipal, Congreso, Ministerio específico  
* Conexión automática con Observatorio del Poder  
* Muestra competencias legales de cada nivel

**Paso 5: Análisis de Financiamiento**

Pregunta: '¿Cuánto podría costar implementar esto?'

* Integración con Carrito de Compras Público  
* Cálculo automático de viabilidad presupuestaria  
* Sugerencias de fuentes de financiamiento

**Output del Wizard**

Propuesta estructurada lista para:

* Votación en Voto Ciudadano (La Balanza Cívica)  
* Presentación en Círculos de Acción  
* Envío formal a autoridad competente  
* Debate público abierto

## **4.2. Carrito de Compras Público**

Herramienta para entender el costo real de las políticas públicas:

**Catálogo de Costos Unitarios**

Fuentes: ChileCompra, DIPRES, presupuestos municipales

| Ítem | Costo Unitario | Fuente |
| :---- | :---- | :---- |
| 1 CESFAM nuevo | $800.000.000 CLP | MINSAL, Construcción 2024 |
| 1 km pavimentación urbana | $120.000.000 CLP | MOP, Contratos 2024 |
| 1 plaza equipada (2.000 m²) | $45.000.000 CLP | MINVU, Programa Barrios |
| 1 profesor adicional/año | $18.000.000 CLP | MINEDUC, Escala docente |
| 1 patrulla policial/año | $35.000.000 CLP | Carabineros, Presupuesto |
| 1 cámara de seguridad instalada | $2.500.000 CLP | Interior, Programa Comuna |
| 1 sala cuna (30 cupos) | $280.000.000 CLP | JUNJI, Construcción |
| 1 km ciclovía | $85.000.000 CLP | MTT, Proyectos urbanos |
| 1 consultorio SAR | $450.000.000 CLP | MINSAL, Atención primaria |
| 1 bus eléctrico | $380.000.000 CLP | MTT, Transantiago |

**Funcionalidad del Carrito**

* Drag & drop de ítems al carrito  
* Cálculo automático: 'Costo estimado: $800MM \= 5% presupuesto municipal'  
* Comparativas: 'Equivale a 44 plazas' o '2 años de presupuesto cultura'  
* Fuentes verificables para cada ítem

**Integración con Cuentas Claras**

* Muestra presupuesto disponible por área  
* Indica si hay fondos asignados para el tipo de proyecto  
* Sugiere reasignaciones posibles dentro del marco legal

## **4.3. Semáforo de Viabilidad**

Evaluación automática de factibilidad de propuestas:

| Estado | Significado | Criterio |
| :---- | :---- | :---- |
| 🟢 Financiable | Fondos disponibles en presupuesto actual | Costo \< fondos sin asignar del área |
| 🟡 Requiere reasignación | Posible moviendo partidas existentes | Costo \< total área, \> sin asignar |
| 🔴 Requiere reforma | Necesita nueva ley presupuestaria | Costo \> total área disponible |

**Criterios de Evaluación**

* Costo total vs presupuesto disponible en el área  
* Competencia legal: ¿Quién puede decidir esto?  
* Precedentes: ¿Se ha implementado algo similar antes?  
* Impacto social: Cantidad de beneficiarios directos  
* Urgencia: ¿Es un problema crítico o una mejora opcional?

**Ejemplo de Feedback Automático**

'Tu propuesta requiere $800M. El presupuesto de Salud tiene $200M disponibles.

Opciones:

1\. Reducir alcance (1 CESFAM en vez de 2\)

2\. Financiamiento mixto (50% municipal, 50% FNDR)

3\. Implementación gradual (2 años)'

## **4.4. Argumentos Blindados**

Herramienta para fortalecer propuestas con datos verificables:

**Municiones de Datos**

Botón 'Insertar datos del Observatorio' que permite agregar:

* Promesas relacionadas de la autoridad competente  
* Presupuesto ejecutado en el área relevante  
* Casos similares resueltos en otras comunas  
* Estadísticas demográficas del territorio  
* Precedentes legales (leyes similares aprobadas)

**Ejemplo de Sugerencia Automática**

Usuario escribe: 'Necesitamos más seguridad en el barrio'

Sistema sugiere:

'💡 Fortalece tu argumento:

* El alcalde prometió 'aumentar patrullaje 30%' (Promesa \#12, En Progreso 15%)  
* Presupuesto Seguridad ejecutado: 42% (bajo promedio 68%)  
* 127 reportes Alza la Voz en tu cuadrante (↑35% vs año anterior)  
* Comuna vecina implementó programa similar: \-22% delitos'

## **4.5. Conexión con Voto Ciudadano**

Propuesta finalizada en el Laboratorio se conecta automáticamente con:

| Destino | Acción | Resultado |
| :---- | :---- | :---- |
| La Balanza Cívica | Votación ciudadana | Medir apoyo popular a la propuesta |
| Debate Público | Foro de discusión | Refinar propuesta con feedback |
| Firma Petición | Recolección de firmas | Demostrar respaldo ciudadano |
| Envío Autoridad | Carta formal | Canalizar propuesta a quien corresponde |
| Círculos de Acción | Misión colaborativa | Organizar acción colectiva |

**Modelo de Datos**

**CREATE TABLE public\_costs\_catalog (**

  id UUID PRIMARY KEY,

  category TEXT,  \-- 'salud', 'educacion', 'seguridad', etc.

  item\_name TEXT,  \-- 'CESFAM nuevo', '1 km pavimentación'

  unit\_cost\_clp BIGINT,  \-- Costo en pesos chilenos

  source\_url TEXT,  \-- URL de la fuente oficial

  last\_updated TIMESTAMP  \-- Fecha de última actualización

);

**Backlog de Desarrollo**

| ID | Tarea | Horas |
| :---- | :---- | :---- |
| F39.01 | Wizard Socrático (LawBuilder) | 32h |
| F39.02 | Carrito de Compras Público | 24h |
| F39.03 | Catálogo costos ChileCompra (scraping) | 20h |
| F39.04 | Semáforo de viabilidad | 12h |
| F39.05 | Argumentos blindados | 12h |
| F39.06 | Feature flags y configuración | 4h |
|  | TOTAL | 104h |

# **5\. CÍRCULOS DE ACCIÓN**

**Estimación total: 120-150 horas**

Decisiones asociadas: F-22 (Misiones Colaborativas), F-38 (Briefing de Poder)

Espacios de trabajo persistentes para grupos organizados con objetivo común: Juntas de Vecinos, Centros de Alumnos, organizaciones territoriales y temáticas.

## **5.1. Tablero de Misiones (Kanban)**

Organización visual del trabajo del Círculo:

| Columna | Contenido | Acciones |
| :---- | :---- | :---- |
| Por discutir | Ideas, propuestas iniciales sin votar | Comentar, editar, mover a votación |
| Por votar | Propuestas que requieren decisión colectiva | Votar, debatir, agregar argumentos |
| En acción | Misiones aprobadas, en ejecución | Asignar tareas, reportar avance, completar |

**Tipos de Misiones**

* Carta a autoridad: Comunicación formal a funcionario público  
* Petición de firmas: Recolección de apoyo ciudadano  
* Proyecto de ley ciudadana: Propuesta legislativa estructurada  
* Acción territorial: Limpieza, mejora, intervención local  
* Fiscalización colectiva: Seguimiento de promesas o presupuesto  
* Campaña de difusión: Comunicación y sensibilización

## **5.2. Votación Vinculante Interna**

Sistema de toma de decisiones democráticas dentro del Círculo:

**Mecánica de Votación**

* Propuesta ingresa a columna 'Por votar'  
* Período de debate (plazo configurable: 24h, 48h, 1 semana)  
* Votación con quórum definido (mayoría simple, 2/3, consenso)  
* Resultado vinculante para el Círculo  
* Registro inmutable de decisiones

**Tipos de Votación**

| Tipo | Uso | Quórum Default |
| :---- | :---- | :---- |
| Aprobar/Rechazar | Decisiones binarias | Mayoría simple (50%+1) |
| Priorizar opciones | Ranking de alternativas | Mayoría simple |
| Asignar recursos/tareas | Distribución de trabajo | Mayoría simple |
| Decisiones estratégicas | Paro, movilización, disolución | 2/3 de miembros |

## **5.3. Actas Automáticas con IA (Modo Secretario Asistente)**

Generación automatizada de actas de reuniones:

**Funcionalidad Durante Reunión**

* Grabación de audio (con consentimiento explícito de participantes)  
* Transcripción automática en tiempo real  
* Identificación de hablantes  
* Extracción de acuerdos y compromisos  
* Generación de acta estructurada

**Formato de Acta Generada**

┌─────────────────────────────────────────────────────────────┐

│  ACTA REUNIÓN CÍRCULO \[Nombre del Círculo\]                 │

│  Fecha: DD/MM/AAAA  │  Hora: HH:MM \- HH:MM                 │

├─────────────────────────────────────────────────────────────┤

│  ASISTENTES: \[Lista de nombres\]                            │

│  AUSENTES: \[Lista de nombres\]                              │

├─────────────────────────────────────────────────────────────┤

│  TEMAS TRATADOS:                                           │

│  1\. \[Tema 1\]                                               │

│     \- Discusión: \[Resumen de intervenciones\]               │

│     \- Acuerdo: \[Decisión tomada\]                           │

│     \- Responsable: \[Nombre\]                                │

│     \- Plazo: \[Fecha\]                                       │

├─────────────────────────────────────────────────────────────┤

│  TAREAS ASIGNADAS:                                         │

│  • \[Tarea 1\] → \[Responsable\] → \[Plazo\]                     │

│  • \[Tarea 2\] → \[Responsable\] → \[Plazo\]                     │

├─────────────────────────────────────────────────────────────┤

│  PRÓXIMA REUNIÓN: \[Fecha y hora\]                           │

└─────────────────────────────────────────────────────────────┘

## **5.4. Gestión de Tareas Colaborativas**

Sistema completo de seguimiento de trabajo:

| Funcionalidad | Descripción |
| :---- | :---- |
| Asignación con responsables | Cada tarea tiene un responsable principal y colaboradores |
| Plazos y recordatorios | Fechas límite con notificaciones automáticas |
| Checklist de subtareas | Desglose de pasos para tareas complejas |
| Adjuntar archivos/evidencias | Documentos, fotos, videos de avance |
| Comentarios y actualizaciones | Hilo de conversación por tarea |
| Notificaciones automáticas | Alertas de vencimiento, asignación, completitud |

## **5.5. Briefing de Poder Contextual (F-38)**

Al crear una misión dirigida a una autoridad, el sistema muestra automáticamente:

**Autoridades Clave**

* Quién tiene competencia legal sobre el tema  
* Datos de contacto directo  
* Historial de respuestas a solicitudes similares

**Promesas Vigentes**

* Compromisos de campaña relacionados con el tema  
* Estado de cumplimiento actual  
* Evidencias disponibles

**Desempeño Institucional**

* Presupuesto asignado al área  
* Indicadores de gestión  
* Reportes Alza la Voz resueltos vs pendientes

**Estrategia Sugerida**

Ejemplo: '💡 Esta autoridad respondió positivamente a 3 peticiones similares en los últimos 6 meses. Mejor canal: email directo. Incluye datos de presupuesto para mayor impacto. Evita contactar en período de campaña.'

## **5.6. Misiones Colaborativas (F-22)**

Sistema para que múltiples Círculos trabajen juntos:

**Tipos de Misiones Colaborativas**

| Tipo | Ejemplo | Coordinación |
| :---- | :---- | :---- |
| Territoriales | Mejora de barrio, fiscalización local | Círculos de comunas vecinas |
| Temáticas | Medio ambiente, educación, salud | Círculos con interés común |
| Legislativas | Co-creación de propuestas de ley | Círculos de todo el país |
| Fiscalización | Seguimiento de promesas, presupuesto | Círculos por autoridad |

**Mecánica de Colaboración**

* Círculo crea misión y la marca como 'pública'  
* Otros Círculos pueden unirse a la misión  
* Recursos se comparten entre Círculos participantes  
* Coordinación descentralizada (sin jerarquía)  
* Victoria compartida entre todos los participantes

**Suscripciones a Temas**

* Alertas de nuevas misiones en temas de interés  
* Notificaciones de votaciones relacionadas  
* Actualizaciones de autoridades seguidas  
* Cambios en promesas relevantes

**Invitar Autoridades con Tracking**

* Círculo invita a autoridad a sesión o reunión  
* Sistema registra: invitación enviada, vista, aceptada/rechazada  
* Si acepta: agenda automática con recordatorios  
* Si rechaza: registro público (transparencia)  
* Post-sesión: acta compartida, compromisos con tracking

## **5.7. Aprendizajes del Estallido Social 2019 Integrados**

Diseño basado en lecciones de movimientos ciudadanos chilenos:

| Aprendizaje | Implementación en CIVICUM |
| :---- | :---- |
| Horizontalidad | Sin roles jerárquicos fijos, vocerías rotativas |
| Transparencia de acuerdos | Actas públicas, decisiones registradas |
| Confianza y anti-infiltración | Verificación progresiva, historial visible |
| División en comisiones | Subgrupos dentro de Círculo para temas específicos |
| Cuidado y anti-burnout | Rotación automática de roles, badges de descanso |
| Articulación en red | Federación voluntaria de Círculos |
| Nuevos liderazgos y formación | Sistema mentor-mentee, Academia Cívica integrada |

# **6\. DASHBOARD INSTITUCIONAL (F-40)**

**Estimación total: 88 horas**

Decisión asociada: F-40 (Dashboard Institucional)

Panel de control para municipios, instituciones públicas y autoridades electas.

## **6.1. Panel de Control Institucional**

Métricas principales disponibles:

| Métrica | Descripción | Fuente |
| :---- | :---- | :---- |
| Reportes Alza la Voz | Total, pendientes, resueltos, tiempo promedio | Módulo Alza la Voz |
| Promesas de campaña | Cumplidas, en progreso, incumplidas | Promesómetro |
| Presupuesto | Asignado, ejecutado, por área | Cuentas Claras |
| Participación ciudadana | Usuarios activos, votaciones, propuestas | Voto Ciudadano |
| Satisfacción | Calificación promedio, tendencia | Encuestas post-resolución |

## **6.2. Espejo de Reputación**

Feedback accionable basado en datos ciudadanos reales:

**Ejemplos de Alertas**

* 'Tu aprobación bajó 2% esta semana por demoras en respuestas a reportes'  
* '5 reportes críticos que deberías resolver hoy para mantener tu ranking'  
* 'Tu comuna está en el 30% inferior en tiempo de respuesta a ciudadanos'  
* 'Ciudadanos valoran positivamente tu transparencia presupuestaria (+8%)'

**Comparativas Disponibles**

| Comparación | Descripción |
| :---- | :---- |
| Tu institución vs promedio nacional | Posición relativa en el país |
| Tu institución vs similar tamaño | Comparación con pares (comunas similares) |
| Evolución temporal | Tendencia mes, trimestre, año |
| Ranking por área | Posición en salud, seguridad, educación, etc. |

## **6.3. Gestión de Reportes Alza la Voz**

Vista institucional para resolver reportes ciudadanos:

**Funcionalidades del Inbox**

* Lista de reportes por resolver  
* Filtros: urgencia, categoría, territorio  
* Asignación a responsables internos  
* Tracking de estado (recibido, en proceso, resuelto)  
* Comunicación directa con reportante  
* Adjuntar evidencias de resolución (fotos, documentos)

**Métricas de Gestión**

| Métrica | Descripción | Meta Sugerida |
| :---- | :---- | :---- |
| Tiempo promedio respuesta | Días desde reporte hasta resolución | \< 7 días |
| Tasa de resolución | % de reportes cerrados exitosamente | \> 90% |
| Satisfacción post-resolución | Calificación del ciudadano | \> 4.0/5.0 |
| Reportes recurrentes | Problemas sistémicos que reaparecen | \< 5% |

## **6.4. Métricas de Eficiencia y Tiempos de Respuesta**

Indicadores de desempeño institucional:

| Indicador | Descripción |
| :---- | :---- |
| SLA por tipo de reporte | Tiempo máximo comprometido según categoría |
| Backlog | Reportes acumulados sin resolver |
| Tendencias | ↑↓ reportes por categoría (alertas tempranas) |
| Horas pico de demanda | Momentos de mayor flujo de reportes |
| Proyección de recursos | Personal necesario según volumen proyectado |

## **6.5. Feedback Accionable con IA**

Sistema de recomendaciones inteligentes:

**Ejemplo de Recomendaciones Semanales**

'💡 Recomendaciones esta semana:

* 1\. Prioriza 12 reportes de alumbrado público (↑40% vs mes anterior)  
* 2\. Asigna más recursos a Salud (tiempo respuesta 2x promedio)  
* 3\. Comunica avances de Promesa \#7 (ciudadanos preguntan frecuentemente)  
* 4\. Replica estrategia de Seguridad (↑15% satisfacción) en otras áreas'

**Pre-llenado 'Usar este dato para...'**

Cada métrica tiene botones de acción rápida:

Ejemplo: '127 reportes de baches sin resolver'

* \[Crear reporte interno\]  
* \[Preguntar al Asistente estrategia\]  
* \[Proponer votación presupuesto\]  
* \[Compartir en Mesa de Trabajo\]  
* \[Generar informe PDF\]  
* \[Programar alerta de seguimiento\]

## **6.6. Insignias de Auditoría**

Sistema de reconocimiento para instituciones:

| Insignia | Criterio | Beneficio |
| :---- | :---- | :---- |
| 🏅 Verificador Cívico | Responde 95%+ reportes en \<7 días | Destacado en búsquedas |
| 🏅 Auditor Municipal | Presupuesto 100% transparente | Badge visible en perfil |
| 🏅 Fiscalizador Congreso | Cumple 80%+ promesas de campaña | Ranking preferente |
| 🏅 Transparencia Oro | Publica datos proactivamente | Confianza ciudadana \+ |
| 🏅 Participación Activa | Integra propuestas ciudadanas | Legitimidad democrática |

Las insignias son visibles en el perfil público de la institución, funcionando como incentivo reputacional para mejorar la gestión.

## **6.7. Mapa de Poder Personal**

Para autoridades individuales \- visualización de su ecosistema de influencia:

**Información Mostrada**

'Tu ecosistema de influencia':

* 3 alcaldes con quienes colaboras frecuentemente  
* 1 diputado de tu distrito  
* 2 ministerios con proyectos conjuntos  
* 15 organizaciones de sociedad civil activas en tu territorio  
* 247 ciudadanos siguiendo tu gestión

**Visualización de Grafo**

* Nodos: actores (autoridades, instituciones, organizaciones)  
* Enlaces: tipo de relación (colaboración, supervisión, financiamiento)  
* Grosor: intensidad de la relación  
* Color: área temática (salud=verde, seguridad=azul, etc.)

**Backlog de Desarrollo**

| ID | Tarea | Horas |
| :---- | :---- | :---- |
| F40.01 | Pre-llenado 'Usar este dato para...' | 12h |
| F40.02 | Espejo de Reputación autoridades | 20h |
| F40.03 | Insignias de Auditoría (3 badges) | 16h |
| F40.04 | Modo Secretario Asistente (actas IA) | 24h |
| F40.05 | Mapa de Poder Personal | 16h |
|  | TOTAL | 88h |

# **7\. INTEGRACIONES CRUZADAS ENTRE MÓDULOS**

La arquitectura de CIVICUM está diseñada para que los módulos se potencien mutuamente:

| Origen | Destino | Integración |
| :---- | :---- | :---- |
| Promesómetro | Cuentas Claras | Costo estimado de cada promesa, % presupuesto asignado |
| Promesómetro | Observatorio | Coherencia voto vs promesas de cada autoridad |
| Observatorio | Alza la Voz | Contexto de poder al reportar (quién tiene jurisdicción) |
| Observatorio | Círculos | Briefing de poder para misiones dirigidas a autoridades |
| Laboratorio | Voto Ciudadano | Propuestas generadas van a votación ciudadana |
| Laboratorio | Cuentas Claras | Cálculo de viabilidad presupuestaria |
| Círculos | Observatorio | Invitación a autoridades con tracking de respuesta |
| Dashboard | Alza la Voz | Gestión institucional de reportes ciudadanos |
| Dashboard | Promesómetro | Métricas de cumplimiento de promesas |
| Academia Cívica | Todos | Tooltips educativos contextuales en cada módulo |

**Flujo de Usuario Integrado**

Ejemplo de recorrido que aprovecha múltiples módulos:

* 1\. Usuario ve promesa incumplida en Promesómetro  
* 2\. Revisa perfil de autoridad en Observatorio del Poder  
* 3\. Crea propuesta alternativa en Laboratorio de Ideas  
* 4\. Propuesta se vota en Voto Ciudadano (La Balanza Cívica)  
* 5\. Si gana apoyo, se convierte en Misión de Círculo de Acción  
* 6\. Círculo envía carta formal a autoridad con briefing de poder  
* 7\. Autoridad recibe notificación en Dashboard Institucional  
* 8\. Respuesta (o falta de ella) queda registrada públicamente

# **8\. ARQUITECTURA TÉCNICA COMPARTIDA**

**Stack Tecnológico**

| Componente | Tecnología | Uso |
| :---- | :---- | :---- |
| Base de datos | PostgreSQL (Neon.tech) | Esquemas relacionados entre módulos |
| Backend/Auth | Supabase | Autenticación, storage, real-time |
| CDN/Edge | Cloudflare | Distribución, edge functions, caché |
| IA/Procesamiento | Claude API (Anthropic) | Actas, extracción promesas, recomendaciones |
| Frontend | React/Next.js | Interfaz de usuario |
| Hosting | Vercel | Despliegue continuo |
| Feature Flags | Custom \+ Supabase | Activación gradual de funcionalidades |

**Principios de Arquitectura**

* Costo $0 en infraestructura: Uso de tiers gratuitos de todos los servicios  
* Offline-first: Funcionalidad básica sin conexión (F-07)  
* Tier-based inclusion: Optimizado para dispositivos básicos (F-05)  
* Feature flags: Activación gradual sin redespliegue  
* Esquemas relacionados: Datos fluyen entre módulos sin duplicación

**Sistema de IA de 3 Capas (F-12)**

| Capa | Tecnología | Uso |
| :---- | :---- | :---- |
| Capa 1: Local | WebLLM (navegador) | Respuestas instantáneas, sin costo |
| Capa 2: Caché | Knowledge base pre-generado | Respuestas frecuentes, bajo costo |
| Capa 3: API | Claude API | Consultas complejas, costo controlado |

Costo estimado: $4.800/mes para 10.000 usuarios activos

# **9\. RESUMEN DE ESTIMACIONES**

**Horas de Desarrollo por Módulo**

| Módulo | Horas P0 | Horas P1 | Total |
| :---- | :---- | :---- | :---- |
| Promesómetro Integral | 80h | 138h | 218h |
| Observatorio del Poder | 40h | 32h | 72h |
| Laboratorio de Ideas | 60h | 44h | 104h |
| Círculos de Acción | 70h | 50-80h | 120-150h |
| Dashboard Institucional | 50h | 38h | 88h |
| TOTAL MÓDULOS EXPANDIDOS | 300h | 302-332h | 602-632h |

**Contexto en el Proyecto Total**

Los módulos expandidos representan la segunda fase de desarrollo de CIVICUM, después del MVP base (Bloques 1-6). Se implementarán progresivamente según demanda y recursos disponibles.

**Decisiones Formales Asociadas**

| Decisión | Título | Módulo |
| :---- | :---- | :---- |
| F-22 | Misiones Colaborativas | Círculos de Acción |
| F-23 | Promesómetro MVP | Promesómetro Integral |
| F-24 | Expansión Territorial | Promesómetro Integral |
| F-33 | Sistema de Fuentes | Promesómetro Integral |
| F-37 | Observatorio Judicial | Observatorio del Poder |
| F-38 | Briefing de Poder | Círculos \+ Observatorio |
| F-39 | Laboratorio de Ideas | Laboratorio de Ideas |
| F-40 | Dashboard Institucional | Dashboard Institucional |

─────────────────────────────────────

**FIN DEL ANEXO TÉCNICO**  
*CIVICUM \- Sistema Nervioso Cívico de Chile*  
*Documento de Protección Intelectual \- Registro INAPI*  
Enero 2026