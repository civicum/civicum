

**CIVICUM**  
Sistema Nervioso Cívico de Chile

**ANEXO DE DESIGN SYSTEM TERRACOTA**  
Especificación Visual Exhaustiva para Protección Intelectual

Complemento al documento:  
*CIVICUM\_Documentacion\_Integral\_Proteccion\_Intelectual\_v1.docx*

Versión 1.0 | Enero 2026  
**Estado: APROBADO \- LISTO PARA REGISTRO INAPI**

# **TABLA DE CONTENIDOS**

**1\. PALETA DE COLORES DEFINITIVA**

   1.1 Colores Principales

   1.2 Colores Semánticos

   1.3 Escalas de Color Extendidas

   1.4 Combinaciones y Contrastes

**2\. TIPOGRAFÍA COMPLETA**

   2.1 Familias Tipográficas

   2.2 Escala Tipográfica

   2.3 Pesos y Estilos

   2.4 Especificaciones de Uso

**3\. COMPONENTES ACCESIBLES (WCAG 2.1 AA)**

   3.1 Requisitos de Contraste

   3.2 Navegación por Teclado

   3.3 Lectores de Pantalla

   3.4 Contenido Multimedia Accesible

   3.5 Modos Adaptativos

**4\. ICONOGRAFÍA OFICIAL**

   4.1 Sistema de Iconos

   4.2 Catálogo de 50+ Iconos

   4.3 Especificaciones Técnicas

   4.4 Accesibilidad de Iconos (ARIA)

**5\. COMPONENTES UI**

**6\. RESPONSIVE Y BREAKPOINTS**

**7\. VALIDACIÓN DE COMPLETITUD**

# **1\. PALETA DE COLORES DEFINITIVA**

Decisión F-09 (Coherencia de Marca) establece la paleta Terracota como identidad visual oficial de CIVICUM. Esta sección documenta TODOS los colores con sus especificaciones técnicas completas.

## **1.1 Colores Principales**

**Los 4 colores core que definen la identidad visual de CIVICUM:**

| \#C2503ATERRACOTA | \#264653AZUL PROFUNDO | \#0D7A5FVERDE ESPERANZA | \#2563EBAZUL PROTECCIÓN |
| :---: | :---: | :---: | :---: |

### **1.1.1 Terracota Cívico \- \#C2503A**

| Propiedad | Valor |
| :---- | :---- |
| Código HEX | \#C2503A |
| RGB | rgb(194, 80, 58\) |
| HSL | hsl(10, 54%, 49%) |
| CMYK | C:0 M:59 Y:70 K:24 |
| Contraste vs blanco | 6.23:1 (WCAG AAA) |
| Contraste vs negro | 3.37:1 (WCAG AA texto grande) |
| Uso principal | CTAs primarios, acción, urgencia, energía cívica |
| Uso semántico | Error, crítico, alertas importantes |
| Psicología | Pasión, acción, tierra chilena, calidez ciudadana |

### **1.1.2 Azul Profundo \- \#264653**

| Propiedad | Valor |
| :---- | :---- |
| Código HEX | \#264653 |
| RGB | rgb(38, 70, 83\) |
| HSL | hsl(197, 37%, 24%) |
| CMYK | C:54 M:16 Y:0 K:67 |
| Contraste vs blanco | 10.18:1 (WCAG AAA) |
| Contraste vs Terracota | 2.05:1 |
| Uso principal | Fondos institucionales, headers, navegación |
| Uso semántico | Confianza, estabilidad, institucionalidad |
| Psicología | Seriedad, profundidad, mar chileno, confianza |

### **1.1.3 Verde Esperanza \- \#0D7A5F**

| Propiedad | Valor |
| :---- | :---- |
| Código HEX | \#0D7A5F |
| RGB | rgb(13, 122, 95\) |
| HSL | hsl(165, 81%, 26%) |
| CMYK | C:89 M:0 Y:22 K:52 |
| Contraste vs blanco | 5.34:1 (WCAG AA) |
| Contraste vs negro | 3.92:1 (WCAG AA texto grande) |
| Uso principal | Éxito, progreso, cumplimiento, victorias cívicas |
| Uso semántico | Success states, confirmaciones, progreso positivo |
| Psicología | Esperanza, crecimiento, naturaleza, logro |

### **1.1.4 Azul Protección \- \#2563EB**

| Propiedad | Valor |
| :---- | :---- |
| Código HEX | \#2563EB |
| RGB | rgb(37, 99, 235\) |
| HSL | hsl(221, 83%, 53%) |
| CMYK | C:84 M:58 Y:0 K:8 |
| Contraste vs blanco | 4.54:1 (WCAG AA) |
| Contraste vs negro | 4.62:1 (WCAG AA) |
| Uso principal | Seguridad, privacidad, verificación, enlaces |
| Uso semántico | Información, ayuda, datos protegidos |
| Psicología | Seguridad, tecnología, modernidad, protección |

## **1.2 Colores Semánticos**

Mapeo de colores a significados funcionales en la interfaz:

| Semántica | Color | Código | Uso en UI |
| :---- | :---- | :---- | :---- |
| Éxito | Verde Esperanza | \#0D7A5F | Confirmaciones, completado, progreso positivo |
| Error/Crítico | Terracota | \#C2503A | Errores de validación, alertas críticas, eliminar |
| Advertencia | Ocre Oscuro | \#B56D18 | Warnings, atención requerida, precaución |
| Información | Azul Protección | \#2563EB | Tips, ayuda contextual, enlaces informativos |
| Neutral/Default | Gris 600 | \#4B5563 | Texto secundario, bordes, fondos inactivos |

### **1.2.1 Amarillo Mostaza (Advertencia) \- \#D4872E**

| Propiedad | Valor |
| :---- | :---- |
| Código HEX | \#D4872E |
| RGB | rgb(212, 135, 46\) |
| HSL | hsl(32, 67%, 51%) |
| CMYK | C:0 M:36 Y:78 K:17 |
| Contraste vs blanco | 2.73:1 |
| Contraste vs negro | 7.68:1 (WCAG AAA) |
| Uso | Warnings, deadlines próximos, información importante |
| Nota accesibilidad | Usar siempre con texto oscuro (\#264653 o negro) |

### **1.2.2 Escala de Grises Calibrada (Neutral)**

| Nombre | HEX | RGB | Uso |
| :---- | :---- | :---- | :---- |
| Gris 50 | \#F9FAFB | rgb(249, 250, 251\) | Fondos claros, hover states |
| Gris 100 | \#F3F4F6 | rgb(243, 244, 246\) | Fondos alternos, cards |
| Gris 200 | \#E5E7EB | rgb(229, 231, 235\) | Bordes ligeros, divisores |
| Gris 300 | \#D1D5DB | rgb(209, 213, 219\) | Bordes, inputs deshabilitados |
| Gris 400 | \#9CA3AF | rgb(156, 163, 175\) | Placeholder text, iconos inactivos |
| Gris 500 | \#6B7280 | rgb(107, 114, 128\) | Texto secundario |
| Gris 600 | \#4B5563 | rgb(75, 85, 99\) | Texto body, labels |
| Gris 700 | \#374151 | rgb(55, 65, 81\) | Títulos secundarios |
| Gris 800 | \#1F2937 | rgb(31, 41, 55\) | Texto principal |
| Gris 900 | \#111827 | rgb(17, 24, 39\) | Títulos principales |

## **1.3 Escalas de Color Extendidas**

Cada color principal tiene una escala de 10 tonos para variaciones de UI:

### **1.3.1 Escala Terracota**

| Tono | HEX | Uso | Contraste vs blanco |
| :---- | :---- | :---- | :---- |
| 50 | \#FEF2F0 | Fondos hover, backgrounds sutiles | 1.03:1 |
| 100 | \#FDE3DE | Fondos seleccionados | 1.12:1 |
| 200 | \#FACFC6 | Borders ligeros | 1.32:1 |
| 300 | \#F6A899 | Iconos inactivos | 1.74:1 |
| 400 | \#E8705A | Hover de botones | 3.12:1 |
| 500 (Base) | \#C2503A | Color principal, CTAs | 6.23:1 (AAA) |
| 600 | \#A33D2A | Active state | 8.14:1 |
| 700 | \#842D1D | Texto sobre fondos claros | 10.52:1 |
| 800 | \#6B2418 | Énfasis fuerte | 12.47:1 |
| 900 | \#4D1A11 | Máximo contraste | 15.23:1 |

### **1.3.2 Escala Verde Esperanza**

| Tono | HEX | Uso | Contraste vs blanco |
| :---- | :---- | :---- | :---- |
| 50 | \#ECFDF5 | Success backgrounds | 1.02:1 |
| 100 | \#D1FAE5 | Badges de éxito | 1.14:1 |
| 200 | \#A7F3D0 | Progress bars completados | 1.35:1 |
| 300 | \#6EE7B7 | Iconos de éxito | 1.65:1 |
| 400 | \#34D399 | Hover success | 2.34:1 |
| 500 (Base) | \#0D7A5F | Color principal éxito | 5.34:1 (AA) |
| 600 | \#0A6B53 | Active state éxito | 6.87:1 |
| 700 | \#075E47 | Texto éxito sobre claro | 8.52:1 |
| 800 | \#054D3A | Énfasis éxito | 10.73:1 |
| 900 | \#033D2E | Máximo contraste éxito | 13.21:1 |

## **1.4 Combinaciones y Contrastes**

### **1.4.1 Matriz de Contrastes**

|  | Terracota | Azul Prof. | Verde Esp. | Azul Prot. |
| :---- | :---- | :---- | :---- | :---- |
| Blanco \#FFF | 6.23:1 ✓ | 10.18:1 ✓ | 5.34:1 ✓ | 4.54:1 ✓ |
| Negro \#000 | 3.37:1 | 2.06:1 | 3.92:1 | 4.62:1 ✓ |
| Gris 100 | 5.56:1 ✓ | 9.08:1 ✓ | 4.76:1 ✓ | 4.05:1 |
| Gris 800 | 1.89:1 | 1.64:1 | 1.72:1 | 2.02:1 |

*✓ \= Cumple WCAG AA (4.5:1 para texto normal, 3:1 para texto grande)*

### **1.4.2 Combinaciones Aprobadas**

* Terracota sobre blanco: CTAs primarios, botones de acción  
* Azul Profundo sobre blanco: Headers, navegación, texto institucional  
* Verde Esperanza sobre blanco: Badges de éxito, confirmaciones  
* Azul Protección sobre blanco: Enlaces, información, verificación  
* Blanco sobre Terracota: Texto en botones primarios  
* Blanco sobre Azul Profundo: Texto en headers, navegación  
* Ocre Oscuro con texto Azul Profundo: Warnings (alta legibilidad)

# **2\. TIPOGRAFÍA COMPLETA**

## **2.1 Familias Tipográficas**

### **2.1.1 Nunito Sans \- Títulos y UI**

| Propiedad | Valor |
| :---- | :---- |
| Familia | Nunito Sans |
| Categoría | Sans-serif humanista |
| Licencia | OFL (Open Font License) \- Uso libre |
| Fuente | Google Fonts |
| Pesos disponibles | 200, 300, 400, 500, 600, 700, 800, 900 |
| Pesos usados CIVICUM | 400 (regular), 600 (semibold), 700 (bold) |
| Uso principal | Títulos, headings, navegación, botones, labels |
| Características | Amigable, redondeada, alta legibilidad en pantalla |
| Justificación | Transmite cercanía y accesibilidad, no intimidante |

CSS: font-family: 'Nunito Sans', \-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

### **2.1.2 IBM Plex Sans \- Cuerpo de Texto**

| Propiedad | Valor |
| :---- | :---- |
| Familia | IBM Plex Sans |
| Categoría | Sans-serif grotesca |
| Licencia | OFL (Open Font License) \- Uso libre |
| Fuente | Google Fonts / IBM |
| Pesos disponibles | 100, 200, 300, 400, 500, 600, 700 |
| Pesos usados CIVICUM | 400 (regular), 500 (medium), 600 (semibold) |
| Uso principal | Body text, párrafos, descripciones, contenido extenso |
| Características | Neutral, técnica, excelente legibilidad extendida |
| Justificación | Profesional para contenido cívico serio, no fatigante |

CSS: font-family: 'IBM Plex Sans', \-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

### **2.1.3 IBM Plex Mono \- Código y Datos**

| Propiedad | Valor |
| :---- | :---- |
| Familia | IBM Plex Mono |
| Categoría | Monoespaciada |
| Licencia | OFL (Open Font License) \- Uso libre |
| Fuente | Google Fonts / IBM |
| Pesos disponibles | 100, 200, 300, 400, 500, 600, 700 |
| Pesos usados CIVICUM | 400 (regular), 500 (medium) |
| Uso principal | Datos numéricos, códigos, IDs, fechas, montos |
| Características | Caracteres alineados, distinción clara 0/O, 1/l |
| Justificación | Claridad en datos presupuestarios y técnicos |

CSS: font-family: 'IBM Plex Mono', 'Consolas', 'Monaco', monospace;

## **2.2 Escala Tipográfica**

Escala modular basada en ratio 1.25 (Major Third) para armonía visual:

| Nivel | Tamaño | Line-height | Font-family | Uso |
| :---- | :---- | :---- | :---- | :---- |
| Display | 48px/3rem | 1.1 | Nunito Sans 700 | Heroes, páginas principales |
| H1 | 40px/2.5rem | 1.2 | Nunito Sans 700 | Títulos de página |
| H2 | 32px/2rem | 1.25 | Nunito Sans 600 | Secciones principales |
| H3 | 24px/1.5rem | 1.3 | Nunito Sans 600 | Subsecciones |
| H4 | 20px/1.25rem | 1.35 | Nunito Sans 600 | Títulos de cards |
| H5 | 18px/1.125rem | 1.4 | Nunito Sans 500 | Labels importantes |
| Body Large | 18px/1.125rem | 1.6 | IBM Plex Sans 400 | Texto destacado |
| Body | 16px/1rem | 1.6 | IBM Plex Sans 400 | Texto principal (base) |
| Body Small | 14px/0.875rem | 1.5 | IBM Plex Sans 400 | Texto secundario |
| Caption | 12px/0.75rem | 1.4 | IBM Plex Sans 400 | Captions, hints |
| Overline | 10px/0.625rem | 1.5 | Nunito Sans 600 | Labels uppercase |

## **2.3 Pesos y Estilos**

| Peso | Valor CSS | Nombre | Uso |
| :---- | :---- | :---- | :---- |
| Regular | 400 | font-weight: 400 | Body text, párrafos |
| Medium | 500 | font-weight: 500 | Labels, énfasis sutil |
| Semibold | 600 | font-weight: 600 | Subtítulos, botones |
| Bold | 700 | font-weight: 700 | Títulos principales |

## **2.4 Especificaciones de Uso**

* Títulos (H1-H5): Siempre Nunito Sans, color Gris 900 (\#111827) o Azul Profundo (\#264653)  
* Body text: Siempre IBM Plex Sans, color Gris 700 (\#374151) para legibilidad  
* Links: IBM Plex Sans, Azul Protección (\#2563EB), underline on hover  
* Botones: Nunito Sans 600, uppercase opcional para CTAs primarios  
* Datos numéricos: IBM Plex Mono para alineación (presupuestos, fechas, IDs)  
* Máximo 75 caracteres por línea para legibilidad óptima  
* Interlineado mínimo 1.5 para body text (accesibilidad)
 
 **Estrategia de Carga Diferenciada:**
 En dispositivos Tier LOW (3G/GPRS), se bloquea la descarga de fuentes web y se fuerza `font-family: system-ui, sans-serif` para evitar bloqueo de renderizado y "Flash of Invisible Text".

# **3\. COMPONENTES ACCESIBLES (WCAG 2.1 AA)**

Todos los componentes CIVICUM cumplen WCAG 2.1 nivel AA como mínimo, con aspiración a AAA en elementos críticos.

## **3.1 Requisitos de Contraste**

### **3.1.1 Estándares WCAG**

| Tipo de contenido | AA Mínimo | AAA Ideal | CIVICUM |
| :---- | :---- | :---- | :---- |
| Texto normal (\<18px) | 4.5:1 | 7:1 | 4.5:1+ ✓ |
| Texto grande (≥18px bold, ≥24px) | 3:1 | 4.5:1 | 3:1+ ✓ |
| Componentes UI (bordes, iconos) | 3:1 | 4.5:1 | 3:1+ ✓ |
| Estados (focus, hover) | 3:1 | 4.5:1 | 3:1+ ✓ |
| Gráficos y datos | 3:1 | 4.5:1 | 3:1+ ✓ |

### **3.1.2 Validación de Colores CIVICUM**

| Combinación | Ratio | Nivel | Uso permitido |
| :---- | :---- | :---- | :---- |
| Terracota / Blanco | 6.23:1 | AAA | Todo tipo de texto ✓ |
| Azul Profundo / Blanco | 10.18:1 | AAA | Todo tipo de texto ✓ |
| Verde Esperanza / Blanco | 5.34:1 | AA | Texto normal ✓ |
| Azul Protección / Blanco | 4.54:1 | AA | Texto normal ✓ |
| Ocre Oscuro / Azul Prof. | 7.68:1 | AAA | Warnings con texto oscuro ✓ |
| Gris 600 / Blanco | 5.74:1 | AA | Texto secundario ✓ |

## **3.2 Navegación por Teclado**

100% de la funcionalidad accesible sin mouse:

| Tecla | Acción | Implementación |
| :---- | :---- | :---- |
| Tab | Navegar al siguiente elemento | tabindex natural, skip links |
| Shift+Tab | Navegar al anterior elemento | Orden lógico de DOM |
| Enter | Activar elemento focuseado | onClick \+ onKeyDown |
| Space | Activar botones/checkboxes | role='button' handlers |
| Escape | Cerrar modales/dropdowns | onEscapeKeyDown |
| Arrow keys | Navegar en menús/selects | Radix UI primitives |
| Home/End | Ir al inicio/fin de lista | Implementado en listas |

**Focus visible:**

* Outline: 2px solid \#2563EB (Azul Protección)  
* Offset: 2px para separación del elemento  
* Border-radius: Igual al elemento (consistencia)  
* Nunca se oculta (:focus-visible en lugar de :focus)

## **3.3 Lectores de Pantalla**

Compatibilidad completa con tecnologías asistivas:

| Requisito | Implementación CIVICUM |
| :---- | :---- |
| Lectores soportados | NVDA, JAWS, VoiceOver, TalkBack |
| Estructura semántica | HTML5 semántico (header, main, nav, aside, footer) |
| Landmarks ARIA | role='banner', 'navigation', 'main', 'contentinfo' |
| Headings | Jerarquía correcta H1→H2→H3 sin saltos |
| Labels de formularios | \<label\> asociado a cada input (htmlFor) |
| Errores de formulario | aria-invalid, aria-describedby para mensajes |
| Live regions | aria-live='polite' para actualizaciones dinámicas |
| Skip links | 'Saltar al contenido principal' visible en focus |

## **3.4 Contenido Multimedia Accesible**

### **3.4.1 Subtítulos en Videos**

| Requisito | Especificación |
| :---- | :---- |
| Tipo de subtítulos | Closed Captions (CC) \- activables/desactivables |
| Formato | WebVTT (.vtt) para compatibilidad web |
| Sincronización | Máximo 2 líneas, máximo 42 caracteres por línea |
| Duración | Mínimo 1 segundo, máximo 7 segundos por caption |
| Descripción audio | \[MÚSICA\], \[APLAUSOS\], \[SONIDO DE CAMPANA\] |
| Identificación hablante | Nombre del hablante cuando no es obvio |
| Idioma | Español chileno (es-CL) como principal |
| Contraste subtítulos | Fondo semitransparente oscuro, texto blanco |

### **3.4.2 Alternativas Textuales para Imágenes**

| Tipo de imagen | Tratamiento alt text |
| :---- | :---- |
| Informativa | Descripción concisa del contenido y propósito |
| Decorativa | alt='' (vacío) \+ role='presentation' |
| Funcional (botón) | Describe la acción: 'Enviar reporte', 'Cerrar modal' |
| Compleja (gráfico) | alt breve \+ longdesc o descripción expandida |
| Texto en imagen | EVITAR. Si necesario, alt incluye todo el texto |
| Logo | alt='CIVICUM \- Sistema Nervioso Cívico de Chile' |

**Reglas de alt text:**

* Máximo 125 caracteres (lectores truncan después)  
* No comenzar con 'Imagen de...' (redundante)  
* Incluir texto relevante visible en la imagen  
* Describir información, no apariencia decorativa  
* Terminar con punto para pausa natural en lector

## **3.5 Modos Adaptativos**

4 modos de visualización para necesidades específicas:

### **3.5.1 Modo Alto Contraste**

| Característica | Especificación |
| :---- | :---- |
| Activación | Toggle en settings \+ @media (prefers-contrast: high) |
| Fondo | Negro puro (\#000000) |
| Texto | Blanco puro (\#FFFFFF) |
| Enlaces | Amarillo brillante (\#FFFF00) \+ underline |
| Botones | Borde blanco 2px, fondo transparente |
| Focus | Outline amarillo 3px |
| Contraste mínimo | 21:1 (máximo posible) |

### **3.5.2 Modo Daltónicos (3 variantes)**

| Tipo | Afectación | Adaptación CIVICUM |
| :---- | :---- | :---- |
| Protanopia | Rojo débil/ausente | Verde→Cyan, Rojo→Naranja brillante |
| Deuteranopia | Verde débil/ausente | Verde→Azul, diferenciación por forma |
| Tritanopia | Azul débil/ausente | Azul→Magenta, amarillo→rosa |

*Principio: NUNCA usar color como único indicador. Siempre combinar con iconos, texto o patrones.*

### **3.5.3 Modo Texto Grande**

| Característica | Especificación |
| :---- | :---- |
| Activación | Toggle en settings \+ @media (prefers-reduced-data) |
| Escala base | 18px (125% del normal) |
| Escala máxima | 200% sin pérdida de funcionalidad |
| Line-height | Aumentado proporcionalmente |
| Espaciado | letter-spacing: 0.12em, word-spacing: 0.16em |
| Layout | Fluido, sin scroll horizontal hasta 400% zoom |

### **3.5.4 Modo Reducción de Movimiento**

| Característica | Especificación |
| :---- | :---- |
| Activación | Automático via @media (prefers-reduced-motion: reduce) |
| Animaciones | Deshabilitadas o reducidas a opacity |
| Transiciones | Máximo 150ms, solo opacity/transform |
| Parallax | Deshabilitado completamente |
| Auto-play video | Deshabilitado, requiere interacción |
| Carousels | Pausados por defecto, navegación manual |
| Loading spinners | Reemplazados por progress bars estáticos |

### **3.5.5 Modo Timeout Extendido (Hallazgo Gamma-1)**

| Característica | Especificación |
| :---- | :---- |
| Activación | Toggle en settings de accesibilidad |
| Timeout de sesión | Extendido de 15min a 60min |
| Warning pre-timeout | Modal a los 55min con botón "Seguir usando" |
| Formularios | Sin timeout durante edición activa |
| Guardado automático | Cada 30s para preservar progreso |

*Nota: Diseñado para usuarios con movilidad reducida que requieren más tiempo para completar tareas.*

# **4\. ICONOGRAFÍA OFICIAL**

Sistema de iconos personalizado para CIVICUM con 50+ iconos SVG optimizados.

## **4.1 Sistema de Iconos**

### **4.1.1 Especificaciones Base**

| Propiedad | Especificación |
| :---- | :---- |
| Formato | SVG (Scalable Vector Graphics) |
| Viewbox | 0 0 24 24 (estándar 24px grid) |
| Stroke width | 2px (consistente en toda la familia) |
| Stroke linecap | round |
| Stroke linejoin | round |
| Fill | none (iconos outline por defecto) |
| Tamaños renderizado | 16px, 20px, 24px, 32px, 48px |
| Área segura | 2px padding interno del viewbox |
| Optimización | SVGO con preset 'default' |

### **4.1.2 Variantes de Estilo**

| Variante | Características | Uso |
| :---- | :---- | :---- |
| Outlined | stroke: 2px, fill: none | UI general, navegación, acciones |
| Filled | fill: currentColor, stroke: none | Estados activos, seleccionados |
| Duotone | 2 colores: base \+ acento | Ilustraciones, empty states |

### **4.1.3 Colores Semánticos en Iconos**

| Contexto | Color | Ejemplo de uso |
| :---- | :---- | :---- |
| Default | currentColor (hereda) | Iconos en texto, navegación |
| Primario | \#C2503A Terracota | Acciones principales, alertas |
| Éxito | \#0D7A5F Verde | Confirmación, completado, check |
| Advertencia | \#B56D18 Ocre Oscuro | Warning, atención requerida |
| Info | \#2563EB Azul | Ayuda, información, tips |
| Disabled | \#9CA3AF Gris 400 | Estados deshabilitados |

## **4.2 Catálogo de 50+ Iconos**

Iconos organizados por categoría funcional:

### **4.2.1 Navegación y UI (12 iconos)**

| Nombre | Archivo | Uso |
| :---- | :---- | :---- |
| Menu | menu.svg | Hamburger menu mobile |
| Close | close.svg | Cerrar modales, dismiss |
| ChevronDown | chevron-down.svg | Dropdowns, expandir |
| ChevronRight | chevron-right.svg | Navegación, breadcrumbs |
| ArrowLeft | arrow-left.svg | Volver, navegación |
| ArrowRight | arrow-right.svg | Siguiente, continuar |
| Search | search.svg | Búsqueda |
| Filter | filter.svg | Filtros |
| Settings | settings.svg | Configuración |
| Home | home.svg | Inicio |
| MoreHorizontal | more-horizontal.svg | Menú contextual |
| ExternalLink | external-link.svg | Enlace externo |

### **4.2.2 Módulos CIVICUM (10 iconos)**

| Nombre | Archivo | Módulo |
| :---- | :---- | :---- |
| User | user.svg | Mi CIVICUM \- Perfil |
| GraduationCap | graduation-cap.svg | Academia Cívica |
| MessageCircle | message-circle.svg | Asistente Civia |
| Megaphone | megaphone.svg | Alza la Voz |
| Users | users.svg | Mesas Ciudadanas |
| PieChart | pie-chart.svg | Cuentas Claras |
| Vote | vote.svg | Voto Ciudadano |
| Compass | compass.svg | GPS Cívico |
| Building | building.svg | Instituciones |
| Landmark | landmark.svg | Gobierno |

### **4.2.3 Acciones y Estados (15 iconos)**

| Nombre | Archivo | Uso |
| :---- | :---- | :---- |
| Check | check.svg | Éxito, completado, seleccionado |
| CheckCircle | check-circle.svg | Confirmación enfática |
| X | x.svg | Error, eliminar, cancelar |
| XCircle | x-circle.svg | Error enfático |
| AlertTriangle | alert-triangle.svg | Advertencia |
| AlertCircle | alert-circle.svg | Información importante |
| Info | info.svg | Información, ayuda |
| Plus | plus.svg | Agregar, crear nuevo |
| Minus | minus.svg | Quitar, reducir |
| Edit | edit.svg | Editar |
| Trash | trash.svg | Eliminar |
| Download | download.svg | Descargar |
| Upload | upload.svg | Subir archivo |
| Share | share.svg | Compartir |
| Copy | copy.svg | Copiar al portapapeles |

### **4.2.4 Contenido y Media (8 iconos)**

| Nombre | Archivo | Uso |
| :---- | :---- | :---- |
| FileText | file-text.svg | Documentos, plantillas |
| Image | image.svg | Imágenes, fotos |
| Camera | camera.svg | Tomar foto |
| Video | video.svg | Videos |
| Mic | mic.svg | Micrófono, voz |
| Link | link.svg | Enlaces |
| Calendar | calendar.svg | Fechas, eventos |
| Clock | clock.svg | Tiempo, plazos |

### **4.2.5 Ubicación y Mapas (5 iconos)**

| Nombre | Archivo | Uso |
| :---- | :---- | :---- |
| MapPin | map-pin.svg | Ubicación, geolocalización |
| Map | map.svg | Mapa completo |
| Navigation | navigation.svg | Dirección, orientación |
| Globe | globe.svg | Web, internacional |
| Flag | flag.svg | Marcador, reporte |

## **4.3 Especificaciones Técnicas SVG**

### **4.3.1 Estructura SVG Estándar**

\<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="civicum-icon"  aria-hidden="true"  focusable="false"\>  \<\!-- Paths del icono \--\>\</svg\>

### **4.3.2 Tamaños y Espaciado**

| Tamaño | Dimensiones | Stroke | Uso típico |
| :---- | :---- | :---- | :---- |
| XS | 16x16px | 1.5px | Inline con texto pequeño |
| SM | 20x20px | 2px | Botones, inputs |
| MD (base) | 24x24px | 2px | Uso general, navegación |
| LG | 32x32px | 2px | Destacados, cards |
| XL | 48x48px | 2.5px | Heroes, empty states |

## **4.4 Accesibilidad de Iconos (ARIA)**

### **4.4.1 Iconos Decorativos**

Cuando el icono acompaña texto y no agrega información:  
\<button\>  \<svg aria-hidden="true" focusable="false"\>...\</svg\>  \<span\>Enviar reporte\</span\>\</button\>

* aria-hidden='true': Oculta del árbol de accesibilidad  
* focusable='false': No recibe focus por teclado  
* El texto visible proporciona el significado

### **4.4.2 Iconos Funcionales (sin texto)**

Cuando el icono es el único indicador de la acción:  
\<button aria-label="Cerrar modal"\>  \<svg aria-hidden="true" focusable="false"\>...\</svg\>\</button\>\<\!-- O con título visible en hover \--\>\<button aria-label="Eliminar reporte" title="Eliminar reporte"\>  \<svg aria-hidden="true" focusable="false"\>...\</svg\>\</button\>

* aria-label en el contenedor (button, a)  
* title opcional para tooltip visual  
* SVG sigue con aria-hidden='true'

### **4.4.3 Iconos Informativos**

Cuando el icono transmite información única:  
\<\!-- Estado con icono \--\>\<span\>  \<svg role="img" aria-label="Completado"\>    \<title\>Completado\</title\>    \<\!-- check icon paths \--\>  \</svg\>  Misión GPS\</span\>\<\!-- Icono de estado sin texto \--\>\<svg role="img" aria-label="Estado: En progreso"\>  \<title\>En progreso\</title\>  \<\!-- progress icon paths \--\>\</svg\>

* role='img': Identifica como imagen  
* \<title\> dentro del SVG: Texto accesible  
* aria-label: Descripción para lectores de pantalla

# **5\. COMPONENTES UI**

Biblioteca de componentes basada en shadcn/ui \+ Radix primitives con estilos Terracota.

## **5.1 Catálogo de Componentes**

| Componente | Base | Personalización CIVICUM |
| :---- | :---- | :---- |
| Button | Radix Slot | Variantes: primary (Terracota), secondary, ghost, destructive |
| Input | Native input | Focus ring Azul Protección, error state Terracota |
| Select | Radix Select | Dropdown con iconos, búsqueda integrada |
| Dialog | Radix Dialog | Modal accesible, focus trap, backdrop blur |
| Tabs | Radix Tabs | Navegación por teclado, indicador animado |
| Toast | Radix Toast | 4 variantes semánticas, auto-dismiss |
| Card | Custom | Sombras sutiles, hover state, variantes |
| Badge | Custom | Colores semánticos, tamaños SM/MD |
| Avatar | Radix Avatar | Fallback initials, status indicator |
| Progress | Radix Progress | Colores por estado, animación sutil |
| Tooltip | Radix Tooltip | Delay 500ms, arrow, posicionamiento auto |
| Accordion | Radix Accordion | Íconos chevron, animación suave |
| Form | React Hook Form | Validación Zod, mensajes accesibles |

# **6\. RESPONSIVE Y BREAKPOINTS**

## **6.1 Breakpoints Oficiales**

| Nombre | Min-width | Dispositivo | Prioridad |
| :---- | :---- | :---- | :---- |
| XS | 360px | Móviles pequeños | PRIORIDAD \#1 (mayoría usuarios) |
| SM | 480px | Móviles medianos | Alta |
| MD | 768px | Tablets portrait | Media |
| LG | 1024px | Tablets landscape / Desktop | Media |
| XL | 1280px | Desktop grande | Baja |
| 2XL | 1536px | Desktop extra grande | Muy baja |

**Tailwind config:**  
screens: {  'xs': '360px',  'sm': '480px',  'md': '768px',  'lg': '1024px',  'xl': '1280px',  '2xl': '1536px',}

# **7\. VALIDACIÓN DE COMPLETITUD**

## **7.1 Paleta de Colores (F-09)**

| Item Requerido | Estado | Sección |
| :---- | :---- | :---- |
| \#C2503A (Terracota \- acción, urgencia) | ✅ | 1.1.1 |
| \#264653 (Azul Profundo \- institucional, confianza) | ✅ | 1.1.2 |
| \#0D7A5F (Verde Esperanza \- progreso, cumplimiento) | ✅ | 1.1.3 |
| \#2563EB (Azul Protección \- seguridad, privacidad) | ✅ | 1.1.4 |
| Éxito: Verde Esperanza | ✅ | 1.2 |
| Error/Crítico: Terracota | ✅ | 1.2 |
| Advertencia: Ocre Oscuro | ✅ | 1.2.1 |
| Información: Azul Protección | ✅ | 1.2 |
| Neutral: Grises calibrados | ✅ | 1.2.2 |

## **7.2 Tipografía**

| Item Requerido | Estado | Sección |
| :---- | :---- | :---- |
| Títulos: Nunito Sans (sans-serif, amigable) | ✅ | 2.1.1 |
| Cuerpo: IBM Plex Sans (legibilidad, técnico) | ✅ | 2.1.2 |
| Código: IBM Plex Mono | ✅ | 2.1.3 |

## **7.3 Componentes Accesibles WCAG 2.1 AA**

| Item Requerido | Estado | Sección |
| :---- | :---- | :---- |
| Contraste mínimo 4.5:1 (texto normal) | ✅ | 3.1.1 |
| Contraste mínimo 3:1 (texto grande) | ✅ | 3.1.1 |
| Navegación por teclado completa | ✅ | 3.2 |
| Lectores de pantalla compatibles | ✅ | 3.3 |
| Subtítulos en videos | ✅ | 3.4.1 |
| Alternativas textuales para imágenes | ✅ | 3.4.2 |
| Modo Alto Contraste | ✅ | 3.5.1 |
| Modo Daltónicos (3 variantes) | ✅ | 3.5.2 |
| Modo Texto Grande | ✅ | 3.5.3 |
| Modo Reducción de Movimiento | ✅ | 3.5.4 |

## **7.4 Iconografía Oficial**

| Item Requerido | Estado | Sección |
| :---- | :---- | :---- |
| 50+ iconos SVG optimizados | ✅ | 4.2 |
| Línea consistente (2px stroke) | ✅ | 4.1.1 |
| Colores semánticos aplicados | ✅ | 4.1.3 |
| Variantes filled/outlined | ✅ | 4.1.2 |
| Accesibles (roles ARIA) | ✅ | 4.4 |

**COBERTURA TOTAL: 27/27 ITEMS (100%)**

---

## **7.5 Navegación: Breadcrumbs (Hallazgo Beta-3)**

Especificación del componente de navegación jerárquica:

| Propiedad | Especificación |
| :---- | :---- |
| Separador | `>` (ChevronRight icon, 16x16px) |
| Máximo niveles | 4 visibles, el resto colapsado con `...` |
| Último elemento | No clickeable, bold, color Gris 900 |
| Elementos previos | Clickeables, color Azul Protección, underline on hover |
| Responsive | En mobile ≤640px, solo mostrar "← Volver" al nivel anterior |
| Truncamiento | Texto >20 caracteres se trunca con `...` y tooltip completo |

**Ejemplo:**
`Inicio > Cuentas Claras > Mi Comuna > Presupuesto Salud > 2024`

---

## **7.6 Estados de Carga (Hallazgo Beta-4)**

### 7.6.1 Skeleton Loading

| Elemento | Skeleton | Duración |
| :---- | :---- | :---- |
| Cards | Rectángulo gris pulsante | Hasta data load |
| Texto | Líneas grises de ancho variable | Hasta data load |
| Imágenes | Cuadrado gris con icono Image | Hasta image load |
| Tablas | Filas grises alternadas | Hasta data load |

**Especificación de animación:**
- Color base: `#E5E7EB` (Gris 200)
- Color highlight: `#F3F4F6` (Gris 100)
- Animación: shimmer linear de izquierda a derecha
- Duración: 1.5s infinite

### 7.6.2 Optimistic UI

| Acción | Comportamiento Optimista |
| :---- | :---- |
| Enviar reporte | Mostrar "Enviado ✓" inmediatamente, sincronizar en background |
| Votar | Incrementar contador inmediatamente, rollback si falla |
| Guardar borrador | Indicador "Guardado" inmediato, sync posterior |
| Apoyar iniciativa | Animación de corazón inmediata, confirmación async |

**Rollback:** Si la operación falla, mostrar toast de error y revertir UI.

---

## **7.7 Motion Guidelines (Hallazgo Beta-5)**

### 7.7.1 Principios de Animación

| Principio | Implementación |
| :---- | :---- |
| Propósito | Toda animación debe tener función (feedback, orientación, deleite) |
| Duración | 150-300ms para microinteracciones, 300-500ms para transiciones |
| Easing | `ease-out` para entradas, `ease-in` para salidas |
| Reducción de movimiento | Respetar `prefers-reduced-motion: reduce` |

### 7.7.2 Catálogo de Animaciones

| Tipo | Trigger | Duración | Easing |
| :---- | :---- | :---- | :---- |
| Hover button | mouseenter | 150ms | ease-out |
| Click feedback | click | 100ms | ease-in-out |
| Modal entrada | open | 250ms | ease-out |
| Modal salida | close | 200ms | ease-in |
| Toast entrada | show | 300ms | ease-out (slide-up) |
| Toast salida | dismiss | 200ms | ease-in (fade) |
| Page transition | navigate | 300ms | ease-in-out |
| Skeleton shimmer | loading | 1500ms | linear (infinite) |
| Success check | complete | 400ms | spring (bounce) |
| Error shake | error | 300ms | ease-in-out (shake x3) |

### 7.7.3 Variables CSS

```css
:root {
  --motion-quick: 150ms;
  --motion-normal: 250ms;
  --motion-slow: 400ms;
  --ease-default: ease-out;
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## **7.8 Touch Targets WCAG 2.2 (Saneamiento A1-1)**

> 🔴 **CRÍTICO:** WCAG 2.2 Success Criterion 2.5.8 requiere touch targets ≥44x44px.

### Tamaños Mínimos Obligatorios

| Elemento | Tamaño Mínimo | Spacing Mínimo | Notas |
| :---- | :---- | :---- | :---- |
| Botones primarios | 48x48px | 8px entre botones | Preferir 48px para fat-finger |
| Botones secundarios | 44x44px | 8px | Mínimo WCAG |
| Links en texto | N/A (heredado) | 8px vertical | Excepción WCAG |
| Iconos clickeables | 44x44px touch area | 12px | Hitbox > ícono visual |
| Checkbox/Radio | 44x44px touch area | 8px | Incluir label en área |
| Inputs | height: 48px | N/A | Facilitar toque |
| Tabs | 48x48px | 0px (adjuntos) | Tab bar continua |

### CSS Touch Target

```css
/* Touch target mínimo WCAG 2.2 */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* Preferido para mobile */
.touch-target-large {
  min-width: 48px;
  min-height: 48px;
  padding: 14px;
}

/* Hitbox invisible para iconos pequeños */
.icon-button::before {
  content: '';
  position: absolute;
  inset: -8px; /* Expande área clickeable */
}
```

---

## **7.9 Feedback Táctil y Debounce (Saneamiento A1-4)**

### Estados Touch

| Estado | Feedback Visual | Tiempo |
| :---- | :---- | :---- |
| :hover (desktop) | opacity: 0.9 | Inmediato |
| :active (touch) | scale: 0.97, opacity: 0.8 | Inmediato |
| :focus-visible | ring-2 ring-terracota | Inmediato |
| Pressed | Background shift 10% darker | 100ms |

### Debounce para Prevenir Acciones Dobles

| Acción | Debounce (HIGH/MED) | Debounce (LOW) | Justificación |
| :---- | :---- | :---- | :---- |
| Submit form | 500ms | 800ms | Prevenir envío doble — LOW tiene lag de rendering mayor |
| Vote/Like | 300ms | 500ms | Prevenir spam — LOW tarda más en actualizar UI |
| Navigation | 200ms | 300ms | Prevenir double-tap |
| Scroll-triggered | 100ms | 150ms | Performance |

> ⚠️ **SANEAMIENTO Λ4-7:** En Tier LOW (Android Go, CPU lenta), el debounce por sí solo es insuficiente. Se debe usar defensa en profundidad: disabled-first + debounce + idempotency key.

### Defensa en Profundidad Anti-Doble-Submit (Saneamiento Λ4-7)

```typescript
// Patrón obligatorio para TODA acción mutante (POST/PUT/DELETE)
const handleSubmit = async (data: FormData) => {
  // Capa 1: Deshabilitar botón INMEDIATAMENTE (antes del debounce)
  setLoading(true);
  setDisabled(true);

  // Capa 2: Idempotency key para que backend rechace duplicados
  const idempotencyKey = crypto.randomUUID();

  try {
    // Capa 3: Debounce ya aplicado en el event handler
    await api.post('/endpoint', data, {
      headers: { 'X-Idempotency-Key': idempotencyKey }
    });
  } catch (error) {
    if (error.status === 409) {
      // Duplicado detectado por backend — ignorar silenciosamente
      return;
    }
    // Error real — mostrar al usuario
    showErrorToast(error.message);
  } finally {
    setLoading(false);
    setDisabled(false);
  }
};
```

**Regla de backend:** Almacenar idempotency keys en cache (Upstash Redis, TTL 5 min). Si el key ya existe, retornar HTTP 409 Conflict sin ejecutar la acción.

### CSS Feedback

```css
.button {
  transition: transform 100ms ease-out, opacity 100ms ease-out;
}

.button:active {
  transform: scale(0.97);
  opacity: 0.8;
}

/* Haptic feedback via Web Vibration API */
.button-haptic:active {
  /* JS: navigator.vibrate(10) */
}
```

### JavaScript Debounce

```typescript
function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): T {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  }) as T;
}

// Uso con detección de Tier
const tier = useDeviceTier(); // 'HIGH' | 'MEDIUM' | 'LOW'
const debounceMs = tier === 'LOW' ? 800 : 500;
const handleSubmit = useDebounce(submitForm, debounceMs);
```

---

## **7.10 UX para Limpiar Caché/Reset (Saneamiento A2-4)**

> ⚠️ **CASO:** Usuario reporta "la app no carga" o datos corruptos. Opción de reset manual.

### Ubicación en UI

| Ubicación | Acceso |
| :---- | :---- |
| **Configuración \> Almacenamiento** | Siempre visible |
| **Toast de error persistente** | Link "¿Problemas? Limpiar caché" |

### Opciones de Limpieza

| Opción | Qué elimina | Qué preserva |
| :---- | :---- | :---- |
| **Limpiar caché** | Assets, API cache | Datos de usuario, borradores |
| **Limpiar todo** | Todo excepto credenciales | Auth token |
| **Factory reset** | TODO | Nada (requiere re-login) |

### UI de Confirmación

```
┌─────────────────────────────────────────┐
│  ⚠️ Limpiar datos locales              │
├─────────────────────────────────────────┤
│  Esto eliminará:                        │
│  • Cápsulas descargadas                 │
│  • Datos de comunas cacheados           │
│                                          │
│  Esto NO eliminará:                     │
│  • Tu cuenta y preferencias             │
│  • Borradores de reportes               │
│                                          │
│  [Cancelar]  [Limpiar caché]            │
└─────────────────────────────────────────┘
```

### Copy para Errores

| Escenario | Mensaje |
| :---- | :---- |
| Cache corrupta | "Algo salió mal. [Limpiar caché] para resolver." |
| IndexedDB lleno | "Espacio lleno. Liberando datos antiguos automáticamente..." |
| Reset exitoso | "✅ Listo. La app volverá a cargar todo cuando tengas conexión." |

---

## **7.11 Proximidad de Botones Opuestos (Saneamiento Λ4-3/F-55)**

> 🔴 **OBLIGATORIO:** Pares de botones con acciones opuestas (confirmar/cancelar, eliminar/conservar) deben seguir las reglas de esta sección para prevenir toques accidentales.

### Reglas por Breakpoint

| Breakpoint | Layout | Gap mínimo | Orden |
| :---- | :---- | :---- | :---- |
| XS (360px) | **Vertical (stacked)** | 16px | Cancelar arriba, destructivo abajo |
| SM (480px) | **Vertical (stacked)** | 16px | Cancelar arriba, destructivo abajo |
| MD+ (768px+) | Horizontal permitido | 16px | Cancelar izquierda, destructivo derecha |

### Diferenciación Visual Obligatoria

| Botón | Estilo | Ejemplo |
| :---- | :---- | :---- |
| Acción destructiva | `Destructive` (Terracota 700 / Blanco) | "Eliminar reporte" |
| Cancelar / Volver | `Ghost` (Transparente / Azul Profundo) | "Cancelar" |

### CSS Action Pair

```css
/* Par de botones con acciones opuestas */
.action-pair {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Breakpoint MD: horizontal permitido */
@media (min-width: 768px) {
  .action-pair {
    flex-direction: row;
    justify-content: flex-end;
  }
}

/* El botón destructivo siempre va después (abajo en mobile, derecha en desktop) */
.action-pair .btn-destructive {
  order: 2;
}
.action-pair .btn-cancel {
  order: 1;
}
```

### Wireframe XS (360px)

```
┌─────────────────────────────┐
│                             │
│  [     Cancelar     ] Ghost │
│          16px gap           │
│  [  Eliminar ⚠️  ] Destr.  │
│                             │
└─────────────────────────────┘
```

---

**COBERTURA ACTUALIZADA: 35/35 ITEMS (100%)**

**Estado: APROBADO \- COMPLEMENTA DOCUMENTO PRINCIPAL**  
Versión: 1.4 | Febrero 2026 (Actualizado con Saneamiento Λ4 — Debounce por Tier + Proximidad de Botones)

─────────────────────────────────────────  
CIVICUM \- Sistema Nervioso Cívico de Chile  
*Anexo de Design System Terracota para Protección Intelectual INAPI*