# AGENTS.md

Guía operativa para trabajar en Civicum con seguridad, trazabilidad y cambios mínimos.

## Reglas Basadas En Evidencia Del Repo

### 1. Propósito Del Proyecto

Civicum es el proyecto contenido en este repositorio. Por las rutas y artefactos confirmados, incluye una `webapp` y una base documental de arquitectura/auditoría UI con ADRs, matriz de trazabilidad, backlog de no conformidades, evidencia Playwright y snapshots visuales.

No se deben inventar funcionalidades de producto no verificadas en el código o la documentación vigente.

Pendiente: confirmar una descripción funcional de negocio desde documentación vigente del repo. Hasta entonces, cualquier descripción más específica debe marcarse como inferencia.

### 2. Estado Actual Conocido

Rama actual: `ui-architecture-foundation`.

Existe un dirty tree con cambios modificados y archivos no trackeados.

`UI-NAV-001` está cerrado en contenido por `ADR-0009 ACCEPTED`, matriz OK y código alineado, pero mantiene cierre formal pendiente mientras exista una referencia como “Hash pendiente”.

Existen stashes que deben preservarse y no deben aplicarse, borrarse ni reordenarse sin aprobación explícita.

### 3. Fuentes De Verdad Del Repo

Las fuentes de verdad operativas son:

- `docs-ui/*`
- `adr-ui/*`
- `docs-ui/traceability_matrix.md`
- `docs-ui/non_conformities_backlog.md`
- código actual del repositorio
- evidencia de pruebas y snapshots versionados, cuando estén limpios y revisados

`bitacora_antigravity.txt` puede usarse solo como contexto histórico. No es norma vigente por sí misma y no debe sobreescribir ADRs, matriz, backlog ni código actual sin una síntesis revisada.

### 4. Reglas Absolutas De Seguridad

No ejecutar scripts PowerShell no auditados.

No ejecutar `scripts/close_ui_nav_001.ps1`.

No aplicar, borrar ni crear stashes sin aprobación explícita.

No usar `git reset`, `git clean`, `git checkout`, `git switch`, `git merge` ni `git rebase` sin aprobación explícita.

No versionar `bitacora_antigravity.txt` sin síntesis previa.

No declarar cierres formales con referencias como “Hash pendiente”.

No mostrar secretos completos si se detectan. Si aparece material sensible, reportar solo el tipo de hallazgo, ubicación general y acción recomendada.

Editar, crear, borrar o mover archivos requiere aprobación explícita cuando el árbol esté sucio o cuando la acción afecte archivos sensibles como ADRs, matriz, backlog, evidencia, snapshots, scripts, bitácora histórica o configuración crítica.

### 5. UI, ADRs Y Trazabilidad

`UI-NAV-001` está cerrado en contenido por `ADR-0009 ACCEPTED`, matriz OK y código alineado, pero tiene cierre formal pendiente mientras conserve “Hash pendiente” o equivalente.

Todo cambio UI debe cruzarse con ADRs, matriz de trazabilidad, backlog de no conformidades y evidencia verificable.

No mover reglas de `PARTIAL` a `OK` sin evidencia verificable.

No cerrar gates solo por narración. Todo cierre debe tener respaldo documental, evidencia limpia y estado coherente en matriz/backlog.

### 6. Evidencia Y Tests

El output de Playwright debe estar limpio, legible y preferiblemente en UTF-8/plain text.

No versionar logs con ruido ANSI, mojibake o bytes nulos sin limpieza aprobada.

Archivo de evidencia pendiente conocido: `docs-ui/_reentry/playwright_raw_output.txt`.

PNGs y snapshots deben revisarse visualmente antes de versionarse.

Snapshot visual pendiente conocido: `webapp/tests/visual/ui-kit/UI-STP-002_loading_mobile.png`.

Comandos de verificación conocidos, pendientes de confirmar según el contexto de cada cambio:

- `pnpm -C webapp lint`
- `pnpm -C webapp build`
- `pnpm -C webapp test:e2e`

No ejecutar migraciones, seeds ni reset de base de datos sin autorización explícita.

### 7. Bitácora Y Contexto Histórico

`bitacora_antigravity.txt` es fuente histórica, no normativa vigente.

No leer `bitacora_antigravity.txt` completa salvo autorización explícita.

Procesarla por ventanas acotadas cuando sea necesario.

Extraer y separar:

- decisiones vigentes
- decisiones descartadas
- pendientes
- contradicciones
- evidencia histórica útil

No usar la bitácora para sobreescribir ADRs, matriz, backlog o código vigente sin revisión humana.

### 8. Stashes

Preservar los stashes existentes.

`stash@{0}`: preservar; contiene contexto/evidencia Gate 5.9a.

`stash@{1}`: preservar; contiene PNGs antiguos dudosos.

`stash@{2}`: preservar; WIP viejo Dashboard/Profile con borrados peligrosos; no aplicar.

Cualquier acción sobre stashes requiere aprobación explícita.

## Inferencias Operativas

### 9. Workflow Previo A Cambios

Antes de cualquier modificación, confirmar:

- `git status --short`
- rama actual
- stashes existentes

Si hay dirty tree, pedir autorización antes de tocar archivos.

Separar auditoría, normalización de evidencia, documentación y código en pasos pequeños.

No mezclar cambios documentales, visuales, scripts y código funcional en un único paso salvo autorización explícita.

### 10. Comandos Permitidos En Modo Solo Lectura

Ejemplos de comandos permitidos en modo solo lectura:

- `git status --short`
- `git branch --show-current`
- `git stash list`
- `git diff --stat`
- `git diff --name-status`

Estos comandos no modifican archivos ni historial y sirven para reentrada segura.

### 11. Comandos Prohibidos Sin Aprobación Explícita

No ejecutar sin aprobación explícita:

- `git add`
- `git commit`
- `git stash push`
- `git stash apply`
- `git stash pop`
- `git reset`
- `git clean`
- `git checkout`
- `git switch`
- `git merge`
- `git rebase`
- `scripts/close_ui_nav_001.ps1`

### 12. Definición De Tarea Terminada

Una tarea se considera terminada solo si cumple lo que corresponda:

- cambios mínimos y trazables
- evidencia actualizada y limpia
- matriz/backlog coherentes
- tests/lint/build ejecutados si corresponde
- diff revisable
- scripts peligrosos no ejecutados
- sin cierres falsos
- sin referencias pendientes presentadas como cierre formal

### 13. Estilo De Trabajo Esperado

Primero: plan.

Luego: diff propuesto o descripción precisa de los cambios.

Luego: pedir aprobación cuando el árbol esté sucio o el cambio toque evidencia, documentación normativa, stashes, scripts o git history.

Luego: aplicar cambios mínimos.

Luego: verificar con comandos apropiados.

Luego: resumir qué cambió, riesgos restantes y próximos pasos.

### 14. No Hacer Sin Aprobación Explícita

No editar, crear, borrar ni mover archivos cuando el árbol esté sucio o cuando la acción afecte archivos sensibles.

No ejecutar scripts PowerShell no auditados.

No ejecutar `scripts/close_ui_nav_001.ps1`.

No ejecutar migraciones, seeds ni reset de base de datos.

No hacer `git add`.

No hacer `git commit`.

No hacer `git stash push`.

No hacer `git stash apply`.

No hacer `git stash pop`.

No hacer `git reset`.

No hacer `git clean`.

No hacer `git checkout`.

No hacer `git switch`.

No hacer `git merge`.

No hacer `git rebase`.

No modificar evidencia Playwright, PNGs, backlog, matriz, ADRs o bitácora histórica sin aprobación explícita.

No versionar `bitacora_antigravity.txt` sin síntesis previa.

No declarar cierre formal si queda “Hash pendiente” o cualquier equivalente.
