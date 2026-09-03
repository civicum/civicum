import { cn } from '@/lib/utils';

/**
 * SkeletonCard — Placeholder gris con pulse 1.5s para cargas.
 * Fuente: Investigación Parte 5.4 (Espera/Incertidumbre)
 * "nunca pantalla en blanco" — siempre skeletal screens en cargas de datos.
 *
 * Uso: <SkeletonCard lines={4} /> o <SkeletonCard className="h-32 w-full" />
 */
interface SkeletonCardProps {
  lines?: number;
  className?: string;
  showHeader?: boolean;
}

export function SkeletonCard({ lines = 3, className, showHeader = true }: SkeletonCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border/40 bg-card/50 p-4 animate-pulse',
        className,
      )}
      role="status"
      aria-label="Cargando datos..."
      aria-busy="true"
    >
      {showHeader && (
        <div className="flex items-center gap-2 mb-3">
          <div className="h-8 w-8 rounded-full bg-muted/60" />
          <div className="h-4 w-32 rounded bg-muted/60" />
        </div>
      )}
      <div className="space-y-2.5">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3.5 rounded bg-muted/50"
            style={{
              width: i === lines - 1 ? '60%' : '100%',
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * SkeletonCircle — Placeholder circular para avátars/icons.
 * Fuente: Investigación Parte 5.4 — skeletal screens en cargas asíncronas.
 */
export function SkeletonCircle({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <div
      className={cn('rounded-full bg-muted/60 animate-pulse', className)}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Cargando..."
      aria-busy="true"
    />
  );
}

export default SkeletonCard;
