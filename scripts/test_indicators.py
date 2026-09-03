import urllib.request, json, sys

def fetch(indicator):
    url = f"http://api.worldbank.org/v2/country/CHL/indicator/{indicator}?date=1955:2024&format=json&per_page=20000"
    try:
        with urllib.request.urlopen(url) as resp:
            data = json.load(resp)
        if len(data) < 2:
            return {}
        result = {}
        for entry in data[1]:
            if entry['value'] is not None:
                result[int(entry['date'])] = entry['value']
        return result
    except Exception as e:
        print(f"Error {indicator}: {e}", file=sys.stderr)
        return {}

indicators = {
    'population': 'SP.POP.TOTL',
    'poverty': 'SI.POV.NAHC',
    'inflation': 'FP.CPI.TOTL.ZG',
    'debt_gdp': 'GC.DOD.TOTL.GD.ZS',
    'water': 'SH.H2O.SAFE.ZS',
    'literacy': 'SE.ADT.LITR.ZS',
    'gdp_nominal': 'NY.GDP.MKTP.CD',
    'gdp_const': 'NY.GDP.MKTP.KD',
}

for name, ind in indicators.items():
    print(f'Fetching {name} ({ind})...')
    d = fetch(ind)
    print(f'  Got {len(d)} years')
    if d:
        # show first and last 5 years
        years = sorted(d.keys())
        print(f'    Range: {years[0]} - {years[-1]}')
        print(f'    Sample 2020: {d.get(2020, "N/A")}')
    print()