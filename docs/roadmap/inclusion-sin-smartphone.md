# 📱 ESTRATEGIA INTEGRAL DE INCLUSIÓN SIN SMARTPHONE

**Versión:** 2.0 (reemplaza v1.0)  
**Última actualización:** 16 Febrero 2026  
**Soluciona:** R5 (Omega) — Brecha Digital como Brecha Democrática — RESOLUCIÓN EXHAUSTIVA  
**También cierra:** Gamma-1 (original) + gaps derivados

---

## 🎯 Problema Ampliado

No es solo "no tienen smartphone". Se identifican **6 barreras** distintas de acceso:

| # | Barrera | Población Afectada | Fuente |
|---|---------|-------------------|--------|
| B1 | No tiene smartphone | ~15-20% adultos mayores (CASEN 2022) | INE |
| B2 | Tiene smartphone pero no datos móviles | Zonas rurales, quintil 1-2 | SUBTEL |
| B3 | Tiene smartphone pero no sabe usar apps | Adultos mayores, baja alfabetización digital | PNUD Chile |
| B4 | Discapacidad visual/auditiva severa | ~12.9% población (SENADIS) | ENDiSC II |
| B5 | Sin internet fija ni móvil | Localidades aisladas, ~1.5M personas | SUBTEL |
| B6 | Desconfianza del canal digital | Baja credibilidad institucional + trauma digital | CADEM / Fundación SOL |

---

## 🛣️ CANALES DE INCLUSIÓN

### Canal 1: Versión HTML-Only (Lite)
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B2, B3 parcial |
| **Target** | Celulares básicos con navegador, conexión lenta |
| **Especificación** | HTML puro, <50KB por página, sin JS obligatorio |
| **Funciones** | Consultar autoridades, presupuestos, reportes. NO crear ni votar |
| **URL** | `lite.civicum.cl` |
| **Esfuerzo** | 30h (rendering server-side con Hono) |
| **Prioridad** | MVP — lanzar con el producto principal |

**Requisitos técnicos:**
- Sin framework JS en client (noscript compatible)
- Formularios `<form method="POST">` nativos
- Imágenes: `<img loading="lazy" srcset="..." sizes="...">` con versión 10KB
- Caché agresivo: 7 días para datos estáticos
- Tested en: Nokia 2720, Samsung Galaxy A01, Opera Mini

---

### Canal 2: Canal SMS Bidireccional
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B1, B2, B5 |
| **Target** | Cualquier celular (incluso básico sin datos) |
| **Protocolo** | SMS estándar (no requiere internet) |
| **Funciones disponibles** |

| Comando SMS | Función | Ejemplo |
|-------------|---------|---------|
| `CIVICUM INFO [comuna]` | Autoridades y datos | `CIVICUM INFO MAIPU` |
| `CIVICUM REPORTE` | Crear reporte simplificado | `CIVICUM REPORTE bache calle xyz` |
| `CIVICUM VOTO [tema] [SI/NO]` | Votar simbólicamente | `CIVICUM VOTO transporte SI` |
| `CIVICUM AYUDA` | Comando de ayuda | `CIVICUM AYUDA` |

| Aspecto | Detalle |
|---------|---------|
| **Autenticación** | Número telefónico verificado vía SMS OTP |
| **Anti-fraude** | Rate limit 10 SMS/hora, verificación de SIM |
| **Proveedor** | Twilio (tier gratis: 100 SMS/día) → Escalar con API SMS Chile |
| **Esfuerzo** | 40h |
| **Prioridad** | Post-MVP (Q2 2026) |

---

### Canal 3: Línea IVR Telefónica
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B1, B3, B4 (visual) |
| **Target** | Adultos mayores, personas con discapacidad visual |
| **Número** | Línea gratuita 800-XXX-XXX |
| **Menú de voz** |

```
Bienvenido a CIVICUM.
  1. Consultar información de mi comuna
  2. Crear un reporte ciudadano
  3. Estado de mis reportes
  4. Información sobre voto simbólico
  5. Hablar con una persona
  0. Repetir opciones
```

| Aspecto | Detalle |
|---------|---------|
| **Tecnología** | Twilio Programmable Voice + TTS (español Chile) |
| **Horario** | 9:00-18:00 L-V + Derivación humana si opción 5 |
| **Esfuerzo** | 50h |
| **Prioridad** | Q3 2026 |

---

### Canal 4: Puntos CIVICUM Presenciales
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B1, B3, B5, B6 |
| **Target** | Adultos mayores, comunidades rurales, desconfiados digitales |
| **Ubicación** | Juntas de Vecinos, Bibliotecas Municipales, COSAM |
| **Modalidad** | Voluntarios capacitados con tablet compartida |

**Protocolo de atención:**
1. El ciudadano llega al punto CIVICUM
2. Voluntario autentica con credencial municipal o cédula (no requiere email)
3. Voluntario opera CIVICUM en tablet en nombre del ciudadano
4. Acciones: consultar, reportar, votar (con consentimiento verbal)
5. Se imprime comprobante con folio
6. Ciudadano recibe SMS si dejó número (opcional)

**Capacitación voluntarios:**
| Módulo | Duración | Contenido |
|--------|----------|-----------|
| Inducción CIVICUM | 2h | Funciones, tono, límites |
| Privacidad | 1h | No registrar datos en cuadernos, borrar caché |
| Atención inclusiva | 1h | Adultos mayores, discapacidad, mapudungún |
| Protocolo DSAR | 30min | Cómo responder preguntas sobre datos personales |

| Aspecto | Detalle |
|---------|---------|
| **Esfuerzo** | Variable (alianzas, no tecnología) |
| **Prioridad** | Q3 2026 (piloto 5 comunas) |

---

### Canal 5: Kioscos Inclusivos
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B1, B3, B5 |
| **Target** | Espacios públicos de alto tráfico |
| **Ubicación** | Municipalidades, centros de salud (CESFAM), terminales de buses |
| **Interfaz** | Touch + teclado grande + audio |
| **Funciones** | Consultar + reportar + votar (no requiere cuenta) |
| **Autenticación** | Cédula de identidad (lectura MRZ) o RUT manual |
| **Esfuerzo** | 60h software + hardware variable |
| **Prioridad** | V2 (Q1 2027) |

---

### Canal 6: WhatsApp Bot
| Aspecto | Detalle |
|---------|---------|
| **Barreras que resuelve** | B3, B6 |
| **Target** | Quienes tienen smartphone pero no instalan apps nuevas |
| **Justificación** | WhatsApp está en 95%+ smartphones de Chile (We Are Social 2024) |
| **Funciones** | Info, reportes, votación (similar a SMS pero con fotos) |
| **Tecnología** | WhatsApp Business API + Cloud Functions |
| **Esfuerzo** | 35h |
| **Prioridad** | Q2 2026 |

---

## 📊 MATRIZ DE COBERTURA

| Canal | B1 No smartphone | B2 Sin datos | B3 No sabe usar | B4 Discapacidad | B5 Sin internet | B6 Desconfianza |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|
| HTML-Lite | ❌ | ✅ | 🟡 | ❌ | ❌ | ❌ |
| SMS | ✅ | ✅ | ✅ | 🟡 | ✅ | ❌ |
| IVR Teléfono | ✅ | ✅ | ✅ | ✅ Visual | ✅ | ❌ |
| Presencial | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kioscos | ✅ | ✅ | ✅ | 🟡 | ✅ | 🟡 |
| WhatsApp | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |

**Cobertura combinada:** ✅ Las 6 barreras están cubiertas por al menos 2 canales cada una.

---

## ⚠️ RIESGOS DEL MODELO MULTI-CANAL

| Riesgo | Mitigación |
|--------|-----------|
| Multi-identidad (1 persona vota por web + SMS) | Vinculación por RUT hasheado — todos los canales mapean al mismo user |
| Suplantación en presencial | Protocolo de verificación + log de voluntario |
| SMS spoofing | OTP obligatorio + rate limit |
| Costo SMS creciente | Modelo freemium: 10 SMS/mes gratis, luego Whatsapp |
| Voluntarios violan privacidad | Capacitación + acuerdo de confidencialidad + borrado automático |

---

## 📊 INDICADOR DE REPRESENTATIVIDAD

Para que los resultados de CIVICUM no sean "la opinión de los digitalmente privilegiados":

| Métrica | Definición | Target |
|---------|-----------|--------|
| % participación rural | Votos desde comunas rurales / total | ≥15% (proporcional a población) |
| % participación >60 años | Votos de segmento etario / total | ≥10% |
| Canal diversity | % votos por canal no-web | >5% |
| Disclaimer | En todo resultado: "Participación: N personas vía X canales" | Siempre visible |
| Alerta sesgo | Si distribución etaria <50% de referencia CASEN | Banner informativo |

---

## 📅 ROADMAP

| Fase | Canal | Q | Esfuerzo | Prioridad |
|------|-------|---|----------|-----------|
| 0 | HTML-Lite | MVP | 30h | 🔴 CRÍTICO |
| 1 | WhatsApp Bot | Q2 2026 | 35h | 🟠 ALTO |
| 2 | SMS Bidireccional | Q2 2026 | 40h | 🟠 ALTO |
| 3 | IVR Telefónica | Q3 2026 | 50h | 🟡 MEDIO |
| 4 | Puntos Presenciales (5 comunas piloto) | Q3 2026 | Variable | 🟡 MEDIO |
| 5 | Kioscos | Q1 2027 | 60h | 🟢 FUTURO |

---

## 🔗 Dependencias

| Este documento | Se conecta con |
|---|---|
| Canal SMS: anti-fraude | `docs/security/anti-fraud-spec.md` |
| Canal presencial: privacidad | `docs/legal/digital-rights-policy.md` |
| Representatividad: métricas | `docs/testing/audit-retencion-habito.md` |
| HTML-Lite: accesibilidad | `docs/testing/audit-accesibilidad.md` |
| Multi-canal: 1p=1v | `docs/governance/voting-integrity-spec.md` |

---

*Documento v2.0 reemplaza `inclusion-sin-smartphone.md` v1.0. Resuelve COMPLETAMENTE R5 (Brecha Digital). 6 barreras identificadas, 6 canales diseñados, cobertura 100%.*
