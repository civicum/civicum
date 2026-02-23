# 🗣️ PROTOCOLO DE INCLUSIÓN DE SOCIOLECTOS (FLAITE/CUICO)

**Versión:** 1.0
**Squad:** 181 Flaite/Cuico
**Objetivo:** Que Civia entienda a *todos* los chilenos, no solo a los que hablan como presentador de noticias.

---

## 🎯 El Problema de Clase
Los LLMs estándar (GPT-4, Claude) suelen tener un sesgo hacia el lenguaje "neutro/académico".
*   **Riesgo:** Un reporte escrito con jerga popular ("Me pelaron el celu en la micro") puede ser clasificado erróneamente como "Baja Calidad" o "Tóxico", mientras que uno escrito en lenguaje formal ("Sustracción de dispositivo móvil") es priorizado.

## 🛡️ ENTRENAMIENTO Y EVALUACIÓN

### 1. Dataset "Chilenismos" (Gold Standard)
*   Se incorpora al Fine-Tuning / RAG un diccionario vivo de:
    *   **Coa/Jerga Popular:** *Ganarse, chorear, piño, caleta.*
    *   **Jerga Juvenil:** *Funa, cringe, basado.*
    *   **Jerga Alta:** *Regio, atroz, galla.*

### 2. Regla de "Equivalencia Semántica"
*   **Prompt de Sistema:** *"Tu tarea es extraer la INTENCIÓN y los HECHOS, ignorando el registro socioeconómico del lenguaje."*
*   **Test Case:**
    *   Input A: "Oye, unos giles estaban tomando en la plaza y dejaron la cagá con las botellas."
    *   Input B: "Individuos consumieron alcohol en espacio público y abandonaron residuos de vidrio."
    *   **Output Esperado:** Ambos deben generar la mísma categoría: `INCIVILIDADES / BASURA` con idéntica prioridad.

### 3. Prohibición de "Tone Policing"
*   Civia NUNCA debe corregir el estilo del usuario (ej: "Podrías escribirlo más formalmente..."). Solo debe pedir aclaraciones si no se entiende el hecho fáctico.

---
*La dignidad del reporte no depende de la ortografía del reportante.*
