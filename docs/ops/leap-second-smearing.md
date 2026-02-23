# ⏱️ EL SEGUNDO INTERCALAR (LEAP SECOND)

**Versión:** 1.0
**Squad:** 272 Cronos-2
**Amenaza:** A las 23:59:59, el reloj mundial inserta un segundo extra (23:59:60) para alinearse con la rotación de la Tierra. Linux y PostgreSQL a veces entran en pánico (High CPU / Crash).

---

## 🎯 El Segundo 61
Los computadores odian las excepciones a la linealidad del tiempo.

## 🛡️ LEAP SMEARING (DILUCIÓN)

### 1. No usar NTP Público directo
*   No sincronizamos los servidores directo a `pool.ntp.org`.
*   Usamos el **Amazon Time Sync Service** (o Google Public NTP) que aplica "Leap Smearing".

### 2. La Técnica "Smear"
*   En lugar de añadir 1 segundo de golpe (shock), estos servicios añaden milisegundos imperceptibles durante las 24 horas previas al evento.
*   Para cuando llega el "Leap Second", nuestros relojes ya están adelantados y simplemente "corren más lento" un rato, sin marcar nunca el segundo 60.

### 3. Database Freeze Moratorium
*   Durante las 24 horas alrededor de un Leap Second anunciado por la IERS:
    *   Prohibido hacer actualizaciones de Kernel o de versión de Base de Datos.
    *   Modo "Read-Only" para tareas de mantenimiento pesadas.

---
*Mentimos sobre la hora para que la verdad no nos mate.*
