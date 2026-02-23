# 📝 GUÍA DE LENGUAJE INCLUSIVO Y TONO

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 74 — Mapuche-4: Lenguaje Inclusivo/Neutro  
**Soluciona:** M4-1, M4-2

---

## 🎯 Problema

Revisión de género, tono y representación en todos los textos de la app. ¿Somos inclusivos sin ser forzados?

---

## 🔴 HALLAZGO M4-1: Sin Estándar Consistente de Género en Textos

**Problema:** La documentación mezcla "ciudadano", "ciudadano/a", "ciudadanos" sin una política clara. Algunos documentos usan masculino genérico, otros intentan lenguaje inclusivo.

**Solución: Política de Lenguaje de Género para CIVICUM**

### Principio rector
```
"Inclusivo sin artificial. Claro sin excluir."
```

### Estándar adoptado: Lenguaje desdoblado estratégico + neutro cuando natural

| Contexto | ❌ Evitar | ✅ Usar | Razón |
|----------|----------|--------|-------|
| Sustantivos genéricos | "Los ciudadanos" | "La ciudadanía" | Neutro natural |
| Referencia individual | "El usuario" | "La persona" o "Tú" | Directo |
| Plurales | "Los vecinos" | "El vecindario" / "Vecinos y vecinas" | Natural |
| Cargos | "El alcalde" | "El/la alcalde/sa" (primera mención), luego "la autoridad" | Correcto |
| Acciones | "Votó" | "Votó" (sin cambio, ya es neutro) | Ya funciona |
| Tuteo | "Estimado usuario" | "Hola, [alias]" o simplemente "Tú" | Cercano |
| Profesiones | "Los ingenieros" | "El equipo de ingeniería" | Colectivo |

### Fórmula de prioridad
```
1° Preferir sustantivos neutros: ciudadanía, persona, vecindario, comunidad
2° Preferir tuteo directo: "tú", "tu reporte", "tu comuna"
3° Si no es posible: desdoblado corto: "vecinos y vecinas" (no "vecinxs", "vecin@s")
4° NUNCA usar: "e" (todes), "x" (todxs), "@" (tod@s) — no es accesible para screen readers
```

### Tabla de sustituciones estándar
| Original | Reemplazo preferido |
|----------|-------------------|
| ciudadanos | ciudadanía |
| vecinos | vecindario / vecinos y vecinas |
| ellos | estas personas |
| el usuario | tú / la persona |
| los votantes | quienes votaron |
| los reporteros | quienes reportaron |
| el interesado | la persona interesada |
| funcionarios | funcionariado / equipo del municipio |
| los expertos | personas especialistas |

---

## 🟠 HALLAZGO M4-2: Sin Revisión de Tono en Microcopy

**Problema:** No hay guía de tono específica para microcopy (botones, toasts, errores, placeholders) que evite paternalismo, condescendencia o frialdad.

**Solución: Guía de Tono por Contexto**

### Espectro tonal de CIVICUM
```
Institucional fría  ←───────X──────→  Paternalista
                         CIVICUM
                    (cercano + serio)
```

| Contexto | Tono | Ejemplo ❌ | Ejemplo ✅ |
|----------|------|-----------|-----------|
| Error de formulario | Informativo, sin culpa | "Has cometido un error" | "Falta completar este campo" |
| Logro/badge | Celebratorio moderado | "¡FELICIDADES CAMPEÓN!" | "Listo. Obtuviste tu primer badge 🎯" |
| Dato duro | Sobrio, sin alarma | "ESCÁNDALO: Municipio gasta..." | "Tu municipio gastó $X en Y este año" |
| Moderación | Firme, sin condescendencia | "NO PUEDE publicar eso" | "Este contenido no cumple las normas. [Editar]" |
| Offline | Tranquilizador | "Sin conexión. Nada funciona." | "Sin conexión. Tu trabajo está guardado 💾" |
| Espera | Honesto | "Cargando..." | "Buscando datos de tu comuna..." |
| Vacío/empty state | Invitador | "No hay reportes" | "Tu comuna aún no tiene reportes. ¿Quieres crear el primero?" |
| Confirmación | Claro | "Acción realizada con éxito" | "Reporte enviado. Te avisaremos si hay novedades." |
| Privacidad | Empoderador | "Sus datos están seguros" | "Tu identidad está protegida. Solo tú decides qué mostrar." |

### Chilenismos: reglas (complementan Rol 13)
| Permitido ✅ | NO permitido ❌ | Razón |
|-------------|----------------|-------|
| "Bacán" | "Sipo" | Demasiado informal |
| "¿Cachaste?" | "Weón" | Vulgar, excluye |
| "Al tiro" | "Culiao" | Ofensivo |
| "Piola" | Regionalismos muy locales | No todos los entienden |

---

*Documento generado para Escuadrón 74 Mapuche-4. Resolución M4-1 + M4-2.*
