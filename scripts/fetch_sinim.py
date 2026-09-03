"""
Conector SUBDERE SINIM — Ficha Comunal
Descarga y normaliza datos municipales del portal SINIM (datos.sinim.gov.cl)

Estrategia:
1. Descargar ficha comunal HTML de cada municipio (346 comunas)
2. Parsear tablas HTML para extraer indicadores
3. Normalizar a JSON estructurado para frontend

Fuente: http://datos.sinim.gov.cl/impresion_ficha_comunal.php?municipio=ID
"""

import urllib.request
import ssl
import re
import json
import os
import time
from html.parser import HTMLParser

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

RAW_DIR = os.path.join(os.path.dirname(__file__), '..', 'webapp', 'src', 'data', 'raw', 'sinim')
INTERIM_DIR = os.path.join(os.path.dirname(__file__), '..', 'webapp', 'src', 'data', 'interim')

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(INTERIM_DIR, exist_ok=True)

# 346 comunas con IDs SINIM (extraídos del select de ficha_comunal.php)
# Formato: "ID: NOMBRE" (ID de 5 dígitos)
COMUNAS_SINIM = {
    "05602": "ALGARROBO", "13502": "ALHUÉ", "08314": "ALTO BIOBÍO",
    "03302": "ALTO DEL CARMEN", "01101": "ANTOFAGASTA", "12201": "ANCUD",
    # ... se cargaran completas desde el HTML
}

def download_ficha(municipio_id, region_id="131"):
    """Descarga la ficha comunal HTML de un municipio."""
    url = f"http://datos.sinim.gov.cl/impresion_ficha_comunal.php?municipio={municipio_id}&provincia={region_id}&region={region_id}"
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    })
    resp = urllib.request.urlopen(req, timeout=20, context=ctx)
    return resp.read().decode('utf-8', errors='replace')

def parse_ficha(html):
    """Parsea el HTML de la ficha comunal y extrae indicadores estructurados."""
    data = {"comuna": "", "region": "", "indicadores": {}}
    
    # Extraer nombre comuna
    m = re.search(r'<h1[^>]*>([^<]+)</h1>', html)
    if m:
        data["comuna"] = m.group(1).strip()
    
    # Extraer tablas de datos
    tables = re.findall(r'<table[^>]*class="tabla_datos"[^>]*>(.*?)</table>', html, re.S | re.I)
    for table in tables:
        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', table, re.S | re.I)
        for row in rows:
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.S | re.I)
            cells = [re.sub(r'<[^>]+>', '', c).strip() for c in cells]
            if len(cells) >= 2 and cells[0]:
                key = cells[0]
                values = cells[1:]
                data["indicadores"][key] = values
    
    return data

def get_all_comunas():
    """Obtiene la lista completa de 346 comunas desde el portal SINIM."""
    url = "http://datos.sinim.gov.cl/ficha_comunal.php"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    resp = urllib.request.urlopen(req, timeout=15, context=ctx)
    html = resp.read().decode('utf-8', errors='replace')
    
    # Extraer options del select municipio
    select = re.search(r'<select[^>]*name="municipio"[^>]*>(.*?)</select>', html, re.S | re.I)
    if not select:
        print("ERROR: No se encontró select de municipios")
        return {}
    
    options = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>([^<]*)</option>', select.group(1), re.I)
    comunas = {}
    for code, name in options:
        code = code.strip()
        if code and len(code) == 5:
            # Limpiar nombre: "ALGARROBO - 05602" → "ALGARROBO"
            clean_name = name.split(" - ")[0].strip()
            comunas[code] = clean_name
    
    return comunas

def main():
    print("=== CONECTOR SUBDERE SINIM ===\n")
    
    # 1. Obtener lista completa de comunas
    print("1. Obteniendo lista de comunas...")
    comunas = get_all_comunas()
    print(f"   {len(comunas)} comunas encontradas")
    
    # Guardar catálogo de comunas
    catalog_path = os.path.join(RAW_DIR, 'sinim_comunas_catalog.json')
    with open(catalog_path, 'w', encoding='utf-8') as f:
        json.dump(comunas, f, ensure_ascii=False, indent=2)
    print(f"   Catálogo guardado: {catalog_path}")
    
    # 2. Descargar ficha comunal de las primeras 5 comunas (prueba)
    print(f"\n2. Descargando fichas comunales (muestra de 5)...")
    muestra = list(comunas.items())[:5]
    all_data = {}
    
    for code, name in muestra:
        print(f"   [{code}] {name}...", end=" ")
        try:
            html = download_ficha(code)
            # Guardar HTML raw
            html_path = os.path.join(RAW_DIR, f'ficha_{code}_{name.lower().replace(" ","_")}.html')
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(html)
            
            # Parsear
            data = parse_ficha(html)
            data["comuna_id"] = code
            all_data[code] = data
            print(f"OK ({len(data['indicadores'])} indicadores)")
        except Exception as e:
            print(f"ERROR: {e}")
        
        time.sleep(0.5)  # Rate limit友好
    
    # 3. Guardar datos normalizados
    print(f"\n3. Guardando datos normalizados...")
    output_path = os.path.join(INTERIM_DIR, 'sinim_fichas_comunales.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"   {len(all_data)} comunas procesadas → {output_path}")
    
    # 4. Resumen
    print(f"\n=== RESUMEN ===")
    print(f"Comunas catalogadas: {len(comunas)}")
    print(f"Fichas descargadas: {len(all_data)}")
    if all_data:
        sample = list(all_data.values())[0]
        print(f"Indicadores por comuna: {len(sample['indicadores'])}")
        print(f"Ejemplo indicadores: {list(sample['indicadores'].keys())[:10]}")
    
    print(f"\nPróximo paso: Descargar las {len(comunas)} comunas restantes")
    print(f"Comando completo: python scripts/fetch_sinim_full.py")

if __name__ == '__main__':
    main()
