#!/usr/bin/env python3
"""Descarga masiva de indicadores de Chile desde World Bank API."""
import json
import os
import urllib.request
import time

INDICATORS = {
    "SP.POP.TOTL": "population_total",
    "SI.POV.NAHC": "poverty_headcount",
    "FP.CPI.TOTL": "cpi_inflation",
    "GC.DOD.TOTL.GD.ZS": "debt_gdp",
    "NY.GDP.MKTP.CD": "gdp_nominal_usd",
    "NY.GDP.MKTP.CN": "gdp_nominal_local",
    "SE.PRM.ENRL": "primary_enrollment",
    "SE.SEC.ENRL": "secondary_enrollment",
    "SE.TER.ENRL": "tertiary_enrollment",
    "SE.ADT.LITR.ZS": "literacy_rate",
    "SH.H2O.SAFE.ZS": "safe_water_access",
    "SH.STA.BASS.ZS": "basic_sanitation",
    "GC.REV.XGRT.GD.ZS": "revenue_gdp",
    "GC.XPN.TOTL.GD.ZS": "expenditure_gdp",
    "EG.ELC.ACCS.ZS": "electricity_access",
    "IT.NET.USER.ZS": "internet_users",
    "SP.DYN.LE00.IN": "life_expectancy",
    "SP.DYN.IMRT.IN": "infant_mortality",
    "SH.XPD.CHEX.GD.ZS": "health_expenditure_gdp",
}

OUT_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/worldbank")
os.makedirs(OUT_DIR, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

print(f"Descargando {len(INDICATORS)} indicadores desde World Bank API...")
print(f"Directorio: {OUT_DIR}")
print()

success = 0
failed = 0

for code, name in INDICATORS.items():
    url = f"https://api.worldbank.org/v2/country/CHL/indicator/{code}?format=json&date=1955:2024&per_page=1000"
    out_file = os.path.join(OUT_DIR, f"{name}.json")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(out_file, "wb") as f:
            f.write(data)
        parsed = json.loads(data)
        count = len(parsed[1]) if len(parsed) > 1 and parsed[1] else 0
        print(f"OK  {name:30s} | {count:3d} registros | {len(data):6d} bytes")
        success += 1
    except Exception as e:
        print(f"ERR {name:30s} | {str(e)[:60]}")
        failed += 1
    time.sleep(0.5)

print()
print(f"Resultado: {success} exitosos, {failed} fallidos")
print(f"Archivos en: {OUT_DIR}")
