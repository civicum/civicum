# 🗣️ ARQUITECTURA PLURINACIONAL (I18N + ORALIDAD)

**Versión:** 1.0
**Squad:** 163 Plurinacional
**Alcance:** Mapudungun, Aymara, Rapa Nui, Creole Haitiano

---

## 🎯 Objetivo
Que la infraestructura de CIVICUM soporte lenguas originarias y migrantes, no solo como traducción de texto, sino respetando su naturaleza oral y caracteres específicos.

## 🔠 SOPORTE DE CARACTERES (UTF-8 EXTENDED)

### 1. Base de Datos
*   **Collation:** `en_US.utf8` (PostgreSQL default) soporta todos los caracteres.
*   **Caracteres Críticos a validar en Tests:**
    *   Mapudungun: `ḻ`, `ṉ`, `ṯ`, `ü`, `ñ` (Grafemario Azümchefe / Raguileo).
    *   Rapa Nui: `ā`, `ī`, `ū`, `ē`, `ō`, `ŋ` (nga).
    *   Creole: `ò`, `è`.

### 2. Sanitización
*   El WAF y los inputs sanitizers NO deben bloquear caracteres "extraños" como `ŋ` o `ṯ` considerándolos ataque XSS.
*   **Allow-list:** `\p{L}` (Unicode Letter property) en Regex, no `[a-zA-Z]`.

## 🔊 ORALIDAD PRIMERO (AUDIO-FIRST)

Muchas lenguas originarias tienen una tradición oral más fuerte que la escrita.

### Componente `<OralLabel />`
Cada etiqueta crítica (Botones de acción, alertas) debe tener un botón de "Escuchar Pronunciación".

```tsx
<Button>
  <Text>Votar</Text>
  <OralAudio src="/audio/mapudungun/votar.mp3" lang="arn" />
</Button>
```

### Fallback de Traducción
1.  **Español (Default)**
2.  **Lengua Local (Contextual):** Si el GPS detecta "Temuco", sugerir Mapudungun. Si detecta "Putre", sugerir Aymara.

---
*No es solo traducir palabras, es traducir cosmovisiones.*
