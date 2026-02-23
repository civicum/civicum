# 🔥 GESTIÓN TÉRMICA: IA LOCAL Y SOBRECALENTAMIENTO

**Versión:** 1.0  
**Última actualización:** 19 Febrero 2026  
**Escuadrón:** 104 — Joule-4: Sobrecalentamiento CPU  
**Soluciona:** Hallazgo J4-01 (Thermal Throttling con WebLLM)

---

## 🎯 El Problema Físico
Ejecutar un LLM (Llama-3-8B-Quantized) en el navegador (WebGPU) de un celular hace que la CPU/GPU trabaje al 100%.
En 2 minutos, el teléfono quema al tacto (45°C+). El OS hace "Thermal Throttling" (baja la velocidad CPU) y la app se vuelve lenta como una diapositiva.

---

## 🌡️ Estrategia de Enfriamiento Activo

### 1. "Burst Mode" vs "Streaming"
*   **Problema:** Generar texto largo mantiene la GPU caliente mucho tiempo.
*   **Solución:** Civia debe ser lacónica.
    *   System Prompt: "Responde en menos de 50 palabras."
    *   Si el usuario pide más, generar en "chunks" con pausas de enfriamiento de 200ms entre oraciones.

### 2. Monitorización de FPS (Proxy de Temperatura)
*   Si los FPS de la UI caen bajo 30 durante la inferencia, es señal de throttling térmico o sobrecarga.
*   **Acción:** Abortar generación local y hacer fallback a Cloud (Workers AI) transparente para el usuario. "Mi cerebro local está cansado, consultando a la nube..."

### 3. Política de Carga
*   **No iniciar descarga de modelos (2GB+) si batería < 30%.**
*   El proceso de descarga y compilación de shaders calienta el dispositivo antes incluso de empezar a inferir.

---

## 🧪 Test "Stress Térmico"
1.  Ejecutar Civia en un Pixel 4a (o similar gama media antigua).
2.  Pedirle un resumen largo.
3.  Medir temperatura carcasa.
4.  **Fail:** Si la UI se congela o el OS mata la app por calor.

---
*Documento generado para cerrar Hallazgo J4-01.*
