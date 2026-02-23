# ⚖️ DISCLAIMER LEGAL DE CIVIA

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación Eta-1

---

## 🎯 Objetivo

Hacer explícito que Civia es un asistente informativo y NO constituye asesoría legal ni reemplaza consulta profesional.

---

## 📝 Disclaimer Estándar (Cada Respuesta)

### Versión Corta (Inline)
```
ℹ️ Civia es un asistente informativo. Esta respuesta no constituye 
asesoría legal. Para casos específicos, consulta a un profesional.
```

### Versión Larga (Expandible)
```
⚖️ AVISO LEGAL

Civia es un asistente de inteligencia artificial diseñado para 
proporcionar información cívica general basada en fuentes oficiales.

LIMITACIONES:
• No constituye asesoría legal, tributaria ni profesional
• No reemplaza la consulta con abogados o especialistas
• La información puede estar desactualizada
• Las interpretaciones son orientativas, no vinculantes

FUENTES:
Esta respuesta se basa en [fuente oficial]. 
Ver documento original: [link]

FECHA DE ACTUALIZACIÓN: [fecha fuente]
```

---

## 🎨 Implementación en UI

### En Chat
```tsx
<CiviaResponse>
  <ResponseContent>{respuesta}</ResponseContent>
  
  <Disclaimer variant="compact">
    <Icon name="info" />
    <Text>
      Civia es informativo. 
      <Link to="/legal/disclaimer">No es asesoría legal</Link>
    </Text>
  </Disclaimer>
  
  <SourceLink href={sourceUrl}>
    📚 Ver fuente oficial
  </SourceLink>
</CiviaResponse>
```

### En Temas Sensibles (Legal, Tributario)
```tsx
<Alert variant="warning">
  <AlertTitle>⚠️ Tema sensible</AlertTitle>
  <AlertDescription>
    Este tema requiere asesoría profesional específica. 
    Civia solo puede orientarte con información general.
  </AlertDescription>
</Alert>
```

---

## 📋 Temas que Requieren Disclaimer Reforzado

| Tema | Nivel | Disclaimer |
|------|-------|------------|
| Leyes/Constitución | Medio | Estándar + Fuente |
| Tributario | Alto | Warning + Recomendación profesional |
| Laboral | Alto | Warning + Link a Dirección del Trabajo |
| Penal | Crítico | Warning + "Consulta abogado" |
| Salud | Crítico | Warning + "No reemplaza médico" |
| Financiero | Alto | Warning + No es asesoría de inversión |

---

## ✅ Checklist de Implementación

- [x] Disclaimer visible en cada respuesta de Civia
- [x] Link a fuente oficial cuando corresponda
- [x] Fecha de actualización de la fuente
- [x] Warning reforzado en temas sensibles
- [x] Página `/legal/disclaimer` con versión completa
- [x] Tracking de clicks en "Ver fuente"

---

*Documento generado para cerrar Observación Eta-1*
