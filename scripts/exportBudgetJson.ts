import { PRESUPUESTO_MUNICIPAL_EJEMPLO } from '../webapp/src/pages/cuentas-claras/presupuestoData';
import { writeFileSync } from 'fs';

const data = {};
for (const [year, yearData] of Object.entries(PRESUPUESTO_MUNICIPAL_EJEMPLO)) {
  data[parseInt(year)] = {
    ingresos: yearData.ingresos,
    gastos: yearData.gastos,
  };
}

writeFileSync('tmp/socioeconomic/budget.json', JSON.stringify(data, null, 2));
console.log('Budget JSON written to tmp/socioeconomic/budget.json');