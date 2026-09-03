#!/usr/bin/env python3
"""
SNID — Conector CKAN datos.gob.cl
Descarga masiva de datasets desde datos.gob.cl via API CKAN v3.
Cobertura: DIPRES, SISS, MINEDUC y exploración general.
"""
import json
import os
import urllib.request
import time
import hashlib
import sys

BASE_URL = "https://datos.gob.cl/api/3/action"
RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw")
META_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
UA = {"User-Agent": "Civicum-SNID/1.0 (civic-tech; contacto: daniel.aguirre.personal@gmail.com)"}

# Organizaciones objetivo
ORGS = {
    "direccion_de_presupuestos": "dipres",
    "superintendencia_de_servicios_sanitarios": "siss",
    "ministerio-de-educacion": "mineduc",
}

def ckan_request(action, params=None):
    """Hace una peticion a la API CKAN y devuelve JSON."""
    url = f"{BASE_URL}/{action}"
    if params:
        import urllib.parse
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

def download_file(url, dest_path, max_retries=2):
    """Descarga un archivo binario con reintentos."""
    for attempt in range(max_retries + 1):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=45) as resp:
                data = resp.read()
            if len(data) < 50:
                return False, f"Archivo muy pequeno ({len(data)} bytes)"
            with open(dest_path, "wb") as f:
                f.write(data)
            return True, len(data)
        except Exception as e:
            if attempt < max_retries:
                time.sleep(2)
            else:
                return False, str(e)[:80]

def process_org(org_id, short_name):
    """Procesa una organizacion: lista datasets, descarga recursos."""
    print(f"\n{'='*60}")
    print(f"Procesando: {short_name} (org_id: {org_id})")
    print(f"{'='*60}")
    
    # 1. Obtener lista de datasets de la organizacion
    try:
        result = ckan_request("package_search", {
            "fq": f"organization:{org_id}",
            "rows": 500,
        })
        datasets = result.get("result", {}).get("results", [])
        count = result.get("result", {}).get("count", 0)
        print(f"  Datasets encontrados: {count}")
    except Exception as e:
        print(f"  ERROR listando datasets: {e}")
        return 0, 0, 0
    
    # 2. Crear directorio
    org_dir = os.path.join(RAW_DIR, short_name)
    os.makedirs(org_dir, exist_ok=True)
    os.makedirs(META_DIR, exist_ok=True)
    
    # 3. Guardar catalogo de metadatos de la org
    catalog_path = os.path.join(META_DIR, f"{short_name}_catalog.json")
    catalog = []
    
    total_resources = 0
    downloaded = 0
    failed = 0
    
    for ds in datasets:
        ds_title = ds.get("title", "?")
        ds_name = ds.get("name", "?")
        ds_id = ds.get("id", "?")
        resources = ds.get("resources", [])
        
        for res in resources:
            total_resources += 1
            fmt = (res.get("format") or "unknown").lower().strip()
            url = res.get("url", "")
            res_name = (res.get("name") or "unnamed")[:60].replace("/", "-").replace(" ", "_")
            
            # Solo descargar formatos utiles
            if fmt not in ("csv", "xls", "xlsx", "json"):
                catalog.append({
                    "dataset": ds_title,
                    "format": fmt,
                    "url": url[:200],
                    "status": "skipped_format",
                })
                continue
            
            if not url or not url.startswith("http"):
                catalog.append({
                    "dataset": ds_title,
                    "format": fmt,
                    "url": url[:200],
                    "status": "skipped_no_url",
                })
                continue
            
            # Generar nombre de archivo seguro
            safe_name = f"{ds_name}_{res_name}.{fmt}"
            safe_name = safe_name.replace("://", "_").replace("?", "_")
            if len(safe_name) > 150:
                safe_name = safe_name[:150]
            dest = os.path.join(org_dir, safe_name)
            
            # Descargar
            ok, info = download_file(url, dest)
            
            if ok:
                downloaded += 1
                file_hash = hashlib.sha256(open(dest, "rb").read()).hexdigest()[:16]
                catalog.append({
                    "dataset": ds_title,
                    "resource": res_name,
                    "format": fmt,
                    "url": url[:200],
                    "file": safe_name,
                    "size_bytes": info,
                    "hash_sha256_16": file_hash,
                    "status": "downloaded",
                })
                print(f"  OK  {safe_name[:70]}  | {info:>8} bytes")
            else:
                failed += 1
                catalog.append({
                    "dataset": ds_title,
                    "resource": res_name,
                    "format": fmt,
                    "url": url[:200],
                    "status": f"failed: {info}",
                })
                print(f"  ERR {safe_name[:70]}  | {info}")
            
            time.sleep(0.3)  # Rate limiting respetuoso
    
    # 4. Guardar catalogo
    with open(catalog_path, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)
    
    print(f"\n  RESUMEN {short_name}: {len(datasets)} datasets, {total_resources} recursos, {downloaded} descargados, {failed} fallidos")
    print(f"  Catalogo: {catalog_path}")
    
    return len(datasets), downloaded, failed

# === EJECUCION ===
print("SNID — Recolector CKAN datos.gob.cl")
print(f"Directorio base: {RAW_DIR}")
print(f"Organizaciones: {list(ORGS.keys())}")

grand_total_ds = 0
grand_total_dl = 0
grand_total_fail = 0

for org_id, short_name in ORGS.items():
    ds_count, dl_count, fail_count = process_org(org_id, short_name)
    grand_total_ds += ds_count
    grand_total_dl += dl_count
    grand_total_fail += fail_count
    time.sleep(1)

print(f"\n{'='*60}")
print(f"TOTAL GLOBAL: {grand_total_ds} datasets, {grand_total_dl} archivos descargados, {grand_total_fail} fallidos")
print(f"{'='*60}")
