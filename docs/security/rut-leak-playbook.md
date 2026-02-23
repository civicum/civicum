# 🚨 PLAYBOOK: LEAK DE RUT

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Zeta-1  
**Clasificación:** CONFIDENCIAL

---

## ⚠️ DEFINICIÓN DE INCIDENTE

Un leak de RUT ocurre cuando:
- Hashes de RUT son expuestos fuera del sistema
- Base de datos con RUT (hasheados o no) es comprometida
- RUT de usuarios es accesible sin autorización

---

## 🚨 PROCEDIMIENTO DE RESPUESTA

### Fase 1: Detección (0-15 min)

```
┌─────────────────────────────────────────────────────────────┐
│  ACCIONES INMEDIATAS                                        │
├─────────────────────────────────────────────────────────────┤
│  1. Confirmar el incidente (¿es real o falso positivo?)     │
│  2. Escalar a Security Lead + CTO                           │
│  3. Preservar evidencia (logs, accesos)                     │
│  4. NO comunicar externamente aún                           │
└─────────────────────────────────────────────────────────────┘
```

### Fase 2: Contención (15-60 min)

| Acción | Responsable | Tiempo Máx |
|--------|-------------|------------|
| Revocar accesos comprometidos | Security | 15min |
| Rotar credenciales DB | DevOps | 30min |
| Bloquear IPs sospechosas | DevOps | 15min |
| Activar WAF modo paranoid | DevOps | 10min |

### Fase 3: Evaluación de Impacto (1-4h)

- [ ] ¿Cuántos RUT afectados?
- [ ] ¿Solo hashes o datos en claro?
- [ ] ¿Qué otros datos expuestos junto al RUT?
- [ ] ¿Cómo ocurrió la brecha?
- [ ] ¿Hay evidencia de uso malicioso?

### Fase 4: Notificación (4-24h)

#### Si >100 usuarios afectados:

**Internamente:**
- Board de CIVICUM
- Equipo legal
- Equipo de comunicaciones

**Externamente (obligatorio por Ley 19.628):**
- Consejo para la Transparencia (si datos públicos involucrados)
- Sernac (si corresponde)
- Usuarios afectados

#### Plantilla de Notificación a Usuarios:

```
Asunto: Aviso importante sobre la seguridad de tu cuenta CIVICUM

Estimado/a [nombre],

Te informamos que el [fecha], detectamos un incidente de seguridad 
que pudo haber afectado algunos datos de tu cuenta, incluyendo 
tu número de RUT en formato encriptado.

ACCIONES TOMADAS:
- [Lista de acciones]

RECOMENDACIONES:
- Monitorea tu historial crediticio
- Reporta cualquier actividad sospechosa

PRÓXIMOS PASOS:
- [Acciones adicionales]

Contacto: seguridad@civicum.cl
```

### Fase 5: Remediación (24-72h)

| Acción | Descripción |
|--------|-------------|
| **Rotación de salt** | Generar nuevo salt para hashing de RUT |
| **Re-hash masivo** | Actualizar todos los hashes con nuevo salt |
| **Auditoría de código** | Revisar puntos de exposición |
| **Pentesting** | Contratar auditoría externa |

### Fase 6: Post-Mortem (1 semana)

```markdown
## Incidente RUT-LEAK-[FECHA]

### Timeline
- [HH:MM] Detección
- [HH:MM] Contención
- [HH:MM] Resolución

### Root Cause
[Descripción]

### Impacto
- Usuarios afectados: X
- Datos expuestos: [lista]
- Duración de exposición: X horas

### Acciones Correctivas
- [ ] Acción 1
- [ ] Acción 2

### Lecciones Aprendidas
[Descripción]
```

---

## 📞 CONTACTOS DE EMERGENCIA

| Rol | Contacto | Disponibilidad |
|-----|----------|----------------|
| Security Lead | [TBD] | 24/7 |
| CTO | [TBD] | 24/7 |
| Legal | [TBD] | Horario oficina |
| Comunicaciones | [TBD] | Horario oficina |

---

## 📋 SIMULACROS

- **Frecuencia:** Semestral
- **Último simulacro:** [TBD]
- **Próximo simulacro:** [TBD]

---

*Documento generado para cerrar Observación Zeta-1*
