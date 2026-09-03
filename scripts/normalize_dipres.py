#!/usr/bin/env python3
"""
SNID — Normalizador de datos DIPRES desde datos.gob.cl
Procesa los 2,517 CSV de DIPRES y extrae series temporalmente consistentes.
Enfocado en: ejecución presupuestaria mensual y leyes de presupuesto del gobierno central.
"""
import os
import csv
import json
import re

RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/dipres")
INTERIM_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/interim")
os.makedirs(INTERIM_DIR, exist_ok=True)

# === 1. Clasificar archivos DIPRES ===
print("Clasificando archivos DIPRES...")
files = sorted(os.listdir(RAW_DIR))
print(f"Total archivos: {len(files)}")

categorias = {
    "ejecucion_presupuestaria": [],
    "ley_presupuestos": [],
    "iniciativas_inversion": [],
    "otros": [],
}

for f in files:
    name_lower = f.lower()
    if "ejecucion-presupuestaria" in name_lower or "ejecución-presupuestaria" in name_lower:
        categorias["ejecucion_presupuestaria"].append(f)
    elif "ley-de-presupuestos" in name_lower:
        categorias["ley_presupuestos"].append(f)
    elif "iniciativas-de-inversion" in name_lower or "inversion" in name_lower:
        categorias["iniciativas_inversion"].append(f)
    else:
        categorias["otros"].append(f)

print()
for cat, lista in categorias.items():
    print(f"  {cat}: {len(lista)} archivos")

# === 2. Extraer año y mes de los nombres de archivo ===
PATRON_FECHA = re.compile(
    r"(?:a-(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)-de-(\d{4}))"
)

MESES = {
    "enero": 1, "febrero": 2, "marzo": 3, "abril": 4,
    "mayo": 5, "junio": 6, "julio": 7, "agosto": 8,
    "septiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12,
}

PATRON_FECHA_MES = re.compile(
    r"a-([a-z]+)-de-(\d{4})", re.IGNORECASE
)

# === 3. Crear inventario catalogado ===
inventario = []

for cat, lista in categorias.items():
    for f in lista:
        # Buscar año
        match = PATRON_FECHA_MES.search(f)
        if match:
            mes_nombre = match.group(1).lower()
            year = int(match.group(2))
            mes = MESES.get(mes_nombre, 0)
        else:
            # Buscar solo año
            year_match = re.search(r"(\d{4})", f)
            year = int(year_match.group(1)) if year_match else 0
            mes = 0  # sin mes
        
        filepath = os.path.join(RAW_DIR, f)
        size = os.path.getsize(filepath)
        
        inventario.append({
            "categoria": cat,
            "filename": f,
            "year": year,
            "mes": mes,
            "size_bytes": size,
        })

# Ordenar por año y mes
inventario.sort(key=lambda x: (x["year"], x["mes"]))

# === 4. Guardar inventario ===
inv_path = os.path.join(INTERIM_DIR, "dipres_inventario.json")
with open(inv_path, "w", encoding="utf-8") as f:
    json.dump(inventario, f, ensure_ascii=False, indent=2)

print(f"\nInventario: {inv_path}")
print(f"Total entradas: {len(inventario)}")

# === 5. Resumen por año ===
por_año = {}
for item in inventario:
    y = item["year"]
    if y not in por_año:
        por_año[y] = {}
    cat = item["categoria"]
    if cat not in por_año[y]:
        por_año[y][cat] = 0
    por_año[y][cat] += 1

print("\nResumen por año:")
for y in sorted(por_año.keys()):
    if y > 0:
        cats = por_año[y]
        total = sum(cats.values())
        print(f"  {y}: {total} archivos ({', '.join(f'{k}={v}' for k,v in cats.items())})")

# === 6. Guardar resumen ===
resumen_path = os.path.join(INTERIM_DIR, "dipres_resumen.json")
with open(resumen_path, "w", encoding="utf-8") as f:
    json.dump({
        "total_archivos": len(inventario),
        "por_año": por_año,
        "categorias": {k: len(v) for k, v in categorias.items()},
    }, f, ensure_ascii=False, indent=2)

print(f"\nResumen: {resumen_path}")
print("Normalización DIPRES (inventario) completada.")
