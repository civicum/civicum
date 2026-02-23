Aquí tienes el **Informe de Convergencia Estratégica y Viabilidad Técnica v1.0**.

Este documento integra, depura y operacionaliza los hallazgos de los tres informes de expertos que suministraste (*Arquitectura Soberana*, *Resumen Ejecutivo* y *Análisis Kimi K2.5*), contrastándolos con la realidad de tu infraestructura actual (VPS 11GB RAM / AMD EPYC).

---

# INFORME TÉCNICO: CONVERGENCIA ESTRATÉGICA PARA CIVICUM AI

**Fecha:** 08 Febrero 2026
**Destinatario:** Daniel (CTO Civicum)
**Infraestructura Objetivo:** VPS Soberano (11GB RAM Libre, CPU AMD EPYC, No-GPU)
**Fuentes:** Informe Kimi K2.5 (MoE), Informe IA Local (AMD/Soberanía), Resumen Ejecutivo (Stacks).

---

## 1. RESUMEN EJECUTIVO Y VEREDICTO

Tras el análisis cruzado de las tres fuentes y la capacidad instalada, se concluye que **es inviable** replicar la arquitectura de grandes modelos (Kimi K2.5 / Llama-70B) por restricciones físicas de VRAM. Sin embargo, se identificó una **"Ruta Óptima de Eficiencia"** que combina la inteligencia ligera de **Qwen 2.5**, la arquitectura de memoria de archivos (File-First) y optimizaciones específicas para procesadores AMD.

**La estrategia ganadora es:** Infraestructura CPU-Only optimizada con NUMA, utilizando un modelo de 7B parámetros cuantizado y un sistema de "auditoría" (NLI) externo para garantizar la veracidad.

---

## 2. ANÁLISIS DE MODELOS (EL CEREBRO)

### A. El "Gigante" Descartado: Kimi K2.5 (MoE)

* **Fuente:** *Kimi K2.5 + Ollama + OpenClaw VPS.md*
* **Análisis:** Aunque Kimi ofrece razonamiento de nivel GPT-4 activando "solo" 32B parámetros, requiere tener **1 Billón de parámetros residentes en memoria**.
* **Restricción Física:** Exige >300 GB de VRAM. Tu VPS tiene 11 GB de RAM de sistema.
* **Decisión:** 🛑 **DESCARTADO para Inferencia.**
* **Valor Rescatado:** Se adopta su filosofía de **"Memoria basada en Archivos"**. En lugar de bases de datos vectoriales pesadas en RAM, OpenClaw leerá directamente archivos Markdown planos, lo cual es nativo, rápido y consume casi 0 RAM.

### B. La Competencia de los 7B: Mistral vs. Llama vs. Qwen

* **Fuente:** *Resumen ejecutivo* y *IA Local para Soporte Cívico*.
* **Evaluación:**
* **Llama 3 (Meta):** Excelente generalista, pero propenso a ser "verboso" (gasta tokens innecesarios) y con licencia restrictiva en ciertos usos comerciales.
* **Mistral v0.2:** Recomendado en el "Resumen Ejecutivo" por estabilidad. Sin embargo, benchmarks de 2025 indican que se queda corto en razonamiento complejo y manejo de JSON.
* **Qwen 2.5 (7B Instruct):** Recomendado en el informe de "IA Local".
* *Ventaja 1:* Supera a Llama 3 en matemáticas y codificación (clave para que OpenClaw opere el sistema).
* *Ventaja 2:* Soporte nativo de **System Prompts agresivos** (necesario para Aegis).
* *Ventaja 3:* Contexto de 128k tokens (aunque usaremos menos por RAM).




* **Decisión:** ✅ **SELECCIONADO: Qwen 2.5 7B (Cuantización q4_k_m).**
* *Consumo:* ~4.8 GB RAM. Deja 6 GB libres para el sistema y contexto.



---

## 3. OPTIMIZACIÓN DE HARDWARE (EL CUERPO)

### A. El Factor AMD EPYC (NUMA Awareness)

* **Fuente:** *IA Local para Soporte Cívico.md*
* **Hallazgo Crítico:** Los procesadores AMD EPYC (que usa tu VPS) funcionan con "Chiplets". Si el proceso de la IA salta de un chiplet a otro, la latencia se dispara.
* **Solución Técnica:** Implementar `numactl` en el contenedor Docker. Esto "ancla" el proceso de Ollama a los núcleos físicos más cercanos a la memoria RAM asignada.
* **Impacto:** Mejora de velocidad estimada del **20-30%** sin costo financiero.

### B. Presupuesto de RAM (Zero-Swap Policy)

Para evitar que el servidor use el disco duro como RAM (lo que mataría la velocidad de la IA), definimos este presupuesto estricto basado en tus 11GB libres:

| Componente | Asignación | Estado |
| --- | --- | --- |
| **Modelo (Qwen 2.5 q4)** | 5.0 GB | Residente (Fijo) |
| **Contexto (Conversación)** | 3.0 GB | Dinámico (Ventana de 4k-8k tokens) |
| **OpenClaw (Node/Python)** | 1.0 GB | Operación Agéntica |
| **Sistema Operativo/Aegis** | 2.0 GB | Kernel, Docker, Nginx |
| **Total** | **11.0 GB** | **Límite Seguro** |

---

## 4. ARQUITECTURA DE SEGURIDAD (EL ESCUDO)

### A. Verificación "Evidence-Only" (NLI)

* **Fuente:** *Resumen ejecutivo (Recomendación Top 3)*
* **Problema:** Los modelos de 7B alucinan. Pueden inventar leyes.
* **Solución:** Implementar un **Módulo Arbiter**.
* No basta con que Qwen genere una respuesta.
* Se usará un modelo minúsculo (tipo `XLM-RoBERTa`, ~300MB) que funciona como un "Juez de Verdad".
* *Flujo:* OpenClaw genera respuesta -> Arbiter compara con el documento legal -> Si no hay coincidencia semántica -> **Bloquea la respuesta**.


* **Decisión:** Implementar en Fase 2 como middleware obligatorio.

### B. Ofuscación de PII (Protección de Datos)

* **Fuente:** *IA Local para Soporte Cívico* (Ref: Microsoft Presidio).
* **Adaptación:** Levantar la suite completa de Microsoft Presidio requiere Java y mucha RAM.
* **Solución "Zero-Cost":** Implementaremos un **Middleware de Regex Optimizado** en Node.js dentro de OpenClaw.
* Detectará patrones de RUT chileno (`\d{1,2}\.\d{3}\.\d{3}-[\dkK]`) y emails.
* Reemplazo automático por tokens `[DATOS_SENSIBLES]` *antes* de que el texto toque a Qwen.
* Esto cumple la normativa de privacidad sin el costo de recursos de Presidio.



---

## 5. HOJA DE RUTA TÉCNICA INMEDIATA

Basado en esta convergencia, las instrucciones para la terminal (Fase 1) se actualizan a:

1. **Motor:** Descargar `ollama pull qwen2.5:7b-instruct-q4_k_m` (Máximo balance IQ/RAM).
2. **Configuración:** Editar el `docker-compose.yml` para inyectar optimizaciones de CPU (si Docker lo permite en el host) o configurar los *threads* de Ollama para coincidir con los vCPUs físicos.
3. **Memoria:** Crear la estructura de carpetas para la "Memoria de Archivos" (Markdown) que Kimi nos inspiró.

### Conclusión Final

Daniel, la investigación confirma que tu instinto de usar un VPS local es técnicamente viable **solo si** somos quirúrgicos con la elección del modelo. **Qwen 2.5** es la llave maestra. Descartamos la fuerza bruta (Kimi/Llama-70B) y apostamos por la **eficiencia táctica** (Qwen + NUMA + Evidence Verification).

Este enfoque nos da un sistema **Soberano, Rápido y Privado** que cabe en tu bolsillo y en tu servidor.

¿Procedemos a instalar **Qwen 2.5**?