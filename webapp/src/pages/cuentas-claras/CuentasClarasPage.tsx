import { Card, CardContent } from '@/components/ui/card';
import {
  Landmark,
  TrendingUp,
  BarChart3,
  Building2,
  DollarSign,
  Scale,
} from 'lucide-react';

const DATOS_DESTACADOS = [
  {
    icon: <Building2 className="w-5 h-5" />,
    titulo: 'Presupuesto Municipal',
    valor: 'Consulta abierta',
    cambio: 'Transparencia activa',
    color: 'bg-azul-50 border-azul-200',
    iconColor: 'text-azul-600 bg-azul-100',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    titulo: 'Gasto en Obras',
    valor: 'Próximamente',
    cambio: 'Datos MOP + municipales',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600 bg-green-100',
  },
  {
    icon: <Scale className="w-5 h-5" />,
    titulo: 'Comparador Comunal',
    valor: 'Próximamente',
    cambio: 'Tu comuna vs el promedio',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600 bg-purple-100',
  },
];

export default function CuentasClarasPage() {
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

      {/* Hero */}
      <Card className="bg-gradient-to-br from-azul-700 via-azul-600 to-azul-500 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <CardContent className="p-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6" />
                <h2 className="text-xl font-bold">Presupuestos, sin letra chica</h2>
              </div>
              <p className="text-azul-100 text-sm max-w-md">
                Visualiza en lenguaje ciudadano cómo se gasta el dinero público en
                tu comuna. Promesas vs presupuesto, eficiencia vs relato.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <div className="flex items-center gap-1 text-green-300">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-2xl font-black">43+</span>
                </div>
                <p className="text-xs text-azul-200">Fuentes oficiales</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Placeholder */}
      <div className="grid gap-4 md:grid-cols-3">
        {DATOS_DESTACADOS.map((dato) => (
          <Card key={dato.titulo} className={`border shadow-sm ${dato.color}`}>
            <CardContent className="p-5 space-y-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dato.iconColor}`}>
                {dato.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm">{dato.titulo}</h3>
                <p className="text-2xl font-black mt-1">{dato.valor}</p>
                <p className="text-xs opacity-60 mt-1">{dato.cambio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cómo Funciona */}
      <Card className="border-slate-200">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-terracota-600" />
            ¿Cómo funciona Cuentas Claras?
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                paso: '1',
                titulo: 'Conectamos',
                desc: 'Integramos datos oficiales del MOP, municipios, y portales de transparencia.',
              },
              {
                paso: '2',
                titulo: 'Traducimos',
                desc: 'Convertimos partidas presupuestarias en lenguaje ciudadano con gráficos simples.',
              },
              {
                paso: '3',
                titulo: 'Empoderamos',
                desc: 'Te damos herramientas para comparar, cuestionar y fiscalizar con evidencia.',
              },
            ].map((item) => (
              <div key={item.paso} className="flex gap-3">
                <div className="w-8 h-8 bg-terracota-100 text-terracota-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.paso}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.titulo}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4 flex items-start gap-3">
          <Scale className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-800">Promesa de evidencia</h4>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Si no se puede probar, no se publica como hecho. Si se publica, viene
              con fuente. Todos los datos mostrados en Cuentas Claras son trazables
              a fuentes oficiales chilenas verificables.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}