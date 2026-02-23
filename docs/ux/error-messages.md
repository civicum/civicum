# 💬 MENSAJES DE ERROR POR MÓDULO

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Beta-1

---

## 🎯 Principios de Microcopy de Error

1. **Empático:** Reconocer la frustración
2. **Claro:** Explicar qué pasó
3. **Accionable:** Ofrecer siguiente paso
4. **Sin culpa:** Nunca culpar al usuario

---

## 📱 MI CIVICUM

| Código | Situación | Mensaje |
|--------|-----------|---------|
| MC-001 | Perfil no carga | "No pudimos cargar tu perfil. Revisa tu conexión e intenta de nuevo." |
| MC-002 | Error guardando | "Hubo un problema al guardar. Tus cambios están seguros, intentaremos de nuevo." |
| MC-003 | Sesión expirada | "Tu sesión expiró por seguridad. Inicia sesión para continuar." |

---

## 📚 ACADEMIA CÍVICA

| Código | Situación | Mensaje |
|--------|-----------|---------|
| AC-001 | Lección no carga | "No pudimos cargar esta lección. ¿Intentamos de nuevo?" |
| AC-002 | Quiz no envía | "Tu respuesta no se envió. No te preocupes, la guardamos localmente." |
| AC-003 | Video no reproduce | "El video no está disponible ahora. Prueba con otra lección mientras tanto." |

---

## 🤖 CIVIA (ASISTENTE)

| Código | Situación | Mensaje |
|--------|-----------|---------|
| CV-001 | Sin respuesta | "No pude procesar tu pregunta. ¿Podrías reformularla?" |
| CV-002 | Timeout | "Estoy tardando más de lo usual. Dame un momento más..." |
| CV-003 | Tema fuera de alcance | "Eso está fuera de mis conocimientos cívicos. Prueba preguntarme sobre leyes, trámites o autoridades." |

---

## 📢 ALZA LA VOZ (REPORTES)

| Código | Situación | Mensaje |
|--------|-----------|---------|
| AV-001 | Foto no sube | "La foto no se subió. Revisa que pese menos de 5MB." |
| AV-002 | Ubicación fallida | "No pudimos obtener tu ubicación. Puedes marcarla manualmente en el mapa." |
| AV-003 | Reporte no envía | "Tu reporte está guardado localmente. Lo enviaremos cuando tengas conexión." |

---

## 💰 CUENTAS CLARAS

| Código | Situación | Mensaje |
|--------|-----------|---------|
| CC-001 | Datos no cargan | "Los datos presupuestarios no están disponibles ahora. Intenta en unos minutos." |
| CC-002 | Filtro sin resultados | "No encontramos datos con esos filtros. Prueba ampliando la búsqueda." |
| CC-003 | Exportar falla | "No pudimos generar el PDF. Intenta de nuevo o guárdalo para después." |

---

## 🗳️ VOTO CIUDADANO

| Código | Situación | Mensaje |
|--------|-----------|---------|
| VC-001 | Match no calcula | "No pudimos calcular tu match. Responde más preguntas para mejorar la precisión." |
| VC-002 | Datos candidato faltan | "Algunos datos de este candidato no están disponibles aún." |
| VC-003 | Comparación fallida | "La comparación no se pudo generar. Prueba con otros candidatos." |

---

## 🌐 ERRORES GLOBALES

| Código | Situación | Mensaje |
|--------|-----------|---------|
| GL-001 | Sin conexión | "Sin conexión a internet. Puedes seguir usando el modo offline." |
| GL-002 | Error servidor | "Algo salió mal de nuestro lado. Estamos trabajando para solucionarlo." |
| GL-003 | Mantenimiento | "CIVICUM está en mantenimiento. Volvemos pronto, gracias por tu paciencia." |
| GL-004 | Versión antigua | "Hay una nueva versión disponible. Actualiza para seguir usando CIVICUM." |

---

## 📝 ERRORES DE INPUT — VALIDACIÓN (Saneamiento Λ4-5)

> Mensajes para errores de tipo "fat-finger" (input incorrecto del usuario). Siguen los mismos principios: empáticos, claros, accionables, sin culpa.

| Código | Situación | Mensaje |
|--------|-----------|---------|
| IN-001 | RUT inválido | "El RUT no parece correcto. Revisa el dígito verificador." |
| IN-002 | Descripción muy corta | "Cuéntanos un poco más. Mínimo 20 caracteres para que se entienda." |
| IN-003 | Formato de archivo no soportado | "Ese formato no lo podemos procesar. Prueba con JPG, PNG o PDF." |
| IN-004 | Email inválido | "Revisa el email, parece que falta algo (ej: @dominio.cl)." |
| IN-005 | Campo obligatorio vacío | "Este dato es necesario para continuar." |
| IN-006 | Texto demasiado largo | "Son máximo {N} caracteres. Vas en {M}." |
| IN-007 | Número fuera de rango | "Ese número no parece correcto. Debe estar entre {min} y {max}." |
| IN-008 | Fecha inválida | "Revisa la fecha. Debe ser en formato DD/MM/AAAA." |
| IN-009 | Contraseña muy débil | "Tu contraseña necesita al menos 8 caracteres, una mayúscula y un número." |
| IN-010 | Ubicación fuera de Chile | "La ubicación debe estar dentro de Chile para este reporte." |

**UX de validación:**
- Error en línea debajo del campo (no en modal aparte)
- Borde Terracota + ícono `AlertCircle` + texto helper en Terracota
- El error desaparece al corregir (validación en tiempo real)
- **Nunca** borrar lo que el usuario ya escribió — solo señalar el problema

---

## ↩️ MENSAJES DE REVERSIBILIDAD — UNDO (Saneamiento Λ4-1/F-54)

> Mensajes para snackbars y confirmaciones del patrón "deshacer" implementado por F-54.

| Código | Situación | Mensaje del Snackbar |
|--------|-----------|---------|
| UN-001 | Reporte enviado (grace period) | "✓ Reporte enviado. [DESHACER] — Se envía en {N}s" |
| UN-002 | Reporte deshecho exitosamente | "Listo, el envío se canceló. Tu borrador sigue guardado." |
| UN-003 | Voto registrado (con retractación) | "✓ Tu voto quedó registrado. Puedes cambiarlo en las próximas 2 horas." |
| UN-004 | Voto cambiado exitosamente | "Tu voto se actualizó correctamente." |
| UN-005 | Reporte eliminado (soft-delete) | "Reporte eliminado. [DESHACER] — Puedes restaurarlo en los próximos 30 días." |
| UN-006 | Reporte restaurado exitosamente | "✓ Reporte restaurado con todas sus validaciones." |
| UN-007 | Borrador eliminado (soft-delete) | "Borrador eliminado. [DESHACER]" |
| UN-008 | Grace period expirado | "El envío ya se completó." |
| UN-009 | Ventana de retractación de voto expirada | "El plazo para cambiar tu voto ya pasó. Tu voto es definitivo." |
| UN-010 | Soft-delete expirado (30 días) | "Este contenido ya fue eliminado permanentemente." |

---

*Documento generado para cerrar Observación Beta-1*
*Actualizado con Saneamiento Λ4-5 (validación de input) y Λ4-1/F-54 (reversibilidad) — Febrero 2026*
