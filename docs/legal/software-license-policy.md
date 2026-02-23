# 📜 POLÍTICA DE LICENCIAS DE SOFTWARE Y AUDITORÍA AUTOMATIZADA

**Versión:** 1.0  
**Última actualización:** 18 Febrero 2026  
**Escuadrón:** 92 — Omega-2: Auditoría de Licencias  
**Soluciona:** Hallazgo OP-92.1 (Gap Legal Crítico)

---

## 🎯 Objetivo

Garantizar que ninguna dependencia de software (npm packages, Python libraries) introduzca obligaciones legales incompatibles con el modelo de negocio o la seguridad de CIVICUM. Específicamente, prevenir la "infección viral" de licencias Copyleft fuerte (AGPL, GPL).

---

## 🚫 Matriz de Compatibilidad

### ✅ Lista Blanca (Permitidas)
Estas licencias permiten uso comercial, modificación y sublicenciamiento sin obligar a liberar el código fuente propio.

*   **MIT**
*   **Apache-2.0**
*   **BSD-2-Clause** / **BSD-3-Clause**
*   **ISC**
*   **CC0-1.0** (Public Domain)
*   **Unlicense**
*   **Python Software Foundation License**

### ⚠️ Lista Gris (Revisión Legal Requerida)
Requieren validación manual por Rol 50 (Abogado PI) antes de uso.

*   **MPL-2.0** (Mozilla Public License) — *Permitido si se usa como librería linkeada.*
*   **LGPL-2.1 / LGPL-3.0** — *Permitido SOLO si se linkea dinámicamente.*
*   **EPL-1.0 / EPL-2.0** (Eclipse)

### ❌ Lista Negra (Prohibidas)
Incompatibles con código privado o generan riesgos legales inaceptables. **El build debe fallar si se detectan.**

*   **AGPL-3.0** (Affero GPL) — *Riesgo viral vía red.*
*   **GPL-2.0 / GPL-3.0** — *Riesgo viral fuerte.*
*   **SSPL** (Server Side Public License) — *No es Open Source (MongoDB).*
*   **Commons Clause**
*   **Facebook BSD+Patents** (versión antigua)
*   **WTFPL** (Riesgo de unprofessionalism)

---

## 🤖 Protocolo de Auditoría Automatizada

Se implementa `license-checker-rseidelsohn` (fork mantenido) en el pipeline de CI/CD.

### 1. Configuración del Checker

Comando de ejecución en CI:
```bash
npx license-checker-rseidelsohn \
  --production \
  --onlyAllow "MIT;Apache-2.0;BSD-2-Clause;BSD-3-Clause;ISC;CC0-1.0;Unlicense;Python-2.0" \
  --excludePrivatePackages \
  --summary
```

### 2. Integración en GitHub Actions

Archivo: `.github/workflows/license-audit.yml`

```yaml
name: License Audit (Squad 92)

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  check-licenses:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Audit Licenses
        run: |
          npx license-checker-rseidelsohn \
            --production \
            --failOn "GPL;AGPL;LGPL;MPL" \
            --exclude "MIT,Apache-2.0,BSD,ISC"
        continue-on-error: false
```

---

## 📋 Proceso de Excepción

Si un desarrollador necesita usar una librería de Lista Gris o Negra:

1.  **Ticket a Legal:** Abrir issue con template `[LEGAL_REVIEW]`.
2.  **Justificación:** ¿Por qué no sirve una alternativa MIT/Apache?
3.  **Revisión Rol 50:** Abogado evalúa riesgo de litigio.
4.  **Aprobación:** Solo si es estrictamente necesario y se aísla el componente (ej: microservicio separado).

---

## 📊 Métricas de Control

*   **Licencias desconocidas:** Deben ser 0.
*   **Licencias Copyleft:** Deben ser 0 (salvo excepción firmada).
*   **Frecuencia de escaneo:** En cada Pull Request.

---

*Documento generado para cerrar Hallazgo OP-92.1*
