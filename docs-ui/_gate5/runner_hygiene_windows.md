# Runner Hygiene — Windows (CIVICUM CI/Local)

**Gate:** 5+  
**Fecha:** 2026-03-04  
**Aplica a:** Antigravity agent + desarrolladores Windows

---

## 1. Wrappers de ejecución (orden de preferencia)

| Prioridad | Wrapper | Ejemplo | Cuándo usar |
|-----------|---------|---------|-------------|
| **1 (default)** | `cmd /c` | `cmd /c "pnpm -C webapp test:e2e"` | Siempre. Sin restricciones de ExecutionPolicy. |
| **2 (fallback)** | `powershell -NoProfile` | `powershell -NoProfile -Command "..."` | Solo si `cmd /c` falla por algún motivo. |
| **3 (último recurso)** | `powershell -ExecutionPolicy Bypass` | `powershell -ExecutionPolicy Bypass -Command "..."` | **Solo** con protocolo de autorización (ver §2). |

> **Regla:** Nunca usar `-ExecutionPolicy Bypass` por defecto.

---

## 2. Protocolo de autorización para Bypass

Si `cmd /c` y `powershell -NoProfile` fallan por ExecutionPolicy, el agente **debe**:

1. Pegar el **error exacto** recibido.
2. Proponer el comando completo con Bypass.
3. Incluir evaluación:
   - **Riesgo:** bajo/medio/alto
   - **Motivo:** (ej. "comando local, sin red")
   - **Mitigación:** (ej. "sin pipes/descargas, solo pnpm/git")
4. Confirmar que el comando **NO** incluye:
   - `iwr` / `iex` / `curl` / descargas remotas
   - Cambios de registro / sistema / Defender
   - Credenciales o tokens
5. Esperar aprobación explícita de Daniel.

### Formato obligatorio:

```
Necesito Bypass porque: <error exacto>.
Comando: <...>.
Riesgo: bajo. Motivo: comando local, sin red.
Mitigación: sin pipes/descargas, solo pnpm/git.
```

---

## 3. Comandos prohibidos (sin excepción)

- `Invoke-WebRequest`, `curl | iex`, `iwr | iex`
- Scripts remotos (`powershell -c (iwr ...).Content | iex`)
- `Set-ExecutionPolicy` a nivel máquina (solo sugerir `CurrentUser` con aprobación)
- Cambios de registro de Windows
- Exclusiones de Defender
- Cualquier comando con credenciales en texto plano

---

## 4. Checklist pre-commit

Antes de `git commit`:

- [ ] `git status` — verificar que no hay cambios fuera del scope
- [ ] `git diff --name-only` — confirmar archivos permitidos
- [ ] `git diff --stat` — revisar volumen de cambios
- [ ] Si hay cambios fuera de scope: `git stash push -m "WIP unrelated"` o `git restore <file>`
- [ ] 1 misión = 1 commit (o 2 si hay fases explícitas)

---

## 5. Checklist de tests (anti-fragilidad)

### Screenshots
- **Siempre** usar `testInfo.outputPath()` → se guardan en `test-results/`
- **Nunca** escribir screenshots dentro del repo (ej. `tests/visual/baseline/`)

### Onboarding bypass
- Constante: `ONBOARDING_STORAGE_KEY = 'civicum-onboarding-storage'`
- Comentario obligatorio: `FRAGILE INTERNAL FIXTURE`
- Si falla: el error debe incluir "posible bypass roto" con causas probables
- Helper reutilizable: `buildOnboardingBypass()` + `waitForReactMount()`

### Error sweep
- Handlers almacenados en variables con nombre (no arrow inline)
- Cleanup con `page.off(event, handler)` — nunca `removeAllListeners`

### Wait strategy
- Prohibido: `waitForLoadState('networkidle')`
- Preferido: `waitForReactMount()` (dual-wait `#root` + `childElementCount > 0`)

---

## 6. Fix permanente (sugerencia para Daniel)

Para eliminar la necesidad de Bypass en la máquina:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

> **⚠️ No ejecutar sin aprobación explícita.** Solo sugerir.
