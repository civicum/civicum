# ⚖️ CHECKLIST DE CUMPLIMIENTO LEGAL ADMINISTRATIVO

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Lambda-1

---

## 🎯 Objetivo

Verificar que CIVICUM cumple con el marco legal administrativo chileno aplicable a plataformas cívicas que interactúan con servicios públicos.

---

## 📋 Marco Legal Aplicable

### Ley 20.285 — Transparencia y Acceso a Información Pública

| Requisito | Implementación CIVICUM | Estado |
|-----------|----------------------|--------|
| Acceso a información pública | Módulo "Alza la Voz" permite solicitudes OIRS | ✅ |
| Transparencia activa | Links a portales de transparencia en perfil de autoridad | ✅ |
| Escalamiento a CPLT | Opción 1-click si OIRS no responde en plazo | ✅ |
| No publicar datos protegidos | RUT hasheado, datos personales via RLS | ✅ |
| Plazo legal 15 días | Tracking automático con alertas (verde→amarillo→naranja→rojo) | ✅ |

### Ley 18.575 — Bases Generales de Administración del Estado

| Requisito | Implementación CIVICUM | Estado |
|-----------|----------------------|--------|
| Principio de publicidad | Datos públicos disponibles sin login (módulos informativos) | ✅ |
| Principio de probidad | COI (Phi-1), InfoProbidad integrado | ✅ |
| Principio de eficiencia | Tracking de respuestas institucionales con SLA | ✅ |
| Responsabilidad funcionaria | Promesómetro + Perfil de autoridad con métricas | ✅ |

### Ley 19.880 — Procedimiento Administrativo

| Requisito | Implementación CIVICUM | Estado |
|-----------|----------------------|--------|
| Derecho a presentar solicitudes | Templates guiados en Alza la Voz | ✅ |
| Plazo de respuesta (15 días) | Monitoreo automático con escalamiento | ✅ |
| Silencio administrativo | Detección automática + botón "Escalar a Contraloría" | ✅ |
| Notificación al interesado | Push notifications con estados del caso | ✅ |
| Registro de actuaciones | Historial completo del caso visible al ciudadano | ✅ |

### Ley 19.628 — Protección de Datos Personales

| Requisito | Implementación CIVICUM | Estado |
|-----------|----------------------|--------|
| Consentimiento titular | Checkbox explícito en registro | ✅ |
| Finalidad declarada | Terms of Service con propósito específico | ⚠️ PARCIAL |
| Derecho rectificación | Edición de perfil | ✅ |
| Derecho cancelación | Eliminación de cuenta (/api/me/delete) | ✅ |
| Seguridad datos | Encriptación + RLS + auditoría | ✅ |
| RUT como dato sensible | Hasheado, nunca en claro | ✅ |

### GDPR (aplicable por operación en EU)

> Referencia: `CIVICUM_Anexo_Arquitectura_Tecnica_Completa.docx.md` §2.4.1

| Requisito | Estado |
|-----------|--------|
| Derecho al acceso (/api/me/data) | ✅ |
| Derecho al olvido (/api/me/delete) | ✅ |
| Portabilidad (JSON/CSV export) | ✅ |
| Consentimiento (no pre-marcado) | ✅ |
| Minimización (F-03) | ✅ |
| Breach notification (72h) | ✅ |

---

## ⚠️ GAP IDENTIFICADO: Términos de Servicio (Lambda-2)

> Aunque el proyecto documenta las finalidades de tratamiento de datos y compliance GDPR/19.628, no existe un documento formal de **Términos de Servicio (ToS)** adaptado a la legislación chilena. Este es un requisito para la Ley 19.628 ("finalidad específica declarada").

**Acción:** Crear template de ToS → ver `docs/legal/terms-of-service-template.md`

---

## 📅 Revisión

| Acción | Frecuencia | Responsable |
|--------|-----------|-------------|
| Revisión legal completa | Anual | Rol 48 (Abogado Público) |
| Update por cambio legislativo | Según webhook BCN (E1-1) | Rol 68 (Constitucional) |
| Auditoría compliance | Semestral | Rol 52 (Compliance) |

---

*Documento generado para cerrar Observación Lambda-1*
