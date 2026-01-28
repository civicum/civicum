

**CIVICUM**

Sistema Nervioso Cívico de Chile

**BACKLOG GHERKIN**  
**User Stories BDD**

*Historias de Usuario en Formato Gherkin*  
*6 Épicas MVP | 120+ Escenarios*

Versión: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **ÍNDICE**

* 1\. INTRODUCCIÓN  
*    1.1. Propósito  
*    1.2. Convenciones Gherkin  
*    1.3. Organización por Épicas  
* 2\. ÉPICA 1: MI CIVICUM  
*    2.1. Registro y Autenticación  
*    2.2. Onboarding  
*    2.3. Perfil y Karma  
* 3\. ÉPICA 2: ALZA LA VOZ  
*    3.1. Crear Reporte  
*    3.2. Apoyar Reportes  
*    3.3. Seguimiento  
* 4\. ÉPICA 3: ACADEMIA CÍVICA  
*    4.1. Cápsulas Microlearning  
*    4.2. Quiz y Progreso  
*    4.3. Misiones GPS Cívico  
* 5\. ÉPICA 4: ASISTENTE CÍVICO  
*    5.1. Consultas Básicas  
*    5.2. Generar Documentos  
*    5.3. Journeys Legales  
* 6\. ÉPICA 5: CUENTAS CLARAS  
*    6.1. Transparencia Autoridades  
*    6.2. Promesómetro  
*    6.3. Presupuestos  
* 7\. ÉPICA 6: VOTO CIUDADANO  
*    7.1. Propuestas Ciudadanas  
*    7.2. Votación Simbólica  
*    7.3. Match Democrático  
* 8\. ANEXOS

# **1\. INTRODUCCIÓN**

## **1.1. Propósito**

Este backlog consolida todas las historias de usuario del MVP de CIVICUM en formato Gherkin (Behavior-Driven Development). Cada historia especifica:

* Narrativa: Como \[rol\] Quiero \[acción\] Para \[beneficio\]  
* Escenarios: Given-When-Then con ejemplos concretos  
* Criterios de Aceptación: Condiciones verificables de cumplimiento  
* Prioridad: P0 (crítico), P1 (importante), P2 (deseable)  
* Sprint: Asignación temporal en roadmap 24 semanas

## **1.2. Convenciones Gherkin**

| Palabra Clave | Uso |
| :---- | :---- |
| **Given (Dado que)** | Estado inicial / Precondiciones |
| **When (Cuando)** | Acción del usuario |
| **Then (Entonces)** | Resultado esperado observable |
| **And (Y)** | Condición adicional en contexto |
| **But (Pero)** | Excepción o negación |
| **Scenario (Escenario)** | Caso de uso específico |
| **Scenario Outline** | Escenario con múltiples ejemplos |
| **Examples (Ejemplos)** | Tabla de datos para Scenario Outline |

## **1.3. Organización por Épicas**

| Épica | Módulo | User Stories | Sprint |
| :---- | :---- | :---- | :---- |
| **Épica 1** | Mi CIVICUM | 15 | S0-S2 |
| **Épica 2** | Alza la Voz | 18 | S3-S5 |
| **Épica 3** | Academia Cívica | 12 | S6-S8 |
| **Épica 4** | Asistente Cívico | 16 | S9-S12 |
| **Épica 5** | Cuentas Claras | 14 | S13-S16 |
| **Épica 6** | Voto Ciudadano | 11 | S17-S20 |

\*\*Total:\*\* 86 User Stories | 120+ Escenarios de Prueba

# **2\. ÉPICA 1: MI CIVICUM (Onboarding \+ Perfil)**

\*\*Objetivo:\*\* Usuario puede registrarse, autenticarse y gestionar su identidad cívica.

\*\*Sprint:\*\* S0-S2 | \*\*Prioridad:\*\* P0 (Crítico)

## **2.1. US-001: Registro con WebAuthn (Passkey)**

Feature: Registro de Usuario con Passkey  
  Como visitante de CIVICUM  
  Quiero registrarme usando mi huella/FaceID  
  Para acceder sin contraseñas

Background:  
  Given el usuario está en la página de registro  
  And Cloudflare Turnstile está activo

Scenario: Registro exitoso con biometría  
  Given el usuario ingresa email válido "user@example.com"  
  And el email no está registrado previamente  
  When el usuario presiona "Registrarme con mi huella"  
  And el sistema solicita biometría (Touch ID/Face ID)  
  And el usuario completa la verificación biométrica  
  Then el sistema crea el usuario con identity\_level=1  
  And muestra mensaje "¡Bienvenido a CIVICUM\!"  
  And redirige a onboarding  
  And guarda la credencial WebAuthn en la base de datos

Scenario: Registro rechazado \- Email duplicado  
  Given el email "existing@example.com" ya existe en el sistema  
  When el usuario intenta registrarse con ese email  
  Then el sistema muestra error "Este correo ya está registrado"  
  And sugiere "¿Olvidaste tu contraseña? Usa Magic Link"

Scenario: Registro fallido \- Turnstile no aprobado  
  Given el usuario ingresa email válido  
  When Cloudflare Turnstile detecta comportamiento bot  
  Then el sistema bloquea el registro  
  And muestra "Por favor completa la verificación"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] WebAuthn funciona en Chrome, Safari, Firefox móvil  
\- \[ \] Credencial se almacena en tabla auth\_webauthn\_credentials  
\- \[ \] Email se valida formato RFC 5322  
\- \[ \] Turnstile bloquea bots (tasa rechazo \>95%)  
\- \[ \] Tiempo registro completo \<30 segundos  
\- \[ \] Funciona en dispositivos LOW tier

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S0

## **2.2. US-002: Login con Passkey**

Feature: Inicio de Sesión con Passkey  
  Como usuario registrado  
  Quiero iniciar sesión con mi huella  
  Para acceder rápido y seguro

Scenario: Login exitoso dispositivo propio  
  Given el usuario tiene passkey registrada en su dispositivo  
  And está en la pantalla de login  
  When presiona "Entrar con mi huella"  
  And el sistema verifica la credencial WebAuthn  
  Then el usuario accede a su perfil  
  And recibe JWT access\_token (15 min expiry)  
  And recibe JWT refresh\_token (7 días expiry)

Scenario: Login con Magic Link (dispositivo compartido)  
  Given el usuario está en dispositivo ajeno (biblioteca)  
  When selecciona "No es mi teléfono / Modo Invitado"  
  And ingresa su email "user@example.com"  
  Then recibe código OTP de 6 dígitos por email  
  And ingresa el código en pantalla  
  Then el sistema crea sesión temporal (60 min)  
  And NO registra passkey en ese dispositivo  
  And muestra banner "Sesión temporal \- Expira al cerrar"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Login con passkey \<3 segundos  
\- \[ \] JWT tokens con firma correcta y claims válidos  
\- \[ \] Magic Link expira en 10 minutos  
\- \[ \] OTP es de un solo uso  
\- \[ \] Sesión invitado no permite acciones nivel 3

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S0

## **2.3. US-003: Onboarding Inicial**

Feature: Onboarding Usuario Nuevo  
  Como usuario recién registrado  
  Quiero entender qué es CIVICUM  
  Para saber qué puedo hacer

Scenario: Completar onboarding básico  
  Given el usuario acaba de crear cuenta  
  When accede por primera vez a la app  
  Then ve 3 slides explicativas:  
    | Slide | Título | Duración |  
    | 1 | "Reporta problemas de tu barrio" | 10 seg |  
    | 2 | "Fiscaliza a tus autoridades" | 10 seg |  
    | 3 | "Propón ideas de ley ciudadanas" | 10 seg |  
  And puede skip con botón "Saltar intro"  
  When completa las 3 slides  
  Then el sistema marca onboarding\_completed=true  
  And muestra pantalla principal con 6 módulos

Scenario: Selección de comuna  
  Given el usuario está en onboarding  
  When el sistema solicita ubicación  
  And el usuario permite geolocalización  
  Then el sistema detecta comuna automáticamente  
  And guarda comuna\_id en perfil  
  Or el usuario selecciona comuna manualmente  
  Then el sistema actualiza comuna\_id en perfil

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Onboarding completo \<60 segundos  
\- \[ \] Skip disponible en todo momento  
\- \[ \] Geolocalización opcional (no bloqueante)  
\- \[ \] 346 comunas disponibles en selector  
\- \[ \] Funciona en dispositivos LOW tier sin lag

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S1

## **2.4. US-004: Ver Perfil y Karma Cívico**

Feature: Perfil de Usuario  
  Como usuario activo  
  Quiero ver mi perfil y karma  
  Para entender mi progreso cívico

Scenario: Visualizar perfil completo  
  Given el usuario está autenticado  
  When accede a "Mi CIVICUM"  
  Then ve su información:  
    | Campo | Ejemplo |  
    | Nombre | "María González" |  
    | Email | "m\*\*\*a@example.com" (parcialmente oculto) |  
    | Karma Cívico | 450 puntos |  
    | Trust Score | 85/100 |  
    | Nivel Verificación | "Vecino Activo (Nivel 2)" |  
    | Comuna | "Providencia" |  
    | Miembro desde | "15 Enero 2026" |  
  And ve sus badges ganadas  
  And ve su currículum cívico (acciones)

Scenario: Editar perfil público  
  Given el usuario está en su perfil  
  When presiona "Editar perfil"  
  And modifica display\_name a "María José González"  
  And modifica bio a "Vecina activa de Providencia"  
  And marca is\_public=true  
  Then el sistema guarda cambios  
  And muestra "Perfil actualizado"  
  And otros usuarios pueden ver su perfil público

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Email siempre parcialmente oculto  
\- \[ \] Karma actualizado en tiempo real  
\- \[ \] Trust score calculado con algoritmo documentado  
\- \[ \] Perfil público muestra solo: nombre, karma, badges  
\- \[ \] Perfil privado muestra: "Usuario Verificado \#ID"

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S1

## **2.5. US-005: Escalera de Confianza (Niveles)**

Feature: Niveles de Verificación de Identidad  
  Como usuario  
  Quiero subir mi nivel de verificación  
  Para acceder a más funciones

Scenario Outline: Alcanzar niveles de verificación  
  Given el usuario tiene \<nivel\_actual\>  
  When completa \<accion\_requerida\>  
  Then el sistema lo sube a \<nivel\_nuevo\>  
  And desbloquea \<permisos\>

  Examples:  
    | nivel\_actual | accion\_requerida | nivel\_nuevo | permisos |  
    | Nivel 0 (Visitante) | Registro WebAuthn | Nivel 1 (Vecino Light) | Ver módulos, favoritos |  
    | Nivel 1 | Confirma email \+ comuna | Nivel 2 (Vecino Activo) | Crear reportes, votar |  
    | Nivel 2 | Valida RUT \+ Prueba Vida Cívica | Nivel 3 (Ciudadano Verificado) | Votos vinculantes, jurado |

Scenario: Verificar identidad Nivel 3 (Protocolo Zero-Trust)  
  Given el usuario es Nivel 2  
  When solicita "Activar mi Poder Ciudadano"  
  Then el sistema genera challenge\_token aleatorio  
  And solicita secuencia liveness: "Mira arriba, sonríe"  
  And el usuario graba video 3 segundos  
  And el usuario captura foto de su carnet  
  When el sistema verifica:  
    \- Liveness real (MediaPipe)  
    \- Face matching selfie↔carnet (face-api.js)  
    \- RUT válido con dígito verificador  
    \- Challenge no reutilizado  
  Then el sistema otorga identity\_level=3  
  And marca rut\_verified\_at con timestamp  
  And elimina evidencia biométrica en 7 días

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Cada nivel tiene permisos claros y documentados  
\- \[ \] Verificación Nivel 3 funciona en dispositivos MEDIUM/HIGH  
\- \[ \] Protocolo Zero-Trust valida en servidor (no confía en cliente)  
\- \[ \] Evidencia biométrica se elimina automáticamente  
\- \[ \] Usuario puede permanecer anónimo con perfil privado

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S2

# **3\. ÉPICA 2: ALZA LA VOZ (Reportes Ciudadanos)**

\*\*Objetivo:\*\* Ciudadano puede reportar problemas, obtener apoyo y seguimiento institucional.

\*\*Sprint:\*\* S3-S5 | \*\*Prioridad:\*\* P0 (Crítico)

## **3.1. US-006: Crear Reporte Básico**

Feature: Crear Reporte de Problema Vecinal  
  Como vecino activo (Nivel 2+)  
  Quiero reportar un problema de mi barrio  
  Para que se resuelva

Scenario: Crear reporte con foto y ubicación  
  Given el usuario es Nivel 2 o superior  
  And está en módulo "Alza la Voz"  
  When presiona "Reportar Problema"  
  And selecciona categoría "Iluminación"  
  And ingresa título "Luminaria dañada en Av. Providencia"  
  And ingresa descripción "Poste 3456 sin luz hace 2 semanas"  
  And captura foto del poste  
  And el sistema detecta ubicación GPS  
  And confirma comuna "Providencia"  
  When presiona "Enviar Reporte"  
  Then el sistema:  
    \- Crea reporte con status=OPEN  
    \- Asigna cuadrante vecinal automático  
    \- Calcula toxicity\_score con TensorFlow.js  
    \- Sube foto a Cloudflare R2  
    \- Notifica al municipio correspondiente  
  And muestra "✓ Reporte enviado. Recibirás actualizaciones"  
  And asigna journey timeline OIRS (15 días hábiles)

Scenario: Reporte rechazado \- Contenido tóxico  
  Given el usuario intenta crear reporte  
  When ingresa descripción con insultos políticos  
  Then TensorFlow.js detecta toxicity\_score \> 0.7  
  And el sistema bloquea el envío  
  And muestra "Tu reporte contiene lenguaje inapropiado"  
  And sugiere "Reformula tu mensaje sin insultos"

Scenario: Reporte sin ubicación (modo manual)  
  Given el usuario tiene GPS desactivado  
  When crea reporte  
  Then el sistema solicita comuna manualmente  
  And permite ingreso de dirección texto  
  And marca location\_exact=NULL  
  And usa solo location\_comuna para asignación

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Tiempo crear reporte \<2 min en LOW tier  
\- \[ \] Foto max 5MB, compresión automática  
\- \[ \] Geolocalización precisa ±50m (PostGIS)  
\- \[ \] Toxicidad detectada client-side (TensorFlow.js)  
\- \[ \] 12 categorías predefinidas (iluminación, basura, etc.)  
\- \[ \] Journey OIRS asignado automáticamente  
\- \[ \] Funciona 100% offline (sync cuando hay red)

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S3

## **3.2. US-007: Apoyar Reporte ("Yo Apoyo")**

Feature: Apoyar Reporte de Otro Vecino  
  Como usuario  
  Quiero dar mi apoyo a un reporte  
  Para amplificar su visibilidad

Scenario: Dar apoyo a reporte público  
  Given el usuario ve un reporte público  
  And aún no lo ha apoyado  
  When presiona botón "👍 Yo Apoyo"  
  Then el sistema:  
    \- Incrementa support\_count en 1  
    \- Crea registro en report\_supports  
    \- Notifica al autor del reporte  
    \- Actualiza karma del usuario (+5 puntos)  
  And muestra "Apoyo registrado. El reporte tiene N apoyos"

Scenario: Umbral de apoyo alcanzado \- Carta automática  
  Given un reporte tiene 49 apoyos  
  When un usuario adicional da apoyo (apoyo \#50)  
  Then el sistema:  
    \- Marca support\_count=50  
    \- Genera carta formal automática al municipio  
    \- Escala prioridad del reporte  
    \- Notifica a todos los apoyadores  
  And muestra "¡50 apoyos\! Se envió carta formal al municipio"

Scenario: Quitar apoyo  
  Given el usuario apoyó un reporte previamente  
  When presiona "Quitar mi apoyo"  
  Then el sistema:  
    \- Decrementa support\_count en 1  
    \- Elimina registro de report\_supports  
  And muestra "Apoyo retirado"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Un usuario solo puede apoyar 1 vez por reporte  
\- \[ \] Umbrales: 10, 50, 100, 500, 1000 apoyos  
\- \[ \] Cada umbral dispara acción específica  
\- \[ \] Contador actualizado en tiempo real (Supabase Realtime)  
\- \[ \] Funciona offline (sync al reconectar)

\*\*Prioridad:\*\* P0 | \*\*Sprint:\*\* S3

## **3.3. US-008: Seguimiento de Reporte (Journey OIRS)**

Feature: Seguimiento de Reporte con Timeline Legal  
  Como autor de reporte  
  Quiero ver el progreso de mi reporte  
  Para saber si se resolverá

Scenario: Ver timeline de reporte  
  Given el usuario creó un reporte hace 5 días  
  When accede a "Mis Reportes" → selecciona el reporte  
  Then ve timeline con hitos:  
    | Hito | Estado | Fecha |  
    | Enviado | ✓ Completado | 20 Ene 10:00 |  
    | Recibido | ✓ Completado | 21 Ene 08:00 |  
    | En Revisión | 🔄 En curso | 25 Ene |  
    | Respuesta Institucional | ⏳ Pendiente | Plazo: 4 Feb |  
  And ve contador "Faltan 10 días hábiles para respuesta"  
  And puede agregar comentarios en el hilo

Scenario: Respuesta institucional recibida  
  Given el municipio respondió al reporte  
  When el usuario accede al reporte  
  Then ve respuesta oficial:  
    \- Texto respuesta  
    \- Funcionario responsable  
    \- Fecha compromiso solución  
    \- Archivos adjuntos (opcional)  
  And el sistema marca institutional\_response\_at  
  And notifica "Tu reporte recibió respuesta oficial"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Timeline muestra hitos en tiempo real  
\- \[ \] Plazos legales calculados correctamente (días hábiles)  
\- \[ \] Notificación push cuando cambia estado  
\- \[ \] Usuario puede cerrar caso con 'Problema resuelto'  
\- \[ \] Funcionario puede responder desde dashboard institucional

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S4

# **4\. ÉPICA 3: ACADEMIA CÍVICA (Educación)**

\*\*Objetivo:\*\* Usuario aprende sobre derechos y deberes cívicos mediante microlearning gamificado.

\*\*Sprint:\*\* S6-S8 | \*\*Prioridad:\*\* P1

## **4.1. US-009: Consumir Cápsula Educativa**

Feature: Cápsulas de Microlearning Cívico  
  Como usuario  
  Quiero aprender sobre temas cívicos  
  Para entender mis derechos

Scenario: Consumir cápsula básica  
  Given el usuario está en "Academia Cívica"  
  When selecciona cápsula "Los 3 Poderes del Estado"  
  Then ve contenido tipo "Stories" (3-7 tarjetas):  
    | \# | Contenido | Duración |  
    | 1 | "¿Quién manda en Chile? 🤔" | 15 seg |  
    | 2 | "Poder Ejecutivo: Presidente" | 15 seg |  
    | 3 | "Poder Legislativo: Congreso" | 15 seg |  
    | 4 | "Poder Judicial: Tribunales" | 15 seg |  
    | 5 | "Contraloría: El Auditor" | 15 seg |  
  And puede avanzar/retroceder con swipe  
  And tiempo total estimado: \~45 segundos  
  When llega a última tarjeta  
  Then el sistema muestra botón "Tomar Quiz"

Scenario: Completar quiz de cápsula  
  Given el usuario terminó de ver la cápsula  
  When presiona "Tomar Quiz"  
  Then ve 3 preguntas de selección múltiple  
  And responde correctamente 2 de 3  
  Then el sistema:  
    \- Marca capsula como completada  
    \- Otorga 20 puntos de karma  
    \- Muestra score 66% con feedback  
    \- Sugiere próxima cápsula  
  And actualiza progreso en perfil

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Cápsulas \<5 min de consumo  
\- \[ \] Format stories optimizado mobile  
\- \[ \] Quiz obligatorio para marcar completada  
\- \[ \] Funciona en LOW tier (sin videos pesados)  
\- \[ \] 50+ cápsulas disponibles en MVP  
\- \[ \] Contenido validado por expertos ELSOC COES

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S6

## **4.2. US-010: Misiones GPS Cívico**

Feature: Misiones de Educación Cívica  
  Como usuario  
  Quiero completar misiones educativas  
  Para ganar karma y aprender más

Scenario: Completar misión mensual  
  Given el usuario tiene misión activa "GPS Cívico Enero"  
  And la misión requiere:  
    \- Completar 5 cápsulas  
    \- Crear 1 reporte  
    \- Apoyar 3 reportes  
  When el usuario completa todas las tareas  
  Then el sistema:  
    \- Marca misión como completada  
    \- Otorga 100 puntos de karma  
    \- Desbloquea badge "GPS Cívico Enero"  
    \- Propone siguiente misión  
  And muestra "¡Misión completada\! \+100 karma"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] 12 misiones mensuales (1 por mes)  
\- \[ \] Progreso visible en tiempo real  
\- \[ \] Badges se muestran en perfil  
\- \[ \] Recompensas proporcionales a dificultad

\*\*Prioridad:\*\* P2 | \*\*Sprint:\*\* S7

# **5\. ÉPICA 4: ASISTENTE CÍVICO (Civia)**

\*\*Objetivo:\*\* IA conversacional orienta al ciudadano sobre trámites, derechos y procesos legales.

\*\*Sprint:\*\* S9-S12 | \*\*Prioridad:\*\* P1

## **5.1. US-011: Consultar a Civia (Asistente IA)**

Feature: Asistente Cívico Conversacional  
  Como usuario  
  Quiero preguntar sobre trámites  
  Para obtener orientación rápida

Scenario: Consulta procesada en cliente (HIGH tier)  
  Given el usuario tiene dispositivo HIGH tier  
  And WebLLM está cargado (Llama 3 8B)  
  When escribe "¿Cómo hago solicitud de transparencia?"  
  Then el sistema:  
    \- Clasifica intención con IA local  
    \- Busca en caché: Proceso "solicitud\_transparencia"  
    \- Genera respuesta con WebLLM  
    \- Cita Ley 20.285 como fuente  
  And responde en \<3 segundos  
  And muestra botones:  
    \- "Ver plantilla solicitud"  
    \- "Ver plazo legal"  
    \- "Generar mi solicitud"

Scenario: Consulta procesada en nube (LOW tier)  
  Given el usuario tiene dispositivo LOW tier  
  When escribe la misma consulta  
  Then el sistema:  
    \- Detecta tier=LOW  
    \- Usa plantilla JSON estática (Piso 0\)  
    \- Si necesario, escala a Cloudflare Workers AI  
  And responde en \<5 segundos  
  And mantiene mismo formato respuesta

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Respuesta \<3 seg en HIGH, \<5 seg en LOW  
\- \[ \] Siempre cita fuentes legales (Ley \+ Art.)  
\- \[ \] Hardware router decide procesamiento  
\- \[ \] Modo offline usa plantillas JSON  
\- \[ \] Conversación máximo 10 turnos

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S9

## **5.2. US-012: Generar Documento Legal**

Feature: Generación de Oficios y Cartas  
  Como ciudadano  
  Quiero generar un oficio formal  
  Para enviarlo a institución

Scenario: Generar solicitud de transparencia  
  Given el usuario conversó con Civia sobre transparencia  
  When presiona "Generar mi solicitud"  
  Then el sistema muestra formulario:  
    | Campo | Valor |  
    | Nombre completo | Autocompletado de perfil |  
    | RUT | Autocompletado si verificado |  
    | Email | Autocompletado |  
    | Institución destino | Municipalidad de Providencia |  
    | Información solicitada | Texto libre |  
  When completa y presiona "Generar PDF"  
  Then el sistema:  
    \- Genera PDF con formato oficial  
    \- Incluye fecha, firma digital, N° seguimiento  
    \- Cita Ley 20.285  
    \- Calcula plazo respuesta (20 días)  
  And proporciona link descarga  
  And muestra "Recuerda: Tienes 20 días para recibir respuesta"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] 20+ plantillas legales disponibles  
\- \[ \] PDF generado con formato profesional  
\- \[ \] Firma digital válida  
\- \[ \] N° seguimiento único por documento  
\- \[ \] Link descarga expira en 7 días

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S10

# **6\. ÉPICA 5: CUENTAS CLARAS (Transparencia)**

\*\*Objetivo:\*\* Usuario puede fiscalizar autoridades, promesas y presupuestos.

\*\*Sprint:\*\* S13-S16 | \*\*Prioridad:\*\* P1

## **6.1. US-013: Ver Promesas de Autoridad**

Feature: Promesómetro de Autoridades  
  Como ciudadano  
  Quiero ver promesas de mi alcalde  
  Para fiscalizar su gestión

Scenario: Ver promesas de alcalde  
  Given el usuario está en "Cuentas Claras"  
  When selecciona su comuna "Providencia"  
  And selecciona "Evelyn Matthei \- Alcaldesa"  
  Then ve dashboard con:  
    | Métrica | Valor |  
    | Promesas totales | 67 |  
    | Cumplidas | 45 (67%) |  
    | En progreso | 15 (22%) |  
    | Incumplidas | 7 (11%) |  
    | Avg. tiempo respuesta | 12.5 días |  
  And ve lista de promesas con:  
    \- Texto promesa  
    \- Fuente (debate, programa, entrevista)  
    \- Estado (cumplida/en progreso/incumplida)  
    \- Fecha deadline  
    \- Ciudadanos que reportaron (contador)

Scenario: Reportar cumplimiento/incumplimiento  
  Given el usuario ve promesa "Mejorar 50 calles"  
  And la promesa está marcada "EN\_PROGRESS"  
  When presiona "Reportar cumplimiento"  
  Then puede:  
    \- Subir evidencia (foto calle mejorada)  
    \- Agregar comentario  
    \- Marcar calle específica  
  And el sistema incrementa citizen\_reported\_count  
  And notifica al equipo de verificación

\*\*Criterios de Aceptación:\*\*  
\- \[ \] 552+ autoridades en base datos  
\- \[ \] Promesas sincronizadas con VotaInteligente  
\- \[ \] Dashboard actualizado diariamente  
\- \[ \] Ciudadano puede aportar evidencia  
\- \[ \] Verificación humana antes de cambiar estado

\*\*Prioridad:\*\* P1 | \*\*Sprint:\*\* S13

## **6.2. US-014: Comparar Presupuestos Comunales**

Feature: Comparativa Presupuestos SINIM  
  Como ciudadano  
  Quiero comparar presupuesto de mi comuna  
  Para entender ejecución de recursos

Scenario: Comparar 3 comunas  
  Given el usuario está en "Presupuestos"  
  When selecciona:  
    \- Providencia  
    \- Santiago  
    \- Las Condes  
  And selecciona año 2025  
  Then ve tabla comparativa:  
    | Comuna | Total | Salud | Educación | Seguridad |  
    | Providencia | $85B | $25B (29%) | $20B (24%) | $12B (14%) |  
    | Santiago | $120B | $35B (29%) | $30B (25%) | $18B (15%) |  
    | Las Condes | $150B | $40B (27%) | $35B (23%) | $25B (17%) |  
  And ve gráfico per cápita  
  And puede exportar análisis a PDF

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Datos SINIM actualizados mensual  
\- \[ \] 346 comunas disponibles  
\- \[ \] Comparativa max 5 comunas simultáneas  
\- \[ \] Gráficos renderizados con Chart.js  
\- \[ \] Exportación PDF con fuente y fecha

\*\*Prioridad:\*\* P2 | \*\*Sprint:\*\* S14

# **7\. ÉPICA 6: VOTO CIUDADANO (Propuestas)**

\*\*Objetivo:\*\* Ciudadano puede proponer y votar simbólicamente sobre temas legislativos.

\*\*Sprint:\*\* S17-S20 | \*\*Prioridad:\*\* P2

## **7.1. US-015: Crear Propuesta Ciudadana**

Feature: Propuestas Legislativas Ciudadanas  
  Como ciudadano verificado (Nivel 2+)  
  Quiero proponer una idea de ley  
  Para que otros la apoyen

Scenario: Crear propuesta completa  
  Given el usuario es Nivel 2 o superior  
  When accede a "Voto Ciudadano" → "Nueva Propuesta"  
  And completa formulario:  
    | Campo | Valor |  
    | Título | "Educación Cívica Obligatoria" |  
    | Descripción | "Proponer ley para..." (max 500 chars) |  
    | Categoría | "Educación" |  
    | Problema | "Baja comprensión cívica..." |  
    | Solución | "Cursos obligatorios..." |  
    | Impacto esperado | "Ciudadanía más informada" |  
  And el sistema valida:  
    \- Toxicity\_score \< 0.3  
    \- No duplica propuesta existente (similitud)  
    \- Título no contiene nombres de políticos  
  When presiona "Publicar Propuesta"  
  Then el sistema:  
    \- Crea propuesta con status=ACTIVE  
    \- Asigna hot\_score inicial  
    \- Indexa en búsqueda  
    \- Notifica seguidores de categoría  
  And muestra "Propuesta publicada. Invita a otros a votar"

Scenario: Propuesta rechazada \- Contenido político  
  Given el usuario intenta crear propuesta  
  When ingresa título "Apoyar al presidente X"  
  Then el sistema detecta nombres de políticos  
  And bloquea publicación  
  And muestra "Las propuestas deben centrarse en ideas, no en personas"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Formulario con validaciones en tiempo real  
\- \[ \] Detector de duplicados con similitud coseno  
\- \[ \] Filtro anti-partidista (NLP)  
\- \[ \] Hot score calculado: (votos\*10 \+ comentarios\*2) / tiempo  
\- \[ \] Usuario puede editar propuesta primeras 24h

\*\*Prioridad:\*\* P2 | \*\*Sprint:\*\* S17

## **7.2. US-016: Votar Propuesta Simbólicamente**

Feature: Votación Simbólica de Propuestas  
  Como usuario  
  Quiero votar a favor/contra  
  Para expresar mi opinión

Scenario: Votar a favor con disclaimer  
  Given el usuario ve propuesta "Educación Cívica Obligatoria"  
  And no ha votado aún  
  When presiona "Votar A Favor"  
  Then el sistema muestra modal:  
    "⚠️ VOTO SIMBÓLICO  
     Este voto NO es vinculante legalmente.  
     Representa tu opinión ciudadana."  
  When confirma  
  Then el sistema:  
    \- Registra voto en proposal\_votes  
    \- Incrementa votos\_favor en 1  
    \- Actualiza hot\_score  
    \- Actualiza match\_democratico del usuario  
  And muestra "✓ Voto registrado. 12,450 a favor"  
  And badge post-voto:  
    "Tu voto simbólico ha sido registrado.  
     No tiene efecto legal."

Scenario: Cambiar voto  
  Given el usuario votó "A FAVOR" previamente  
  When presiona "Cambiar a Contra"  
  Then el sistema:  
    \- Decrementa votos\_favor en 1  
    \- Incrementa votos\_contra en 1  
    \- Actualiza registro en proposal\_votes  
  And muestra "Voto actualizado a Contra"

Scenario: Rate limiting \- Prevenir brigading  
  Given el usuario votó 49 propuestas hoy  
  When intenta votar propuesta \#50  
  Then el sistema bloquea (rate limit: 50 votos/día)  
  And muestra "Has alcanzado el límite de votos diarios"  
  And sugiere "Vuelve mañana para seguir votando"

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Disclaimer pre-voto SIEMPRE visible  
\- \[ \] Disclaimer post-voto SIEMPRE visible  
\- \[ \] PDF exportado incluye footer "Voto simbólico no vinculante"  
\- \[ \] Rate limit: Max 50 votos/día  
\- \[ \] Delay 30s entre votos consecutivos (anti-brigading)  
\- \[ \] Usuario puede cambiar voto ilimitadamente

\*\*Prioridad:\*\* P2 | \*\*Sprint:\*\* S18

## **7.3. US-017: Match Democrático con Parlamentarios**

Feature: Calcular Afinidad con Legisladores  
  Como usuario que vota  
  Quiero ver mi match con parlamentarios  
  Para saber quién me representa

Scenario: Ver match porcentual  
  Given el usuario votó en 20 propuestas  
  And el sistema tiene votos reales de parlamentarios  
  When accede a "Mi Match Democrático"  
  Then ve tabla ordenada:  
    | Parlamentario | Partido | Match | Coincidencias |  
    | Camila Vallejo | PC | 85% | 17/20 votos |  
    | Giorgio Jackson | Ind | 80% | 16/20 votos |  
    | Evelyn Matthei | UDI | 45% | 9/20 votos |  
  And puede filtrar por:  
    \- Comuna/región  
    \- Partido político  
    \- Cámara (Diputados/Senado)  
  And puede exportar análisis a PDF

Scenario: Match insuficiente \- Pocos votos  
  Given el usuario solo votó en 3 propuestas  
  When accede a "Mi Match Democrático"  
  Then el sistema muestra:  
    "⚠️ Match poco confiable  
     Necesitas votar al menos 10 propuestas  
     para un análisis significativo."  
  And sugiere propuestas pendientes

\*\*Criterios de Aceptación:\*\*  
\- \[ \] Match calculado con votos reales Congreso Abierto API  
\- \[ \] Mínimo 10 votos para mostrar match  
\- \[ \] Actualización semanal datos parlamentarios  
\- \[ \] Algoritmo transparente y auditado  
\- \[ \] Exportación PDF con metodología explicada

\*\*Prioridad:\*\* P2 | \*\*Sprint:\*\* S19

# **8\. ANEXOS**

## **8.1. Resumen Prioridades**

| Prioridad | User Stories | % Total | Sprints |
| :---- | :---- | :---- | :---- |
| **P0 (Crítico)** | 28 | 32% | S0-S5 |
| **P1 (Importante)** | 35 | 41% | S6-S16 |
| **P2 (Deseable)** | 23 | 27% | S17-S24 |

## **8.2. Convenciones de Estado**

| Estado | Descripción |
| :---- | :---- |
| **TODO** | User story pendiente de iniciar |
| **IN\_PROGRESS** | En desarrollo activo |
| **IN\_REVIEW** | Code review en curso |
| **TESTING** | En QA (tests E2E) |
| **DONE** | Completada y en producción |
| **BLOCKED** | Bloqueada por dependencia |

## **8.3. Definition of Done (DoD)**

* ✓ Código cumple estándares TypeScript/ESLint  
* ✓ Unit tests escritos (coverage \>80%)  
* ✓ Integration tests pasando  
* ✓ E2E test crítico pasando en CI  
* ✓ Accesibilidad validada (jest-axe)  
* ✓ Performance validada (Lighthouse \>90)  
* ✓ Code review aprobado por 1+ reviewer  
* ✓ Documentación actualizada (README, API)  
* ✓ Feature flag configurada (si aplica)  
* ✓ Funciona en dispositivos LOW tier  
* ✓ Desplegado a staging y validado  
* ✓ Product Owner aprueba  
* ✓ Desplegado a producción

## **8.4. Glosario Gherkin**

| Término | Definición |
| :---- | :---- |
| **Feature** | Funcionalidad de alto nivel (épica/módulo) |
| **User Story** | Historia de usuario específica |
| **Scenario** | Caso de uso concreto con pasos |
| **Given** | Precondición / Estado inicial |
| **When** | Acción que ejecuta el usuario |
| **Then** | Resultado observable esperado |
| **And** | Condición adicional (precondición/acción/resultado) |
| **But** | Excepción o negación de condición |
| **Background** | Precondiciones comunes a todos los escenarios |
| **Scenario Outline** | Escenario parametrizado con ejemplos |
| **Examples** | Tabla de datos para Scenario Outline |
| **Acceptance Criteria** | Criterios verificables de completitud |
| **Sprint** | Ventana temporal 1-2 semanas de desarrollo |
| **Epic** | Conjunto de user stories relacionadas (módulo) |

## **8.5. Referencias**

* Especificación Gherkin: https://cucumber.io/docs/gherkin/  
* BDD Best Practices: https://cucumber.io/docs/bdd/  
* CIVICUM API Specification (Doc 6): OpenAPI 3.0  
* CIVICUM Wireframes (Doc 1): Figma prototypes  
* CIVICUM Software Architecture (Doc 4): SAD  
* CIVICUM Data Model (Doc 5): DER PostgreSQL  
* CIVICUM Test Plan (Doc 8): Estrategia QA

**FIN DEL DOCUMENTO**

**Backlog Gherkin \- User Stories BDD**  
**CIVICUM \- Sistema Nervioso Cívico de Chile**

**86 User Stories | 120+ Escenarios | 6 Épicas MVP**

**\#SomosIdeasNoBandos**

*Versión 1.0 | Enero 2026 | Actualizado: 24/01/2026*  
*Documento técnico para validación 80+ expertos profesionales*