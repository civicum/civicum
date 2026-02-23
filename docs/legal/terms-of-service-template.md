# 📄 TEMPLATE TÉRMINOS DE SERVICIO CIVICUM

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Lambda-2

---

## 🎯 Objetivo

Proveer un marco legal formal para el uso de la plataforma CIVICUM, cumpliendo con la Ley 19.628 (finalidad declarada) y legislación administrativa chilena.

---

## 📋 Estructura del ToS

### 1. Identificación del Responsable

```
CIVICUM es una plataforma cívica open-source operada por [ENTIDAD].
Domicilio: [DIRECCIÓN]
Email contacto: legal@civicum.cl
```

### 2. Definiciones

| Término | Definición |
|---------|-----------|
| Plataforma | Sitio web civicum.cl y aplicaciones asociadas |
| Usuario | Persona natural registrada en la plataforma |
| Voto simbólico | Expresión de preferencia NO vinculante legalmente |
| Contenido UGC | Reportes, comentarios y aportes creados por usuarios |
| Datos personales | Según definición de Ley 19.628 art. 2° |

### 3. Finalidad del Tratamiento de Datos

| Dato | Finalidad | Base Legal |
|------|-----------|------------|
| Email | Autenticación, notificaciones | Consentimiento explícito |
| RUT (hash) | Verificación 1 persona = 1 voto | Interés legítimo + consentimiento |
| Ubicación (comuna) | Georreferenciación de reportes | Consentimiento explícito |
| Votos simbólicos | Agregación estadística anónima | Consentimiento explícito |
| Reportes ciudadanos | Fiscalización pública | Interés público |

### 4. Derechos del Usuario (Ley 19.628 + GDPR)

```markdown
Como usuario, tienes derecho a:
- 📥 ACCEDER a todos tus datos (/api/me/data → JSON/CSV)
- ✏️ RECTIFICAR información incorrecta (editar perfil)
- 🗑️ CANCELAR tu cuenta (eliminación completa en 30 días)
- 📤 PORTAR tus datos a otra plataforma (export JSON)
- 🚫 OPONERTE al tratamiento (opt-out de notificaciones)

Para ejercer estos derechos: privacidad@civicum.cl
Plazo de respuesta: 10 días hábiles (Ley 19.628)
```

### 5. Naturaleza de los Votos

```markdown
⚠️ DISCLAIMER OBLIGATORIO (F-02 Honestidad Radical):

Los votos en CIVICUM son SIMBÓLICOS y NO tienen efecto legal 
vinculante. Civicum no es un órgano electoral ni reemplaza 
mecanismos democráticos formales. Los votos sirven para:
- Ordenar apoyo ciudadano
- Escalar temas con evidencia
- Generar estadísticas de opinión

CIVICUM no sustituye al SERVEL ni a ningún organismo electoral.
```

### 6. Propiedad Intelectual del UGC

```markdown
El contenido generado por usuarios (reportes, comentarios) es:
- Propiedad del usuario que lo creó
- Licenciado a CIVICUM bajo CC BY-SA 4.0 para uso en la plataforma
- Eliminable por el usuario en cualquier momento (soft-delete 30d)
```

### 7. Limitaciones de Responsabilidad

```markdown
CIVICUM no garantiza:
- Que las autoridades respondan a reportes ciudadanos
- La exactitud de datos de fuentes externas (BCN, SERVEL, DIPRES)
- La disponibilidad continua del servicio (ver SLA en docs)

CIVICUM sí garantiza:
- Protección de datos personales según Ley 19.628
- Transparencia en algoritmos de ranking y recomendación
- Neutralidad política (F-05)
```

### 8. Jurisdicción

```markdown
Estos términos se rigen por las leyes de la República de Chile.
Cualquier controversia será resuelta por los tribunales 
ordinarios de justicia con sede en Santiago.
```

---

## 📅 Revisión

| Acción | Frecuencia |
|--------|-----------|
| Revisión legal completa | Anual |
| Update por cambio legislativo | Según webhook BCN |
| Notificación a usuarios de cambios | Cada actualización |

---

*Documento generado para cerrar Observación Lambda-2*
