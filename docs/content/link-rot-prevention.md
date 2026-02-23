# 🔗 INMORTALIDAD DIGITAL: ESTRATEGIA ANTI-LINK ROT

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 117 — Entropía-2: Link Rot  
**Soluciona:** Hallazgo E2-01 (Fuentes Muertas)

---

## 🎯 La Amenaza Entrópica
CIVICUM basa su credibilidad en fuentes ("Según la Municipalidad X..."). Pero las webs municipales cambian cada 4 años con el nuevo alcalde y rompen todos los links.
En 2 años, el 50% de nuestra evidencia será "404 Not Found".

---

## 🏛️ Estrategia de Archivo Perpetuo

### 1. Wayback Machine Integration (Auto-Archive)
*   Cada vez que un usuario o admin cita una URL externa como fuente:
    *   Un worker en background envía la URL a `web.archive.org/save/`.
    *   Guardamos en nuestra DB la `original_url` Y la `archive_url`.

### 2. Caché "Reader Mode" Local
*   Además de archivar, CIVICUM descarga el contenido textual (parseado) de la fuente y lo guarda inmutablemente en la DB (con hash SHA-256).
*   Si la fuente original muere, mostramos: *"Fuente original no disponible. Mostrando copia archivada el [Fecha]."*

### 3. Auditoría de Enlaces Muertos (The Rot Crawler)
*   Crawler semanal que verifica status code de todas las fuentes externas.
*   Si detecta 404/500 -> Cambia automáticamente el enlace público a la versión de Wayback Machine.

---

## 🧪 Test del "Enlace Fantasma"
1.  Publicar un post citando una página de prueba.
2.  Borrar la página de prueba del servidor original.
3.  Hacer click en la cita en CIVICUM.
4.  **Éxito:** Redirige a la versión archivada sin error 404.

---
*Documento generado para cerrar Hallazgo E2-01.*
