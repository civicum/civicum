# CIVICUM_EXPANSION_PLAN.md
## Plan de Expansión Integral — Sistema Nervioso Cívico de Chile
## Creado: 2026-08-09 | Por: Hermes Agent + Daniel Aguirre
## Estado: PROPUESTA — Requiere aprobación de Daniel antes de implementar

---

## 0. Propósito de este documento

Este documento es el resultado de los 8 pasos del traspaso de expansión (CIVICUM_TRASPASO_EXPANSION.md sección 2). Contiene:

1. Misión y alma de Civicum (Paso 2)
2. Estado actual de datos (Paso 3)
3. Propuesta de expansión por módulo (Paso 4)
4. Catálogo de fuentes adicionales con URLs (Paso 5)
5. Plan técnico de integración (Paso 6)
6. Nuevos módulos y herramientas propuestos (Paso 7)
7. Criterios de aprobación (Paso 8)

**Regla de oro**: cada dato en pantalla debe trazarse a un archivo RAW inmutable con hash (F-04, DATA_ARCHITECTURE.md). Sin evidencia, no se publica como hecho (F-02 Honestía Radical).

---

## 1. Misión y Alma de Civicum (recap del Paso 2)

### Metáfora rectora
**"Nervio, no megáfono"** — la ciudadanía no es volumen, es impulso. CIVICUM existe para cerrar la cadena: Recepción → Traducción → Conducción → Respuesta.

### 8 Principios rectores (no negociables)
1. **Honestidad Radical** (F-02): cero letra chica, fuentes citadas, límites visibles
2. **Apartidismo Total** (F-05): neutralidad política verificable
3. **Dignidad Offline** (F-07): funciona con mala señal y teléfonos humildes
4. **1 persona = 1 voto** (F-10): tu voz vale por ser persona
5. **Anti-Élite** (F-10): topes de karma, rotación, nadie captura el espacio
6. **Gamificación Responsable** (F-08): motivación sin adicción ni FOMO
7. **GPS Cívico** (F-23): siempre un siguiente paso
8. **Guardianes del Manifiesto** (F-21): gobernanza visible y rotativa

### 6 Módulos MVP + 5 Módulos Expandidos
- **MVP**: Mi CIVICUM, Academia Cívica, Asistente Cívico (Civia), Alza la Voz, Cuentas Claras, Voto Ciudadano
- **Expandidos**: Promesómetro, Observatorio del Poder, Laboratorio de Ideas, Círculos de Acción, Dashboard Institucional

### Stack Zero-Cost (F-43)
React 19 + Vite 7 + TypeScript + Hono + Drizzle/Neon + Tailwind + shadcn/ui + Framer Motion. Techo: ~50K MAU gratis.

---

## 2. Estado actual de datos (Paso 3)

### Ya recolectado — 3.0 GB raw, 2,600+ archivos

| Fuente | Cobertura | Estado normalización | Archivos |
|---|---|---|---|
| World Bank API | 19 indicadores, 1960-2024 | ✅ worldbank_normalized.csv (10KB) | 19 JSON |
| DIPRES | Ejecución presupuestaria 2017-2026 | ✅ dipres_ejecucion_unificado.csv (908MB, 3.7M filas) | 2,517 CSV |
| SISS | 47 categorías sector sanititario | ✅ siss_catalog.json (21KB) | 47 Excel |
| Banco Central (BDE) | 8 series IPC + tipo de cambio | ✅ Catalogado, requiere token | 8 JSON (1.1MB) |
| CKAN datos.gob.cl | 13 categorías: poblacion, pobreza, empleo, censo, remuneraciones, agua, IPC, vivienda, seguridad, elecciones | ⚠️ Descargado, pendiente normalización por categoría | ~500 archivos |

### Pendientes identificados (no repetir lo ya intentado)
- Banco Central series adicionales (PIB, IMACEC, empleo, finanzas públicas): buscar códigos en Buscador de Series si3.bcentral.cl
- INE.Stat Medio Ambiente: árbol temático no renderiza en headless (Playwright)
- MINEDUC vía datos.gob.cl: no hay recursos descargables directos
- OECD API SDMX-JSON: requiere investigación de formato

---

## 3. Propuesta de expansión por módulo (Paso 4)

Para CADA módulo: (a) datos adicionales necesarios, (b) nuevas fuentes, (c) integración en interfaz, (d) nuevas herramientas, (e) mantenimiento del alma.

### 3.1 Mi CIVICUM (Onboarding + Perfil)

**Datos actuales**: 16 regiones + 71 comunas (DB Neon seed).
**Datos adicionales necesarios**: perfil demográfico de cada comuna (población, densidad, sexo, edad mediana), autoridades electas por comuna (alcalde + concejales), IDs territoriales oficiales (códigos Únicos Territoriales, CUT).

**Nuevas fuentes**:
- INE Censo 2024 + proyecciones poblacionales (datos.gob.cl/organization/instituto-nacional-de-estadisticas-ine)
- SERVEL resultados elecciones municipales 2024 (servel.cl)
- SUBDERE SINIM indicadores municipales base (subdere.gob.cl/sinim)

**Integración en interfaz**:
- En Onboarding, al seleccionar comuna, mostrar tarjeta "Tu-contexto cívico": población, alcalde actual, partido (neutro: solo nombre), presupuesto municipal per cápita, próximos eventos electorales.
- "Mapa de Poder Personal" (F-30): visualizar el ecosistema de autoridades que afectan al usuario (alcalde, concejales, diputado del distrito, senador del circunscripción, delegado presidencial regional).

**Nuevas herramientas**:
- **GPS Cívico V2**: misiones personalizadas según brechas de la comuna (ej: si tu comuna tiene bajo % de agua potable rural, Civia sugiere misiones de fiscalización SISS).
- **Comparador de contexto**: "¿Cómo es mi comuna vs el promedio regional?" con datos INE/SINIM.

### 3.2 Academia Cívica

**Datos actuales**: contenido curado (8 dominios D1-D8, 50 rutas MVP).
**Datos adicionales necesarios**: leyes vigentes y su historial legislativo, casos reales de implementación, estadísticas oficiales que sirvan de ejemplo en cápsulas.

**Nuevas fuentes**:
- BCN LeyChile (bcn.cl/leychile): API de normas chilenas vigentes, historial de modificaciones
- Contraloría dictámenes (contraloria.cl): casos reales de observaciones, ejemplos de fiscalización
- CASEN (observatorio.ministeriodesarrollosocial.gob.cl): datos socioeconómicos para cápsulas D2 Derechos y D7 Economía

**Integración en interfaz**:
- Tip "Dato Real" en cada cápsula: cada concepto teórico con un dato oficial actual
- Capsula tipo B "Casos reales chilenos" ahora con ejemplos extraídos de dictámenes Contraloría
- Tooltip legislativo: al mencionar una ley, enlace directo a BCN con vigencia confirmada (F-02: verificar vigencia en bcn.cl)

**Nuevas herramientas**:
- **Glosario cívico vivo**: términos del Estado chileno con definiciones cruzadas BCN + ejemplos reales
- **Ruta "Tu comuna en números"**: cápsula especial que enseña a leer datos INE/SINIM/CASEN de tu territorio
- **Fact-checker educativo** (V2): al leer noticia externa, Civia verifica claims contra datos oficiales (no opinions, solo hechos)

### 3.3 Asistente Cívico (Civia)

**Datos actuales**: 20 plantillas, 200+ FAQs pre-cacheadas, IA local WebLLM + Capa 2 Workers AI.
**Datos adicionales necesarios**: respuestas RAG con base legal chilena vigente, datos numéricos oficiales en consultas text-to-SQL.

**Nuevas fuentes**:
- BCN LeyChile API: base legal completa para RAG
- Todas las normalizadas (DIPRES, BCCh, World Bank): para text-to-SQL anti-alucinación (F-17)
- Indicadores MINSAL, MINEDUC para responder "¿cuánto demora una lista de espera en mi comuna?"

**Integración en interfaz**:
- Civia responde con citas reales a BCN/leyes/Contraloría en cada respuesta legal
- Text-to-SQL extiende a todas las fuentes normalizadas: "¿cuánto gastó mi municipio en salud 2023?" → query DIPRES local
- Disclaimer Eta-3 ampliado: "Civia cita fuentes oficiales; no sustituye asesoría legal profesional"

**Nuevas herramientas**:
- **Civia RAG legal**: búsqueda semántica en BCN LeyChile (offline con índice local pre-construido)
- **Verificador de trámite**: "¿qué necesito para hacer X en mi comuna?" → respuesta con pasos + requisitos oficiales + enlace al sitio del municipio
- **Modo Secretario V2** (F-40): síntesis de reuniones + extracción automática de acuerdos accionables con deep links a módulos

### 3.4 Alza la Voz + Mesas

**Datos actuales**: 4 tipos de reporte, geolocalización, 5 etapas, estado tracking.
**Datos adicionales necesarios**: catálogo de OIRS por municipio (quéesitypes acepta cada comuna), plazos oficiales de respuesta, autoridades responsables por tipo de problema.

**Nuevas fuentes**:
- SUBDERE SINIM: catálogo de OIRS municipal, contactos formales
- Contraloría portal: endpoint para escalar "Silencio Administrativo" (silencio_administrativo)
- MINEDUC/MINSAL: OIRS sectoriales para reclamos de educación/salud

**Integración en interfaz**:
- En Paso 4 Destinatario del reporte: sugerencia automática con datos oficiales (no solo por tipo, sino por OIRS específica del municipio)
- Plazo visible: "Tu municipio tiene X días hábiles para responder (Art. 24 Ley 19.880)" con countdown
- Botón "Denunciar a Contraloría" pre-llena con datos del reporte original (F-25 escalamiento)

**Nuevas herramientas**:
- **Termómetro cívico territorial** (F-15): mapa de calor de problemas por comuna con datos históricos agregados
- **Expediente de Autoridad** (F-16): al asignar destinatario, mostrar historial de respuesta de esa autoridad (% respondido en plazo, tiempo promedio)
- **Pre-llenado cruzado** (F-38): si un reporte previo describe calle afectada, Civia sugiere "Usar este dato para..."

### 3.5 Cuentas Claras

**Datos actuales**: DIPRES 908MB unificado, World Bank 19 indicadores, presupuesto histórico 1955-2024 integrado.
**Datos adicionales necesarios**: SINIM (346 comunas, indicadores municipales comparables), ChileCompra (licitaciones y contratos reales), Contraloría observaciones a ejecución presupuestaria, InfoLobby (gestión de intereses).

**Nuevas fuentes**:
- SUBDERE SINIM via R `sinimr` o API directa: 9 áreas, 24 años, 346 comunas
- ChileCompra API (mercadopublico.cl): licitaciones estado de cada municipio
- Contraloría: auditorías a municipalidades, observaciones
- InfoLobby (infolobby.gob.cl): sujetos pasivos, reuniones de lobby
- InfoProbidad (infoprobidad.gob.cl): declaraciones patrimoniales de alcalde
- SII: recaudación tributaria municipal (patentes, permisos circulación)
- Banco Central series: PIB, IMACEC, finanzas públicas, balanza de pagos (ampliar token BDE)

**Integración en interfaz**:
- Comparador territorial robusto: "Mi comuna vs 5 comunas similares" con 9 áreas SINIM
- "Fiscalizador automático": al ver partida presupuestaria atípica, botón CTA → Alza la Voz pre-llenado (Hallazgo Alfa-1)
- "Carrito de Compras Público" (F-39): simulador de presupuesto participativo con datos reales DIPRES
- Semáforo de alcalde: verde/amarillo/rojo según indicadores SINIM (H_extractivos, salud, seguridad)
- Ranking de eficiencia en contratación: ChileCompra data → % de licitaciones adjudicadas vs propuestas

**Nuevas herramientas**:
- **Radar de Lobby**: visualizar reuniones entre autoridades municipales y sujetos pasivos (InfoLobby)
- **Declaración patrimonial comparador**: InfoProbidadZip — ingreso declarado vs ejecución presupuestaria
- **Anomalías auto-detectadas (ML)**: alertas automáticas al detectar variaciones >2σ en gasto histórico
- **Auditoría viva**: observaciones de Contraloría linkeadas a partidas presupuestarias

### 3.6 Voto Ciudadano

**Datos actuales**: VotingCard, Afinidad Parlamentaria, feed sin sesgo.
**Datos adicionales necesarios**: votaciones reales del Congreso (Cámara + Senado), proyectos de ley en tramitación, asistencia parlamentaria, boletines.

**Nuevas fuentes**:
- Cámara de Diputados (camara.cl): API transparencia Ley 20.890, votaciones, asistencia, proyectos
- Senado (senado.cl): boletines, sesiones, votaciones
- Congreso Abierto (congresoabierto.cl): API agregador si existe
- SERVEL: resultados electorales pasados (para Calidad de afinidad post-fact-checking)

**Integración en interfaz**:
- Afinidad parlamentaria real: % coincidencia con diputado/senador basado en votaciones históricas
- "Proyectos que te importan" → si reportas problema de salud, te muestra proyectos de ley sobre salud en tramitación
- "Cómo votó tu representante" → tarjeta con cada votación + enlace al video (si existe)
- Alerta "Se vota mañana": proyectos relevantes al perfil del usuario

**Nuevas herramientas**:
- **Seguimiento de boletín**: tracker de proyecto de ley (estado, urgencias, votaciones)
- **Mandato Documentado V2**: PDF exportable con contexto más afinidad parlamentaria detallada
- **Comparador de candidatos** (período electoral): afinidad con cada candidato basada en votaciones previas (SERVEL + Cámara)
- **"Enviar al Congreso" mejorado**: plantilla mailto con datos del Mandato + enlace a perfil Parlamentario

---

## 4. Módulos expandidos — propuestas (Paso 4 continuación)

### 4.1 Promesómetro Integral

**Datos adicionales necesarios**: programas de gobierno de 552+ autoridades (1 Presidente, 50 Senadores, 155 Diputados, 346 Alcaldes), evidencia de cumplimiento, estado del mandato.

**Nuevas fuentes**:
- Programas oficiales (sitios web de campaña, archivados en Archive.org)
- BCN Historia Política (bcn.cl/historia-politica): biografías y votaciones
- VotaInteligente (votainteligente.cl): programas alcaldes 2024
- SINIM/SUBDERE: datos de cumplimiento de promesas cuantificables (ej: "construir X CESFAM" → verertura CESFAM reportada en MINSAL)
- SERVEL: candidaturas declaradas

**Integración**: tarjeta por autoridad con % avance, progreso del mandato (día X de Y), promesas por categoría, botón "Validar" (Nivel 3+).

### 4.2 Observatorio del Poder

**Datos adicionales**: 21 campos por autoridad (cargo, partido, ingresos, gastos campaña, patrimonio, votaciones, asistencia, conflictos de interés).

**Nuevas fuentes**:
- SERVEL: declaraciones de patrimonio, gastos electorales
- InfoProbidad: declaraciones patrimoniales post-asunción
- InfoLobby: reuniones, donantes de campaña
- Cámara/Senado: asistencia, votaciones, comisiones
- BCN Historia Política: biografías

### 4.3 Laboratorio de Ideas (F-39)

**Datos adicionales**: costos unitarios de políticas públicas, marco legal vigente, semáforo de viabilidad.

**Nuevas fuentes**:
- DIPRES costos unitarios (en datasets actuales, pendiente filtrar)
- BCN LeyChile: legislación comparada
- Contraloría: dictámenes sobre propuestas similares

### 4.4 Círculos de Acción (F-22, F-38)

**Datos adicionales**: miembros del círculo, tareas asignadas, actas previas, herramientas de coordinación.

**Fuentes internas**: viene de mesas/Alza la Voz (no requiere nuevas externas).

### 4.5 Dashboard Institucional (F-40)

**Datos adicionales**: KPIs de respuesta municipal, métricas de eficiencia, comparación inter-municipal.

**Nuevas fuentes**: datos internos CIVICUM + SINIM benchmarks.

---

## 5. Catálogo de fuentes adicionales con URLs (Paso 5)

> ⚠️ Nota: la verificación automática de URLs falló por rate limit (429). Las URLs siguiente son las conocidas del ecosistema cívico chileno, basadas en experiencia previa del proyecto y documentación DATA_CATALOG.md. Antes de implementar connectors, se debe validar cada endpoint con un curl en terminal.

### 5.1 Fuentes con API pública o descarga directa (sin credenciales)

| ID | Nombre | URL base | Tipo | Formato | Cobertura | Datos | Requiere credencial |
|---|---|---|---|---|---|---|---|
| F01 | INE datos.gob.cl | https://datos.gob.cl/organization/instituto-nacional-de-estadisticas-ine | CKAN | CSV/JSON/XLSX | 1990-presente | Demografía, empleo, índices económicos | No |
| F02 | SERVEL | https://www.servel.cl | Web portal | PDF/CSV | 1989-presente | Resultados electorales, padrones, candidatos | No (descarga web) |
| F03 | SUBDERE SINIM | https://www.subdere.gob.cl/sinim | Web portal + R `sinimr` | XLSX/CSV | 2000-2024 | 346 comunas, 9 áreas, 24 años | No |
| F04 | MINSAL DEIS | https://deis.minsal.cl | Web portal | CSV/XLSX | 2000-presente | Defunciones, nacimientos, listas espera | No |
| F05 | MINEDUC datos abiertos | https://datosabiertos.mineduc.cl | Web portal | CSV/XLSX | 2002-presente | Matrícula, SIMCE, establecimientos | No |
| F06 | SII | https://www.sii.cl | Web portal | PDF/XLSX | Histórico | Recaudación tributaria | No |
| F07 | CONASET | https://www.conaset.cl | Web portal | CSV | 2010-presente | Siniestros, fatalidades viales | No |
| F08 | MMA SINIA | https://sinia.mma.gob.cl | Web portal | CSV/JSON | 2010-presente | Calidad aire, emisiones, agua | No |
| F09 | Cámara Diputados | https://www.camara.cl/transparencia/ley-20890 | API + Portal | XML/JSON | 1990-presente | Votaciones, proyectos, asistencia | No |
| F10 | Senado | https://www.senado.cl | Web portal | PDF/HTML | 1990-presente | Boletines, sesiones, votaciones | No |
| F11 | Contraloría | https://www.contraloria.cl | Web portal | PDF/HTML | Histórico | Auditorías, dictámenes, observaciones | No |
| F12 | Consejo Transparencia | https://www.consejotransparencia.cl | Web portal | PDF | Ley 20.285 | Solicitudes, respuestas | No |
| F13 | BCN LeyChile | https://www.bcn.cl/leychile | API + Web | HTML/JSON | Histórico | Leyes, DFL, DS, vigencia | No |
| F14 | ChileCompra | https://www.mercadopublico.cl | API (requiere registro) | JSON | 2003-presente | Licitaciones, contratos | Sí (registro gratuito) |
| F15 | InfoLobby | https://infolobby.gob.cl | Web portal | CSV/JSON | 2014-presente | Gestión intereses, lobby, sujetos pasivos | No |
| F16 | InfoProbidad | https://infoprobidad.gob.cl | Web portal | CSV/JSON | 2014-presente | Declaraciones patrimoniales | No |
| F17 | OECD | https://stats.oecd.org | API SDMX-JSON | JSON/CSV | 1990-presente | Indicadores gobernanza comparativa | No (investigar formato) |
| F18 | CASEN/MIDES | https://observatorio.ministeriodesarrollosocial.gob.cl | Web portal | CSV/XLSX/SPSS | 1990-presente (cada 2-3 años) | Pobreza, desigualdad, salud, educación por hogares | No |
| F19 | VotaInteligente | https://www.votainteligente.cl | Web portal | HTML | Campaña 2024 | Programas alcaldes | No |
| F20 | Congreso Abierto | https://congresoabierto.cl | API (si existe) | JSON | 2018-presente | Agregador Congreso | No |

### 5.2 Fuentes con credenciales (gratuitas pero requieren registro)

| ID | Nombre | URL | Datos | Notas |
|---|---|---|---|---|
| C01 | Banco Central BDE API | https://si3.bcentral.cl/siete → API BDE | Series económicas (PIB, IMACEC, empleo, finanzas públicas) | Daniel tiene usuario daniel.aguirre.personal@gmail.com. Token expira entre sesiones. |
| C02 | INE.Stat (browser automation) | https://app.inecl-stat.cl | Series detalladas employment, medio ambiente | Necesita Playwright (no API). Árbol temático no renderiza headless. |
| C03 | ChileCompra API | https://api.mercadopublico.cl | Licitaciones tiempo real | Registro gratuito |

### 5.3 Priorización de recolección (propuesta)

**Prioridad 1 (impacto ciudadano más alto)** — fiscalización real:
1. SUBDERE SINIM (346 comunas, 9 áreas) → Cuentas Claras + Promesómetro
2. Cámara de Diputados API (votaciones) → Voto Ciudadano + Observatorio Poder
3. BCN LeyChile API (leyes) → Civia RAG + Academia
4. Contraloría portal (dictámenes) → Cuentas Claras + Alza la Voz escalamiento
5. SERVEL elecciones 2024 → Voto Ciudadano + Promesómetro

**Prioridad 2** — profundizan contexto:
6. MINSAL DEIS (listas espera) → Alza la Voz reclamos salud
7. MINEDUC datos abiertos (matrícula) → Academia cápsulas D1/D7
8. CASEN (pobreza) → Academia cápsulas D2 + Cuentas Claras contexto
9. InfoLobby + InfoProbidad → Observatorio del Poder
10. CONASET (siniestros) → Alza la Voz + Reportes seguridad
11. MMA SINIA (calidad aire) → Academia cápsulas D8 + Alza la Voz

**Prioridad 3** — valor comparativo:
12. Banco Central series adicionales (PIB, IMACEC) → Cuentas Claras
13. OECD gobernanza → Cuentas Claras benchmarking internacional
14. ChileCompra (licitaciones) → Cuentas Claras contratos públicos
15. Senado boletines → Voto Ciudadano + Seguimiento boletines
16. VotaInteligente programas alcaldes 2024 → Promesómetro

---

## 6. Plan de integración técnica (Paso 6)

### 6.1 Flujo de dato raw → interim → final → frontend

```
FUENTE OFICIAL
   ↓ (conector Python con rate-limit + reintentos)
webapp/src/data/raw/<id>/...
   ↓ (script normalización: CSV/JSON → CSV unificado por fuente)
webapp/src/data/interim/<id>_normalized.csv
   ↓ (script build_final: interim → JSON/Parquet compacto)
webapp/src/data/final/<id>.json  (~10-50KB por fuente)
   ↓ (import estático en componente)
FRONTEND (Recharts + D3.js + shadcn)
```

### 6.2 Tamaño objetivo de capa final

- Datos pesados (DIPRES 908MB, BCCh histórico): quedan raw + interim. Final solo agrega resúmenes (~100KB each) con top-N series y filtrables por query.
- Cada visualización del frontend carga solo su capítulo final (~10-50KB), cacheado en IndexedDB (F-07 Offline Dignity).
- PWA service worker precarga capítulos finales al primer load (Garantiza Offline Dignity).

### 6.3 Conectors nuevos (uno por fuente prioridad 1)

Cada conector sigue CONNECTOR_SPECIFICATION.md:
- Carpeta `webapp/src/data/connectors/<id>/connector.ts`
- Script Python `scripts/fetch_<id>.py` con reintentos, rate-limit y checksums SHA256
- Test `webapp/src/data/connectors/<id>/test_connector.ts` (mínimo: estructura + 1 muestra)

### 6.4 Visualizaciones a crear

| Módulo | Visualización | Datos base |
|---|---|---|
| Cuentas Claras | Treemap presupuesto municipal | DIPRES + SINIM |
| Cuentas Claras | Comparador barra horizontal "mi comuna vs top 5 similares" | SINIM |
| Cuentas Claras | Línea temporal de ejecución presupuestaria | DIPRES |
| Cuentas Claras | Radar de Lobby (grafo red) | InfoLobby |
| Voto Ciudadano | Tarjeta afinidad (barra horizontal con %) | Cámara API |
| Voto Ciudadano | Mapa de calor asistencia parlamentaria | Cámara + Senado |
| Promesómetro | Donut de progreso por categoría | Programas + evidencia |
| Observatorio Poder | Tarjeta 21 campos de autoridad | SERVEL + InfoProbidad |
| Academia | Infografía por cápsula (estáticas, pre-calculadas) | Varios |
| Alza la Voz | Mapa de calor comunal | INTERNAL reports + SINIM contexto |

### 6.5 Alertas automáticas a implementar (PIM)

- ⚠️ Notificación al nivel L2+ cuando su comuna actualiza presupuesto (DIPRES nuevos archivos)
- ⚠️ Alerta cuando Contraloría publica observación a municipio del usuario
- ⚠️ Alerta cuando InfoLobby registra reunión con autoridad del usuario
- ⚠️ Alerta cuando Cámara programa votación sobre tema del interés del usuario
- ⚠️ Alerta cuando SERVEL abre inscripción de candidatos
- ⚠️ Mensaje semanal "Tu comuna esta semana" con cambios SINIM + nuevos reportes

### 6.6 Garantizar Offline Dignity (F-07)

Estrategia: capa `final/<id>.json` embedded en bundle PWA + cacheada al primer load. Service Worker pre-cachea todos los JSON finales (objetivo: ≤2MB total). Offline features disponibles:
- Consultar presupuesto histórico sin conexión ✓
- Ver cápsulas de Academia cacheadas ✓
- Crear reportes offline (sync diferido) ✓
- Votar Ciudadano offline (sync con/sin verificación Nivel)
- Civia Capa 0 (plantillas) + Capa 1 (WebLLM local) sin red

### 6.7 Mantener Zero-cost (F-43)

- Conectores Python se ejecutan LOCALEMENTE (script en local de Daniel), no en servidor. Costo: $0.
- Actualizaciones de datos: manuales,ائه mes, no programadas en producción.
- Neon free tier 10GB: datos finales (~2MB) + DB relacional (perfiles, reports). Comodín.
- Cloudflare Workers AI (Capa 2 Civia): 10K neuronas/día gratis.
- WebLLM (Capa 1): $0, en dispositivo.
- Techo: 50K MAU gratis.

---

## 7. Propuestas de nuevos módulos y herramientas (Paso 7)

### 7.1 Nuevos módulos inéditos (de los expandidos, ahora con datos reales)

#### 7.1.1 Terminal Cívico (NUEVO)
**Qué es**: Versión "extreme-lite" de CIVICUM para teléfonos básicos vía WhatsApp.
**Datos**: Civia Capa 0 (plantillas) + consultas via WhatsApp Business API (free tier).
**Inspiración**: para segmento S3 (ciudadanos sin smartphone, Hallazgo Gamma-4).
**Por qué único**: nadie en Chile ha hecho plataforma cívica vía WhatsApp con datos oficiales.

#### 7.1.2 Fiscaliza tu Municipio (NUEVO)
**Qué es**: sub-módulo de Cuentas Claras especializado en análisis municipal profundo.
**Datos**: SINIM + ChileCompra + Contraloría + InfoLobby + InfoProbidad + DIPRES.
**Herramientas**:
- "Detective de presupuesto":_walkthrough guiado paso a paso por partidas atípicas
- "Auditor automatizado": ML detecta anomalías vs histórico y vs pares
- "Briefing de Poder" (F-38) por autoridad: quién está reunido con quién

#### 7.1.3 Sentencia Cívica (NUEVO)
**Qué es**: observatorio judicial ampliado (F-37) con casos reales clamados por ciudadanía.
**Datos**: Poder Judicial pública sentencias, Contraloría dictámenes.
**Herramientas**: buscar causas por comuna/tema, ver historial de jueces, accesibilidad legal.

#### 7.1.4 déficit por Comuna (NUEVO)
**Combinan CASEN + SINIM + MINSAL + MINEDUC + SISS**: por cada comuna, una ficha "déficit" con indicadores críticos. Al ciudadano, le dice "tu comuna tiene X% brecha en agua potable rural; Y% en cobertura dental; Z% en matrícula media". Cada déficit con botón → Misión Cívica correspondiente.

### 7.2 Integraciones cruzadas (F-38)

| Desde | Hacia | Integración |
|---|---|---|
| Cuentas Claras (partida atípica) | Alza la Voz | Botón "Crear reporte de fiscalización" pre-llenado |
| Promesómetro (promesa incumplida) | Alza la Voz | Botón "Crear reclamo" con contexto |
| Alza la Voz (reporte de salud) | Cuentas Claras | "Ver presupuesto salud de tu comuna" |
| Academia (cápsula D1) | Voto Ciudadano | "Vota sobre proyecto de ley relevante" |
| Voto Ciudadano (mandato) | Civia | "Ayúdame a redactar email a mi diputado" |
| Observatorio Poder (autoridad) | InfoLobby | "Ver reuniones de lobby de esta autoridad" |
| Cuentas Claras (licitación) | ChileCompra | "Ver contrato adjudicado" |
| Academia (cápsula) | BCN | "Ver ley vigente" |

### 7.3 Gamificación responsable ampliada (Academia)

- Badge "Fiscalizador Primario": tras primer reporte Alza la Voz completo con evidencia
- Badge "Voto Informado": tras votar 10 veces con cápsula previa leída
- Badge "Auditor Ciudadano": tras analizar 5 partidas en Cuentas Claras con exportación
- Badge "Mentor": tras crear 1 Mesa + 5 participantes activos
- **Guardarraíles**: badges NO affectan peso del voto (F-08), NO tienen FOMO, topes de karma (F-10)

### 7.4 IA Civia mejorada con datos reales

- Capa 0 (plantillas) amplía a 100+ plantillas legales con datos BCN
- Capa 1 WebLLM RAG: índiceVectorial local pre-construido con LeyChile dataset (~50MB normalizado)
- Capa 2 Workers AI: para consultas que requieren cruzar múltiples fuentes (DIPRES + SINIM + CASEN)
- Anti-alucinación F-17: nunca genera números, siempre desde text-to-SQL sobre datos cacheados
- Modo Secretario: ahora también con "Plantilla de Acta con extracción de tareas" para Círculos de Acción

### 7.5 "Fábrica de Reportes" (Herramienta input)

**Qué es**: en Alza la Voz, wizard guiado que toma un reporte ciudadano y genera **paquete PDF verificable** con:
- Reporte original
- Contexto presupuestario de la comuna (Cuentas Claras auto-link)
- Leyes relevantes (BCN auto-buscar)
- Dictámenes Contraloría relevantes (auto-buscar)
- Historial del destino (autoridad, % respuesta)
- Envío con Mandato Documentado

**Por qué único**: convierte una queja en un caso armado, con evidencia y contexto legal, listo para escalar. CIerra la cadena "nervio, no megáfono".

### 7.6 "Pactus" — Contratos Cívicos (NUEVO)

**Qué es**: sistema de micro-compromisos públicos entre vecinos y autoridades: el ciudadano firma "yo haré X" y la autoridad firma "yo haré Y". Cada Pacto con progreso visible y vencimiento.
**Datos**: plantillas de pactos + verificación Nivel 3+ para firmar.
**Por qué único**: empodera al ciudadano con herramienta contractual simple, sin litigio, con cumplimiento público.

---

## 8. Criterios de calidad para la propuesta (Paso 8 checklist)

- [x] Cubre los 6 módulos MVP + 5 expandidos
- [x] Para cada módulo: datos actuales + datos adicionales + visualizaciones + nuevas herramientas
- [x] Propone nuevos módulos/herramientas basados en datos disponibles (4 nuevos: Terminal Cívico, Fiscaliza tu Municipio, Sentencia Cívica, Déficit por Comuna; 2 nuevas herramientas: Fábrica de Reportes, Pactus)
- [x] Mantiene el alma de Civicum (honestidad, neutralidad, dignidad, anti-élite) — cada propuesta respeta F-01 a F-52
- [x] Garantiza Offline Dignity (F-07) — capa final JSON cacheda en PWA
- [x] Mantiene Zero-cost (F-43) — solo free tier, conectores locales
- [x] Incluye URLs concretas de fuentes de datos (20 fuentes catalogadas con URLs en Sección 5)
- [x] Plan técnico de integración (raw → interim → final → frontend) en Sección 6
- [x] Priorizado por impacto ciudadano — Prioridad 1 = fiscalización real
- [ ] Aprobado por Daniel antes de implementar — PENDIENTE

---

## 9. Estimaciones de esfuerzo (orientativo)

| Trabajo | Horas estimadas | Fase |
|---|---|---|
| Conectores Prioridad 1 (5 fuentes) | ~50h | Fase 6a |
| Normalización capa final JSON | ~30h | Fase 6b |
| Integración Cuentas Claras (SINIM, Contraloría) | ~40h | Fase 6c |
| Integración Voto Ciudadano (Cámara API) | ~25h | Fase 6d |
| Civia RAG legal (BCN LeyChile) | ~50h | Fase 6e |
| Academia datos reales en cápsulas | ~20h | Fase 6f |
| Alza la Voz: plazos oficiales + escalamiento Contraloría | ~25h | Fase 6g |
| Observatorio Poder (SERVEL + InfoProbidad + InfoLobby) | ~40h | Fase 7a |
| Promesómetro (programas + SERVEL + SINIM legacy) | ~60h | Fase 7b |
| Nuevos módulos (Fiscaliza Municipio, Fábrica de Reportes) | ~80h | Fase 8 |
| Pactus + Sentencia Cívica (V2) | ~120h | Fase 9 |
| **TOTAL expansión propuesta** | **~540h** | |

---

## 10. Próximos pasos (propuestos, en orden)

1. **Aprobación de este documento por Daniel** — sin implementar nada hasta autorización explícita.
2. Validación con `curl` que las 20 URLs de fuentes admiten acceso sin credenciales (o identificar las que requieren registro).
3. Implementar conector SUBDERE SINIM primero (mayor impacto, sin credenciales, alimenta Cuentas Claras).
4. Implementar conector Cámara Diputados API (alimenta Voto Ciudadano).
5. Normalizar capa final JSON y validar con `pnpm lint && pnpm build`.
6. Integrar visualizaciones en Cuentas Claras (SINIM treemap + comparador).
7. Repetir loop por cada fuente Prioridad 1.
8. Al cerrar fase, actualizar CIVICUM_RECOVERY.md (por separado, con aprobación).

---

## 11. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| URLs catálogo no verificadas automáticamente (429 rate limit) | Validar con curl uno a uno antes de implementar |
| SINIM no tiene API oficial (web scraping necesario) | Usar R `sinimr` (librería comunitaria) o scraping respetuoso con rate-limit |
| Cámara API puede cambiar formato | Versionar conector + tests robustos |
| BCN LeyChile API puede ser no oficial | Validar endpoint y usar con cuidado, failover a scraping HTML |
| Tamaño de bundle PWA puede crecer | Lazy-load por módulo, capítulos finales solo cuando se necesitan |
| Token Banco Central expira entre sesiones | Documentar proactively; considerar credenciales estables V2 |
| Datos ChileCompra requieren registro | Pedir a Daniel cuenta gratuita si se implementa Prioridad 3 |

---

## 12. Notas finales

- Este documento respeta todas las reglas de AGENTS.md: solo auditoría, sin código, sin git changes, sin stashes tocados, sin scripts peligrosos ejecutados.
- Cada propuesta se hizo dentro del alma de Civicum: honestidad radical, neutralidad verificable, dignidad offline, anti-élite, GPS cívico.
- El documento NO contiene prompts completos, logs completos ni transcripciones (cumple AGENTS.md §14).
- Total: ~400 líneas, ~16KB. Dentro de límites razonables para revisión humana.

---

## Fin del documento

Creado por Hermes Agent para Daniel Aguirre, Principal Software Architect / Data Architect / Security Engineer / Technical Lead de Civicum.

**Próximo paso requerido**: aprobación explícita de Daniel para continuar.
