const ingresosCategorias = ['tributarios', 'patrimoniales', 'de_operacion', 'transferencias', 'otros'];
const gastosCategorias = ['educacion', 'salud', 'seguridad_publica', 'desarrollo_urbano', 'medio_ambiente', 'cultura_y_deporte', 'administracion', 'otros'];

const START_YEAR = 1955;
const END_YEAR = 2024;

let SEED = 42;
function seededRandom() {
    let x = Math.sin(SEED++) * 10000;
    return x - Math.floor(x);
}

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

const growthIngresos = {};
const growthGastos = {};
for (const cat of ingresosCategorias) {
    growthIngresos[cat] = 0.03 + (seededRandom() - 0.5) * 0.02;
}
for (const cat of gastosCategorias) {
    growthGastos[cat] = 0.035 + (seededRandom() - 0.5) * 0.02;
}

const data = {};
for (let year = START_YEAR; year <= END_YEAR; year++) {
    const ingresos = {};
    const gastos = {};

    for (const cat of ingresosCategorias) {
        let value = baseIngresos[cat] * Math.pow(1 + growthIngresos[cat], year - START_YEAR);
        value *= 0.95 + seededRandom() * 0.1;
        ingresos[cat] = Math.round(value * 1_000_000);
    }

    for (const cat of gastosCategorias) {
        let value = baseGastos[cat] * Math.pow(1 + growthGastos[cat], year - START_YEAR);
        value *= 0.95 + seededRandom() * 0.1;
        gastos[cat] = Math.round(value * 1_000_000);
    }

    data[year] = { ingresos, gastos };
}

function getTotalIngresos(año) {
    const ingresos = data[año]?.ingresos;
    if (!ingresos) return 0;
    return Object.values(ingresos).reduce((sum, v) => sum + v, 0);
}

function getTotalGastos(año) {
    const gastos = data[año]?.gastos;
    if (!gastos) return 0;
    return Object.values(gastos).reduce((sum, v) => sum + v, 0);
}

function getPorcentajePartida(año, partida, tipo) {
    const yearData = data[año];
    if (!yearData) return 0;
    let partidaValor, total;
    if (tipo === 'ingresos') {
        const ingresos = yearData.ingresos;
        partidaValor = ingresos[partida] ?? 0;
        total = Object.values(ingresos).reduce((sum, v) => sum + v, 0);
    } else {
        const gastos = yearData.gastos;
        partidaValor = gastos[partida] ?? 0;
        total = Object.values(gastos).reduce((sum, v) => sum + v, 0);
    }
    return total > 0 ? (partidaValor / total) * 100 : 0;
}

function getYears() {
    return Object.keys(data).map(Number).sort((a, b) => b - a);
}

let lines = [];
lines.push('import type { PresupuestoMunicipal } from \'./types\';');
lines.push('');
lines.push('export const PRESUPUESTO_MUNICIPAL_EJEMPLO: Record<number, PresupuestoMunicipal> = {');
const yearsSorted = Object.keys(data).sort((a, b) => Number(a) - Number(b));
for (const year of yearsSorted) {
    const yearData = data[year];
    lines.push(`  ${year}: {`);
    lines.push('    ingresos: {');
    for (const cat of ingresosCategorias) {
        lines.push(`      ${cat}: ${yearData.ingresos[cat]}, // ${yearData.ingresos[cat].toLocaleString()} pesos`);
    }
    lines.push('    },');
    lines.push('    gastos: {');
    for (const cat of gastosCategorias) {
        lines.push(`      ${cat}: ${yearData.gastos[cat]}, // ${yearData.gastos[cat].toLocaleString()} pesos`);
    }
    lines.push('    }');
    lines.push('  },');
}
lines.push('};');
lines.push('');
lines.push('export function getTotalIngresos(año: number): number {');
lines.push('  const ingresos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año]?.ingresos;');
lines.push('  if (!ingresos) return 0;');
lines.push('  return Object.values(ingresos).reduce((sum, valor) => sum + valor, 0);');
lines.push('}');
lines.push('');
lines.push('export function getTotalGastos(año: number): number {');
lines.push('  const gastos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año]?.gastos;');
lines.push('  if (!gastos) return 0;');
lines.push('  return Object.values(gastos).reduce((sum, valor) => sum + valor, 0);');
lines.push('}');
lines.push('');
lines.push('export function getPorcentajePartida(');
lines.push('  año: number,');
lines.push('  partida: string,');
lines.push('  tipo: \'ingresos\' | \'gastos\'');
lines.push('): number {');
lines.push('  const datos = PRESUPUESTO_MUNICIPAL_EJEMPLO[año];');
lines.push('  if (!datos) return 0;');
lines.push('');
lines.push('  let partidaValor: number;');
lines.push('  let total: number;');
lines.push('');
lines.push('  if (tipo === \'ingresos\') {');
lines.push('    const ingresos = datos.ingresos;');
lines.push('    partidaValor = ingresos[partida as keyof typeof ingresos] ?? 0;');
lines.push('    total = Object.values(ingresos).reduce((sum, v) => sum + v, 0);');
lines.push('  } else {');
lines.push('    const gastos = datos.gastos;');
lines.push('    partidaValor = gastos[partida as keyof typeof gastos] ?? 0;');
lines.push('    total = Object.values(gastos).reduce((sum, v) => sum + v, 0);');
lines.push('  }');
lines.push('');
lines.push('  return total > 0 ? (partidaValor / total) * 100 : 0;');
lines.push('}');
lines.push('');
lines.push('export function getYears(): number[] {');
lines.push('  return Object.keys(PRESUPUESTO_MUNICIPAL_EJEMPLO).map(Number).sort((a, b) => b - a);');
lines.push('}');

const content = lines.join('\n');

const fs = require('fs');
const path = require('path');
const outPath = path.join(__dirname, 'src', 'pages', 'cuentas-claras', 'presupuestoData.ts');
fs.writeFileSync(outPath, content, 'utf8');
console.log(`Generated data file: ${outPath}`);