# 🕒 VALIDACIÓN DE TIMESTAMP (EL VIAJERO DEL TIEMPO)

**Versión:** 1.0
**Squad:** 169 Timestamp
**Implementación:** Backend (Middleware)

---

## 🎯 El Truco
Un usuario saca una foto de un bache hoy. Cambia la fecha de su celular a "hace 1 año". Sube la foto para acusar al alcalde de negligencia prolongada.

## 🛡️ MECANISMOS DE VALIDACIÓN SERVER-SIDE

### 1. Desconfianza Total del Cliente (`Date.now()` Client-Side = 🤥)
*   **Regla de Oro:** NUNCA aceptar la fecha enviada en el JSON del body como fecha de creación del registro.
*   **Source of Truth:** La fecha `created_at` en base de datos se asigna automágicamente por el servidor (`NOW()` en PostgreSQL o `new Date()` en Edge Function).

### 2. Validación Cruzada de GPS (Para fecha del evento)
Si el usuario dice "Esto ocurrió ayer":
*   Extraer fecha de los metadatos EXIF originales (antes de scrubbing).
*   Comparar con fecha de subida.
*   **Umbral:** Si `UploadDate - EXIFDate > 24 horas`, mostrar advertencia: *"Esta foto es antigua. Se registrará con la fecha original de la toma, no la actual."*

### 3. Network Time Protocol (NTP) en App
*   La app móvil sincroniza un "Delta Temporal" contra un servidor NTP confiable (ej: `time.google.com`) al iniciar.
*   Si detecta que el reloj del usuario está desviado > 5 minutos, alerta: *"Tu reloj está mal configurado. Por favor ajústalo para reportar."*

## 🚫 PROHIBICIONES
*   Reportar incidentes "futuros" (Fecha evento > Server Time).
*   Editar la fecha de un reporte ya creado (Inmutabilidad temporal).

---
*El tiempo es relativo para Einstein, pero absoluto para CIVICUM.*
