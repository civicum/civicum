#!/usr/bin/env python3
"""
SNID — Normalizador de datos SISS desde datos.gob.cl
Procesa los 47 archivos Excel de SISS y extrae un catálogo estructurado.
"""
import os
import json
import hashlib

RAW_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/raw/siss")
INTERIM_DIR = os.path.expanduser("~/Proyectos/civicum/webapp/src/data/interim")
os.makedirs(INTERIM_DIR, exist_ok=True)

# Mapeo de nombres de archivo -> categoría legible
CATEGORIAS = {
    "cuadro-002": "Empresas sanitarias",
    "cuadro-003": "Clientes por destino inmueble",
    "cuadro-004": "Accionistas y controladores",
    "cuadro-005": "Cobertura agua potable urbana",
    "cuadro-006": "Cobertura tratamiento aguas servidas",
    "cuadro-007": "Agua potable rural",
    "cuadro-008": "Consumo agua potable",
    "cuadro-009": "Dotación agua potable",
    "cuadro-010": "Fuentes abastecimiento",
    "cuadro-013": "Longitud redes distribución",
    "cuadro-014": "Plantas tratamiento nuevas",
    "cuadro-016": "Empleados sector sanitario",
    "cuadro-019": "Cobertura subsidios",
    "cuadro-021": "Cumplimiento plan desarrollo",
    "cuadro-023": "Inversiones infraestructura",
    "cuadro-025": "Inversiones proyectadas 1 año",
    "cuadro-026": "Inversiones proyectadas 2-6 años",
    "cuadro-033": "Agua no contabilizada",
    "cuadro-036": "Productividad",
    "cuadro-037": "Ingresos operacionales",
    "cuadro-038": "Costos operación",
    "cuadro-039": "Resultados",
    "cuadro-040": "Ganancias y pérdidas",
    "cuadro-041": "Activos",
    "cuadro-042": "Intangibles",
    "cuadro-043": "Patrimonio y endeudamiento",
    "cuadro-044": "Rentabilidad",
    "cuadro-045": "Ranking calidad agua potable",
    "cuadro-046": "Resultados calidad agua por empresa",
    "cuadro-047": "Continuidad servicio agua potable",
    "cuadro-049": "Calidad presión",
    "cuadro-051": "Continuidad alcantarillado",
    "cuadro-052": "Calidad tratamiento aguas servidas",
    "cuadro-053": "Controles directos plantas",
    "cuadro-054": "Exactitud cobro y reembolsos",
    "cuadro-055": "Reembolsos por motivo",
    "cuadro-056": "Respuesta a reclamos",
    "cuadro-057": "Reclamos recibidos por empresas",
    "cuadro-058": "Reclamos por motivo",
    "cuadro-059": "Reclamos por resultado",
    "cuadro-060": "Reclamos SISS por motivo",
    "cuadro-061": "Reclamos SISS por resultado",
    "cuadro-062": "Estado de grifos",
    "cuadro-064": "Cantidad y edad medidores",
    "cuadro-065": "Ranking medidores operativos",
    "cuadro-068": "Sanciones empresas sanitarias",
    "cuadro-071": "Proyectos SEIA",
}

catalogo = []

files = sorted(os.listdir(RAW_DIR))
print(f"Procesando {len(files)} archivos SISS...")

for f in files:
    filepath = os.path.join(RAW_DIR, f)
    if not os.path.isfile(filepath):
        continue
    
    size = os.path.getsize(filepath)
    
    # Hash SHA256
    with open(filepath, "rb") as fh:
        file_hash = hashlib.sha256(fh.read()).hexdigest()[:16]
    
    # Extraer cuadro numero
    cuadro_key = ""
    for key in CATEGORIAS:
        if key in f:
            cuadro_key = key
            break
    
    categoria = CATEGORIAS.get(cuadro_key, "Otros")
    
    # Detectar formato
    ext = os.path.splitext(f)[1].lower().lstrip(".")
    
    catalogo.append({
        "filename": f,
        "categoria": categoria,
        "cuadro": cuadro_key,
        "format": ext,
        "size_bytes": size,
        "hash_sha256_16": file_hash,
        "path": f"webapp/src/data/raw/siss/{f}",
    })
    
    print(f"  OK  {f[:70]:70s} | {categoria}")

# Guardar catálogo
cat_path = os.path.join(INTERIM_DIR, "siss_catalog.json")
with open(cat_path, "w", encoding="utf-8") as f:
    json.dump(catalogo, f, ensure_ascii=False, indent=2)

# Resumen por categoría
from collections import Counter
cat_counts = Counter(item["categoria"] for item in catalogo)

resumen = {
    "total_archivos": len(catalogo),
    "categorias_unicas": len(cat_counts),
    "por_categoria": dict(cat_counts),
    "formato": "XLSX (Excel)",
    "fuente": "SISS via datos.gob.cl CKAN API",
    "fecha_descarga": "2026-08-07",
}

resumen_path = os.path.join(INTERIM_DIR, "siss_resumen.json")
with open(resumen_path, "w", encoding="utf-8") as f:
    json.dump(resumen, f, ensure_ascii=False, indent=2)

print(f"\nCatálogo: {cat_path}")
print(f"Resumen: {resumen_path}")
print(f"Total: {len(catalogo)} archivos, {len(cat_counts)} categorías")
