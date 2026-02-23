# 🧪 ESPECIFICACIÓN DE TESTS E2E — FAT-FINGER

**Versión:** 1.0  
**Fecha:** 15 Febrero 2026  
**Origen:** Escuadrón 60 Lambda-Cuatro — Hallazgo Λ4-8  
**Archivo de implementación:** `tests/e2e/fat-finger.spec.ts`  
**Framework:** Playwright

---

## Principios

1. Todos los tests deben ejecutarse en viewport **360×640px** (XS, el breakpoint más restrictivo)
2. Usar `{ hasTouch: true }` para simular dispositivo táctil
3. Simular CPU throttling 4x para tests en Tier LOW
4. Cada test es autónomo y no depende del orden de ejecución

---

## FF-01: Doble-Tap en Submit

**Qué valida:** Un doble toque rápido en "Enviar" solo genera 1 request al servidor.

**Steps:**
1. Navegar al formulario de reporte de "Alza la Voz"
2. Rellenar campos obligatorios (categoría, ubicación, descripción)
3. Interceptar requests POST a `/api/v1/reports`
4. Hacer doble click rápido (<100ms entre clicks) en botón "Enviar"
5. Esperar 2 segundos

**Expectativas:**
- `requestCount === 1` (solo 1 request POST capturado)
- El botón muestra estado `loading` (spinner) después del primer toque
- El botón tiene `disabled === true` después del primer toque

**Criterio de aceptación:** 100% en 10 ejecuciones consecutivas.

---

## FF-02: Spacing de Botones Opuestos

**Qué valida:** Pares de botones con acciones opuestas tienen gap ≥ 16px y se apilan verticalmente en XS.

**Steps:**
1. Navegar a una pantalla con dialog de confirmación destructiva (ej: eliminar reporte)
2. Activar el dialog
3. Medir la distancia entre botones "Cancelar" y "Eliminar"
4. Verificar layout direction

**Expectativas:**
- `gap >= 16px` entre ambos botones
- `flex-direction === 'column'` en viewport 360px
- El botón "Cancelar" aparece ANTES (arriba) del destructivo
- El botón destructivo tiene `background-color` en rango Terracota 700

**Criterio de aceptación:** Aplica a TODOS los dialogs de confirmación de la app.

---

## FF-03: Touch Targets Mínimos

**Qué valida:** Todos los elementos interactivos cumplen WCAG 2.2 §2.5.8 (≥ 44×44px).

**Steps:**
1. Para cada página principal (Dashboard, Reportes, Voto, Academia, Cuentas Claras, Civia):
   a. Seleccionar todos los `button`, `a[href]`, `input`, `select`, `[role="button"]`
   b. Medir `boundingBox` de cada elemento
2. Registrar cualquier violación

**Expectativas:**
- `width >= 44` AND `height >= 44` para TODOS los elementos interactivos
- Preferible: `width >= 48` AND `height >= 48` para botones primarios

**Criterio de aceptación:** 0 violaciones en las 6 páginas principales.

---

## FF-04: Snackbar con Undo en Reporte

**Qué valida:** El patrón de "grace period + deshacer" funciona correctamente al enviar reportes.

**Steps:**
1. Crear y enviar un reporte completo
2. Verificar que aparece snackbar con mensaje "Reporte enviado" y botón "DESHACER"
3. Verificar que la barra de progreso de 5s es visible
4. Hacer click en "DESHACER" antes de que expire
5. Verificar que el reporte NO fue enviado al servidor
6. Verificar que el borrador sigue disponible en drafts

**Expectativas:**
- Snackbar aparece en < 500ms después del toque en "Enviar"
- Botón "DESHACER" tiene touch target ≥ 48px
- Click en "DESHACER" cancela el request pendiente
- El borrador permanece intacto en IndexedDB
- No hay request POST completado en Network tab

**Criterio de aceptación:** Funcional en viewport 360px con touch simulation.

---

## FF-05: Confirmación Antes de Acción Destructiva  

**Qué valida:** Toda acción destructiva requiere confirmación explícita.

**Steps:**
1. Para cada acción destructiva identificada:
   - Eliminar reporte
   - Eliminar borrador
   - Limpiar caché
   - Abandonar mesa
2. Intentar ejecutar la acción
3. Verificar que aparece dialog de confirmación ANTES de ejecutar

**Expectativas:**
- Dialog de confirmación visible con focus trap
- El dialog se puede cerrar con ESC o botón "Cancelar"
- La acción destructiva NO se ejecuta si el usuario cancela
- La acción SÍ se ejecuta si el usuario confirma
- El botón destructivo y el cancel tienen estilos diferenciados (Destructive vs Ghost)

**Criterio de aceptación:** 100% de acciones destructivas protegidas.

---

## FF-06: Recuperación de Error de Input

**Qué valida:** Errores de validación son claros, no borran el input, y desaparecen al corregir.

**Steps:**
1. Navegar al formulario de reporte
2. Ingresar una descripción de 5 caracteres (mínimo requerido: 20)
3. Intentar enviar
4. Verificar que aparece error inline (no modal)
5. Corregir a 25 caracteres
6. Verificar que el error desaparece

**Expectativas:**
- Error aparece debajo del campo (no en modal aparte)
- Borde del campo cambia a Terracota
- Ícono `AlertCircle` visible
- Texto de error es no-culpabilizante (contiene "Cuéntanos", no "Error")
- El input original NO se borra
- Error desaparece en < 200ms después de corregir
- Focus permanece en el campo
- El usuario puede seguir editando sin obstáculos

**Criterio de aceptación:** Todos los campos con validación muestran error inline.

---

## FF-07: Preservación de Datos en Navegación Accidental

**Qué valida:** Los datos del formulario se preservan si el usuario navega atrás accidentalmente.

**Steps:**
1. Navegar al formulario de reporte
2. Rellenar parcialmente (categoría + descripción de 50 chars)
3. Simular `history.back()` (navegación atrás)
4. Navegar de vuelta al formulario

**Expectativas:**
- Los datos ingresados persisten (via auto-guardado en IndexedDB)
- O: se muestra dialog "¿Salir sin guardar? Tus cambios se perderán" (beforeunload)
- Si hay auto-guardado: toast "Borrador recuperado" al volver
- La foto adjunta (si hay) también se preserva

**Criterio de aceptación:** En 10 repeticiones, 0 pérdidas de datos.

---

## Ejecución

```bash
# Ejecutar todos los tests fat-finger
npx playwright test fat-finger.spec.ts --project=mobile-chrome

# Con CPU throttling para simular Tier LOW
npx playwright test fat-finger.spec.ts --project=mobile-chrome --slow-mo=200

# Solo un test específico
npx playwright test fat-finger.spec.ts -g "FF-01"
```

---

*Especificación generada por Escuadrón 60 Lambda-Cuatro — 15 Febrero 2026*
