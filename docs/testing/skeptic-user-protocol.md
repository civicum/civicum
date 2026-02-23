# 🤨 PROTOCOLO DE TESTING CON USUARIO ESCÉPTICO

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación G2-1

---

## 🎯 Objetivo

Protocolo para simular y testear con el perfil de usuario que NO confía en nada: ni en plataformas, ni en gobierno, ni en tecnología. Si Civicum convence al escéptico, convence a cualquiera.

---

## 👤 Perfil del Usuario Escéptico (Persona H1)

| Atributo | Valor |
|----------|-------|
| **Nombre** | "El Tomás" (persona ficticia) |
| **Edad** | 35-55 años |
| **Contexto** | Post-estallido social, desilusión total |
| **Confianza en instituciones** | <5% |
| **Confianza en apps** | Baja ("pa qué si no sirve de nada") |
| **Motivación** | Solo si ve prueba INMEDIATA de valor |
| **Objeciones típicas** | "¿Quién está detrás?", "¿Van a vender mis datos?", "¿Y esto realmente cambia algo?" |

---

## 📋 Escenarios de Testing

### Test G2-T01: Primera Impresión (<30 segundos)
| Paso | Expectativa |
|------|------------|
| Abrir civicum.cl | ¿Queda claro en 5s qué es? |
| Leer hero section | ¿Credibilidad inmediata sin jerga? |
| Buscar "quién está detrás" | ¿Footer/About accesible y transparente? |
| **Criterio éxito** | Escéptico NO cierra en <30s |

### Test G2-T02: Transparencia de Datos (<2 min)
| Paso | Expectativa |
|------|------------|
| Buscar política de privacidad | ¿Accesible sin registro? |
| Leer qué datos se piden | ¿Mínimos y justificados? |
| Verificar "no vender datos" | ¿Declaración explícita visible? |
| **Criterio éxito** | F-02 Honestidad Radical perceptible |

### Test G2-T03: Valor Sin Registro (<5 min)
| Paso | Expectativa |
|------|------------|
| Navegar módulos informativos | ¿Se puede ver contenido sin login? |
| Ver perfil de autoridad | ¿Datos reales, no promesas? |
| Consultar presupuesto | ¿Fuente visible (DIPRES, etc.)? |
| **Criterio éxito** | Valor demostrado ANTES de pedir registro |

### Test G2-T04: Reacción a Voto Simbólico
| Paso | Expectativa |
|------|------------|
| Encontrar F-02 disclaimer | ¿"Voto simbólico" visible ANTES de votar? |
| Intentar votar | ¿Honesto sobre limitaciones? |
| Post-voto | ¿No exagera impacto? |
| **Criterio éxito** | Sin promesas vacías, escéptico respeta la honestidad |

### Test G2-T05: Abandono y Retorno
| Paso | Expectativa |
|------|------------|
| No volver en 7 días | ¿Sin spam/culpa por no volver? |
| Volver después | ¿Bienvenida sin presión? |
| Eliminar cuenta | ¿Fácil y sin guilt trip? |
| **Criterio éxito** | Rho-1 anti-dark patterns verificado |

---

## 📊 Evaluación

| Dimensión | Score 1-5 | Peso |
|-----------|-----------|------|
| Credibilidad inmediata | _ | 30% |
| Transparencia de datos | _ | 25% |
| Valor sin compromiso | _ | 25% |
| Honestidad sobre limitaciones | _ | 20% |

**Mínimo aceptable:** Promedio ponderado ≥ 3.5/5

---

## 📅 Ejecución

| Acción | Frecuencia | Responsable |
|--------|-----------|-------------|
| Test con usuarios reales escépticos | Trimestral (3-5 usuarios) | Rol 06 (UX Researcher) |
| Revisión de objeciones | Mensual | Rol 04 (Honestidad Radical) |
| Update de persona H1 | Semestral | Rol 13 (Chilenización) |

---

*Documento generado para cerrar Observación G2-1*
