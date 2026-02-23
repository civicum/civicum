# Protocolo de Prevención de Sobrecalentamiento CPU (Squad Joule-4)

**Squad:** 104. Escuadrón Joule-4: Sobrecalentamiento CPU  
**Misión:** ¿El uso intensivo de Civia (WebLLM) calienta el dispositivo peligrosamente?  
**Responsables:** Performance, Low-end, AI PM, Riesgos.

## 1. El Semáforo Térmico
Civicum monitorea la temperatura de la batería (vía API del sistema si disponible) o la frecuencia de cuadros (FPS drop como proxy de thermal throttling).
- **Verde (<35°C):** Civia funciona a máxima capacidad (Modelo local 7B).
- **Amarillo (35-40°C):** Se reduce la longitud de respuesta máxima de la IA a 50 tokens.
- **Rojo (>40°C):** Se apaga el modelo local y se fuerza el modo "API Remota" (Server-side) o se desactiva la IA temporalmente.

## 2. "Cooldown" Obligatorio
- Si el usuario lleva 10 minutos conversando ininterrumpidamente con la IA local en un dispositivo de gama media, la app sugiere una pausa: "Mi procesador neuronal necesita un descanso. ¿Seguimos en 5 minutos?".
- Previene daños físicos a la batería de litio por calor sostenido.

## 3. WebGL/WebGPU Eficiente
- En el renderizado de mapas 3D o shaders, limitamos los FPS a 30 en menús estáticos. No hay razón para renderizar un formulario administrativo a 120 FPS quemando GPU.

*La app debe ser "cool" en estilo, y "cool" en temperatura.*
