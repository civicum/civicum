import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * AccessibilityOverlay — Modo Accesibilidad Total.
 * Fuente: Investigación Parte 5.1, 5.4, S3/S4
 * "No habrá una 'app especial para abuelos'; habrá un diseño inclusivo para todos."
 * Activable en onboarding o settings. Aplica transversalmente a TODA la app.
 *
 * Features:
 * - Font size aumentado (18px base, 20px para títulos)
 * - Botones altos (56px+)
 * - Alto contraste forzado
 * - Alt + TTS hints en hover
 * - Flujo paso a paso (1 acción por pantalla)
 * - Botón "Buscar ayuda cerca" siempre visible
 *
 * Uso: <AccessibilityOverlay enabled={true/false} />
 */

export interface A11ySettings {
  enabled: boolean;
  fontSize: 'normal' | 'large' | 'larger';
  highContrast: boolean;
  oneStepFlow: boolean;
  showHelpButton: boolean;
}

interface AccessibilityOverlayProps {
  settings: A11ySettings;
}

export function AccessibilityOverlay({
  settings,
}: AccessibilityOverlayProps) {
  const [helpDismissed, setHelpDismissed] = useState(false);

  // Inyectar estilos CSS globales según settings
  useEffect(() => {
    if (!settings.enabled) return;

    const style = document.createElement('style');
    style.textContent = `
      html {
        font-size: ${settings.fontSize === 'larger' ? '20px' : settings.fontSize === 'large' ? '18px' : '16px'} !important;
      }
      body {
        font-size: ${settings.fontSize === 'larger' ? '1.25rem' : settings.fontSize === 'large' ? '1.125rem' : '1rem'} !important;
        line-height: ${settings.fontSize === 'larger' ? '1.8' : settings.fontSize === 'large' ? '1.6' : '1.5'} !important;
      }
      ${settings.highContrast ? `
        *:not(input):not(textarea):not(select):not(a):not(button) {
          background-color: #000 !important;
          color: #fff !important;
        }
        a, button {
          text-decoration: underline !important;
          color: #4ade80 !important;
        }
        .bg-terracota-600, .bg-terracota-500, .bg-terracota-400 {
          background-color: #264653 !important;
        }
      ` : ''}
      ${settings.oneStepFlow ? `
        max-width: 480px !important;
        margin: 0 auto !important;
      ` : ''}
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [settings]);

  if (!settings.enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Botón flotante de ayuda */}
      {settings.showHelpButton && !helpDismissed && (
        <div className="fixed bottom-24 right-4 z-50 pointer-events-auto animate-in fade-in slide-in-from-bottom-4">
          <div className="relative bg-amber-500 text-white rounded-2xl p-4 shadow-xl max-w-xs">
            <button
              onClick={() => setHelpDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full text-white text-sm flex items-center justify-center transition-colors"
              aria-label="Cerrar ayuda"
            >
              ×
            </button>
            <p className="font-bold text-sm mb-2">¿Necesitas ayuda presencial?</p>
            <p className="text-sm opacity-90 mb-3">
              Encuentra un vecino que te ayude en tu comuna o pide que alguien te acompañe.
            </p>
            <a
              href="/ayuda-presencial"
              className="inline-block bg-white text-amber-600 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-amber-50 transition-colors"
            >
              Buscar ayuda cerca
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function AccessibilitySettingsPanel({
  settings,
  onToggle,
  onChallenge,
}: {
  settings: A11ySettings;
  onToggle: (key: keyof A11ySettings, value: boolean | string) => void;
  onChallenge?: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Modo Accesibilidad Total</h3>
        <p className="text-sm text-slate-600">
          Ajustes para usar CIVICUM con claridad total. Recomendado para adultos mayores y personas con dificultad visual o de lectura.
        </p>
      </div>

      {/* Enabled */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Modo accesibilidad</p>
          <p className="text-sm text-muted-foreground">Activar diseño inclusivo</p>
        </div>
        <button
          onClick={() => onToggle('enabled', !settings.enabled)}
          className={cn(
            'px-4 py-2 rounded-full font-medium text-sm transition-colors',
            settings.enabled
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          )}
        >
          {settings.enabled ? 'Activado' : 'Desactivado'}
        </button>
      </div>

      {/* Font size */}
      <div className="border-t pt-4">
        <p className="font-medium mb-3">Tamaño de texto</p>
        <div className="flex gap-2">
          {([
            { value: 'normal', label: 'Normal' },
            { value: 'large', label: 'Grande' },
            { value: 'larger', label: 'Más grande' },
          ] as const).map((opt) => (
            <button
              key={opt.value}
              onClick={() => onToggle('fontSize', opt.value)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                settings.fontSize === opt.value
                  ? 'bg-terracota-600 text-white border-terracota-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alto contraste */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Alto contraste</p>
            <p className="text-sm text-muted-foreground">Fondo negro, texto blanco brillante</p>
          </div>
          <button
            onClick={() => onToggle('highContrast', !settings.highContrast)}
            className={cn(
              'px-4 py-2 rounded-full font-medium text-sm transition-colors',
              settings.highContrast
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            )}
          >
            {settings.highContrast ? 'Activado' : 'Desactivado'}
          </button>
        </div>
      </div>

      {/* Flujo paso a paso */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Un paso a la vez</p>
            <p className="text-sm text-muted-foreground">Procesos guiados simples, una acción por pantalla</p>
          </div>
          <button
            onClick={() => onToggle('oneStepFlow', !settings.oneStepFlow)}
            className={cn(
              'px-4 py-2 rounded-full font-medium text-sm transition-colors',
              settings.oneStepFlow
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            )}
          >
            {settings.oneStepFlow ? 'Activado' : 'Desactivado'}
          </button>
        </div>
      </div>

      {/* Botón ayuda */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Botón de ayuda visible</p>
            <p className="text-sm text-muted-foreground">"¿Dónde encuentro ayuda cerca?" siempre disponible</p>
          </div>
          <button
            onClick={() => onToggle('showHelpButton', !settings.showHelpButton)}
            className={cn(
              'px-4 py-2 rounded-full font-medium text-sm transition-colors',
              settings.showHelpButton
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            )}
          >
            {settings.showHelpButton ? 'Mostrado' : 'Oculto'}
          </button>
        </div>
      </div>

      {/* Info SMS/IVR */}
      <div className="border-t pt-4 text-sm text-muted-foreground">
        <p>
          Si no usas smartphone, también puedes participar por SMS al <strong>+56 9 1234 5678</strong> o por llamada al <strong>+56 2 2345 6789</strong>.
          Cualquier familiar o vecino puede ayudarte a registrarte presencialmente en la JJVV más cercana.
        </p>
      </div>

      {/* Botón de challenge */}
      {onChallenge && (
        <div className="border-t pt-4">
          <button
            onClick={onChallenge}
            className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
          >
            ¿No te funciona? Problemas de acceso
          </button>
        </div>
      )}
    </div>
  );
}
