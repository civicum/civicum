import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * QuickReportButton — FAB (Floating Action Button) "¿Qué te molesta?".
 * Fuente: Investigación Parte 5.4 (Confianza Inicial), Parte 3.3 (fase 1 frustración)
 * "Alza la Voz: '¿Qué te molesta?' → 3 taps → reporte creado"
 * "Entrada cero fricción: '¿Qué te molesta?' → reporte en 3 taps"
 *
 * Uso: <QuickReportButton />
 * Se renderiza como FAB flotante en la esquina inferior derecha (encima del SmartDock).
 */
interface QuickReportButtonProps {
  className?: string;
  /** Etiqueta del botón */
  label?: string;
  /** Ruta de destino (default: /alza-la-voz) */
  to?: string;
}

export function QuickReportButton({
  className,
  label = '¿Qué te molesta?',
  to = '/alza-la-voz',
}: QuickReportButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={cn(
        'fixed bottom-20 right-4 z-40 sm:bottom-24 sm:right-6',
        'flex items-center gap-2 rounded-full px-5 py-3.5',
        'bg-terracota text-white font-semibold text-sm',
        'shadow-lg shadow-terracota/30 hover:shadow-xl hover:scale-105',
        'active:scale-95 transition-all duration-200',
        'animate-in fade-in slide-in-from-bottom-4 duration-300',
        'min-h-[56px]',
        className,
      )}
      aria-label="Reportar un problema en tu barrio"
    >
      <Plus className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden xs:inline sm:inline">{label}</span>
      <span className="xs:hidden sm:hidden">{label.split(' ')[0]}</span>
    </button>
  );
}

export default QuickReportButton;
