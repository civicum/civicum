#!/usr/bin/env python3
"""
SNID — Normalizador de datos World Bank
Convierte los 19 archivos JSON del World Bank a un único CSV normalizado.
Estandariza: año como entero, valores numéricos, metadatos de fuente.
"""
import json
import os
import csv

RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/worldbank")
INTERIM_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/interim")
os.makedirs(INTERIM_DIR, exist_ok=True)

# Mapeo de nombre de archivo -> nombre de indicador legible
INDICATOR_MAP = {
    "population_total": "Población total",
    "poverty_headcount": "Tasa de pobreza (%)",
    "cpi_inflation": "Inflación IPC (%)",
    "debt_gdp": "Deuda pública (% PIB)",
    "gdp_nominal_usd": "PIB nominal (USD)",
    "gdp_nominal_local": "PIB nominal (moneda local)",
    "primary_enrollment": "Matrícula educación primaria",
    "secondary_enrollment": "Matrícula educación secundaria",
    "tertiary_enrollment": "Matrícula educación terciaria",
    "literacy_rate": "Tasa de alfabetización (%)",
    "safe_water_access": "Acceso a agua segura (%)",
    "basic_sanitation": "Saneamiento básico (%)",
    "revenue_gdp": "Ingresos gobierno (% PIB)",
    "expenditure_gdp": "Gastos gobierno (% PIB)",
    "electricity_access": "Acceso a electricidad (%)",
    "internet_users": "Usuarios de internet (%)",
    "life_expectancy": "Esperanza de vida (años)",
    "infant_mortality": "Mortalidad infantil (por 1000)",
    "health_expenditure_gdp": "Gasto en salud (% PIB)",
}

# === 1. Leer todos los JSON y construir tabla unificada ===
print("Normalizando datos del World Bank...")
print(f"Directorio raw: {RAW_DIR}")
print(f"Directorio interim: {INTERIM_DIR}")
print()

# Diccionario: año -> {indicador: valor}
data_by_year = {}

# Metadatos de cada indicador
indicator_meta = {}

for filename in sorted(os.listdir(RAW_DIR)):
    if not filename.endswith(".json"):
        continue
    
    short_name = filename.replace(".json", "")
    display_name = INDICATOR_MAP.get(short_name, short_name)
    filepath = os.path.join(RAW_DIR, filename)
    
    with open(filepath, "r", encoding="utf-8") as f:
        raw = json.load(f)
    
    # World Bank devuelve [metadata, data_array]
    if len(raw) < 2 or not raw[1]:
        print(f"  SKIP {short_name:30s} | sin datos")
        continue
    
    records = raw[1]
    count = 0
    
    for record in records:
        year_str = record.get("date", "")
        value = record.get("value")
        
        if value is None:
            continue
        
        try:
            year = int(year_str)
        except (ValueError, TypeError):
            continue
        
        if year not in data_by_year:
            data_by_year[year] = {}
        
        data_by_year[year][short_name] = value
        count += 1
    
    # Guardar metadatos del indicador
    indicator_meta[short_name] = {
        "display_name": display_name,
        "source": "World Bank API",
        "source_url": f"https://api.worldbank.org/v2/country/CHL/indicator/",
        "records": count,
        "file": filename,
    }
    
    print(f"  OK  {short_name:30s} | {count:3d} registros | {display_name}")

# === 2. Crear CSV unificado ===
indicators = sorted(INDICATOR_MAP.keys())
years = sorted(data_by_year.keys())

csv_path = os.path.join(INTERIM_DIR, "worldbank_normalized.csv")
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    # Header
    writer.writerow(["year"] + [INDICATOR_MAP.get(k, k) for k in indicators])
    # Rows
    for year in years:
        row = [year]
        for ind in indicators:
            row.append(data_by_year[year].get(ind, ""))
        writer.writerow(row)

print(f"\nCSV unificado: {csv_path}")
print(f"Años: {years[0]}-{years[-1]} ({len(years)} años)")
print(f"Indicadores: {len(indicators)}")

# === 3. Crear JSON para TypeScript ===
ts_data = {}
for year in years:
    year_data = {}
    for ind in indicators:
        val = data_by_year[year].get(ind)
        if val is not None:
            year_data[ind] = val
    if year_data:
        ts_data[year] = year_data

json_path = os.path.join(INTERIM_DIR, "worldbank_normalized.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(ts_data, f, ensure_ascii=False, indent=2)

print(f"JSON normalizado: {json_path}")

# === 4. Crear archivo de metadatos ===
meta_path = os.path.join(INTERIM_DIR, "worldbank_metadata.json")
with open(meta_path, "w", encoding="utf-8") as f:
    json.dump({
        "source": "World Bank API",
        "country": "Chile (CHL)",
        "date_range": f"{years[0]}-{years[-1]}",
        "total_years": len(years),
        "total_indicators": len(indicators),
        "indicators": indicator_meta,
        "normalization_date": "2026-08-07",
    }, f, ensure_ascii=False, indent=2)

print(f"Metadatos: {meta_path}")
print(f"\nNormalización completada: {len(years)} años x {len(indicators)} indicadores")
