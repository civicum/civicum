# ✅ PLAN MAESTRO DE QA INTEGRAL

**Versión:** 1.0  
**Última actualización:** 15 Febrero 2026  
**Soluciona:** Observación Upsilon-1

---

## 🎯 Objetivo

Consolidar todas las categorías de testing en un plan maestro con ownership, herramientas, criterios de aceptación y schedule.

---

## 📋 Categorías de Testing

### 1. Unit Testing (Vitest)
| Aspecto | Valor |
|---------|-------|
| Framework | Vitest |
| Coverage mínimo | 60% (F-45) |
| Scope | Funciones puras, hooks, utilidades |
| Owner | Desarrolladores |
| Frecuencia | Cada PR |

### 2. E2E Testing (Playwright)
| Aspecto | Valor |
|---------|-------|
| Framework | Playwright |
| Criterio | 100% passing en críticos (F-45) |
| Scope | Flujos usuario completos |
| Owner | Rol 19 (QA Auto) |
| Frecuencia | Cada PR + nightly |

### 3. Accessibility Testing (jest-axe)
| Aspecto | Valor |
|---------|-------|
| Framework | jest-axe + Lighthouse |
| Criterio | 0 errores WCAG AA en componentes core |
| Scope | Todos los componentes shadow/radix |
| Owner | Rol 11 (Accesibilidad) |
| Frecuencia | Cada PR |

### 4. Fat-Finger Testing (Playwright)
| Aspecto | Valor |
|---------|-------|
| Spec | `fat-finger-e2e-spec.md` (7 tests FF-01 a FF-07) |
| Criterio | Touch targets ≥44px, gap ≥16px, undo funcional |
| Owner | Rol 18 (QA Funcional) |
| Frecuencia | Cada release |

### 5. Performance Testing
| Aspecto | Valor |
|---------|-------|
| Herramientas | Lighthouse CI + WebPageTest |
| Criterio | LCP <2.5s, FID <100ms, CLS <0.1 |
| Targets especiales | Low-end device (2GB RAM, 3G) |
| Owner | Rol 17 (Performance) |
| Frecuencia | Cada release + mensual |

### 6. Visual Regression
| Aspecto | Valor |
|---------|-------|
| Herramientas | Percy/Chromatic (opcional) |
| Criterio | Sin regresión vs baseline |
| Owner | Rol 10 (UI Visual) |
| Frecuencia | Cada release |

### 7. Security Testing
| Aspecto | Valor |
|---------|-------|
| Herramientas | GitHub Dependabot + OWASP ZAP |
| Criterio | 0 vulnerabilidades críticas/altas |
| Red team | `ai-redteam.md` + `social-redteam-playbook.md` |
| Owner | Rol 28 (Red Team) |
| Frecuencia | Continuo (Dependabot) + Trimestral (red team) |

### 8. Bias Testing (IA)
| Aspecto | Valor |
|---------|-------|
| Spec | `bias-testing.md` (E3-1, E3-2) |
| Criterio | <5% variación entre segmentos |
| Owner | Rol 46 (AI Safety Lead) |
| Frecuencia | Mensual |

### 9. License Audit (Software)
| Aspecto | Valor |
|---------|-------|
| Spec | `docs/legal/software-license-policy.md` (OP-92.1) |
| Herramienta | `license-checker` (npm) |
| Criterio | 0 licencias en Blocklist (AGPL, GPL) |
| Owner | Rol 52 (Compliance) |
| Frecuencia | Cada PR (Bloqueante) |

---

## 📊 Gate de Release

```
                    ┌─────────────────────────────────────────┐
                    │          RELEASE CANDIDATE               │
                    └─────────────┬───────────────────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              ▼                   ▼                   ▼
        ┌──────────┐      ┌──────────┐      ┌──────────┐
        │  Unit    │      │   E2E    │      │   a11y   │
        │ ≥60% cov │      │ 100% ✅  │      │  0 err   │
        └────┬─────┘      └────┬─────┘      └────┬─────┘
             │                 │                  │
             │            ┌────┴─────┐            │
             │            │ License  │            │
             │            │  Audit   │            │
             │            └────┬─────┘            │
             │                 │                  │
             └────────┬────────┘──────────────────┘
                      ▼
              ┌──────────────┐
              │  Staging     │
              │  Deploy      │
              └──────┬───────┘
                     ▼
        ┌────────────┼────────────┐
        ▼            ▼            ▼
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │  Manual  │ │  Perf    │ │  Smoke   │
  │  QA      │ │  Check   │ │  Test    │
  └────┬─────┘ └────┬─────┘ └────┬─────┘
       └──────┬──────┘────────────┘
              ▼
       ┌──────────────┐
       │  Production  │
       │  Deploy      │
       └──────────────┘
```

---

## 📅 Schedule

| Test | Pre-PR | Pre-Release | Mensual | Trimestral |
|------|--------|------------|---------|------------|
| Unit | ✅ | ✅ | — | — |
| E2E | ✅ | ✅ | — | — |
| a11y | ✅ | ✅ | — | — |
| Fat-Finger | — | ✅ | — | — |
| Performance | — | ✅ | ✅ | — |
| Visual Regression | — | ✅ | — | — |
| Security | ✅ (auto) | ✅ | — | ✅ (red team) |
| Bias | — | — | ✅ | — |
| License | ✅ (Blocker) | ✅ | — | — |
| Skeptic User | — | — | — | ✅ |

---

*Documento generado para cerrar Observación Upsilon-1*
