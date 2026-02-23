# Protocolo de Prevención de Quemado de Pantalla (OLED Burn-in) (Squad Joule-2)

**Squad:** 102. Escuadrón Joule-2: Quemadura de Pantalla (OLED Burn-in)  
**Misión:** ¿El modo oscuro o elementos fijos dañan pantallas baratas con uso prolongado?  
**Responsables:** UI Visual, Low-end, Accesibilidad, Frontend.

## 1. El Enemigo es el Blanco Puro (#FFFFFF)
En pantallas OLED baratas, el blanco al 100% de brillo quema los subpíxeles azules rápidamente.
- **Regla:** Usamos gris muy claro (`#F0F0F0`) o blanco al 90% de opacidad para textos largos. Nunca blanco puro sobre fondo negro puro en elementos estáticos (como la barra de navegación).

## 2. Pixel Shifting Imperceptible
- **Técnica:** Los elementos fijos de la UI (Barra de navegación, Botón central "+") se mueven sutilmente 1 o 2 píxeles cada 5 minutos.
- El ojo humano no lo nota, pero evita que el mismo píxel esté encendido en el mismo color por horas si el usuario deja la app abierta.

## 3. "Toast" vs Modales Fijos
- Preferimos notificaciones transitorias ("Toast") que desaparecen en 3 segundos, en lugar de banners fijos que quedan pegados en la pantalla esperando interacción, reduciendo el riesgo de retención de imagen.

*Cuidamos el hardware del usuario como si fuera nuestro.*
