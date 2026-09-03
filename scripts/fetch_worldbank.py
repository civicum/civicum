import urllib.request
import json
import sys

def fetch_indicator(indicator, country='CHL', start=1955, end=2024):
    url = f"http://api.worldbank.org/v2/country/{country}/indicator/{indicator}?date={start}:{end}&format=json&per_page=10000"
    try:
        with urllib.request.urlopen(url) as response:
            data = json.load(response)
        if len(data) < 2 or not data[1]:
            return {}
        # data[1] is list of records
        result = {}
        for entry in data[1]:
            year = int(entry['date'])
            value = entry['value']
            # Skip null values
            if value is not None:
                result[year] = value
        return result
    except Exception as e:
        print(f"Error fetching {indicator}: {e}", file=sys.stderr)
        return {}

if __name__ == '__main__':
    indicators = {
        'population': 'SP.POP.TOTL',
        'poverty_national': 'SI.POV.NAHC',
        'inflation_annual_cpi': 'FP.CPI.TOTL.ZG',
        'gdp_nominal_usd': 'NY.GDP.MKTP.CD',
        'gdp_const_local': 'NY.GDP.MKTP.KD',  # constant local currency
    }
    all_data = {}
    for key, ind in indicators.items():
        print(f"Fetching {ind}...")
        data = fetch_indicator(ind)
        all_data[key] = data
        print(f"  Got {len(data)} years")
    # Write to JSON file
    with open('worldbank_data.json', 'w') as f:
        json.dump(all_data, f, indent=2)
    print("Data written to worldbank_data.json")