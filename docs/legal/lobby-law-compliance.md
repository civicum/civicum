# 🏛️ AUDITORÍA DE CUMPLIMIENTO — LEY 20.730 (LEY DE LOBBY)

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 67 — Kafka-Beta: La Ley de Lobby  
**Soluciona:** KB-1, KB-2

---

## 🎯 Problema

CIVICUM muestra datos de InfoLobby y facilita interacciones ciudadano↔autoridad. ¿Estamos registrando correctamente las interacciones de lobby? ¿CIVICUM mismo podría ser considerado lobbista?

---

## 🔴 HALLAZGO KB-1: Sin Análisis de Aplicabilidad de la Ley 20.730 a CIVICUM

**Problema:** La tabla `authority_lobby_events` recolecta datos de lobby AJENOS (scraping InfoLobby) pero no analiza si la propia plataforma CIVICUM o sus usuarios podrían estar haciendo lobby.

**Solución: Análisis Jurídico de Aplicabilidad**

### ¿CIVICUM es lobbista?

| Criterio Ley 20.730 | CIVICUM | Análisis |
|---------------------|---------|---------|
| ¿Se promueven intereses particulares? | NO — CIVICUM no promueve intereses propios ante autoridades | No aplica |
| ¿Se representan intereses de terceros? | NO — CIVICUM solo facilita que ciudadanos se expresen | Plataforma neutral |
| ¿Hay gestión ante autoridades? | NO — CIVICUM muestra datos públicos, no contacta autoridades | Info pública |
| ¿Hay remuneración por gestión? | NO — CIVICUM es gratuito y sin fines de lucro | No aplica |

**Conclusión:** CIVICUM **NO es lobbista** según Ley 20.730. Es una plataforma de transparencia que muestra información pública.

### ¿Los usuarios hacen lobby vía CIVICUM?

| Funcionalidad | ¿Es lobby? | Razón |
|--------------|-----------|-------|
| Apoyar un reporte | NO | No es gestión directa ante autoridad |
| Votar en encuesta | NO | Votos simbólicos, no gestión de intereses |
| Enviar solicitud Ley 20.285 | NO | Es ejercicio de derecho ciudadano, no lobby |
| Carta a autoridad | ⚠️ POTENCIALMENTE | Si promueve interés particular ante sujeto pasivo |
| Círculo de Acción que contacta autoridad | ⚠️ POTENCIALMENTE | Si grupo organizado gestiona interés ante autoridad |

**Mitigación para funcionalidades ⚠️:**
```
DISCLAIMER en funciones de contacto directo con autoridades:

"Esta herramienta facilita el ejercicio de tu derecho de petición 
(art. 19 N°14, CPR). Si tu gestión promueve intereses económicos 
específicos ante un sujeto pasivo de la Ley de Lobby, podrías 
necesitar inscribirte en el Registro de Lobbistas. 
Más info: www.infolobby.cl"
```

---

## 🟠 HALLAZGO KB-2: Sin Verificación de Integridad de Datos de InfoLobby

**Problema:** El scraper trae datos de InfoLobby (`authority_lobby_events`) pero no verifica completitud ni frescura. Datos parciales podrían generar acusaciones injustas ("el alcalde no registra reuniones" cuando sí las tiene pero el scraper falló).

**Solución: Protocolo de Calidad de Datos de Lobby**

| Control | Implementación | Frecuencia |
|---------|---------------|-----------|
| Completitud | Comparar conteo de audiencias scrapeadas vs. total en InfoLobby | Cada scrape |
| Frescura | Si última audiencia es >30 días antigua y autoridad activa → flag | Diario |
| Atribución | Siempre mostrar "Fuente: InfoLobby — www.infolobby.cl" | Siempre |
| Disclaimer de parcialidad | "Datos obtenidos de InfoLobby. Podrían no reflejar el 100% de las audiencias" | Siempre |
| Cross-check | Si autoridad no tiene datos → verificar manualmente si tiene perfil en InfoLobby | Mensual |

**Visualización responsable:**
```
✅ CORRECTO:
"Según InfoLobby, esta autoridad registra 12 audiencias en 2025."

❌ INCORRECTO:
"Esta autoridad solo ha tenido 12 reuniones." 
(Implica que son todas, podría haber más no registradas)
```

---

*Documento generado para Escuadrón 67 Kafka-Beta. Resolución KB-1 + KB-2.*
