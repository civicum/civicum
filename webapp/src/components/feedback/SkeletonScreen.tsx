import { type ReactNode } from 'react';

interface SkeletonScreenProps {
  /** Number of content rows to show */
  rows?: number;
  /** Show a header skeleton block */
  showHeader?: boolean;
  /** Show card-shaped skeleton blocks (3 columns on md+) */
  showCards?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Optional children to override default skeleton layout */
  children?: ReactNode;
}

function SkeletonBlock({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-lg bg-slate-200 animate-shimmer ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)',
        backgroundSize: '200% 100%',
        ...style,
      }}
    />
  );
}

/**
 * SkeletonScreen — Loading state component (UI-STP-002)
 *
 * Displays shimmer skeleton blocks mimicking page layout.
 * DOCREF: S01 → §12.2 → "Shimmer: linear-gradient" (L1381)
 * DOCREF: UI-CMP-004 → Skeleton shimmer: linear-gradient Gris100→200→100, 1.5s infinite
 */
export default function SkeletonScreen({
  rows = 3,
  showHeader = true,
  showCards = true,
  className = '',
  children,
}: SkeletonScreenProps) {
  if (children) {
    return <div className={`space-y-4 ${className}`}>{children}</div>;
  }

  return (
    <div className={`space-y-6 ${className}`} aria-busy="true" aria-label="Cargando contenido">
      {/* Header skeleton */}
      {showHeader && (
        <div className="space-y-3">
          <SkeletonBlock className="h-8 w-2/3" />
          <SkeletonBlock className="h-4 w-1/2" />
        </div>
      )}

      {/* Card skeletons */}
      {showCards && (
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-100 p-6 space-y-3">
              <SkeletonBlock className="h-10 w-10 rounded-full" />
              <SkeletonBlock className="h-6 w-1/3" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      )}

      {/* Row skeletons */}
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <SkeletonBlock key={i} className="h-4" style={{ width: `${90 - i * 10}%` }} />
        ))}
      </div>
    </div>
  );
}

export { SkeletonBlock };
