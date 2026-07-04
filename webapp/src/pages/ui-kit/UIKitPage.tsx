import { useSearchParams } from 'react-router-dom';
import SkeletonScreen from '@/components/feedback/SkeletonScreen';
import EmptyState from '@/components/feedback/EmptyState';
import ErrorState from '@/components/feedback/ErrorState';
import OfflineBanner from '@/components/feedback/OfflineBanner';
import SuccessState from '@/components/feedback/SuccessState';

type StateName = 'loading' | 'empty' | 'error' | 'offline' | 'success';

/**
 * UIKitPage — Deterministic showcase of all 5 feedback states (Gate 5.3)
 *
 * Supports ?state=loading|empty|error|offline|success to show a single state,
 * or shows all 5 simultaneously when no query param is provided.
 *
 * Each state section has:
 *  - data-testid="state-{name}" for Playwright locators
 *  - data-state="{name}" for semantic querying
 */
export default function UIKitPage() {
  const [searchParams] = useSearchParams();
  const filterState = searchParams.get('state') as StateName | null;

  const shouldShow = (state: StateName) =>
    !filterState || filterState === state;

  return (
    <div className="space-y-8 pb-16">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">UI Kit — 5-State Pattern</h1>
        <p className="text-sm text-slate-500">
          Componentes de feedback reutilizables (ADR-0006). Evidencia determinista para Playwright.
        </p>
      </div>

      {/* Loading State */}
      {shouldShow('loading') && (
        <section
          data-testid="state-loading"
          data-state="loading"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Loading — Skeleton Shimmer (UI-STP-002)
          </h2>
          <SkeletonScreen rows={3} showHeader showCards />
        </section>
      )}

      {/* Empty State */}
      {shouldShow('empty') && (
        <section
          data-testid="state-empty"
          data-state="empty"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Empty — Sin datos (UI-STP-003)
          </h2>
          <EmptyState
            title="No hay reportes en tu zona"
            description="Cuando se registren reportes cerca de ti, aparecerán aquí. Puedes empezar alzando la voz."
            ctaLabel="Crear primer reporte"
            onAction={() => {}}
          />
        </section>
      )}

      {/* Error State */}
      {shouldShow('error') && (
        <section
          data-testid="state-error"
          data-state="error"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Error — Feedback Terracota (UI-STP-004)
          </h2>
          <ErrorState onRetry={() => {}} />
        </section>
      )}

      {/* Offline State */}
      {shouldShow('offline') && (
        <section
          data-testid="state-offline"
          data-state="offline"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Offline — Banner informativo (UI-STP-005)
          </h2>
          <OfflineBanner />
        </section>
      )}

      {/* Success State */}
      {shouldShow('success') && (
        <section
          data-testid="state-success"
          data-state="success"
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Success — Confirmación (UI-STP-001)
          </h2>
          <SuccessState
            message="Tu reporte fue enviado correctamente. Un verificador lo revisará pronto."
            nextLabel="Volver al inicio"
            onNext={() => {}}
          />
        </section>
      )}
    </div>
  );
}
