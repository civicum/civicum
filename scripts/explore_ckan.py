#!/usr/bin/env python3
"""
SNID — Explorador masivo de datos.gob.cl
Lista todas las organizaciones y busca datasets relevantes para Civicum.
"""
import json
import os
import urllib.request
import time

BASE_URL = "https://datos.gob.cl/api/3/action"
OUT_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/_metadata")
os.makedirs(OUT_DIR, exist_ok=True)
UA = {"User-Agent": "Civicum-SNID/1.0"}

def ckan_request(action, params=None):
    url = f"{BASE_URL}/{action}"
    if params:
        import urllib.parse
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())

# 1. Listar TODAS las organizaciones
print("Listando organizaciones de datos.gob.cl...")
orgs = ckan_request("organization_list", {"limit": 500})
org_list = orgs.get("result", [])
print(f"Total organizaciones: {len(org_list)}")

# 2. Busquedas relevantes para Civicum
SEARCHES = [
    "poblacion",
    "pobreza",
    "presupuesto municipal",
    "gasto municipal",
    "ingresos municipales",
    "educacion matricula",
    "salud",
    "agua potable",
    "alfabetizacion",
    "indicadores economicos",
    "IPC",
    "PIB",
    "deuda publica",
    "vivienda",
    "seguridad ciudadana",
    "turnout electoral",
    "elecciones",
    "transparencia",
    "datos abiertos",
    "estadisticas",
    "demografia",
    "censo",
    "inmigracion",
    "empleo",
    "remuneraciones",
]

print(f"\nBuscando {len(SEARCHES)} terminos relevantes...")
results = {}

for term in SEARCHES:
    try:
        data = ckan_request("package_search", {"q": term, "rows": 50})
        count = data.get("result", {}).get("count", 0)
        datasets = data.get("result", {}).get("results", [])
        downloadable = sum(1 for ds in datasets for r in ds.get("resources", []) 
                         if (r.get("format") or "").lower() in ("csv", "xls", "xlsx", "json"))
        results[term] = {
            "total_datasets": count,
            "downloadable_resources": downloadable,
        }
        print(f"  {term:30s} | {count:4d} datasets | {downloadable:3d} recursos descargables")
    except Exception as e:
        results[term] = {"error": str(e)[:60]}
        print(f"  {term:30s} | ERROR: {str(e)[:50]}")
    time.sleep(0.5)

# 3. Guardar resultados
out_file = os.path.join(OUT_DIR, "datos_gob_cl_exploracion.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump({
        "total_organizaciones": len(org_list),
        "organizaciones": org_list,
        "busquedas": results,
    }, f, ensure_ascii=False, indent=2)

print(f"\nExploracion guardada: {out_file}")
print(f"Organizaciones totales: {len(org_list)}")
