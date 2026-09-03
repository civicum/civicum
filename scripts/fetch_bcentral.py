#!/usr/bin/env python3
"""
SNID — Descarga masiva Banco Central de Chile via API BDE
Usa el token de Daniel para descargar series de las 19 secciones del BDE.
"""
import json
import os
import urllib.request
import time

TOKEN = "$2a$10$ATUJet1y8gvZVnDmhJBoJOKK0iYMWwZsDtPm5ri.O4T0P1JZBp3kC"
BASE = "https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx"
RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/bcentral")
META_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(META_DIR, exist_ok=True)

# Series clave por categoría (códigos conocidos del BDE)
# Formato: codigo -> (nombre_archivo, descripcion)
SERIES = {
    # --- Precios (IPC) ---
    "F4.IPC.VAR.IND.M": ("ipc_variacion_mensual", "IPC Variación mensual índice"),
    "F4.IPC.GD.IMPT.CN": ("ipc_general_importaciones", "IPC general importaciones"),
    "F4.IPC.GD.ORIG.CN": ("ipc_general_origen", "IPC general origen"),
    
    # --- Tipo de cambio ---
    "F073.TCO.PRE.Z.D": ("tipo_cambio_dolar_diario", "Tipo de cambio USD/CLP diario"),
    "F073.TCO.PRE.Z.M": ("tipo_cambio_dolar_mensual", "Tipo de cambio USD/CLP mensual"),
    
    # --- Tasas de interés ---
    "F7.TPM.RES.D": ("tpm_diaria", "Tasa Política Monetaria diaria"),
    "R9.CMR.10.AAA.O>C10": ("tasa_10_anos", "Tasa renta fija 10 años"),
    
    # --- PIB / Cuentas Nacionales ---
    "F1.PIB.DP.Z.X": ("pib_desarrollo_zones", "PIB desarrollo zonas"),
    "F1.PIB.ART.Z.2": ("pib_artes_zonas", "PIB artes zonas"),
    
    # --- Mercado laboral ---
    "F5.1.TDES.P.IND.IND.M": ("tasa_desempleo_mensual", "Tasa de desempleo mensual"),
    "F5.1.PEA.IND.IND.M": ("pea_mensual", "Población Económicamente Activa mensual"),
    
    # --- Finanzas públicas ---
    "F8.SG.ASU.GB.Z.SN": ("sect_gobierno_balance", "Sector gobierno balance"),
    "F8.SG.ASU.GB.Z.IN": ("sect_gobierno_ingresos", "Sector gobierno ingresos"),
    "F8.SG.ASU.GB.Z.EG": ("sect_gobierno_gastos", "Sector gobierno gastos"),
    "F8.SG.ASU.GB.Z.DP": ("sect_gobierno_deuda", "Sector gobierno deuda pública"),
    
    # --- Sector externo ---
    "F2.EXC.EXP.RB.C2017.M": ("exportaciones_mensuales", "Exportaciones mensuales"),
    "F2.IMC.IMP.RB.C2017.M": ("importaciones_mensuales", "Importaciones mensuales"),
    
    # --- Estadísticas monetarias ---
    "F10.S9.M.EC.CA.CC.M": ("cartera_credito_mensual", "Cartera de crédito mensual"),
    
    # --- Mercado de la vivienda ---
    "F6.8.IPCV.IND.IND.M": ("ipc_vivienda_mensual", "IPC vivienda mensual"),
}

def fetch_series(code, first_date="2010-01-01", last_date="2026-12-31"):
    """Descarga una serie desde el API BDE."""
    url = f"{BASE}?token={TOKEN}&function=GetSeries&timeseries={code}&firstDate={first_date}&lastDate={last_date}"
    req = urllib.request.Request(url, headers={"User-Agent": "Civicum-SNID/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

catalogo = []
total_ok = 0
total_err = 0

print(f"=== SNID — Banco Central API BDE ===")
print(f"Series a descargar: {len(SERIES)}")
print(f"Rango de fechas: 2010-01-01 a 2026-12-31")
print()

for code, (name, desc) in SERIES.items():
    out_file = os.path.join(RAW_DIR, f"{name}.json")
    print(f"[{total_ok+total_err+1}/{len(SERIES)}] {desc}")
    print(f"  Codigo: {code}")
    
    try:
        data = fetch_series(code)
        codigo_resp = data.get("Codigo", -1)
        
        if codigo_resp == 0:
            obs = data.get("Series", {}).get("Obs", [])
            descrip = data.get("Series", {}).get("descripEsp", "")
            
            with open(out_file, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            size = os.path.getsize(out_file)
            print(f"  ✅ OK: {len(obs)} observaciones | {size} bytes | {out_file}")
            
            catalogo.append({
                "codigo": code,
                "nombre_archivo": f"{name}.json",
                "descripcion": desc,
                "descrip_ine": descrip[:100],
                "observaciones": len(obs),
                "size_bytes": size,
                "status": "downloaded",
            })
            total_ok += 1
        else:
            err_msg = data.get("Descripcion", "Unknown error")
            print(f"  ❌ API error: Codigo={codigo_resp}, {err_msg}")
            catalogo.append({
                "codigo": code,
                "nombre": desc,
                "status": f"api_error: {err_msg}",
            })
            total_err += 1
    except Exception as e:
        print(f"  ❌ Exception: {str(e)[:80]}")
        catalogo.append({
            "codigo": code,
            "nombre": desc,
            "status": f"exception: {str(e)[:80]}",
        })
        total_err += 1
    
    time.sleep(0.5)  # Rate limiting respetuoso
    print()

# Guardar catálogo
cat_path = os.path.join(META_DIR, "bcentral_catalog.json")
with open(cat_path, "w", encoding="utf-8") as f:
    json.dump(catalogo, f, ensure_ascii=False, indent=2)

print(f"{'='*50}")
print(f"RESUMEN: {total_ok} descargadas, {total_err} fallidas, de {len(SERIES)} series")
print(f"Catálogo: {cat_path}")
print(f"Datos en: {RAW_DIR}")
