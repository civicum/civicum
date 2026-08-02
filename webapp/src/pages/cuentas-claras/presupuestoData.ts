import type { PresupuestoMunicipal } from './types';

const generateData = (): Record<number, PresupuestoMunicipal> => {
  const data: Record<number, PresupuestoMunicipal> = {};
  const startYear = 1955;
  const endYear = 2024;

  // Base values for 1955 (in millions of CLP, then convert to pesos)
  const baseIngresos = {
    tributarios: 100,
    patrimoniales: 20,
    de_operacion: 30,
    transferencias: 40,
    otros: 10
  };
  const baseGastos = {
    educacion: 50,
    salud: 40,
    seguridad_publica: 30,
    desarrollo_urbano: 25,
    medio_ambiente: 10,
    cultura_y_deporte: 15,
    administracion: 35,
    otros: 15
  };

  // Simple growth rates (can be adjusted)
  const growthIngresos = 0.03; // 3% annual
  const growthGastos = 0.035; // 3.5% annual

  for (let year = startYear; year <= endYear; year++) {
    const añosTranscurridos = year - startYear;
    const factorIngresos = Math.pow(1 + growthIngresos, añosTranscurridos);
    const factorGastos = Math.pow(1 + growthGastos, añosTranscurridos);

    const ingresos: PresupuestoMunicipal['ingresos'] = {
      tributarios: Math.round(baseIngresos.tributarios * factorIngresos * 1_000_000),
      patrimoniales: Math.round(baseIngresos.patrimoniales * factorIngresos * 1_000_000),
      de_operacion: Math.round(baseIngresos.de_operacion * factorIngresos * 1_000_000),
      transferencias: Math.round(baseIngresos.transferencias * factorIngresos * 1_000_000),
      otros: Math.round(baseIngresos.otros * factorIngresos * 1_000_000)
    };

    const gastos: PresupuestoMunicipal['gastos'] = {
      educacion: Math.round(baseGastos.educacion * factorGastos * 1_000_000),
      salud: Math.round(baseGastos.salud * factorGastos * 1_000_000),
      seguridad_publica: Math.round(baseGastos.seguridad_publica * factorGastos * 1_000_000),
      desarrollo_urbano: Math.round(baseGastos.desarrollo_urbano * factorGastos * 1_000_000),
      medio_ambiente: Math.round(baseGastos.medio_ambiente * factorGastos * 1_000_000),
      cultura_y_deporte: Math.round(baseGastos.cultura_y_deporte * factorGastos * 1_000_000),
      administracion: Math.round(baseGastos.administracion * factorGastos * 1_000_000),
      otros: Math.round(baseGastos.otros * factorGastos * 1_000_000)
    };

    data[year] = { ingresos, gastos };
  }

  return data;
};

export const PRESUPUESTO_MUNICIPAL_EJEMPLO: Record<number, PresupuestoMunicipal> = generateData();

export function getTotalIngresos(año: number): number {
  const ingresos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año]?.ingresos;
  if (!ingresos) return 0;
  return Object.values(ingresos).reduce((sum, valor) => sum + valor, 0);
}

export function getTotalGastos(año: number): number {
  const gastos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año]?.gastos;
  if (!gastos) return 0;
  return Object.values(gastos).reduce((sum, valor) => sum + valor, 0);
}

export function getPorcentajePartida(año: number, partida: string, tipo: 'ingresos' | 'gastos'): number {
  const datos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año];
  if (!datos) return 0;
  let partidaValor: number;
  let total: number;
  if (tipo === 'ingresos') {
    const ingresos = datos.ingresos;
    partidaValor = ingresos[partida as keyof typeof ingresos] ?? 0;
    total = Object.values(ingresos).reduce((sum, v) => sum + v, 0);
  } else {
    const gastos = datos.gastos;
    partidaValor = gastos[partida as keyof typeof gastos] ?? 0;
    total = Object.values(gastos).reduce((sum, v) => sum + v, 0);
  }
  return total > 0 ? (partidaValor / total) * 100 : 0;
}

export function getYears(): number[] {
  return Object.keys(PRESUPUESTO_MUNICIPAL_EJEMPLO).map(Number).sort((a, b) => b - a);
}