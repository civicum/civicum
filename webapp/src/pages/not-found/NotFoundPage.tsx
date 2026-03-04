import { Link } from "react-router-dom";
import { CivicumLogo } from "@/components/icons/CivicumLogo";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

/**
 * 404 Not Found Page — ADR-0004 (ACCEPTED)
 *
 * Renders inside AppLayout (Smart Dock visible).
 * Copy is literal from ADR-0004 §34-36.
 *
 * DOCREF: ADR-0004 (ACCEPTED) — Diseño de pantalla 404
 * DOCREF: UI-NAV-008 (GAP cerrado por este componente)
 * DOCREF: UI-CNT-004 — errores humanos, no técnicos
 * DOCREF: UI-CNT-001 — tono "Vecino Organizado"
 */
export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            {/* Logo CIVICUM — isotipo centrado (ADR-0004 §33) */}
            <CivicumLogo
                className="h-20 w-auto mb-8 opacity-60"
                variant="brand"
                aria-hidden="true"
            />

            {/* Copy principal — literal ADR-0004 §35 */}
            <h1 className="text-2xl font-bold text-azul-900 mb-3">
                Esta página no existe — pero tu camino cívico sí.
            </h1>

            {/* Copy secundario — literal ADR-0004 §36 */}
            <p className="text-base text-slate-600 mb-10 max-w-md">
                Quizás la dirección cambió o escribiste algo distinto.
            </p>

            {/* CTAs (ADR-0004 §37-38) */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
                {/* CTA primario: Volver al inicio → Dashboard */}
                <Button asChild size="lg" variant="default">
                    <Link to="/">
                        <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                        Volver al inicio
                    </Link>
                </Button>

                {/* CTA secundario: Explorar módulos → /alza-la-voz (primer módulo en Smart Dock) */}
                <Button asChild size="lg" variant="outline">
                    <Link to="/alza-la-voz">
                        <Compass className="mr-2 h-4 w-4" aria-hidden="true" />
                        Explorar módulos
                    </Link>
                </Button>
            </div>
        </div>
    );
}
