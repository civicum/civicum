# 🔥 PROTOCOLO DE GESTIÓN DE IRA CIUDADANA

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 51 — Psi-Alpha: La Ira Ciudadana  
**Soluciona:** PsiA-1, PsiA-2

---

## 🎯 Problema

El usuario furioso llega con frustración legítima contra el sistema. CIVICUM debe canalizar esa energía (catarsis con límites) sin:
- Censurar la frustración legítima
- Permitir abuso/acoso
- Perder al usuario valioso

---

## 🔴 HALLAZGO PsiA-1: Sin Protocolo de Desescalamiento en Tiempo Real

**Problema:** La moderación detecta insultos (capa 1 IA + capa 2 humana) pero no hay un flujo de desescalamiento que transforme la ira en acción constructiva.

**Solución: Flujo "Canal de Frustración"**

```
ACCIÓN DEL USUARIO → REPORTE EMOCIONAL

[1] Detector de tono (WebLLM local):
    - Clasifica: frustración | ira | insulto | amenaza
    
[2] Si ira sin insulto:
    → Microcopy empático: "Entendemos tu rabia. ¿Quieres convertir 
       esto en un reporte concreto?"
    → Ofrecer plantilla guiada: ¿Qué pasó? → ¿Dónde? → ¿A quién afecta?
    → Transformar emoción → evidencia accionable
    
[3] Si insulto sin amenaza:
    → Soft-block: textarea se bloquea 10 seg
    → Microcopy: "Tu frustración es válida. Solo te pedimos 
       quitar las palabras que atacan a personas. El resto queda." 
    → Autoeditar: ofrecer versión filtrada para revisar
    → Registrar intento (sin PII) para métricas de moderación
    
[4] Si amenaza:
    → Bloqueo inmediato + log para Rol 56 (Moderación)
    → Aviso: "Contenido bloqueado. Si necesitas apoyo: 131 / 149"
    → NO desactivar cuenta (first offense = warning)

[5] Si reincidencia (3+ soft-blocks en 24h):
    → Cool-down 2h: "Te sugerimos un descanso. Puedes volver en 2h."
    → Notificación Rol 59 (Justicia Restaurativa)
```

---

## 🟠 HALLAZGO PsiA-2: Sin Canalización de Energía Post-Frustración

**Problema:** El usuario que logra pasar la moderación no tiene un canal constructivo para su energía.

**Solución: Embudo "De la Rabia a la Acción"**

| Fase | Acción | Microcopy |
|------|--------|-----------|
| 1. Validar | Reconocer emoción | "Es legítimo estar enojado por esto" |
| 2. Focalizar | Guiar hacia reporte | "¿Qué problema concreto quieres reportar?" |
| 3. Empoderar | Mostrar impacto | "Reportes como el tuyo ya lograron [X] en tu comuna" |
| 4. Conectar | Vincular con comunidad | "47 personas de tu comuna sienten lo mismo" |
| 5. Canalizar | Ofrecer acciones | "Apoya, comparte, o crea un Círculo de Acción" |

**Chileanismos permitidos en catarsis (Rol 13):**
- ✅ "La plata se la pitean", "son puros sinvergüenzas", "esto da rabia"
- ❌ Ataques personales con nombre, amenazas, discriminación

**Métricas:**
| KPI | Definición | Target |
|-----|-----------|--------|
| Conversión rabia→reporte | % usuarios que de soft-block pasan a crear reporte | >25% |
| Cool-down recovery | % usuarios que vuelven después de cool-down | >60% |
| Escalamiento a moderación humana | % que requiere capa 2 | <15% |

---

*Documento generado para Escuadrón 51 Psi-Alpha. Resolución PsiA-1 + PsiA-2.*
