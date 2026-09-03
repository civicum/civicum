#!/usr/bin/env python3
"""
SNID — Conector INE.Stat via browser automation (Playwright)
Navega a stat.ine.cl, explora el árbol temático y descarga CSV de series estadísticas.

INE.Stat está basado en tecnología OECD.Stat/PC-Axis.
La plataforma permite exportar datos en formato CSV, XLS y SDMX-ML.

Estrategia:
1. Navegar a cada nodo del árbol temático
2. Para cada serie disponible, hacer clic en "Exportar" → "CSV"
3. Guardar archivos en webapp/src/data/raw/ine/
"""
import os
import json
import time
import hashlib
import subprocess
import sys

# Directorios
RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/ine")
META_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(META_DIR, exist_ok=True)

# INE.Stat URL base
BASE_URL = "https://stat.ine.cl"
HOME_URL = f"{BASE_URL}/?lang=es"

# Categorías principales en INE.Stat (según exploración del portal)
CATEGORIAS_INE = [
    "Estadísticas del Mercado de Trabajo",
    "Estadísticas de Medio Ambiente",
]

# === 1. Verificar si Playwright está instalado ===
print("=== SNID — Conector INE.Stat ===")
print(f"Directorio destino: {RAW_DIR}")
print()

def check_playwright():
    """Verifica si Playwright está disponible."""
    try:
        result = subprocess.run(
            [sys.executable, "-c", "from playwright.sync_api import sync_playwright; print('OK')"],
            capture_output=True, text=True, timeout=10
        )
        return result.returncode == 0 and "OK" in result.stdout
    except:
        return False

print("1. Verificando Playwright...")
if check_playwright():
    print("   ✅ Playwright disponible")
else:
    print("   ⚠️ Playwright no disponible")
    print("   Instalando: pip install playwright && playwright install chromium")
    subprocess.run([sys.executable, "-m", "pip", "install", "playwright"], capture_output=True)
    subprocess.run([sys.executable, "-m", "playwright", "install", "chromium"], capture_output=True)
    if check_playwright():
        print("   ✅ Playwright instalado y disponible")
    else:
        print("   ❌ No se pudo instalar Playwright")
        print("   Creando catálogo manual de INE.Stat con info conocida...")
        # Fallback: crear catálogo con info conocida
        catalogo = {
            "fuente": "INE.Stat (stat.ine.cl)",
            "tecnologia": "OECD.Stat / PC-Axis",
            "url": BASE_URL,
            "api_publica": False,
            "metodo": "Browser automation (Playwright)",
            "categorias": CATEGORIAS_INE,
            "estado": "PENDIENTE — requiere Playwright para automatización",
            "formatos_exportacion": ["CSV", "XLS", "SDMX-ML"],
            "nota": "INE.Stat no tiene API REST pública. Los datos del mercado laboral migraron a SIMEL. Medio Ambiente sigue activo en INE.Stat.",
            "url_simel": "https://simel Wirtschaftsstatistik",
            "url_simel_real": "Buscando URL de SIMEL",
        }
        cat_path = os.path.join(META_DIR, "ine_stat_catalog.json")
        with open(cat_path, "w", encoding="utf-8") as f:
            json.dump(catalogo, f, ensure_ascii=False, indent=2)
        print(f"   Catálogo manual: {cat_path}")
        sys.exit(0)

# === 2. Si Playwright está disponible, automatizar ===
print("\n2. Iniciando browser automation con Playwright...")

try:
    from playwright.sync_api import sync_playwright
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        print("   Navegando a stat.ine.cl...")
        page.goto(HOME_URL, timeout=30000)
        time.sleep(3)
        
        title = page.title()
        print(f"   Título: {title}")
        
        # Buscar enlaces de datos descargables
        print("   Buscando enlaces de datos...")
        
        # Buscar todos los enlaces con texto de categorías
        enlaces = []
        for cat in CATEGORIAS_INE:
            try:
                link = page.locator(f"text={cat}")
                count = link.count()
                print(f"   '{cat}': {count} elementos encontrados")
                if count > 0:
                    enlaces.append(cat)
            except Exception as e:
                print(f"   '{cat}': error - {str(e)[:50]}")
        
        # Capturar el árbol temático
        print("\n3. Capturando árbol temático...")
        
        arbol = page.evaluate("""() => {
            const items = document.querySelectorAll('.tree-item, .jstree-node, li[role="treeitem"]');
            return Array.from(items).map(item => ({
                text: item.textContent?.trim().substring(0, 100),
                href: item.querySelector('a')?.href
            })).filter(i => i.text);
        }""")
        
        print(f"   {len(arbol)} elementos en árbol temático")
        
        # Guardar árbol temático
        arbol_path = os.path.join(META_DIR, "ine_stat_arbol.json")
        with open(arbol_path, "w", encoding="utf-8") as f:
            json.dump(arbol, f, ensure_ascii=False, indent=2)
        print(f"   Árbol temático: {arbol_path}")
        
        # Intentar navegar a Mercado de Trabajo
        if "Estadísticas del Mercado de Trabajo" in enlaces:
            print("\n4. Navegando a Mercado de Trabajo...")
            try:
                page.locator("text=Estadísticas del Mercado de Trabajo").first.click()
                time.sleep(3)
                
                # Buscar subcategorías o series
                subcats = page.evaluate("""() => {
                    const items = document.querySelectorAll('.tree-item, .jstree-node, li[role="treeitem"], a');
                    return Array.from(items).map(i => i.textContent?.trim().substring(0, 80)).filter(t => t && t.length > 5);
                }""")
                
                print(f"   {len(subcats)} subcategorías encontradas")
                
                # Guardar subcategorías
                sc_path = os.path.join(META_DIR, "ine_stat_mercado_trabajo.json")
                with open(sc_path, "w", encoding="utf-8") as f:
                    json.dump({"subcategorias": subcats[:50]}, f, ensure_ascii=False, indent=2)
                print(f"   Subcategorías: {sc_path}")
                
            except Exception as e:
                print(f"   Error navegando: {str(e)[:80]}")
        
        # Capturar captura de pantalla
        ss_path = os.path.join(META_DIR, "ine_stat_screenshot.png")
        page.screenshot(path=ss_path, full_page=True)
        print(f"   Captura de pantalla: {ss_path}")
        
        browser.close()
        print("\n5. Browser automation completada (fase exploratoria)")
        
        # Crear catálogo final
        catalogo = {
            "fuente": "INE.Stat (stat.ine.cl)",
            "tecnologia": "OECD.Stat / PC-Axis",
            "url": BASE_URL,
            "api_publica": False,
            "metodo": "Browser automation (Playwright)",
            "categorias": CATEGORIAS_INE,
            "estado": "Fase exploratoria completada",
            "arbol_tematico": len(arbol),
            "formatos_exportacion": ["CSV", "XLS", "SDMX-ML"],
            "datos_mercado_laboral": "Migrados a SIMEL (solo histórico en INE.Stat)",
            "datos_disponibles": "Estadísticas de Medio Ambiente (activas)",
            "siguiente_fase": "Profundizar en Medio Ambiente y exportar CSV",
        }
        
        cat_final = os.path.join(META_DIR, "ine_stat_catalog.json")
        with open(cat_final, "w", encoding="utf-8") as f:
            json.dump(catalogo, f, ensure_ascii=False, indent=2)
        print(f"   Catálogo final: {cat_final}")

except Exception as e:
    print(f"   ❌ Error general: {e}")
    # Fallback: crear catálogo manual
    catalogo = {
        "fuente": "INE.Stat (stat.ine.cl)",
        "error": str(e)[:200],
        "estado": "Fallo en automatización — registro creado para reintentar",
    }
    cat_final = os.path.join(META_DIR, "ine_stat_catalog.json")
    with open(cat_final, "w", encoding="utf-8") as f:
        json.dump(catalogo, f, ensure_ascii=False, indent=2)
