# 🚨 PLAYBOOK DE COMUNICACIÓN DE CRISIS

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Chi-1

---

## 🎯 Objetivo

Complementar F-51 (Incident Response Plan) con un playbook de comunicación pública para escenarios de crisis (hackeo, funa masiva, caída legal).

---

## 📋 Escenarios y Respuestas

### Escenario 1: Breach de Datos
| Fase | Acción | Responsable | Plazo |
|------|--------|-------------|-------|
| Detección | Activar F-51 IRP + notificar equipo | Rol 21 (SRE) | 0h |
| Contención | Aislar vector, modo Piso 0 (EMG-002) | Rol 71 (OpSec) | <1h |
| Notificación interna | War-room (EMG-001) | Rol 69 (Head of Ops) | <2h |
| Notificación usuarios | Email + banner in-app con hechos | Rol 75 (Comms) | <24h |
| Notificación legal | Procedimiento 72h (§2.4 GDPR) | Rol 48 (Abogado) | <72h |
| Post-mortem público | Blog post con timeline + medidas | Rol 75 + Rol 05 | <7 días |

**Template comunicado breach:**
```
[TITULO] Notificación de incidente de seguridad — [FECHA]

Qué pasó: [Descripción factual, sin minimizar]
Qué datos se vieron afectados: [Específico]
Qué hicimos: [Medidas tomadas inmediatamente]
Qué debes hacer: [Recomendaciones al usuario]
Próximos pasos: [Medidas futuras]

Transparencia total: [Link a post-mortem cuando disponible]
Contacto: seguridad@civicum.cl
```

### Escenario 2: Funa Masiva / Acusación de Sesgo Político
| Fase | Acción | Plazo |
|------|--------|-------|
| Detección | Monitoreo RRSS + in-app reports spike | 0h |
| Evaluación | ¿Tiene fundamento? Revisión de evidencia | <4h |
| Respuesta pública | Statement basado en hechos + datos | <12h |
| Evidencia | Publicar métricas de neutralidad (F-05) | <24h |
| Disyuntor | Activar F-08 si escala (human override) | Si necesario |

**Template respuesta funa:**
```
CIVICUM es una plataforma ciudadana independiente.
No pertenecemos a ningún partido ni gobierno.
Publicamos nuestro código, datos y financiamiento.

Evidencia de neutralidad:
- [X]% balance de perspectivas en contenido
- Financiamiento 100% transparente en [link]
- Código abierto auditable en [link]

Invitamos a verificar. La transparencia es nuestro compromiso (F-02).
```

### Escenario 3: Caída Legal (Demanda, Orden Judicial)
| Fase | Acción | Plazo |
|------|--------|-------|
| Recepción | Notificar Rol 48 (Abogado Público) | Inmediato |
| Evaluación | Análisis legal + riesgo | <24h |
| Comunicación interna | Solo directivos + legal (confidencial) | <24h |
| Comunicación pública | Solo si es legalmente requerido o necesario | Según consejo legal |
| Cumplimiento | Acatar orden judicial si válida | Según plazo legal |

### Escenario 4: Ataque Coordinado de Trolls
| Fase | Acción | Plazo |
|------|--------|-------|
| Detección | Spike en reports + patrones bot | Automático |
| Modo Calma | T-061: reducir visibilidad contenido nuevo | <1h |
| Rate limiting | Reforzar temporalmente | <1h |
| Limpieza | Moderación Capa 4 intensificada | <4h |
| Post-mortem | Análisis de vectores + mejoras | <48h |

---

## 🔑 Principios de Comunicación de Crisis

1. **Transparencia total** — Nunca ocultar, nunca minimizar
2. **Hechos primero** — No especular, solo datos verificados
3. **Rapidez** — Comunicar dentro de las primeras 24h
4. **Empatía** — Reconocer impacto en usuarios
5. **Proactividad** — No esperar a que pregunten; informar

---

*Documento generado para cerrar Observación Chi-1*
