#!/usr/bin/env python3
"""
SNID — Descarga Banco Central con códigos REALES del Buscador de Series
Códigos extraídos del buscador de series BDE (si3.bcentral.cl/siete)
"""
import json
import os
import urllib.request
import time
import hashlib

TOKEN = "$2a$10$ATUJet1y8gvZVnDmhJBoJOKK0iYMWwZsDtPm5ri.O4T0P1JZBp3kC"
BASE = "https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx"
RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/bcentral")
META_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(META_DIR, exist_ok=True)

# Códigos REALES extraídos del Buscador de Series del BDE
SERIES = {
    # === PRECIOS (IPC) ===
    "F074.IPC.VAR.Z.Z.C.M": "ipc_general_var_mensual_hist",
    "F074.IPC.VAR.Z.Z.C.A": "ipc_general_var_anual_hist",
    "G073.IPCSV.VAR.2018.M": "ipc_sin_volatiles_var_mensual",
    "G073.IPCSV.V12.2018.M": "ipc_sin_volatiles_var_anual",
    "F074.IPCFV.VAR.Z.2018.C.M": "ipc_frutas_verduras_var_mensual",
    "F074.IPCT.VAR.Z.2018.C.M": "ipc_transables_var_mensual",
    "F074.IPCN.VAR.Z.2018.C.M": "ipc_no_transables_var_mensual",
    
    # === TIPO DE CAMBIO ===
    "F073.TCO.PRE.Z.D": "tipo_cambio_usd_clp_diario",
    "F073.TCO.PRE.Z.M": "tipo_cambio_usd_clp_mensual",
    
    # === IMACEC (códigos por confirmar) ===
    # "F035.IMACEC.IND.Z.ENC.M": "imacec_indice_mensual",
    # "F035.IMACEC.VAR.Z.ENC.M": "imacec_var_mensual",
    # "F035.IMACEC.V12.Z.ENC.M": "imacec_var_anual",
}

def fetch_series(code, first_date="2000-01-01", last_date="2026-12-31"):
    url = f"{BASE}?token={TOKEN}&function=GetSeries&timeseries={code}&firstDate={first_date}&lastDate={last_date}"
    req = urllib.request.Request(url, headers={"User-Agent": "Civicum-SNID/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()
    # BDE devuelve mixed encoding — intentar UTF-8 primero, luego latin-1
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin-1")
    return json.loads(text)

catalogo = []
total_ok = 0
total_err = 0

print(f"=== SNID — Banco Central API BDE (códigos reales) ===")
print(f"Series a descargar: {len(SERIES)}")
print()

for code, name in SERIES.items():
    out_file = os.path.join(RAW_DIR, f"{name}.json")
    print(f"[{total_ok+total_err+1}/{len(SERIES)}] {name}")
    print(f"  Código: {code}")
    
    try:
        data = fetch_series(code)
        codigo_resp = data.get("Codigo", -1)
        
        if codigo_resp == 0:
            series_data = data.get("Series", {})
            obs = series_data.get("Obs", [])
            descrip = series_data.get("descripEsp", "")
            
            # Calcular hash
            file_bytes = json.dumps(data, ensure_ascii=False).encode("utf-8")
            file_hash = hashlib.sha256(file_bytes).hexdigest()[:16]
            
            with open(out_file, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            size = os.path.getsize(out_file)
            print(f"  ✅ OK: {len(obs)} observaciones | {size} bytes")
            print(f"  Descripción: {descrip[:80]}")
            
            # Primera y última observación
            if obs:
                print(f"  Primera: {obs[0].get('indexDateString','')} = {obs[0].get('value','')}")
                print(f"  Última:  {obs[-1].get('indexDateString','')} = {obs[-1].get('value','')}")
            
            catalogo.append({
                "codigo": code,
                "nombre_archivo": f"{name}.json",
                "descripcion": descrip[:100],
                "observaciones": len(obs),
                "size_bytes": size,
                "hash_sha256_16": file_hash,
                "status": "downloaded",
            })
            total_ok += 1
        else:
            err_msg = data.get("Descripcion", "Unknown")
            print(f"  ❌ API error: Codigo={codigo_resp}, {err_msg}")
            catalogo.append({
                "codigo": code,
                "nombre": name,
                "status": f"api_error: Codigo={codigo_resp}, {err_msg}",
            })
            total_err += 1
    except Exception as e:
        print(f"  ❌ Exception: {str(e)[:80]}")
        catalogo.append({
            "codigo": code,
            "nombre": name,
            "status": f"exception: {str(e)[:80]}",
        })
        total_err += 1
    
    time.sleep(0.5)
    print()

cat_path = os.path.join(META_DIR, "bcentral_catalog.json")
with open(cat_path, "w", encoding="utf-8") as f:
    json.dump(catalogo, f, ensure_ascii=False, indent=2)

print(f"{'='*50}")
print(f"RESUMEN BCCh: {total_ok} descargadas, {total_err} fallidas, de {len(SERIES)} series")
print(f"Catálogo: {cat_path}")
print(f"Datos en: {RAW_DIR}")
