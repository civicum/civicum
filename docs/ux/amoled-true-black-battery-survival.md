# Modo Oscuro Real y Preservación de Batería (Squad 308)

**Misión:** Los vecinos sin electricidad por 5 días en invierno necesitan abrir CIVICUM. El celular debe sobrevivir.

## 1. El Riesgo de la Falacia Gris "Slate-900" 
Durante la Tormenta de Agosto en Chile ("Corte de Luz Enel"), docenas de comunas pasaron 7 días sin electricidad en la casa. Las baterías de los celulares eran los únicos salvavidas vivos de información para pedir agua o organizar barricadas en la plataforma de CIVICUM.  
El equipo de Diseño UX, para "Hacerlo más elegante" como Twitter Blue o Apple, usa de fondo la Paleta Tailwind `bg-slate-900` (Un color carbón azulado hermosísimo). Eso en pantallas OLED (de casi todos los celulares modernos), obliga a la pantalla a ENCENDER la retroluminiscencia levemente para teñir ese gris. La App se devoró la poca reserva de Batería Cívica por pura arrogancia visual de contrastes bellos.

## 2. Purgatorio Visual del Negro Total Absoluto (Zero-Volt Hex)
Cuando se cae la energía nacional, la estética muere. Nace el pragmatismo eléctrico.

1.  **Tailwind Absolute Black (`#000000`) Default:** A nivel de configuración Global del Repositorio `tailwind.config.ts`, la variable Principal de Fondo de todo el Dark Mode se setea sin negociaciones en Hex `#000000` absoluto. En las matrices AMOLED y OLED contemporáneas, el Hexadecimal Cero le indica físicamente a la tarjeta de video del Celular "Apagar la energía Diodo del Pixel al 100% (No emite nada)". Un `75%` de la pantalla de CIVICUM reportando una queja estará materialmente ahogada y "apagada" en el espacio negro, prolongando horas enteras vitales de comunicación cívica marginales.
2.  **Modo de Supervivencia Energético (Low-Bat Trigger):** El Front-End Web/App en React lee el `navigator.getBattery() API`. Si el vecino se desploma bajo el `15% de Batería Libre` en apagón, CIVICUM apaga todas las fotos JPG (Las vuelve placeholders grises textuales en bruto de `<alt tag>`), silencia videos MP4 incrustados, y convierte letras grices bonitas predeterminadas a Blanco Absoluto en Alto Contraste `#FFFFFF` forzando un ahorro colosal de transistores de renderizado y CPU del DOM. 
3.  **Soporte Contrast ratio (Accesibilidad Dual):** Se superan las regulaciones WCAG de la W3C garantizando el uso de contrastes que también permitan lectura a personas con Astigmatismo Forzado bajo el deslumbre de una linterna lateral nocturna o faroles (Texto Blanco Absoluto Vivo vs Fondo Muerto). CIVICUM se vuelve el Búnker Nocturno oficial en tragedias nacionales sudamericanas.
