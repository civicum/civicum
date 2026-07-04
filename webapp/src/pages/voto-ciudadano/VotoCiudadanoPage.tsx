import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Vote,
  CheckCircle2,
  Users,
  Shield,
  TrendingUp,
  ArrowRight,
  Calendar,
} from 'lucide-react';

const VOTACIONES_ACTIVAS = [
  {
    titulo: 'Nombre del nuevo parque comunal',
    comuna: 'Providencia',
    votos: 2341,
    participantes: 12800,
    cierra: '15 julio 2026',
    opciones: ['Parque de la Ciudadanía', 'Parque Violeta Parra', 'Parque Los Nogales'],
  },
  {
    titulo: 'Prioridad de inversión municipal 2027',
    comuna: 'Santiago',
    votos: 4521,
    participantes: 31000,
    cierra: '30 junio 2026',
    opciones: ['Seguridad', 'Áreas verdes', 'Educación'],
  },
];

export default function VotoCiudadanoPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Voto Ciudadano
        </h1>
        <p className="text-slate-500">
          Democracia paralela con peso simbólico. 1 persona = 1 voto, siempre.
        </p>
      </div>

      {/* Principio */}
      <Card className="bg-gradient-to-r from-dorado-50 to-amber-50 border-dorado-200">
        <CardContent className="p-5 flex items-start gap-4">
          <div className="w-12 h-12 bg-dorado-100 rounded-xl flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 text-dorado-700" />
          </div>
          <div>
            <h3 className="font-bold text-dorado-900">Principio Anti-Élite (F-10)</h3>
            <p className="text-sm text-dorado-700 mt-1 leading-relaxed">
              En CIVICUM, los votos no son vinculantes pero sí visibles para las
              autoridades. No hay "super-votantes": tu nivel de verificación solo
              protege contra fraudes, nunca amplifica tu voz por sobre la de otro
              ciudadano.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Votaciones Activas */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
          <Vote className="w-5 h-5 text-terracota-600" />
          Votaciones Activas
        </h2>

        {VOTACIONES_ACTIVAS.map((votacion) => (
          <Card key={votacion.titulo} className="border-slate-200 hover:border-terracota-200 transition-colors">
            <CardContent className="p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold">{votacion.titulo}</h3>
                  <span className="text-xs text-slate-500">{votacion.comuna}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {votacion.votos.toLocaleString()} votos
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Cierra {votacion.cierra}
                  </span>
                </div>
              </div>

              <Progress
                value={(votacion.votos / votacion.participantes) * 100}
                className="h-2 bg-slate-100 [&>div]:bg-terracota-500"
              />

              <div className="grid gap-2">
                {votacion.opciones.map((opcion) => (
                  <button
                    key={opcion}
                    disabled
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 bg-white text-left hover:bg-terracota-50 hover:border-terracota-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                  >
                    <span className="text-sm font-medium">{opcion}</span>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                  </button>
                ))}
              </div>

              <Button variant="outline" className="w-full" disabled>
                Participar <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cómo Funciona */}
      <Card className="border-slate-200">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg">¿Cómo funciona el Voto Ciudadano?</h3>
          <div className="grid gap-3">
            {[
              {
                icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
                color: 'bg-green-50 border-green-200',
                titulo: 'Voto simbólico con visibilidad real',
                desc: 'Tus votos no son legalmente vinculantes, pero son públicos y las autoridades los ven.',
              },
              {
                icon: <Shield className="w-4 h-4 text-azul-600" />,
                color: 'bg-azul-50 border-azul-200',
                titulo: 'Protegido contra manipulación',
                desc: '1 persona = 1 voto. Sistema de verificación progresiva (L0-L4) evita cuentas falsas.',
              },
              {
                icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
                color: 'bg-purple-50 border-purple-200',
                titulo: 'Resultados con trazabilidad',
                desc: 'Cada votación muestra metodología, participantes verificados y distribución geográfica.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className={`flex gap-3 p-4 rounded-xl border ${item.color}`}
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-sm">{item.titulo}</h4>
                  <p className="text-xs opacity-70 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}