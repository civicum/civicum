import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessStateProps {
  /** Confirmatory message */
  message: string;
  /** Label for the "next step" CTA */
  nextLabel?: string;
  /** Next step click handler */
  onNext?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SuccessState — Post-action success component (UI-STP-001 context / ADR-0006)
 *
 * Checkmark + confirmatory text + next step CTA.
 * DOCREF: S01 → §12, L1361 → "Confirmación visual + texto confirmatorio + siguiente paso"
 */
export default function SuccessState({
  message,
  nextLabel,
  onNext,
  className = '',
}: SuccessStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="status"
    >
      {/* Checkmark */}
      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-verde-500" strokeWidth={1.5} />
      </div>

      {/* Confirmatory text */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">¡Listo!</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{message}</p>

      {/* Next step CTA */}
      {nextLabel && onNext && (
        <Button
          onClick={onNext}
          className="mt-6 bg-verde-500 hover:bg-green-600 text-white"
        >
          {nextLabel}
        </Button>
      )}
    </div>
  );
}
