import { WifiOff } from 'lucide-react';

interface OfflineBannerProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * OfflineBanner — Offline state banner (UI-STP-005)
 *
 * Presentational component: renders when shown, no auto-detection.
 * Non-alarming informational banner per DOCREF: S01 → §12.1 → fila Offline (L1360).
 * "Banner NO alarma + funcionalidad Tier LOW"
 */
export default function OfflineBanner({ className = '' }: OfflineBannerProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-azul-200 bg-azul-50 px-4 py-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <WifiOff className="w-5 h-5 text-azul-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-azul-800">
          Sin conexión a internet
        </p>
        <p className="text-xs text-azul-600 mt-0.5">
          Puedes seguir usando las funciones disponibles. Tus cambios se sincronizarán cuando vuelvas a conectarte.
        </p>
      </div>
    </div>
  );
}
