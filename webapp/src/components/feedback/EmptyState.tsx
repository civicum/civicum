import { Inbox } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  /** Main heading */
  title: string;
  /** Descriptive message */
  description: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA click handler */
  onAction?: () => void;
  /** Custom icon (defaults to Inbox) */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EmptyState — Empty data state component (UI-STP-003)
 *
 * Displays an illustrative icon + contextual copy + CTA.
 * DOCREF: S01 → §12.3 → tabla empty states (L1387)
 */
export default function EmptyState({
  title,
  description,
  ctaLabel,
  onAction,
  icon,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="status"
    >
      {/* Illustration / Icon */}
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        {icon || <Inbox className="w-10 h-10 text-slate-400" strokeWidth={1.5} />}
      </div>

      {/* Copy */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{description}</p>

      {/* CTA */}
      {ctaLabel && onAction && (
        <Button
          onClick={onAction}
          className="mt-6 bg-terracota-500 hover:bg-terracota-400 text-white"
        >
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
