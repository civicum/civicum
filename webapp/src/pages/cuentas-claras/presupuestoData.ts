import type { PresupuestoMunicipal } from './types';

export const PRESUPUESTO_MUNICIPAL_EJEMPLO: Record<number, PresupuestoMunicipal> = {
  2023: {
    ingresos: {
      tributarios: 1850000000, // $1.850 millones
      patrimoniales: 320000000, // $320 millones
      de_operacion: 450000000, // $450 millones
      transferencias: 680000000, // $680 millones
      otros: 150000000 // $150 millones
    },
    gastos: {
      educacion: 980000000, // $980 millones
      salud: 750000000, // $750 millones
      seguridad_publica: 620000000, // $620 millones
      desarrollo_urbano: 540000000, // $540 millones
      medio_ambiente: 180000000, // $180 millones
      cultura_y_deporte: 120000000, // $120 millones
      administracion: 400000000, // $400 millones
      otros: 150000000 // $150 millones
    }
  },
  2022: {
    ingresos: {
      tributarios: 1720000000, // $1.720 millones
      patrimoniales: 290000000, // $290 millones
      de_operacion: 410000000, // $410 millones
      transferencias: 620000000, // $620 millones
      otros: 130000000 // $130 millones
    },
    gastos: {
      educacion: 920000000, // $920 millones
      salud: 700000000, // $700 millones
      seguridad_publica: 580000000, // $580 millones
      desarrollo_urbano: 500000000, // $500 millones
      medio_ambiente: 160000000, // $160 millones
      cultura_y_deporte: 110000000, // $110 millones
      administracion: 380000000, // $380 millones
      otros: 140000000 // $140 millones
    }
  }
};

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

export function getPorcentajePartida(
  año: number,
  partida: string,
  tipo: 'ingresos' | 'gastos'
): number {
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