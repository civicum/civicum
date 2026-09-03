import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MapPin, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * VictoryCard — Tarjeta de victoria ciudadana con foto, cifra, testimonio.
 * Fuente: Investigación Parte 5.4 (Celebración), Parte 4.4, Parte 6.1
 * "El logro, no el héroe" — celebración colectiva sobria, no individual.
 * "100 problemas resueltos gracias a tu comunidad este mes."
 *
 * Uso: <VictoryCard title="Bache reparado" commune="Santiago" metric="5 vecinos" description="..." date="2024-12-01" />
 */
interface VictoryCardProps {
  title: string;
  commune: string;
  metric?: string;
  metricLabel?: string;
  description?: string;
  date?: string;
  category?: 'infraestructura' | 'educacion' | 'salud' | 'seguridad' | 'transparencia' | 'social';
  className?: string;
}

const CATEGORY_CONFIG = {
  infraestructura: { icon: '🏗️', label: 'Infraestructura', color: 'text-blue-600' },
  educacion: { icon: '📚', label: 'Educación', color: 'text-purple-600' },
  salud: { icon: '🏥', label: 'Salud', color: 'text-red-600' },
  seguridad: { icon: '🛡️', label: 'Seguridad', color: 'text-indigo-600' },
  transparencia: { icon: '📊', label: 'Transparencia', color: 'text-emerald-600' },
  social: { icon: '🤝', label: 'Social', color: 'text-amber-600' },
};

export function VictoryCard({
  title,
  commune,
  metric,
  metricLabel,
  description,
  date,
  category = 'infraestructura',
  className,
}: VictoryCardProps) {
  const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.infraestructura;

  return (
    <Card className={cn('overflow-hidden border-border/50 transition-shadow hover:shadow-md', className)}>
      <CardContent className="p-4 space-y-3">
        {/* Categoría + comuna */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs gap-1">
            <span>{config.icon}</span>
            {config.label}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {commune}
          </div>
        </div>

        {/* Título */}
        <h3 className="font-semibold text-base leading-snug text-foreground">
          {title}
        </h3>

        {/* Métrica destacada (ej: "5 vecinos", "3 baches reparados") */}
        {metric && (
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className={cn('h-4 w-4', config.color)} />
            <span className="font-medium text-foreground">{metric}</span>
            {metricLabel && (
              <span className="text-muted-foreground">{metricLabel}</span>
            )}
          </div>
        )}

        {/* Descripción */}
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        {/* Footer: fecha + "Lo logramos juntos" */}
        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          {date && (
            <span className="text-xs text-muted-foreground">
              {new Date(date).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          )}
          <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Lo logramos juntos
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default VictoryCard;
