#!/usr/bin/env python3
"""
SNID — Normalizador DIPRES: CSV unificado de ejecución presupuestaria
Construye una tabla temporal unificada con los datos de ejecución presupuestaria
mensual del Gobierno Central, extrayendo los CSV más recientes y limpios.
"""
import os
import csv
import json
import re
from collections import defaultdict

RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/dipres")
INTERIM_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/interim")
os.makedirs(INTERIM_DIR, exist_ok=True)

# Cargar inventario
inv_path = os.path.join(INTERIM_DIR, "dipres_inventario.json")
with open(inv_path, "r", encoding="utf-8") as f:
    inventario = json.load(f)

# Filtrar solo ejecución presupuestaria del gobierno central
# y con año >= 2017 (datos más consistentes)
ejecucion = [
    item for item in inventario
    if item["categoria"] == "ejecucion_presupuestaria"
    and item["year"] >= 2017
    and item["mes"] > 0
]

print(f"Archivos de ejecución presupuestaria (2017-2026 con mes): {len(ejecucion)}")

# Agrupar por año-mes
por_periodo = defaultdict(list)
for item in ejecucion:
    key = f"{item['year']}-{item['mes']:02d}"
    por_periodo[key].append(item)

print(f"Periodos únicos: {len(por_periodo)}")

# Para cada periodo, tomar el archivo CSV más grande (suele ser el más completo)
periodos_seleccionados = []
for key, items in sorted(por_periodo.items()):
    # Preferir archivos con "gobierno-central" en el nombre
    govcentral = [i for i in items if "gobierno-central" in i["filename"].lower()]
    if govcentral:
        # El más grande de gobierno central
        mejor = max(govcentral, key=lambda x: x["size_bytes"])
    else:
        # El más grande de cualquier tipo
        mejor = max(items, key=lambda x: x["size_bytes"])
    
    periodos_seleccionados.append({
        "periodo": key,
        "year": mejor["year"],
        "mes": mejor["mes"],
        "filename": mejor["filename"],
        "size_bytes": mejor["size_bytes"],
    })

print(f"Periodos seleccionados (uno por mes): {len(periodos_seleccionados)}")

# Leer el primer CSV seleccionado para entender la estructura
if periodos_seleccionados:
    primer = periodos_seleccionados[0]
    filepath = os.path.join(RAW_DIR, primer["filename"])
    print(f"\nLeyendo estructura del primer archivo: {primer['filename'][:60]}")
    
    try:
        with open(filepath, "r", encoding="utf-8-sig", errors="replace") as f:
            reader = csv.reader(f, delimiter=";")
            header = next(reader)
            primera_fila = next(reader, None)
        
        print(f"  Columnas ({len(header)}): {header[:8]}...")
        print(f"  Primera fila: {primera_fila[:5] if primera_fila else 'vacía'}")
    except Exception as e:
        print(f"  Error leyendo: {e}")
        
        # Intentar con encoding latin-1
        try:
            with open(filepath, "r", encoding="latin-1", errors="replace") as f:
                reader = csv.reader(f, delimiter=";")
                header = next(reader)
                primera_fila = next(reader, None)
            print(f"  (latin-1) Columnas ({len(header)}): {header[:8]}...")
            print(f"  (latin-1) Primera fila: {primera_fila[:5] if primera_fila else 'vacía'}")
        except Exception as e2:
            print(f"  Error con latin-1 también: {e2}")

# Guardar el índice de periodos seleccionados
idx_path = os.path.join(INTERIM_DIR, "dipres_ejecucion_indice.json")
with open(idx_path, "w", encoding="utf-8") as f:
    json.dump({
        "total_periodos": len(periodos_seleccionados),
        "rango": f"{periodos_seleccionados[0]['periodo']} a {periodos_seleccionados[-1]['periodo']}" if periodos_seleccionados else "",
        "periodos": periodos_seleccionados,
        "fuente": "DIPRES via datos.gob.cl CKAN API",
        "descripcion": "Ejecución presupuestaria mensual del Gobierno Central, archivo más completo por mes",
    }, f, ensure_ascii=False, indent=2)

print(f"\nÍndice de ejecución: {idx_path}")
print(f"Periodos: {len(periodos_seleccionados)}")
if periodos_seleccionados:
    print(f"Rango: {periodos_seleccionados[0]['periodo']} → {periodos_seleccionados[-1]['periodo']}")
