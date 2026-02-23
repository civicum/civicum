# 🔤 ESTRATEGIA DE FONT SUBSETTING

**Versión:** 1.0  
**Última actualización:** 6 Febrero 2026  
**Soluciona:** Observación C4-1

---

## 🎯 Objetivo

Reducir payload de fuentes de ~150KB a ~30KB para mejorar FCP en conexiones lentas.

---

## 📋 Fuentes Utilizadas

| Fuente | Peso | Uso |
|--------|------|-----|
| Inter | Regular 400 | Body text |
| Inter | Medium 500 | Subtítulos |
| Inter | Bold 700 | Títulos |

---

## ✂️ Estrategia de Subsetting

### Caracteres Incluidos

```
# Latin básico + extendido (español)
U+0000-00FF  # Basic Latin
U+0100-017F  # Latin Extended-A
U+0180-024F  # Latin Extended-B
U+1E00-1EFF  # Latin Extended Additional

# Específicos español
á é í ó ú ü ñ Á É Í Ó Ú Ü Ñ ¿ ¡

# Símbolos comunes
€ $ % © ® ™ → ← ↑ ↓ • · … 
```

### Caracteres EXCLUIDOS

```
# Cirílico, Griego, Árabe, etc.
# Símbolos matemáticos avanzados
# Caracteres CJK
```

---

## 🔧 Implementación

### Comando de Subsetting

```bash
# Usando pyftsubset (fonttools)
pyftsubset Inter-Regular.ttf \
  --unicodes="U+0000-00FF,U+0100-017F,U+0180-024F,U+1E00-1EFF" \
  --layout-features="kern,liga" \
  --flavor="woff2" \
  --output-file="Inter-Regular-subset.woff2"
```

### CSS Optimizado

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular-subset.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0100-017F, U+0180-024F, U+1E00-1EFF;
}
```

---

## 📊 Resultados Esperados

| Métrica | Antes | Después |
|---------|-------|---------|
| Tamaño Inter Regular | 95KB | 12KB |
| Tamaño Inter Medium | 96KB | 12KB |
| Tamaño Inter Bold | 97KB | 12KB |
| **Total** | **288KB** | **~36KB** |

---

## ✅ Checklist

- [ ] Generar subsets para los 3 pesos
- [ ] Solo formato WOFF2 (soporte >95%)
- [ ] font-display: swap
- [ ] Preload de fuente principal
- [ ] Validar en BrowserStack

---

*Documento generado para cerrar Observación C4-1*
