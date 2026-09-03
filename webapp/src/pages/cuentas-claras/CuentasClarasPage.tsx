import { Card, CardContent } from '@/components/ui/card';
import {
  Landmark,
  TrendingUp,
  BarChart3,
  Building2,
  DollarSign,
  MapPin,
  Loader2,
} from 'lucide-react';
import type { Enriquecido } from './presupuestoDataEnriquecido';
import { useState, useMemo, Suspense } from 'react';
import {
  PRESUPUESTO_MUNICIPAL_ENRIQUECIDO,
  getTotalIngresosEnriquecido,
  getTotalGastosEnriquecido,
  getPorcentajePartida,
  getYears,
  getGastoEducacionPorEstudiante,
  getGastoSaludPerCapita,
  getProporcionDeudaIngresos,
  getGastoRealAjustadoInflacion,
  getAccesoAguaPotable,
  getTasaAlfabetizacion,
  getGastoInfraestructuraPerCapita,
  getGastoViviendaPerCapita,
  getGastoTransportePublicoPerCapita,
} from './presupuestoDataEnriquecido';
import PoliticalPeriodSelector from '@/components/cuentas-claras/PoliticalPeriodSelector';
import ComparativeChart from '@/components/cuentas-claras/ComparativeChart';
import SimuladorPanel from '@/components/cuentas-claras/SimuladorPanel';
import ComunaSelector from '@/components/cuentas-claras/ComunaSelector';
import StaleDataBadge from '@/components/ui/stale-data-badge';
import { useSinimData } from './useSinimData';

type CategoriaClave = keyof Enriquecido['ingresos'] | keyof Enriquecido['gastos'];

const CATEGORIAS_INGRESOS = [
  { key: 'tributarios', nombre: 'Ingresos Tributarios', icon: DollarSign, color: 'text-blue-600' },
  { key: 'patrimoniales', nombre: 'Ingresos Patrimoniales', icon: Building2, color: 'text-green-600' },
  { key: 'de_operacion', nombre: 'Ingresos de Operación', icon: TrendingUp, color: 'text-purple-600' },
  { key: 'transferencias', nombre: 'Transferencias', icon: Landmark, color: 'text-amber-600' },
  { key: 'otros', nombre: 'Otros Ingresos', icon: DollarSign, color: 'text-gray-600' },
];

const CATEGORIAS_GASTOS = [
  { key: 'educacion', nombre: 'Educación', icon: Building2, color: 'text-blue-600' },
  { key: 'salud', nombre: 'Salud', icon: Building2, color: 'text-red-600' },
  { key: 'seguridad_publica', nombre: 'Seguridad Pública', icon: Building2, color: 'text-indigo-600' },
  { key: 'desarrollo_urbano', nombre: 'Desarrollo Urbano', icon: Building2, color: 'text-green-600' },
  { key: 'medio_ambiente', nombre: 'Medio Ambiente', icon: Building2, color: 'text-emerald-600' },
  { key: 'cultura_y_deporte', nombre: 'Cultura y Deporte', icon: Building2, color: 'text-pink-600' },
  { key: 'administracion', nombre: 'Administración', icon: Building2, color: 'text-yellow-600' },
  { key: 'otros', nombre: 'Otros Gastos', icon: Building2, color: 'text-gray-600' },
];

// Sub-componente que carga SINIM bajo demanda vía Suspense
function ComunaPanelSuspense({ comunaSel, onChange }: { comunaSel: string; onChange: (id: string) => void }) {
  const data = useSinimData() as Record<string, {
    comuna: string;
    poblacion: number;
  }> | undefined;
  const comunal = data?.[comunaSel];
  return (
    <>
      <ComunaSelector value={comunaSel} onChange={onChange} />
      {comunal && (
        <StaleDataBadge lastUpdated="2024-12-31" notifyOnChange={false} />
      )}
      {comunal && (
        <div className="ml-auto text-sm text-slate-600">
          <span className="font-medium">{comunal.comuna}</span>
          <span className="mx-2">·</span>
          <span>Población: {comunal.poblacion.toLocaleString('es-CL')}</span>
        </div>
      )}
    </>
  );
}

export default function CuentasClarasPage() {
  const [añoSeleccionado, setAñoSeleccionado] = useState(() => {
    const años = getYears();
    return años.length > 0 ? años[0] : new Date().getFullYear();
  });

  const [tipoVista, setTipoVista] = useState<'ingresos' | 'gastos'>('gastos');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<CategoriaClave>('educacion');
  const [periodoPolitico, setPeriodoPolitico] = useState<string>('2022-2025');
  const [simulacionActiva, setSimulacionActiva] = useState<boolean>(false);
  const [montosSimulados, setMontosSimulados] = useState<Record<string, number>>({});

  // SINIM: vista nacional vs vista por comuna
  const [vistaModo, setVistaModo] = useState<'nacional' | 'comunal'>('nacional');
  const [comunaSel, setComunaSel] = useState<string>('13101'); // Santiago por defecto

  const añosDisponibles = useMemo(() => getYears(), []);

  // Datos para el año seleccionado (usando dataset enriquecido)
  const datosAño = PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[añoSeleccionado]!;
  const totalIngresos = getTotalIngresosEnriquecido(añoSeleccionado);
  const totalGastos = getTotalGastosEnriquecido(añoSeleccionado);

  // Porcentaje de la categoría seleccionada
  const porcentaje = tipoVista === 'ingresos'
    ? getPorcentajePartida(añoSeleccionado, categoriaSeleccionada, 'ingresos')
    : getPorcentajePartida(añoSeleccionado, categoriaSeleccionada, 'gastos');

  const categorias = tipoVista === 'ingresos' ? CATEGORIAS_INGRESOS : CATEGORIAS_GASTOS;
  const categoriaObj = categorias.find(c => c.key === categoriaSeleccionada);

  // Datos para gráfico de barras (simplificado)
  const datosGrafico = tipoVista === 'ingresos'
    ? CATEGORIAS_INGRESOS.map(cat => ({
        name: cat.nombre,
        value: (datosAño.ingresos as Record<string, number>)[cat.key] ?? 0,
        color: cat.color,
      }))
    : CATEGORIAS_GASTOS.map(cat => ({
        name: cat.nombre,
        value: (datosAño.gastos as Record<string, number>)[cat.key] ?? 0,
        color: cat.color,
      }));

  // Ordenar de mayor a menor para el gráfico
  datosGrafico.sort((a, b) => b.value - a.value);

  // Datos para comparación (ejemplo: comparar con año anterior)
  const añoAnterior = añosDisponibles.find(a => a < añoSeleccionado);
  const datosAñoAnterior = añoAnterior ? PRESUPUESTO_MUNICIPAL_ENRIQUECIDO[añoAnterior]! : {} as Enriquecido;
  const datosComparacion = añoAnterior
    ? tipoVista === 'ingresos'
      ? CATEGORIAS_INGRESOS.map(cat => ({
          name: cat.nombre,
          value: (datosAñoAnterior.ingresos as Record<string, number>)[cat.key] ?? 0,
          color: cat.color,
        }))
      : CATEGORIAS_GASTOS.map(cat => ({
          name: cat.nombre,
          value: (datosAñoAnterior.gastos as Record<string, number>)[cat.key] ?? 0,
          color: cat.color,
        }))
    : [];

  // Manejar cambio de año
    const manejarCambioAño = (nuevoAño: number) => {
      setAñoSeleccionado(nuevoAño);
      // Resetear categoría al cambiar año para evitar inconsistencias
      setCategoriaSeleccionada(tipoVista === 'ingresos' ? 'tributarios' as CategoriaClave : 'educacion' as CategoriaClave);
      setSimulacionActiva(false);
      setMontosSimulados({});
    };

  // Manejar cambio de tipo (ingresos/gastos)
  const manejarCambioTipo = (nuevoTipo: 'ingresos' | 'gastos') => {
    setTipoVista(nuevoTipo);
    // Resetear categoría apropiada
    setCategoriaSeleccionada(nuevoTipo === 'ingresos' ? 'tributarios' : 'educacion');
    setSimulacionActiva(false);
    setMontosSimulados({});
  };

  // Manejar cambio de categoría
  const manejarCambioCategoria = (nuevaCategoria: CategoriaClave) => {
    setCategoriaSeleccionada(nuevaCategoria);
    setSimulacionActiva(false);
    setMontosSimulados({});
  };

  // Manejar cambio de periodo político
  const manejarCambioPeriodo = (nuevoPeriodo: string) => {
    setPeriodoPolitico(nuevoPeriodo);
  };

  // Manejar activación/desactivación de simulación
  const toggleSimulacion = () => {
    setSimulacionActiva(prev => {
      const next = !prev;
      if (!prev) {
        // We are turning on, so copy the current values
        const valoresActuales: Record<string, number> = {};
        categorias.forEach(cat => {
          const valor = tipoVista === 'ingresos'
            ? (datosAño.ingresos as Record<string, number>)[cat.key] ?? 0
            : (datosAño.gastos as Record<string, number>)[cat.key] ?? 0;
          valoresActuales[cat.key] = valor;
        });
        setMontosSimulados(valoresActuales);
      }
      return next;
    });
  };

  // Formatear número como moneda chilena
  const formatoCLP = (valor: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Cuentas Claras
        </h1>
        <p className="text-slate-500">
          Transparencia presupuestaria sin tecnicismos. La plata de todos, explicada para todos.
        </p>
        <p className="text-sm text-slate-500">
          Periodo político: {periodoPolitico}
        </p>
      </div>

      {/* Panel SINIM — Vista por Comuna */}
      <Card className="border-azul-200 bg-azul-50/30">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-azul-600" />
              <span className="font-semibold text-sm">Vista por comuna (SINIM)</span>
            </div>
            <div className="flex rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setVistaModo('nacional')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${vistaModo === 'nacional' ? 'bg-azul-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
              >
                Nacional
              </button>
              <button
                onClick={() => setVistaModo('comunal')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${vistaModo === 'comunal' ? 'bg-azul-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
              >
                Mi Comuna
              </button>
            </div>
            {vistaModo === 'comunal' && (
              <Suspense fallback={
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Cargando comunas...
                </div>
              }>
                <ComunaPanelSuspense comunaSel={comunaSel} onChange={setComunaSel} />
              </Suspense>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Header con información general y controles */}
      <Card className="bg-gradient-to-br from-azul-700 via-azul-600 to-azul-500 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <CardContent className="p-6 relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {/* Información general */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6" />
                <h2 className="text-xl font-bold">Presupuestos, sin letra chica</h2>
              </div>
              <p className="text-azul-100 text-sm max-w-md">
                Visualiza en lenguaje ciudadano cómo se gasta el dinero público en<br />
                tu comuna. Promesas vs presupuesto, eficiencia vs relato.
              </p>
            </div>

            {/* Selector de año */}
            <div className="space-y-2">
              <p className="text-azul-100 text-sm font-medium">Año Fiscal</p>
              <div className="relative">
                <button
                  onClick={() =>
                    manejarCambioAño(
                      añoSeleccionado === añosDisponibles[0]
                        ? añosDisponibles[añosDisponibles.length - 1]
                        : añosDisponibles[0]
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all text-left"
                >
                  <span>{añoSeleccionado}</span>
                </button>
              </div>
            </div>

            {/* Selector de periodo político */}
            <div className="space-y-2">
              <p className="text-azul-100 text-sm font-medium">Periodo Político</p>
              <PoliticalPeriodSelector onChange={manejarCambioPeriodo} />
            </div>

            {/* Indicador de saldo */}
            <div className="space-y-2">
              <p className="text-azul-100 text-sm font-medium">Balance Anual</p>
              <div className="text-2xl font-bold">
                {totalIngresos >= totalGastos ? (
                  <>
                    <span className="text-green-600">+{formatoCLP(totalIngresos - totalGastos)}</span>
                    <span className="ml-2">superávit</span>
                  </>
                ) : (
                  <>
                    <span className="text-red-600">{formatoCLP(totalGastos - totalIngresos)}</span>
                    <span className="ml-2">déficit</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas principales */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Total Ingresos */}
        <Card className="border shadow-sm">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Total Ingresos</h3>
                  <p className="text-xs opacity-60">Recaudación anual</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-right">{formatoCLP(totalIngresos)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Gastos */}
        <Card className="border shadow-sm">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-50 text-red-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Total Gastos</h3>
                  <p className="text-xs opacity-60">Ejecución anual</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-right">{formatoCLP(totalGastos)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selector de tipo y categoría */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-sm font-medium">Tipo:</p>
            <div className="flex gap-2">
              <button
                onClick={() => manejarCambioTipo('ingresos')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium
                  ${tipoVista === 'ingresos' ? 'bg-terracota-600 text-white' : 'border border-gray-300 bg-white'}`}
              >
                Ingresos
              </button>
              <button
                onClick={() => manejarCambioTipo('gastos')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium
                  ${tipoVista === 'gastos' ? 'bg-terracota-600 text-white' : 'border border-gray-300 bg-white'}`}
              >
                Gastos
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-sm font-medium">Categoría:</p>
            <div className="relative w-48">
              <button
                            onClick={() => {
                              const currentIndex = categorias.findIndex(c => c.key === categoriaSeleccionada);
                              const nextIndex = (currentIndex + 1) % categorias.length;
                              manejarCambioCategoria(categorias[nextIndex].key as CategoriaClave);
                            }}
                className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md text-left hover:bg-gray-50"
              >
                <span>{categoriaObj?.nombre || 'Seleccionar categoría'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Destacado: porcentaje de la categoría seleccionada */}
        <Card className="w-full sm:w-auto bg-gradient-to-r from-terracota-600 to-terracota-500 text-white border-0 shadow-lg">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-white text-sm font-medium opacity-90">
                  Participación de {categoriaObj?.nombre.toLowerCase() || 'categoría'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">{Math.round(porcentaje)}%</span>
                  <span className="text-white text-sm">del total {tipoVista === 'ingresos' ? 'de ingresos' : 'de gastos'}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                {porcentaje >= 75 ? (
                  <span className="text-white text-sm">✓</span>
                ) : (
                  <span className="text-white/50 text-sm">○</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de barras simplificado con comparación */}
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {tipoVista === 'ingresos' ? (
                <>
                  <BarChart3 className="w-5 h-5 text-terracota-600" />
                  Distribución de Ingresos
                </>
              ) : (
                <>
                  <BarChart3 className="w-5 h-5 text-terracota-600" />
                  Distribución de Gastos
                </>
              )}
            </h3>
            <p className="text-sm text-slate-500">{añoSeleccionado}</p>
          </div>

          <ComparativeChart
            currentData={datosGrafico}
            compareData={datosComparacion.length > 0 ? datosComparacion : null}
            title={tipoVista === 'ingresos' ? 'Comparativa de Ingresos' : 'Comparativa de Gastos'}
          />
        </CardContent>
      </Card>

      {/* Simulador "¿qué pasaría si...?" */}
      {simulacionActiva && (
        <Card className="border shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2 text-terracota-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                Simulador de Presupuesto
              </h3>
              <button
                onClick={toggleSimulacion}
                className="px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50"
              >
                Desactivar Simulador
              </button>
            </div>

            <SimuladorPanel
              tipo={tipoVista}
              categorias={categorias}
              currentAmounts={
                tipoVista === 'ingresos'
                  ? datosAño.ingresos
                  : datosAño.gastos
              }
              onChange={(amounts) => {
                setMontosSimulados(amounts);
              }}
            />
            {/* Mostrar total simulado si está activo */}
            <div className="pt-4 border-t">
              <p className="text-sm font-medium text-slate-600">
                Total actual:{' '}
                <span className="font-mono">
                  {Object.values(
                    tipoVista === 'ingresos' ? datosAño.ingresos : datosAño.gastos
                  ).reduce((a, b) => a + b, 0).toLocaleString('es-CL')}
                </span>
              </p>
              <p className="text-sm font-medium text-slate-600">
                Total simulado:{' '}
                <span className="font-mono">
                  {Object.values(montosSimulados).reduce((a, b) => a + b, 0).toLocaleString(
                    'es-CL'
                  )}
                </span>
              </p>
              {Math.abs(
                Object.values(montosSimulados).reduce((a, b) => a + b, 0) -
                  Object.values(
                    tipoVista === 'ingresos' ? datosAño.ingresos : datosAño.gastos
                  ).reduce((a, b) => a + b, 0)
              ) > 1 && (
                <p className="text-sm text-red-600">
                  Advertencia: El total simulado difiere del total original.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Indicadores de eficiencia y equidad (usando datos enriquecidos) */}
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2 text-terracota-600">
              <Building2 className="w-5 h-5 text-terracota-600" />
              Indicadores de Eficiencia y Equidad
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Gasto en educación por estudiante */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto en Educación por Estudiante</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoEducacionPorEstudiante(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                Promedio anual por estudiante matriculado
              </p>
            </div>

            {/* Gasto en salud per cápita */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto en Salud per Cápita</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoSaludPerCapita(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                Promedio anual por habitante
              </p>
            </div>

            {/* Proporción de deuda sobre ingresos */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Proporción Deuda / Ingresos</h4>
              <p className="text-2xl font-bold">
                {getProporcionDeudaIngresos(añoSeleccionado).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                Porcentaje de los ingresos destinados al servicio de la deuda
              </p>
            </div>

            {/* Gasto real ajustado por inflación */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto Real (ajustado por inflación)</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoRealAjustadoInflacion(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                En pesos de {new Date().getFullYear()} (base 2020)
              </p>
            </div>

            {/* Acceso a agua potable */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Acceso a Agua Potable</h4>
              <p className="text-2xl font-bold">
                {getAccesoAguaPotable(añoSeleccionado).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                Porcentaje de la población con acceso a agua potable
              </p>
            </div>

            {/* Tasa de alfabetización */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Tasa de Alfabetización</h4>
              <p className="text-2xl font-bold">
                {getTasaAlfabetizacion(añoSeleccionado).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500">
                Porcentaje de la población que sabe leer y escribir
              </p>
            </div>

            {/* Gasto en infraestructura per cápita */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto en Infraestructura per Cápita</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoInfraestructuraPerCapita(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                Gasto en desarrollo urbano dividido por población
              </p>
            </div>

            {/* Gasto en vivienda per cápita */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto en Vivienda per Cápita</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoViviendaPerCapita(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                Gasto estimado en vivienda dividido por población
              </p>
            </div>

            {/* Gasto en transporte público per cápita */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Gasto en Transporte Público per Cápita</h4>
              <p className="text-2xl font-bold">
                {formatoCLP(getGastoTransportePublicoPerCapita(añoSeleccionado))}
              </p>
              <p className="text-xs text-slate-500">
                Gasto estimado en transporte público dividido por población
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}