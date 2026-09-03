import { AlertTriangle } from 'lucide-react';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

/**
 * StaleDataBadge — Badge que indica datos desactualizados con transparencia radical.
 * Fuente: Investigación Parte 5.4 (Error/Fracaso) — "Confesar heridas":
 * "Datos desactualizados: atenuado + ⚠️ + 'Última actualización: X. Te avisamos cuando haya nuevo dato.'"
 *
 * Uso: <StaleDataBadge lastUpdated="2024-12-01" />
 *      <StaleDataBadge lastUpdated="2024-12-01" notifyOnChange={true} />
 */
interface StaleDataBadgeProps {
  /** Fecha de la última actualización de los datos (ISO string o texto legible) */
  lastUpdated?: string;
  /** Días sin actualizar — si se omite, se calcula desde lastUpdated */
  daysStale?: number;
  /** Mostrar botón "Notificarme cuando se actualice" */
  notifyOnChange?: boolean;
  /** Variante visual según antigüedad */
  variant?: 'warning' | 'critical';
  className?: string;
}

export function StaleDataBadge({
  lastUpdated,
  daysStale,
  notifyOnChange = true,
  variant = 'warning',
  className,
}: StaleDataBadgeProps) {
  const staleDays = useMemo(() => {
    if (daysStale !== undefined) return daysStale;
    if (!lastUpdated) return 0;
    const now = new Date().getTime();
    const updated = new Date(lastUpdated).getTime();
    return Math.floor((now - updated) / (1000 * 60 * 60 * 24));
  }, [daysStale, lastUpdated]);

  // Determinar variante automática: >30 días = critical
  const effectiveVariant = variant === 'critical' || staleDays > 30 ? 'critical' : 'warning';

  const styles = {
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    critical: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium',
        'shadow-sm',
        styles[effectiveVariant],
        className,
      )}
      role="status"
      aria-label={`Datos desactualizados desde hace ${staleDays} días`}
    >
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
      <span>
        {staleDays > 0 ? (
          <>Datos de hace {staleDays} días</>
        ) : (
          <>Datos actualizados recientemente</>
        )}
      </span>
      {lastUpdated && (
        <span className="text-muted-foreground/70 ml-1 hidden sm:inline">
          · Última actualización: {new Date(lastUpdated).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      )}
      {notifyOnChange && staleDays > 0 && (
        <button
          className="ml-2 underline decoration-dotted underline-offset-2 hover:opacity-70 transition-opacity"
          onClick={() => {/* TODO: suscripción a notificación de actualización */}}
        >
          Avísame cuando se actualice
        </button>
      )}
    </div>
  );
}

export default StaleDataBadge;
