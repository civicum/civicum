# 🛡️ POLÍTICA DE MODERACIÓN Y CONFIANZA

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Pi-1, Pi-2

---

## 🎯 Objetivo

Consolidar el pipeline de moderación de 4 capas en un documento auditable con matriz de escalamiento, proceso de apelación, y métricas de moderación.

---

## 🔄 Pipeline de Moderación (4 Capas)

### Capa 1: Filtro Rápido Client-Side
| Aspecto | Detalle |
|---------|---------|
| **Motor** | Regex lista negra |
| **Latencia** | <5ms |
| **Acción** | Bloqueo + sugerencia reformulación |
| **Ref** | Capacidades §2.3 Capa 1 |

### Capa 2: Toxicidad ML Client-Side
| Aspecto | Detalle |
|---------|---------|
| **Motor** | TensorFlow.js toxicity-classifier (~2MB) |
| **Clasificación** | odio, violencia, acoso, insultos, sexual |
| **Umbral** | >0.85 toxicidad → warning pre-envío |
| **Privacidad** | 100% en dispositivo, texto nunca sale del browser |
| **Ref** | Arquitectura §1.4.2, Capacidades §2.3 Capa 2 |

### Capa 3: Moderación Comunitaria
| Aspecto | Detalle |
|---------|---------|
| **Quién** | Usuarios Nivel 3+ (Karma verificado) |
| **Trigger** | 3+ reportes de usuarios distintos |
| **Acción** | Cola de revisión → ocultamiento temporal |
| **Ref** | Originalidad §13.2.8 |

### Capa 4: Moderación Humana
| Aspecto | Detalle |
|---------|---------|
| **Quién** | Equipo CIVICUM (Rol 56 Moderation Policy) |
| **Casos** | Complejos, apelaciones, contenido sensible |
| **SLA** | Revisión en <4h (horario laboral) |
| **Ref** | Originalidad §13.2.8, Capacidades §2.3 |

---

## 📊 Matriz de Escalamiento (Saneamiento Pi-1)

| Tipo de Contenido | Capa 1 | Capa 2 | Capa 3 | Capa 4 |
|---|---|---|---|---|
| Insultos directos | ✅ Bloqueo | — | — | — |
| Toxicidad sutil | — | ✅ Warning | — | — |
| Spam/duplicados | ✅ Auto-detect | — | — | — |
| Discurso de odio | ✅ Bloqueo | ✅ Score | — | ✅ Revisión |
| Contenido político sesgado | — | — | ✅ Reportes | ✅ Evaluación F-05 |
| Amenazas | ✅ Bloqueo | ✅ Alerta | — | ✅ Denuncia legal |
| Doxxing | ✅ Detect PII | — | — | ✅ Eliminación + ban |
| Desinformación | — | — | ✅ Fact-check comunitario | ✅ Rol 45 Fact-checker |

### Acciones por Severidad

| Severidad | Acción | Automatismo |
|-----------|--------|-------------|
| 🟢 Leve | Warning educativo ("Tarjeta Amarilla") | Auto |
| 🟡 Moderada | Ocultamiento temporal + warning | Auto + revisión |
| 🟠 Alta | Suspensión 24h + notificación | Humana |
| 🔴 Crítica | Ban permanente + denuncia si aplica | Humana + legal |

---

## 📋 Proceso de Apelación (Saneamiento Pi-2)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Usuario     │────▶│  Apelación   │────▶│  Revisor     │────▶│  Resolución  │
│  sancionado  │     │  (in-app)    │     │  diferente   │     │  + log       │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
     Acción                Día 0             Día 1-3              Día 3-5
```

| Paso | Detalle |
|------|---------|
| 1. Notificación | Usuario recibe razón + evidencia + link de apelación |
| 2. Apelación | Formulario con contexto + argumento (máx 500 chars) |
| 3. Revisión | Moderador DIFERENTE al que sancionó (no el mismo) |
| 4. Resolución | Confirmar / revocar / reducir sanción |
| 5. Registro | Log en `moderation_audit_log` (100% trazable) |

### 🕊️ Camino de Rehabilitación (Justicia Restaurativa)
*Para usuarios baneados que deseen reintegrarse (Squad 146)*

| Paso | Acción | Condición |
|---|---|---|
| 1. Cooling Off | Espera obligatoria | 30 días post-ban |
| 2. Educación | Completar módulo "Convivencia Digital" | Nota 100% en quiz |
| 3. Compromiso | Firmar "Acuerdo de No-Repetición" | Firma digital |
| 4. Probation | Periodo de prueba (Nivel 0) | 90 días sin incidentes |
| 5. Restauración | Recuperación de Nivel 1 | Automático post-probation |

### Transparencia

- Todas las acciones de moderación tienen razón visible
- Logs de moderación accesibles por usuario (sus propios casos)
- Dashboard público con métricas agregadas (nunca individuales)
- F-21 (Guardianes): Moderación SIEMPRE visible, nunca secreta

---

## 📈 Métricas

| Métrica | Target | Frecuencia |
|---------|--------|------------|
| Contenido tóxico pre-filtrado | >90% | Mensual |
| Tiempo medio resolución apelación | <48h | Semanal |
| False positives rate | <5% | Mensual |
| Transparencia (razón visible) | 100% | Continuo |

---

*Documento generado para cerrar Observaciones Pi-1 y Pi-2*
