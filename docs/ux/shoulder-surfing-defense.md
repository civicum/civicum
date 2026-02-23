# Shoulder Surfing Defense (Squad 266)

**Área:** Seguridad Operativa & UX en Espacios Públicos
**Riesgo Detectado:** El usuario reporta temas sensibles (violencia vecinal, narcotráfico) en entornos hacinados o expuestos (Metro a las 18:00 hrs). Personas alrededor (*Shoulder Surfers*) pueden leer fácilmente la pantalla desde ángulos periféricos.

## 1. Arquitectura "Dark Mode por Supervivencia"

El sistema de diseño Terracota incorpora el **"Modo Cortina" (Privacy Screen UI)**, activable desde el menú o al escribir inputs clasificados como "Riesgo Alto".

### A. Tipografía Segura e Irreconocible
- **Fuentes Condensadas:** Cuando se activan reportes anónimos sensibles, las fuentes de los inputs reducen su tracking (espacio entre letras) y utilizan una variante *Monospace Condensed*.
- **Desvanecimiento de Input (Ghost Text):** El texto introducido en reportes oscuros desaparece gradualmente en degradado o se transforma en *"X"* luego de 3 segundos de inactividad, obligando al usuario a borrar o seguir escribiendo.

### B. Contraste Táctico
- Mientras la accesibilidad normal exige alto contraste, el **"Modo Metro"** invierte el paradigma: reduce el contraste del texto descriptivo al mínimo legible permitido (ej: Gris #888 sobre fondo #111) para que sea invisible a más de 60 centímetros o desde ángulos laterales superiores a 30 grados.

## 2. El "Modo Pánico" Gestual

Para protección extrema:
- Un "Shake" (agitar el teléfono levemente), voltear el teléfono hacia abajo, o hacer "Swipe" rápido a la barra superior debe **ocultar inmediatamente el flujo activo** y sobreponer la pantalla del "Módulo Academia" o "Clima" (Falso Frente).

*El objetivo sociotécnico es proteger la integridad física de los informantes (Whistleblowers) en áreas sin control del Estado.*
