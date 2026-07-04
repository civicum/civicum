# 📋 CIVICUM — Inventario UI Época 1 (Auditable)

**Branch:** `ui-architecture-foundation`
**Fecha:** 2026-02-24
**Generado desde:** revisión estática de código fuente (22 archivos `.ts/.tsx`)
**Criterio:** observación directa del código, sin suposiciones. Los ítems no verificables se marcan `GAP:`.

---

## 1. Mapa de Rutas (Router)

Definidas en `webapp/src/main.tsx` usando `react-router-dom` v6 (`BrowserRouter` + `<Routes>`).

| # | Ruta | Vista | Módulo | Protegida | Componente |
|---|------|-------|--------|-----------|------------|
| 1 | `/onboarding` | OnboardingFlow | Mi CIVICUM | No (pública) | `OnboardingFlow.tsx` |
| 2 | `/` | Dashboard (Pulso Cívico) | Mi CIVICUM | Sí (`ProtectedRoute`) | `DashboardPage.tsx` |
| 3 | `/alza-la-voz` | Placeholder | Alza la Voz | Sí | Inline `<div>` stub |
| 4 | `/circulos` | Placeholder | Círculos de Acción | Sí | Inline `<div>` stub |
| 5 | `/perfil` | Perfil Cívico | Mi CIVICUM | Sí | `ProfilePage.tsx` |
| — | `*` (catch-all) | **GAP:** No existe ruta 404 | — | — | — |

**Lógica de protección:** `ProtectedRoute` lee `useOnboardingStore.hasCompletedOnboarding` de `localStorage`. Si `false` → redirect a `/onboarding`.

---

## 2. Inventario de Pantallas

### 2.1 OnboardingFlow (`/onboarding`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/onboarding/OnboardingFlow.tsx` (513 líneas) |
| **Objetivo** | Flujo inmersivo de bienvenida: 3 pantallas Splash persuasivas + 5 pasos funcionales de registro |
| **Layout** | Propio (sin `AppLayout`); fullscreen con fondo degradado dinámico |
| **Componentes UI** | `Button`, `Card`, `CardContent`, `Progress`, `CivicumLogo` |
| **Iconos Lucide** | `MapPin`, `ShieldCheck`, `Target`, `CheckCircle2`, `ChevronRight`, `Navigation2`, `LogIn`, `Moon`, `Sun`, `ArrowRight`, `Shield`, `Activity`, `ShieldAlert` |
| **Animaciones** | `framer-motion` (`AnimatePresence`, `motion.div`) con variantes slide + spring |
| **Estado** | `useOnboardingStore` (Zustand persist), `useUIStore` (tema) |
| **Estado local** | `splashStep` (0-3), `direction`, `selectedRegion`, `isDetectingLocation` |

**Sub-pantallas internas:**

| Fase | Step | Nombre | Objetivo (1 línea) |
|------|------|--------|---------------------|
| Splash | 0 | Logo + Eslogan | Presenta marca CIVICUM + "El Sistema Nervioso Cívico de Chile" |
| Splash | 1 | Anti-Pitch | Presenta propuesta de valor: 43+ fuentes, sin algoritmos adictivos |
| Splash | 2 | Privacidad | Honestidad Radical, 1 Persona = 1 Voto |
| Onboarding | 1 | Pacto Cívico (Honestidad Radical) | Solicita compromiso ético al usuario |
| Onboarding | 2 | Tu Territorio | Selección de Región + Comuna (GPS simulado o manual) |
| Onboarding | 3 | Identidad y Poder | Explica niveles de verificación (Observador → L4) |
| Onboarding | 4 | Elige tus Batallas | Multi-select de intereses cívicos (6 opciones hardcodeadas) |
| Onboarding | 5 | Diagnóstico Listo | Confirmación final + botón "Entrar a CIVICUM" |

**Estados detectados:**
- ✅ Estado normal (default)
- ✅ Estado de carga (spinner en detección GPS)
- ❌ Estado vacío: N/A para este flujo
- ❌ Estado de error: **GAP:** No hay manejo de error visible si la geolocalización falla realmente

**Problemas detectados:**
- Las comunas están hardcodeadas en un objeto local `REGIONES_COMUNAS` con solo 4 regiones y ~20 comunas (de las 346 reales)
- El botón "Detectar mi Comuna" usa `setTimeout` simulado, no `navigator.geolocation`
- No existe ruta "Atrás" desde Splash step 0 (primer splash) ni indicador de progreso en la fase Splash
- **GAP:** No se observa persistencia de borrador mid-onboarding en IndexedDB (solo persiste vía Zustand/localStorage al completar)

---

### 2.2 DashboardPage (`/`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/dashboard/DashboardPage.tsx` (182 líneas) |
| **Objetivo** | Vista principal post-onboarding: métricas cívicas del territorio + CTAs de acción |
| **Layout** | Dentro de `AppLayout` (header + Smart Dock) |
| **Componentes UI** | `Card`, `CardContent`, `Button`, `Badge` |
| **Iconos Lucide** | `AlertTriangle`, `TrendingUp`, `Users`, `ChevronRight`, `MapPin`, `Activity` |
| **Animaciones** | `framer-motion` (`motion.div`, stagger children, spring) |
| **Estado** | `useOnboardingStore` (lee `data.communeId`) |

**Secciones internas:**

| Sección | Contenido |
|---------|-----------|
| Premium Gradient Header | Título "Pulso Cívico", badges comuna + sistema estable |
| 3 Cards de métricas | Reportes Críticos (12), Círculos Locales (3), Casos Resueltos (145) |
| CTA "Acción Inmediata" | Card oscura → Link a `/alza-la-voz` |
| CTA "Organización Inteligente" | Card clara → Link a `/circulos` |

**Estados detectados:**
- ✅ Estado normal (datos hardcodeados de demo)
- ❌ Estado vacío: **GAP:** No hay estado empty-state si no hay datos
- ❌ Estado de error: **GAP:** No hay manejo de errores
- ❌ Estado de carga: **GAP:** No hay skeleton/loading

**Problemas detectados:**
- Los datos numéricos (12 reportes, 3 círculos, 145 casos) están hardcodeados, no provienen de API
- El header usa `bg-slate-50` fijo (no responde a dark mode)
- **GAP:** No se observa integración con dark mode del `useUIStore` en esta vista

---

### 2.3 ProfilePage (`/perfil`)

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/profile/ProfilePage.tsx` (203 líneas) |
| **Objetivo** | Perfil del ciudadano: resumen de actividad, verificación progresiva L0→L4, ajustes de tema |
| **Layout** | Dentro de `AppLayout` |
| **Componentes UI** | `Card`, `CardContent`, `Badge`, `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Avatar`, `AvatarFallback`, `AvatarImage` |
| **Iconos Lucide** | `ShieldAlert`, `Target`, `Trophy`, `GraduationCap`, `Moon`, `Search`, `KeyRound` |
| **Animaciones** | `framer-motion` (scale, x-translate en header) |
| **Estado** | `useUIStore` (tema) |

**Pestañas internas:**

| Tab | Nombre | Contenido |
|-----|--------|-----------|
| `overview` | Resumen | Cards: Impacto Histórico (0 reportes) + Academia Cívica (0%) |
| `security` | Estado de Verificación | Niveles escalonados: Observador (activo) → Correo → Gubernamental |
| `settings` | Ajustes App | Selector de tema (system/light/dark) |

**Estados detectados:**
- ✅ Estado normal
- ❌ Estado de carga: **GAP:** No hay loading al cambiar tabs
- ❌ Estado de error: **GAP:** No hay error handling

**Problemas detectados:**
- Los nombres "Ciudadano Nuevo" y "Tu Territorio Base" están hardcodeados (no leen del onboarding store)
- El botón "Verificar Email" no tiene `onClick` handler (es un `<button>` sin funcionalidad)
- El header del perfil no responde a dark mode (usa `bg-white` y `bg-slate-50` fijos)
- **GAP:** Los niveles L2 y superiores están parcialmente documentados (solo se muestran L0 y L1, luego un "Próximamente" genérico que agrupa L2-L4)

---

### 2.4 Alza la Voz (`/alza-la-voz`)

| Campo | Valor |
|-------|-------|
| **Elemento** | Inline stub: `<div className="p-6">Módulo Alza la Voz (En construcción)</div>` |
| **Objetivo** | Placeholder para el módulo de reportes ciudadanos |
| **Estado** | Sin implementar — solo texto "En construcción" |

---

### 2.5 Círculos de Acción (`/circulos`)

| Campo | Valor |
|-------|-------|
| **Elemento** | Inline stub: `<div className="p-6">Módulo Círculos de Acción (En construcción)</div>` |
| **Objetivo** | Placeholder para el módulo de organización vecinal |
| **Estado** | Sin implementar — solo texto "En construcción" |

---

## 3. Componentes Compartidos (Layout)

### 3.1 AppLayout (`src/components/layout/AppLayout.tsx`)

| Campo | Valor |
|-------|-------|
| **Líneas** | 114 |
| **Objetivo** | Layout principal post-onboarding con header y Smart Dock |
| **Estructura** | `<header>` sticky top + `<main>` con `<Outlet/>` + `<nav>` bottom dock |

**Elementos internos:**

| Zona | Visible en | Contenido |
|------|------------|-----------|
| Header (top bar) | Desktop + Mobile | `CivicumLogo` (brand) + NavLinks desktop (Inicio, Alza la Voz, Círculos) + Avatar perfil |
| Main content | Siempre | `<Outlet />` — renderiza la ruta activa. `max-w-7xl`, padding bottom `pb-24` en mobile |
| Smart Dock | Solo mobile (`md:hidden`) | 4 tabs: Inicio (`Home`), Reportar (`Lightbulb`), Círculos (`UsersRound`), Mi Perfil (`UserRound`) |

**Problemas detectados:**
- El header no responde a dark mode (fondo `bg-white` fijo, borde `border-b`)
- El Smart Dock tiene un tab "Reportar" (con ícono Lightbulb) pero el desktop nav dice "Alza la Voz" — inconsistencia menor de labels
- No existe un tab "Más" en el Smart Dock como indica la especificación UI/UX §9 (máx 5 tabs + "Más")
- No hay badge de notificación en ningún tab
- **GAP:** No se observa cambio atmosférico de `data-module` al navegar entre módulos (especificado en UI/UX §2.7)

---

## 4. Componentes UI Primitivos (`src/components/ui/`)

| Componente | Archivo | Tipo |
|------------|---------|------|
| `Avatar` + `AvatarFallback` + `AvatarImage` | `avatar.tsx` | shadcn/ui + Radix |
| `Badge` | `badge.tsx` | shadcn/ui |
| `Button` | `button.tsx` | shadcn/ui |
| `Card` + `CardContent` | `card.tsx` | shadcn/ui |
| `Form` (+ context) | `form.tsx` | shadcn/ui + react-hook-form |
| `Input` | `input.tsx` | shadcn/ui |
| `Label` | `label.tsx` | shadcn/ui |
| `Progress` | `progress.tsx` | shadcn/ui + Radix |
| `ScrollArea` | `scroll-area.tsx` | shadcn/ui + Radix |
| `Tabs` + `TabsList` + `TabsTrigger` + `TabsContent` | `tabs.tsx` | shadcn/ui + Radix |

**Componentes NO instalados aún (requeridos por Master Plan):**
- Dialog, Toast, Alert, Skeleton, Spinner
- Chip, Tag, Tooltip, Accordion
- Breadcrumbs, DataTable
- Select (shadcn), Checkbox, Radio, Switch, Textarea (shadcn)

---

## 5. Iconos y Marca

| Componente | Archivo | Uso |
|------------|---------|-----|
| `CivicumLogo` | `src/components/icons/CivicumLogo.tsx` | SVG inline (136 líneas), 4 variantes: `brand`, `white`, `dark`, `monochrome` |

**GAP:** Solo existe 1 ícono custom (logo). No hay otros assets de marca (favicon.ico, OG image, splash icons para PWA).

---

## 6. State Management (Zustand Stores)

| Store | Archivo | Propósito | Persistencia |
|-------|---------|-----------|-------------|
| `useOnboardingStore` | `store/useOnboardingStore.ts` | Paso actual, datos de onboarding, estado de completitud | `localStorage` (`civicum-onboarding-storage`) |
| `useUIStore` | `store/useUIStore.ts` | Tema (`light`/`dark`/`system`), visibilidad del Dock | `localStorage` (`civicum-ui-storage`) |
| `useFeatureFlagsStore` | `store/useFeatureFlagsStore.ts` | Feature flags A/B: `enableGamificationCards`, `enableCommunityLeaderboard`, `enableHarshModerationBlur` | `localStorage` (`civicum-feature-flags`) |

---

## 7. Mapa de Navegación Principal

```
[Primer acceso] ──► /onboarding
                        │
                        ├── Splash 0 (Logo)
                        ├── Splash 1 (Anti-Pitch)
                        ├── Splash 2 (Privacidad)
                        ├── Paso 1 (Pacto Cívico)
                        ├── Paso 2 (Tu Territorio)
                        ├── Paso 3 (Identidad)
                        ├── Paso 4 (Intereses)
                        └── Paso 5 (Listo) ──► completeOnboarding() ──► /
                                                                        │
                                               ┌────────────────────────┤
                                               ▼                        ▼
[AppLayout] ─────────────────────────── Header (top) + Smart Dock (bottom mobile)
     │
     ├── / (Dashboard "Pulso Cívico")
     │       ├── CTA "Alzar la Voz" ──► /alza-la-voz (stub)
     │       └── CTA "Explorar Mesas" ──► /circulos (stub)
     │
     ├── /alza-la-voz ──► Placeholder "En construcción"
     │
     ├── /circulos ──► Placeholder "En construcción"
     │
     └── /perfil (Perfil Cívico)
             ├── Tab "Resumen"
             ├── Tab "Estado de Verificación"
             └── Tab "Ajustes App" (selector de tema)
```

---

## 8. Dependencias UI Clave

| Dependencia | Versión | Uso |
|-------------|---------|-----|
| `react-router-dom` | `^7.13.0` | Routing SPA |
| `framer-motion` | `^12.34.3` | Animaciones |
| `lucide-react` | `^0.575.0` | Iconografía |
| `@radix-ui/*` | (múltiples, via shadcn) | Primitivas accesibles |
| `zustand` | `^5.0.11` | State management |
| `tailwindcss` | `^3.4.17` | CSS utility-first |
| `class-variance-authority` | `^0.7.1` | Variantes de componentes (shadcn) |

---

## 9. Resumen de GAPs Encontrados

| # | GAP | Ubicación | Impacto |
|---|-----|-----------|---------|
| G1 | No existe ruta 404 catch-all | `main.tsx` | Bajo (UX) |
| G2 | No hay manejo de error en geolocalización real | `OnboardingFlow.tsx` | Medio |
| G3 | Sin persistencia de borrador mid-onboarding en IndexedDB | `OnboardingFlow.tsx` | Bajo |
| G4 | Dashboard no responde a dark mode | `DashboardPage.tsx` | Medio |
| G5 | ProfilePage no lee datos del onboarding store (nombre, comuna) | `ProfilePage.tsx` | Medio |
| G6 | Botón "Verificar Email" sin handler | `ProfilePage.tsx` | Bajo (stub) |
| G7 | AppLayout header/dock no responde a dark mode | `AppLayout.tsx` | Medio |
| G8 | Smart Dock no tiene tab "Más" ni badges de notificación | `AppLayout.tsx` | Bajo |
| G9 | No hay cambio atmosférico `data-module` entre módulos | `AppLayout.tsx` | Bajo |
| G10 | Comunas hardcodeadas (20 de 346) | `OnboardingFlow.tsx` | Medio |
| G11 | Datos numéricos del dashboard hardcodeados | `DashboardPage.tsx` | Bajo (esperado en stub) |
| G12 | ~~Versiones de dependencias UI no verificadas~~ | `package.json` | **RESUELTO** — ver §8 |
| G13 | Sin assets PWA (favicon, OG, splash icons) más allá del SVG inline | `public/` | Medio |
