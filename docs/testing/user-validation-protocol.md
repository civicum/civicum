# 🧪 PROTOCOLO DE VALIDACIÓN CON USUARIOS REALES (S1-S6)

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 100 — Omega-Final: La Verdad del Usuario  
**Soluciona:** Hallazgo UX-FINAL (Falta de Validación Real)

---

## 🎯 Objetivo
La prueba de fuego. No importa si el código compila si el usuario no entiende para qué sirve.
Validaremos con 6 arquetipos extremos (S1-S6) para cubrir el espectro completo de la ciudadanía chilena.

---

## 👥 Arquetipos de Prueba (Sujetos S1-S6)

| ID | Perfil | Desafío Crítico | Resultado Esperado |
|----|--------|-----------------|--------------------|
| **S1** | **Joven Activista (19)** | Desconfianza institucional ("esto es brígido"). | ✅ Percibe honestidad y control de datos. |
| **S2** | **Señora Juanita (65)** | Brecha digital, visión, confianza en "la tele". | ✅ Logra votar sin ayuda (>10 mins). |
| **S3** | **Vecino Apolítico (40)** | "No me interesa la política, solo mi vereda". | ✅ Encuentra utilidad práctica inmediata. |
| **S4** | **Líder Vecinal (55)** | Miedo a perder poder ("cacicazgo"). | ✅ Ve la herramienta como aliado, no amenaza. |
| **S5** | **Hacker Ético (25)** | Intentará romper el sistema (XSS, SQLi). | ✅ No encuentra vulnerabilidades críticas. |
| **S6** | **Funcionario Municipal (45)** | Burocracia, resistencia al cambio. | ✅ Entiende cómo procesar los reportes. |

---

## 📝 Guión de Prueba (Script)

**Tarea 1: Onboarding y Confianza**
*   "Entra a civicum.cl. ¿Qué es esto? ¿Para qué sirve? ¿Quién lo paga?"
*   *Métrica:* Tiempo hasta "Ajá moment" (Entendimiento).

**Tarea 2: Voto Simbólico**
*   "Busca un tema que te importe y vota."
*   *Métrica:* Tasa de éxito sin errores.

**Tarea 3: Reporte Local**
*   "Reporta un problema en tu calle."
*   *Métrica:* Calidad del reporte generado (fotos, ubicación).

**Tarea 4: "La Pregunta Difícil"**
*   "¿Crees que esto sirve de algo?"
*   *Métrica:* Nivel de cinismo vs esperanza (Escala 1-5).

---

## 📊 Criterio de Éxito Global
*   **Aprobación:** 5/6 usuarios completan el flujo principal.
*   **Net Promoter Score (NPS):** > 50 (Excelente).
*   **Sentimiento:** "Por fin alguien hace algo serio" vs "Otra app más del gobierno".

---
*Documento generado para cerrar Hallazgo UX-FINAL.*
