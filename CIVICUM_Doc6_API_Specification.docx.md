

**CIVICUM**

Sistema Nervioso Cívico de Chile

**ESPECIFICACIÓN API REST**  
**OpenAPI 3.0**

*Documentación Completa de Endpoints*

Versión API: 1.0  
Enero 2026  
Última Actualización: 24/01/2026

# **ÍNDICE**

* 1\. INTRODUCCIÓN  
*    1.1. Propósito  
*    1.2. Base URL  
*    1.3. Autenticación  
*    1.4. Rate Limiting  
* 2\. AUTENTICACIÓN  
*    2.1. WebAuthn (Passkeys)  
*    2.2. Magic Links  
*    2.3. JWT Tokens  
* 3\. MÓDULOS API  
*    3.1. Mi CIVICUM (Perfil)  
*    3.2. Alza la Voz (Reportes)  
*    3.3. Cuentas Claras (Transparencia)  
*    3.4. Voto Ciudadano  
*    3.5. Academia Cívica  
*    3.6. Asistente Cívico  
* 4\. ESQUEMAS DE DATOS  
* 5\. CÓDIGOS DE ERROR  
* 6\. ANEXOS

# **1\. INTRODUCCIÓN**

## **1.1. Propósito**

Esta especificación OpenAPI 3.0 documenta la API REST completa de CIVICUM, incluyendo autenticación, endpoints de 6 módulos principales, esquemas de datos y códigos de respuesta.

## **1.2. Información General**

| Propiedad | Valor |
| :---- | :---- |
| **Versión API** | v1 |
| **Protocolo** | HTTPS |
| **Formato** | JSON |
| **Base URL Producción** | https://api.civicum.cl/v1 |
| **Base URL Staging** | https://api-staging.civicum.cl/v1 |
| **Documentación OpenAPI** | https://api.civicum.cl/docs |
| **Autenticación** | JWT Bearer Token |
| **Rate Limit** | 100 req/min (usuario), 60 req/min (IP) |

## **1.3. Convenciones**

* Todos los timestamps en formato ISO 8601 (UTC)  
* IDs en formato UUID v4  
* Paginación: limit (max 100\) y offset  
* Errores: Formato RFC 7807 Problem Details  
* CORS habilitado para dominios civicum.cl  
* Compresión gzip automática

# **2\. AUTENTICACIÓN**

## **2.1. Flujo de Autenticación**

CIVICUM usa autenticación sin contraseñas:

1\. WebAuthn (Passkeys) \- Recomendado  
   ├─ Registro: POST /auth/webauthn/register  
   ├─ Login: POST /auth/webauthn/login  
   └─ Retorna: JWT access \+ refresh tokens

2\. Magic Link (Email OTP)  
   ├─ Request: POST /auth/magic-link/request  
   ├─ Verify: POST /auth/magic-link/verify  
   └─ Retorna: JWT access \+ refresh tokens

3\. JWT Tokens  
   ├─ Access Token: 15 min expiración  
   ├─ Refresh Token: 7 días expiración  
   └─ Header: Authorization: Bearer \<token\>

## **2.2. POST /auth/webauthn/register**

Request:  
{  
  "email": "user@example.com",  
  "turnstile\_token": "cf-turnstile-token",  
  "challenge": "server-generated-challenge",  
  "credential": {  
    "id": "credential-id-base64",  
    "publicKey": "public-key-base64",  
    "attestation": {...}  
  }  
}

Response 201:  
{  
  "user\_id": "uuid",  
  "access\_token": "jwt-token",  
  "refresh\_token": "jwt-refresh",  
  "expires\_in": 900,  
  "identity\_level": 1  
}

## **2.3. POST /auth/webauthn/login**

Request:  
{  
  "credential\_id": "credential-id-base64",  
  "challenge": "server-challenge",  
  "signature": "webauthn-signature"  
}

Response 200:  
{  
  "user\_id": "uuid",  
  "access\_token": "jwt-token",  
  "refresh\_token": "jwt-refresh",  
  "expires\_in": 900,  
  "identity\_level": 1  
}

## **2.4. POST /auth/refresh**

Request:  
{  
  "refresh\_token": "jwt-refresh-token"  
}

Response 200:  
{  
  "access\_token": "new-jwt-token",  
  "expires\_in": 900  
}

# **3\. MÓDULOS API**

## **3.1. MI CIVICUM (Perfil Usuario)**

### **GET /profile/me**

Headers: Authorization: Bearer \<token\>

Response 200:  
{  
  "id": "uuid",  
  "display\_name": "María González",  
  "email": "user@example.com",  
  "identity\_level": 2,  
  "karma\_civico": 450,  
  "trust\_score": 85,  
  "comuna\_id": "13101",  
  "is\_public": true,  
  "created\_at": "2025-01-15T10:30:00Z",  
  "badges": \["early\_adopter", "reporter\_nivel\_2"\]  
}

### **PATCH /profile/me**

Request:  
{  
  "display\_name": "María José González",  
  "bio": "Vecina activa de Providencia",  
  "is\_public": true  
}

Response 200: (mismo formato GET /profile/me)

### **GET /profile/me/missions**

Query params: ?status=active\&limit=20

Response 200:  
{  
  "missions": \[  
    {  
      "id": "uuid",  
      "title": "Primera Denuncia",  
      "description": "Crea tu primer reporte",  
      "status": "completed",  
      "progress": 1.0,  
      "karma\_reward": 50,  
      "completed\_at": "2025-01-20T14:00:00Z"  
    }  
  \],  
  "total": 1  
}

## **3.2. ALZA LA VOZ (Reportes)**

### **POST /reports**

Request:  
{  
  "category": "iluminacion",  
  "title": "Luminaria dañada en Av. Providencia",  
  "description": "Poste 3456 sin luz hace 2 semanas",  
  "location": {  
    "comuna": "13123",  
    "lat": \-33.4372,  
    "lng": \-70.6506,  
    "address": "Av. Providencia 1234"  
  },  
  "visibility": "public",  
  "evidence\_ids": \["uuid1", "uuid2"\]  
}

Response 201:  
{  
  "id": "uuid",  
  "author\_id": "uuid",  
  "category": "iluminacion",  
  "status": "OPEN",  
  "support\_count": 0,  
  "created\_at": "2025-01-24T10:00:00Z",  
  "url": "https://civicum.cl/reportes/uuid"  
}

### **GET /reports**

Query params:  
  ?comuna=13123  
  \&category=iluminacion  
  \&status=OPEN  
  \&limit=20  
  \&offset=0

Response 200:  
{  
  "reports": \[  
    {  
      "id": "uuid",  
      "title": "Luminaria dañada",  
      "category": "iluminacion",  
      "status": "OPEN",  
      "location": {...},  
      "support\_count": 12,  
      "created\_at": "2025-01-20T10:00:00Z"  
    }  
  \],  
  "total": 156,  
  "limit": 20,  
  "offset": 0  
}

### **GET /reports/{id}**

Response 200:  
{  
  "id": "uuid",  
  "author": {  
    "id": "uuid",  
    "display\_name": "María González",  
    "karma": 450  
  },  
  "title": "Luminaria dañada",  
  "description": "...",  
  "category": "iluminacion",  
  "status": "OPEN",  
  "location": {...},  
  "evidence": \[  
    {  
      "id": "uuid",  
      "url": "https://cdn.civicum.cl/evidence/uuid.jpg",  
      "type": "image"  
    }  
  \],  
  "support\_count": 12,  
  "institutional\_response": null,  
  "created\_at": "2025-01-20T10:00:00Z",  
  "updated\_at": "2025-01-20T10:00:00Z"  
}

### **POST /reports/{id}/support**

Request: {} (empty body)

Response 200:  
{  
  "report\_id": "uuid",  
  "support\_count": 13,  
  "user\_supported": true  
}

### **POST /evidence/upload**

Content-Type: multipart/form-data

Request:  
  file: \[binary image/video\]  
  max\_size: 5MB  
  types: image/jpeg, image/png, video/mp4

Response 201:  
{  
  "id": "uuid",  
  "url": "https://cdn.civicum.cl/evidence/uuid.jpg",  
  "file\_type": "image/jpeg",  
  "file\_size": 1024000,  
  "checksum": "sha256-hash"  
}

## **3.3. CUENTAS CLARAS (Transparencia)**

### **GET /authorities**

Query params:  
  ?jurisdiction\_type=comunal  
  \&jurisdiction\_id=13123  
  \&position=alcalde  
  \&is\_current=true

Response 200:  
{  
  "authorities": \[  
    {  
      "id": "uuid",  
      "full\_name": "Evelyn Matthei",  
      "position": "Alcaldesa",  
      "jurisdiction\_type": "comunal",  
      "jurisdiction\_id": "13123",  
      "institution\_id": "uuid",  
      "political\_party": "UDI",  
      "term\_start": "2021-06-28",  
      "term\_end": "2025-06-28",  
      "is\_current": true,  
      "performance": {  
        "promises\_met": 45,  
        "promises\_total": 67,  
        "avg\_response\_days": 12.5  
      }  
    }  
  \],  
  "total": 1  
}

### **GET /authorities/{id}/promises**

Response 200:  
{  
  "promises": \[  
    {  
      "id": "uuid",  
      "promise\_text": "Mejorar iluminación en 50 calles",  
      "category": "infraestructura",  
      "source\_type": "campaign",  
      "source\_url": "https://...",  
      "deadline": "2024-12-31",  
      "status": "IN\_PROGRESS",  
      "progress": 0.65,  
      "citizen\_reported\_count": 23  
    }  
  \],  
  "total": 67  
}

### **GET /budget/{comuna\_code}**

Query params: ?year=2025

Response 200:  
{  
  "comuna\_code": "13123",  
  "year": 2025,  
  "total\_budget": 85000000000,  
  "categories": \[  
    {  
      "name": "Salud",  
      "amount": 25000000000,  
      "percentage": 29.4  
    },  
    {  
      "name": "Educación",  
      "amount": 20000000000,  
      "percentage": 23.5  
    }  
  \],  
  "source": "SINIM",  
  "updated\_at": "2025-01-15T00:00:00Z"  
}

## **3.4. VOTO CIUDADANO**

### **GET /proposals**

Query params:  
  ?category=educacion  
  \&status=ACTIVE  
  \&sort=hot  
  \&limit=20

Response 200:  
{  
  "proposals": \[  
    {  
      "id": "uuid",  
      "title": "Educación Cívica Obligatoria",  
      "description": "...",  
      "category": "educacion",  
      "status": "ACTIVE",  
      "votes": {  
        "total": 15234,  
        "favor": 12450,  
        "contra": 2784  
      },  
      "comment\_count": 456,  
      "created\_at": "2025-01-10T08:00:00Z"  
    }  
  \],  
  "total": 234  
}

### **POST /proposals**

Request:  
{  
  "title": "Educación Cívica Obligatoria",  
  "description": "Propuesta para hacer obligatoria...",  
  "category": "educacion",  
  "details": {  
    "problem": "...",  
    "solution": "...",  
    "impact": "..."  
  }  
}

Response 201:  
{  
  "id": "uuid",  
  "status": "ACTIVE",  
  "created\_at": "2025-01-24T10:00:00Z",  
  "url": "https://civicum.cl/propuestas/uuid"  
}

### **POST /proposals/{id}/vote**

Request:  
{  
  "vote": "FAVOR",  // FAVOR | CONTRA | ABSTENCION  
  "rationale": "Apoyo porque..." (opcional)  
}

Response 200:  
{  
  "proposal\_id": "uuid",  
  "user\_vote": "FAVOR",  
  "votes": {  
    "total": 15235,  
    "favor": 12451,  
    "contra": 2784  
  }  
}

## **3.5. ACADEMIA CÍVICA**

### **GET /capsulas**

Query params:  
  ?nivel=basico  
  \&modulo=fundamentos  
  \&is\_active=true

Response 200:  
{  
  "capsulas": \[  
    {  
      "id": "cap\_poderes\_estado",  
      "titulo": "Los 3 Poderes del Estado",  
      "nivel": "basico",  
      "tema\_principal": "Separación de poderes",  
      "modulo": "fundamentos",  
      "estimated\_time\_seconds": 300,  
      "tiene\_quiz": true,  
      "audiencia\_objetivo": "general",  
      "tags": \["constitución", "poderes", "democracia"\]  
    }  
  \],  
  "total": 156  
}

### **GET /capsulas/{id}**

Response 200:  
{  
  "id": "cap\_poderes\_estado",  
  "titulo": "Los 3 Poderes del Estado",  
  "descripcion": "...",  
  "nivel": "basico",  
  "stories": \[  
    {  
      "id": 1,  
      "text": "¿Quién manda en Chile? 🤔",  
      "image\_id": "img\_poderes\_1",  
      "alt\_text": "Ilustración tres poderes"  
    }  
  \],  
  "quiz": \[  
    {  
      "pregunta": "¿Quién hace las leyes?",  
      "opciones": \["Presidente", "Congreso", "Tribunales"\],  
      "respuesta\_correcta": 1,  
      "explicacion": "El Congreso (Cámara y Senado)..."  
    }  
  \],  
  "relaciones": {  
    "prerequisites": \[\],  
    "next\_suggested": \["cap\_congreso"\],  
    "related": \["cap\_democracia"\]  
  }  
}

### **POST /capsulas/{id}/complete**

Request:  
{  
  "quiz\_answers": \[1, 2, 0\],  // Índices respuestas  
  "time\_spent\_seconds": 285  
}

Response 200:  
{  
  "capsula\_id": "cap\_poderes\_estado",  
  "status": "completada",  
  "score": 100,  
  "karma\_earned": 20,  
  "next\_capsula": "cap\_congreso",  
  "completed\_at": "2025-01-24T10:30:00Z"  
}

### **GET /missions**

Query params: ?type=permanent\&is\_active=true

Response 200:  
{  
  "missions": \[  
    {  
      "id": "uuid",  
      "title": "GPS Cívico Mensual",  
      "description": "Completa 5 cápsulas este mes",  
      "type": "permanent",  
      "goals": \[  
        {  
          "description": "Completar 5 cápsulas",  
          "target": 5,  
          "current": 2  
        }  
      \],  
      "karma\_reward": 100,  
      "expires\_at": "2025-01-31T23:59:59Z"  
    }  
  \]  
}

## **3.6. ASISTENTE CÍVICO (Civia)**

### **POST /assistant/query**

Request:  
{  
  "message": "¿Cómo hago una solicitud de transparencia?",  
  "context": {  
    "user\_comuna": "13123",  
    "previous\_messages": \[\]  // Opcional  
  },  
  "device\_tier": "HIGH"  // HIGH | MEDIUM | LOW  
}

Response 200:  
{  
  "response": {  
    "text": "Para solicitar información...",  
    "sources": \[  
      {  
        "type": "proceso",  
        "id": "proceso\_solicitud\_transparencia",  
        "title": "Solicitud de Transparencia"  
      }  
    \],  
    "suggestions": \[  
      "Ver plantilla solicitud",  
      "Ver plazo respuesta",  
      "Buscar mi municipio"  
    \]  
  },  
  "processing\_location": "client",  // client | cloud  
  "confidence": 0.95  
}

### **POST /assistant/generate-document**

Request:  
{  
  "template\_id": "plantilla\_solicitud\_transparencia",  
  "variables": {  
    "nombre\_completo": "María José González",  
    "rut": "12345678-9",  
    "email": "user@example.com",  
    "institucion\_destino": "Municipalidad de Providencia",  
    "informacion\_solicitada": "Presupuesto 2025..."  
  },  
  "format": "pdf"  // pdf | docx | txt  
}

Response 200:  
{  
  "document\_id": "uuid",  
  "download\_url": "https://cdn.civicum.cl/docs/uuid.pdf",  
  "expires\_at": "2025-01-31T10:00:00Z",  
  "file\_size": 124000,  
  "format": "pdf"  
}

### **GET /templates**

Query params: ?tipo=solicitud\&proceso\_relacionado=proceso\_id

Response 200:  
{  
  "templates": \[  
    {  
      "id": "plantilla\_solicitud\_transparencia",  
      "nombre": "Solicitud Acceso Información",  
      "tipo": "solicitud",  
      "proceso\_relacionado": "proceso\_solicitud\_transparencia",  
      "nivel\_verificacion\_requerido": 1,  
      "formatos\_salida": \["pdf", "docx", "txt"\]  
    }  
  \]  
}

### **GET /journeys/{id}**

Response 200:  
{  
  "id": "uuid",  
  "template\_id": "oirs\_municipal",  
  "entity\_type": "community\_report",  
  "entity\_id": "report-uuid",  
  "estado\_actual": "plazo\_en\_curso",  
  "fecha\_inicio": "2025-01-10T10:00:00Z",  
  "fecha\_vencimiento": "2025-01-25T23:59:59Z",  
  "milestones": \[  
    {  
      "clave\_hito": "enviado",  
      "fecha\_hito": "2025-01-10T10:00:00Z",  
      "descripcion": "Solicitud enviada"  
    },  
    {  
      "clave\_hito": "recibido",  
      "fecha\_hito": "2025-01-11T08:00:00Z",  
      "descripcion": "Municipalidad confirmó recepción"  
    }  
  \]  
}

# **4\. ESQUEMAS DE DATOS COMUNES**

## **4.1. User Schema**

{  
  "id": "uuid",  
  "display\_name": "string",  
  "email": "string (email format)",  
  "identity\_level": "integer (0-3)",  
  "karma\_civico": "integer",  
  "trust\_score": "integer (0-100)",  
  "role": "string (citizen|moderator|admin)",  
  "comuna\_id": "string (5 digits)",  
  "is\_active": "boolean",  
  "is\_public": "boolean",  
  "created\_at": "string (ISO 8601)"  
}

## **4.2. Report Schema**

{  
  "id": "uuid",  
  "author\_id": "uuid",  
  "category": "string",  
  "title": "string (max 200 chars)",  
  "description": "string",  
  "location": {  
    "comuna": "string",  
    "lat": "number",  
    "lng": "number",  
    "address": "string"  
  },  
  "status": "string (OPEN|IN\_PROGRESS|RESOLVED|CLOSED)",  
  "visibility": "string (public|confidential|anonymous)",  
  "support\_count": "integer",  
  "created\_at": "string (ISO 8601)",  
  "updated\_at": "string (ISO 8601)"  
}

## **4.3. Pagination Schema**

{  
  "data": "array",  
  "total": "integer",  
  "limit": "integer",  
  "offset": "integer",  
  "has\_more": "boolean"  
}

# **5\. CÓDIGOS DE ERROR (RFC 7807\)**

| Código | Tipo | Título | Ejemplo |
| :---- | :---- | :---- | :---- |
| **400** | bad\_request | Solicitud Inválida | Campo requerido faltante |
| **401** | unauthorized | No Autorizado | Token expirado |
| **403** | forbidden | Prohibido | Nivel verificación insuficiente |
| **404** | not\_found | No Encontrado | Recurso no existe |
| **409** | conflict | Conflicto | Usuario ya existe |
| **422** | validation\_error | Error Validación | Email formato inválido |
| **429** | rate\_limit | Límite Excedido | Demasiadas solicitudes |
| **500** | server\_error | Error Servidor | Error interno inesperado |
| **503** | service\_unavailable | Servicio No Disponible | Modo conservación activo |

## **5.1. Formato Error Response**

{  
  "type": "https://api.civicum.cl/errors/validation\_error",  
  "title": "Error de Validación",  
  "status": 422,  
  "detail": "El campo email tiene formato inválido",  
  "instance": "/reports",  
  "errors": \[  
    {  
      "field": "email",  
      "message": "Formato email inválido",  
      "code": "invalid\_format"  
    }  
  \],  
  "timestamp": "2025-01-24T10:00:00Z",  
  "request\_id": "uuid"  
}

# **6\. RATE LIMITING**

## **6.1. Límites por Usuario**

| Acción | Límite | Ventana |
| :---- | :---- | :---- |
| **Total requests** | 100 | 1 hora |
| **Login** | 5 | 10 minutos |
| **Create report** | 3 | 1 hora |
| **Upload evidence** | 10 | 1 hora |
| **Vote** | 20 | 1 hora |
| **Assistant query** | 10 | 1 hora |

## **6.2. Límites por IP**

| Acción | Límite | Ventana |
| :---- | :---- | :---- |
| **Total requests** | 60 | 1 minuto |
| **Login** | 3 | 10 minutos |
| **Create account** | 2 | 1 hora |

## **6.3. Headers Rate Limit**

X-RateLimit-Limit: 100  
X-RateLimit-Remaining: 75  
X-RateLimit-Reset: 1737720000  
X-RateLimit-Policy: user=100/hour

# **ANEXO A: VERSIONES API**

| Versión | Fecha | Cambios Principales |
| :---- | :---- | :---- |
| **v1** | Enero 2026 | Release inicial MVP \- 6 módulos principales |

# **ANEXO B: RECURSOS ADICIONALES**

* OpenAPI YAML: https://api.civicum.cl/openapi.yaml  
* Postman Collection: https://api.civicum.cl/postman  
* SDK JavaScript: npm install @civicum/sdk  
* Sandbox Environment: https://sandbox.civicum.cl  
* Status Page: https://status.civicum.cl  
* Developer Portal: https://developers.civicum.cl

# **ANEXO C: CONVENCIONES ADICIONALES**

* Versionado Semántico (SemVer 2.0)  
* Deprecation Policy: Aviso 6 meses antes  
* Breaking Changes: Solo en versiones mayores  
* Backward Compatibility: Mantenida en minor versions  
* Changelog: Disponible en /changelog  
* API Changelog RSS: /changelog.rss

**FIN DEL DOCUMENTO**

**Especificación API REST \- OpenAPI 3.0**  
**CIVICUM \- Sistema Nervioso Cívico de Chile**

**6 Módulos | 45+ Endpoints | Autenticación Zero-Password**

**\#SomosIdeasNoBandos**

*Versión 1.0 | Enero 2026 | Actualizado: 24/01/2026*  
*Documento técnico para validación 80+ expertos profesionales*