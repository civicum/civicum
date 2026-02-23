# Resguardo Mental del Moderador (Squad 221)

**Misión:** Protocolos de salud mental para quienes revisan contenido tóxico diariamente.

## 1. El Riesgo de Estrés Post Traumático (PTSD Comercial)
Un error fundamental de plataformas sociales es delegar el descarte de material espeluznante (porno de venganza, crueldad animal, violencia narco urbana) a moderadores mal pagados o voluntarios ("Limpiadores de la Basura Digital"). Exponer sostenidamente al equipo de Trust & Safety a este flujo produce Burnout inmediato y trauma psicológico secundario.

## 2. Abstracción Perceptual y Límites Físicos
El humano es la última línea de defensa, la IA la primera. Toda imagen entra ciega al sistema.

1.  **Detección Pre-Empañado (Blur-by-Default):** Todas las fotografías o videos denunciados entran al panel de moderación ocultos bajo un filtro CSS agresivo (`backdrop-filter: blur(20px) grayscale(100%)`).
2.  **Pre-Clasificación Google Vision / AWS Rekognition:** Antes de que el humano vea el adjunto, una API de visión por computador le asigna un Semáforo: `Sangre detectada 95%`, `Nudismo 90%`.
3.  **Flujo Selectivo:** Si el algoritmo detecta "Severidad Extrema" (ej: Gore), la imagen se elimina *automáticamente* de la plataforma pública sin revisión humana (solo un robot procesó el horror). Si es borde legal (Borderline), el moderador lee la advertencia de la IA antes de cliquear "Revelar Imagen".
4.  **Shift Limits (Cooldown Operativo):** La interfaz de Backoffice rastrea el tiempo. Un rol Moderador 55 tiene cronometradas 4 horas máximas de revisión de la bandeja (T&S Queue) por día. Al llegar a la cuota, el panel se bloquea y lo redirige a tareas pro-sociales (Responder DMs amables).
