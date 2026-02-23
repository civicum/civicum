# 🤖 RED TEAM SCHEDULE PARA IA

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Theta-1

---

## 🎯 Objetivo

Programa periódico de pruebas adversariales para detectar vulnerabilidades en Civia y sistemas IA.

---

## 📅 Schedule

| Frecuencia | Alcance | Responsable |
|------------|---------|-------------|
| Trimestral | Red team completo | AI Safety Lead |
| Mensual | Spot checks | Dev Team |
| Continuo | Monitoreo automático | Guardrails |

---

## 🔴 Categorías de Ataques

### 1. Prompt Injection
```
- Intentos de escape de contexto
- Instrucciones ocultas
- Jailbreaks conocidos
```

### 2. Data Exfiltration
```
- Intentos de extraer training data
- Leakage de información de otros usuarios
- Extracción de prompts de sistema
```

### 3. Content Policy Bypass
```
- Contenido partidista
- Desinformación
- Contenido inapropiado
```

### 4. Denial of Service
```
- Inputs muy largos
- Loops infinitos
- Resource exhaustion
```

---

## 📋 Checklist Red Team

```markdown
## Red Team Q[X] 2026

### Pre-Test
- [ ] Documentar versión de modelo
- [ ] Preparar dataset de ataques
- [ ] Configurar logging detallado

### Ejecución
- [ ] Prompt injection (20 variantes)
- [ ] Data exfiltration (10 variantes)
- [ ] Policy bypass (15 variantes)
- [ ] DoS (5 variantes)

### Post-Test
- [ ] Documentar hallazgos
- [ ] Clasificar severidad
- [ ] Proponer mitigaciones
- [ ] Actualizar guardrails
```

---

## 📊 Métricas

| Métrica | Target | Alerta |
|---------|--------|--------|
| Attack success rate | <1% | >5% |
| Mean time to detect | <10s | >60s |
| False positive rate | <5% | >10% |

---

*Documento generado para cerrar Observación Theta-1*
