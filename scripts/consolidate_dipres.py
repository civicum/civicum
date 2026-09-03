#!/usr/bin/env python3
"""
SNID — DIPRES CSV unificado final
Consolida los 114 periodos mensuales en un único CSV normalizado.
"""
import os
import csv
import json

RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/dipres")
INTERIM_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/interim")

idx_path = os.path.join(INTERIM_DIR, "dipres_ejecucion_indice.json")
with open(idx_path, "r", encoding="utf-8") as f:
    indice = json.load(f)

periodos = indice["periodos"]
print(f"Consolidando {len(periodos)} periodos...")

csv_path = os.path.join(INTERIM_DIR, "dipres_ejecucion_unificado.csv")
total_filas = 0
header_written = False

with open(csv_path, "w", newline="", encoding="utf-8") as fout:
    writer = csv.writer(fout)
    
    for i, periodo in enumerate(periodos):
        filepath = os.path.join(RAW_DIR, periodo["filename"])
        if not os.path.exists(filepath):
            print(f"  SKIP {periodo['periodo']} (archivo no existe)")
            continue
        
        try:
            with open(filepath, "r", encoding="utf-8-sig", errors="replace") as fin:
                reader = csv.reader(fin, delimiter=";")
                header = next(reader)
                
                if not header_written:
                    writer.writerow(header)
                    header_written = True
                
                filas_periodo = 0
                for row in reader:
                    writer.writerow(row)
                    filas_periodo += 1
                
                total_filas += filas_periodo
                print(f"  [{i+1}/{len(periodos)}] {periodo['periodo']} | {filas_periodo} filas | {os.path.getsize(filepath)} bytes")
        except Exception as e:
            print(f"  ERR {periodo['periodo']} | {str(e)[:60]}")

print(f"\nCSV unificado: {csv_path}")
print(f"Total filas de datos: {total_filas}")
print(f"Tamaño: {os.path.getsize(csv_path)} bytes")
