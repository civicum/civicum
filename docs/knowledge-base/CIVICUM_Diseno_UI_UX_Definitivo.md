# CIVICUM — Documento Definitivo de Diseño UI/UX Inmersivo

**Sistema Nervioso Cívico de Chile**

---

| Campo | Valor |
|---|---|
| **Versión** | 1.0 Definitiva |
| **Fecha** | Febrero 2026 |
| **Estado** | DOCUMENTO CANÓNICO DE DISEÑO |
| **Base documental** | 17+ documentos proyecto, F-01 a F-47, Design System Terracota v1.0, Fundamentos Antropológicos v1.0 |
| **Alcance** | Diseño completo de inicio a fin — 6 módulos, todos los flujos, todos los estados, todas las interacciones |
| **Formato** | PWA Mobile-First, React 18 + TypeScript |
| **Licencia** | AGPL-3.0 |

---

## ÍNDICE GENERAL

1. Identidad Visual y Logotipo
2. Design System Terracota — Tokens Completos
3. Sistema Tipográfico
4. Iconografía Oficial
5. Sistema de Espaciado, Sombras y Grid
6. Breakpoints y Estrategia Responsive
7. Componentes UI — Biblioteca Completa
8. Atmósferas Inmersivas por Módulo (6 mundos)
9. Sistema de Navegación — Smart Dock
10. Onboarding Inmersivo (5 fases)
11. Flujos Completos por Módulo (pantalla a pantalla)
12. Sistema de Estados (loading, empty, error, offline, success)
13. Animaciones y Microinteracciones
14. Gestión Emocional en Interfaz
15. Microcopy y Diccionario de Voz
16. Accesibilidad WCAG 2.1 AA
17. Experiencia por Tier (HIGH / MEDIUM / LOW)
18. PWA Assets y Offline Dignity Mode
19. Decisiones F-XX Mapeadas a UI
20. Checklist de Validación por Pantalla
21. Especificaciones Técnicas para Desarrollo

---

# 1. IDENTIDAD VISUAL Y LOGOTIPO

## 1.1 El Logotipo CIVICUM

El logotipo oficial de CIVICUM es la letra **"C"** representando un **hemiciclo parlamentario visto desde perspectiva cenital** (vista aérea).

### Análisis del Isotipo

| Atributo | Especificación |
|---|---|
| **Forma base** | Letra "C" construida con arcos concéntricos segmentados |
| **Metáfora visual** | Hemiciclo parlamentario — donde las voces ciudadanas se organizan |
| **Vista** | Cenital (desde arriba), evocando vigilancia democrática y visión panorámica |
| **Estructura** | 5 filas de arcos concéntricos, divididos en segmentos por una fractura vertical central y gaps laterales |
| **Apertura** | La "C" queda abierta por el lado derecho, simbolizando: accesibilidad, invitación, participación abierta |
| **Fractura central** | Los arcos están divididos verticalmente, representando la tensión entre instituciones y ciudadanía que CIVICUM busca reconectar |
| **Profundidad** | Efecto 3D sutil con sombras laterales, sugiriendo solidez institucional con calidez material |

### Colores del Logotipo

| Elemento | Color | Código | Significado |
|---|---|---|---|
| **Arcos principales** | Terracota Cívico | `#C2503A` | Acción, tierra chilena, calidez ciudadana |
| **Sombras/profundidad** | Terracota oscuro | `#8B3A2A` | Solidez, permanencia, raíces |
| **Fondo sombra** | Azul Profundo | `#264653` | Institucionalidad, confianza |
| **Fondo general** | Transparente | — | Versatilidad de uso |

### Reglas de Uso del Logotipo

| Regla | Especificación |
|---|---|
| **Área de protección** | Mínimo 1x la altura de la "C" en cada dirección |
| **Tamaño mínimo** | 32px de altura en pantalla, 10mm en impresión |
| **Fondos permitidos** | Blanco, Gris 50 (#F9FAFB), Azul Profundo (#264653) |
| **Fondos prohibidos** | Fondos de colores saturados, fotografías complejas |
| **Versión monocromática** | Blanco sobre fondo oscuro, Azul Profundo sobre fondo claro |
| **Prohibiciones** | No rotar, no distorsionar, no cambiar colores, no agregar efectos, no recortar arcos |

### Aplicaciones del Logotipo en PWA

| Contexto | Tamaño | Formato |
|---|---|---|
| **Favicon** | 32×32px | ICO/PNG, versión simplificada (solo 3 arcos) |
| **App icon** | 192×192px y 512×512px | PNG con fondo Azul Profundo |
| **Splash screen** | Centrado, 128px altura | SVG con "CIVICUM" debajo en Nunito Sans 700 |
| **Header PWA** | 40px altura | SVG inline, solo isotipo sin texto |
| **Manifest icons** | 48, 72, 96, 128, 144, 192, 256, 384, 512px | PNG maskable + any purpose |
| **OG Image** | 1200×630px | PNG: logo centrado + "Sistema Nervioso Cívico de Chile" |

---

# 2. DESIGN SYSTEM TERRACOTA — TOKENS COMPLETOS

Decisión **F-09** (Coherencia de Marca): Paleta Terracota como identidad visual oficial.
Decisión **F-05** (Apartidismo Total): Cero estética partidista.

## 2.1 Colores Principales — Los 5 Pilares

### Terracota Cívico — `#C2503A`

| Propiedad | Valor |
|---|---|
| HEX | `#C2503A` |
| RGB | `rgb(194, 80, 58)` |
| HSL | `hsl(10, 54%, 49%)` |
| Contraste vs blanco | **6.23:1** (WCAG AAA ✓) |
| Contraste vs negro | 3.37:1 (AA texto grande ✓) |
| **Uso UI** | CTAs primarios, urgencia, acción, botones de envío |
| **Uso semántico** | Error, crítico, alertas importantes |
| **Psicología** | Pasión, acción, tierra chilena, calidez ciudadana |

### Azul Profundo — `#264653`

| Propiedad | Valor |
|---|---|
| HEX | `#264653` |
| RGB | `rgb(38, 70, 83)` |
| HSL | `hsl(197, 37%, 24%)` |
| Contraste vs blanco | **10.18:1** (WCAG AAA ✓) |
| **Uso UI** | Headers, navegación, fondos institucionales, texto principal |
| **Uso semántico** | Confianza, estabilidad, institucionalidad |
| **Psicología** | Seriedad, profundidad, mar chileno, confianza |

### Verde Esperanza — `#0D7A5F`

| Propiedad | Valor |
|---|---|
| HEX | `#0D7A5F` |
| RGB | `rgb(13, 122, 95)` |
| HSL | `hsl(165, 81%, 26%)` |
| Contraste vs blanco | **5.34:1** (WCAG AA ✓) |
| **Uso UI** | Éxito, progreso, cumplimiento, victorias cívicas, badges positivos |
| **Uso semántico** | Success states, confirmaciones, progreso positivo |
| **Psicología** | Esperanza, crecimiento, naturaleza, logro |

### Azul Protección — `#2563EB`

| Propiedad | Valor |
|---|---|
| HEX | `#2563EB` |
| RGB | `rgb(37, 99, 235)` |
| HSL | `hsl(221, 83%, 53%)` |
| Contraste vs blanco | **4.54:1** (WCAG AA ✓) |
| **Uso UI** | Verificación, enlaces, información, seguridad, privacidad |
| **Uso semántico** | Información, ayuda, datos protegidos |
| **Psicología** | Seguridad, tecnología, modernidad, protección |

### Dorado Cívico — `#D4872E`

| Propiedad | Valor |
|---|---|
| HEX | `#D4872E` |
| RGB | `rgb(212, 135, 46)` |
| HSL | `hsl(32, 67%, 51%)` |
| Contraste vs negro | **7.68:1** (WCAG AAA ✓) |
| **Uso UI** | Badges, warnings, acentos, deadlines, logros, reconocimiento |
| **Nota accesibilidad** | Siempre con texto oscuro (#264653 o negro) |
| **Psicología** | Reconocimiento, logro, advertencia elegante |

## 2.2 Regla Apartidista (F-05) — NUNCA VIOLAR

| Combinación PROHIBIDA | Razón |
|---|---|
| Rojo + Azul puro | Evoca UDI / PS |
| Amarillo dominante | Evoca DC |
| Rojo + blanco + azul | Bandera = partidismo percibido |
| Verde + rojo saturado | Navidad / partidismo |
| Negro + rojo + dorado | Asociaciones ideológicas |

**Regla:** Terracota es TIERRA, no política. Azul Profundo es MAR, no partido. Verde es ESPERANZA, no ecologismo partidista.

## 2.3 Colores Semánticos

| Semántica | Color | Código | Uso en UI |
|---|---|---|---|
| **Éxito** | Verde Esperanza | `#0D7A5F` | Confirmaciones, completado, progreso |
| **Error/Crítico** | Terracota | `#C2503A` | Errores de validación, alertas, eliminar |
| **Advertencia** | Ocre Oscuro | `#B56D18` | Warnings, atención requerida |
| **Información** | Azul Protección | `#2563EB` | Tips, ayuda contextual, enlaces |
| **Neutral/Default** | Gris 600 | `#4B5563` | Texto secundario, bordes |

## 2.4 Escalas de Color Extendidas (10 tonos por color)

### Escala Terracota

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#FEF2F0` | Fondos hover, backgrounds sutiles |
| 100 | `#FDE3DE` | Fondos seleccionados |
| 200 | `#FACFC6` | Borders ligeros |
| 300 | `#F6A899` | Iconos inactivos |
| 400 | `#E8705A` | Hover de botones |
| **500** | **`#C2503A`** | **Color principal, CTAs** |
| 600 | `#A33D2A` | Active state |
| 700 | `#842D1D` | Texto sobre fondos claros |
| 800 | `#6B2418` | Énfasis fuerte |
| 900 | `#4D1A11` | Máximo contraste |

### Escala Verde Esperanza

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#ECFDF5` | Success backgrounds |
| 100 | `#D1FAE5` | Badges de éxito |
| 200 | `#A7F3D0` | Progress bars completados |
| 300 | `#6EE7B7` | Iconos de éxito |
| 400 | `#34D399` | Hover success |
| **500** | **`#0D7A5F`** | **Color principal éxito** |
| 600 | `#0A6B53` | Active state éxito |
| 700 | `#075E47` | Texto éxito sobre claro |
| 800 | `#054D3A` | Énfasis éxito |
| 900 | `#033D2E` | Máximo contraste éxito |

### Escala Azul Profundo

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#E8EEF1` | Fondos institucionales claros |
| 100 | `#C4D4DB` | Borders institucionales |
| 200 | `#9DB5C0` | Iconos secundarios |
| 300 | `#6D8F9E` | Texto terciario |
| 400 | `#456A7B` | Headers secundarios |
| **500** | **`#264653`** | **Color principal institucional** |
| 600 | `#1E3A47` | Active state |
| 700 | `#172E38` | Fondos oscuros |
| 800 | `#112129` | Navbar fondos |
| 900 | `#0F1C22` | Máximo contraste |

### Escala Azul Protección

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#EFF6FF` | Info backgrounds |
| 100 | `#DBEAFE` | Badges información |
| 200 | `#BFDBFE` | Borders info |
| 300 | `#93C5FD` | Iconos info |
| 400 | `#60A5FA` | Hover info |
| **500** | **`#2563EB`** | **Color principal info/seguridad** |
| 600 | `#1D4ED8` | Active state |
| 700 | `#1E40AF` | Texto info sobre claro |
| 800 | `#1E3A8A` | Énfasis info |
| 900 | `#1E3A8A` | Máximo contraste info |

### Escala Dorado Cívico

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#FFFBEB` | Warning backgrounds |
| 100 | `#FEF3C7` | Badges logro |
| 200 | `#FDE68A` | Progress dorado |
| 300 | `#FCD34D` | Iconos warning |
| 400 | `#FBBF24` | Hover warning |
| **500** | **`#D4872E`** | **Color principal warning/logro** |
| 600 | `#B56D18` | Ocre Oscuro — warnings texto |
| 700 | `#92400E` | Texto warning sobre claro |
| 800 | `#78350F` | Énfasis warning |
| 900 | `#451A03` | Máximo contraste warning |

### Escala de Grises

| Tono | HEX | Uso |
|---|---|---|
| 50 | `#F9FAFB` | Fondos claros, hover states |
| 100 | `#F3F4F6` | Fondos alternos, cards |
| 200 | `#E5E7EB` | Bordes ligeros, divisores |
| 300 | `#D1D5DB` | Bordes, inputs deshabilitados |
| 400 | `#9CA3AF` | Placeholder text, iconos inactivos |
| 500 | `#6B7280` | Texto secundario |
| 600 | `#4B5563` | Texto body, labels |
| 700 | `#374151` | Títulos secundarios |
| 800 | `#1F2937` | Texto principal |
| 900 | `#111827` | Títulos principales |

## 2.5 Atmósferas Cromáticas por Módulo

Cada módulo tiene una escala dominante que crea su "mundo":

| Módulo | Color dominante | Tono 50 (fondo) | Tono 500 (acción) | Tono 900 (énfasis) |
|---|---|---|---|---|
| **Mi CIVICUM** | Azul Profundo | `#E8EEF1` | `#264653` | `#0F1C22` |
| **Academia Cívica** | Verde Esperanza | `#ECFDF5` | `#0D7A5F` | `#033D2E` |
| **Civia (Asistente)** | Azul Protección | `#EFF6FF` | `#2563EB` | `#1E3A8A` |
| **Alza la Voz + Mesas** | Terracota | `#FEF2F0` | `#C2503A` | `#4D1A11` |
| **Cuentas Claras** | Dorado Cívico | `#FFFBEB` | `#D4872E` | `#78350F` |
| **Voto Ciudadano** | Terracota → Verde | Gradiente cálido | Terracota (votar) | Verde (resultados) |

## 2.6 Matriz de Contrastes Aprobados

| Combinación | Ratio | WCAG | Uso |
|---|---|---|---|
| Terracota sobre blanco | 6.23:1 | **AAA** ✓ | CTAs primarios, botones |
| Azul Profundo sobre blanco | 10.18:1 | **AAA** ✓ | Headers, navegación |
| Verde Esperanza sobre blanco | 5.34:1 | **AA** ✓ | Badges éxito, confirmaciones |
| Azul Protección sobre blanco | 4.54:1 | **AA** ✓ | Enlaces, información |
| Blanco sobre Terracota | 6.23:1 | **AAA** ✓ | Texto en botones primarios |
| Blanco sobre Azul Profundo | 10.18:1 | **AAA** ✓ | Texto en headers/nav |
| Ocre Oscuro con Azul Profundo | Alta | **AA** ✓ | Warnings con alta legibilidad |
| Gris 800 sobre blanco | >12:1 | **AAA** ✓ | Texto principal |
| Gris 600 sobre blanco | >7:1 | **AAA** ✓ | Texto secundario |

## 2.7 CSS Variables — Implementación

```css
:root {
  /* Colores primarios */
  --color-terracota-50: #FEF2F0;
  --color-terracota-100: #FDE3DE;
  --color-terracota-200: #FACFC6;
  --color-terracota-300: #F6A899;
  --color-terracota-400: #E8705A;
  --color-terracota-500: #C2503A;
  --color-terracota-600: #A33D2A;
  --color-terracota-700: #842D1D;
  --color-terracota-800: #6B2418;
  --color-terracota-900: #4D1A11;

  --color-azul-50: #E8EEF1;
  --color-azul-500: #264653;
  --color-azul-900: #0F1C22;

  --color-verde-50: #ECFDF5;
  --color-verde-500: #0D7A5F;
  --color-verde-900: #033D2E;

  --color-proteccion-50: #EFF6FF;
  --color-proteccion-500: #2563EB;
  --color-proteccion-900: #1E3A8A;

  --color-dorado-50: #FFFBEB;
  --color-dorado-500: #D4872E;
  --color-dorado-600: #B56D18;
  --color-dorado-900: #78350F;

  /* Semánticos */
  --color-success: var(--color-verde-500);
  --color-error: var(--color-terracota-500);
  --color-warning: var(--color-dorado-600);
  --color-info: var(--color-proteccion-500);

  /* Módulo activo (cambia dinámicamente) */
  --module-accent: var(--color-azul-500);
  --module-bg: var(--color-azul-50);
  --module-emphasis: var(--color-azul-900);
}

/* Cambio de atmósfera por módulo */
[data-module="mi-civicum"] {
  --module-accent: var(--color-azul-500);
  --module-bg: var(--color-azul-50);
}
[data-module="academia"] {
  --module-accent: var(--color-verde-500);
  --module-bg: var(--color-verde-50);
}
[data-module="civia"] {
  --module-accent: var(--color-proteccion-500);
  --module-bg: var(--color-proteccion-50);
}
[data-module="alza-la-voz"] {
  --module-accent: var(--color-terracota-500);
  --module-bg: var(--color-terracota-50);
}
[data-module="cuentas-claras"] {
  --module-accent: var(--color-dorado-500);
  --module-bg: var(--color-dorado-50);
}
[data-module="voto-ciudadano"] {
  --module-accent: var(--color-terracota-500);
  --module-bg: #FFF7ED;
}
```

---

# 3. SISTEMA TIPOGRÁFICO

## 3.1 Familias Tipográficas

### Nunito Sans — Títulos, UI, Navegación

| Propiedad | Especificación |
|---|---|
| **Rol** | Headings, botones, navegación, labels |
| **Categoría** | Sans-serif humanista |
| **Pesos** | 400 (Regular), 600 (SemiBold), 700 (Bold) |
| **Razón de elección** | Cercanía, amigabilidad, legibilidad; evita frialdad técnica |
| **Licencia** | OFL (Open Font License) |
| **Fallback** | `system-ui, -apple-system, sans-serif` |

### IBM Plex Sans — Body, Contenido Largo

| Propiedad | Especificación |
|---|---|
| **Rol** | Texto corrido, párrafos, artículos, cápsulas educativas |
| **Categoría** | Sans-serif grotesque |
| **Pesos** | 400 (Regular), 600 (SemiBold), 700 (Bold) |
| **Razón de elección** | Claridad neutral, lectura extendida, sensación técnica pero humana |
| **Licencia** | OFL |
| **Fallback** | `"Helvetica Neue", Arial, sans-serif` |

### IBM Plex Mono — Código, Datos, Métricas

| Propiedad | Especificación |
|---|---|
| **Rol** | Números, datos estadísticos, código fuente, timestamps |
| **Categoría** | Monospace |
| **Pesos** | 400 (Regular) |
| **Razón de elección** | Evidencia, trazabilidad, precisión numérica |
| **Licencia** | OFL |
| **Fallback** | `"Courier New", monospace` |

## 3.2 Escala Tipográfica (10 niveles)

| Nivel | Tamaño | Line-height | Peso | Familia | Uso |
|---|---|---|---|---|---|
| **Display** | 48px / 3rem | 1.1 | 700 | Nunito Sans | Hero sections, splash |
| **H1** | 36px / 2.25rem | 1.2 | 700 | Nunito Sans | Título de módulo |
| **H2** | 30px / 1.875rem | 1.25 | 700 | Nunito Sans | Sección principal |
| **H3** | 24px / 1.5rem | 1.3 | 600 | Nunito Sans | Subsección |
| **H4** | 20px / 1.25rem | 1.35 | 600 | Nunito Sans | Card títulos |
| **Body L** | 18px / 1.125rem | 1.6 | 400 | IBM Plex Sans | Lectura extendida |
| **Body** | 16px / 1rem | 1.5 | 400 | IBM Plex Sans | Texto general |
| **Body S** | 14px / 0.875rem | 1.5 | 400 | IBM Plex Sans | Captions, helpers |
| **Caption** | 12px / 0.75rem | 1.4 | 400 | IBM Plex Sans | Timestamps, fuentes |
| **Mono** | 14px / 0.875rem | 1.5 | 400 | IBM Plex Mono | Datos, métricas |

## 3.3 Comportamiento por Tier

| Tier | Fonts cargadas | Subset | Tamaño descarga |
|---|---|---|---|
| **HIGH** | Nunito Sans + IBM Plex Sans + Mono | latin-ext | ~120KB |
| **MEDIUM** | Nunito Sans + IBM Plex Sans | latin only | ~40KB |
| **LOW** | System fonts only | — | 0KB |

```css
/* Tier LOW fallback */
.tier-low {
  --font-heading: system-ui, -apple-system, sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;
  --font-mono: monospace;
}
```

---

# 4. ICONOGRAFÍA OFICIAL

Base: **Lucide React** (stroke 2px, viewbox 24×24, round linecap/linejoin).

## 4.1 Especificaciones Base

| Propiedad | Valor |
|---|---|
| Formato | SVG (Scalable Vector Graphics) |
| Viewbox | `0 0 24 24` |
| Stroke width | 2px |
| Stroke linecap | round |
| Stroke linejoin | round |
| Fill | none (outline por defecto) |
| Tamaños renderizado | 16px, 20px, 24px, 32px, 48px |
| Área segura | 2px padding interno |
| Optimización | SVGO preset 'default' |

## 4.2 Variantes

| Variante | Características | Uso |
|---|---|---|
| **Outlined** | stroke: 2px, fill: none | UI general, navegación |
| **Filled** | fill: currentColor | Estados activos, seleccionados |
| **Duotone** | 2 colores: base + acento | Ilustraciones, empty states |

## 4.3 Catálogo por Categoría

### Navegación (12 iconos)

| Nombre Lucide | Archivo | Uso |
|---|---|---|
| `Menu` | menu.svg | Hamburger menu mobile |
| `X` | close.svg | Cerrar modales, dismiss |
| `ChevronDown` | chevron-down.svg | Dropdowns, expandir |
| `ChevronRight` | chevron-right.svg | Navegación, breadcrumbs |
| `ArrowLeft` | arrow-left.svg | Volver |
| `ArrowRight` | arrow-right.svg | Siguiente |
| `Search` | search.svg | Búsqueda |
| `Filter` | filter.svg | Filtros |
| `Settings` | settings.svg | Configuración |
| `Home` | home.svg | Inicio |
| `MoreHorizontal` | more-horizontal.svg | Menú contextual |
| `ExternalLink` | external-link.svg | Enlace externo |

### Módulos CIVICUM (10 iconos)

| Nombre Lucide | Módulo | Uso en Smart Dock |
|---|---|---|
| `User` | Mi CIVICUM | Tab principal — perfil |
| `GraduationCap` | Academia Cívica | Tab principal — educación |
| `MessageCircle` | Civia | Tab principal — asistente |
| `Megaphone` | Alza la Voz | Tab principal — reportes |
| `Users` | Mesas Ciudadanas | Submódulo de Alza la Voz |
| `PieChart` | Cuentas Claras | Tab secundario |
| `Vote` | Voto Ciudadano | Tab secundario |
| `Compass` | GPS Cívico | Misiones |
| `Building` | Instituciones | Directorio |
| `Landmark` | Gobierno | Autoridades |

### Acciones y Estados (15 iconos)

| Nombre | Uso |
|---|---|
| `Check` | Éxito, completado |
| `CheckCircle` | Confirmación enfática |
| `X` / `XCircle` | Error, eliminar |
| `AlertTriangle` | Advertencia |
| `AlertCircle` | Información importante |
| `Info` | Ayuda contextual |
| `Plus` / `Minus` | Agregar / quitar |
| `Edit` | Editar |
| `Trash2` | Eliminar (con confirmación) |
| `Upload` / `Download` | Subir / descargar |
| `Share2` | Compartir |
| `Eye` / `EyeOff` | Mostrar / ocultar |
| `Lock` / `Unlock` | Seguridad |

### Badges y Logros (12 iconos)

| Nombre | Badge | Módulo |
|---|---|---|
| `Award` | Certificación completada | Academia |
| `Star` | Favorito / destacado | General |
| `Shield` | Verificación progresiva | Mi CIVICUM |
| `Target` | Misión completada | GPS Cívico |
| `TrendingUp` | Progreso | General |
| `Zap` | Acción rápida | Alza la Voz |
| `ThumbsUp` | Apoyo ciudadano | Alza la Voz |
| `BookOpen` | Cápsula completada | Academia |
| `Crown` | Líder comunitario | Mesas |
| `Heart` | Impacto social | General |
| `Flame` | Racha de participación | GPS Cívico |
| `Trophy` | Logro máximo | General |

## 4.4 Accesibilidad de Iconos

```jsx
{/* Icono decorativo — acompaña texto */}
<button>
  <svg aria-hidden="true" focusable="false">...</svg>
  <span>Enviar reporte</span>
</button>

{/* Icono funcional — sin texto */}
<button aria-label="Cerrar modal">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

{/* Icono informativo — transmite información */}
<svg role="img" aria-label="Estado: Completado">
  <title>Completado</title>
  {/* check icon paths */}
</svg>
```

---

# 5. SISTEMA DE ESPACIADO, SOMBRAS Y GRID

## 5.1 Escala de Espaciado (Base 4px)

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Separación mínima entre iconos/texto |
| `space-2` | 8px | Padding interno badges, gaps mínimos |
| `space-3` | 12px | Padding inputs, gaps de lista |
| `space-4` | 16px | Padding cards, margen entre secciones |
| `space-6` | 24px | Separación entre componentes |
| `space-8` | 32px | Separación entre secciones |
| `space-12` | 48px | Padding de secciones principales |
| `space-16` | 64px | Separación entre bloques hero |

## 5.2 Sombras

| Token | Valor CSS | Uso |
|---|---|---|
| `shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` | Hover subtle, inputs focus |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards, dropdowns |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modales, popovers |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Diálogos, sheets |

## 5.3 Border Radius

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 4px | Inputs, badges pequeños |
| `radius-md` | 8px | Cards, botones, chips |
| `radius-lg` | 12px | Modales, sheets, contenedores |
| `radius-xl` | 16px | Bottom sheets, cards destacadas |
| `radius-full` | 9999px | Avatares, badges circulares, pills |

## 5.4 Grid System

| Propiedad | Valor |
|---|---|
| Columnas | 12 columnas |
| Gutter | 24px (desktop) / 16px (mobile) |
| Márgenes laterales | 16px (XS-SM) / 24px (MD) / 32px (LG+) |
| Max-width contenedor | 1280px |
| Área táctil mínima | **44×44px** (WCAG obligatorio) |

---

# 6. BREAKPOINTS Y ESTRATEGIA RESPONSIVE

## 6.1 Breakpoints Oficiales (Mobile-First)

| Nombre | Min-width | Dispositivo | Prioridad | Columnas Grid |
|---|---|---|---|---|
| **XS** | 360px | Android Go, móviles básicos | **#1 — DISEÑA AQUÍ PRIMERO** | 4 |
| **SM** | 480px | Móviles medianos | Alta | 4 |
| **MD** | 768px | Tablets portrait | Media | 8 |
| **LG** | 1024px | Tablets landscape / Desktop | Media | 12 |
| **XL** | 1280px | Desktop grande | Baja | 12 |
| **2XL** | 1536px | Desktop extra grande | Muy baja | 12 |

## 6.2 Regla de Oro del Diseño

> **Si S4 (Mayor Cauteloso, 65+ años, Android Go de $50 USD, conexión 3G) puede completar un flujo sin ayuda externa, el diseño es correcto. Si no, rediseña.**

## 6.3 Comportamiento Responsive por Componente

| Componente | XS (360px) | MD (768px) | LG (1024px) |
|---|---|---|---|
| **Smart Dock** | Bottom bar 5 tabs | Bottom bar 5 tabs | Side rail |
| **Cards** | 1 columna, full-width | 2 columnas | 3 columnas |
| **Modales** | Full-screen sheet | Centered 80% width | Centered 560px max |
| **Tablas** | Cards apiladas | Tabla responsive | Tabla completa |
| **Navigation** | Hamburger → drawer | Tabs horizontales | Sidebar permanente |
| **Breadcrumbs** | "← Volver" solo | 2 niveles | Completo (máx 4) |
| **Charts** | 1 gráfico, scroll horizontal | 2 gráficos lado a lado | Dashboard completo |
| **Forms** | 1 campo por línea | 2 campos por línea | 3 campos por línea |

```css
/* Tailwind config */
module.exports = {
  theme: {
    screens: {
      'xs': '360px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

---

# 7. COMPONENTES UI — BIBLIOTECA COMPLETA

Base: **shadcn/ui + Radix** con personalización Terracota.

## 7.1 Catálogo de Componentes

### Botones

| Variante | Fondo | Texto | Border | Uso |
|---|---|---|---|---|
| **Primary** | Terracota 500 | Blanco | — | CTAs principales: "Enviar reporte", "Votar" |
| **Secondary** | Blanco | Azul Profundo | Gris 300 | Acciones secundarias: "Cancelar", "Ver más" |
| **Ghost** | Transparente | Azul Profundo | — | Acciones terciarias, links en contexto |
| **Destructive** | Terracota 700 | Blanco | — | Eliminar, revocar (con confirmación) |
| **Success** | Verde 500 | Blanco | — | Confirmar, completar |
| **Outline** | Transparente | Terracota 500 | Terracota 500 | Alternativa a Primary sin peso visual |

**Estados de botón:**

| Estado | Cambio visual |
|---|---|
| Default | Color base |
| Hover | Tono 600 (más oscuro) + shadow-sm |
| Active/Pressed | Tono 700 + scale(0.98) |
| Focus | Ring 2px Azul Protección offset 2px |
| Disabled | Gris 300 fondo, Gris 500 texto, cursor not-allowed |
| Loading | Spinner 16px centrado reemplaza texto |

**Tamaños:**

| Tamaño | Altura | Padding H | Font | Uso |
|---|---|---|---|---|
| SM | 32px | 12px | 14px | Inline, badges |
| MD | 40px | 16px | 16px | **Default** |
| LG | 48px | 24px | 18px | CTAs prominentes, mobile |
| XL | 56px | 32px | 18px | Full-width mobile |

### Cards

| Variante | Características | Uso |
|---|---|---|
| **Base** | Fondo blanco, shadow-sm, radius-md | Contenedor general |
| **Elevated** | shadow-md, hover → shadow-lg | Cards interactivas |
| **Outlined** | Border Gris 200, sin shadow | Listas, comparativas |
| **Module** | Borde izquierdo 4px color módulo | Cards dentro de módulo |
| **Status** | Banner top con color semántico | Reportes con estado |
| **Compact** | Padding reducido, sin header | Listas densas |

### Inputs y Forms

| Componente | Base | Personalización CIVICUM |
|---|---|---|
| **Text Input** | Native input | Focus ring Azul Protección, error Terracota, helper text |
| **Select** | Radix Select | Dropdown con iconos, búsqueda integrada |
| **Checkbox** | Radix Checkbox | Check Terracota, indeterminate state |
| **Radio** | Radix Radio | Circle Terracota, scale on select |
| **Switch** | Radix Switch | Verde cuando ON, Gris cuando OFF |
| **Textarea** | Native textarea | Auto-resize, character counter |
| **Search** | Custom | Debounce 300ms, clear button, recent searches |
| **Date Picker** | Custom | Calendario inline mobile, input desktop |
| **File Upload** | Custom | Drag & drop, preview, progress bar |

**Estados de Input:**

| Estado | Visual |
|---|---|
| Default | Border Gris 300, fondo blanco |
| Focus | Border Azul Protección 2px, shadow-sm Azul |
| Error | Border Terracota, helper text Terracota, icono AlertCircle |
| Success | Border Verde, icono CheckCircle |
| Disabled | Fondo Gris 100, texto Gris 400, cursor not-allowed |
| Read-only | Sin border, fondo Gris 50 |

### Feedback Components

| Componente | Variantes | Comportamiento |
|---|---|---|
| **Toast** | Success / Error / Warning / Info | Auto-dismiss 5s, swipe para cerrar, máx 3 visibles |
| **Alert** | Success / Error / Warning / Info | Persistente, con acción opcional |
| **Dialog** | Confirm / Destructive / Informational | Focus trap, ESC para cerrar, backdrop blur |
| **Progress** | Linear / Circular | Color por estado, animación sutil |
| **Skeleton** | Line / Circle / Card / Table | Shimmer animation 1.5s infinite |
| **Spinner** | SM (16px) / MD (24px) / LG (48px) | Terracota rotación 0.8s |

### Navegación

| Componente | Especificación |
|---|---|
| **Smart Dock** | Bottom bar fija, 5 tabs + "Más", icono + label, badge notificación |
| **Breadcrumbs** | Chevron separador, máx 4 niveles, "← Volver" en mobile |
| **Tabs** | Horizontal scroll, underline indicator, badge count |
| **Sidebar** | Solo desktop (LG+), collapsible, iconos + labels |
| **Bottom Sheet** | Drag handle, snap points (25%, 50%, 90%), backdrop dim |
| **Drawer** | Slide from left, overlay 60% opaco, focus trap |

### Datos y Visualización

| Componente | Uso |
|---|---|
| **Badge** | Colores semánticos, SM (20px) / MD (24px), pill shape |
| **Chip** | Fuentes de datos: nombre fuente + fecha, clickable |
| **Tag** | Categorías, removable con X |
| **Avatar** | Fallback iniciales, status indicator (online, offline, verified) |
| **Tooltip** | Delay 500ms, arrow, max-width 200px, dark background |
| **Accordion** | Chevron animado, single/multi open |
| **DataTable** | Sortable, filterable, pagination, responsive → card stack |
| **Chart** | Recharts: Bar, Line, Pie, Donut, Treemap — colores Terracota |

---

# 8. ATMÓSFERAS INMERSIVAS — 6 MUNDOS

Cada módulo es un "mundo" con metáfora espacial, paleta dominante y emociones objetivo.

## 8.1 Mi CIVICUM — "Tu Hogar Cívico"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Tu habitación donde todo está donde lo dejaste |
| **Emoción objetivo** | Control, pertenencia, seguridad |
| **Paleta dominante** | Azul Profundo 50→900 |
| **Temperatura** | Fría-neutra (profesional, confiable) |

### Escenario Visual

- Fondo principal: `#E8EEF1` (Azul 50) con textura sutil de noise
- Dashboard personal como **centro de comando**: cards organizadas en grid
- **GPS Cívico** como mapa visual: trayectorias como senderos con puntos de progreso iluminados
- **Escalera de Verificación** lateral: niveles 0→4 como escalones que se iluminan al avanzar
- **Karma Meter**: barra circular con topes anti-élite (F-10) visualmente claros — "Este es tu máximo. Equidad."
- Actividad reciente como **timeline vertical** con iconos por tipo

### Elementos Inmersivos

| Elemento | Comportamiento |
|---|---|
| GPS Cívico | Mapa con 3 senderos (Crecimiento / Impacto / Explorador) — siguiente misión pulsante |
| Escalera de verificación | Niveles como escalones: completos = Verde, actual = Dorado pulsante, futuros = Gris |
| Karma meter | Barra circular que se llena — al alcanzar tope: "Equidad: tu voz ya pesa lo máximo" |
| Quick actions | FAB contextual: "Siguiente misión" (GPS Cívico) |
| Notificaciones | Punto rojo mínimo (no número) para reducir ansiedad |

### Transiciones

| Trigger | Animación | Duración |
|---|---|---|
| Al entrar | Cards hacen stagger reveal (50ms entre items) | 300ms total |
| Al completar misión | Confetti mínimo + pulse Verde en GPS | 800ms |
| Al subir nivel | Escalón se ilumina con glow Dorado | 500ms |
| Al exportar datos | Icono documento que se "descarga" con progress | 200ms |

---

## 8.2 Academia Cívica — "Taller de Aprendizaje"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Taller artesanal donde construyes tu conocimiento cívico pieza a pieza |
| **Emoción objetivo** | Curiosidad, descubrimiento, logro accesible |
| **Paleta dominante** | Verde Esperanza 50→900 |
| **Temperatura** | Cálida-estimulante |

### Escenario Visual

- Fondo: `#ECFDF5` (Verde 50) con gradiente sutil
- **50 Rutas Ciudadanas** como caminos de aventura: cards horizontales scrolleables con progreso
- **50 Duelos de Poder** como episodios estilo cómic: ilustraciones en escena dual (ciudadano vs institución)
- **250+ cápsulas** en cards compactas con tipo (A-E), duración y estado
- **12 Badges** como logros visuales: brillan cuando se obtienen
- Progreso como **barra horizontal por ruta** con checkpoints

### Estructura de Contenido

| Tipo Cápsula | Icono | Color badge | Duración | Formato |
|---|---|---|---|---|
| A — Teoría | `BookOpen` | Verde 100 | 3-5 min | Cards + infografías |
| B — Casos | `Users` | Verde 200 | 5-7 min | Stories + testimonios |
| C — Herramientas | `Wrench` | Verde 300 | 5-10 min | Tutoriales + descargables |
| D — Reflexión | `Brain` | Verde 400 | 3-5 min | Preguntas + escenarios |
| E — Acción | `Zap` | Terracota 100 | 2-3 min | Call-to-action + links a módulos |

### Transiciones

| Trigger | Animación |
|---|---|
| Al completar cápsula | Checkmark satisfactorio + badge pulse |
| Al desbloquear badge | Badge aparece con scale de 0→1 + shimmer dorado |
| Al iniciar Duelo de Poder | Transición cinematográfica: pantalla se divide en dos |
| Al avanzar en Ruta | Sendero se ilumina progresivamente |

---

## 8.3 Asistente Cívico (Civia) — "Guía de Confianza"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Vecina informada que te orienta con paciencia y respaldo |
| **Emoción objetivo** | Confianza, orientación, tranquilidad |
| **Paleta dominante** | Azul Protección 50→900 |
| **Temperatura** | Fría-acogedora (profesional pero cercana) |
| **Identidad** | Civia — "Tu guía cívica" (F-41) |

### Escenario Visual

- Fondo: `#EFF6FF` (Azul Protección 50) — limpio, profesional
- **Chat interface** limpia con burbujas redondeadas
- Burbujas Civia: fondo Azul Protección 50, border Azul Protección 200
- Burbujas usuario: fondo Gris 100, alineadas a la derecha
- **Indicador de confianza**: chip debajo de cada respuesta con "Fuente: [nombre] | Actualizado: [fecha]"
- Sugerencias como **chips scrolleables** arriba del input
- **Stack anti-alucinación visible**: "Civia cita fuentes oficiales. Si no tiene dato con respaldo, lo dice."

### Bienvenidas (F-41)

**18 variantes cálidas** (rotación aleatoria):
- "¡Hola! Soy Civia, tu guía cívica. ¿En qué puedo orientarte?"
- "Bienvenido. Estoy aquí para ayudarte, vamos de a poco."
- "¿Necesitas resolver algo? Cuéntame y buscamos juntos."

**21 variantes institucionales** (contexto formal):
- "Bienvenido al Asistente Cívico de CIVICUM. ¿Cómo puedo ayudarle?"
- "Ingrese su consulta. Le orientaré con fuentes oficiales."

### Elementos Inmersivos

| Elemento | Comportamiento |
|---|---|
| Typing indicator | 3 dots pulsantes en burbuja Civia |
| Fuente citada | Chip clickable: "📄 SINIM 2024" → abre fuente |
| Confianza | Badge: 🟢 "Dato verificado" / 🟡 "Orientación general" / 🔴 "No puedo confirmar" |
| Templates | Cards de plantillas (20 MVP): "Reclamo municipal", "Solicitud OIRS" — tap para iniciar |
| Modo Calma | Si detecta frustración: tono más empático, opciones simplificadas |

### Anti-alucinación visible (F-17, F-02)

```
┌─────────────────────────────────────┐
│ ℹ️ Civia usa solo fuentes oficiales │
│                                     │
│ Si no tiene respaldo, te lo dice.   │
│ Nunca inventa leyes ni plazos.      │
│                                     │
│ 📊 43+ fuentes oficiales chilenas   │
└─────────────────────────────────────┘
```

---

## 8.4 Alza la Voz + Mesas — "Plaza Ciudadana"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Plaza del barrio donde organizas con tus vecinos |
| **Emoción objetivo** | Urgencia constructiva, organización, comunidad |
| **Paleta dominante** | Terracota 50→900 |
| **Temperatura** | Cálida-activa |

### Escenario Visual

- Fondo: `#FEF2F0` (Terracota 50) — terroso, de acción
- **Feed de reportes** como mosaico geolocalizado: cards con foto + ubicación + estado
- **Mapa interactivo** (PostGIS) como centro visual: puntos por reporte con color según estado
- **Mesas Ciudadanas** como "mesas redondas" visuales: círculos con avatares de participantes
- **Semáforo de Eficiencia** (F-38): indicador municipal prominente
- **Timeline de avance** como línea vertical con estados coloreados

### Estados de Reportes — Sistema Visual

| Estado | Color | Icono | Efecto visual |
|---|---|---|---|
| **NUEVO** | Azul Protección | ➕ | Borde pulsante sutil |
| **VALIDANDO** | Dorado | ⏳ | Shimmer loading |
| **PUBLICADO** | Verde Esperanza | ✓ | Sólido, estable |
| **EN_MESA** | Terracota | 🤝 | Badge "En Mesa" |
| **EN_PROGRESO** | Dorado | 🔧 | Barra de progreso |
| **RESUELTO** | Verde 700 | ✅ | Checkmark + confetti mínimo |
| **ESCALADO** | Terracota 700 | ⚡ | Borde rojo sutil |

### Wizard de Reporte (3 pasos)

```
Paso 1: ¿Qué pasó?        Paso 2: ¿Dónde?          Paso 3: Evidencia
┌───────────────┐         ┌───────────────┐         ┌───────────────┐
│ [Categoría ▼] │         │    📍 MAPA    │         │   📷 FOTO     │
│               │         │  [Pin actual] │         │  [Cámara]     │
│ [Descripción] │         │               │         │  [Galería]    │
│ ............. │         │ [Mi ubicación]│         │               │
│               │         │  o escribir   │         │ [Opcional]    │
│ [Siguiente →] │         │ [Siguiente →] │         │ [Enviar ✓]   │
└───────────────┘         └───────────────┘         └───────────────┘
```

### Mesa Ciudadana — Visual

```
        Mesa: "Mejora Plaza Norte"
          
     👤 Ana    👤 Pedro
        \        /
   👤 Lucía ── 🔵 ── 👤 Juan
        /        \
     👤 Rosa    👤 Carlos
     
  [Kanban simplificado]
  ┌──────┬──────┬──────┐
  │Por   │Hacien│ Hecho│
  │hacer │  do  │      │
  ├──────┼──────┼──────┤
  │Task 1│Task 3│Task 5│
  │Task 2│Task 4│      │
  └──────┴──────┴──────┘
```

### Microinteracciones

| Trigger | Animación |
|---|---|
| Al tomar foto | Shutter flash sutil |
| Al ubicar en mapa | Pin que "cae" con bounce |
| Al apoyar reporte | Botón "Yo también" → counter +1 que sube y se integra |
| Al completar tarea Mesa | Strikethrough animado + Verde flash |
| Al unirse a Mesa | Avatar se suma al círculo con slide |
| Caso resuelto | Card se "archiva" con slide satisfactorio |

---

## 8.5 Cuentas Claras — "Observatorio de Transparencia"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Sala de control minimalista donde los datos cuentan la verdad |
| **Emoción objetivo** | Claridad reveladora, confianza en datos |
| **Paleta dominante** | Dorado Cívico 50→900 |
| **Temperatura** | Neutra-analítica |

### Escenario Visual

- Fondo: `#FFFBEB` (Dorado 50) — luz de advertencia elegante
- **Dashboards** de datos: barras, donuts, líneas de tendencia (Recharts)
- **Comparativas entre comunas**: cards lado a lado con datos contrastantes
- **SINIM** (346 comunas, 24 años): selector de comuna + año como diales
- **Presupuesto Abierto + DIPRES**: treemap simplificado
- **Fuente siempre visible**: chip con nombre de fuente + fecha de actualización

### Indicador de Frescura (F-34)

| Antigüedad | Badge | Color |
|---|---|---|
| < 7 días | "Actualizado hoy" | Verde |
| 7–30 días | "Hace X días" | Dorado |
| 30–90 días | "Hace X meses" | Terracota |
| > 90 días | "Datos de [fecha]" | Gris + alerta |

### Microinteracciones

| Trigger | Animación |
|---|---|
| Al cargar datos | Números "cuentan" desde 0 (count-up 800ms) |
| Al filtrar | Datos se "reorganizan" con stagger (50ms entre items) |
| Hover sobre barra | Valor + contexto en tooltip |
| Al detectar anomalía | Pulse rojo sutil + icono ⚠️ |
| Al marcar favorito | Estrella Dorado fill animation |
| Al exportar | Preview del PDF/CSV antes de descarga |

---

## 8.6 Voto Ciudadano — "El Ágora Democrática"

### Concepto Inmersivo

| Atributo | Especificación |
|---|---|
| **Metáfora** | Salón de actos donde tu voz pesa igual que la de cualquier otro |
| **Emoción objetivo** | Dignidad, solemnidad accesible, igualdad |
| **Paleta dominante** | Terracota (acción) → Verde (resultado) |
| **Temperatura** | Cálida→Esperanzadora |

### Escenario Visual

- Gradiente: Terracota 50 → Verde 50 (de la acción al resultado)
- **Votaciones** como cards prominentes: tema, plazo, participantes
- **Promesómetro** (552+ autoridades): fichas con foto, cargo, semáforo cumplimiento
- **1 persona = 1 voto**: badge de verificación SIEMPRE visible
- **Mandato exportable**: documento formal con diseño oficial

### Flujo de Voto (Actualizado con Saneamiento Λ4-4/F-54)

```
┌──────────────────────────────────────────────┐
│ PRE-VOTO                                      │
│ ┌──────────────────────────┐                  │
│ │ "Lo que necesitas saber" │ ← fuentes citadas│
│ │ [Leer más] [Ir a votar]  │                  │
│ └──────────────────────────┘                  │
├──────────────────────────────────────────────┤
│ MOMENTO DEL VOTO (interfaz limpia)           │
│                                              │
│   ¿Debería la comuna invertir más en         │
│   áreas verdes del sector norte?             │
│                                              │
│   ○ Sí, prioritariamente                     │
│   ○ Sí, pero no como prioridad              │
│   ○ No, hay otras prioridades               │
│   ○ Necesito más información                │
│                                              │
│   [Confirmar voto →]                         │
│                                              │
│   "Tu voto vale 1, como el de todos" (F-10) │
├──────────────────────────────────────────────┤
│ CONFIRMACIÓN CON RESUMEN (Saneamiento Λ4-4) │
│                                              │
│   Vas a votar:                               │
│   ┌────────────────────────────────────┐     │
│   │ "Sí, prioritariamente"             │     │
│   └────────────────────────────────────┘     │
│                                              │
│   [← Cambiar mi respuesta]  [Confirmar ✓]   │
│                                              │
│   Layout XS: stacked vertical, gap 16px     │
│   (F-55 Proximidad de Botones Opuestos)     │
├──────────────────────────────────────────────┤
│ POST-VOTO (con retractación F-54)           │
│                                              │
│   ✓ Tu voto quedó registrado                │
│   📅 07 Feb 2026, 14:32 hrs                  │
│   🗳️ Mandato ciudadano disponible            │
│                                              │
│   ⏳ Puedes cambiar tu voto hasta las 16:32  │
│   [Cambiar mi voto]                          │
│                                              │
│   [Ver resultados] [Exportar mandato]        │
└──────────────────────────────────────────────┘
```

> ⚠️ **Ventana de retractación (F-54):** El usuario tiene 2 horas para cambiar su voto después de registrarlo. Pasado ese período, el voto es definitivo. El botón "Cambiar mi voto" desaparece y se muestra "Tu voto es definitivo". Solo se permite UN cambio (el voto final reemplaza al original, sin historial de cambios visible).

### Clarificación Legal Permanente (F-02)

```
┌─────────────────────────────────────────┐
│ ℹ️ Esto es un voto simbólico            │
│                                         │
│ Sirve para ordenar apoyo ciudadano y    │
│ escalar con evidencia. No obliga por    │
│ sí solo, pero genera mandato.           │
└─────────────────────────────────────────┘
```

---

# 9. SISTEMA DE NAVEGACIÓN — SMART DOCK

## 9.1 Estructura

**Tipo:** Bottom navigation bar fija (mobile-first)
**Comportamiento:** 5 iconos principales + 1 "Más" para módulos secundarios

| Posición | Icono | Label | Módulo | Color activo |
|---|---|---|---|---|
| 1 | `Home` | Inicio | Mi CIVICUM | Azul Profundo |
| 2 | `GraduationCap` | Aprende | Academia Cívica | Verde Esperanza |
| 3 | `MessageCircle` | Civia | Asistente Cívico | Azul Protección |
| 4 | `Megaphone` | Reporta | Alza la Voz + Mesas | Terracota |
| 5 | `MoreHorizontal` | Más | Sheet con Cuentas Claras + Voto | Gris 600 |

## 9.2 Especificaciones

| Propiedad | Valor |
|---|---|
| Altura | 56px (+ safe area iOS) |
| Fondo | Blanco con shadow-lg top |
| Icono inactivo | Gris 400, 24px |
| Icono activo | Color módulo, 24px, filled variant |
| Label | 10px, Nunito Sans 600 |
| Badge notificación | Punto rojo 8px (sin número — reduce ansiedad) |
| FAB contextual | 56px, flotante sobre dock esquina derecha, color módulo |
| Transición activo | 150ms ease-in-out |

## 9.3 Transiciones entre Módulos

Cada cambio de módulo es un **cambio de atmósfera**:

1. Smart Dock icon bounces al seleccionar (scale 1.2→1, 150ms)
2. `--module-accent` CSS variable transiciona (150ms ease-in-out)
3. Contenido hace crossfade suave (200ms)
4. Fondo cambia a temperatura cromática del módulo
5. Si `prefers-reduced-motion`: corte directo sin animación

## 9.4 Estado de Conexión

| Estado | Visual | Texto |
|---|---|---|
| **Online** | Invisible | — |
| **Sync pendiente** | Nube con flecha (Dorado, sutil) | — |
| **Offline** | Banner top info | "Sin conexión — todo funciona, sincronizamos después" |
| **Error** | Toast Terracota | "Algo falló. Guardamos tu trabajo." |

---

# 10. ONBOARDING INMERSIVO — 5 FASES

**Duración total objetivo:** ~8 minutos

## 10.1 Fase 1: Preview de Poder (F-30) — 2 min

**Propósito:** Mostrar al usuario su ecosistema de autoridades ANTES de pedirle nada.

```
┌──────────────────────────────────┐
│     Tu ecosistema de poder       │
│                                  │
│  🏛️ Alcalde: [Nombre]           │
│  👥 Concejales: [N nombres]     │
│  🏢 Diputados: [N nombres]      │
│  📊 Presupuesto comuna: $[X]    │
│                                  │
│  "Estas personas toman           │
│   decisiones que te afectan.     │
│   CIVICUM te ayuda a             │
│   entender y participar."        │
│                                  │
│  [Empezar →]                     │
└──────────────────────────────────┘
```

**Detección:** Geolocalización o selección manual de comuna.

## 10.2 Fase 2: Datos Mínimos (F-03) — 1 min

```
┌──────────────────────────────────┐
│  Solo lo necesario               │
│                                  │
│  Nombre (opcional): [________]   │
│  Comuna: [Selector ▼]           │
│  Email: [________@____]         │
│                                  │
│  ¿Por qué pedimos esto?         │
│  "Tu comuna determina qué       │
│   autoridades e información      │
│   te mostramos. El email es      │
│   para guardar tu avance."       │
│                                  │
│  [Continuar →]  [Explorar sin    │
│                  registro →]     │
└──────────────────────────────────┘
```

**Regla:** "Explorar sin registro" SIEMPRE visible (F-08).

## 10.3 Fase 3: Verificación Progresiva — 30 seg

```
Nivel 0 — Ya estás aquí ✓
Sin verificación. Puedes ver todo el contenido público.

Nivel 1 — Confirma tu email [Enviar código]
Desbloquea: comentar, apoyar reportes.

Niveles 2-4 → Se desbloquean después, cuando quieras.
```

## 10.4 Fase 4: Primera Misión GPS Cívico — 3 min

```
┌──────────────────────────────────┐
│  🧭 Tu primera misión            │
│                                  │
│  "Conoce a tu alcalde"           │
│                                  │
│  [Foto alcalde]                  │
│  [Nombre] — Alcalde de [Comuna]  │
│  Período: 2024-2028              │
│                                  │
│  📊 Presupuesto anual: $[X]M    │
│  📋 Transparencia: [Semáforo]    │
│                                  │
│  ✓ Misión completada             │
│  +10 Karma Cívico                │
│                                  │
│  [Siguiente misión →]            │
└──────────────────────────────────┘
```

## 10.5 Fase 5: Tour Contextual — 2 min

Módulos sugeridos según respuesta de segmentación inicial:

| "¿Qué te trajo hoy?" | Primer módulo | Segundo sugerido |
|---|---|---|
| Resolver problema en mi barrio | Alza la Voz | Civia |
| Entender qué hace mi municipio | Cuentas Claras | Academia |
| Aprender sobre mis derechos | Academia Cívica | Civia |
| Solo quiero mirar | Mi CIVICUM (Dashboard) | GPS Cívico |

---

# 11. FLUJOS COMPLETOS POR MÓDULO

## 11.1 Mi CIVICUM — Flujos

### Flujo: Registro completo
`Splash → Preview Poder → Datos Mínimos → Verificación Email → Primera Misión → Dashboard`

### Flujo: Verificación Nivel 2 (RUT)
`Dashboard → "Desbloquear más" → Ingresar RUT → Validación → Confirmación → Nuevas capacidades visibles`

### Flujo: Exportar datos (F-02)
`Dashboard → Configuración → Exportar mis datos → Seleccionar formato (JSON/PDF) → Generando... → Descargar`

### Flujo: GPS Cívico
`Dashboard → GPS → Seleccionar trayectoria → Ver misión → Completar acción → Karma + siguiente misión`

---

## 11.2 Academia Cívica — Flujos

### Flujo: Consumir cápsula
`Academia → Seleccionar Ruta → Ver cápsulas → Iniciar cápsula → Contenido (swipe/scroll) → Quiz → Resultado → Badge (si aplica) → Siguiente recomendada`

### Flujo: Duelo de Poder
`Academia → Duelos → Seleccionar episodio → Escena dual (ciudadano vs institución) → Decisión del usuario → Consecuencia → Aprendizaje → Badge`

### Flujo: Certificación
`Completar N cápsulas de ruta → Quiz final → Aprobado → Certificado exportable PDF → Compartir`

---

## 11.3 Civia — Flujos

### Flujo: Consulta simple
`Civia → Escribir pregunta → Typing indicator → Respuesta + fuente citada → Chip "¿Te ayudó?" → Fin`

### Flujo: Generar documento
`Civia → "Necesito un reclamo municipal" → Seleccionar plantilla → Wizard datos → Preview → Exportar PDF → Compartir`

### Flujo: Sin respuesta
`Pregunta → Civia busca → "No tengo ese dato con fuente oficial" → Sugerencia alternativa → Link a fuente externa`

---

## 11.4 Alza la Voz — Flujos

### Flujo: Crear reporte
`Feed → FAB "+" → Paso 1: Categoría + descripción → Paso 2: Ubicación (mapa/GPS) → Paso 3: Foto (opcional) → Confirmar → "Listo. Quedó enviado." → Ver en feed`

### Flujo: Crear Mesa
`Reporte con >N apoyos → "Crear Mesa" → Nombre + descripción → Invitar vecinos → Mesa creada → Kanban de tareas`

### Flujo: Escalamiento (F-25)
`Reporte >30 días sin respuesta → Alerta automática → "Puedes escalar" → Seleccionar nivel → Carta generada → Enviar a autoridad`

---

## 11.5 Cuentas Claras — Flujos

### Flujo: Explorar presupuesto
`Cuentas Claras → Mi comuna → Dashboard municipal → Seleccionar área → Detalle + fuente → Comparar con otra comuna`

### Flujo: Comparar comunas
`Cuentas Claras → Comparar → Seleccionar 2 comunas → Cards lado a lado → Indicadores SINIM → Exportar`

---

## 11.6 Voto Ciudadano — Flujos

### Flujo: Votar
`Voto → Ver votaciones activas → Seleccionar → Información + fuentes → Votar → Confirmar → "Tu voto quedó registrado" → Ver resultado parcial`

### Flujo: Promesómetro
`Voto → Promesómetro → Seleccionar autoridad → Compromisos + semáforo → Detalle por promesa → Fuente + fecha`

### Flujo: Exportar mandato
`Votación cerrada → Ver resultado → "Exportar mandato ciudadano" → Preview PDF → Descargar → "Enviar al Congreso" (mailto)`

---

# 12. SISTEMA DE ESTADOS

Cada pantalla tiene **5 estados obligatorios:**

## 12.1 Tabla de Estados por Módulo

| Estado | Visual | Comportamiento |
|---|---|---|
| **Loading** | Skeleton screens (shimmer 1.5s) | NUNCA pantalla en blanco. Skeletons replican estructura final |
| **Empty** | Ilustración duotone + texto motivacional + CTA | "Todavía no tienes reportes. ¿Empezamos?" |
| **Error** | Toast Terracota + acción retry | "Algo falló. Guardamos tu trabajo. [Reintentar]" |
| **Offline** | Banner informativo (NO alarma) + funcionalidad completa Tier LOW | "Sin conexión. Todo funciona, sincronizamos después." |
| **Success** | Checkmark verde + texto confirmatorio + siguiente paso | "Listo. Quedó enviado y te avisamos el siguiente paso." |

## 12.2 Skeleton Screens — Especificación

```
┌─────────────────────┐
│ ████████ ██████     │  ← Header skeleton
│                     │
│ ┌─────────────────┐ │
│ │ ██████████████  │ │  ← Card skeleton
│ │ ████████        │ │
│ │ █████████████   │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ ██████████████  │ │
│ │ ████████        │ │
│ │ █████████████   │ │
│ └─────────────────┘ │
└─────────────────────┘

Shimmer: linear-gradient(90deg, Gris100 → Gris200 → Gris100)
Animation: translateX(-100% → 100%), 1.5s infinite
```

## 12.3 Empty States por Módulo

| Módulo | Ilustración | Mensaje | CTA |
|---|---|---|---|
| Mi CIVICUM | Brújula apuntando | "Tu camino cívico comienza aquí" | "Completar primera misión" |
| Academia | Libro abierto | "250+ cápsulas te esperan" | "Explorar rutas" |
| Civia | Burbuja de chat | "Pregúntale cualquier cosa a Civia" | "Hacer primera consulta" |
| Alza la Voz | Megáfono | "¿Algo que mejorar en tu barrio?" | "Crear primer reporte" |
| Cuentas Claras | Lupa sobre gráfico | "Los datos de tu comuna te esperan" | "Ver presupuesto" |
| Voto Ciudadano | Urna | "Tu voz cuenta. Literalmente." | "Ver votaciones activas" |

## 12.4 offline.html — Diseño Digno (F-07)

```html
<!-- NO es una página de error genérica -->
┌──────────────────────────────────┐
│        [Logo CIVICUM]            │
│                                  │
│    Sin conexión — pero todo      │
│    sigue funcionando             │
│                                  │
│    Puedes:                       │
│    ✓ Ver tus datos guardados     │
│    ✓ Completar cápsulas offline  │
│    ✓ Preparar reportes           │
│    ✓ Consultar información       │
│      guardada                    │
│                                  │
│    Cuando vuelva la señal,       │
│    sincronizamos todo.           │
│                                  │
│    [Continuar offline →]         │
└──────────────────────────────────┘
```

---

# 13. ANIMACIONES Y MICROINTERACCIONES

## 13.1 Principios de Animación

| Principio | Especificación |
|---|---|
| **Duración máxima** | 300ms para transiciones UI, 800ms para celebraciones |
| **Easing** | `ease-in-out` para entradas, `ease-out` para salidas |
| **Reduce motion** | `prefers-reduced-motion: reduce` → corte directo, 0 animaciones |
| **Performance** | Solo `transform` y `opacity` (evitar layout thrashing) |
| **Propósito** | Cada animación tiene un propósito funcional o emocional |

## 13.2 Catálogo de Animaciones

| Animación | Trigger | Duración | CSS/Motion |
|---|---|---|---|
| **Stagger reveal** | Carga de listas/cards | 50ms entre items | opacity 0→1, translateY 8→0 |
| **Crossfade** | Cambio de módulo | 200ms | opacity swap |
| **Scale tap** | Tap en botón/card | 100ms | scale(0.98) → scale(1) |
| **Slide up** | Bottom sheet apertura | 300ms | translateY(100%) → 0 |
| **Bounce** | Smart Dock tab activo | 150ms | scale(1.2) → scale(1) |
| **Count up** | Números en Cuentas Claras | 800ms | 0 → valor final |
| **Confetti mini** | Completar misión/voto | 800ms | 5-8 partículas, Verde/Dorado |
| **Shimmer** | Skeleton loading | 1.5s infinite | Gradiente translación |
| **Pulse** | Notificación, badge nuevo | 1s 2 ciclos | scale(1→1.1→1) |
| **Pin drop** | Ubicar en mapa | 300ms | translateY(-20) + bounce |
| **Fill** | Progreso, estrella favorito | 300ms | width/fill 0→100% |
| **Checkmark** | Confirmación | 300ms | SVG path draw |

## 13.3 Haptic Feedback (mobile)

| Evento | Tipo vibración |
|---|---|
| Tap botón | Light (10ms) |
| Confirmar voto | Medium (20ms) |
| Error | Error pattern (15-30-15ms) |
| Completar misión | Success (10-20ms) |

---

# 14. GESTIÓN EMOCIONAL EN INTERFAZ

## 14.1 Principios Emocionales (H2, H3, F-26)

| Principio | Implementación UI |
|---|---|
| **Frustración → Acción** | Siempre mostrar "siguiente paso" después de pantalla negativa |
| **Rabia como señal, no combustible** | Sin contenido inflamatorio, sin engagement destructivo |
| **Microvictorias** | Celebrar logros pequeños (primer reporte, primera cápsula, primer voto) |
| **Catarsis con límites** | "Puedes decir lo que pasa. Solo cuidemos el respeto." |
| **Esperanza sin épica** | Datos + acción + resultado, sin discurso motivacional vacío |
| **Cansancio respetado** | Nunca presionar. "Cuando estés listo, guardamos tu avance." |

## 14.2 Patrones de Feedback Emocional

| Evento | Visual | Texto |
|---|---|---|
| Completar primera acción | Confetti mínimo + Verde | "Listo. Primer paso dado." |
| Reporte sin respuesta >15 días | Semáforo amarillo | "Puedes escalar si quieres." |
| Dato sin fuente verificable | Fondo gris + icono info | "No tenemos este dato con fuente oficial." |
| Error de sistema | Toast Terracota suave | "Algo falló. Guardamos tu trabajo." |
| Voto registrado | Checkmark + timestamp | "Tu voto quedó registrado. Vale uno, como el de todos." |
| Offline | Banner informativo | "Sin conexión. Todo funciona, sincronizamos después." |

## 14.3 Contenido Sensible (F-19, F-26)

- **Advertencia previa** para temas de estallido social, procesos constitucionales, temas divisivos
- **"No quiero ver esto"** siempre disponible
- **Escudo de identidad** para temas delicados (F-18)
- **Líneas de apoyo** visibles: 131, 149 en contextos de crisis
- **Modo Calma** anti-brigading: desactivar notificaciones de respuestas agresivas

---

# 15. MICROCOPY Y DICCIONARIO DE VOZ

## 15.1 Tono CIVICUM: "Vecino Organizado"

| Atributo | Descripción |
|---|---|
| **Voz** | Vecina informada que te explica claro, sin condescendencia |
| **Registro** | Formal-cercano (tú, no usted; pero sin exceso de chilenismos) |
| **Actitud** | Empática pero directa. Cero paternalismo. |
| **Compromiso** | Solo promete lo que puede cumplir (F-02) |

## 15.2 Palabras Preferidas

`vecino` · `comuna` · `barrio` · `claro` · `evidencia` · `fuente` · `paso a paso` · `listo` · `seguimiento` · `estado` · `resolver` · `ordenar` · `cuidar` · `avance` · `resultado` · `verificado`

## 15.3 Palabras PROHIBIDAS

`revolución` · `derrocar` · `enemigo` · `traidor` · `"ellos"` · `"la casta"` · `"verdad absoluta"` · `"garantizamos"` · `"cambiemos el mundo"`

## 15.4 Patrones de Microcopy

### Confirmaciones
- "Listo. Quedó enviado y te avisamos el siguiente paso."
- "Se guardó tu reporte. Cuando vuelva la señal, lo sincronizamos."
- "Tu voto quedó registrado."

### Límites (Honestidad Radical, F-02)
- "Esto es un voto simbólico: sirve para ordenar apoyo y escalar con evidencia, no para obligar por sí solo."
- "No tengo ese dato con fuente oficial. Si quieres, te muestro lo que sí está publicado."
- "Civia no puede verificar esto. Te sugerimos consultar directamente en [fuente]."

### Invitación sin presión
- "Puedes explorar sin registrarte. Cuando estés listo, guardamos tu avance."
- "Si quieres ayudar, esta es la misión corta para hoy."
- "Hay un camino. Cuando quieras, acá está."

### Errores (humanos, no técnicos)
- "Algo falló de nuestro lado. Guardamos tu trabajo."
- "No pudimos conectar. Mientras tanto, todo lo guardado sigue disponible."
- "Estamos ajustando algo. Vuelve en un momento."

---

# 16. ACCESIBILIDAD WCAG 2.1 AA

## 16.1 Requisitos Obligatorios

| Criterio | Mínimo | Objetivo |
|---|---|---|
| Contraste texto normal | 4.5:1 | 7:1 (AAA) |
| Contraste texto grande | 3:1 | 4.5:1 |
| Área táctil | 44×44px | 48×48px |
| Focus visible | Ring 2px | Ring 2px + offset 2px |
| Navegación teclado | 100% flujos | 100% flujos |
| Screen reader | Compatibilidad total | Probado con VoiceOver + TalkBack |
| Alt text imágenes | 100% | 100% + contexto descriptivo |
| Formularios | Labels visibles + aria | Labels + helpers + errores vivos |

## 16.2 Modos Adaptativos (4)

| Modo | Activación | Cambio |
|---|---|---|
| **Alto Contraste** | Configuración / OS | Bordes más gruesos, fondos más oscuros, sin gradientes |
| **Daltónicos** (3 tipos) | Configuración | Patrones + texturas + labels reemplazan solo-color |
| **Texto Grande** | Configuración / OS | Base 20px, escalado proporcional |
| **Reducción Movimiento** | `prefers-reduced-motion` | Cero animaciones, transiciones instantáneas |

## 16.3 Navegación por Teclado

| Tecla | Acción |
|---|---|
| `Tab` | Mover focus al siguiente elemento interactivo |
| `Shift+Tab` | Mover focus al anterior |
| `Enter` / `Space` | Activar elemento |
| `Escape` | Cerrar modal/sheet/dropdown |
| `Arrow keys` | Navegar dentro de listas, tabs, menús |
| `Home` / `End` | Primero/último item de lista |

---

# 17. EXPERIENCIA POR TIER

Decisiones F-05, F-07, F-14: Tres niveles de experiencia según dispositivo.

## 17.1 Detección Automática

| Tier | Detección | Cache | Fonts | Imágenes | Animaciones | IA |
|---|---|---|---|---|---|---|
| **HIGH** | WebGPU + >4GB RAM | ~15MB | Google Fonts completo | WebP optimizado | Todas | WebLLM local (Llama 3 8B) |
| **MEDIUM** | >2GB RAM, sin WebGPU | ~3MB | Latin subset | Thumbnails | Reducidas | Templates + reglas |
| **LOW** | Dispositivos antiguos | ~800KB | System fonts | SVG iconos only | Zero | Guiado por formularios |

## 17.2 Core Web Vitals — Target Tier LOW (Android Go + 3G)

| Métrica | Target | Medición |
|---|---|---|
| FCP (First Contentful Paint) | ≤2.0s | Lighthouse |
| LCP (Largest Contentful Paint) | ≤4.0s | Lighthouse |
| TTI (Time to Interactive) | ≤5.0s | Lighthouse |
| CLS (Cumulative Layout Shift) | ≤0.2 | Lighthouse |
| FID (First Input Delay) | ≤200ms | RUM |

---

# 18. PWA ASSETS Y OFFLINE DIGNITY MODE

## 18.1 manifest.json

```json
{
  "name": "CIVICUM - Sistema Nervioso Cívico",
  "short_name": "CIVICUM",
  "description": "Transforma frustración en acción democrática concreta",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#264653",
  "theme_color": "#C2503A",
  "orientation": "portrait-primary",
  "icons": [
    { "src": "/icons/icon-48.png", "sizes": "48x48", "type": "image/png" },
    { "src": "/icons/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-256.png", "sizes": "256x256", "type": "image/png" },
    { "src": "/icons/icon-384.png", "sizes": "384x384", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

## 18.2 Service Worker Strategy (Workbox)

| Recurso | Estrategia | Cache name | TTL |
|---|---|---|---|
| App Shell (HTML, CSS, JS) | Cache First | `app-shell-v1` | Hasta nueva versión |
| Fonts | Cache First | `fonts-v1` | 1 año |
| Imágenes | Stale While Revalidate | `images-v1` | 30 días |
| API responses | Network First | `api-v1` | 1 hora |
| Knowledge Cache | Cache First | `knowledge-v1` | Hasta update push |
| User data | Network Only + IndexedDB fallback | `user-data` | — |

## 18.3 Offline Flows

| Flujo | Disponibilidad Offline |
|---|---|
| Ver dashboard personal | ✅ Completo (IndexedDB) |
| Consumir cápsulas educativas | ✅ Cápsulas precargadas |
| Consultar Civia | ⚠️ Solo templates Piso 0 |
| Crear reporte | ✅ Guardar → sync después |
| Ver datos comuna | ✅ Última versión cacheada |
| Votar | ❌ Requiere verificación online |
| Exportar documentos | ✅ Si datos en cache |

---

# 19. DECISIONES F-XX MAPEADAS A UI

| F-XX | Nombre | Impacto directo en diseño |
|---|---|---|
| **F-01** | Complejidad MVP | 6 mundos completos, no 6 pantallas |
| **F-02** | Honestidad Radical | Fuentes siempre visibles, límites explícitos |
| **F-03** | Empoderamiento Verificado | Datos mínimos, "por qué lo pedimos" |
| **F-04** | Construcción Secuencial | Bloques completos antes de lanzar |
| **F-05** | Apartidismo Total | Cero estética partidista |
| **F-06** | Educación Progresiva | Microlearning 5-10min, 3 niveles |
| **F-07** | Offline Dignity Mode | 3 tiers, offline.html digno |
| **F-08** | Gamificación Responsable | Karma sin adicción, badges opcionales |
| **F-09** | Coherencia Marca | Paleta Terracota en todo |
| **F-10** | Anti-Élite | Karma con topes, 1 persona = 1 voto |
| **F-14** | Modo Lite Automático | Detectar tier, adaptar visual |
| **F-17** | IA como Asistente | Civia no reemplaza decisión humana |
| **F-19** | Advertencia Riesgo | Alertas contenido sensible |
| **F-23** | GPS Cívico | 50 misiones, 3 trayectorias, mapa visual |
| **F-26** | Trauma Cívico | Warnings contenido estallido |
| **F-30** | Preview de Poder | Onboarding muestra autoridades |
| **F-33** | Arquitectura Offline | SW, IndexedDB, Background Sync |
| **F-34** | Frescura Datos | Indicador antigüedad |
| **F-35** | Personalización Ética | Sin tracking invisible |
| **F-38** | Semáforo Eficiencia | Indicador respuesta municipal |
| **F-41** | Identidad Civia | Personalidad, tonos, bienvenidas |
| **F-45** | Testing Obligatorio | Vitest + Playwright + jest-axe |
| **F-54** | Reversibilidad y Undo | Snackbar con deshacer, grace period 5s, soft-delete 30 días, vote retraction 2h |
| **F-55** | Proximidad Botones Opuestos | Stacked vertical en XS, gap 16px, diferenciación Destructive/Ghost |

---

# 20. CHECKLIST DE VALIDACIÓN POR PANTALLA

## 20.1 Funcional

- [ ] ¿Funciona en Android Go ($50 USD) con 3G simulado?
- [ ] ¿S4 (Mayor Cauteloso) puede completar sin ayuda?
- [ ] ¿El flujo completo toma ≤3 minutos?
- [ ] ¿Hay "siguiente paso" visible en cada pantalla?
- [ ] ¿Las fuentes de datos son visibles donde corresponde?
- [ ] ¿Los 5 estados están diseñados (loading, empty, error, offline, success)?

## 20.2 Visual/Inmersivo

- [ ] ¿El módulo "se siente" como su metáfora espacial?
- [ ] ¿La paleta cromática corresponde al módulo activo?
- [ ] ¿Los colores cumplen WCAG AA (4.5:1 texto normal)?
- [ ] ¿Las animaciones respetan `prefers-reduced-motion`?
- [ ] ¿El Tier LOW funciona sin imágenes, fonts custom, animaciones?

## 20.3 Emocional

- [ ] ¿La pantalla genera la emoción objetivo del módulo?
- [ ] ¿No hay elementos que exploten rabia o FOMO?
- [ ] ¿Hay salida digna de cada flujo?
- [ ] ¿El microcopy sigue tono "Vecino Organizado"?
- [ ] ¿Los contenidos sensibles tienen advertencia previa?

## 20.4 Apartidismo (F-05)

- [ ] ¿Ninguna combinación de colores evoca partidos chilenos?
- [ ] ¿Los datos se presentan sin sesgo editorial?
- [ ] ¿Todas las autoridades reciben tratamiento visual igual?
- [ ] ¿No hay lenguaje que sugiera posición política?

---

# 21. ESPECIFICACIONES TÉCNICAS PARA DESARROLLO

## 21.1 Stack Tecnológico

| Tecnología | Uso | Versión |
|---|---|---|
| React 18 | UI + concurrent features | 18.x |
| TypeScript | Type safety | 5.x |
| TanStack Query | Data fetching + optimistic updates | 5.x |
| Zustand | Estado global (módulo activo, tema, tier) | 4.x |
| Tailwind CSS | Utility-first styling + tokens Terracota | 3.x |
| shadcn/ui + Radix | Componentes accesibles base | Latest |
| Workbox | Service Workers + caching strategies | 7.x |
| Recharts | Visualización de datos | 2.x |
| React Hook Form + Zod | Formularios + validación | Latest |
| Framer Motion | Animaciones (con reduced-motion respect) | 11.x |
| PostGIS | Mapas geolocalizados | Via API |
| Vitest + Playwright + jest-axe | Testing (F-45) | Latest |

## 21.2 Estructura de Archivos

```
src/
├── components/
│   ├── ui/              # shadcn/ui + custom (Button, Card, Input, etc.)
│   ├── navigation/      # SmartDock, Breadcrumbs, Sidebar
│   ├── feedback/        # Toast, Alert, Dialog, Skeleton
│   └── data-viz/        # Charts, Tables, Indicators
├── modules/
│   ├── mi-civicum/      # Dashboard, GPS, Verificación, Export
│   ├── academia/        # Rutas, Cápsulas, Duelos, Badges
│   ├── civia/           # Chat, Templates, AntiHallucination
│   ├── alza-la-voz/     # Reportes, Mapa, Mesas, Escalamiento
│   ├── cuentas-claras/  # SINIM, Presupuesto, Comparador
│   └── voto-ciudadano/  # Votación, Promesómetro, Mandato
├── hooks/
│   ├── useModuleTheme.ts    # Cambio de atmósfera cromática
│   ├── useDeviceTier.ts     # Detección HIGH/MED/LOW
│   ├── useOffline.ts        # Estado de conexión
│   └── useAccessibility.ts  # Reduced motion, contrast, font size
├── styles/
│   ├── tokens.css           # CSS variables Terracota
│   ├── animations.css       # Keyframes con reduce-motion
│   └── tiers/               # HIGH.css, MEDIUM.css, LOW.css
├── lib/
│   ├── cache/               # Workbox strategies
│   ├── storage/             # IndexedDB wrappers
│   └── analytics/           # Privacy-first, no tracking invasivo
└── public/
    ├── manifest.json
    ├── sw.js
    ├── offline.html
    └── icons/               # PWA icons all sizes
```

## 21.3 Testing Obligatorio (F-45)

| Tipo | Herramienta | Coverage mínimo | Enfoque |
|---|---|---|---|
| **Unit** | Vitest | 60% | Componentes, hooks, utils |
| **E2E** | Playwright | 100% flujos críticos | 6 flujos happy path + offline |
| **Accessibility** | jest-axe | 100% componentes | WCAG AA automated |
| **Visual** | Playwright screenshots | 20 pantallas × 3 breakpoints | Regresión visual |
| **Performance** | Lighthouse CI | Score ≥90 | Cada PR |
| **Offline** | Playwright + network throttling | Todos los flujos offline | Simular 3G / offline |
| **Fat-Finger** | Playwright | 7 tests críticos | Doble-tap, proximidad, undo, touch targets |

## 21.4 Fat-Finger E2E Tests (Saneamiento Λ4-8/F-45)

> Categoría de tests específicos para errores de input accidental. Archivo: `fat-finger.spec.ts`

| Test ID | Nombre | Qué valida |
|---|---|---|
| FF-01 | `double-tap-submit` | Doble toque rápido en "Enviar" envía solo 1 request |
| FF-02 | `adjacent-buttons-spacing` | Botones opuestos tienen gap ≥ 16px; stacked en XS |
| FF-03 | `touch-targets-minimum` | Todos los elementos interactivos ≥ 44×44px |
| FF-04 | `undo-snackbar-report` | Enviar reporte → snackbar con "Deshacer" aparece → toca Deshacer → reporte NO enviado |
| FF-05 | `confirm-before-destructive` | Toda acción destructiva muestra dialog de confirmación antes de ejecutar |
| FF-06 | `input-error-recovery` | Input inválido muestra error in-line no-culpabilizante → corregir → error desaparece |
| FF-07 | `accidental-back-navigation` | Datos de formulario se preservan si el usuario navega atrás accidentalmente |

---

# CIERRE

Este documento no es un manual de estética. Es un **contrato de experiencia**: cada pixel, cada transición, cada palabra existe para que un ciudadano chileno — cansado, desconfiado, con poco tiempo y un teléfono básico — pueda transformar su frustración en algo concreto, verificable y digno.

> *"Hacer que lo cívico deje de ser un laberinto y se convierta en un camino corto, verificable y humano."*

---

**Base documental validada:** Documentación Integral v1.0 (Enero 2026), Anexo Design System Terracota v1.4, Anexo Decisiones F-01 a F-55, Anexo Módulos MVP Exhaustivo, Anexo Arquitectura Técnica Completa, Anexo Fundamentos Antropológicos v1.0, Identidad de Marca v1.0, 80 Roles de Auditoría, SuperPrompt UI Inmersivo v1.0, Plan Definitivo OpenClaw v1.0, Catálogo Definitivo Skills v1.0 — todos con estado APROBADO.

**Decisiones integradas:** F-01 a F-55 (53 decisiones documentadas, 100% mapeadas a UI).

**Segmentos cubiertos:** S1 a S6 (6 segmentos por fricción, validados con S4 como estándar mínimo).

**Hallazgos culturales aplicados:** H1 a H9 (9 hallazgos antropológicos chilenos).

---

*CIVICUM — Sistema Nervioso Cívico de Chile*
*Documento Definitivo de Diseño UI/UX Inmersivo v1.0*
*Febrero 2026*
