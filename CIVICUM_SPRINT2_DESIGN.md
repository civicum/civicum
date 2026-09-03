# CIVICUM_SPRINT2_DESIGN.md
# Sprint 2 — Canal Universal de Acceso + Optimización
## Fecha: 2026-08-16 | Hermes Agent + Daniel Aguirre
## Estado: Diseño — Listo para implementación por fases

---

## 🎯 Objetivo

Llevar CIVICUM a usuarios S3 (Mayor Cauteloso 60+) y S4 (Baja Escolaridad) que no usan smartphones/apps. Investigación confirma: 34% adultos mayores sin internet, 57% temor a fraude digital, WhatsApp no es confiable.

**Solución**: Canal Universal de Acceso — SMS bidireccional + IVR (voz) + kioscos municipales/JJVV con tablet asistida.

---

## 📋 Sub-Módulos (subdivisión atómica)

### 2.1 SMS Bidireccional (MVP)
- **Proveedor**: Twilio (verificación phone + respuestas S/N)
- **Flujo**: Usuario envia SMS al número CIVICUM → Bot responde → Usuario responde SÍ/NO → Sistema registra acción
- **Casos uso MVP**:
  a) "¿Recibiste tu notificación de reporte?" → Usuario: SÍ/NO → sistema marca confirmado
  b) "¿Apoyar esta causa [X]?" → Usuario: SÍ → se registra apoyo
  c) "¿Confirmas ivote en propuesta Y?" → Usuario: SÍ/NO → se registra voto
- **Endpoints**:
  - `POST /api/sms/notify` → Enviar SMS
  - `POST /api/sms/webhook` → Recepción Twilio, parsear respuesta
  - `GET /api/sms/votes/:comunaId` → Listar propuestas para votar
  - `POST /api/sms/vote` → Registrar voto por SMS
- **Seguridad**: HTTPS, validación numero, rate limit, log de interacciones
- **Base datos**: Nueva tabla `sms_interactions` (id, phone, action, proposal_id, response, created_at)

### 2.2 IVR (Voz) — V1
- **Proveedor**: Twilio Voice o AWS Connect
- **Bucle**: Usuario llama → IVR hola → "Marque 1 para reportar bache, 2 para escuchar victorias, 3 para hablar con operador" → redirige según opción
- **Clave**: TTS en español latino, voz cálida
- **Endpoints**:
  - `POST /api/ivr/webhook` → Twilio llama
  - `GET /api/ivr/menu` → XML con opciones (Twilio Markup Language)
  - `POST /api/ivr/report` → transcribir voz → registrar reporte

### 2.3 Kioscos Presenciales — V1
- **Hardware**: Tablet Samsung/Android baratica en JJVV/municipalidad
- **Modo kiosco**: Solo app CIVICUM, pantalla grande, botón gigante "¿Qué te molesta?"
- **Setup**: Cualquier persona con cuenta CIVICUM verifica al usuario presencialmente
- **Offline**: PWA con service worker, funciona sin internet y sincroniza después
- **Registro**: El operador registra al usuario por nombre y comuna, no por email/password

### 2.4 A11y Total — Transversal (no opcional)
- Activable en onboarding o settings
- Fuente 18px, botones 56px+, altocontraste
- Flujo 1 action/pantalla, sin scroll
- TTS lectura de todas las pantallas
- Botón "Buscar ayuda cerca" → mapa JJVV con kiosco CIVICUM

### 2.5 Optimización chunk >500K
- Lazy load de SINIM (solo cuando se abre vista comunal)
- Code splitting routes (React.lazy para landing/admin)
- Análisis: reporte de webpack-bundle-analyzer
- Meta: <500KB inicial, <200KB per route lazy

---

## 🔌 Endpoints a crear (Hono)

### SMS
```
POST /api/sms/webhook
  Body: From, Body, To
  Acción: Parsear, validar numero autoriza, ejecutar acción

POST /api/sms/notify
  Body: phones[], message, context
  Acción: Enviar via Twilio, guardar en log

GET /api/sms/proposals/:comunaId
  Acción: Devolver propuestas abiertas para comuna
```

### IVR
```
POST /api/ivr/webhook
  Acción: Iniciar llamada de voz con TwiML

GET /api/ivr/menu
  Acción: Devolver XML TwimIO de menú principal

POST /api/ivr/option
  Acción: Procesar tecla presionada (DTMF o voz)
```

## DB Schema Extensions (Drizzle)

```sql
-- Nuevas tablas
CREATE TABLE sms_interactions (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  message TEXT,
  action VARCHAR(50), -- 'confirm', 'vote', 'report', 'info'
  reference_id VARCHAR(50), -- proposal_id / case_id
  response VARCHAR(10), -- 'YES', 'NO', 'MAYBE'
  status VARCHAR(20) DEFAULT 'received',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ivr_calls (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20),
  menu_selection VARCHAR(10),
  transcript TEXT,
  action VARCHAR(50),
  reference_id VARCHAR(50),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE kiosks (
  id SERIAL PRIMARY KEY,
  location VARCHAR(100), -- e.g., 'JJVV Los Cedros, Padre Las Casas'
  commune_id VARCHAR(10),
  active BOOLEAN DEFAULT true,
  verified_by_user_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Validación Plan

1. **Lint**: pnpm -C webapp lint → 0 errores
2. **Build**: pnpm -C webapp build → pasa
3. **Tests E2E**: npx playwright test → 46/? pasan (tests existentes deben pasar)
4. **Tests nuevos**: Test de endpoint SMS con webhook simulado + test de A11Y con modo activado

## Anti-patrones prohibidos (Investigación Parte 4.4)
- NO pedir contraseña por SMS (Solo validación numero)
- NO enviar links por SMS (ruteo interno mejor)
- NO DEPENDENCIA de WhatsApp (solo opt-in)
- NO saturar con mensajes (máx 2/día por número, desuscribir fácil)

## Uxur study cases (investigación)
- S3/S4 recuerdan apps complejas como "nunca las usé"
- 76% desconfía RS
- 34% adultos mayores sin internet (Claro/Entel)
- Familia es canal confianza: 2/3 S3 con smartphone, 1/3 usan hijo como puente
- Kiosco físico genera "安全感" vs internet anónimo

## Tareas Breakdown

| # | Tarea | Estimación | Prioridad |
|---|---|---|---|
| 2.1 | Endpoint SMS webhook + Twilio | 4h | Alta |
| 2.2 | Endpoint IVR TwiML | 3h | Media |
| 2.3 | DB schema + migrations | 2h | Alta |
| 2.4 | A11y Mode setting + toggle global | 3h | Alta |
| 2.5 | Chunk optimization | 4h | Media |

Empezamos con 2.1 (SMS) porque es la base para S3 y no require hardware externo.
