#!/usr/bin/env python3
"""
SNID — Descarga masiva de datasets relevantes adicionales desde datos.gob.cl
Basado en la exploracion previa: poblacion, pobreza, censo, empleo, remuneraciones, etc.
"""
import json
import os
import urllib.request
import time
import hashlib

BASE_URL = "https://datos.gob.cl/api/3/action"
RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw")
META_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
UA = {"User-Agent": "Civicum-SNID/1.0 (civic-tech)"}

# Busquedas con recursos descargables confirmados
SEARCHES = [
    "poblacion",
    "pobreza",
    "censo",
    "empleo",
    "remuneraciones",
    "agua potable",
    "IPC",
    "vivienda",
    "seguridad ciudadana",
    "elecciones",
]

def ckan_request(action, params=None):
    url = f"{BASE_URL}/{action}"
    if params:
        import urllib.parse
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

def download_file(url, dest_path, max_retries=2):
    for attempt in range(max_retries + 1):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=45) as resp:
                data = resp.read()
            if len(data) < 50:
                return False, f"too small ({len(data)}b)"
            with open(dest_path, "wb") as f:
                f.write(data)
            return True, len(data)
        except Exception as e:
            if attempt < max_retries:
                time.sleep(2)
            else:
                return False, str(e)[:80]

os.makedirs(META_DIR, exist_ok=True)
grand_total = 0
grand_dl = 0
grand_fail = 0

for term in SEARCHES:
    cat_dir = os.path.join(RAW_DIR, term.replace(" ", "_"))
    os.makedirs(cat_dir, exist_ok=True)
    
    print(f"\n{'='*50}")
    print(f"Buscando: '{term}'")
    
    try:
        result = ckan_request("package_search", {"q": term, "rows": 100})
        datasets = result.get("result", {}).get("results", [])
        print(f"  Datasets: {len(datasets)}")
    except Exception as e:
        print(f"  ERROR: {e}")
        continue
    
    cat_catalog = []
    
    for ds in datasets:
        ds_title = ds.get("title", "?")
        ds_name = ds.get("name", "?")
        
        for res in ds.get("resources", []):
            fmt = (res.get("format") or "unknown").lower().strip()
            url = res.get("url", "")
            res_name = (res.get("name") or "unnamed")[:60].replace("/", "-").replace(" ", "_")
            
            if fmt not in ("csv", "xls", "xlsx", "json"):
                continue
            if not url or not url.startswith("http"):
                continue
            
            safe_name = f"{ds_name}_{res_name}.{fmt}".replace("://", "_").replace("?", "_")
            if len(safe_name) > 150:
                safe_name = safe_name[:150]
            dest = os.path.join(cat_dir, safe_name)
            
            # Skip si ya existe
            if os.path.exists(dest):
                continue
            
            ok, info = download_file(url, dest)
            if ok:
                grand_dl += 1
                print(f"  OK  {safe_name[:60]}  | {info:>8} bytes")
            else:
                grand_fail += 1
                print(f"  ERR {safe_name[:60]}  | {info}")
            
            cat_catalog.append({
                "dataset": ds_title,
                "format": fmt,
                "url": url[:200],
                "file": safe_name if ok else None,
                "status": "downloaded" if ok else f"failed: {info}",
            })
            time.sleep(0.3)
    
    grand_total += len(datasets)
    
    # Guardar catalogo de esta categoria
    cat_path = os.path.join(META_DIR, f"{term.replace(' ', '_')}_catalog.json")
    with open(cat_path, "w", encoding="utf-8") as f:
        json.dump(cat_catalog, f, ensure_ascii=False, indent=2)

print(f"\n{'='*50}")
print(f"TOTAL: {grand_total} datasets explorados, {grand_dl} descargados, {grand_fail} fallidos")
