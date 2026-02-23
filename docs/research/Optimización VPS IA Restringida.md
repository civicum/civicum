# **Informe de Ingeniería Arquitectónica: Optimización "Bare-Metal", Tuning de Kernel y Despliegue de IA en Entornos Severamente Restringidos**

El presente informe de ingeniería establece el diseño arquitectónico, el diagnóstico técnico y la estrategia de optimización de bajo nivel para el proyecto "CIVICUM", una plataforma cívica a nivel nacional en Chile. El motor central de inteligencia artificial de esta plataforma, denominado "OpenClaw", se encuentra desplegado en un entorno de Servidor Privado Virtual (VPS) que impone severas restricciones físicas y presupuestarias. Las especificaciones exactas del hardware comprenden un procesador de arquitectura AMD Epyc de 4 vCPUs sin aceleración gráfica dedicada (GPU), una memoria RAM física estricta de 12 GB y una unidad de almacenamiento de estado sólido NVMe ultrarrápida de 100 GB. El entorno operativo está basado en Ubuntu Linux y la orquestación de contenedores se gestiona mediante Docker Compose.

La naturaleza del proyecto impone reglas inquebrantables que dictan las decisiones arquitectónicas. La regla de "Zero-Cost" exige que toda solución tecnológica implementada sea completamente gratuita y de código abierto, prohibiendo categóricamente la integración de interfaces de programación de aplicaciones (APIs) comerciales de pago. La regla de "Soberanía de Datos" es un pilar legal y ético del proyecto, estipulando que ningún dato confidencial, incluyendo documentos en formato PDF, imágenes o Roles Únicos Tributarios (RUTs), puede ser transmitido fuera del VPS para ser procesado por servicios externos, lo que invalida el uso de infraestructuras en la nube como OpenAI o proveedores de bases de datos administradas que operen fuera del nodo. Finalmente, la regla de "Estabilidad" requiere la mitigación definitiva del asesino de procesos por falta de memoria del kernel de Linux (OOM Killer, Error 137), un fallo catastrófico que el sistema ha experimentado en iteraciones anteriores debido a la colisión de cargas de trabajo mixtas.

La carga de trabajo que debe soportar este nodo es extremadamente agresiva para su tamaño. Consiste en la inferencia concurrente de Modelos de Lenguaje Grande (LLMs) como Llama 3 8B o Mistral a través del motor Ollama, el procesamiento intensivo de Reconocimiento Óptico de Caracteres (OCR) utilizando Tesseract y Poppler para la conversión de documentos, y operaciones asíncronas de recolección de datos (scraping). La coexistencia de estas tres operaciones en un espacio de 12 GB de RAM y 4 hilos de procesamiento crea un escenario clásico de contención de recursos donde la CPU, el ancho de banda de la memoria y el sistema de entrada/salida (I/O) se convierten simultáneamente en cuellos de botella.

Para resolver este desafío multidimensional, el siguiente análisis disecciona exhaustivamente cinco vectores de investigación obligatorios. Se evalúan las extensiones del conjunto de instrucciones de la CPU, la microarquitectura de cuantización de modelos neuronales, los algoritmos de compresión de paginación del kernel, las políticas de contención de grupos de control (cgroups) y las estructuras transaccionales de control de concurrencia de bases de datos relacionales. El objetivo es proporcionar un marco de configuración comprobado y de bajo nivel que permita extraer el máximo rendimiento computacional del hardware subyacente, garantizando la viabilidad de la fase de desarrollo actual y la robustez necesaria para la futura operación asíncrona a nivel nacional.

## **1\. Maximización de Inferencia LLM en CPU (AMD Epyc)**

El despliegue de modelos de lenguaje con miles de millones de parámetros en una unidad central de procesamiento (CPU) sin aceleración de hardware dedicada transforma drásticamente el paradigma de la inferencia matemática. A diferencia de las unidades de procesamiento gráfico (GPUs), que poseen miles de núcleos diseñados para operaciones matriciales paralelas masivas y memorias de altísimo ancho de banda (VRAM), las CPUs tradicionales están limitadas por el ancho de banda de la memoria del sistema y una topología de núcleos reducida. Para que el motor Ollama (y su implementación subyacente llama.cpp) logre tasas de generación de tokens funcionales en un procesador AMD Epyc de 4 vCPUs, es imperativo explotar las instrucciones vectoriales nativas del silicio y seleccionar una estructura de cuantización que se alinee con los registros de la CPU.

### **Diagnóstico Técnico: Arquitectura AMD Epyc, AVX-512 y Cuantización GGUF**

La arquitectura de los procesadores AMD Epyc, basada en iteraciones recientes de la microarquitectura Zen, incorpora una ventaja computacional crítica que a menudo se subutiliza en despliegues no optimizados: el soporte para el conjunto de instrucciones Advanced Vector Extensions 512 (AVX-512). Históricamente, en arquitecturas más antiguas, la invocación de instrucciones AVX-512 provocaba una degradación térmica significativa que forzaba a la CPU a reducir agresivamente su frecuencia de reloj (downclocking), anulando las ganancias de rendimiento. Sin embargo, las implementaciones modernas en arquitecturas como Zen 4 procesan vectores masivos de 512 bits de longitud con una eficiencia térmica superior, permitiendo procesar operaciones de punto flotante por segundo (FLOPS) a velocidades que rivalizan con aceleradores especializados.1

El desarrollo reciente en el núcleo de inferencia de llama.cpp ha introducido docenas de nuevos núcleos de multiplicación de matrices optimizados específicamente para aprovechar AVX-512. Estas optimizaciones permiten que el tiempo de evaluación de los "prompts" (la fase de pre-llenado donde la red neuronal asimila el contexto de entrada) sea entre un 30% y un 500% más rápido que en máquinas limitadas a instrucciones AVX2.1 En un entorno sin GPU, esta aceleración vectorial es la única vía para lograr tiempos de respuesta interactivos. Además, el uso de registros más grandes en AVX-512 facilita la reducción de errores de redondeo matemáticos durante la multiplicación de tensores, lo que preserva la coherencia semántica del modelo.1

Para introducir un modelo de 8 mil millones de parámetros (Llama 3 8B) en una fracción de los 12 GB de RAM disponibles, se debe recurrir a la cuantización GGUF. Este proceso comprime los pesos de la red neuronal de 16 bits (F16) a representaciones enteras de menor precisión. La elección del algoritmo de cuantización dicta directamente la carga sobre los registros de la CPU y la velocidad de decodificación.

La industria actual tiende a recomendar el formato Q4\_K\_M (un enfoque de cuantización asimétrica conocido como K-Quants) debido a que ofrece el mejor equilibrio entre la retención de calidad lingüística (perplejidad) y el tamaño del archivo.2 En este esquema, diferentes capas de la red se cuantizan con distintos niveles de precisión basados en su importancia para la salida final. No obstante, esta estructura asimétrica e intrincada requiere ciclos de CPU sustanciales para calcular y descomprimir dinámicamente los tensores en tiempo de ejecución, introduciendo una sobrecarga computacional que un procesador de 4 vCPUs apenas puede permitirse.2 Por otro lado, los formatos extremadamente agresivos como Q3\_K\_L reducen el tamaño en memoria pero causan una degradación severa en las capacidades de razonamiento lógico y en el seguimiento de instrucciones precisas (IFEval), habilidades que son fundamentales para el procesamiento de documentos cívicos y la extracción de entidades estructuradas.2

El análisis de bajo nivel revela que el formato "heredado" Q4\_0 es superior para arquitecturas basadas en AVX-512. Aunque Q4\_0 presenta una perplejidad marginalmente mayor en benchmarks teóricos en comparación con los modernos K-Quants, su estructura de bloques es matemática y computacionalmente simple (bloques uniformes de 32 valores).3 Esta uniformidad geométrica permite una técnica conocida como "reempaquetado en línea" (online repacking), una optimización en el código base en lenguaje C de llama.cpp que alinea perfectamente los pesos cuantizados con los registros de 512 bits de la CPU de AMD.1 En consecuencia, en procesadores con instrucciones AVX-512, la inferencia sobre el formato Q4\_0 elude los cuellos de botella de decodificación asimétrica y empuja los datos a través de la tubería vectorial de la CPU mucho más rápido, superando consistentemente a las alternativas en la métrica de tokens generados por segundo.1

### **Diagnóstico Técnico: Estrangulamiento de Hilos y Concurrencia en Ollama**

Ollama opera bajo un paradigma de diseño que prioriza la disponibilidad y la concurrencia, intentando cargar en memoria tantos modelos como sea posible y procesando simultáneamente tantas peticiones como lleguen.7 En un VPS con recursos masivos, esta es una política sensata. En una instancia restringida de 12 GB de RAM que debe compartir memoria con un motor OCR pesado y bases de datos transaccionales, este comportamiento por defecto conduce a un fallo garantizado.

Cuando Ollama recibe solicitudes simultáneas, el parámetro de entorno OLLAMA\_NUM\_PARALLEL determina cuántas de ellas se procesarán al mismo tiempo.7 Si este valor se mantiene en su configuración predeterminada (frecuentemente 4), Ollama multiplicará las asignaciones de memoria requeridas para el contexto del modelo por cada solicitud concurrente.7 Por ejemplo, si se establece un tamaño de ventana de contexto de 4096 tokens, permitir 4 solicitudes paralelas exigirá la creación dinámica de un bloque de memoria de 16,384 tokens, devorando rápidamente los escasos gigabytes libres y empujando ineludiblemente al sistema hacia el invocador del OOM Killer del host Linux.7

Simultáneamente, la ejecución multihilo en llama.cpp está diseñada mediante un paradigma de "sincronización estricta" (lockstep dispatching). Esto significa que la carga de trabajo de una matriz se divide equitativamente entre los hilos asignados, pero ningún hilo puede avanzar a la siguiente matriz hasta que todos hayan terminado la operación actual.1 Si se le indica a Ollama que utilice más hilos (num\_thread) que los núcleos físicos o lógicos dedicados exclusivamente a él, el planificador del sistema operativo (scheduler) pausará algunos hilos para dar tiempo de CPU a otros procesos (como el OCR o el recolector de datos). Cuando esto ocurre, los hilos activos del LLM que terminan rápido entran en un bucle de espera activa (busy loop), quemando ciclos de CPU a la máxima frecuencia mientras esperan que el hilo pausado reciba tiempo de procesamiento y termine su fracción de la matriz.1 Esto paraliza por completo el flujo de inferencia.

### **Solución Propuesta Validada**

La arquitectura de inferencia debe configurarse para operar de manera estrictamente secuencial y altamente alineada con las capacidades vectoriales de la CPU AMD Epyc. Se abandonan los modelos K-Quants en favor de la cuantización geométrica simple y se restringe por completo la capacidad de Ollama para multiplicar contextos de memoria.

| Componente | Configuración Optimizada | Justificación Técnica |
| :---- | :---- | :---- |
| **Formato del Modelo** | Llama-3-8B-Instruct.Q4\_0.gguf | Máxima alineación con los registros AVX-512 de AMD Epyc. Permite el reempaquetado en línea, maximizando los tokens por segundo sin cuellos de botella por descompresión compleja.1 |
| **Manejo de Contextos** | Secuencial Estricto | Previene la duplicación de la asignación de memoria dinámica al restringir el procesamiento a una sola petición a la vez.7 |
| **Hilos de Ejecución** | Límite Físico \- 1 | Previene la latencia inducida por la sincronización estricta (lockstep) y los bucles de espera activa en el planificador del kernel.1 |

### **Comandos de Implementación y Variables de Entorno**

Para forzar estas optimizaciones a nivel del demonio de Ollama dentro de la orquestación de Docker Compose, se deben inyectar las siguientes variables de entorno que sobrescriben los comportamientos de asignación dinámica de memoria y concurrencia.

YAML

\# Fragmento para docker-compose.yml (Servicio Ollama)  
environment:  
  \# Deshabilita la red para exposición externa; escucha solo a nivel local  
  \- OLLAMA\_HOST=127.0.0.1:11434  
    
  \# Descarga el modelo de la RAM inmediatamente tras finalizar la inferencia  
  \# Libera espacio vital para la ejecución de la fase OCR  
  \- OLLAMA\_KEEP\_ALIVE=0   
    
  \# Procesamiento estrictamente secuencial. Las solicitudes simultáneas se encolan.  
  \# Previene la expansión geométrica de la memoria del contexto.  
  \- OLLAMA\_NUM\_PARALLEL=1   
    
  \# Bloquea explícitamente la carga de múltiples modelos neuronales en la RAM.  
  \- OLLAMA\_MAX\_LOADED\_MODELS=1 

Al momento de invocar el motor desde la aplicación Python ("OpenClaw"), se debe enviar una configuración JSON explícita que defina los parámetros de evaluación de tiempo de ejecución, particularmente la limitación de hilos.

JSON

{  
  "model": "llama3:8b-q4\_0",  
  "prompt": "",  
  "options": {  
    "num\_thread": 3,  
    "num\_predict": 1024,  
    "num\_ctx": 4096  
  }  
}

La elección de num\_thread: 3 en un servidor de 4 vCPUs es una táctica defensiva. Dejar un núcleo lógico (vCPU) completamente libre asegura que el demonio del sistema operativo, las interrupciones de red de la base de datos y la recolección de métricas tengan recursos asignados. Si se asignan los 4 vCPUs a Ollama, el planificador del kernel interrumpirá a los hilos de llama.cpp para atender tareas del sistema operativo, desatando la penalización de sincronización estricta documentada y ralentizando la inferencia más que si se hubieran utilizado solo 3 núcleos de forma ininterrumpida.1

### **Análisis de "Trade-offs" (Ganancias y Sacrificios)**

La ganancia fundamental de esta arquitectura es la obtención de una previsibilidad absoluta en la huella de memoria. El sistema asegura matemáticamente que la ventana de contexto del LLM nunca experimentará un crecimiento impredecible que active el asesino por falta de memoria (OOM Killer). Adicionalmente, el uso sinérgico de Q4\_0 con instrucciones vectoriales AVX-512 maximiza la tasa de tokens por segundo durante la evaluación computacional.

El sacrificio principal radica en la pérdida total de concurrencia a nivel de la interfaz del LLM. Las solicitudes concurrentes realizadas por el backend hacia la API de Ollama se colocarán en una cola interna (FIFO), lo que incrementará dramáticamente el tiempo de espera (latencia) para la segunda y tercera solicitud.8 Esta limitación impide que el sistema proporcione respuestas interactivas en tiempo real a múltiples usuarios simultáneamente. En consecuencia, esta arquitectura exige que el diseño del servicio sea de naturaleza asíncrona, gestionando las expectativas mediante enrutamientos en segundo plano donde los resultados se procesan y almacenan para su posterior revisión, en lugar de bloquear una conexión HTTP frontal a la espera de una inferencia paralela.

## **2\. Dominio Absoluto de la RAM: Zswap vs. zRAM vs. Swap Tradicional**

La contención de la memoria RAM en un entorno Linux es una batalla algorítmica entre la retención de páginas activas (el conjunto de trabajo) y el desalojo de páginas inactivas hacia medios de almacenamiento secundarios (Swap). Históricamente, en el proyecto CIVICUM, el agotamiento de los 12 GB de memoria física se intentó mitigar configurando un archivo Swap tradicional de 4 GB sobre el disco NVMe.10 Aunque el NVMe es una tecnología de estado sólido ultrarrápida, las latencias de lectura y escritura en almacenamiento secundario son órdenes de magnitud más lentas que el acceso directo a la memoria física. Durante picos de inferencia de IA o descifrado de imágenes OCR, el desplazamiento agresivo de páginas de memoria crudas hacia el disco causa una interrupción de entrada/salida (I/O) severa.

### **Diagnóstico Técnico: La Inflexibilidad de zRAM en Cargas Masivas**

En el ecosistema Linux moderno, se suele recomendar indiscriminadamente la herramienta zRAM para sistemas con restricciones de memoria.10 El módulo zRAM opera instruyendo al kernel para que cree un dispositivo de bloque de tamaño fijo en la memoria RAM.10 Cuando el sistema enfrenta presión de memoria, en lugar de enviar las páginas al disco físico, las comprime y las almacena dentro de este dispositivo virtual en la RAM.10

El problema arquitectónico con zRAM en el contexto de cargas de trabajo de inteligencia artificial radica en su inflexibilidad geométrica. Si un administrador configura zRAM para ocupar el 50% de la RAM física (6 GB) intentando absorber los picos del LLM y del motor OCR, ocurre un fenómeno destructivo.10 zRAM empuja al resto de los procesos activos, así como a las cachés del sistema de archivos, hacia un rincón no comprimido cada vez más estrecho. Si el dispositivo de bloque zRAM se llena y no cuenta con un dispositivo de almacenamiento de respaldo configurado explícitamente, la memoria "fría" (datos antiguos no utilizados) queda atrapada en la RAM comprimida, ocupando un espacio invaluable que los procesos activos requieren con urgencia.10 Esto precipita una asfixia del sistema que resulta en bloqueos totales del kernel o en la ejecución inmediata del OOM Killer.10

### **Diagnóstico Técnico: La Arquitectura Dinámica de Zswap**

Para una plataforma con almacenamiento NVMe rápido y cargas de trabajo masivas e impredecibles, la tecnología **Zswap** representa una evolución arquitectónica superior y es la herramienta adecuada para CIVICUM.10

A diferencia de zRAM, que emula un disco duro dentro de la memoria, Zswap opera como una capa de caché de compresión transparente que se sitúa lógicamente *delante* del dispositivo Swap físico (el archivo de 4 GB en el NVMe).10

La mecánica de Zswap es dinámica:

1. Cuando el kernel de Linux detecta presión en los 12 GB de RAM e inicia el proceso de paginación para enviar páginas inactivas al Swap, Zswap intercepta estas páginas.  
2. Zswap intenta comprimirlas y mantenerlas en la memoria RAM física dentro de un "pool" de caché cuyo tamaño es dinámico, gobernado por un porcentaje máximo configurable (típicamente entre 20% y 30% de la RAM).10  
3. Si este pool dinámico alcanza su límite superior, Zswap posee un mecanismo inteligente de desalojo basado en el algoritmo LRU (Least Recently Used). Extrae las páginas comprimidas más antiguas y menos utilizadas de la memoria RAM, las descomprime (o las envía comprimidas dependiendo de la configuración del asignador) y las escribe en el disco Swap físico NVMe.10

Esta arquitectura previene el fenómeno de "inversión LRU", un estado perjudicial donde datos obsoletos ocupan la memoria rápida mientras que datos recién procesados son forzados hacia el disco lento.10 Al contar con el respaldo del NVMe, los desbordamientos controlados que ocurren cuando el LLM carga sus tensores masivos son manejados de forma fluida y sin bloqueos del sistema operativo.10

### **Diagnóstico Técnico: Algoritmos de Compresión (LZ4 vs. Zstd)**

La efectividad de Zswap depende del algoritmo de compresión seleccionado en tiempo de arranque. Zswap soporta algoritmos potentes como Zstandard (zstd) y algoritmos enfocados en velocidad como lz4.14

El algoritmo zstd ofrece proporciones de compresión fenomenales, a menudo logrando ratios de 3:1, lo que maximiza la cantidad de datos que pueden permanecer en la RAM. No obstante, lograr estos ratios requiere un gasto masivo de ciclos de CPU para las operaciones de compresión y descompresión.14 En la plataforma CIVICUM, los 4 vCPUs AMD Epyc estarán bajo un estrés constante ejecutando multiplicaciones de matrices para Ollama o análisis de tensores para la extracción OCR. Imponer la carga adicional de zstd al kernel de Linux introducirá una latencia de contención severa, ralentizando todo el ecosistema de IA.14

Por consiguiente, el algoritmo **LZ4** es la elección óptima para este caso de uso. Aunque su ratio de compresión es modesto (aproximadamente 1.5:1), su complejidad algorítmica es mínima, permitiendo que las operaciones de compresión y descompresión se realicen a velocidades de gigabytes por segundo con una penalización casi nula en la CPU.14 LZ4 otorga una expansión de memoria "gratuita" en términos de ciclos de cómputo, dejando la CPU libre para el trabajo de inteligencia artificial.

A continuación, se presenta una proyección matemática de los estados de memoria en el servidor de 12 GB de RAM, escalando los parámetros de las validaciones de rendimiento documentadas para sistemas de 16 GB 10:

| Algoritmo y Ratio de Compresión | Capacidad Real del Pool (Zswap al 20%) | Memoria RAM Ocupada por el Caché | Memoria RAM Libre Restante | Espacio Virtual Ganado antes del Disco NVMe |
| :---- | :---- | :---- | :---- | :---- |
| **Zswap LZ4 (\~1.5:1 ratio)** | **3.60 GB (Comprimidos)** | **2.40 GB** | **9.60 GB** | **1.20 GB adicionales** |
| Zswap LZO (\~2.0:1 ratio) | 4.80 GB (Comprimidos) | 2.40 GB | 9.60 GB | 2.40 GB adicionales |
| Zswap Zstd (\~3.0:1 ratio) | 7.20 GB (Comprimidos) | 2.40 GB | 9.60 GB | 4.80 GB adicionales (Pero con alta asfixia de CPU) |

### **Solución Propuesta Validada y Comandos**

Se debe proceder con la eliminación total de configuraciones previas basadas en zRAM y habilitar Zswap a nivel del cargador de arranque del sistema operativo, junto con ajustes granulares a los parámetros de la máquina virtual de Linux a través de sysctl.

**1\. Configuración del Kernel en el Arranque (GRUB):**

El módulo Zswap debe activarse instruyendo al kernel desde el inicio. Se debe editar el archivo de configuración maestro de GRUB localizado en /etc/default/grub.

Se debe modificar o agregar la siguiente directiva a la línea GRUB\_CMDLINE\_LINUX\_DEFAULT:

Bash

GRUB\_CMDLINE\_LINUX\_DEFAULT="quiet splash zswap.enabled=1 zswap.compressor=lz4 zswap.max\_pool\_percent=20 zswap.zpool=z3fold"

El parámetro zswap.zpool=z3fold es crucial. Cambia el asignador de memoria predeterminado (zbud, que solo puede guardar 2 páginas comprimidas por bloque) a z3fold, que soporta el empaquetado de hasta 3 páginas comprimidas por cada página física de RAM, mejorando significativamente la densidad sin sacrificar rendimiento.

Tras guardar el archivo, se debe reconstruir la configuración de arranque y reiniciar el servidor para aplicar las directivas del kernel:

Bash

sudo update-grub  
sudo reboot

**2\. Optimización de Comportamiento de Paginación (Sysctl Tuning):** A diferencia de configuraciones heredadas donde se recomendaba un valor de swappiness muy bajo (ej. 10 o 20\) para evitar tocar un disco mecánico lento, la arquitectura moderna combinando Zswap y NVMe dicta una filosofía diferente. Dado que la compresión en la memoria es extremadamente eficiente, se desea que el kernel sea proactivo a la hora de identificar páginas de memoria inactivas y las empuje al caché comprimido de Zswap.10

Se deben insertar los siguientes parámetros en /etc/sysctl.conf:

Ini, TOML

\# Swappiness moderado-alto para incentivar el envío de páginas inactivas al caché Zswap  
vm.swappiness\=60

\# Reducción de la retención de las estructuras de directorios del sistema de archivos  
\# Fuerza al kernel a reclamar memoria caché del disco más rápidamente para dársela a la IA  
vm.vfs\_cache\_pressure\=100

Se aplican los cambios en caliente ejecutando sudo sysctl \-p.

### **Análisis de "Trade-offs" (Ganancias y Sacrificios)**

La ganancia primordial de esta configuración es la creación de un sistema de paginación viscoelástico. Zswap actuará como un amortiguador de alta velocidad que absorberá los picos de memoria del motor de OCR o de las multiplicaciones matriciales de Ollama, comprimiendo gigabytes de información en tiempo real sin congelar la CPU. Las caídas del sistema por OOM Killer debido al uso brusco de memoria se mitigan de manera casi absoluta, ya que el excedente fluye de forma natural y secuencial hacia el dispositivo NVMe.

El sacrificio recae en la reserva condicional de un 20% de la memoria RAM física (aproximadamente 2.4 GB). Aunque esta memoria actúa como un caché de compresión inteligente, deja de estar disponible como memoria bruta, sin comprimir, para los procesos de espacio de usuario. En la práctica, el tamaño máximo de archivo que un proceso puede solicitar en un solo bloque contiguo se verá ligeramente reducido, obligando al sistema a depender más de la eficiencia de fragmentación del asignador de Linux.

## **3\. Optimización del Pipeline de OCR**

El Reconocimiento Óptico de Caracteres (OCR) representa la segunda carga computacional más masiva dentro del nodo de CIVICUM. Extraer texto estructurado de documentos digitalizados o PDFs escaneados demanda una intensa manipulación de píxeles y el cruce de patrones a través de modelos algorítmicos complejos. El entorno actual depende de Tesseract, a menudo complementado con Poppler para la conversión previa de documentos PDF a mapas de bits (imágenes).

### **Diagnóstico Técnico: La Asfixia Estructural Causada por Tesseract**

Tesseract es un motor fundamentalmente robusto que ha dominado el ecosistema de código abierto durante más de una década. Sin embargo, su diseño arquitectónico, especialmente a partir de la versión 4.0 que introdujo modelos basados en Memoria a Corto y Largo Plazo (LSTM), no es óptimo para la paralelización en entornos con recursos limitados.16

Cuando el código fuente de Tesseract se compila con soporte multihilo (típicamente impulsado por la biblioteca OpenMP), su heurística por defecto es agresiva: el motor interrogará al sistema operativo y lanzará un número de hilos de procesamiento igual a la cantidad de núcleos de CPU detectados (en nuestro caso, 4 vCPUs).18 Si la aplicación Python subyacente ("OpenClaw") intenta procesar múltiples imágenes en paralelo para mejorar el rendimiento global, cada invocación de Tesseract generará sus propios 4 hilos OpenMP.18

Este comportamiento provoca un efecto multiplicador catastrófico en la memoria y la CPU.16 Múltiples instancias de Tesseract cargan en paralelo réplicas independientes de las pesadas redes LSTM y mantienen grandes matrices de imágenes crudas sin comprimir en la RAM.16 La sobrecarga de asignación dinámica de memoria (llamadas a funciones new y delete de C++ en un volumen masivo) colapsa los buffers disponibles, llevando rápidamente al sistema a consumir todos sus 12 GB de RAM, desencadenando la competencia por recursos (thrashing) y la intervención del OOM Killer.16 Tesseract, en esencia, no sabe compartir; asume que el host entero está dedicado a su ejecución.

Adicionalmente, el procesamiento interno a menudo desencadena errores de umbral, como el error de truncamiento al procesar imágenes grandes, que requiere manipulaciones como ImageFile.LOAD\_TRUNCATED\_IMAGES \= True, las cuales añaden presión al disco temporal en tareas de conversión paralelas, causando cuellos de botella adicionales a nivel de I/O.20

### **Evaluación de Alternativas Tecnológicas (Bajo Consumo de Memoria)**

Dado que Tesseract depende de una arquitectura algorítmica algo arcaica, el estado del arte de la visión por computadora ha transitado hacia redes neuronales convolucionales (CNN) profundas y arquitecturas Transformer más eficientes.

La evaluación de alternativas subraya a **RapidOCR** (una reimplementación ligera y optimizada de PaddleOCR) como el candidato definitivo para sustituir a Tesseract en un entorno constreñido.21

| Motor OCR | Arquitectura Base | Consumo Relativo de Memoria y Latencia | Adecuación para VPS Restringido |
| :---- | :---- | :---- | :---- |
| **Tesseract v5** | LSTM (Redes Recurrentes) | Extremadamente Alto (Pico paralelo incontrolable). Multihilo invasivo vía OpenMP. | Pobre. Suceptible de causar OOM Killer durante picos de trabajo. |
| **Surya / Marker** | Transformers End-to-End | Masivo. Diseñado primariamente para inferencia asistida por GPU. Requiere mucha RAM y procesamiento. | Inviable. Saturará la CPU AMD Epyc y superará el umbral de los 12 GB.21 |
| **RapidOCR (PaddleOCR)** | CNN \+ ONNX Runtime | **Excepcionalmente Bajo.** Optimizado para inferencia en CPU mediante ONNX, bajo footprint general.21 | **Óptima.** Clasificada como la opción más ligera para escenarios de memoria baja.21 |

RapidOCR sobresale en evaluaciones empíricas como una de las alternativas más eficientes en consumo de memoria del ecosistema de código abierto, siendo recomendado específicamente para escenarios donde la RAM es crítica.21 Además, aborda el requerimiento inquebrantable de la soberanía de datos de CIVICUM. Mientras que muchos modelos modernos exigen conexiones a la nube o son demasiado pesados, los modelos inferenciales ligeros de RapidOCR (detección, clasificación, reconocimiento de PaddleOCR) totalizan un tamaño ínfimo (frecuentemente menos de 20 Megabytes en conjunto), lo que garantiza un escrutinio 100% local, fuera de línea y sin fugas de privacidad.22 Al operar sobre el marco de ejecución matemático onnxruntime, hace un uso óptimo de las extensiones vectoriales de la CPU (incluyendo AVX2 y rutinas compatibles con AVX-512) para acelerar el procesamiento en silicio puro, eludiendo la necesidad del entorno masivo que requiere la instalación base de PaddlePaddle.22

### **Solución Propuesta (Contención de Tesseract como Sistema "Fallback")**

La recomendación arquitectónica es la migración del código de OpenClaw hacia RapidOCR empleando la integración mediante onnxruntime. Sin embargo, si Tesseract debe mantenerse operativo temporalmente por razones de deuda técnica o integración heredada, es mandatorio imponer una contención estructural severa sobre su motor para prevenir la asfixia del sistema operativo.

Para deshabilitar la creación agresiva de hilos de Tesseract, se debe inyectar la variable de entorno limitante de OpenMP de forma global en el contexto donde se ejecutan los scripts de extracción.

**Comando de Implementación y Variable de Entorno:**

Se debe asegurar que, antes de cualquier llamada a los submódulos de pytesseract o ejecución del binario, el límite de hilos esté fijado en la unidad mínima.

Bash

\# Definición a nivel del sistema o exportada en el script del contenedor (entrypoint)  
export OMP\_THREAD\_LIMIT=1

Alternativamente, se puede definir en el archivo Docker Compose del trabajador de OpenClaw:

YAML

environment:  
  \- OMP\_THREAD\_LIMIT=1

La aplicación de OMP\_THREAD\_LIMIT=1 obliga al ejecutable de Tesseract a utilizar estrictamente un solo núcleo físico para procesar el documento.18

### **Análisis de "Trade-offs" (Ganancias y Sacrificios)**

**En la contención de Tesseract:** La ganancia principal de forzar OMP\_THREAD\_LIMIT=1 es la erradicación del comportamiento de asfixia (thrashing) de memoria. Al prevenir que Tesseract lance procesos paralelos, se estabiliza la curva de consumo RAM, alejando al VPS de la amenaza del OOM Killer.18 La supervivencia del sistema operativo general y del LLM está asegurada. El sacrificio evidente es un incremento dramático en la latencia unitaria. Cada página de un PDF tardará significativamente más tiempo en procesarse al no poder usar el procesamiento en paralelo dentro del motor, disminuyendo la capacidad global (throughput) del canal de OCR.18

**En la migración a RapidOCR:** La ganancia es una mejora radical en la relación precisión-memoria. Se libera un volumen considerable de gigabytes, se recorta la latencia a través de optimizaciones directas de inferencia sobre CPU (ONNX), y se mejora la detección de estructuras tabulares y texto denso que Tesseract suele fallar en entornos complejos. El sacrificio radica en la sobrecarga de reescribir e integrar el pipeline de Python ("OpenClaw"), ya que los flujos de datos y objetos de salida de RapidOCR no son compatibles con el esquema heredado de envoltorios (wrappers) de Tesseract, requiriendo inversión en refactorización de código.22

## **4\. Aislamiento, Límites en Docker (Cgroups) y el OOM Killer**

Incluso con optimizaciones paramétricas rigurosas en los motores de inferencia y OCR, la seguridad operativa a gran escala requiere de un mecanismo de contención autoritario a nivel del núcleo (kernel) del sistema operativo. Docker facilita la abstracción de estas políticas mediante Control Groups (cgroups), específicamente la iteración cgroups v2 estándar en distribuciones Ubuntu modernas.

### **Diagnóstico Técnico: Controlando la Mortalidad del OOM Killer**

En su configuración predeterminada, los contenedores orquestados por Docker no poseen restricciones de hardware intrínsecas; pueden consumir impunemente tanta RAM o tiempo de CPU como el planificador (scheduler) del núcleo host les conceda.13 Si un proceso dentro de un contenedor entra en un estado inestable (por ejemplo, una fuga de memoria en un analizador de PDFs), consumirá memoria de manera insidiosa hasta agotar la capacidad física e incluso el espacio de intercambio Swap (Zswap \+ NVMe).13

En este punto crítico, el kernel invoca su mecanismo de defensa de último recurso: el OOM (Out-Of-Memory) Killer.28 El OOM Killer examina la tabla de procesos y asigna una puntuación a cada uno, basándose principalmente en un algoritmo heurístico que penaliza a los procesos que consumen mayores cantidades de memoria absoluta.28 La tragedia arquitectónica en este VPS es que Ollama, para funcionar, mantiene cargado en la memoria un archivo de pesos de red neuronal (GGUF) de aproximadamente 5 gigabytes. En los ojos del OOM Killer, Ollama es el consumidor más desproporcionado del sistema y será seleccionado de inmediato como la víctima principal, provocando la destrucción catastrófica del núcleo de inteligencia cívica.13

Para invertir esta fatalidad, es imperativo manipular directamente el atributo de núcleo oom\_score\_adj (Puntuación de Ajuste OOM) y establecer una jerarquía de grupos de control de memoria estricta en la especificación de Docker Compose.28

El parámetro oom\_score\_adj acepta valores entre \-1000 y 1000\. Un valor negativo fuerte instruye al kernel para que proteja el proceso a toda costa, reduciendo artificialmente su puntaje de condena.30 Un valor positivo alto señala voluntariamente al proceso como un sacrificio preferente.30 En nuestro ecosistema, el trabajador asíncrono (el pipeline OCR) debe asumir el rol de víctima prescindible si algo sale mal.

### **Solución Propuesta Validada: Arquitectura de Cgroups en Docker Compose**

Se debe aplicar un esquema de confinamiento utilizando directivas de "límites duros" (limits) para evitar que los contenedores devoren al vecino, y manipulación de puntuaciones OOM para definir qué subsistema sobrevive ante un colapso inminente.

**Lógica Matemática de la Partición de 12 GB RAM:**

* Sistema Operativo \+ Caché de Archivos \+ Caché Zswap LZ4: \~2.5 GB reservados inherentemente.  
* Límite Duro del LLM (Ollama): 6.5 GB (Suficiente para contener el modelo de 8B con su contexto y un margen de seguridad transaccional).  
* Límite Duro de Base de Datos (Postgres): 1.0 GB.  
* Límite Duro del Trabajador (OpenClaw \+ OCR): 1.75 GB.  
* Límite del Proxy Inverso (Aegis): 256 MB.  
* Suma Controlada: 12.0 GB (Equilibrio perfecto, contención garantizada).

**Configuración Exacta (docker-compose.yml versión 3.8 o superior):**

YAML

version: '3.8'

services:  
  \# MOTOR DE INTELIGENCIA ARTIFICIAL CENTRAL  
  ollama:  
    image: ollama/ollama:latest  
    container\_name: civicum-ollama  
    \# Protección Extrema contra el OOM Killer (-500 \= proceso crítico blindado)   
    oom\_score\_adj: \-500   
    deploy:  
      resources:  
        limits:  
          \# Fija el tope estricto de consumo RAM para evitar invasión cruzada  
          memory: 6500M  
          \# Restringe a 3 núcleos lógicos para garantizar respuesta I/O del host  
          cpus: '3.0'   
        reservations:  
          \# Memoria garantizada base al iniciar  
          memory: 5000M  
    environment:  
      \- OLLAMA\_NUM\_PARALLEL=1  
      \- OLLAMA\_MAX\_LOADED\_MODELS=1  
    restart: unless-stopped

  \# TRABAJADOR ASÍNCRONO Y MOTOR OCR  
  openclaw-worker:  
    build:.  
    container\_name: civicum-openclaw  
    \# Víctima Sacrificial Voluntaria (500 \= el kernel lo matará primero en una crisis)   
    oom\_score\_adj: 500  
    deploy:  
      resources:  
        limits:  
          \# Restricción crítica de 1.75GB. Si el OCR los cruza, cgroups lo finaliza.   
          memory: 1750M  
          \# Evita que el OCR sature los ciclos de reloj robándoselos al LLM  
          cpus: '2.0'   
    environment:  
      \- OMP\_THREAD\_LIMIT=1  
    depends\_on:  
      \- postgres  
      \- ollama  
    \# Auto-sanación: Docker reiniciará al worker si es asesinado por consumir en exceso  
    restart: on-failure

  \# CAPA DE PERSISTENCIA Y COLAS  
  postgres:  
    image: postgres:15-alpine  
    container\_name: civicum-db  
    \# Los datos transaccionales de CIVICUM son sagrados. Protección idéntica al LLM.  
    oom\_score\_adj: \-500   
    deploy:  
      resources:  
        limits:  
          memory: 1000M  
          cpus: '1.0'  
    environment:  
      \# Previene que la base de datos intente reservar memorias compartidas enormes  
      \- POSTGRES\_SHARED\_BUFFERS=128MB  
      \- POSTGRES\_WORK\_MEM=16MB  
    restart: unless-stopped

  \# PROXY DE ENRUTAMIENTO FRONT-END  
  aegis-proxy:  
    image: nginx:alpine  
    container\_name: civicum-proxy  
    deploy:  
      resources:  
        limits:  
          memory: 256M  
          cpus: '0.5'  
    restart: unless-stopped

### **Análisis de "Trade-offs" (Ganancias y Sacrificios)**

La ganancia principal de implementar la jerarquía de límites de cgroups v2 es la obtención de un aislamiento de fallos predecible y resiliente. Si el sistema OCR extrae un documento anómalo o corrompido que provoca una fuga de memoria (por ejemplo, expandiéndose repentinamente a 3 GB), el kernel de Linux interceptará inmediatamente este pico.13 Debido al límite duro impuesto y al oom\_score\_adj de 500, el kernel asesinará con extrema precisión y de forma quirúrgica única y exclusivamente al contenedor openclaw-worker.13 El motor Ollama y la base de datos PostgreSQL no sufrirán absolutamente ninguna interrupción. La política restart: on-failure se encargará de levantar automáticamente un nuevo trabajador limpio para retomar la cola de tareas, garantizando que el tiempo de inactividad de la plataforma global sea inexistente.

El sacrificio de este nivel de contención es la inhibición de capacidades de ráfaga computacional (bursting). Al fijar el uso de procesador (ej., cpus: '2.0' para OpenClaw), el OCR nunca podrá utilizar el 100% del procesador AMD Epyc para acelerar el procesamiento de un documento largo, incluso en momentos de la noche donde el motor Ollama esté completamente ocioso sin procesar ninguna solicitud. Los recursos quedan bloqueados estáticamente para asegurar la supervivencia mutua en el peor de los casos, sacrificando velocidad bruta por estabilidad a largo plazo.

## **5\. Gestor de Colas Asíncronas Ultra-Ligero (El Worker)**

Un entorno caracterizado por latencias asimétricas e inmensas (donde un modelo OCR tarda segundos y un LLM tarda decenas de segundos por solicitud) no puede procesar información de manera síncrona. La orquestación debe depender de una cola de trabajos (Job Queue). En sistemas de hiperescala modernos, la respuesta refleja suele ser implementar herramientas especializadas como Redis acoplado con frameworks como Celery o RQ.

### **Diagnóstico Técnico: Soberanía de Datos y Huella Estructural**

En la solicitud original se menciona la planeación de utilizar "PostgreSQL (Neon DB)" para gestionar la cola de trabajos. Es imperativo emitir una **alarma arquitectónica crítica** en este punto. Neon DB es una base de datos gestionada, serverless y hospedada en infraestructuras de nube públicas externas. Configurar el trabajador para enviar información de los documentos procesados, extracciones o textos que incluyan contenido sensible a una instancia de Neon DB constituye una **violación intrínseca de la regla inquebrantable de Soberanía de Datos** impuesta por el proyecto CIVICUM. Cualquier dato que salga de la conexión de la interfaz de red del VPS hacia Internet es un vector de exposición. La solución dictamina que la base de datos **debe** ejecutarse local y exclusivamente dentro de la instancia VPS del nodo (como se propuso en el docker-compose.yml previo, aislando una imagen local ligera basada en alpine).32

Habiendo asegurado la localidad, surge la pregunta central: ¿Es eficiente utilizar una base de datos relacional (Postgres local) frente a un micro-motor en memoria (Redis)?

En infraestructuras inmensas, la separación funcional tiene sentido, y Redis maneja colas eficientemente gracias a su arquitectura en memoria.33 Sin embargo, en un entorno hiper-restringido de 12 GB, cada demonio de servidor (daemon) impone un "impuesto base" sobre la memoria física y los ciclos de CPU del sistema operativo (por monitoreo de procesos, asignaciones TCP internas de Docker, etc.).34 Levantar un contenedor de Redis implica pagar este impuesto adicional (aproximadamente 50 a 150 MB fijos en RAM), añadir una nueva capa de complejidad de red interna y manejar dos esquemas de recuperación ante desastres diferentes.34

Históricamente, PostgreSQL era ineficaz como sistema de cola porque si varios trabajadores (workers) intentaban leer el "siguiente trabajo disponible" de manera concurrente usando consultas tradicionales SELECT... FOR UPDATE, generaban contención severa: un trabajador bloqueaba el registro y los demás trabajadores quedaban en espera (lock-wait), paralizando el paralelismo y consumiendo conexiones y ciclos de CPU inútilmente.33

Sin embargo, a partir de versiones modernas, el control de concurrencia multiversión (MVCC) de PostgreSQL solucionó este escollo mediante la cláusula estructurada SKIP LOCKED.33

### **La Mecánica Transaccional de SKIP LOCKED**

La sintaxis FOR UPDATE SKIP LOCKED modifica el comportamiento fundamental de adquisición transaccional a nivel de filas. Cuando un trabajador de OpenClaw consulta la tabla de la cola de trabajos (ej. civic\_tasks), el motor de la base de datos localiza la primera fila que coincide con el estado "pendiente" e intenta obtener un candado exclusivo para actualización. Si la fila ya está asegurada por el candado de otro trabajador concurrente, en lugar de bloquear la consulta y esperar (y en lugar de arrojar un error), PostgreSQL simplemente ignora silenciamente esa fila y continúa escaneando, aplicando el candado a la *siguiente* fila no reclamada disponible.33

| Métrica de Colas (Latencia) | Rendimiento Cache/Cola | Justificación en el Entorno del VPS (Latencias relativas) |
| :---- | :---- | :---- |
| **Operación Pop en Redis** | \~0.12 milisegundos 40 | Increíblemente rápido. Ideal para alta frecuencia en tiempo real. |
| **Operación Pop Postgres (SKIP LOCKED)** | \~0.30 milisegundos 40 | \+158% más lento teóricamente 40, pero la diferencia absoluta es menor a un milisegundo. Irrelevante comparado con los segundos que demora el LLM. |

Esta mecánica matemática otorga el superpoder de poseer colas distribuidas asíncronas perfectamente seguras contra la condición de carrera, sin depender de software adicional de terceros ni brokers especializados.37

### **Solución Propuesta Validada: Cola Basada en Eventos (LISTEN/NOTIFY)**

Para evitar que el demonio del trabajador OpenClaw esté permanentemente preguntando a la base de datos si hay trabajos nuevos (un enfoque "polling" que quema ciclos innecesarios del procesador Epyc restándole fuerza a Ollama), el patrón SKIP LOCKED debe combinarse armónicamente con la capacidad intrínseca de publicación y suscripción asíncrona de Postgres: el protocolo de eventos LISTEN/NOTIFY.34

El diseño lógico es el siguiente:

1. **Inserción:** El front-end del sistema (API cívica) inserta una nueva tarea de análisis en la tabla de Postgres. Al final de la transacción de inserción, la API emite el comando NOTIFY civic\_queue\_channel, 'nuevo\_trabajo';.41  
2. **Suscripción:** El demonio del trabajador asíncrono ejecuta un comando LISTEN civic\_queue\_channel; al inicializarse y luego entra en un estado inactivo profundo (sleep). Su consumo de CPU es 0%.  
3. **Despertar y Bloqueo:** Cuando llega el mensaje asíncrono desde la base de datos, el trabajador despierta al instante, ejecuta la consulta SELECT... FOR UPDATE SKIP LOCKED.34  
4. **Atomicidad de Fallo:** Una vez obtenido el candado, el trabajador procesa la inferencia en el LLM y el OCR.

SQL

\-- Estructura de Consulta Core del Trabajador (OpenClaw)  
BEGIN;

\-- Common Table Expression (CTE) para aislar la siguiente tarea segura  
WITH next\_civic\_job AS (  
    SELECT id   
    FROM civic\_tasks   
    WHERE status \= 'pending'   
    ORDER BY created\_at ASC   
    LIMIT 1   
    FOR UPDATE SKIP LOCKED  
)  
\-- Marcado atómico de la tarea  
UPDATE civic\_tasks   
SET status \= 'processing',   
    updated\_at \= NOW()   
WHERE id \= (SELECT id FROM next\_civic\_job)   
RETURNING data\_payload\_json;

\-- \<El script Python realiza el OCR y la inferencia a Ollama aquí\>

\-- Cierre transaccional  
COMMIT;

### **Análisis de "Trade-offs" (Ganancias y Sacrificios)**

La ganancia subyacente de este vector es una unificación y consolidación masiva de la arquitectura del servidor.34 Reducimos las piezas móviles, eliminando contenedores enteros, librerías de conexión Python complejas como Celery y dependencias externas.32 La protección ante desastres está integrada gracias al cumplimiento de los principios ACID de la base de datos; si el motor de OCR sufre un colapso en medio del análisis, la conexión de la base de datos local cae, el comando COMMIT nunca llega a ejecutarse, y el bloqueo sobre el trabajo expira, devolviendo la tarea a la cola automáticamente para ser procesada por un nuevo contenedor sanado.39 Se cumple la máxima de soberanía de datos y costo cero.

El sacrificio primario consiste en la administración de la higiene de datos. El uso del control de versiones (MVCC) de Postgres genera acumulaciones de tuplas "muertas" tras cada actualización de la fila de la cola de trabajo (pasar de "pendiente" a "procesando" y luego a "completado"). Si CIVICUM procesa miles de documentos al día, estas tuplas generarán hinchazón de la tabla (bloat). Esta consecuencia debe ser mitigada implementando políticas agresivas del demonio autovacuum, o mediante un modelo rotacional de tablas por fragmentos temporales, requiriendo un nivel más avanzado en el ajuste ("tuning") interno de los parámetros PostgreSQL.

---

En síntesis, la arquitectura diseñada deconstruye la mentalidad de fuerza bruta tradicional, reconociendo que la carencia de una GPU en el proyecto no es una barrera final, sino un problema de eficiencia termodinámica de asignación de memoria, optimizaciones vectoriales algorítmicas y límites paramétricos drásticos. La conjunción de modelos de lenguaje alineados con microarquitecturas precisas, compresiones RAM en caché intermedio, confinamiento estricto a nivel de contenedores y redes asíncronas de cola pura convergen para crear una plataforma cívica resiliente.

#### **Fuentes citadas**

1. LLaMA Now Goes Faster on CPUs \- Justine Tunney, acceso: febrero 22, 2026, [https://justine.lol/matmul/](https://justine.lol/matmul/)  
2. Which Quantization Should I Use? A Unified Evaluation of llama.cpp Quantization on Llama-3.1-8B-Instruct \- arXiv.org, acceso: febrero 22, 2026, [https://arxiv.org/html/2601.14277v1](https://arxiv.org/html/2601.14277v1)  
3. The difference between quantization methods for the same bits : r/LocalLLaMA \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/LocalLLaMA/comments/159nrh5/the\_difference\_between\_quantization\_methods\_for/](https://www.reddit.com/r/LocalLLaMA/comments/159nrh5/the_difference_between_quantization_methods_for/)  
4. My Learning Notes: Choosing the Right AI Model and Hardware \- DEV Community, acceso: febrero 22, 2026, [https://dev.to/mitchell\_cheng/my-learning-notes-choosing-the-right-ai-model-and-hardware-237](https://dev.to/mitchell_cheng/my-learning-notes-choosing-the-right-ai-model-and-hardware-237)  
5. I have multiple doubts about k-quant models and their 14 variations : r/LocalLLaMA \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/LocalLLaMA/comments/14gjz8h/i\_have\_multiple\_doubts\_about\_kquant\_models\_and/](https://www.reddit.com/r/LocalLLaMA/comments/14gjz8h/i_have_multiple_doubts_about_kquant_models_and/)  
6. Best Practice For CPU Inference : r/LocalLLaMA \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/LocalLLaMA/comments/1mgixw4/best\_practice\_for\_cpu\_inference/](https://www.reddit.com/r/LocalLLaMA/comments/1mgixw4/best_practice_for_cpu_inference/)  
7. FAQ \- Ollama English Documentation, acceso: febrero 22, 2026, [https://ollama.readthedocs.io/en/faq/](https://ollama.readthedocs.io/en/faq/)  
8. How Ollama Handles Parallel Requests \- Rost Glukhov | Personal site and technical blog, acceso: febrero 22, 2026, [https://www.glukhov.org/llm-performance/ollama/how-ollama-handles-parallel-requests/](https://www.glukhov.org/llm-performance/ollama/how-ollama-handles-parallel-requests/)  
9. VRAM consumption on 4xH100NVL thru parallel gpt-oss-20b · Issue \#12097 \- GitHub, acceso: febrero 22, 2026, [https://github.com/ollama/ollama/issues/12097](https://github.com/ollama/ollama/issues/12097)  
10. I was wrong\! zswap IS better than zram \- LinuxBlog.io, acceso: febrero 22, 2026, [https://linuxblog.io/zswap-better-than-zram/](https://linuxblog.io/zswap-better-than-zram/)  
11. I was wrong\! zswap IS better than zram \- Articles & guides \- LinuxCommunity.io, acceso: febrero 22, 2026, [https://linuxcommunity.io/t/i-was-wrong-zswap-is-better-than-zram/5430](https://linuxcommunity.io/t/i-was-wrong-zswap-is-better-than-zram/5430)  
12. I was wrong\! zswap IS better than zram : r/linux \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/linux/comments/1n5zapt/i\_was\_wrong\_zswap\_is\_better\_than\_zram/](https://www.reddit.com/r/linux/comments/1n5zapt/i_was_wrong_zswap_is_better_than_zram/)  
13. The Complete Guide to Docker Resource Limits: Stop Memory Leaks from Crashing Your Server \- BetterLink Blog, acceso: febrero 22, 2026, [https://eastondev.com/blog/en/posts/dev/20251218-docker-resource-limits-guide/](https://eastondev.com/blog/en/posts/dev/20251218-docker-resource-limits-guide/)  
14. Zram Performance Analysis | Hacker News, acceso: febrero 22, 2026, [https://news.ycombinator.com/item?id=45686280](https://news.ycombinator.com/item?id=45686280)  
15. zstd vs lz4 for zram: how to choose? : r/linuxquestions \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/linuxquestions/comments/1am4s9n/zstd\_vs\_lz4\_for\_zram\_how\_to\_choose/](https://www.reddit.com/r/linuxquestions/comments/1am4s9n/zstd_vs_lz4_for_zram_how_to_choose/)  
16. good accuracy but too slow, how to improve Tesseract speed · Issue \#263 \- GitHub, acceso: febrero 22, 2026, [https://github.com/tesseract-ocr/tesseract/issues/263](https://github.com/tesseract-ocr/tesseract/issues/263)  
17. fast vs. best · Issue \#1404 · tesseract-ocr/tesseract \- GitHub, acceso: febrero 22, 2026, [https://github.com/tesseract-ocr/tesseract/issues/1404](https://github.com/tesseract-ocr/tesseract/issues/1404)  
18. os.environ\['OMP\_THREAD\_LIMIT'\] \= '1' still leading to usage of mutiple CPU cores \#2998, acceso: febrero 22, 2026, [https://github.com/tesseract-ocr/tesseract/issues/2998](https://github.com/tesseract-ocr/tesseract/issues/2998)  
19. How to configure OMP\_THREAD\_LIMIT in tesseract directly in python code to disabling multiprocessing? \- Stack Overflow, acceso: febrero 22, 2026, [https://stackoverflow.com/questions/63070716/how-to-configure-omp-thread-limit-in-tesseract-directly-in-python-code-to-disabl](https://stackoverflow.com/questions/63070716/how-to-configure-omp-thread-limit-in-tesseract-directly-in-python-code-to-disabl)  
20. Tesseract OCR tips. Recently I did some performance tuning… | by Xin Cheng \- Medium, acceso: febrero 22, 2026, [https://billtcheng2013.medium.com/tesseract-ocr-tips-dc07e007de32](https://billtcheng2013.medium.com/tesseract-ocr-tips-dc07e007de32)  
21. Identifying the Best OCR API: Benchmarking OCR APIs on Real-World Documents, acceso: febrero 22, 2026, [https://nanonets.com/blog/identifying-the-best-ocr-api/](https://nanonets.com/blog/identifying-the-best-ocr-api/)  
22. Using Docling's OCR features with RapidOCR \- DEV Community, acceso: febrero 22, 2026, [https://dev.to/aairom/using-doclings-ocr-features-with-rapidocr-29hd](https://dev.to/aairom/using-doclings-ocr-features-with-rapidocr-29hd)  
23. 8 Top Open-Source OCR Models Compared: A Complete Guide \- Modal, acceso: febrero 22, 2026, [https://modal.com/blog/8-top-open-source-ocr-models-compared](https://modal.com/blog/8-top-open-source-ocr-models-compared)  
24. Easyocr vs Tesseract (In-Depth OCR Features Comparison) | IronOCR \- Iron Software, acceso: febrero 22, 2026, [https://ironsoftware.com/csharp/ocr/blog/ocr-tools/easyocr-vs-tesseract/](https://ironsoftware.com/csharp/ocr/blog/ocr-tools/easyocr-vs-tesseract/)  
25. Unlocking Document AI: A Deep Dive into the Official PaddleOCR MCP Server \- Skywork.ai, acceso: febrero 22, 2026, [https://skywork.ai/skypage/en/unlocking-document-ai-paddleocr-server/1978713871684509696](https://skywork.ai/skypage/en/unlocking-document-ai-paddleocr-server/1978713871684509696)  
26. PaddleOCR 3.0 Technical Report \- arXiv, acceso: febrero 22, 2026, [https://arxiv.org/html/2507.05595v1](https://arxiv.org/html/2507.05595v1)  
27. Tesseract: High CPU Usage and slow speed, only when running multiple processes in parallel \- Unix & Linux Stack Exchange, acceso: febrero 22, 2026, [https://unix.stackexchange.com/questions/530818/tesseract-high-cpu-usage-and-slow-speed-only-when-running-multiple-processes-i](https://unix.stackexchange.com/questions/530818/tesseract-high-cpu-usage-and-slow-speed-only-when-running-multiple-processes-i)  
28. Resource constraints \- Docker Docs, acceso: febrero 22, 2026, [https://docs.docker.com/engine/containers/resource\_constraints/](https://docs.docker.com/engine/containers/resource_constraints/)  
29. DevOps Scenario \#11: Why Your Docker Container Exceeds Memory Limits-Deep Dive Into cgroups, Namespaces & The OOM Killer \- Medium, acceso: febrero 22, 2026, [https://medium.com/@mdmarjanrafi/devops-scenario-11-why-your-docker-container-exceeds-memory-limits-deep-dive-into-cgroups-7c4930633d2c](https://medium.com/@mdmarjanrafi/devops-scenario-11-why-your-docker-container-exceeds-memory-limits-deep-dive-into-cgroups-7c4930633d2c)  
30. Add support for "oom\_score\_adj" in manifest file · Issue \#3565 · docker/compose \- GitHub, acceso: febrero 22, 2026, [https://github.com/docker/compose/issues/3565](https://github.com/docker/compose/issues/3565)  
31. Docker-Compose Restart always into OOM-Killer, acceso: febrero 22, 2026, [https://forums.docker.com/t/docker-compose-restart-always-into-oom-killer/102655](https://forums.docker.com/t/docker-compose-restart-always-into-oom-killer/102655)  
32. Do you need Redis? PostgreSQL does queuing, locking, and pub/sub (2021) | Hacker News, acceso: febrero 22, 2026, [https://news.ycombinator.com/item?id=42036303](https://news.ycombinator.com/item?id=42036303)  
33. Do You Need Redis? PostgreSQL Does Queuing, Locking, & Pub/Sub \- Atomic Spin, acceso: febrero 22, 2026, [https://spin.atomicobject.com/redis-postgresql/](https://spin.atomicobject.com/redis-postgresql/)  
34. Can Postgres replace Redis as a cache? | by Raphael De Lio \- Medium, acceso: febrero 22, 2026, [https://medium.com/redis-with-raphael-de-lio/can-postgres-replace-redis-as-a-cache-f6cba13386dc](https://medium.com/redis-with-raphael-de-lio/can-postgres-replace-redis-as-a-cache-f6cba13386dc)  
35. Do You Need Redis? PostgreSQL Does Queuing, Locking, & Pub/Sub \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/programming/comments/ny5nfg/do\_you\_need\_redis\_postgresql\_does\_queuing\_locking/](https://www.reddit.com/r/programming/comments/ny5nfg/do_you_need_redis_postgresql_does_queuing_locking/)  
36. Implementing a Postgres job queue in less than an hour | AmineDiro, acceso: febrero 22, 2026, [https://aminediro.com/posts/pg\_job\_queue/](https://aminediro.com/posts/pg_job_queue/)  
37. Choose Postgres queue technology \- Hacker News, acceso: febrero 22, 2026, [https://news.ycombinator.com/item?id=37636841](https://news.ycombinator.com/item?id=37636841)  
38. Choose Postgres queue technology | Brian Lovin, acceso: febrero 22, 2026, [https://brianlovin.com/hn/37636841](https://brianlovin.com/hn/37636841)  
39. Implementing Efficient Queue Systems in PostgreSQL | by Epm Mcys \- Medium, acceso: febrero 22, 2026, [https://medium.com/@epam.macys/implementing-efficient-queue-systems-in-postgresql-c219ccd56327](https://medium.com/@epam.macys/implementing-efficient-queue-systems-in-postgresql-c219ccd56327)  
40. I Replaced Redis with PostgreSQL (And It's Faster) \- DEV Community, acceso: febrero 22, 2026, [https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942)  
41. Do you really need Redis? How to get away with just PostgreSQL \- Hacker News, acceso: febrero 22, 2026, [https://news.ycombinator.com/item?id=27482243](https://news.ycombinator.com/item?id=27482243)  
42. I'm building a message queue with Postgres. Should my consumers use LISTEN or poll the DB? : r/PostgreSQL \- Reddit, acceso: febrero 22, 2026, [https://www.reddit.com/r/PostgreSQL/comments/1jsurtk/im\_building\_a\_message\_queue\_with\_postgres\_should/](https://www.reddit.com/r/PostgreSQL/comments/1jsurtk/im_building_a_message_queue_with_postgres_should/)  
43. Discussion of I Replaced Redis with PostgreSQL (And It's Faster) \- DEV Community, acceso: febrero 22, 2026, [https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942/comments](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942/comments)