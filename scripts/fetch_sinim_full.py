"""
Descarga COMPLETA de las 345 comunas SINIM (ficha comunal).
Lee el catálogo existente y descarga cada HTML + parsea a JSON.
Batching: 20 comunas por lote con pausa de 0.4s entre cada una.
Persiste progreso para reanudar si se interrumpe.
"""

import urllib.request
import ssl
import json
import os
import re
import time
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE = os.path.dirname(os.path.abspath(__file__))
RAW_DIR = os.path.join(BASE, '..', 'webapp', 'src', 'data', 'raw', 'sinim')
INTERIM_DIR = os.path.join(BASE, '..', 'webapp', 'src', 'data', 'interim')
PROGRESS_PATH = os.path.join(RAW_DIR, '_download_progress.json')
CATALOG_PATH = os.path.join(RAW_DIR, 'sinim_comunas_catalog.json')

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(INTERIM_DIR, exist_ok=True)

# Códigos de región por prefijo de comuna (2 primeros dígitos del código comunal → código región SINIM)
# Extraído del select de regiones
REGION_CODE = {
    'XV': '531', 'I': '119', 'II': '120', 'III': '121', 'IV': '122', 'V': '123',
    'VI': '124', 'VII': '125', 'VIII': '126', 'IX': '127', 'XIV': '530', 'X': '128',
    'XI': '129', 'XII': '130', 'RM': '131', 'XVI': '707',
}

def comuna_to_region(comuna_id):
    """Prefijo de comuna (2 dígitos) → código región SINIM."""
    pref = int(comuna_id[:2])
    mapping = {
        15: '531', 1: '119', 2: '120', 3: '121', 4: '122', 5: '123',
        6: '124', 7: '125', 8: '126', 9: '127', 14: '530', 10: '128',
        11: '129', 12: '130', 13: '131', 16: '707',
    }
    return mapping.get(pref, '131')

def download_ficha(comuna_id):
    region = comuna_to_region(comuna_id)
    url = f"http://datos.sinim.gov.cl/impresion_ficha_comunal.php?municipio={comuna_id}&provincia={region}&region={region}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    resp = urllib.request.urlopen(req, timeout=25, context=ctx)
    return resp.read().decode('utf-8', errors='replace')

def parse_ficha(html, comuna_id):
    data = {"comuna_id": comuna_id, "comuna": "", "indicadores": {}}
    m = re.search(r'<h1[^>]*>([^<]+)</h1>', html)
    if m:
        data["comuna"] = re.sub(r'\s+', ' ', m.group(1).strip())
    tables = re.findall(r'<table[^>]*class="tabla_datos"[^>]*>(.*?)</table>', html, re.S | re.I)
    for table in tables:
        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', table, re.S | re.I)
        for row in rows:
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.S | re.I)
            cells = [re.sub(r'<[^>]+>', '', c).strip() for c in cells]
            if len(cells) >= 2 and cells[0]:
                data["indicadores"][cells[0]] = cells[1:]
    return data

def main():
    with open(CATALOG_PATH, 'r', encoding='utf-8') as f:
        catalog = json.load(f)
    all_ids = sorted(catalog.keys())
    print(f"Total comunas en catálogo: {len(all_ids)}")

    # Cargar progreso previo (si existe)
    progress = {}
    if os.path.exists(PROGRESS_PATH):
        with open(PROGRESS_PATH, 'r', encoding='utf-8') as f:
            progress = json.load(f)
    done = set(progress.get('done', []))
    failed = progress.get('failed', {})
    print(f"Ya descargadas: {len(done)} | Previos errores: {len(failed)}")

    tout_salir = False
    start = time.time()
    for i, cid in enumerate(all_ids):
        if cid in done:
            continue
        try:
            html = download_ficha(cid)
            # Guardar raw HTML
            name = catalog[cid].lower().replace(' ', '_').replace('é','e').replace('í','i').replace('á','a').replace('ó','o').replace('ú','u').replace('ñ','n')
            with open(os.path.join(RAW_DIR, f'ficha_{cid}_{name}.html'), 'w', encoding='utf-8') as f:
                f.write(html)
            done.add(cid)
            if (len(done)) % 25 == 0:
                print(f"  [{len(done)}/{len(all_ids)}] ...{(time.time()-start):.0f}s")
                # persistir progreso
                with open(PROGRESS_PATH, 'w', encoding='utf-8') as f:
                    json.dump({'done': sorted(done), 'failed': failed}, f)
        except KeyboardInterrupt:
            print("\nInterrumpido por usuario")
            tout_salir = True
        except Exception as e:
            failed[cid] = str(e)[:200]
        time.sleep(0.4)
        if tout_salir:
            break

    # Persistir progreso final
    with open(PROGRESS_PATH, 'w', encoding='utf-8') as f:
        json.dump({'done': sorted(done), 'failed': failed}, f, ensure_ascii=False, indent=2)

    # Parsear TODAS las fichas descargadas a un único JSON consolidado
    all_data = {}
    for cid in done:
        name = catalog[cid].lower().replace(' ', '_').replace('é','e').replace('í','i').replace('á','a').replace('ó','o').replace('ú','u').replace('ñ','n')
        path = os.path.join(RAW_DIR, f'ficha_{cid}_{name}.html')
        if not os.path.exists(path):
            continue
        with open(path, 'r', encoding='utf-8') as f:
            html = f.read()
        all_data[cid] = parse_ficha(html, cid)

    out_path = os.path.join(INTERIM_DIR, 'sinim_fichas_comunales.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"\n=== RESUMEN FINAL ===")
    print(f"Descargadas OK: {len(done)}/{len(all_ids)}")
    print(f"Errores: {len(failed)}")
    print(f"JSON consolidado: {out_path} ({os.path.getsize(out_path)//1024} KB)")

if __name__ == '__main__':
    main()
