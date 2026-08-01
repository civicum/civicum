import { Card, CardContent } from '@/components/ui/card';
import {
  Landmark,
  TrendingUp,
  BarChart3,
  Building2,
  DollarSign,
  GraduationCap,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { 
  PRESUPUESTO_MUNICIPAL_EJEMPLO, 
  getTotalIngresos, 
  getTotalGastos, 
  getPorcentajePartida, 
  getYears 
} from './presupuestoData';

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

export default function CuentasClarasPage() {
  const [añoSeleccionado, setAñoSeleccionado] = useState(() => {
    const años = getYears();
    return años.length > 0 ? años[0] : new Date().getFullYear();
  });
  
  const [tipoVista, setTipoVista] = useState<'ingresos' | 'gastos'>('gastos');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('educacion');
  
  const añosDisponibles = useMemo(() => getYears(), []);
  
  // Datos para el año seleccionado
  const datosAño = PRESUPUESTO_MUNICIPAL_EJEMPLO[añoSeleccionado] || {};
  const totalIngresos = getTotalIngresos(añoSeleccionado);
  const totalGastos = getTotalGastos(añoSeleccionado);
  
  // Porcentaje de la categoría seleccionada
  const porcentaje = tipoVista === 'ingresos' 
    ? getPorcentajePartida(añoSeleccionado, categoriaSeleccionada as keyof typeof datosAño.ingresos, 'ingresos')
    : getPorcentajePartida(añoSeleccionado, categoriaSeleccionada as keyof typeof datosAño.gastos, 'gastos');
  
  const categorias = tipoVista === 'ingresos' ? CATEGORIAS_INGRESOS : CATEGORIAS_GASTOS;
  const categoriaObj = categorias.find(c => c.key === categoriaSeleccionada);
  
  // Manejar cambio de año
  const manejarCambioAño = (nuevoAño: number) => {
    setAñoSeleccionado(nuevoAño);
    // Resetear categoría al cambiar año para evitar inconsistencias
    setCategoriaSeleccionada(tipoVista === 'ingresos' ? 'tributarios' : 'educacion');
  };
  
  // Manejar cambio de tipo (ingresos/gastos)
  const manejarCambioTipo = (nuevoTipo: 'ingresos' | 'gastos') => {
    setTipoVista(nuevoTipo);
    // Resetear categoría apropiada
    setCategoriaSeleccionada(nuevoTipo === 'ingresos' ? 'tributarios' : 'educacion');
  };
  
  // Manejar cambio de categoría
  const manejarCambioCategoria = (nuevaCategoria: string) => {
    setCategoriaSeleccionada(nuevaCategoria);
  };
  
  // Formatear número como moneda chilena
  const formatoCLP = (valor: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  };
  
  // Crear datos para gráfico de barras (simplificado)
  const datosGrafico = tipoVista === 'ingresos' 
    ? CATEGORIAS_INGRESOS.map(cat => ({
        nombre: cat.nombre,
        valor: datosAño.ingresos?.[cat.key as keyof typeof datosAño.ingresos] || 0,
        color: cat.color
      }))
    : CATEGORIAS_GASTOS.map(cat => ({
        nombre: cat.nombre,
        valor: datosAño.gastos?.[cat.key as keyof typeof datosAño.gastos] || 0,
        color: cat.color
      }));
  
  // Ordenar de mayor a menor para el gráfico
  datosGrafico.sort((a, b) => b.valor - a.valor);
  
  const maxValor = Math.max(...datosGrafico.map(d => d.valor), 1); // Evitar división por cero
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Cuentas Claras
        </h1>
        <p className="text-slate-500">
          Transparencia presupuestaria sin tecnicismos. La plata de todos, explicada para todos.
        </p>
      </div>

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
                Visualiza en lenguaje ciudadano cómo se gasta el dinero público en\n
                tu comuna. Promesas vs presupuesto, eficiencia vs relato.
              </p>
            </div>
            
            {/* Selector de año */}
            <div className="space-y-2">
              <p className="text-azul-100 text-sm font-medium">Año Fiscal</p>
              <div className="relative">
                <button
                  onClick={() => manejarCambioAño(añoSeleccionado === añosDisponibles[0] ? añosDisponibles[añosDisponibles.length - 1] : añosDisponibles[0])}
                  className="w-full flex items-center justify-between px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all text-left"
                >
                  <span>{añoSeleccionado}</span>
                </button>
                {/* Para simplificar, usamos solo los dos años más recientes en el toggle */}
                {/* En una implementación completa, sería un desplegable completo */}
              </div>
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
                  // Placeholder for dropdown - in real implementation would open a select
                  // For now, we'll cycle through categories
                  const currentIndex = categorias.findIndex(c => c.key === categoriaSeleccionada);
                  const nextIndex = (currentIndex + 1) % categorias.length;
                  manejarCambioCategoria(categorias[nextIndex].key);
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
                <p className="text-white text-sm font-medium opacity-90">Participación de {categoriaObj?.nombre.toLowerCase() || 'categoría'}</p>
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

      {/* Gráfico de barras simplificado */}
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
          
          <div className="space-y-4">
            {datosGrafico.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: Object.values(categoriaObj?.color || {})[0] || '#6B7280' }}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.nombre}</span>
                    <span className="text-sm font-mono">{formatoCLP(item.valor)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full bg-terracota-600 transition-all duration-750`}
                      style={{ width: `${(item.valor / maxValor) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Información detallada de la categoría seleccionada */}
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            {tipoVista === 'ingresos' ? (
              <>
                <DollarSign className="w-5 h-5 text-terracota-600" />
                Detalle de Ingresos
              </>
            ) : (
              <>
                <Building2 className="w-5 h-5 text-terracota-600" />
                Detalle de Gastos
              </>
            )}
          </h3>
          
          <div className="space-y-4">
            {/* Información general de la categoría */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 flex items-center justify-center" 
                     style={{ backgroundColor: Object.values(categoriaObj?.color || {})[0] || '#6B7280', 
                             color: 'white' }}>
                  {categoriaObj?.icon ? (
                    <categoriaObj.icon className="w-4 h-4" />
                  ) : (
                    <div className="flex items-center justify-center">•</div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{categoriaObj?.nombre || 'Categoría no disponible'}</h4>
                  <p className="text-sm text-gray-500">Partida presupuestaria</p>
                </div>
              </div>
              
              <div className="grid gap-2 md:grid-cols-2">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm font-medium text-gray-600">Monto Anual</p>
                  <p className="text-2xl font-bold">{formatoCLP(
                    tipoVista === 'ingresos' 
                      ? datosAño.ingresos?.[categoriaSeleccionada as keyof typeof datosAño.ingresos] || 0
                      : datosAño.gastos?.[categoriaSeleccionada as keyof typeof datosAño.gastos] || 0
                  )}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm font-medium text-gray-600">% del Total {tipoVista === 'ingresos' ? 'de Ingresos' : 'de Gastos'}</p>
                  <p className="text-2xl font-bold">{Math.round(porcentaje)}%</p>
                </div>
              </div>
            </div>
            
            {/* Comparación año a año (si hay datos de múltiples años) */}
            {añosDisponibles.length > 1 && (
              <div className="mt-4 pt-3 border-t">
                <p className="font-bold text-lg mb-3">Evolución Histórica</p>
                <div className="space-y-3">
                  {añosDisponibles.map((año) => {
                    const datosAñoHist = PRESUPUESTO_MUNICIPAL_EJEMPLO[año] || {};
                    const valorHistorico = tipoVista === 'ingresos'
                      ? datosAñoHist.ingresos?.[categoriaSeleccionada as keyof typeof datosAñoHist.ingresos] || 0
                      : datosAñoHist.gastos?.[categoriaSeleccionada as keyof typeof datosAñoHist.gastos] || 0;
                    
                    return (
                      <div key={año} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="w-8 text-center font-mono">{año}</span>
                          <div className="w-2 h-2 rounded-full" 
                               style={{ backgroundColor: año === añoSeleccionado ? '#D97706' : '#6B7280' }}></div>
                        </div>
                        <p className="text-lg font-mono text-right">{formatoCLP(valorHistorico)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Nota explicativa */}
            <div className="mt-4 pt-3 border-t">
              <p className="text-sm text-gray-600 italic">
                Los datos mostrados son ejemplos basados en información pública de comunas chilenas. 
                En una implementación real, estos provendrían de fuentes oficiales como el Ministerio 
                de Hacienda, portales de transparencia municipal y reportes de la Contraloría General 
                de la República.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer con información adicional */}
      <Card className="border-dashed border-2 border-slate-300 bg-transparent">
        <CardContent className="p-8 text-center space-y-3">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">
            Transparencia activa para una ciudadanía empoderada
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Conocer cómo se gasta el dinero público es el primer paso para\n
            participar activamente en la vida democrática de tu comunidad.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}