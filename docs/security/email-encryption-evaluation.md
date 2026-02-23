# 🔒 EVALUACIÓN: ENCRIPTACIÓN DE EMAIL EN REPOSO

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Epsilon-1

---

## 🎯 Contexto

Ley 19.628 (Protección de Datos Personales Chile) define datos personales pero no especifica requisitos técnicos de encriptación.

---

## ⚖️ Análisis Legal

### Ley 19.628 (Chile)
- Define "datos personales" y "datos sensibles"
- Email es dato personal (no sensible)
- No exige encriptación específica
- Exige "medidas de seguridad apropiadas"

### GDPR (Referencia)
- Recomienda pseudonimización/encriptación
- Depende del análisis de riesgo
- Email usualmente no requiere encriptación

---

## 📋 Recomendación

| Dato | Encriptación Reposo | Justificación |
|------|---------------------|---------------|
| RUT | ✅ Hash (ya implementado) | Identificador único Chile |
| Email | ⚠️ Opcional | No sensible, bajo riesgo |
| Contraseña | ✅ Hash (ya implementado) | Estándar industria |
| Ubicación | ✅ Si es precisión alta | Puede ser sensible |

### Decisión Sugerida

```
ENCRIPTAR EMAIL: NO REQUERIDO
RAZÓN: Bajo riesgo + overhead operacional + Ley 19.628 no lo exige

ALTERNATIVA IMPLEMENTADA:
- TLS en tránsito ✅
- Acceso restringido por roles ✅
- Logs de acceso ✅
- Backups encriptados ✅
```

---

## 🔄 Próximos Pasos

- [ ] Confirmar con asesoría legal
- [ ] Documentar decisión en ADR
- [ ] Revisar si nueva ley lo cambia

---

*Documento generado para cerrar Observación Epsilon-1*
