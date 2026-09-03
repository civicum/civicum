#!/usr/bin/env python3
"""Reintenta los 4 indicadores del World Bank que fallaron por timeout."""
import json
import os
import urllib.request
import time

OUT_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/worldbank")
os.makedirs(OUT_DIR, exist_ok=True)

RETRY = {
    "NY.GDP.MKTP.CD": "gdp_nominal_usd",
    "SE.TER.ENRL": "tertiary_enrollment",
    "GC.REV.XGRT.GD.ZS": "revenue_gdp",
    "EG.ELC.ACCS.ZS": "electricity_access",
}

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

for code, name in RETRY.items():
    url = f"https://api.worldbank.org/v2/country/CHL/indicator/{code}?format=json&date=1955:2024&per_page=1000"
    out_file = os.path.join(OUT_DIR, f"{name}.json")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=45) as resp:
            data = resp.read()
        with open(out_file, "wb") as f:
            f.write(data)
        parsed = json.loads(data)
        count = len(parsed[1]) if len(parsed) > 1 and parsed[1] else 0
        print(f"OK  {name:30s} | {count:3d} registros | {len(data):6d} bytes")
    except Exception as e:
        print(f"ERR {name:30s} | {str(e)[:60]}")
    time.sleep(2)
