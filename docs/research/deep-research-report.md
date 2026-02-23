# Informe de ingeniería para exprimir un VPS CPU-only en CIVICUM/OpenClaw

## Marco de medición y guardrails de estabilidad

**Diagnóstico técnico.** En un VPS con **4 vCPU / 12 GB RAM / NVMe** y carga mixta (LLM + OCR + scraping), el riesgo dominante no es “solo lentitud”, sino **picos de memoria** que disparan **OOM Killer (exit 137)** y caídas en cascada. En tu caso, el riesgo aumenta por dos hechos comprobados en Ollama: (a) el **contexto por defecto** es de **4096 tokens**, y (b) la **concurrencia paralela** en un mismo modelo **multiplica** la memoria, porque el servidor “crece” el contexto efectivo en función del paralelismo; por ejemplo, **2K ctx con 4 paralelos ⇒ 8K ctx** y “additional memory allocation”. citeturn16view0

**Solución propuesta validada (como disciplina operativa).** Antes de “tunear”, necesitas un método estable para medir (tokens/seg y picos de RSS) sin sesgo:

- **LLM**: usa métricas del propio Ollama (**prompt_eval_count/duration + eval_count/duration**) que el API expone (estructura `Metrics` y helper para imprimir tasas). citeturn22view0  
- **OCR**: mide por página (no por PDF completo) y captura el “high-water mark” de RAM durante rasterización y OCR.
- **Sistema**: registra presión de swap y page-faults durante cada etapa (LLM vs OCR), porque con CPU-only la degradación típica viene de **thrash** (swap-in/swap-out) más que de CPU al 100%.

**Comandos exactos recomendados (perfilado mínimo).**
```bash
# Visión rápida de memoria/swap
free -h
swapon --show
vmstat 1

# I/O y CPU por proceso (cuando corra OCR/LLM)
pidstat -r -u -d 1

# Contenedores (picos reales)
docker stats --no-stream
```

**Trade-offs.** Medir bien tiene costo de tiempo (instrumentación) pero evita “tuning por fe”. En este tipo de VPS, una sola mala decisión (por ejemplo, subir ctx o paralelismo “porque sí”) puede revertir toda la estabilidad. citeturn16view0

## Maximización de inferencia LLM en CPU AMD EPYC sin GPU

**Diagnóstico técnico.** Con 4 vCPU, el rendimiento de inferencia suele estar limitado por **ancho de banda de memoria** y eficiencia del kernel de cómputo (SIMD + threading), no por “GHz”. Además, en Ollama la memoria crece por tres vectores directos y documentados:

- **Contexto**: 4096 por defecto; configurable por `OLLAMA_CONTEXT_LENGTH`. citeturn16view0  
- **Paralelismo**: la memoria requerida escala aproximadamente con `OLLAMA_NUM_PARALLEL * OLLAMA_CONTEXT_LENGTH`; además, el paralelismo aumenta el contexto efectivo y la asignación de memoria. citeturn16view0  
- **KV cache**: puedes habilitar **Flash Attention** (`OLLAMA_FLASH_ATTENTION=1`) para reducir uso de memoria cuando crece el contexto y, con eso habilitado, cuantizar KV cache con `OLLAMA_KV_CACHE_TYPE` (`f16`, `q8_0`, `q4_0`) para reducir memoria (aprox **½** con `q8_0` y **¼** con `q4_0`, con pérdidas de precisión crecientes). citeturn16view0  

**Cuantización GGUF: Q4_K_M vs Q3_K_L vs Q4_0 (en la práctica CPU-only).**  
Lo único “universal” es el orden de magnitudes: menos bits ⇒ menor RAM ⇒ menos tráfico a RAM ⇒ potencialmente más throughput; pero la calidad puede caer y algunos esquemas son mejores “por diseño”:

- **K-quants**: en el ecosistema llama.cpp se consideran “mejores” que quants legacy a igualdad de tamaño (comunidad/maintainers lo resumen como “K-quantizations should be better… at the same file size”). citeturn23search2turn23search4  
- **Q4_0 (legacy)**: es cuantización “entera” por bloques con un factor de escala compartido; es la forma más simple. citeturn23search4  
- **Evidencia cuantitativa (referencia)**: el `llama-quantize` README incluye una tabla para **Llama 3.1 8B** donde, a nivel comparativo:
  - `Q3_K_L`: **~4.02 GiB**, generación **~69.38 t/s @128** (benchmark de referencia).  
  - `Q4_K_M`: **~4.58 GiB**, generación **~71.93 t/s @128**.  
  (Los números exactos dependen del hardware, pero el dato útil aquí es el *gap* y el tamaño relativo). citeturn5view0  
- **Restricción clave para tu VPS**: en ese mismo documento se advierte que durante cuantización los modelos se cargan completamente en RAM; por ejemplo, Llama 3.1 8B original figura como ~32.1 GB, mientras `Q4_K_M` ~4.9 GB. Eso implica que **no es realista cuantizar desde FP16/FP32 en 12 GB**: necesitas bajar GGUF ya cuantizado. citeturn5view0  

**Recomendación operativa (para 4 vCPU / 12 GB).**
- **Desarrollo estable**: `Q4_K_M` como baseline (calidad/robustez) y controlar memoria con ctx + KV cache quant (`q8_0`).  
- **Modo “apretar RAM”**: `Q3_K_L` si necesitas bajar huella de pesos, pero valida calidad en tus prompts cívicos (resúmenes legales, extracción de campos, etc.). citeturn5view0turn23search2  
- **Evitar apostar por Q4_0 como “mejor”**: es simple y compatible, pero los K-quants existen precisamente para mejorar el balance tamaño/calidad. citeturn23search2turn23search4  

**Parámetros críticos en Ollama que sí debes forzar en este VPS.**

- **Concurrencia y carga de modelos**: en CPU-only con 12 GB, tu mejor defensa es “no multiplicar buffers”.
  - `OLLAMA_MAX_LOADED_MODELS=1`  
  - `OLLAMA_NUM_PARALLEL=1`  
  - `OLLAMA_MAX_QUEUE` a un número pequeño (para no acumular requests que explotan RAM al liberarse).  
  Esto está documentado como knobs del servidor para concurrencia/colas. citeturn16view0  

- **Contexto**: baja el default del servidor, y súbelo solo por request cuando sea inevitable.
  - `OLLAMA_CONTEXT_LENGTH=2048` (baseline)  
  El default 4096 y el override por env están documentados. citeturn16view0  

- **Flash Attention + KV cache cuantizada** (para sobrevivir con contextos largos):
  - `OLLAMA_FLASH_ATTENTION=1`  
  - `OLLAMA_KV_CACHE_TYPE=q8_0` (recomendado por el propio texto como “usually has no noticeable impact” vs `f16`, mientras recorta memoria ~½). citeturn16view0  

- **Threads y batch (para no disparar picos de RAM)**: aunque la documentación de Modelfile no liste todos los runner params, el código del API de Ollama deja claro que existen runner options: `num_ctx`, `num_batch`, `num_gpu`, `use_mmap`, `num_thread`, con `num_batch=512` por defecto y `num_thread=0` para que el runtime decida. citeturn22view0turn21view0  
  Además, maintainers confirman que `options: { "num_thread": x }` controla threads y tiene diminishing returns. citeturn20search4turn20search17  

**Comandos/variables exactas para implementarlo (Docker/Compose).**
```yaml
# Fragmento conceptual para el servicio ollama
environment:
  OLLAMA_NO_CLOUD: "1"
  OLLAMA_CONTEXT_LENGTH: "2048"
  OLLAMA_MAX_LOADED_MODELS: "1"
  OLLAMA_NUM_PARALLEL: "1"
  OLLAMA_MAX_QUEUE: "64"
  OLLAMA_FLASH_ATTENTION: "1"
  OLLAMA_KV_CACHE_TYPE: "q8_0"
```
`OLLAMA_NO_CLOUD` y el modo local-only están documentados (incluye alternativa `~/.ollama/server.json`). citeturn16view0

**Ejemplo de inferencia “segura” por request (fuerza threads/batch/ctx).**
```bash
curl http://localhost:11434/api/generate -d '{
  "model": "mistral",
  "prompt": "Resume este documento en 5 bullets...",
  "options": {
    "num_ctx": 2048,
    "num_batch": 256,
    "num_thread": 4
  },
  "keep_alive": 0
}'
```
La existencia de `options` (map) en requests y de campos runner como `NumCtx/NumBatch/NumThread` está en el modelo de tipos del API. citeturn21view0turn22view0  

**Trade-offs.**
- Bajar `num_ctx` mejora estabilidad y reduce KV cache, pero limita RAG largo y prompts extensos. citeturn16view0  
- `q8_0` en KV cache ahorra memoria con pérdida mínima típica; `q4_0` ahorra más, pero con pérdida más visible especialmente en contextos altos. citeturn16view0  
- `num_batch` menor reduce picos de RAM y riesgo OOM, pero reduce throughput de “prompt processing” (ingesta). (El default 512 existe justamente por trade-off rendimiento/memoria). citeturn22view0  

## Dominio absoluto de RAM: zRAM + swap NVMe + políticas de swapping

**Diagnóstico técnico.** Ya comprobaste el síntoma central: OOM kill (137). Con contenedores y OCR, los picos de RAM no siempre son “lentos”: pueden ser instantáneos. zRAM existe exactamente para este tipo de escenarios: crear un **dispositivo de bloque comprimido en RAM** que puede usarse como swap, intercambiando CPU por menor I/O. citeturn6search0turn6search5

**Solución propuesta validada.** Estrategia en dos niveles:

- **Swap rápido**: zRAM como swap de alta prioridad (absorbe picos y evita tocar NVMe).  
- **Swap de overflow**: tu swap NVMe actual como respaldo de baja prioridad (para no reventar si zRAM se llena).

**Elección del compresor (lz4 vs zstd) para carga IA+OCR.** La referencia práctica es:
- **LZ4**: más rápido en compresión/descompresión (menos CPU).  
- **Zstd**: más compresión (más ahorro de RAM), pero más CPU.  
Un resumen ampliamente usado en entornos de virtualización (Proxmox) explicita exactamente este trade-off y ubica zstd “entre” LZO y LZ4 en velocidad. citeturn6search15  
En **4 vCPU**, donde LLM y OCR ya compiten por CPU, el default sensato tiende a ser **LZ4** (menor latencia y menos robo de CPU a inferencia).

**Swappiness (valor objetivo realista).** Swappiness no es un “umbral de %RAM”, sino un control de balance entre swap de páginas anónimas y descarte de page cache. citeturn6search35turn6search31  
Para LLM CPU-only, swapping agresivo puede ser catastrófico (si el modelo se enfría y page-faults masivos). Por eso, una receta conservadora es:

- `vm.swappiness=20` para **evitar swap temprano**, pero mantener swap disponible como “airbag”.
- Usar **prioridades de swap** para que, cuando swap ocurra, vaya primero a zRAM.

**Comandos exactos para habilitar zRAM como swap con prioridad.** Usando `zramctl` (util-linux) puedes fijar tamaño y algoritmo. citeturn6search4  
```bash
# 1) Crear zram de 3G–4G (heurística razonable en 12G RAM) y compresor lz4
sudo zramctl -f -s 4G -a lz4

# 2) Inicializarlo como swap y asignar prioridad alta
sudo mkswap /dev/zram0
sudo swapon -p 100 /dev/zram0

# 3) Asegurar que el swap NVMe quede con prioridad menor (ejemplo swapfile)
sudo swapon --show
# Si tu swapfile ya existe, vuelve a activarlo con prioridad baja:
sudo swapoff /swapfile || true
sudo mkswap /swapfile
sudo swapon -p 10 /swapfile

# 4) Ajustar swappiness (runtime)
sudo sysctl -w vm.swappiness=20

# 5) Persistencia
echo 'vm.swappiness=20' | sudo tee /etc/sysctl.d/99-civicum-vm.conf
sudo sysctl --system
```

**Trade-offs.**
- zRAM te da “más RAM efectiva”, pero quema CPU en (de)compresión; con 4 vCPU, eso puede bajar tokens/s si el sistema empieza a swapear durante inferencia. citeturn6search0turn6search15  
- Swappiness bajo protege performance del LLM, pero si tus picos son extremos aún puedes llegar a OOM: por eso necesitas además **límites por cgroup** (siguiente sección). citeturn6search35turn9search1  

## OCR de bajo consumo: rediseño del pipeline y control de hilos

**Diagnóstico técnico.** El consumo brutal de RAM que describes suele venir de **rasterizar PDFs completos** a imágenes grandes (varias páginas “simultáneas” o DPI excesivo), más que de Tesseract aislado. Poppler `pdftoppm` documenta explícitamente:
- `-f` / `-l` para rango de páginas  
- `-r` para DPI (default **150 DPI**)  
- opciones de escalado (`-scale-to`, etc.) citeturn7search2turn7search6  

Tesseract además usa OpenMP; el propio repositorio recomienda limitar threads con `OMP_THREAD_LIMIT` y que `OMP_THREAD_LIMIT=1` deshabilita multithreading. citeturn7search4turn7search8

**Solución propuesta validada.** La “optimización” más grande es **streaming por página** y **evitar rasterización cuando no es necesaria**:

**Ruta A: si el PDF trae imágenes embebidas (escaneos).** Extrae imágenes con Poppler `pdfimages` en vez de “renderizar página” (menor RAM y menos CPU). Este enfoque se describe como método estándar para extraer imágenes embebidas en Linux. citeturn7search23turn7search3  

**Ruta B: si necesitas render (PDF con texto vectorial + imágenes).** Renderiza de a 1 página (o micro-lotes) y con DPI controlado. Ejemplo:

```bash
# Render 1 página a PNG a 150 dpi (default) o 200 si necesitas más precisión
pdftoppm -f 1 -l 1 -r 150 -png input.pdf /tmp/page

# OCR de esa página
tesseract /tmp/page-1.png /tmp/out -l spa --psm 6
```
La capacidad de limitar a una sola página y controlar DPI está en la documentación de `pdftoppm`. citeturn7search2turn7search6  

**Control de hilos (imprescindible en 4 vCPU).**
- Para evitar que Tesseract “asfixie” al host y a Ollama, fuerza 1 thread por proceso:

```bash
export OMP_THREAD_LIMIT=1
export OMP_NUM_THREADS=1
```

`OMP_THREAD_LIMIT` está definido por el estándar OpenMP como el máximo de threads de OpenMP. citeturn7search8  
Y específicamente para Tesseract, maintainers recomiendan `OMP_THREAD_LIMIT` y mencionan explícitamente `OMP_THREAD_LIMIT=1` para desactivar multithreading. citeturn7search4  

**Si usas OCRmyPDF para robustez y “page-by-page”.** OCRmyPDF usa Tesseract internamente y agrega features (pipeline, metadata control, etc.). citeturn7search5  
Además, documenta que genera muchos temporales y permite moverlos con `TMPDIR` (útil para tu NVMe). citeturn7search21  

```bash
# Temporales a NVMe y threads limitados:
export TMPDIR=/var/tmp/ocr-tmp
export OMP_THREAD_LIMIT=1
ocrmypdf --jobs 1 --skip-text input.pdf output.pdf
```

**Alternativas de OCR (solo si tu tolerancia a calidad es baja).**
- **GNU Ocrad**: OCR clásico (feature extraction), CLI, lee PNG/PNM y devuelve texto. citeturn8search1turn8search5  
- **Cuneiform**: OCR multi-idioma, hace layout analysis, CLI. citeturn8search30turn8search2  

En un contexto cívico nacional (PDFs variados, escaneos sucios, resoluciones dispares), estas alternativas pueden tener huella menor de dependencias, pero típicamente pierden mucho en exactitud frente a Tesseract moderno (LSTM). La recomendación práctica es usarlas como fallback para “quick & dirty”, no como motor principal. (Inferencia basada en la naturaleza del proyecto y madurez del ecosistema; valida con tus documentos reales.)

**Trade-offs.**
- Renderizar a menor DPI o “scale-to” reduce RAM, pero puede perder campos pequeños (RUTs, folios, timbres). citeturn7search6  
- Limitar threads mejora estabilidad global (menos contención), pero puede aumentar el tiempo por página; en un VPS pequeño, suele **mejorar throughput total** porque evita oversubscription. citeturn7search4turn7search25  

## Aislamiento en Docker con cgroups: límites, prioridades y defensa contra OOM

**Diagnóstico técnico.** En Docker, si no impones límites, un contenedor puede consumir memoria del host y disparar OOM global. Docker soporta **límites duros** (hard) y **límites blandos** (soft) de memoria; los hard evitan que el contenedor use más de un techo fijo. citeturn9search1  
Para Compose, la especificación unificada soporta `mem_limit` y `cpus` como atributos de servicio; además, `mem_limit` debe ser consistente con `deploy.resources.limits.memory`. citeturn9search7turn9search24  

**Solución propuesta validada (patrón anti-137).** La receta es: **hacemos que OCR muera en su propio cgroup antes de tocar a Ollama**.

### Diseño de budget (12 GB RAM) orientado a “no caerse”

- **Ollama**: 6.5–7.5 GB (depende del modelo/ctx/KV-cache); CPU ~2–3 cores.
- **OCR**: 2.5–3.5 GB (render page-by-page + buffers); CPU ~1–2 cores.
- **OpenClaw + Aegis + scraping**: 1–2 GB total.

Esto no “garantiza performance”, pero sí evita que un spike de OCR mate el LLM y al host.

### docker-compose.yml (ejemplo concreto y portable)

> Nota: incluyo **`deploy.resources` y también los campos directos** (`mem_limit`, `cpus`) para maximizar compatibilidad con `docker compose` en modo no-swarm; la propia doc de servicios conecta ambos. citeturn9search7turn9search24  

```yaml
services:
  ollama:
    image: ollama/ollama:latest
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "2.5"
          memory: 7G
        reservations:
          cpus: "1.0"
          memory: 5G
    mem_limit: 7g
    mem_reservation: 5g
    memswap_limit: 9g
    cpus: "2.5"
    pids_limit: 512
    environment:
      OLLAMA_NO_CLOUD: "1"
      OLLAMA_CONTEXT_LENGTH: "2048"
      OLLAMA_MAX_LOADED_MODELS: "1"
      OLLAMA_NUM_PARALLEL: "1"
      OLLAMA_MAX_QUEUE: "64"
      OLLAMA_FLASH_ATTENTION: "1"
      OLLAMA_KV_CACHE_TYPE: "q8_0"

  ocr_worker:
    image: <tu-imagen-ocr>
    restart: "on-failure"
    deploy:
      resources:
        limits:
          cpus: "1.5"
          memory: 3G
        reservations:
          cpus: "0.5"
          memory: 1G
    mem_limit: 3g
    mem_reservation: 1g
    memswap_limit: 4g
    cpus: "1.5"
    pids_limit: 256
    environment:
      OMP_THREAD_LIMIT: "1"
      OMP_NUM_THREADS: "1"
      TMPDIR: "/var/tmp/ocr-tmp"

  openclaw:
    image: <tu-backend>
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 1.5G
    mem_limit: 1500m
    cpus: "1.0"

  aegis:
    image: <tu-proxy>
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 256M
    mem_limit: 256m
    cpus: "0.5"
```

**Por qué esto funciona.** Al imponer `mem_limit`/`limits.memory`, el kernel aplica cgroups; cuando OCR exceda, el daño queda acotado a ese contenedor y no “sube” al host como OOM global. Docker recomienda entender los requisitos de memoria y usar sus herramientas de límites, en vez de confiar en OOM global. citeturn9search1turn9search5  

**Trade-offs.**
- Límites estrictos pueden hacer fallar OCR en PDFs gigantes (lo cual es preferible a tumbar el sistema). Hay que reintentar con parámetros degradados: DPI menor, “page-by-page” más estricto, etc. citeturn7search2turn7search4  
- Reservas y límites mal calibrados pueden subutilizar CPU; por eso conviene medir (sección inicial) y ajustar iterativamente. citeturn9search1  

## Cola asíncrona ultra-ligera: Postgres SKIP LOCKED vs Redis/Celery en VPS restringido

**Diagnóstico técnico.** Tu objetivo real (operación nacional asíncrona) exige desacoplar HTTP de trabajos pesados (OCR/LLM). En un VPS pequeño, el riesgo no es “no tener cola”, sino elegir una cola que agregue demasiados procesos/servicios.

**PostgreSQL con `FOR UPDATE SKIP LOCKED` es un patrón base sólido.**  
PostgreSQL documenta en la sintaxis de `SELECT` que la cláusula de locking soporta:  
`FOR lock_strength ... [ NOWAIT | SKIP LOCKED ]`. citeturn13view0  
Y el feature matrix lo define claramente: **SKIP LOCKED “skips over rows that are currently locked without waiting.”** citeturn13view1  
Esto es exactamente lo que necesitas para múltiples workers sin duplicación por locks.

**Alternativas “listas” (open source) si quieres menos código de infraestructura.**
- **Graphile Worker** (Node + Postgres): se posiciona explícitamente como “job queue razonablemente performante” usando Postgres; destaca confiabilidad (“jobs will not get lost… transactional guarantees”) y “at least once”. citeturn10search21turn10search11  
- **pg-boss** (Node + Postgres): el README afirma que se apoya en `SKIP LOCKED` para resolver locking y ofrece “exactly-once delivery” y atomic commits (como garantía del sistema según su diseño). citeturn10search3turn10search6  

**Redis/Celery/RQ en tu VPS (evaluación pragmática).**
- Redis te suma un servicio adicional (más RAM residente) y, si quieres durabilidad fuerte, tendrás que configurar persistencia (AOF/RDB) lo que agrega I/O.  
- Celery normalmente implica broker + workers multiproceso; en 12 GB, esa complejidad se vuelve “overhead no productivo” comparado con usar el DB que ya necesitas.

**Soberanía de datos (alerta).** Mencionas “Neon DB”: si es Postgres remoto, cualquier payload/metadata sensible que pongas en la cola sale del VPS, lo cual choca con tu regla “ningún dato puede salir”. La opción alineada con soberanía es **Postgres local** dentro del mismo VPS (y cifrado/ACLs a nivel de disco/backup). (Esta conclusión es una deducción directa desde tu política; valida legalmente qué constituye “dato sensible” en tu diseño.)

**Implementación exacta (patrón minimalista con SKIP LOCKED).**  
Esquema simple:

```sql
CREATE TABLE job_queue (
  id          bigserial PRIMARY KEY,
  job_type    text NOT NULL,
  payload     jsonb NOT NULL,
  status      text NOT NULL DEFAULT 'queued',
  run_after   timestamptz NOT NULL DEFAULT now(),
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX job_queue_pick_idx
ON job_queue (status, run_after, created_at);
```

Worker (transacción atómica) usando la semántica de `FOR UPDATE ... SKIP LOCKED` que Postgres soporta en su locking clause. citeturn13view0turn13view1

```sql
BEGIN;

WITH picked AS (
  SELECT id
  FROM job_queue
  WHERE status = 'queued'
    AND run_after <= now()
  ORDER BY created_at
  LIMIT 1
  FOR UPDATE SKIP LOCKED
)
UPDATE job_queue j
SET status = 'running',
    updated_at = now()
FROM picked
WHERE j.id = picked.id
RETURNING j.*;

COMMIT;
```

**Tuning esencial (para tu VPS).**
- **Concurrencia = 1** para jobs “pesados” (OCR/LLM) mientras estés en 4 vCPU; agrega más workers solo para tareas livianas (scraping) o cuando migres a más hardware. El beneficio de SKIP LOCKED es escalar horizontalmente cuando puedas, sin reescribir el patrón. citeturn13view1turn13view0  
- Implementa “degradación” automática: si un OCR job falla por memoria (killed por cgroup), reintenta con DPI menor o modo `pdfimages` primero. Esto convierte errores de recursos en control de calidad/throughput.

**Trade-offs.**
- Postgres-queue reduce “moving parts” (ideal en VPS chico), pero el polling puede introducir latencia si no agregas señales (LISTEN/NOTIFY) o intervalos agresivos.  
- Librerías como Graphile Worker/pg-boss ahorran tiempo de desarrollo, pero añaden runtime (Node) y su propio modelo de “at least once / exactly once” depende de cómo confirmes/compenses en tu aplicación. citeturn10search21turn10search3