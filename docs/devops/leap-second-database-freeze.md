# El Segundo Intercalar (Leap Second) (Squad 272)

**Misión:** Un ajuste de tiempo global provoca que la BD se congele.

## 1. El Riesgo del Segundo Bisiesto (Kernel Panic)
A veces, para alinear la rotación de la Tierra con el reloj atómico (NTP), los organismos internacionales insertan un "leap second" (Ej: `23:59:60`).
Históricamente, esto ha causado que bases de datos masivas (Reddit, Cloudflare) colapsen en un Kernel Panic mundial en Linux, porque el reloj de CPU retrocede un segundo y el software asume un error de orden cíclico. Si ese minuto (Fin de Año) coincide en CIVICUM con el cierre de 4.000 Mesas de Trabajo, la transacción se corrompe en Postgres (Deadlocks masivos).

## 2. NTP Smearing

1.  **Redistribución del Tiempo (Time Smearing):** CIVICUM obliga a que todos los servidores Edge y RDS (Bases de datos AWS) utilicen el servicio AWS Time Sync Service o el "Google Public NTP". Estos servicios en vez de insertar el segundo extra a lo bruto (`23:59:60`), "arrastran" milisegundos a lo largo del día (lo dividen en 86.400 trozos). El segundo intercalar simplemente "pasa inadvertido" dilatando el día ligeramente, sin que Javascript se percate.
2.  **Bloqueo de Scripts Precisos Nocturnos:** Todo Cron Job cívico pesado (Cierres de Votación Alcaldicia, Generación de Certificados Diarios) no se ejecuta a las `00:00:00` ni a las `23:59:59`. Se programan pragmáticamente al mediodía (`12:00` o `04:00 AM`) para desmarcarse estadísticamente del peligro planetario del salto temporal de medianoche UTC.
