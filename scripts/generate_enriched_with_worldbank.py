#!/usr/bin/env python3
"""
Generate enriched municipal data using real-world indicators from World Bank and other sources,
falling back to synthetic data where real data is missing.
"""
import json
import os
import urllib.request
import sys

# --- Synthetic data generators (copied from presupuestoData.ts and presupuestoDataEnriquecido.ts) ---
def generate_municipal_data(start_year=1955, end_year=2024):
    """Generate synthetic municipal income and expenses (in pesos CLP)."""
    base_income = {
        'tributarios': 100,
        'patrimoniales': 20,
        'de_operacion': 30,
        'transferencias': 40,
        'otros': 10
    }
    base_expense = {
        'educacion': 50,
        'salud': 40,
        'seguridad_publica': 30,
        'desarrollo_urbano': 25,
        'medio_ambiente': 10,
        'cultura_y_deporte': 15,
        'administracion': 35,
        'otros': 15
    }
    growth_income = 0.03   # 3% annual
    growth_expense = 0.035 # 3.5% annual

    data = {}
    for year in range(start_year, end_year + 1):
        years_elapsed = year - start_year
        factor_income = (1 + growth_income) ** years_elapsed
        factor_expense = (1 + growth_expense) ** years_elapsed

        income = {k: round(v * factor_income * 1_000_000) for k, v in base_income.items()}
        expense = {k: round(v * factor_expense * 1_000_000) for k, v in base_expense.items()}

        data[year] = {'ingresos': income, 'gastos': expense}
    return data

def compute_synthetic_socioeconomic(year, income_dict, expense_dict):
    """Compute socio-economic indicators for a given year using the original synthetic logic."""
    inflacion_anual = 0.04  # 4%
    indice = 1.0
    indice_por_ano = {}
    for y in range(1955, year + 1):
        indice_por_ano[y] = indice
        indice *= (1 + inflacion_anual)

    ingresos_totales = sum(income_dict.values())
    gastos_totales = sum(expense_dict.values())

    # Synthetic socio-economic data (same ranges as original)
    poblacion = 500000 + (year - 1955) * 10000  # grows from 500k to ~1.5M
    tasa_pobreza = max(5, 25 - (year - 1955) * 0.2)  # decreases slowly from 25% to ~5%
    inflacion = inflacion_anual * 100  # 4%
    deuda_publica = min(60, 10 + (year - 1955) * 0.2)  # increases slowly to 60%
    matricula_total = poblacion * 0.15  # assume 15% of population is enrolled

    # Derived indicators
    gasto_educacion_por_estudiante = expense_dict.get('educacion', 0) / matricula_total if matricula_total > 0 else 0
    gasto_salud_per_capita = expense_dict.get('salud', 0) / poblacion if poblacion > 0 else 0
    proporcion_deuda_ingresos = (expense_dict.get('salud', 0) + expense_dict.get('seguridad_publica', 0)) / ingresos_totales * 100 if ingresos_totales > 0 else 0
    gasto_real_ajustado_inflacion = gastos_totales / indice_por_ano[year] if indice_por_ano[year] > 0 else 0
    # NEW INDICATORS
    gasto_infraestructura_per_capita = expense_dict.get('desarrollo_urbano', 0) / poblacion if poblacion > 0 else 0
    acceso_agua_potable = min(95, 60 + (year - 1955) * 0.15)  # improves over time
    tasa_alfabetizacion = min(98, 80 + (year - 1955) * 0.25)  # improves over time
    gasto_vivienda_per_capita = expense_dict.get('desarrollo_urbano', 0) * 0.2 / poblacion if poblacion > 0 else 0  # assume 20% of urbano is vivienda
    gasto_transporte_publico_per_capita = expense_dict.get('desarrollo_urbano', 0) * 0.15 / poblacion if poblacion > 0 else 0  # assume 15% of urbano is transporte
    gasto_seguridad_per_capita = expense_dict.get('seguridad_publica', 0) / poblacion if poblacion > 0 else 0
    gasto_cultura_deporte_per_capita = expense_dict.get('cultura_y_deporte', 0) / poblacion if poblacion > 0 else 0
    ingreso_per_capita = ingresos_totales / poblacion if poblacion > 0 else 0
    gasto_total_per_capita = gastos_totales / poblacion if poblacion > 0 else 0
    superavit_deficit_per_capita = (ingresos_totales - gastos_totales) / poblacion if poblacion > 0 else 0

    return {
        'poblacion': round(poblacion),
        'tasaPobreza': round(tasa_pobreza, 2),
        'inflacionAnual': round(inflacion, 2),
        'deudaPublica': round(deuda_publica, 2),
        'matriculaTotal': round(matricula_total),
        'gastoEducacionPorEstudiante': round(gasto_educacion_por_estudiante, 2),
        'gastoSaludPerCapita': round(gasto_salud_per_capita, 2),
        'proporcionDeudaIngresos': round(proporcion_deuda_ingresos, 2),
        'gastoRealAjustadoInflacion': round(gasto_real_ajustado_inflacion, 2),
        'gastoInfraestructuraPerCapita': round(gasto_infraestructura_per_capita, 2),
        'accesoAguaPotable': round(acceso_agua_potable, 2),
        'tasaAlfabetizacion': round(tasa_alfabetizacion, 2),
        'gastoViviendaPerCapita': round(gasto_vivienda_per_capita, 2),
        'gastoTransportePublicoPerCapita': round(gasto_transporte_publico_per_capita, 2),
        'gastoSeguridadPerCapita': round(gasto_seguridad_per_capita, 2),
        'gastoCulturaDeportePerCapita': round(gasto_cultura_deporte_per_capita, 2),
        'ingresoPerCapita': round(ingreso_per_capita, 2),
        'gastoTotalPerCapita': round(gasto_total_per_capita, 2),
        'superavitDeficitPerCapita': round(superavit_deficit_per_capita, 2)
    }

# --- Load real data from World Bank JSON (generated by fetch_worldbank.py) ---
def load_worldbank_data(json_path='worldbank_data.json'):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    # The JSON structure is {indicator_key: {year: value, ...}}
    # We'll invert to {year: {indicator_key: value, ...}} for easier per-year lookup
    yearly = {}
    for indicator_key, year_dict in data.items():
        for year_str, value in year_dict.items():
            year = int(year_str)
            if year not in yearly:
                yearly[year] = {}
            yearly[year][indicator_key] = value
    return yearly

def main():
    # Paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    wb_path = os.path.join(base_dir, 'worldbank_data.json')
    output_path = os.path.join(base_dir, '..', 'webapp', 'src', 'pages', 'cuentas-claras', 'presupuestoDataEnriquecido.ts')

    # Load real data (World Bank)
    print('Loading World Bank data...')
    try:
        yearly_real = load_worldbank_data(wb_path)
        print(f'Loaded data for {len(yearly_real)} years')
    except Exception as e:
        print(f'Failed to load World Bank data: {e}')
        yearly_real = {}

    # Generate synthetic municipal data (income/expenses)
    print('Generating synthetic municipal income/expenses...')
    municipal_data = generate_municipal_data()

    # Build enriched dataset
    enriched = {}
    for year in range(1955, 2025):
        income = municipal_data[year]['ingresos']
        expense = municipal_data[year]['gastos']

        # Start with synthetic socio-economic values
        socio = compute_synthetic_socioeconomic(year, income, expense)

        # Override with real data where available
        if year in yearly_real:
            real = yearly_real[year]
            # Map our keys to the ones we stored in worldbank_data.json
            # We used keys: population, poverty_national, inflation_annual_cpi, gdp_nominal_usd, gdp_const
            if 'population' in real and real['population'] is not None:
                socio['poblacion'] = int(real['population'])
            if 'poverty_national' in real and real['poverty_national'] is not None:
                socio['tasaPobreza'] = float(real['poverty_national'])
            if 'inflation_annual_cpi' in real and real['inflation_annual_cpi'] is not None:
                # World Bank gives annual CPI change % (e.g., 3.045)
                socio['inflacionAnual'] = float(real['inflation_annual_cpi'])
            # Note: We don't have direct debt, water, literacy, etc. from World Bank in our current fetch
            # We could add more indicators later.
            # For now, we leave those as synthetic.

        # Recompute derived indicators in case we changed base inputs like poblacion
        poblacion = socio['poblacion']
        ingresos_totales = sum(income.values())
        gastos_totales = sum(expense.values())
        matricula_total = socio['matriculaTotal']  # This is still synthetic; we could make it real if we have enrollment data

        # Recompute derived indicators that depend on poblacion, income, expense
        socio['gastoEducacionPorEstudiante'] = round(expense.get('educacion', 0) / matricula_total if matricula_total > 0 else 0, 2)
        socio['gastoSaludPerCapita'] = round(expense.get('salud', 0) / poblacion if poblacion > 0 else 0, 2)
        socio['proporcionDeudaIngresos'] = round((expense.get('salud', 0) + expense.get('seguridad_publica', 0)) / ingresos_totales * 100 if ingresos_totales > 0 else 0, 2)
        # For inflation-adjusted real gastos, we need the cumulative inflation factor.
        # We'll recompute using the same method as synthetic but using the actual inflationAnual series? 
        # For simplicity, we'll keep the synthetic adjustment factor (based on fixed 4% inflation) for now.
        # TODO: Improve using actual CPI series to compute cumulative inflation.
        # We'll keep the synthetic one for now.
        socio['gastoRealAjustadoInflacion'] = round(gastos_totales / (1 + socio['inflacionAnual']/100) ** (year - 2020) if year >= 2020 else gastos_totales * (1 + socio['inflacionAnual']/100) ** (2020 - year), 2)
        # NEW INDICATORS
        socio['gastoInfraestructuraPerCapita'] = round(expense.get('desarrollo_urbano', 0) / poblacion if poblacion > 0 else 0, 2)
        socio['accesoAguaPotable'] = min(95, max(0, socio['accesoAguaPotable']))  # keep synthetic but clamp
        socio['tasaAlfabetizacion'] = min(98, max(0, socio['tasaAlfabetizacion']))  # keep synthetic but clamp
        socio['gastoViviendaPerCapita'] = round(expense.get('desarrollo_urbano', 0) * 0.2 / poblacion if poblacion > 0 else 0, 2)
        socio['gastoTransportePublicoPerCapita'] = round(expense.get('desarrollo_urbano', 0) * 0.15 / poblacion if poblacion > 0 else 0, 2)
        socio['gastoSeguridadPerCapita'] = round(expense.get('seguridad_publica', 0) / poblacion if poblacion > 0 else 0, 2)
        socio['gastoCulturaDeportePerCapita'] = round(expense.get('cultura_y_deporte', 0) / poblacion if poblacion > 0 else 0, 2)
        socio['ingresoPerCapita'] = round(ingresos_totales / poblacion if poblacion > 0 else 0, 2)
        socio['gastoTotalPerCapita'] = round(gastos_totales / poblacion if poblacion > 0 else 0, 2)
        socio['superavitDeficitPerCapita'] = round((ingresos_totales - gastos_totales) / poblacion if poblacion > 0 else 0, 2)

        # Build the final object for this year
        enriched[year] = {
            'ingresos': income,
            'gastos': expense,
            **socio
        }

    print(f'Enriched data has {len(enriched)} years')
    print(f'Years: {min(enriched.keys())} to {max(enriched.keys())}')

    # Write the output file
    print(f'Writing enriched data to {output_path}...')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('''import type { PresupuestoMunicipal } from './types';\n\n''')
        f.write('export interface Enriquecido extends PresupuestoMunicipal {\n')
        f.write('  poblacion: number; // total population\n')
        f.write('  tasaPobreza: number; // percentage (0-100)\n')
        f.write('  inflacionAnual: number; // percentage CPI change\n')
        f.write('  deudaPublica: number; // percentage of GDP\n')
        f.write('  matriculaTotal: number; // total students enrolled\n')
        f.write('  // derived indicators\n')
        f.write('  gastoEducacionPorEstudiante: number; // gastos.educacion / matriculaTotal\n')
        f.write('  gastoSaludPerCapita: number; // gastos.salud / poblacion\n')
        f.write('  proporcionDeudaIngresos: number; // debt as % of income (simplified)\n')
        f.write('  gastoRealAjustadoInflacion: number; // total gastos adjusted to base year 2020 using simple inflation accumulation\n')
        f.write('  // NEW INDICATORS\n')
        f.write('  gastoInfraestructuraPerCapita: number; // gastos.desarrollo_urbano / poblacion\n')
        f.write('  accesoAguaPotable: number; // percentage of population with access to potable water (0-100)\n')
        f.write('  tasaAlfabetizacion: number; // literacy rate percentage (0-100)\n')
        f.write('  gastoViviendaPerCapita: number; // synthetic housing expenditure per capita\n')
        f.write('  gastoTransportePublicoPerCapita: number; // synthetic public transport expenditure per capita\n')
        f.write('  gastoSeguridadPerCapita: number; // gastos.seguridad_publica / poblacion\n')
        f.write('  gastoCulturaDeportePerCapita: number; // gastos.cultura_y_deporte / poblacion\n')
        f.write('  ingresoPerCapita: number; // total ingresos / poblacion\n')
        f.write('  gastoTotalPerCapita: number; // total gastos / poblacion\n')
        f.write('  superavitDeficitPerCapita: number; // (total ingresos - total gastos) / poblacion\n')
        f.write('}\n\n')
        f.write('/**\n')
        f.write(' * Generated enriched socio-economic data for years 1955-2024.\n')
        f.write(' * Uses real data from World Bank where available, otherwise falls back to synthetic data.\n')
        f.write(' * TODO: Replace with official Chilean sources (INE, CASEN, Banco Central, MINEDUC, SISS).\n')
        f.write(' */\n')
        f.write('export const PRESUPUESTO_MUNICIPAL_ENRIQUECIDO: Record<number, Enriquecido> = {\n')
        # Sort years
        for year in sorted(enriched.keys()):
            data = enriched[year]
            # Format the object as TypeScript
            lines = [f'  {year}: {{']
            # ingresos
            inc = data['ingresos']
            lines.append('    ingresos: {')
            lines.append(f'      tributarios: {inc["tributarios"]},')
            lines.append(f'      patrimoniales: {inc["patrimoniales"]},')
            lines.append(f'      de_operacion: {inc["de_operacion"]},')
            lines.append(f'      transferencias: {inc["transferencias"]},')
            lines.append(f'      otros: {inc["otros"]}')
            lines.append('    },')
            # gastos
            exp = data['gastos']
            lines.append('    gastos: {')
            lines.append(f'      educacion: {exp["educacion"]},')
            lines.append(f'      salud: {exp["salud"]},')
            lines.append(f'      seguridad_publica: {exp["seguridad_publica"]},')
            lines.append(f'      desarrollo_urbano: {exp["desarrollo_urbano"]},')
            lines.append(f'      medio_ambiente: {exp["medio_ambiente"]},')
            lines.append(f'      cultura_y_deporte: {exp["cultura_y_deporte"]},')
            lines.append(f'      administracion: {exp["administracion"]},')
            lines.append(f'      otros: {exp["otros"]}')
            lines.append('    },')
            # socio-economic fields (in the order of the interface)
            socio_fields = [
                ('poblacion', f'{data["poblacion"]}'),
                ('tasaPobreza', f'{data["tasaPobreza"]}'),
                ('inflacionAnual', f'{data["inflacionAnual"]}'),
                ('deudaPublica', f'{data["deudaPublica"]}'),
                ('matriculaTotal', f'{data["matriculaTotal"]}'),
                ('gastoEducacionPorEstudiante', f'{data["gastoEducacionPorEstudiante"]}'),
                ('gastoSaludPerCapita', f'{data["gastoSaludPerCapita"]}'),
                ('proporcionDeudaIngresos', f'{data["proporcionDeudaIngresos"]}'),
                ('gastoRealAjustadoInflacion', f'{data["gastoRealAjustadoInflacion"]}'),
                ('gastoInfraestructuraPerCapita', f'{data["gastoInfraestructuraPerCapita"]}'),
                ('accesoAguaPotable', f'{data["accesoAguaPotable"]}'),
                ('tasaAlfabetizacion', f'{data["tasaAlfabetizacion"]}'),
                ('gastoViviendaPerCapita', f'{data["gastoViviendaPerCapita"]}'),
                ('gastoTransportePublicoPerCapita', f'{data["gastoTransportePublicoPerCapita"]}'),
                ('gastoSeguridadPerCapita', f'{data["gastoSeguridadPerCapita"]}'),
                ('gastoCulturaDeportePerCapita', f'{data["gastoCulturaDeportePerCapita"]}'),
                ('ingresoPerCapita', f'{data["ingresoPerCapita"]}'),
                ('gastoTotalPerCapita', f'{data["gastoTotalPerCapita"]}'),
                ('superavitDeficitPerCapita', f'{data["superavitDeficitPerCapita"]}')
            ]
            for name, val in socio_fields:
                lines.append(f'    {name}: {val},')
            lines.append('  },')
        f.write('\n'.join(lines))
        f.write('};\n\n')
        # Now write the helper functions
        f.write('''export function getTotalIngresosEnriquecido(year: number): number {\n  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];\n  if (!yearData) return 0;\n  return Object.values(yearData.ingresos).reduce((sum, v) => sum + v, 0);\n}\n\nexport function getTotalGastosEnriquecido(year: number): number {\n  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];\n  if (!yearData) return 0;\n  return Object.values(yearData.gastos).reduce((sum, v) => sum + v, 0);\n}\n\nexport function getPorcentajePartida(year: number, key: string, type: 'ingresos' | 'gastos'): number {\n  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];\n  if (!yearData) return 0;\n  const total = type === 'ingresos'\n    ? Object.values(yearData.ingresos).reduce((sum, v) => sum + v, 0)\n    : Object.values(yearData.gastos).reduce((sum, v) => sum + v, 0);\n  const value = type === 'ingresos'\n    ? (yearData.ingresos as Record<string, number>)[key]\n    : (yearData.gastos as Record<string, number>)[key];\n  return total ? (value / total) * 100 : 0;\n}\n\nexport function getYears(): number[] {\n  return Object.keys(PRESUPUESTO_MUNICIPAL_ENRIQUECIDO).map(Number).sort((a, b) => a - b);\n}\n\nexport function getPoblacion(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.poblacion ?? 0;\n}\n\nexport function getGastoEducacionPorEstudiante(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoEducacionPorEstudiante ?? 0;\n}\n\nexport function getGastoSaludPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoSaludPerCapita ?? 0;\n}\n\nexport function getProporcionDeudaIngresos(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.proporcionDeudaIngresos ?? 0;\n}\n\nexport function getGastoRealAjustadoInflacion(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoRealAjustadoInflacion ?? 0;\n}\n\nexport function getAccesoAguaPotable(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.accesoAguaPotable ?? 0;\n}\n\nexport function getTasaAlfabetizacion(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.tasaAlfabetizacion ?? 0;\n}\n\nexport function getGastoInfraestructuraPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoInfraestructuraPerCapita ?? 0;\n}\n\nexport function getGastoViviendaPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoViviendaPerCapita ?? 0;\n}\n\nexport function getGastoTransportePublicoPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoTransportePublicoPerCapita ?? 0;\n}\n\nexport function getGastoSeguridadPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoSeguridadPerCapita ?? 0;\n}\n\nexport function getGastoCulturaDeportePerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoCulturaDeportePerCapita ?? 0;\n}\n\nexport function getIngresoPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.ingresoPerCapita ?? 0;\n}\n\nexport function getGastoTotalPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoTotalPerCapita ?? 0;\n}\n\nexport function getSuperavitDeficitPerCapita(year: number): number {\n  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.superavitDeficitPerCapita ?? 0;\n}\n''')
    print('Done.')

if __name__ == '__main__':
    main()