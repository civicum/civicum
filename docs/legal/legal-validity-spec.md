# ⚖️ ESPECIFICACIÓN DE VALIDEZ JURÍDICA DE DOCUMENTOS GENERADOS

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 66 — Kafka-Alpha: El "Téngase Presente"  
**Soluciona:** KA-1, KA-2

---

## 🎯 Problema

CIVICUM genera documentos (solicitudes de acceso, reportes comunales, actas de Círculos). ¿Tienen validez jurídica real ante el Estado chileno?

---

## 🔴 HALLAZGO KA-1: Sin Clasificación de Validez Jurídica por Documento

**Problema:** La plataforma genera varios tipos de documentos pero no distingue cuáles tienen efecto legal y cuáles son meramente informativos.

**Solución: Mapa de Validez Jurídica**

| Documento generado | Validez legal | Base legal | Limitación |
|-------------------|---------------|-----------|-----------|
| Solicitud de Acceso a Info Pública | ✅ SÍ tiene validez | Ley 20.285 art. 12: solicitud puede ser por cualquier medio | Requiere identificación del solicitante |
| Reporte ciudadano (Alza la Voz) | ❌ NO tiene validez formal | No es denuncia legal, es UGC | No genera obligación de respuesta del Estado |
| Acta de Círculo de Acción | ❌ NO tiene validez | No es acta notarial ni municipal | Solo valor testimonial/comunitario |
| Voto ciudadano (Voto Seguro) | ❌ NO tiene validez electoral | F-02: votos son simbólicos | Explícitamente NO vinculantes |
| Solicitud ARCO (datos personales) | ✅ SÍ tiene validez | Ley 19.628 art. 12: titular puede ejercer por cualquier medio | Plazo 10 días hábiles |
| Queja ante OIRS | ⚠️ DEPENDE del canal | Ley 19.880 art. 6: acto electrónico válido si hay firma | Requiere firma electrónica simple |
| Carta a autoridad | ❌ NO tiene validez vinculante | Es derecho de petición (art. 19 N°14 CPR) | No genera obligación de respuesta específica |

**Disclaimer obligatorio en cada documento:**

```
PARA DOCUMENTOS SIN VALIDEZ:
"Este documento es informativo y no constituye una solicitud formal 
ante el Estado. Para efectos legales, dirígete a [OIRS/portal]."

PARA DOCUMENTOS CON VALIDEZ:
"Este documento tiene validez legal según [Ley X art. Y]. 
Conserva una copia. Plazo de respuesta: [N] días hábiles."
```

---

## 🟠 HALLAZGO KA-2: Sin Asistente de Redacción Legal para Solicitudes Válidas

**Problema:** Civia genera "redacción asistida de documentos legales" (offline) pero no hay especificación de qué estructura requiere cada tipo para ser válido.

**Solución: Templates con Requisitos Legales Mínimos**

### Solicitud de Acceso a Información Pública (Ley 20.285)
```
REQUISITOS LEGALES (art. 12):
✅ Nombre completo del solicitante
✅ Identificación (RUT o pasaporte)
✅ Descripción clara de la información solicitada
✅ Órgano al que se dirige
✅ Medio de notificación (email o dirección)

ESTRUCTURA DEL DOCUMENTO:
─────────────────────────────
[Encabezado con datos del solicitante]
SEÑOR/A [cargo] DE [órgano]:
[Nombre], RUT [xxx], domiciliado en [xxx], 
en ejercicio del derecho de acceso a información 
pública (Ley 20.285), solicita:
[Descripción de información solicitada]
Se solicita respuesta en plazo legal de 20 días hábiles,
al medio: [email/dirección].
[Firma electrónica simple]
[Fecha]
─────────────────────────────
```

### Ejercicio de Derechos ARCO (Ley 19.628)
```
REQUISITOS LEGALES (art. 12):
✅ Identificación del titular
✅ Descripción precisa del derecho ejercido (Acceso/Rectificación/Cancelación/Oposición)
✅ Datos específicos a los que se refiere

ESTRUCTURA:
Solicito ejercer mi derecho de [ARCO] respecto de 
los siguientes datos personales tratados por CIVICUM:
[Descripción]
Plazo: 2 días hábiles (Ley 19.628 art. 12)
```

**Validación automática:**
| Campo | Validación | Error si falta |
|-------|-----------|---------------|
| Nombre | No vacío, >2 caracteres | "Necesitamos tu nombre completo" |
| RUT | Módulo 11 válido | "El RUT no es válido" |
| Órgano destino | Select de órganos conocidos | "Selecciona a quién va dirigido" |
| Descripción | >20 caracteres | "Describe con más detalle qué información necesitas" |
| Email | Formato válido | "Necesitamos un email para enviarte la respuesta" |

---

*Documento generado para Escuadrón 66 Kafka-Alpha. Resolución KA-1 + KA-2.*
