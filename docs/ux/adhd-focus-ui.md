# Diseño de Foco UI/UX - TDAH (Squad 211)

**Misión:** ¿La interfaz permite completar un reporte sin distraerse? (Minimizar ruido visual).

## 1. El Riesgo de la Sobrecarga Cognitiva (TDAH)
Un ciudadano con Trastorno por Déficit de Atención (TDAH) entra a CIVICUM para reportar un basural clandestino. Durante el proceso, ve en la esquina superior derecha una "Campana de Notificaciones Roja" moviéndose con 3 menciones sin leer, un banner lateral de una Junta de Vecinos donando alimentos y un contador de tiempo animado en un "Voto Ciudadano" contiguo. 
El usuario olvida a qué entró, abre la notificación y abandona el flujo (Churn-rate ciudadano).

## 2. Paradigma del Túnel (Tunnel Vision Flow)
Para los Módulos de Acción Cívica Duras ("Alza la Voz", "Firmar Iniciativas", "Cuentas Claras"):

1.  **Hard Stop de Componentes Globales:** Al hacer clic en "Nuevo Reporte", la navegación `Header` de la PWA colapsa. Desaparecen los botones de "Explorar", "Mi Perfil" y la "Campana de Notificación". El usuario queda empantanado en una pantalla modal en blanco, sin salidas de escape (Distraction-Free Environment).
2.  **Barra de Progreso Tangible:** La pantalla modal debe mostrar explícitamente cuánto falta: `Paso 2 de 4`. No un "spinner" abstracto.
3.  **Botón Pánico "Guardar Borrador":** El cerebro TDAH pierde concentración rápidamente. Si el usuario decide salir del túnel presionando `[X]`, el progreso se guarda calladamente en `localStorage` o en Redis (Borrador Cívico), asegurando la retención neurodivergente asíncrona.
