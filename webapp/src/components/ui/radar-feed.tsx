import { motion } from 'framer-motion';
import { MapPin, Users, MessageCircle, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

/**
 * RadarFeed — Feed de actividad vecinal.
 * Fuente: Investigación Parte 5.4 (Colectividad — "Minga Digital")
 *
 * Ejemplos de la investigación:
 * - "María de tu cuadra reportó iluminación. Súmate aquí."
 * - Métricas colectivas: "5 problemas resueltos este mes gracias a vecinos"
 * - Invitación a participar en cada item: "Súmate", "Apoya", "Opina"
 * - Co-creación: "Este reporte sería más fuerte con una foto. ¿Quién se anima?"
 *
 * ANTI-PATRÓN (prohibido): rankings individuales, "Top usuarios"
 */

export interface RadarItem {
  id: string;
  tipo: 'reporte' | 'apoyo' | 'victoria' | 'propuesta';
  actor: string; // alias o pseudónimo
  titulo: string;
  comuna: string;
  apoyos: number;
  fecha: string;
  accionTexto: string; // "Súmate", "Apoya", "Opina"
}

interface RadarFeedProps {
  items: RadarItem[];
  loading?: boolean;
}

const TIPO_CONFIG = {
  reporte: { icon: MapPin, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Reporte' },
  apoyo: { icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Apoyo' },
  victoria: { icon: TrendingUp, color: 'text-terracota-600', bg: 'bg-terracota-50', label: 'Victoria' },
  propuesta: { icon: MessageCircle, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Propuesta' },
};

export function RadarFeed({ items, loading }: RadarFeedProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 rounded-xl bg-slate-100 animate-pulse" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="p-8 text-center space-y-3">
          <Handshake className="h-10 w-10 text-slate-300 mx-auto" />
          <p className="font-medium text-slate-700">Aún no hay actividad en tu comuna</p>
          <p className="text-sm text-slate-500">
            Sé el primero en reportar algo. Tu acción puede inspirar a otros vecinos.
          </p>
          <Link
            to="/alza-la-voz"
            className="inline-flex items-center gap-1 text-terracota-600 font-medium text-sm hover:underline"
          >
            Reportar un problema
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3" role="feed" aria-label="Actividad de tu comuna">
      {items.map((item, i) => {
        const config = TIPO_CONFIG[item.tipo];
        const Icon = config.icon;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className={`border-slate-200 hover:border-slate-300 transition-colors ${config.bg}/30`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${config.bg} shrink-0`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">{item.actor}</span>
                      {' '}{item.tipo === 'reporte' ? 'reportó' : item.tipo === 'victoria' ? 'logró' : item.tipo === 'apoyo' ? 'apoyó' : 'propuso'}
                      {' '}<span className="font-medium">{item.titulo}</span>
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.comuna}
                      </span>
                      <span>{item.fecha}</span>
                      {item.apoyos > 0 && (
                        <span className="flex items-center gap-1 text-emerald-600">
                          <Users className="h-3 w-3" />
                          {item.apoyos} vecinos
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/alza-la-voz`}
                      className={`inline-flex items-center gap-1 mt-2 text-sm font-medium ${config.color} hover:underline`}
                    >
                      {item.accionTexto} →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

export default RadarFeed;
