import { CheckCircle2, Clock, FileText, AlertCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * TimelineGestiones — Timeline visual de estados con fechas e íconos.
 * Fuente: Investigación Parte 5.4 (Retroalimentación), Parte 3.3 (fase 5 resultado)
 * "Enviado → En revisión → Respondido → Resuelto" con timestamps.
 * "Cada proceso con posible espera lleva un indicador de estado claro."
 *
 * Uso: <TimelineGestiones steps={steps} />
 */

export type EstadoPaso = 'completado' | 'en_progreso' | 'pendiente' | 'rechazado' | 'escalado';

export interface PasoGestion {
  estado: EstadoPaso;
  titulo: string;
  fecha?: string;
  descripcion?: string;
}

interface TimelineGestionesProps {
  steps: PasoGestion[];
  className?: string;
}

const ESTADO_CONFIG: Record<EstadoPaso, {
  icon: typeof CheckCircle2;
  color: string;
  bg: string;
  ring: string;
  label: string;
}> = {
  completado: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', ring: 'ring-emerald-200', label: 'Completado' },
  en_progreso: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', ring: 'ring-amber-200', label: 'En progreso' },
  pendiente: { icon: Circle, color: 'text-muted-foreground', bg: 'bg-muted/30', ring: 'ring-border/30', label: 'Pendiente' },
  rechazado: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', ring: 'ring-red-200', label: 'No respondido' },
  escalado: { icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', ring: 'ring-blue-200', label: 'Escalado' },
};

export function TimelineGestiones({ steps, className }: TimelineGestionesProps) {
  return (
    <div className={cn('space-y-0', className)} role="list" aria-label="Línea de tiempo de gestiones">
      {steps.map((step, index) => {
        const config = ESTADO_CONFIG[step.estado];
        const Icon = config.icon;
        const isLast = index === steps.length - 1;
        const estadoLabel = step.estado === 'rechazado' && step.descripcion
          ? `Días sin respuesta: ${step.descripcion}`
          : config.label;

        return (
          <div key={index} role="listitem" className="flex gap-3 pb-4 last:pb-0">
            {/* Icono + línea conectora */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full ring-2 shrink-0',
                  config.bg,
                  config.ring,
                )}
                aria-label={estadoLabel}
              >
                <Icon className={cn('h-4 w-4', config.color, step.estado === 'en_progreso' && 'animate-pulse')} />
              </div>
              {!isLast && (
                <div
                  className={cn(
                    'w-px flex-1 mt-1 mb-1',
                    step.estado === 'completado' ? 'bg-emerald-200' : 'bg-border/40',
                  )}
                />
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-foreground">{step.titulo}</p>
                {step.fecha && (
                  <time className="text-xs text-muted-foreground shrink-0">
                    {new Date(step.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })}
                  </time>
                )}
              </div>
              <p className={cn('text-xs mt-0.5', config.color)}>
                {estadoLabel}
              </p>
              {step.descripcion && step.estado !== 'rechazado' && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {step.descripcion}
                </p>
              )}
              {step.estado === 'rechazado' && (
                <p className={cn('text-xs mt-1 font-medium text-red-600')}>
                  Presionar
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TimelineGestiones;
