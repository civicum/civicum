# El "Vuelva Mañana" Digital (Squad 286)

**Misión:** La API del Estado solo funciona de 9:00 a 18:00 hrs. Manejo de colas nocturnas.

## 1. El Riesgo de Herencia de Horarios Burocráticos
CIVICUM debe interrogar sistemas anticuados de Ministerios o SOAP Municipales (Típicamente creados en 2005 sobre Java Spring). Para ahorrar costos o por miedo a Hackers Extranjeros en la madrugada, los equipos TI del Gobierno **paran los pods Kubernetes de sus instancias APIs** entre las 20:00 y las 08:00 AM (Horario de Oficina).
Si una activista ingresa un caso a CIVICUM a las 23:00 hrs para validar una personería jurídica de fondo SERVEL... la API Externa devuelve 503 HTTP. Nuestro Front-Engine truena, devolviéndole a la ciudadana frustrada un *"Ventanilla Cerrada, Intente Mañana"*, importando y abrazando la ineficiencia clásica del monopolio estatal antiguo al siglo 21.

## 2. Inyección de Espera Fantasma (Ghost-Queuing)
CIVICUM es una App Nativa 24/7 sin piedad con los horarios humanos institucionales.

1.  **Recepción Incondicional Inmediata:** La interfaz Cívica para los vecinos JAMÁS les devuelve errores por culpas de Apagones Institucionales (Timeouts ajenos). Si el sistema Opendata externo está desconectado a las 3 AM y debe procesar un RUT, recibe el Post Request e ingesta al usuario diciendo *"Reporte y Patrocinio Absorbido, listo."*.
2.  **Upstash Redis Buffer / RabbitMQ Nocturno:** El Back-end envía la tarea de "Validación y Sellado" a una "Cola Lenta En Cuarentena". 
3.  **Retries Acumulados (Wake-Up Polling):** Los Workers programados se despiertan automáticamente a las `09:05 AM` (5 minutos después de que se levante el horario de oficina del Estado de forma general). Golpean a las APIs durmientes, verifican los "10.000 reportes acumulados de la madrugada" a una velocidad de 5 peticiones por segundo y finalizan silenciosamente todo el trabajo, notificando a las `09:30` con un simple Push/Email a la activista: *"Sellado completado"*.
    CIVICUM sirvió como Amortiguador Psicológico de las trabas gubernamentales.
