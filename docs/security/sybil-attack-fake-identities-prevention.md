# Ataque Sybil e Identidades (Squad 264)

**Misión:** Un líder compra 100 chips prepago Entel para influir votaciones.

## 1. El Riesgo del Botnet Político Local
Un concejal corrupto o líder de una toma ilegal se dirige a Estación Central, compra 200 "Chips Entel Prepago" de 2 lucas, y los utiliza para generar 200 Cuentas Nacionales `Clerk SMS Auth` o cuentas falsas en ClaveÚnica (utilizando RUTs de difuntos). Lanza "Iniciativas Populares" y él mismo cruza la meta de las 150 firmas en 30 minutos usando sus simuladores de Android. 
La municipalidad le cree a CIVICUM, derivando pavimentación u obras hacia un esquema mafioso hiperlocal.

## 2. Cacería Dactilar de Multicuentas (Sybil Radar)
Validar no requiere espiar, requiere geometría de comportamientos.

1.  **Firma Biológica del Dispositivo (Hardware Fingerprinting):** Al insertar un SMS Auth / Email, CIVICUM corre FingerprintJS asíncrono para identificar el Vector WebGL de la tarjeta de video, tamaño del canvas, Sistema OS y Timezone. Si 50 usuarios distintos con *números de teléfono diferentes* (los 50 chips) envían un Voto desde **el mismo Vector WebGL exacto y la misma IP celular CGNAT** (Tethering) en el lapso de 6 horas... es un Clon Humano.
2.  **Cuarentena Sombra (Shadow-Ban de Malla):** El sistema **no** prohíbe el registro (para no alertar al Concejal mafioso y que cambie el script). Le miente: dice "Cuenta Creada", dice "Voto Aceptado", pero los votos de esa IP / HW-ID tienen un peso relacional en Base de Datos de `0.000` en la tabla `weight_score`. El concejal gasta dinero infinito en prepago, pero sus números jamás influyen la "Mesa Asamblearia".
3.  **Auditoría de Actividad Fantasma (Zombie Accounts):** Un script semanal detecta RUTs que se loguean usando el flujo web (Puppeteer headless browsers) que mueven el cursor de manera linear perfecta (no-humana) durante la votación. Son bloqueados en Upstash nativamente.
