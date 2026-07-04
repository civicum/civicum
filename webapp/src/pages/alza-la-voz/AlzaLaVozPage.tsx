import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Megaphone,
  Camera,
  MapPin,
  Users,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIAS_REPORTE = [
  { icon: <AlertTriangle className="w-5 h-5" />, label: 'Inseguridad / Delitos', color: 'text-red-600 bg-red-50 border-red-200' },
  { icon: <Camera className="w-5 h-5" />, label: 'Problemas Ecológicos', color: 'text-green-600 bg-green-50 border-green-200' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Obras y Baches', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: <MessageSquare className="w-5 h-5" />, label: 'Burocracia Municipal', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { icon: <Users className="w-5 h-5" />, label: 'Violencia de Género', color: 'text-pink-600 bg-pink-50 border-pink-200' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Salud Pública', color: 'text-azul-600 bg-azul-50 border-azul-200' },
];

const MESAS_DELIBERACION = [
  {
    titulo: 'Ordenanza de Ruidos Molestos',
    comuna: 'Santiago',
    participantes: 47,
    estado: 'Activa',
  },
  {
    titulo: 'Presupuesto Participativo 2026',
    comuna: 'Providencia',
    participantes: 128,
    estado: 'En Votación',
  },
  {
    titulo: 'Plan Regulador Comunal',
    comuna: 'Ñuñoa',
    participantes: 89,
    estado: 'Deliberando',
  },
];

export default function AlzaLaVozPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Alza la Voz
        </h1>
        <p className="text-slate-500">
          Reporta, documenta y escala. Convierte tu frustración en acción con evidencia verificable.
        </p>
      </div>

      {/* Crear Reporte */}
      <Card className="border-0 bg-gradient-to-r from-terracota-600 to-terracota-500 text-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5" />
                <h2 className="text-lg font-bold">Nuevo Reporte Comunitario</h2>
              </div>
              <p className="text-white/80 text-sm">
                Reúne evidencia, geolocaliza y envía tu reporte a la autoridad correcta.
              </p>
            </div>
            <Button className="bg-white text-terracota-700 hover:bg-terracota-50 font-bold shadow-lg" disabled>
              Crear Reporte <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categorías de Reporte */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Categorías de Reporte</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIAS_REPORTE.map((cat) => (
            <button
              key={cat.label}
              disabled
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${cat.color}`}
            >
              {cat.icon}
              <span className="text-xs font-semibold leading-tight">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mesas de Deliberación */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-azul-600" />
            Mesas de Deliberación
          </h2>
          <Link
            to="/circulos"
            className="text-sm text-terracota-600 font-medium hover:underline flex items-center gap-1"
          >
            Ver todas <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {MESAS_DELIBERACION.map((mesa) => (
            <Card key={mesa.titulo} className="border-slate-200 hover:border-terracota-200 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{mesa.comuna}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    mesa.estado === 'En Votación'
                      ? 'bg-green-100 text-green-700'
                      : mesa.estado === 'Deliberando'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-azul-100 text-azul-700'
                  }`}>
                    {mesa.estado}
                  </span>
                </div>
                <CardTitle className="text-base mt-1">{mesa.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Users className="w-3 h-3" /> {mesa.participantes} participantes
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Crear Mesa */}
      <Card className="border-dashed border-2 border-slate-300 bg-transparent">
        <CardContent className="p-6 text-center space-y-3">
          <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
            <Users className="w-7 h-7 text-slate-400" />
          </div>
          <h3 className="font-bold text-slate-700">¿Quieres crear una Mesa de Deliberación?</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Organiza a tu comunidad alrededor de un tema específico. Votaciones
            simbólicas, evidencia compartida y escalamiento documentado.
          </p>
          <Button variant="outline" disabled>
            Crear Mesa
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}