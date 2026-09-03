import type { PresupuestoMunicipal } from './types';

export interface Enriquecido extends PresupuestoMunicipal {
  poblacion: number; // total population
  tasaPobreza: number; // percentage (0-100)
  inflacionAnual: number; // percentage CPI change
  deudaPublica: number; // percentage of GDP
  matriculaTotal: number; // total students enrolled
  // derived indicators
  gastoEducacionPorEstudiante: number; // gastos.educacion / matriculaTotal
  gastoSaludPerCapita: number; // gastos.salud / poblacion
  proporcionDeudaIngresos: number; // debt as % of income (simplified)
  gastoRealAjustadoInflacion: number; // total gastos adjusted to base year 2020 using simple inflation accumulation
  // NEW INDICATORS
  gastoInfraestructuraPerCapita: number; // gastos.desarrollo_urbano / poblacion
  accesoAguaPotable: number; // percentage of population with access to potable water (0-100)
  tasaAlfabetizacion: number; // literacy rate percentage (0-100)
  gastoViviendaPerCapita: number; // synthetic housing expenditure per capita
  gastoTransportePublicoPerCapita: number; // synthetic public transport expenditure per capita
  gastoSeguridadPerCapita: number; // gastos.seguridad_publica / poblacion
  gastoCulturaDeportePerCapita: number; // gastos.cultura_y_deporte / poblacion
  ingresoPerCapita: number; // total ingresos / poblacion
  gastoTotalPerCapita: number; // total gastos / poblacion
  superavitDeficitPerCapita: number; // (total ingresos - total gastos) / poblacion
}

/**
 * Generated enriched socio-economic data for years 1955-2024.
 * Uses real data from World Bank where available, otherwise falls back to synthetic data.
 * TODO: Replace with official Chilean sources (INE, CASEN, Banco Central, MINEDUC, SISS).
 */
export const PRESUPUESTO_MUNICIPAL_ENRIQUECIDO: Record<number, Enriquecido> = {
  2024: {
    ingresos: {
      tributarios: 768720574,
      patrimoniales: 153744115,
      de_operacion: 230616172,
      transferencias: 307488230,
      otros: 76872057
    },
    gastos: {
      educacion: 536851462,
      salud: 429481169,
      seguridad_publica: 322110877,
      desarrollo_urbano: 268425731,
      medio_ambiente: 107370292,
      cultura_y_deporte: 161055439,
      administracion: 375796023,
      otros: 161055439
    },
    poblacion: 19764771,
    tasaPobreza: 11.2,
    inflacionAnual: 4.0,
    deudaPublica: 23.8,
    matriculaTotal: 178500,
    gastoEducacionPorEstudiante: 3007.57,
    gastoSaludPerCapita: 21.73,
    proporcionDeudaIngresos: 48.89,
    gastoRealAjustadoInflacion: 2019172669.9,
    gastoInfraestructuraPerCapita: 13.58,
    accesoAguaPotable: 70.35,
    tasaAlfabetizacion: 97.25,
    gastoViviendaPerCapita: 2.72,
    gastoTransportePublicoPerCapita: 2.04,
    gastoSeguridadPerCapita: 16.3,
    gastoCulturaDeportePerCapita: 8.15,
    ingresoPerCapita: 77.79,
    gastoTotalPerCapita: 119.51,
    superavitDeficitPerCapita: -41.73,
  },};

export function getTotalIngresosEnriquecido(year: number): number {
  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];
  if (!yearData) return 0;
  return Object.values(yearData.ingresos).reduce((sum, v) => sum + v, 0);
}

export function getTotalGastosEnriquecido(year: number): number {
  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];
  if (!yearData) return 0;
  return Object.values(yearData.gastos).reduce((sum, v) => sum + v, 0);
}

export function getPorcentajePartida(year: number, key: string, type: 'ingresos' | 'gastos'): number {
  const yearData = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year];
  if (!yearData) return 0;
  const total = type === 'ingresos'
    ? Object.values(yearData.ingresos).reduce((sum, v) => sum + v, 0)
    : Object.values(yearData.gastos).reduce((sum, v) => sum + v, 0);
  const value = type === 'ingresos'
    ? (yearData.ingresos as Record<string, number>)[key]
    : (yearData.gastos as Record<string, number>)[key];
  return total ? (value / total) * 100 : 0;
}

export function getYears(): number[] {
  return Object.keys(PRESUPUESTO_MUNICIPAL_ENRIQUECIDO).map(Number).sort((a, b) => a - b);
}

export function getPoblacion(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.poblacion ?? 0;
}

export function getGastoEducacionPorEstudiante(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoEducacionPorEstudiante ?? 0;
}

export function getGastoSaludPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoSaludPerCapita ?? 0;
}

export function getProporcionDeudaIngresos(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.proporcionDeudaIngresos ?? 0;
}

export function getGastoRealAjustadoInflacion(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoRealAjustadoInflacion ?? 0;
}

export function getAccesoAguaPotable(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.accesoAguaPotable ?? 0;
}

export function getTasaAlfabetizacion(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.tasaAlfabetizacion ?? 0;
}

export function getGastoInfraestructuraPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoInfraestructuraPerCapita ?? 0;
}

export function getGastoViviendaPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoViviendaPerCapita ?? 0;
}

export function getGastoTransportePublicoPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoTransportePublicoPerCapita ?? 0;
}

export function getGastoSeguridadPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoSeguridadPerCapita ?? 0;
}

export function getGastoCulturaDeportePerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoCulturaDeportePerCapita ?? 0;
}

export function getIngresoPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.ingresoPerCapita ?? 0;
}

export function getGastoTotalPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.gastoTotalPerCapita ?? 0;
}

export function getSuperavitDeficitPerCapita(year: number): number {
  return PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[year]?.superavitDeficitPerCapita ?? 0;
}
