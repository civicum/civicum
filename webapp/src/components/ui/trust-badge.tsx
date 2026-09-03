import { ShieldCheck, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * TrustBadge — Seudónimo "Vecino Verificado #405 de Comuna X" con ícono candado.
 * Fuente: Investigación Parte 5.4 (Anonimato/Identidad)
 * "Tu identidad real NO será pública. Vecino Verificado #405 de Comuna X."
 * "Tu nombre real solo es conocido por CIVICUM para validar que eres ciudadano.
 *  Ni otros usuarios ni el municipio ven datos personales."
 *
 * Uso: <TrustBadge userId="405" commune="Santiago" />
 *      <TrustBadge userId="1123" commune="Puente Alto" verified />
 */
interface TrustBadgeProps {
  /** ID numérico del seudónimo (Vecino #405) */
  userId: number | string;
  /** Nombre de la comuna */
  commune?: string;
  /** Nivel de verificación */
  verified?: boolean;
  /** Variante compacta (sin comuna) */
  compact?: boolean;
  className?: string;
}

export function TrustBadge({
  userId,
  commune,
  verified = true,
  compact = false,
  className,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 text-xs',
        'text-muted-foreground',
        className,
      )}
      title="Tu identidad real NO será pública. Tu nombre real solo es conocido por CIVICUM para validar que eres ciudadano."
    >
      <ShieldCheck
        className={cn(
          'h-3.5 w-3.5 shrink-0',
          verified ? 'text-emerald-600' : 'text-muted-foreground/50',
        )}
        aria-label="Identidad blindada"
      />
      <span className="font-medium">
        Vecino {verified ? 'Verificado' : ''} #{userId}
      </span>
      {!compact && commune && (
        <>
          <MapPin className="h-3 w-3 shrink-0 text-muted-foreground/60" />
          <span className="text-muted-foreground/70">{commune}</span>
        </>
      )}
    </div>
  );
}

export default TrustBadge;
