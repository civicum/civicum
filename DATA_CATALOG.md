# DATA CATALOG — Catálogo Maestro de Fuentes de Datos de Civicum
**Versión: 1.0.0 | Fecha: 2026-08-05 | SNID (Sistema Nacional de Integración de Datos)**

---

## Notas de lectura
- **Estado de integración**: `PENDIENTE` (no iniciada), `EN PROCESO` (conector parcial), `INTEGRADA` (pasando validación), `OBSOLETA` (reemplazada por otra).
- **Prioridad**: P0 (bloqueante), P1 (esencial), P2 (valor alto), P3 (deseable).
- **Calidad de los datos**: Estimación subjetiva basada en disponibilidad, completitud y documentación de la fuente. A (excelente) a E (muy riesgosa).

Índice:
1. INE / Proyecciones de Población Total
2. MIDES (CASEN) / Tasa de Pobreza Nacional
3. Banco Central de Chile (BCCh) — API BDE
  3a. Deuda Pública Bruta (% PIB)
  3b. PIB Nominal
  3c. IPC
4. MINEDUC / Matrícula Total Educación
5. DIPRES / Gasto Funcional—Educación
6. DIPRES / Gasto Funcional—Salud
7. DIPRES / Gasto Funcional—Infraestructura
8. DIPRES / Finanzas Municipales Históricas (Ingresos y Gastos)
9. Superintendencia de Servicios Sanitarios (SISS) / Cobertura de Agua Potable
10. UNESCO / Tasa de Alfabetización (Chile)

---

### 2. MIDES — Encuesta CASEN: Tasa de Pobreza Nacional
- **Institución responsable**: Ministerio de Desarrollo Social (MIDES)
- **Nombre del conjunto de datos:** Serie Histórica de Pobreza (por ingreso).
- **Descripción:** % de personas bajo la línea de pobreza (nacional) según encuesta CASEN bianual.
- **Cobertura temporal:** 1990‑2024 (bianual antes 2017, anual desde 2017)
- **Cobertura territorial:** Nacional y regional.
- **Frecuencia de actualización:** Bianual (anual a partir 2020).
- **Formato(s) disponible(s):** CSV, Excel (typical via datos.gob.cl o portal MIDES)
- **Método de acceso:** Descarga directa de portal MIDES o `datos.gob.cl`.
- **Licencia:** Datos públicos gubernamentales (CC‑CompartirIgual, espec toda revisión)
- **Calidad de los datos:** A+ (es la fuente autorizada oficial)
- **Estado de integración:** PENDIENTE (archivo requerido: `pobreza_casen.csv`)
- **Prioridad:** P1 (esencial para indicadores sociales)
- **Estrategia de actualización:** Anual: se descarga nuevo archivo si se publica, se ejecuta conector.
- **Observaciones:** Al ser bianual en su origen, se debe linealizar inter anual (con bandera `interpolated_from_casen`).

### 1. INE — Proyecciones de Población Total (1950-2050)
- **Institución responsable:** Instituto Nacional de Estadísticas (INE)
- **Nombre del conjunto de datos:** Proyecciones de Población Total 1950–2050 (base Censo 2024)
- **Descripción:** Población total residente en Chile por año, según estimaciones y proyecciones oficiales del INE.
- **Cobertura temporal:** 1950–2050 (datos anuales)
- **Cobertura territorial:** Nacional, regional, comunal (según la tabla)
- **Frecuencia de actualización:** Revisada por el INE cada 5-10 años (próxima actualización en 2030 con un nuevo censo).
- **Formato(s) disponible(s):** CSV, Excel (vía stat.ine.cl, INE.Stat)
- **Método de acceso:** Descarga directa del sitio `https://stat.ine.cl` Buscar "proyecciones base censal 2024", exportar completo.
- **Licencia:** CC BY 4.0, datos públicamente disponibles.
- **Calidad de datos:** A — fuente oficial censal únicomente usada nacionalmente.
- **Estado de integración:** PENDIENTE (archivo requerido: `poblacion_total.csv`)
- **Prioridad:** P1 (esencial para todos los indicadores por cápita).
- **Estrategia de actualización:** Actualización cada vez que el INE juzgue necesario publicar (posible cada censo). El sistema debe detectar manual cambio.
- **Observaciones:** Se prefiere la desagregación regional y comunal si está disponible en el mismo archivo.

### 3. Banco Central de Chile — API BDE (múltiples series)
- **Institución responsable:** Banco Central de Chile
- **Nombre del conjunto de datos:** API Banco Central (BDE)
- **Descripción:** Datos económicos y financieros históricos del Banco Central mediante API REST (free, con token de registro).
- **Cobertura temporal:** Generalmente desde 1820 hasta actual para IPC, PIB nominal, gasto público.
- **Cobertura territorial:** Nacional.
- **Frecuencia de actualización:** Diaria (los datos se acumulan).
- **Formato disponible:** JSON (API REST)
- **Método de acceso:** API BDE con user/password gratuito via registro en si3.bcentral.cl.
- **Licencia:** Datos públicos, atribución requerida.
- **Calidad:** A. Son datos oficiales.

#### 3a. Subserie: Deuda Pública (% del PIB)
- **Estado:** _pendiente_ (código de serie no identificado)
- **Observaciones:** Hay que usar la api `SearchSeries` para localizar el código de deuda del gobierno central.
#### 3b. Subserie: PIB Nominal (a precios corrientes)
- **Estado:** _pendiente_
- **Observaciones:** Código esperado: `GIUP GDP_CORR` o similar.
#### 3c. Subserie: IPC (Índice de Precios al Consumidor)
- **Código de serie:** `CPI_M` (por confirmar) — IPC mensual; convertir promedio anual.
- **Estado:** _pendiente_

### 4. MINEDUC — Matrícula Total Educación
- **Institución:** Ministerio de Educación—Centro de Estudios
- **Nombre:** Matrícula Total Sistema Formal (Preescolarción, Primaria, Secundaria, Terciaria)
- **Referencia temporal:** 1955‑2024
- **Formato:** Excel / CSV
- **Método de acceso:** Portal de Datos Abiertos (datos.gob.cl) o sitio del MINEDUC.
- **Licencia:** CC BY—Creative Commons (educacion.gob)
- **Calidad:** Alta
- **Estado:** _pendiente_ (archivo requerido: `matricula_total.csv`)
- **Prioridad:** P1

### 5. DIPRES — Gasto Funcional en Educación
- **Institución:** DIPRES
- **Nombre conjunto:** Gastos Funcionales — Función Educación
- **Descripción:** Millones de pesos gastados anualmente en educación por el sector público.
- **Cobertura temporal:** 1955‑2024
- **Formato:** CSV / Excel (portal de gastos DIPRES)
- **Calidad:** A (oficial obliga)
- **Estado:** _pendiente_ (archivo: `gasto_educativo.csv`)
- **Prioridad:** P1

### 6. DIPRES — Gasto Funcional en Salud
- **Nombre:** Gastos Funcionales — Función Salud
- **Idem anterior** — **Estado:** _pendiente_ (archivo: `gasto_salud.csv`) P1.

### 7. DIPRES — Gasto Funcional en Infraestructura
- **Nombre:** Gasto Funcional—Infraestructura y Desarrollo Urbanistica
- **Estado:** _pendiente_ (`gasto_infraestructura.csv`) P2.

### 8. DIPRES — Finanzas Municipales Históricas (Ingresos y Gastos)
- **Conjunto de datos:** Históricos de Ingresos (propios + fondo común) y Gastos por Función de los municipios chilenos.
- **Cobertura temporal:** 1958‑2024.
- **Formato:** publicado en DIPRES, usualmente en Excel (tabla de datos).
- **Calidad:** Alto.
- **Estado:** _pendiente_ (`ingresos_gastos_municipales.csv`)
- **Prioridad:** P1 (es la serie núcleo de Cuentas Claras).

### 9. Superintendencia de Servicios Sanitarios (SISS) — Cobertura de Agua Potable
- **Nombre:** Cobertura de Agua Potable
- **Institución:** SISS
- **Referencia temporal:** anual 1990‑2024
- **Formato:** Excel / CSV.
- **Método:** Descarga desde siss.gob.cl Estadísticas sectoriales (o datos.gob.cl).
- **Calidad:** A
- **Estado:** _pendiente_ (archivo: `agua_potable.csv`) P2.

### 10. UNESCO Institute for Statistics — Tasa de Alfabetización (15+ años)
- **Institución:** UNESCO
- **Nombre:** Adult Literacy Rate (population 15+, %)
- **Cobertura temporal:** 1960‑2024; Chile puntual 1970‑2020.
- **Calidad:** B (puede estar interpolados por UNESCO).
- **Método:** API UNESCO o descarga CSV.
- **Observación:** Dato de alfabetización de adultos consultados; se combinará con INE Censo 2024.
- **Estado:** _pendiente_ (`alfabetizacion.csv`) P3.

---

## Estado General de Integración

| Fuente | Indicador | Estado |
|--------|----------|--------|
| INE.Stat | población_total | PENDIENTE |
| MIDES-CASEN | pobreza_casen | PENDIENTE |
| BCDe API | deuda_publica_pib | PENDIENTE (requiere credenciales) |
| BCDe API | pib_nominal | PENDIENTE (requiere credenciales) |
| BCDe API | ipc_anual | PENDIENTE (requiere credenciales) |
| MINEDUC | matricula_total | PENDIENTE |
| DIPRES | gasto_fuc_educ | PENDIENTE |
| DIPRES | gasto_fuc_salud | PENDIENTE |
| DIPRES | gasto_fuc_infra | PENDIENTE |
| DIPRES | ingrecitos_gastos_ municipales históricos | PENDIENTE |
| SISS | cobertura_agua_potable | PENDIENTE |
| UNESCO | tasa_alfabetizacion | PENDIENTE |

---

## Instrucciones de Provisionamineto para los usuarios
- Descargue cada archivo según los nombres exactos listados y colócalo en
  `webapp/src/data/raw/` con la subcarpeta que toca.
- Para el BCCh, proveer `user` y `pass` de la API BDE.
- Para las fuentes publicadas por DIPRES (que tienen URLs de S3), notificar
  la URL de descarga tracking.

---

*** Última actualización:** 2026-08-05, versión v1.0.0, agenda exclusivamente en construcción.