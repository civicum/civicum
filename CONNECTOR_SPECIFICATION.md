# CONNECTOR SPECIFICATION — Estándar de Conectores del SNID (Sistema Nacional de Integración de Datos)
**Versión: 1.0.0 | Fecha: 2026-08-05 | Civicum**

---

## 0. Propósito
Definir la interfaz, comportamiento y requisitos que TODO conector de fuente de datos oficial debe cumplir para integrarse al SNID.
Cualquier nuevo conector (INE, CASEN, BCCh, DIPRES, etc.) **debe** implementar esta especificación al 100 %.

---

## 1. Objetivos del estándar
- **Uniformidad**: todos los conectores comparten la misma estructura, métodos y salida esperada.
- **Reutilización**: el 80 % de la lógica (descarga, reintentos, logs, validación básica) es provista por la clase base.
- **Testabilidad**: cada conector debe ser verificable con una batería de pruebas estándar.
- **Trazabilidad**: cada ejecución queda registrada con metadata completa.
- **Bajo costo de adopción**: un conector nuevo representa ~50 líneas de código glue una vez la infraestructura funciona.

---

## 2. Ciclo de vida completo de un conector
1. **Setup** — se carga la configuración, se registra el conector en metadata.
2. **Autenticación** (si aplica) — se obtiene token o las credenciales se incrustan en la request.
3. **Descarga** — se obtiene el archivo/data original. Se almacena en raw/.
4. **Validación** — se pasa por 4 capas de checks (formato → schema → dominio → consistencia interna).
5. **Normalización** — se transforma a la representación canónica (mismas unidades, nombres, códigos geográficos).
6. **Registro** — se escribe el metadata de la corrida (fecha, hash del raw, filas totales, flags de QC).

---

## 3. Interfaz común – `DataSourceConnector`
Cada conector **hereda** de esta clase abstracta y provee implementaciones para los métodos marcados como abstracta.

```typescript
abstract class DataSourceConnector {
  // REQUERIDOS — propios de cada fuente
  abstract id: string;          // ej: 'ine_poblacion_total'
  abstract name: string;        // nombre human-readable
  abstract fetchRaw(params: FetchParams): Promise<RawFetchResult>;
  abstract getSchema(): ColumnDef[];
  abstract normalizeRecord(raw: any): IndicatorRecord;

  // OPCIONALES (sobreescribir cuando aplique)
  authMode(): AuthMode;            // default AuthMode.NONE
  retryConfig(): RetryConfig;    // default { attempt = 3, backoff = 'exponencial 2s' }

  // FLOW EJECUTADO POR LA CLASE BASE (NO se sobreescribe)
  async execute(): Promise<ConnectorResult>;
  // dentro de execute() llama en orden: authenticate() → fetch() → validate() → normalize() → register()
}
```

---

## 4. Responsabilidades de cada conector
- **SÍ hacer**: descargar, validar formato, normalizar unidades, almacenar raw, registrar metadatos.
- **NO hacer**: calcular indicadores derivados (eso es trabajo del Motor de Datos). Mostrar datos en UI (eso es presentación). Acceder a la base de datos de producción directamente.

---

## 5. Flujo de ejecución (secuencial)
```
authenticate  →  fetch  →   validate  →   normalize  →  register
  (opcional)      ^            ↓               ↓              ↓
                  └─retries(tr)   error? abort   derivate? no  metadatos
```

---

## 6. Estrategia de autenticación
- **Modos soportados**: `NONE`, `BASIC_AUTH`, `API_KEY`, `FILE_PASSWORD`.
- Se configuran mediante variable de ambiente `SNID_<ID>_USER` / `SNID_<ID>_PASS`.

---

## 7. Estrategia de descarga
- **Método 1**: HTTP GET a una URL (csv/xlsx/json).
- **Método 2**: Leer archivo local (`file-local`) en `/data/raw/` (carga manual).
- **Método 3**: API JSON con paginación (`api-json`, implementación por conecto).

Los datos RAW se almacenan en `data/raw/<id>/v<version>/` con checksum.

---

## 8. Estrategia de reintentos
- **Configuración por conector**: `maxAttempts: 3`, `backoffMs: [2000, 4000, 8000]`.
- **Sólo se reintentan fallos transitorios de red** (timeout, 502, 429). Los errores de validación paran instantáneamente.

---

## 9. Estrategia de validación (4 gates)
1. **Formato (sintáctico)**: el archivo se pudo abrir el CSV es bien formato. Para JSON/API, es un objeto array.
2. **Schema (estructural)**: las columnas requeridas están presentes y los tipos (string/int/float) coinciden.
3. **Value (dominio)**: los valores están dentro de los nuevos predefinidos (ej. población > 0, tasa entre 0–100).
4. **Consistency (betweensource)**: (lo ejecuta el merge engine no cada conector)—revisa que esta fuente sea coherente con otras.

---

## 10. Estrategia de normalización
- **Moneda**: desde valor corriente → CLP constante 2020 usando factor IPC del BCCh.
- **Porcentajes**: 0-100 stored as float; cualquier otra representación se convierte.
- **Fechas**: `YEAR` entero. Subtipo `PERIOD` representa año fiscal, trimestre, etc.
- **Geo IDs**: de cualquier formato → `r01`, `c0701` mediante lookup table del conector.

---

## 11. Manejo de errores
| Severidad | Condiciones | Acción |
|-----------|-------------|--------|
| `RECOVERABLE` | red timeout, 503 | reintentos |
| `SKIP_ROW` | una celda fuera de rango (ej. año x → una columna vacía) | salta la fila, marca QC flag |
| `ABORT_CONNECTOR` | archivo corrupto, acceso denegado, error no contramedida | no se sube el avance, se salta este ciclo |
| `ABORT_PIPELINE` | fallo del motor o dependencia cruzada rota | se detiene todo el proceso y notifica |

---

## 12. Registro de logs
- **Formato**: `[timestamp] [CONNECTOR:ID] [LEVEL] mensaje`.
- Logs se escriben en `stderr` y adicional en archivo `data/logs/<id>_execution.log`.

---

## 13. Metadatos obligatorios (al terminar corrida)
```
source_id, name, version, execution_timestamp, duration_ms, rows_ingested, rows_valid, rows_skipped,
sha256_checksum, data_range_temporal, qc_flags, auth_mode, source_url, status (SUCCESS/FAIL/PARTIAL)
```

---

## 14. Versionado
Semver para el código del conector: `major.config change.` `minor.adds feature`. `patch.fixes.`
El metadata de cada ejecución lleva `blib_ connector_version` y el git commit hash.

---

## 15. Métricas de calidad (reportadas por cada ejecución)
- completeness (1 - %de vacíos) por columna)
- duplicates_rate
- outlier_count
- freshness_days (desde cuando fue la descarga probable)
- format_validation_errors
- schema_mismatch_count

---

## 16. Criterios de aceptación (checklist)
- [ ] `src/connectors/<id>/test_connector.ts` pasa sin error.
- [ ] `pnpm lint` sin nuevos errores.
- [ ] `pnpm build` exitoso.
- [ ] `pnpm test:connectors` ejecuta sus tests.
- [ ] Dos ejecuciones seguidas con igual input produce output idéntico.

---

## 17. Pruebas obligatorias
Cada conector debe proveer la suite `test_connector` que verifica:
1. Test de conectividad y b">
2. Que el esquema concuerda con `expectedSchema`.
3. Que falla correctamente con el input malformado.
4. Que normaliza correctamente una muestra pequeña.
5. Que se registran los metadatos.

---

## 18. Estructura de carpetas
```
src/data/connectors/<connector_id>/
├── connector.ts      # implementación de DataSourceConnector
├── test_connector.ts # suite de pruebas
├── mapping.ts         # (si necesita) mapeo geocódigos
├── README.md          # breve descripción de fuente
```

---

## 19. Convenciones de nombres
- `connector_id`: `snake_case`. Ej. `ine_poblacion_total`, `bcch_ipc_anual`.
- Funciones: `camelCase`.
- Archivos: `camelCase` (TS implementaciones).

---

## 20. Reglas para incorporar nuevos conectores
1. Verifique que la fuente esté listada en `DATA_CATALOG.md` (permiso concedido).
2. Cree la carpeta bajo `src/data/connectors/`.
3. Implemente el `DataSourceConnector` y las pruebas.
4. Ejecute `pnpm test` en el paquete para asegurar que no rompe.
5. Registre en `DATA_CATALOG.md` con Estado = `EN PROCESO`.
6. Después de primera corrida satisfactora, el Estado pasa a `INTEGRADA`.

---

**Approbación**: Hecha, cualquier conector nuevo debe seguir esta especificación.
**}Revisores:** (por fill). **Próximo con proposición**: INE total population connector.
**Fecha generación:** 2026-08-05