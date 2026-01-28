

**CIVICUM**

Sistema Nervioso Cívico de Chile

**POLÍTICA DE PRIVACIDAD Y**  
**TÉRMINOS Y CONDICIONES DE USO**

*Cumplimiento Legal GDPR \+ Ley 19.628 Chile*

Versión: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **PARTE I: POLÍTICA DE PRIVACIDAD**

Esta Política de Privacidad describe cómo CIVICUM recopila, utiliza, almacena y protege la información personal en cumplimiento con GDPR (Reglamento UE 2016/679) y Ley 19.628 Chile.

## **1\. INFORMACIÓN GENERAL**

CIVICUM es una plataforma cívica digital de participación ciudadana, transparencia y fiscalización.

## **2\. RESPONSABLE DEL TRATAMIENTO**

|  |  |
| :---- | :---- |
| **Nombre Legal** | CIVICUM SpA (en constitución) |
| **Email Privacidad** | privacidad@civicum.cl |
| **DPO** | dpo@civicum.cl |

## **3\. PRINCIPIOS DE PROTECCIÓN DE DATOS**

| Principio | Implementación |
| :---- | :---- |
| **MINIMIZACIÓN** | Solo recopilamos datos estrictamente necesarios |
| **FINALIDAD LIMITADA** | Cada dato tiene propósito claro y explícito |
| **EXACTITUD** | Mecanismos para corregir datos en cualquier momento |
| **CONSERVACIÓN LIMITADA** | Eliminación o anonimización cuando no son necesarios |
| **INTEGRIDAD** | Medidas técnicas y organizativas de protección |
| **TRANSPARENCIA** | Información clara sobre qué, para qué y con quién |
| **LICITUD** | Procesamiento legal, justo y transparente |

## **4\. DATOS PERSONALES QUE RECOPILAMOS**

Sistema de Niveles de Identidad (0-3) permite participar con diferentes grados de identificación:

| Nivel | Descripción | Datos | Funciones |
| :---- | :---- | :---- | :---- |
| **0 Invitado** | Solo consulta | Ninguno | Ver reportes/presupuestos públicos |
| **1 Básico** | WebAuthn | ID anónimo, llave pública | Guardar preferencias, seguir temas |
| **2 Email** | Email verificado | Email, alias | Crear reportes, debates, exportar |
| **3 Reforzado** | RUT \+ biometría | RUT hash, selfie (eliminada post-validación) | Votar, liderar círculos, jurado |

## **5\. FINALIDAD DEL TRATAMIENTO**

Sus datos se utilizan EXCLUSIVAMENTE para:

* Autenticación y acceso seguro  
* Gestión de cuenta de usuario  
* Creación de reportes ciudadanos (geolocalización cuadrante, no exacta)  
* Prevención fraude anti-Sybil  
* Notificaciones personalizadas  
* Votaciones verificadas (1 persona \= 1 voto)  
* Moderación de contenido  
* Estadísticas agregadas sin vinculación personal  
* Cumplimiento legal ante solicitud judicial

**GARANTÍA:** No vendemos, alquilamos ni compartimos datos con terceros para fines comerciales. JAMÁS.

## **6\. BASE LEGAL DEL TRATAMIENTO**

**• CONSENTIMIENTO:** Funcionalidades opcionales (notificaciones, geolocalización precisa)

**• EJECUCIÓN CONTRATO:** Proveer servicios solicitados activamente

**• INTERÉS LEGÍTIMO:** Mejorar servicio, prevenir fraude, garantizar seguridad

**• CUMPLIMIENTO LEGAL:** Solicitudes judiciales o administrativas legítimas

## **7\. CONSERVACIÓN DE DATOS**

| Tipo Dato | Plazo | Acción Post-Plazo |
| :---- | :---- | :---- |
| **Cuenta activa** | Mientras en uso | N/A |
| **Cuenta inactiva** | 12 meses sin login | Notificación \+ eliminación |
| **Datos biométricos** | 24 horas máximo | Eliminación automática tras validar |
| **Reportes ciudadanos** | Indefinido (interés público) | Anonimización tras 5 años |
| **Logs técnicos** | 90 días | Eliminación automática |
| **Cuenta eliminada** | 30 días backup | Borrado permanente irreversible |

## **8\. DERECHOS DEL USUARIO**

Conforme GDPR y Ley 19.628 Chile:

| Derecho | Cómo Ejercerlo |
| :---- | :---- |
| **ACCESO** | Panel Privacidad \> "Ver mis datos" \- Descarga archivo completo |
| **RECTIFICACIÓN** | Panel Privacidad \> "Editar perfil" |
| **ELIMINACIÓN** | Panel Privacidad \> "Eliminar cuenta" \- Borrado 30 días |
| **PORTABILIDAD** | Panel Privacidad \> "Exportar datos" \- JSON/ZIP |
| **OPOSICIÓN** | Contactar dpo@civicum.cl |
| **LIMITACIÓN** | Solicitar suspensión temporal vía dpo@civicum.cl |
| **REVOCACIÓN** | Panel Privacidad \> "Permisos" |
| **NO DECISIONES AUTOMATIZADAS** | Apelar moderación ante Jurado Digital |

## **9\. MEDIDAS DE SEGURIDAD**

### **9.1. Técnicas**

* Cifrado TLS 1.3 en tránsito  
* Cifrado AES-256 en reposo  
* WebAuthn sin contraseñas  
* Row Level Security (RLS) PostgreSQL  
* Hashing irreversible RUT (SHA-256)  
* Eliminación automática biometría post-verificación  
* Backups cifrados (7 días \+ 4 semanales \+ 3 mensuales)  
* Monitoreo continuo vulnerabilidades  
* Rate limiting \+ WAF Cloudflare  
* Logs ciegos (solo IDs, no contenido personal)

### **9.2. Organizativas**

* DPO dedicado  
* DPIA para nuevas funcionalidades  
* Capacitación equipo  
* Least privilege access  
* Auditorías periódicas  
* Plan Respuesta Incidentes  
* Simulacros crisis datos trimestrales

**COMPROMISO BRECHA:** Notificación \<72 horas \+ reporte autoridades si hay brecha de seguridad.

## **10\. TRANSFERENCIAS INTERNACIONALES**

| Proveedor | Servicio | Ubicación | Garantías |
| :---- | :---- | :---- | :---- |
| **Neon.tech** | PostgreSQL | EE.UU. (AWS Oregon) | SOC 2, GDPR |
| **Cloudflare** | CDN, WAF | Red global | ISO 27001, GDPR |
| **Vercel** | Hosting | EE.UU. | SOC 2, GDPR |
| **GitHub** | Control versiones | EE.UU. | SOC 2, ISO 27001 |

## **11\. COOKIES**

NO usamos cookies terceros (publicidad/tracking). Solo:

| Tipo | Propósito | Duración | Esencial |
| :---- | :---- | :---- | :---- |
| **Sesión** | Autenticación | 1 hora inactividad | SÍ |
| **Preferencias** | Configuración | 1 año | NO |
| **Analítica local** | Estadísticas agregadas | 30 días | NO |

## **12\. MENORES DE EDAD**

| Edad | Restricciones |
| :---- | :---- |
| **\< 13 años** | NO PERMITIDO (COPPA) |
| **13-15 años** | Solo lectura: Academia Cívica, Observatorio. NO reportes/votos/círculos |
| **16-17 años** | Participación limitada: Reportes confidenciales, votos no vinculantes. NO liderazgo ni Nivel 3 |

**CONSENTIMIENTO PARENTAL:** Menores 16 años requieren consentimiento padre/madre/tutor para participación activa.

## **13\. MODIFICACIONES**

Notificación 30 días anticipación \+ consentimiento explícito para cambios sustanciales.

## **14\. CONTACTO**

|  |  |
| :---- | :---- |
| **DPO** | dpo@civicum.cl |
| **Privacidad** | privacidad@civicum.cl |
| **Seguridad** | seguridad@civicum.cl |
| **Horario** | Lunes-Viernes 9-18h Chile |

**AUTORIDAD:** Consejo para la Transparencia Chile (www.consejotransparencia.cl) para reclamaciones.

# **PARTE II: TÉRMINOS Y CONDICIONES**

## **1\. ACEPTACIÓN**

Al usar CIVICUM, acepta estos Términos \+ Política Privacidad.

## **2\. DESCRIPCIÓN SERVICIO**

Plataforma cívica: participación, transparencia, fiscalización. NO somos institución pública.

## **3\. REGISTRO Y CUENTA**

* Información verídica y actualizada  
* Credenciales seguras (WebAuthn recomendado)  
* No múltiples cuentas para evadir restricciones  
* Notificar uso no autorizado inmediatamente

## **4\. USO ACEPTABLE**

PROHIBIDO:

* Contenido falso/difamatorio  
* Acoso/amenazas  
* Suplantación identidad  
* Doxxing (datos terceros sin consentimiento)  
* Actividades ilegales  
* Evadir moderación/seguridad  
* Scraping no autorizado  
* Interferir funcionamiento técnico  
* Múltiples cuentas manipular votos  
* Spam/publicidad no autorizada  
* Incitar violencia/discriminación/odio

**CONSECUENCIAS:** Suspensión temporal/permanente sin previo aviso. Cooperación con autoridades en casos graves.

## **5\. CONTENIDO USUARIO**

Usted conserva propiedad. Nos otorga licencia mundial, no exclusiva, libre regalías para:

* Mostrar en plataforma  
* Distribuir a autoridades  
* Estadísticas agregadas  
* Archivo público interés cívico

Moderación: IA \+ Jurado Digital \+ revisión manual. Apelaciones ante Consejo Cívico.

## **6\. PROPIEDAD INTELECTUAL**

Plataforma, código, diseño, logos, marcas son propiedad CIVICUM. Uso nombre/logo requiere autorización previa.

## **7\. LIMITACIONES RESPONSABILIDAD**

NO responsables por:

* Interrupciones, errores técnicos, pérdida datos  
* Daños indirectos/consecuentes  
* Contenido terceros  
* Decisiones basadas en información plataforma  
* Interacciones offline  
* Caso fortuito/fuerza mayor

**DISCLAIMER:** Plataforma "AS IS" y "AS AVAILABLE", sin garantías expresas o implícitas.

## **8\. INDEMNIZACIÓN**

Usted indemniza a CIVICUM de reclamaciones por: uso plataforma, violación Términos, violación derechos terceros, contenido publicado.

## **9\. SUSPENSIÓN Y TERMINACIÓN**

Usuario: Eliminar cuenta en Panel Privacidad. CIVICUM: Suspender/terminar por violación Términos, actividades ilegales, riesgo seguridad, información falsa verificación, inactividad 12 meses.

## **10\. MODIFICACIONES SERVICIO**

Notificación 30 días anticipación cambios sustanciales. Exportación datos antes cierre definitivo.

## **11\. LEY APLICABLE**

Leyes República de Chile. Jurisdicción tribunales Santiago. Mediación SERNAC recomendada antes tribunales.

## **12\. DISPOSICIONES GENERALES**

Acuerdo completo. Severabilidad cláusulas. Sin renuncia derechos. Sin cesión sin consentimiento. Idioma español prevalece.

CONTACTO LEGAL: legal@civicum.cl | Respuesta 15 días hábiles

**Gracias por confiar en CIVICUM**

**Juntos construimos un Chile más transparente, participativo y justo**

**\#SomosIdeasNoBandos**

*Vigente: Enero 2026 | Versión 1.0 | Revisión: 24/01/2026*