import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  /** Error message (defaults to CIVICUM's human-error copy per UI-CNT-004) */
  message?: string;
  /** Retry handler */
  onRetry?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ErrorState — Error feedback component (UI-STP-004)
 *
 * Terracota-colored feedback with human message + retry button.
 * DOCREF: S01 → §12.1 → fila Error (L1359)
 * DOCREF: UI-CNT-004 → "Algo falló de nuestro lado"
 */
export default function ErrorState({
  message = 'Algo falló de nuestro lado. Estamos trabajando para solucionarlo.',
  onRetry,
  className = '',
}: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="alert"
    >
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-terracota-50 flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-terracota-500" strokeWidth={1.5} />
      </div>

      {/* Message */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Hubo un problema</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{message}</p>

      {/* Retry CTA */}
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="mt-6 border-terracota-300 text-terracota-600 hover:bg-terracota-50"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reintentar
        </Button>
      )}
    </div>
  );
}
