# CIVICUM_TRASPASO_EXPANSION.md
## Documento de Traspaso — Sesión a Sesión
## Creado: 2026-08-09

---

## 1. EL PEDIDO EXACTO DE DANIEL (palabras textuales)

> "Que felicidad Hermes, haces un trabajo increíble. Ahora necesito que según todo lo que sabes sobre Civicum y todas y cada una de las posibilidades que podría llegar a ofrecer a todos sus usuarios en Chile según sus herramientas y módulos busques todos los datos oficiales que puedan enriquecer y aumentar mas aun las posibilidades de empoderar todo lo posible a cada uno de sus usuarios para hacer uso de sus derechos como ciudadanos al 100% pudiendo así a través de Civicum hacer realidad y de forma tangible cambiar su realidad y las de su entorno de la forma más fácil, fluida, entretenida y simple posible usando Civicum. Puedes proponer todos los cambios y las mejoras que se te ocurran manteniendo el alma de Civicum y su compromiso con los ciudadanos siempre. Estoy abierto a todas las propuestas para hacer de esta plataforma cívica única en el mundo."

## 2. QUÉ DEBE HACER EL NUEVO CHAT (paso a paso)

### Paso 1: Revisión completa del estado actual
- Leer `CIVICUM_RECOVERY.md` en la raíz del proyecto
- Leer `AGENTS.md` para reglas de seguridad
- Leer la skill `civicum` (skill_view name='civicum')
- Verificar estado de git: `git status --short` y `git log --oneline -5`
- Verificar datos raw: `du -sh webapp/src/data/raw/` y listar carpetas
- Verificar datos interim: `ls -la webapp/src/data/interim/`
- Verificar scripts: `ls -la scripts/`
- Verificar skills: `skills_list` category='software-development'

### Paso 2: Auditoría del Alma de Civicum
- Leer los 17 documentos en `docs/knowledge-base/`
- Extraer: misión, visión, valores, principios rectores, 47 decisiones (F01-F47)
- Identificar los 6 módulos MVP + Círculos de Acción (expansión)
- Entender el Design System Terracota
- Documentar la metáfora rectora: "Nervio, no megáfono"

### Paso 3: Análisis de datos ya recolectados
- World Bank API: 19 indicadores (1960-2024) en `raw/worldbank/`
- DIPRES: 2,517 CSV (2.2 GB) en `raw/dipres/`
  - Normalizado: 908 MB CSV unificado (114 periodos, 3.7M filas)
- SISS: 47 Excel (1.9 MB) en `raw/siss/`
- Banco Central: 8 series JSON en `raw/bcentral/`
  - IPC desde 1928, tipo de cambio desde 2000
- 10 categorías CKAN extra: ~500 archivos (~800 MB)
  - poblacion, pobreza, censo, empleo, remuneraciones, agua potable, IPC, vivienda, seguridad, elecciones

### Paso 4: Diseño de la propuesta de expansión integral
Para CADA uno de los 6 módulos MVP + Círculos de Acción, el nuevo chat debe:

a) **Identificar qué datos(oficiales adicionales necesita** que NO tenemos todavía
b) **Proponer nuevas fuentes de datos** que enriquezcan el módulo
c) **Diseñar cómo los datos se integran en la interfaz** (visualizaciones, widgets, alertas)
d) **Proponer nuevas herramientas o sub-módulos** que surgen de tener estos datos
e) **Mantener el alma de Civicum**: honestidad radical, neutralidad política, dignidad offline, anti-élite, simplicidad

### Paso 5: Catálogo completo de fuentes adicionales a recolectar
Identificar y listar con URLs concretas:
- INE: datos de población, demografía, empleo (via SIMEL o datos.gob.cl)
- CASEN/MIDES: pobreza, desigualdad, salud
- MINEDUC: matrícula, cobertura educacional
- MINSAL: cobertura de salud, lista de espera
- SERVEL: resultados electorales, participación
- SUBDERE: finanzas municipales, inversión regional
- SII: recaudación tributaria
- CONASET: seguridad vial
- MMA: medio ambiente, emisiones
- Cámara de Diputados: proyectos de ley, votaciones
- Senado: boletines, sesiones
- Contraloría: auditorías, observaciones
- Transparencia: solicitudes de información, respuestas
- Municipios: permisos, trámites, presupuestos locales
- Banco Central: series restantes (PIB, IMACEC, empleo, finanzas públicas — buscar códigos en el Buscador de Series de si3.bcentral.cl)

### Paso 6: Plan de integración técnica
- Cómo los datos raw → interim → final para frontend
- Qué visualizaciones crear en cada módulo
- Qué alertas/notificaciones automáticas implementar
- Cómo garantizar Offline Dignity (F-07) con datos locales
- Cómo mantener Zero-cost (F-43)

### Paso 7: Propuestas de nuevos módulos/herramientas
Basado en los datos disponibles, proponer:
- Nuevos módulos que no existen pero que los datos hacen posibles
- Herramientas de empoderamiento ciudadano inéditas
- Integraciones entre módulos (ej: Cuentas Claras + Alza la Voz)
- Gamificación para incentivar participación (Academia Cívica)
- IA Civia mejorada con datos reales

### Paso 8: Entregar todo en un documento
- Crear `CIVICUM_EXPANSION_PLAN.md` en la raíz del proyecto
- Debe ser aprobado por Daniel antes de cualquier implementación
- Mantener formato: misión → estado actual → propuesta → plan → criterios

---

## 3. ESTADO ACTUAL VALIDADO (no repetir lo ya hecho)

### ✅ Completado y validado al 100%

| Componente | Estado | Ubicación |
|-----------|--------|-----------|
| Skill CKAN Collector | ✅ | hermes/skills/software-development/civicum-ckan-collector/ |
| Skill Obsessive Verification | ✅ | hermes/skills/software-development/civicum-obsessive-verification/ |
| Skill INE Automation | ✅ | hermes/skills/software-development/civicum-ine-automation/ |
| World Bank (19 indicadores) | ✅ | webapp/src/data/raw/worldbank/ |
| DIPRES (2,517 CSV, 2.2GB) | ✅ | webapp/src/data/raw/dipres/ |
| SISS (47 Excel) | ✅ | webapp/src/data/raw/siss/ |
| Banco Central (8 series) | ✅ | webapp/src/data/raw/bcentral/ |
| CKAN extra (10 categorías) | ✅ | webapp/src/data/raw/poblacion/, pobreza/, etc. |
| Normalización World Bank | ✅ | webapp/src/data/interim/worldbank_normalized.csv |
| Normalización DIPRES | ✅ | webapp/src/data/interim/dipres_ejecucion_unificado.csv (908MB) |
| Normalización SISS | ✅ | webapp/src/data/interim/siss_catalog.json |
| Catálogos metadata | ✅ | webapp/src/data/raw/_metadata/ |
| Scripts (14 total) | ✅ | scripts/ |
| CIVICUM_RECOVERY.md | ✅ | Raíz del proyecto |

### ⚠️ Pendiente (NO repetir lo ya intentado)

| Pendiente | Detalle |
|-----------|---------|
| Banco Central series adicionales | Buscar códigos PIB, IMACEC, empleo, finanzas públicas en el Buscador de Series (si3.bcentral.cl/siete → búsqueda) |
| INE.Stat datos Medio Ambiente | Script creado pero árbol temático no renderiza en headless |
| MINEDUC portal alternativo | datos.gob.cl no tiene recursos descargables de MINEDUC |
| OECD API (SDMX-JSON) | Probablemente funcional, requiere investigación de formato |

---

## 4. REGLAS CRÍTICAS (de AGENTS.md y preferencias de Daniel)

1. **Audit-first**: SIEMPRE revisar antes de actuar
2. **Sin implementar sin autorización explícita de Daniel**
3. **Validación 100%**: lint + build + tests antes de avanzar
4. **Español claro**, paso a paso, como explicando a un principiante
5. **No git reset/clean/checkout/switch/merge/rebase sin aprobación**
6. **No tocar stashes** (3 preservados)
7. **No ejecutar db:migrate/seed/reset sin autorización**
8. **Priorizar**: calidad > robustez > simplicidad > mantenibilidad > seguridad
9. **Mantener el alma de Civicum**: Nervio no megáfono, honestidad radical, neutralidad política verificable, dignidad offline, anti-élite
10. **Trazabilidad total**: cada dato en pantalla → archivo RAW inmutable con hash

---

## 5. CRITERIOS DE CALIDAD PARA LA PROPUESTA

La propuesta de expansión debe cumplir:

- [ ] Cubre los 6 módulos MVP + Círculos de Acción
- [ ] Para cada módulo: datos actuales + datos adicionales necesarios + visualizaciones + nuevas herramientas
- [ ] Propone nuevos módulos/herramientas basados en datos disponibles
- [ ] Mantiene el alma de Civicum (honestidad, neutralidad, dignidad, anti-élite)
- [ ] Garantiza Offline Dignity (F-07) con datos locales
- [ ] Mantiene Zero-cost (F-43)
- [ ] Incluye URLs concretas de fuentes de datos
- [ ] Plan técnico de integración (raw → interim → final → frontend)
- [ ] Priorizado por impacto ciudadano (qué empodera más)
- [ ] Aprobado por Daniel antes de implementar

---

## 6. TOKENS Y CREDENCIALES (usar solo en sesión, NO persistir)

- Banco Central API token: [DANIEL DEBE PROPORCIONARLO EN EL NUEVO CHAT]
- El token anterior funcionó pero expira entre sesiones
- Daniel tiene usuario: daniel.aguirre.personal@gmail.com
- El token se obtiene en si3.bcentral.cl/siete → API BDE → Acceso a la API

---

## 7. INSTRUCCIÓN PARA EL NUEVO CHAT

Cuando abras el nuevo chat, copia y pega esto:

---

Hermes, necesito que continues el trabajo de Civicum. Lee el documento `CIVICUM_TRASPASO_EXPANSION.md` en la raíz del proyecto (`C:\Users\daniel.aguirre\Proyectos\civicum\`) y ejecuta los 8 pasos descritos en la sección 2.

El resumen de lo que necesito: según todo lo que sabes sobre Civicum, busca todos los datos oficiales que puedan enriquecer y empoderar a cada usuario de Chile al 100%. Propón todos los cambios y mejoras que se te ocurran manteniendo el alma de Civicum. Estoy abierto a todas las propuestas para hacer de esta plataforma cívica única en el mundo.

Antes de empezar, lee también:
- `CIVICUM_RECOVERY.md` para el estado actual
- `AGENTS.md` para las reglas de seguridad
- La skill `civicum` con skill_view(name='civicum')

Empieza con el Paso 1 (revisión completa) y avisa cuando termines cada paso.

---

## 8. SCRIPTS Y COMANDOS DE VERIFICACIÓN RÁPIDA

```bash
# Estado del proyecto
cd "C:\Users\daniel.aguirre\Proyectos\civicum"
git status --short
git log --oneline -5

# Datos recolectados
du -sh webapp/src/data/raw/
ls -1 webapp/src/data/raw/ | wc -l
for d in webapp/src/data/raw/*/; do echo "$(basename $d): $(ls -1 $d | wc -l) archivos"; done

# Datos normalizados
ls -la webapp/src/data/interim/

# Scripts
ls -la scripts/*.py

# Skills
skills_list category=software-development

# Verificar código
pnpm -C webapp lint
pnpm -C webapp build
```

---

Fin del documento de traspaso.
