# 📵 GUÍA DE DISEÑO PARA ALFABETIZACIÓN DIGITAL NULA

**Versión:** 1.0  
**Última actualización:** 16 Febrero 2026  
**Escuadrón:** 54 — Psi-Delta: Alfabetización Digital Nula  
**Soluciona:** PsiD-1, PsiD-2

---

## 🎯 Premisa de Diseño

"El usuario no sabe qué es un email, no tiene contraseña de nada, y probablemente nunca descargó una app."

---

## 🔴 HALLAZGO PsiD-1: Sin Flujo de Registro para Usuarios Pre-Digitales

**Problema:** El registro actual requiere email + contraseña. Esto excluye a ciudadanos sin email. La inclusión-sin-smartphone (R5) resuelve canales pero no el registro.

**Solución: Registro Progresivo de 3 Niveles**

| Nivel | Requisito | Acceso | Verificación |
|-------|----------|--------|-------------|
| 0 | NADA | Ver reportes, presupuestos, autoridades | Sin registro |
| 1 | Teléfono celular (SMS OTP) | Crear reportes, apoyar | SMS verificado |
| 2 | Email o RUT (cédula) | Votar, crear Círculos | Email o cédula verificada |

**Flujo Nivel 1 (teléfono):**
```
PASO 1: "¿Tienes un celular?" → Sí
PASO 2: "Escribe tu número" → [______]
PASO 3: "Te enviamos un número de 4 dígitos por mensaje de texto"
PASO 4: "Escribe ese número aquí" → [____]
PASO 5: "¡Listo! Elige un nombre para mostrar" → [______]
→ Cuenta creada sin email, sin contraseña
```

**Sin contraseña:**
- Login siempre vía SMS OTP (magic link por SMS)
- Sesión persistente: 30 días sin necesidad de re-autenticación
- En dispositivo compartido: botón "Cerrar sesión" visible

---

## 🟠 HALLAZGO PsiD-2: Sin Vocabulario Adaptado para Usuarios Pre-Digitales

**Problema:** La UI usa términos técnicos que usuarios sin alfabetización digital no entienden.

**Solución: Diccionario de Sustitución**

| Término técnico | Reemplazo pre-digital | Dónde |
|-----------------|----------------------|-------|
| Email | "Tu correo electrónico (ej: nombre@gmail.com)" | Registro |
| Contraseña | "Tu clave secreta" | Registro |
| Login | "Entrar" | Botón |
| Notificación | "Aviso" | Push |
| Descargar | "Guardar en tu teléfono" | App store |
| Compartir | "Enviar a alguien" | Share button |
| Configuración | "Opciones" | Settings |
| Feed | "Noticias de tu comuna" | Home |
| Dashboard | "Tu resumen" | Home |
| Toggle | "Activar / Desactivar" | Switches |
| Scroll | Flecha visual "↓ ver más" | Listas largas |
| Swipe | Flecha visual "← →" | Gestos |
| URL | "Dirección de internet" | Links |
| Browser | "La app de internet de tu teléfono" | Help |

**Principios de diseño pre-digital:**
1. **Indicadores de progreso:** "Paso 2 de 4" siempre visible
2. **Botones únicos:** 1 acción principal por pantalla, nunca 2 CTAs
3. **Texto grande:** Mínimo 18px (no 16px estándar)
4. **Colores semáforo:** 🟢 bien, 🟡 atención, 🔴 error — universal
5. **Iconos + texto:** NUNCA solo icono, siempre texto debajo
6. **Sin gestos ocultos:** Todo alcanzable con taps simples
7. **Confirmación verbal:** Opción de leer instrucciones en voz alta (Web Speech API)
8. **Breadcrumbs simplificados:** "Estás en: Tu comuna > Reportes"

---

*Documento generado para Escuadrón 54 Psi-Delta. Resolución PsiD-1 + PsiD-2.*
