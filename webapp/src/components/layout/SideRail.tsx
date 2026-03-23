import { NavLink } from "react-router-dom";
import { Home, Lightbulb, UserRound, UsersRound, MoreHorizontal } from "lucide-react";

/**
 * SideRail — Desktop navigation (LG+ / 1024px+)
 *
 * SSOT: UI-LAY-004 — "side rail LG+"
 * Geometry: fixed left, below the 64px (h-16) header → top-16
 * Width: 72px (w-[72px]) — icon + label column, compact
 * Height: fills remaining viewport (h-[calc(100vh-4rem)])
 */
export function SideRail() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `flex flex-col items-center justify-center gap-1 w-full py-3 transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`;

    return (
        <nav
            data-testid="side-rail"
            className="hidden lg:flex fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-[72px] flex-col items-center border-r bg-white pt-4 shadow-sm"
        >
            <NavLink to="/" className={linkClass}>
                <Home className="h-5 w-5" />
                <span className="text-[10px] font-medium">Inicio</span>
            </NavLink>

            <NavLink to="/alza-la-voz" className={linkClass}>
                <Lightbulb className="h-5 w-5" />
                <span className="text-[10px] font-medium">Alza la Voz</span>
            </NavLink>

            <NavLink to="/circulos" className={linkClass}>
                <UsersRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">Círculos</span>
            </NavLink>

            <NavLink to="/perfil" className={linkClass}>
                <UserRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">Mi Perfil</span>
            </NavLink>

            {/* Position 5: "Más" — placeholder until bottom sheet / submenu */}
            <button
                type="button"
                disabled
                aria-label="Más opciones (próximamente)"
                className="flex flex-col items-center justify-center gap-1 w-full py-3 text-slate-400 cursor-not-allowed"
            >
                <MoreHorizontal className="h-5 w-5" />
                <span className="text-[10px] font-medium">Más</span>
            </button>
        </nav>
    );
}
