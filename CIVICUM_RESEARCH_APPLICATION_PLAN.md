# CIVICUM_RESEARCH_APPLICATION_PLAN.md
## Plan Maestro de Aplicación de la Investigación "Naturaleza Humana Chilena"
## Mapeo exhaustivo: cada hallazgo → cambio concreto de UI/UX/módulo/herramienta
## Fecha: 2026-08-13 | Por: Hermes Agent + Daniel Aguirre
## Estado: PROPUESTA — Requiere aprobación de Daniel

---

## 🎯 OBJETIVO

Aplicar **rigurosa y exhaustivamente** cada hallazgo minucioso de los 15 documentos de la investigación "Naturaleza Humana Chilena" (~400 KB) para:

1. **Facilidad de uso extrema** — cualquier chileno, cualquier dispositivo, cualquier contexto
2. **Diseño UI** moderno, minimalista, accesible, apartidista, cálido
3. **Diseño UX** culturalmente apropiado para Chile
4. **Sensación inmersiva** de modernidad + minimalismo al ingresar
5. **Cada herramienta y módulo** optimizado por categoría de usuario (S1-S6)
6. **Nuevas herramientas/módulos** cuando la investigación lo exija

---

## 📐 SECCIÓN 1: SISTEMA DE DISEÑO INMERSIVO (UI)

### 1.1 Sensación inmersiva al ingresar (Parte 5.1, 5.4, 7.1, 7.2)

**Principio rector**: "Vecino organizado que sabe lo que hace" — cercanía + competencia. No startup gringa, no gobierno, no ONG tradicional, no partido, no activismo radical, no estéticajuvenil exclusiva.

#### 1.1.1 Landing page — primera impresión (Nivel 0→1 Escalera Confianza)

| Elemento | Especificación concreta | Fuente |
|---|---|---|
| **Tagline hero** | "De la queja a la acción." (5 palabras, línea principal, 48px+) | Parte 7.2 línea 56 |
| **Subtítulo hero** | "Miles de vecinos se organizan contigo para arreglar lo que importa. Gratis, fácil y con respaldo legal." | Parte 7.2 pitch corto + Parte 5.4 "amigo inteligente" |
| **CTA principal** | Botón grande (56px alto), texto "Empieza ya" (no "Regístrate" — fricción) | Parte 4.4: registro tardío, explorar primero |
| **CTA secundario** | "Solo mirar" → modo visitante sin registro | Parte 4.4 línea 80: "Permitir navegar sin registro" |
| **Bloque "Lo que hemos logrado"** | 3 victorias ciudadanas con cifras reales ANTES del CTA | Parte 4.4 línea 62: "antes de que el usuario registre o publique nada" |
| **Sello "Independiente"** | Badge visible: "100% ciudadano • Sin partidos • Sin publicidad" | Parte 4.4 línea 56, Parte 7.2 |
| **Foto de portada** | Vecinos reales chilenos en plaza/sede social (NO stock, NO gringos) | Parte 5.1 líneas 153-154 |
| **Sección "Quiénes Somos"** | Fotos + nombres reales del equipo, en body (NO footer) | Parte 4.4 línea 116 |
| **Transparencia financiera** | Mini-card: "Financiado por ciudadanos como tú" + link a /transparencia | Parte 7.2 líneas 100-101, 129 |
| **Velocidad de carga** | LCP < 2.5s en 3G (tier MID), < 1.5s en WiFi (tier HIGH) | Parte 5.1 líneas 102-115 |

#### 1.1.2 Inmersión moderna-minimalista

| Patrn | Implementacin | Fuente |
|---|---|---|
| **Espacio en blanco generoso** | Padding 24px mínimo entre bloques, margin 32px entre secciones | Parte 5.1 línea 167: "Baja densidad en landing" |
| **Una idea por pantalla** | En móvil, cada viewport tiene 1 acción principal clara | Parte 5.1 línea 172: "mejor scroll que confundir" |
| **Tipografía jerárquica clara** | Hero 48px → Título 32px → Subtítulo 24px → Body 16px → Caption 14px | Parte 5.1 líneas 59-63 |
| **Animaciones sutiles con propósito** | Framer Motion: fade-in 200ms, slide 300ms. NUNCA parallax, bounce excesivo | Parte 5.1 línea 98: prefers-reduced-motion |
| **Microinteracciones de feedback** | Tap → ripple 150ms + haptic vibrate 10ms (móvil) | Parte 5.4: retroalimentación inmediata |
| **Skeleton screens** | Placeholder gris con pulse 1.5s en TODA carga de datos | Parte 5.4 líneas 93-94: "nunca pantalla en blanco" |
| **Gradiente de confianza** | Fondo: gradiente sútil de #FAFAF8 → #F5F3EF (cálido, no clínico) | Parte 5.1: "grises cálidos, no azulados fríos" |

### 1.2 Paleta de colores (Parte 5.1 líneas 66-81)

**ADVERTENCIA**: El Terracota #C2503A actual debe validarse. La investigación prohíbe rojo partidista (#CC0000) y combinaciones azul+rojo.

| Rol | Color actual | Propuesta ajustada | Justificación |
|---|---|---|---|
| Primario | #C2503A (terracota) | **Mantener** pero validar con test usuarios S1-S6 | Parte 5.1: "naranja cálido que aporta energía y cercanía" ✅ — NO es #CC0000 rojo partidista |
| Secundario | #264653 (teal oscuro) | **Mantener** | Parte 5.1: "verde azulado (teal) que combina confianza+frescura" ✅ |
| Éxito/Esperanza | #0D7A5F (verde) | **Mantener** | Parte 5.1: "verde para éxito/confirmación" ✅ |
| CTA/Acción | #2563EB (azul) | **⚠️ REVISAR** — Parte 5.1 prohíbe "azul político tradicional #0033A0" | #2563EB es azul brillante, no #0033A0. Probablemente OK pero validar |
| Neutros | Grises actuales | Cambiar a **grises cálidos** (#3D3D3A, #6B6B66, #9E9E99, #E5E3DF) | Parte 5.1 línea 69: "grises cálidos con leve tinte beige, no azulados" |
| Fondo | — | #FAFAF8 (cálido, no blanco puro) | Parte 5.1: "evitar sensación clínica" |
| ERROR | Rojo | #D64545 (rojo desaturado, no partidista) | Parte 5.1: "rojo para error, pero calibrado" |
| ADVERTENCIA | — | #E8A838 (ámbar cálido) | Parte 5.1: "amarillo/naranja para advertencias" |

**Acción**: Test rápido con 5 usuarios S1-S6: "¿Estos colores te recuerdan a algún partido político?" Si ≥1 responde sí → ajustar primario a teal #2A9D8F o morado desaturado #6B5B95.

### 1.3 Tipografía (Parte 5.1 líneas 58-64)

| Elemento | Especificación | Estado actual | Acción |
|---|---|---|---|
| Fuente body | Inter, Nunito, Source Sans Pro o Work Sans | Nunito Sans | ✅ Mantener |
| Fuente títulos | Mismafamilia o serif complementaria para emotividad | IBM Plex Sans | ✅ Mantener |
| Fuente mono/datos | Monoespaciada para cifras/bancos | IBM Plex Mono | ✅ Mantener |
| Tamaño base | 16px (1rem) mínimo, nunca menor para body | Verificar en componentes | **Auditar todos los componentes** |
| Tamaño mínimo absoluto | 14px solo para captions/labels secundarios | Verificar | **Auditar** |
| Línea de altura | 1.5-1.6 para body (legibilidad adulto mayor) | Verificar | **Establecer como estándar** |

### 1.4 Iconografía (Parte 5.1 líneas 83-89)

| Elemento | Especificación | Acción |
|---|---|---|
| Estilo | Outline (contorneado), NO relleno | Verificar Lucide icons |
| Set único | Lucide, Phosphor, o Heroicons (uno solo) | Verificar consistencia |
| Tamaño mínimo | 16px reconocible | Auditar |
| Semántica | Icono + texto SIEMPRE (nada solo icono para S3/S4) | **Regla obligatoria** |
| Decorativos | Prohibidos sin función informativa | Auditar y eliminar |

### 1.5 Accesibilidad WCAG 2.1 (Parte 5.1 líneas 91-99)

| Criterio | Estándar | Implementación |
|---|---|---|
| Contraste texto normal | ≥ 4.5:1 (AA) | Verificar todas las combinaciones con herramientas automáticas |
| Contraste texto grande | ≥ 3:1 (AA) | Verificar títulos |
| Contraste crítico (botones, alertas) | ≥ 7:1 (AAA) | Verificar CTA principal |
| Touch target | ≥ 44x44px (WCAG 2.2 AAA: 2.5.5) | **Auditar todos los botones** — si hay <44px, añadir padding transparente |
| Navegación teclado | Tab order lógico, focus visible | Verificar con tab manual |
| Lectores de pantalla | ARIA labels, alt text, HTML semántico | Verificar todos los componentes |
| Alto contraste | Probar con modo alto contraste del SO | Probar en Windows |
| Reduce motion | `prefers-reduced-motion: reduce` → eliminar animaciones | Implementar en CSS |
| Daltonismo | Verificar que info no depende solo de color | Añadir patrones/formas a gráficos |

---

## 🧠 SECCIÓN 2: SISTEMA UX CULTURALMENTE APROPIADO

### 2.1 Los 10 Patrones UX Culturales (Parte 5.4 — 147 líneas)

Cada patrón traducido a implementación concreta:

#### PATRÓN 1: Confianza Inicial
| Hallazgo | Implementación en CIVICUM | Módulo |
|---|---|---|
| "Hola, soy tu compañero cívico. ¿Qué problema quieres resolver hoy?" | Asistente Cívico saludo inicial (no "Bienvenido al sistema") | Asistente Cívico |
| "Sin vueltas: te ayudamos a que tu reclamo llegue y tenga respuesta" | Subtítulo bajo saludo del asistente | Asistente Cívico |
| Onboarding inverso: explorar sin registro | Modo visitante: navegar radar, ver problemas, leer mesas | Global |
| Victórias visibles ANTES de registro | Bloque "Lo que hemos logrado" en landing con 3 casos reales | Landing |

#### PATRÓN 2: Autoridad (Formalidad accesible)
| Hallazgo | Implementación | Módulo |
|---|---|---|
| Vista dual "Oficio / En sencillo" | Toggle en cada reporte: vista legal formal (VISTOS, CONSIDERANDO) + explicación simple | Alza la Voz |
| "Este documento le pide formalmente a tu municipio que repare el alumbrado" | Tooltip explicativo bajo vista legal | Alza la Voz |
| Documentos con membrete, folio, código de barras | Plantilla PDF automática con formato oficial | Alza la Voz |
| Comparaciones coloquiales para datos complejos | "Equivale a 5.000 kilos de pan" junto a cifras presupuestarias | Cuentas Claras |

#### PATRÓN 3: Participación (Empoderar sin individualismo)
| Hallazgo | Implementación | Módulo |
|---|---|---|
| "5 problemas del barrio resueltos este mes gracias a vecinos activos" | Radar Vecinal: métricas colectivas, no individuales | Mi CIVICUM / Radar |
| Primera victoria rápida | Tras primer reporte: "Tu reporte ya tiene 10 apoyos. ¡Estamos más cerca!" | Alza la Voz |
| Plan B automático si autoridad no responde | "El municipio no respondió. Escalamos a Contraloría con expediente automático." | Alza la Voz |
| Notificaciones cahuín constructivo | "¿Sabías que en tu comuna gastaron $X en Y? Entérate y opina" | Cuentas Claras |
| **Karma → Contribuciones Verificadas** | Sección privada en Mi CIVICUM: "Ayudé a 12 vecinos", "Verifiqué 8 reportes" — NUNCA pública, NUNCA ranking | Mi CIVICUM |

#### PATRÓN 4: Anonimato / Identidad
| Hallazgo | Implementación | Módulo |
|---|---|---|
| Seudónimo "Vecino #405 de Comuna X" | Alias automático al registro, visible en todo contenido público | Global |
| Icono candado + "Tu identidad real NO será pública" | Banner en Alza la Voz y Mesas | Alza la Voz, Mesas |
| Verificación interna (RUT/biometría) no expuesta públicamente | Servicios backend separados, API nunca expone nombre real | Backend |
| Opción revelar identidad (opt-in explícito) | Toggle en perfil: "Usar mi nombre real en esta iniciativa" | Mi CIVICUM |
| Nivel 0 anónimo: explorar sin cuenta | Modo visitante sin límite de tiempo | Global |

#### PATRÓN 5: Conflicto
| Hallazgo | Implementación | Módulo |
|---|---|---|
| Moderación 3 capas: automático → Jurado Digital → Consejo Cívico | Sistema de filtros + panel jurado + escalamiento humano | Global |
| "Modo Calma": congelar métricas si spike negativo | Detector de brigading (>X votos negativos en Y minutos) → congela contador público | Mesas, Termostato |
| Tarjeta Amarilla: advertencia + opción editar (no ban inmediato) | Diálogo: "Tu mensaje tiene expresiones contra las normas. Edítalo antes de publicar." | Mesas |
| "Debate en revisión por Jurado para mantener respeto" | Badge visible cuando contenido está en moderación | Mesas |
| Botón "Reportar abuso" en cada post | Accesible en 1 tap, nunca escondido en menú | Global |

#### PATRÓN 6: Retroalimentación (Ciclo cerrado)
| Hallazgo | Implementación | Módulo |
|---|---|---|
| Timeline visual con estados y fechas | Componente reutilizable: "Enviado → En revisión → Respondido → Resuelto" con timestamps | Alza la Voz, Voto, Mesas |
| Notificación 24h: "10 vecinos se unieron. Quedan 4 días de plazo." | Cron job + push notification + email | Alza la Voz |
| Día 5 sin respuesta: "Activamos plan B: Contraloría" | Escalamiento automático con notificación | Alza la Voz |
| "Seguimos aquí. Tu reporte lleva 3 días en bandeja municipal." | Notificación de estado sin novedades (romper silencio) | Alza la Voz |
| Cierre: "¡Lo logramos! La muni comenzó reparaciones." | Notificación de victoria + sumar a todos los apoyantes | Alza la Voz |

#### PATRÓN 7: Celebración
| Hallazgo | Implementación | Módulo |
|---|---|---|
| "¡100 problemas resueltos gracias a tu comunidad este mes!" | Dashboard comunal: métricas colectivas | Mi CIVICUM |
| Insignias de servicio: "Participó en Mesa de Presupuesto 2025" | Sección "Logros Comunitarios" en perfil (NO "Mis premios") | Mi CIVICUM |
| Diseño sobrio: cintas/sellos, NO trofeos dorados | Estilo visual de badges: flat, colors de paleta, sin brillo | Mi CIVICUM |
| Celebración privada del aporte individual: "Tus aportes ayudaron a resolver 5" | Notificación interna, nunca pública | Mi CIVICUM |
| **Prohibido**: confeti excesivo, rankings, "Usuario #1" | Policy de diseño: celebrar el logro, no al héroe | Global |

#### PATRÓN 8: Error / Fracaso
| Hallazgo | Implementación | Módulo |
|---|---|---|
| Datos desactualizados: atenuado + ⚠️ + "Última actualización: X. Te avisamos cuando haya nuevo dato." | Componente "StaleDataBadge" reutilizable | Cuentas Claras, todos los datos |
| Error formulario: sacudida leve + campo en rojo suave + "Porfa completa este dato 🙏" | Validación en tiempo real, tono cercano | Global formularios |
| "No pudimos conectar con el servicio municipal. Reintentaremos automáticamente." | Error UI con causa + acción automática | Global |
| Justicia restaurativa: Tarjeta Amarilla + opción editar (no ban) | Diálogo educativo, no punitivo | Mesas |
| Asistente no sabe: "No estoy seguro; déjame buscar un poco más" | Respuesta honesta, no "No se encontró" | Asistente Cívico |

#### PATRÓN 9: Espera / Incertidumbre
| Hallazgo | Implementación | Módulo |
|---|---|---|
| "🔎 Buscando en el Diario Oficial..." → "📂 Revisando archivos municipales..." | Placeholders conversacionales dinámicos en Asistente | Asistente Cívico |
| "Subiendo foto (2 MB)…" con barra de progreso | Progreso con contexto, no spinner eterno | Global uploads |
| "Verificando autenticidad de tu cédula (20%... 50%... ✅ Verificado)" | Checklist visual con ticks por sub-paso | Verificación identidad |
| Timeline de espera: "Día 3 de 5 de espera estándar" | Panel "Mis gestiones en curso" con barra de tiempo | Mi CIVICUM |
| "Está tardando más de lo normal... ¿Quieres que te avise por correo?" | Offer async notification en espera prolongada | Asistente Cívico |

#### PATRÓN 10: Colectividad (Minga Digital)
| Hallazgo | Implementación | Módulo |
|---|---|---|
| "María de tu cuadra reportó iluminación. Súmate aquí." | Radar Vecinal: feed de actividad vecinal con nombres/alias | Mi CIVICUM / Radar |
| "🤝 Colabora: Este reporte sería más fuerte con una foto. Si vives cerca, sube una." | Bloque de co-creación en reportes existentes | Alza la Voz |
| Tareas asignables en Círculos: "Tarea X – [Tomar esta tarea]" | Tablero Kanban simple en Círculos | Círculos de Acción |
| "Juan y Ana, sus ideas se complementan. ¿Quieren unir fuerzas?" | Detección automática de propuestas similares >80% | Arena de Ideas |
| "Veamos juntos esa información" — Asistente usa pronombres colectivos | Guía de estilo del Asistente: "nosotros" > "tú" | Asistente Cívico |
| Invitación vía WhatsApp con link directo a misión | Share button → deeplink | Círculos, Alza la Voz |

### 2.2 Ciclo Emocional del Ciudadano → Journey Map (Parte 3.3)

| Fase | Trigger de entrada |_need Usuario | Feature CIVICUM | Métrica de éxito |
|---|---|---|---|---|
| **1. Frustración** | Ve problema en su barrio, siente indignación | Expresar rápido sin fricción | Alza la Voz: "¿Qué te molesta?" → 3 taps → reporte creado | Tiempo primer reporte < 60s |
| **2. Motivación** | Ve que otros comparten su problema | Sentir que no está solo | Radar Vecinal: "10 vecinos reportaron esto también" | Conversión frustración→acción >30% |
| **3. Primer Intento** | Decide probar CIVICUM | Explorar con seguridad | Nivel 0: navega sin registro, ve victorias, lee mesas | Tiempo en página >2min |
| **4. Obstáculos** | Autoridad no responde / miedo exposición | No rendirse | Plan B automático (Contraloría) + anonimato + Modo Calma | Tasa abandono post-obstáculo <40% |
| **5. Resultado** | Ve impacto (problema resuelto / respuesta oficial) | Sentir que valió la pena | Victoria + notificación a todos los apoyantes + badge privado | Satisfacción post-resultado >4.5/5 |
| **6. Continuidad** | Confianza operativa, invita a otros | Pertenencia y propósito | Invitación natural: "Tu vecino también tiene este problema" + Círculos |Usuarios que refieren amigos >15% |

### 2.3 Escalera de Confianza → Sistema de Niveles Internos (Parte 4.4 líneas 206-213)

| Nivel | Estado mental | Criterio de avance | Features desbloqueadas | Riesgo de bajar |
|---|---|---|---|---|
| **0. Desconocimiento** | "No sé qué es CIVICUM" | Llega via boca a boca / RRSS / prensa | Landing page, victórias, "Quiénes Somos" | N/A |
| **1. Curiosidad Cautelosa** | "Lo miro, pero no confío" | Visita sitio, explora sin registro | Modo visitante: Radar, Mesas (lectura), Cuentas Claras | Retórica política o pedir datos → vuelta a 0 |
| **2. Prueba Sin Riesgo** | "Exploro sin dar datos" | Navega múltiples sesiones sin cuenta | Todo lo anterior + filtros, bookmarks, seguir propuestas | Plataforma vacía o trolls → se va |
| **3. Registro (riesgo mínimo)** | "Me registré, voy a tantear" | Crea cuenta con email + comuna | Mi CIVICUM básico, votar, comentar (con seudónimo) | Form intrusivo o email no enviado → vuelta a 2 |
| **4. Primera Apuesta** | "Hice mi primera contribución" | Crea primer reporte/comentario/voto | Notificaciones activas, timeline de seguimiento | Nadie reacciona o recibe ataque → vuelta a 3 |
| **5. Confianza Operativa** | "Participo regularmente" | 3+ acciones exitosas en 30 días | Círculos, verificación opcional, badges privados | Brecha datos o spam → vuelta a 3 |
| **6. Promotor** | "Confío plenamente y recomiendo" | Invita a otros, crea contenido, ayuda vecinos | Embajador, co-creación, mentoría | Escándalo/polarización → vuelta a 4 |

**Implementación técnica**: Campo `trust_level` (0-6) en schema usuario. Cada feature verifica nivel mínimo. Métrica de salud: distribución de niveles en base de usuarios.

---

## 🎭 SECCIÓN 3: DISEÑO POR SEGMENTO (S1-S6)

### S1: Joven Escéptico (18-29)

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Desconfía instituciones, nativo digital, quiere impacto rápido,365% no参与 pero indignado | S1-S6 + Parte 3.1 |
| **Onboarding** | "Solo mirar" → ve victórias → "Apoya esta causa con 1 tap" (sin registro) | Parte 4.4 |
| **Primer acción** | Votar/apoyar propuesta existente (fricción mínima) > crear reporte | Parte 5.4 participación |
| **Tono** | Directo, sin paja, honesto. "Esto es lo que podemos hacer. Esto es lo que no." | Parte 5.2 |
| **Features clave** | Alza la Voz (3 taps), Radar Vecinal (feed tipo RRSS), notificaciones push | S1 journey |
| **Anti-patrón** | NO tono político, NO promesas vacías, NO "tu voz será escuchada" | Parte 4.4 anti-patrones |
| **Gamificación** | Insignias privadas de servicio (NO públicas), progreso personal visible solo a él | Parte 5.4, F-20 |
| **Canal preferido** | PWA móvil, push notifications, Instagram/Twitter para difusión externa | S1 operativo |

### S2: Adulto Pragmático (30-49)

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Trabaja, poco tiempo, quiere utilidad concreta, escuadado, familia | S1-S6 |
| **Onboarding** | Valor inmediato: "¿Bache en tu calle? Repórtalo en 60 segundos" | Parte 5.4 |
| **Primer acción** | Reportar problema concreto con resultado esperado claro | Parte 5.4 |
| **Tono** | Pragmático, eficiente, "te ahorra tiempo, te defiende cuando nadie más lo hace" | Parte 5.4, 7.2 |
| **Features clave** | Cuentas Claras (presupuesto municipal), Alza la Voz (oficio automático), Fiscaliza tu Municipio | S2 journey |
| **Anti-patrón** | NO procesos largos, NO jerga, NO "solo para jóvenes" | Parte 5.1 |
| **Notificaciones** | Solo relevantes: "Tu reporte cambió de estado" (no spam cívico) | Parte 5.4 Calm Technology |
| **Canal preferido** | PWA móvil + email + WhatsApp (opt-in para notificaciones) | S2 operativo |

### S3: Mayor Cauteloso (60+)

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Baja alfabetización digital, miedo estafa, confianza interpersonal baja (12-15%), prefiere presencial | S1-S6 + Parte 3.1 |
| **Onboarding** | Asistido: kiosko en JJVV/municipalidad con voluntario, o familiar que lo guía | Parte 5.4, 7.1 |
| **Primer acción** | Ver problemas de su barrio (solo lectura, presencial) → expresar vozvia SMS o con ayuda | Para 3.3 |
| **Tono** | Respetuoso, paciente, explicativo. "Le vamos a explicar paso a paso, no se preocupe" | Parte 5.2, 5.3 |
| **Features clave** | **Modo Accesibilidad Total** (ver sección 4.1), Canal SMS/voz, kiosko presencial | S3 journey |
| **Anti-patrón** | NO pedir RUT/foto de inmediato, NO jerga digital ("app", "PWA", "UI"), NO suponer que sabe tech | Parte 4.4 tecnología |
| **Tipografía** | 18px base (configurable a 20px), botones 56px+, alto contraste forzado | Parte 5.1 |
| **Canal preferido** | SMS + IVR (voz) + presencial (JJVV, municipalidad) | S3 operativo |
| **Verificación** | Presencial en kiosko con operador verificado (no biométrica online solita) | Parte 4.4 |

### S4: Baja Escolaridad

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Menos educación formal, no entiende jerga legal/técnica, алеja interfaces complejas | S1-S6 |
| **Onboarding** | Flujo guiado 1 action/pantalla, iconos+texto SIEMPRE, audio TTS opcional | Parte 5.1 |
| **Primer acción** | Asistente Cívico conversacional: "¿Qué necesitas? Cuéntame" (input voz o texto simple) | Parte 5.4 confianza |
| **Tono** | "Le explicamos en palabras simples. Si no entiende, pregunte nomás." | Parte 5.2 |
| **Features clave** | Asistente Cívico (voz), Modo Accesibilidad Total, iconografía semántica + texto | S4 journey |
| **Anti-patrón** | NUNCA solo icono, NUNCA términos "expediente", "oficio", "indicación" sin traducción | Parte 5.4 autoridad |
| **Formularios** | 1 campo por pantalla, instrucción arriba, validación en tiempo real amigable | Parte 5.4 error |
| **Canal preferido** | Voz (IVR/TTS) + presencial | S4 operativo |

### S5: Mujer Sensible a Riesgo

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Miedo funa, exposición, seguridad personal, privacidad prioritaria | S1-S6 |
| **Onboarding** | Énfasis inmediato en anonimato: "Tu identidad está blindada. Nadie verá tu nombre." | Parte 4.4, 5.4 |
| **Primer acción** | Apoyar reporte existente anónimamente (1 tap, seudónimo automático) | Parte 5.4 anonimato |
| **Tono** | Tranquilizador, empoderador sin exposición. "Tú decides qué compartir, cuándo, con quién." | Parte 4.4 |
| **Features clave** | Anonimato por defecto, Moderación 3 capas visible, Modo Calma anti-funa, opciones de privacidad granular | S5 journey |
| **Anti-patrón** | NUNCA mostrar nombre real por defecto, NUNCA pedir foto sin explicar por qué y cómo se protege | Parte 5.4 |
| **Reportes sensibles** | Opción de denuncia 100% anónima (ni CIVICUM ve el nombre si no quiere) | Parte 4.4 línea 95 |
| **Canal preferido** | PWA móvil (privado), notificaciones discretas | S5 operativo |

### S6: Ciudadano Activo / Organizador

| Dimensión | Especificación | Fuente |
|---|---|---|
| **Perfil** | Líder barrial, JJVV, organizador, quiere herramientas de gestión y impacto | S1-S6 |
| **Onboarding** | Directo a herramientas de organización: Círculos, Mesas, Promesómetro | S6 journey |
| **Primer acción** | Crear Círculo de Acción o Mesa Ciudadana | Parte 5.4 colectividad |
| **Tono** | Colega, socio. "Aquí tienes las herramientas. Cuéntanos qué necesitas." | Parte 5.2 |
| **Features clave** | Círculos (tablero Kanban), Mesas (foro deliberativo), Promesómetro, importar contactos WhatsApp | S6 journey |
| **Anti-patrón** | NO limitar herramientas, NO paternalismo, NO "espere a que le den permiso" | Parte 5.4 |
| **Verificación** | Verificación prioritaria (tienen más peso en votos/propuestas) | Parte 5.4 |
| **Canal preferido** | PWA + email + WhatsApp (gestión de grupo) | S6 operativo |

---

## 🛠️ SECCIÓN 4: NUEVOS MÓDULOS Y HERRAMIENTAS (de la investigación)

### 4.1 Módulo Transversal: Modo Accesibilidad Total (NUEVO)

**Justificación**: Partes 5.1, 5.4, 7.1, S3, S4 — "no habrá app especial para abuelos, habrá diseño inclusivo para todos". Se activa en onboarding o settings. Aplica transversalmente a TODA la app.

| Feature | Especificación | Segmento |
|---|---|---|
| Flujo guiado 1 action/pantalla | Una sola acción principal por viewport, instrucción clara arriba | S3, S4 |
| Solo voz (TTS + STT) | Texto-a-voz para todo contenido, voz-a-texto para inputs | S3, S4 |
| Botones 56px+ | Área de toque ampliada (superior a WCAG 44px) | S3 |
| Alto contraste forzado | Negativo/positivo independientemente del tema | S3 |
| Canal SMS/voz para acciones clave | Notificaciones por SMS, acciones por IVR | S3, S4 |
| "Buscar ayuda cerca" | Botón → mapa JJVV/municipalidades con kiosko CIVICUM | S3, S4 |
| Simplificación de UI | Oculta elementos decorativos, solo esencial | S3, S4 |
| Configuración recordada | Persiste preferencias entre sesiones | Todos |

### 4.2 Canal Universal de Acceso (NUEVO — reemplaza "Terminal Cívico")

**Justificación**: Parte 4.4: 76% desconfía redes. S3/S4 prefieren SMS/voz/presencial. WhatsApp = secundario opt-in.

| Canal | Función | Segmento | Prioridad |
|---|---|---|---|
| SMS bidireccional | Notificaciones, alertas, respuestas simples (SÍ/NO) | S3, S4 | 1 (MVP) |
| IVR (voz) | Consultas por teléfono, reportes por voz, votación por teclado | S3, S4 | 2 (V1) |
| Kiosko presencial | Tablet en JJVV/municipalidad con operador capacitado | S3, S4, todos | 2 (V1) |
| WhatsApp (opt-in) | Solo notificaciones de seguimiento (no flujo principal) | S2, S6 | 3 (V1) |
| Email | Notificaciones formales, expedientes | S2, S6 | 1 (MVP) |

### 4.3 Radar Vecinal (NUEVO — feed de actividad comunitaria)

**Justificación**: Partes 5.4 (colectividad), 3.3 (fase 2 motivación), 7.1. Feed de actividad del barrio para crear sensación de "plataforma viva".

| Feature | Especificación | Fuente |
|---|---|---|
| Feed de actividad reciente | "María reportó iluminación", "Carlos mobilizó su cuadra", "10 vecinos se sumaron a..." | Parte 5.4 colectividad |
| Filtros por comuna/barrio | Geolocalización o comuna seleccionada | Parte 5.4 |
| Métricas colectivas | "5 problemas resueltos este mes en tu sector gracias a vecinos" | Parte 5.4 participación |
| Invitación a participar | Cada item del feed tiene CTA: "Súmate", "Apoya", "Opina" | Parte 5.4 |
| Co-creación | Reportes existentes piden ayuda: "Falta una foto, ¿quién se anima?" | Parte 5.4 |
| Sin rankings individuales | NUNCA "Top usuarios" o "Usuario del mes" | Parte 5.4, F-20 |

### 4.4 Victórias Ciudadanas (NUEVO — showcase de impacto)

**Justificación**: Partes 4.4, 5.4, 6.1. Es la prueba de que "sí sirve". Debe estar ANTES del registro.

| Feature | Especificación | Fuente |
|---|---|---|
| Página pública /victorias | Casos reales con foto, historia, cifras | Parte 6.1 TECHO, Ollas |
| Personalización por comuna | Victórias de TU comuna primero | Parte 4.4 señales confianza |
| Métricas aggregated | "20 baches reparados", "3 plazas iluminadas", "1 ordenanza aprobada" | Parte 4.4 |
| Testimonios reales | Con permiso, alias o nombre si opt-in, tono modesto | Parte 5.4 celebración |
| Disponible sin registro | Nivel 0-2 puede ver, inspirarse, sin cuenta | Parte 4.4 escalera |

### 4.5 Expediente de Autoridad (MEJORA — ya en plan, detallado)

**Justificación**: Parte 4.4 líneas 285-297. Factor de confianza si se diseña bien, arma de doble filo si mal.

| Feature | Especificación | Fuente |
|---|---|---|
| Ficha por autoridad | "10 reportes enviados, 5 respondidos, 2 resueltos, promedio respuesta 15 días" | Parte 4.4 |
| Neutralidad obligatoria | Cubrir TODOS los actores por igual, sin sesgo partidista | Parte 4.4 línea 290 |
| Rigor factual | Cualquier error = desastre de confianza. Trazabilidad de cada dato | Parte 4.4 línea 294 |
| Seguimiento de compromisos | "Prometió reparar 5 baches, cumplió 3" | Parte 4.4 línea 295 |
| Autoridad puede responder | Dar su versión dentro del expediente | Parte 4.4 línea 292 |
| Comparaciones legibles | "Equivale a 5.000 kilos de pan" | Parte 5.4 |
| Alertas de incumplimiento | "Días sin respuesta: 47" — presión social transparente | Parte 6.2 Congreso Virtual lección |

### 4.6 Arena de Ideas con Co-creación (NUEVO — mejora de Parlamento Civicum)

**Justificación**: Parte 5.4 colectividad. Detectar propuestas similares y sugerir fusión.

| Feature | Especificación | Fuente |
|---|---|---|
| Propuestas ciudadanas con plantilla | Formato mini-proyecto de ley con considerandos (seriedad) + guía simple (accesibilidad) | Parte 5.4 autoridad |
| Detección de similitud IA | Semántica >80% → notifica a autores: "Sus ideas se complementan. ¿Unir fuerzas?" | Parte 5.4 colectividad |
| Co-autores | Sistema de co-autoría de propuestas | Parte 5.4 |
| Adhesiones con 1 tap | "Apoyar" → barrita de progreso hacia meta | Parte 5.4 |
| Escalamiento automático | Al superar meta → oficio automático a autoridad | Parte 6.2 Congreso Virtual lección |
| Timeline de propuesta | Idea → En votación → Aprobada/Rechazada → Enviada a autoridad → Respondida/Implementada | Parte 5.4 retroalimentación |

### 4.7 Timeline Universal de Gestiones (NUEVO — componente reutilizable)

**Justificación**: Partes 5.4 (retroalimentación), 3.3 (fase 5 resultado). Componente para TODO reporte/propuesta/voto.

| Elemento | Visualización | Estado |
|---|---|---|
| Step 1 | "Recibido" + fecha + ícono check verde | Círculo lleno |
| Step 2 | "En revisión" + fecha estimada + ícono lupa pulsante | Círculo animado |
| Step 3 | "Enviado a autoridad" + fecha + ícono sobre | Círculo lleno |
| Step 4 | "Esperando respuesta" + días transcurridos + barra de progreso | Círculo reloj |
| Step 5 | "Respondido" o "Escalado a Contraloría" + fecha + detalle | Círculo lleno/naranja |
| Step 6 | "Resuelto" + fecha + foto/video evidencia | Círculo verde grande |
| No respuesta | "Días sin respuesta: X" + botón "Presionar" | Círculo rojo |

### 4.8 Sistema de Notificaciones Inteligentes (MEJORA)

**Justificación**: Partes 5.4 (espera, retroalimentación), 4.4 (romper silencio), F-17 (Calm Technology).

| Tipo | Trigger | Canal | Tono | Fuente |
|---|---|---|---|---|
| Confirmación inmediata | Usuario envía reporte | Push + email | "Reporte recibido. ID #AV-123. Plazo muni: 5 días." | Parte 5.4 |
| Apoyo alcanzado | 10 vecinos se suman | Push | "10 vecinos se unieron. ¡Vamos bien!" | Parte 5.4 |
| Plazo próximo | Día 4 de 5 sin respuesta | Push + email | "Queda 1 día de plazo municipal. Seguimos atentos." | Parte 5.4 |
| Silencio (día 3) | No hay novedades 3 días | Push | "Seguimos aquí. Tu reporte lleva 3 días en bandeja. Plazo: 5 días." | Parte 4.4 |
| Escalamiento | Autoridad no responde | Push + email + SMS | "Activamos plan B: Contralía. No estás solo." | Parte 5.4 |
| Victoria | Problema resuelto | Push + email | "¡Lo logramos! La muni empezó reparaciones." | Parte 5.4 |
| Proposal avance | Propuesta supera meta | Push + email | "Tu propuesta alcanzó 100 apoyos. Verifica el concejo." | Parte 5.4 |
| Cahuín constructivo | Dato interesante disponible | Push (opt-in) | "¿Sabías que tu comuna gastó $X en Y? Opina." | Parte 5.4 |

---

## 📋 SECCIÓN 5: MICROCOPY COMPLETO POR CONTEXTO (Parte 5.2, 5.3)

### 5.1 Voz base (Parte 5.2)

**Personalidad**: Vecino organizado, comprometido, empático. Cercano, directo, respetuoso. Informado pero no académico. Serio pero no frío. Chileno pero no caricatura.

### 5.2 Frases prohibidas vs recomendadas (Parte 5.2)

| ❌ Evitar | ✅ Usar | Contexto |
|---|---|---|
| "Su solicitud ha sido procesada" | "Tu reporte se envió correctamente" | Confirmación |
| "Bienvenido al portal de participación ciudadana" | "Hola, ¿cómo te puedo ayudar con la muni hoy?" | Onboarding |
| "Estamos trabajando en ello" | "Tu reporte está en revisión. Te daremos respuesta antes del 15 de mayo." | Estado |
| "Lamentamos los inconvenientes" | "Algo falló en la carga. Estamos corrigiéndolo y tus datos están seguros." | Error |
| "Términos y condiciones aplican" | "Revisa las condiciones aquí (en palabras simples)" | Legal |
| "Tu voz será escuchada" | "Con 50 apoyos, tu propuesta irá al concejo municipal" | Pitch |
| "Estimado usuario" | (Nada — ir directo al punto) | Notificaciones |

### 5.3 Microcopy por 6 contextos emocionales (Parte 5.3)

| Contexto | Tono | Ejemplo | Implementación |
|---|---|---|---|
| **Frustrado** | Empatía + rapidez | "Entiendo que esto es frustrante. Vamos a solucionarlo haciendo X a la brevedad." | Errores, esperas, fallas |
| **Celebrando** | Entusiasmo cálido | "¡Felicitaciones! Gracias a tu reporte arreglaron la luminaria 🎉" | Victorias, hitos |
| **Confundido** | Didáctico + paciente | "Primero, entra a tu perfil; luego haz clic en 'Mis trámites'. Es normal tener dudas." | Onboarding, formularios |
| **Desconfiado** | Transparencia radical | "Buena pregunta. Somos independientes, sin fines de lucro. Nuestros financistas están en /transparencia." | FAQ, landing |
| **Error sanción** | Firme + justo + educativo | "Tu comentario fue ocultado por contener un insulto. Te sugerimos editarlo y evitar palabras como '___'." | Moderación |
| **Urgente** | Directo + conciso | "Alerta de incendio en sector norte. Evacúa hacia el sur. Bomberos en camino." | Emergencias |

### 5.4 Guía de estilo del Asistente Cívico (Parte 5.4, 5.3)

| Situación | Respuesta actual típica | Respuesta CIVICUM | Fuente |
|---|---|---|---|
| Saludo inicial | "Bienvenido. ¿En qué puedo ayudar?" | "Hola, soy tu compañero cívico. ¿Qué problema quieres resolver hoy?" | Parte 5.4 |
| Buscando | (spinner silencioso) | "🔎 Buscando en el Diario Oficial..." → "📂 Revisando archivos municipales..." | Parte 5.4 |
| No encuentra | "No se encontraron resultados" | "No estoy seguro de eso; déjame buscar un poco más o reformulemos la pregunta" | Parte 5.4 |
| Tardando | (spinner eterno) | "Está tardando más de lo normal... ¿Quieres que te avise por correo cuando lo tenga?" | Parte 5.4 |
| Error | "Error 503" | "No pudimos conectar con el servicio. Reintentaremos automáticamente." | Parte 5.4 |
| Pronombre | "te conseguiré..." | "veamos juntos esa información" | Parte 5.4 |

---

## 🎨 SECCIÓN 6: SENSACIÓN INMERSIVA DE MODERNIDAD + MINIMALISMO

### 6.1 Principios de inmersión (síntesis de toda la investigación)

| Principio | Implementación visual | Sensación buscada |
|---|---|---|
| **Claridad extrema** | Una idea por pantalla, mucho espacio blanco, tipografía jerárquica | "Entiendo qué hacer al instante" |
| **Fluidez** | Transiciones Framer Motion 200-300ms, skeleton screens, feedback táctil | "Todo responde, nada se siente lento" |
| **Calidez humana** | Fotos reales chilenas, tono cercano, emojis moderados, colores cálidos | "Esto lo hicieron personas como yo" |
| **Seriedad creíble** | Datos con fuentes, documentos oficiales, sellos de verificación | "Esto no es un juguete, tiene peso real" |
| **Esperanza activa** | Victorias visibles, barras de progreso, celebraciones colectivas sobrias | "Aquí sí pasan cosas, podemos cambiar" |
| **Seguridad** | Candados visibles, seudónimos, moderación visible, "identidad blindada" | "Puedo participar sin miedo" |
| **Comunidad viva** | Radar Vecinal con feed activo, contadores de vecinos, actividad reciente | "No estoy solo, hay movimiento" |
| **Minimalismo** | Quitar todo lo no esencial, hierarchy visual clara, no decoración sin propósito | "No me abruman con información" |

### 6.2 PWA inmersiva (Parte 5.1 líneas 119-129)

| Elemento | Especificación | Fuente |
|---|---|---|
| Splash screen | Logo CIVICUM + tagline "De la queja a la acción" + paleta cálida | Parte 5.1 |
| Installable | Manifest.json correcto, icono home screen, pantalla completa | Parte 5.1 |
| Service Worker | Caching de contenido para offline básico (modo lectura sin conexión) | Parte 5.1, F-07 |
| Push API | Notificaciones nativas del navegador, opt-in explícito | Parte 5.1 |
| Peso inicial | < 1MB primer load (excluyendo contenido dinámico) | Parte 5.1 |
| Tiers | HIGH: full, MID: sin animaciones pesadas, LOW: casi solo texto | Parte 5.1 |
| Dark mode | Respetar prefers-color-scheme, toggle manual en settings | Parte 5.1 |

### 6.3 Densidad de información por pantalla (Parte 5.1 líneas 166-173)

| Pantalla | Densidad | Principio | Implementación |
|---|---|---|---|
| Landing | Baja | 3-4 secciones, mucho espacio blanco, titular grande | Hero + Victorias + CTA |
| Mi CIVICUM | Media | Tarjetas resumidas, plegables, secciones con encabezados | Grid de tarjetas, no más de 6 visibles |
| Cuentas Claras | Media-Alta | Filtros + pestañas + gráficos simples + resumen arriba | "Resumen: 80% del presupuesto usado" → detalle |
| Formularios | Baja | 1-3 campos por paso, instrucción clara, validar en tiempo real | Wizard multi-paso, no facedón único |
| Victorias | Baja | Foto grande, cita, texto corto, párrafos cortos | Estilo artículo de noticia, no informe |
| Radar Vecinal | Media | Feed scrollable (tipo RRSS pero cívico), 1 card por item | Vertical scroll nativo, pull-to-refresh |
| Mesas | Media | Hilo de discusión con reglas visibles, moderación indicada | Foro moderno, no phpBB |

---

## 📐 SECCIÓN 7: ARQUITECTURA DE COMPONENTES REQUERIDOS

### Componentes nuevos a construir (shadcn/ui + Tailwind)

| Componente | Descripción | Dónde se usa | Prioridad |
|---|---|---|---|
| `TimelineGestiones` | Timeline visual de estados con fechas, íconos, progreso | Alza la Voz, Voto, Mesas, Propuestas | MVP |
| `StaleDataBadge` | Badge ⚠️ antenido + "Última actualización: X" + botón "Notificarme" | Cuentas Claras, todos los datos | MVP |
| `SkeletonCard` | Placeholder gris con pulse 1.5s | Todas las cargas | MVP |
| `ConversationLoader` | Placeholders conversacionales ("🔎 Buscando...") | Asistente Cívico | MVP |
| `DualViewReport` | Toggle "Oficio / En sencillo" para reportes | Alza la Voz | MVP |
| `TrustBadge` | "Vecino Verificado #405 de Comuna X" con ícono candado | Todo contenido público | MVP |
| `ModoCalmaIndicator` | Badge "Debate en revisión por Jurado" / "Métricas congeladas" | Mesas, Termostato | V1 |
| `CoCreationPrompt` | "Sus ideas se complementan. ¿Unir fuerzas?" + botón | Arena de Ideas | V1 |
| `ContributionSummary` | Sección privada "Mi aporte: Ayudé a X, Verifiqué Y" | Mi CIVICUM | MVP |
| `VictoryCard` | Tarjeta de victoria ciudadana con foto, cifra, testimonio | Landing, /victorias, Radar | MVP |
| `RadarFeed` | Feed de actividad vecinal scrollable | Mi CIVICUM / Radar | MVP |
| `AccessibilityOverlay` | Modo Accesibilidad Total (56px, voz, alto contraste, simple) | Global (opt-in) | V1 |
| `AuthorityDossier` | Ficha de autoridad con métricas, gráficos, timeline | Expediente de Autoridad | V1 |
| `QuickReportButton` | FAB "¿Qué te molesta?" → 3 taps → reporte creado | Global flotante | MVP |

---

## ⚠️ SECCIÓN 8: ANTI-PATRONES PROHIBIDOS (checklist de diseño)

Lista exhaustive de cosas que NUNCA deben aparecer en CIVICUM, derivada de Partes 4.4, 5.1, 5.4, 6.2:

### UI / Visual
- [ ] NO azul #0033A0 (político)
- [ ] NO rojo #CC0000 (partidista)
- [ ] NO azul + rojo juntos (coalición)
- [ ] NO amarillo brillante DC
- [ ] NO verde saturado ecologista radical
- [ ] NO stock photos gringos/ejecutivos sonrientes
- [ ] NO colores neón o saturación extrema
- [ ] NO spinners sin estimación de tiempo
- [ ] NO pop-ups intrusivos
- [ ] NO parallax excesivo
- [ ] NO bounce/elastic animations

### UX / Flujo
- [ ] NO pedir RUT antes de mostrar valor
- [ ] NO pedir foto/foto cédula en registro inicial
- [ ] NO "Regístrate para seguir" abrupto
- [ ] NO "Su solicitud ha sido procesada" (frío)
- [ ] NO "Lamentamos los inconvenientes" (cliché)
- [ ] NO formularios largos en una sola pantalla
- [ ] NO silencio post-acción (confirmación solo "Gracias")
- [ ] NO spinner eterno sin contexto

### Gamificación
- [ ] NO rankings públicos de usuarios
- [ ] NO "Top 10 usuarios"
- [ ] NO "Usuario del mes"
- [ ] NO Karma público
- [ ] NO trofeos dorados/medallas ostentosas
- [ ] NO confeti excesivo
- [ ] NO leaderboards

### Contenido / Tono
- [ ] NO "Tu voz será escuchada" (promesa vacía)
- [ ] NO "Estamos trabajando en ello" (corporativo)
- [ ] NO jerga legal sin traducción
- [ ] NO "Estimado usuario"
- [ ] NO "Términos y condiciones aplican"
- [ ] NO tono Silicon Valley ("revoluccionario", "disruptivo")
- [ ] NO tono paternalista/condescendiente
- [ ] NO tono indignado permanente
- [ ] NO memos.out redirect (si algo falla, explicar)

### Confianza / Privacidad
- [ ] NO mostrar nombre real por defecto
- [ ] NO mostrar apellido en primera contribución
- [ ] NO forzar verificación inmediata para participación básica
- [ ] NO logos gubernamentales en interfaz inicial
- [ ] NO colores/símbolos partidistas
- [ ] NO "¿Quién financia?" sin respuesta visible
- [ ] NO foros sin moderación visible
- [ ] NO datos desactualizados presentados como actuales

---

## 📊 SECCIÓN 9: MÉTRICAS DE VALIDACIÓN POR SEGMENTO

| Métrica | S1 | S2 | S3 | S4 | S5 | S6 | Fuente S1-S6 |
|---|---|---|---|---|---|---|---|
| Tiempo primer acción | < 60s | < 90s | < 5min (asistido) | < 3min (voz) | < 2min | < 60s | S1-S6 |
| Tasa conversión frustración→acción | >30% | >25% | >15% | >15% | >20% | >40% | Parte 3.3 |
| Abandono onboarding | <40% | <30% | <50% | <45% | <35% | <25% | Parte 4.4 |
| Confianza post-primera acción | >3.5/5 | >3.5/5 | >3/5 | >3/5 | >4/5 | >4/5 | Parte 4.4 escalera |
| Referencia amigos (Nivel 6) | >10% | >15% | >5% | >5% | >10% | >25% | Parte 3.3 fase 6 |
| Uso semanal recurrente | >40% | >30% | >20% | >15% | >30% | >50% | S1-S6 operativo |

---

## ✅ RESUMEN DE ACCIONES OBLIGATORIAS

### Ajustes críticos (de VALIDATION.md, confirmados)
1. **Canal Universal de Acceso** (SMS+Voz+Presencial) reemplaza Terminal Cívico WhatsApp
2. **Karma → Contribuciones Verificadas** privadas, narrativas, de servicio
3. **Modo Accesibilidad Total** transversal para S3/S4

### Nuevos componentes a construir (14)
4. TimelineGestiones, StaleDataBadge, SkeletonCard, ConversationLoader, DualViewReport, TrustBadge, ModoCalmaIndicator, CoCreationPrompt, ContributionSummary, VictoryCard, RadarFeed, AccessibilityOverlay, AuthorityDossier, QuickReportButton

### Nuevos módulos a construir (4)
5. Modo Accesibilidad Total (transversal)
6. Radar Vecinal (feed comunitario)
7. Victórias Ciudadanas (showcase público)
8. Arena de Ideas con Co-creación (mejora Parlamento)

### Mejoras a módulos existentes (6)
9. Alza la Voz: vista dual Oficio/En sencillo + timeline + plan B Contraloría
10. Cuentas Claras: StaleDataBadge + comparaciones coloquiales + filtros
11. Asistente Cívico: placeholders conversacionales + honestidad errores
12. Mi CIVICUM: ContributionSummary privada + gestiones en curso
13. Mesas: Modo Calma + Tarjeta Amarilla + moderación visible
14. Expediente de Autoridad: neutralidad + rigor factual + comparaciones legibles

### Mejoras globales UX (5)
15. Escalera de Confianza: trust_level 0-6 en schema
16. Sistema de Notificaciones Inteligentes (8 tipos)
17. Microcopy completo por 6 contextos emocionales
18. Anti-patrones: checklist de diseño prohibitivo
19. Journey map usuario por 6 fases emocionales
20. Guía de fotografía: personas reales chilenas, no stock

---

## 🎯 PRÓXIMO PASO

**Daniel**: Este documento mapea **cada hallazgo minucioso** de los 15 documentos de investigación a implementación concreta. Tu decisión:

1. **¿Apruebas este plan de aplicación?**
2. **¿Quieres que genere la v2 de CIVICUM_EXPANSION_PLAN.md** integrando estos 3 ajustes + 4 nuevos módulos + 14 componentes?
3. **¿Quieres que empiece por algo específico** (ej: diseñar los 14 componentes shadcn, redactar microcopy completo, crear journey map detallado)?

---

*Documento generado tras lectura exhaustiva de 15 documentos (~400KB) de la investigación "Naturaleza Humana Chilena". Cada hallazgo citado es trazable a archivo y línea original. Listo para revisión de Daniel Aguirre.*