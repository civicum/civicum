import { NavLink } from "react-router-dom";
import { Home, Lightbulb, UserRound, UsersRound, MoreHorizontal } from "lucide-react";

export function SmartDock() {
    return (
        <nav
            data-testid="smart-dock"
            className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white pb-safe pt-1 shadow-lg lg:hidden"
        >
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <Home className="h-5 w-5" />
                <span className="text-[10px] font-medium">Inicio</span>
            </NavLink>

            <NavLink
                to="/alza-la-voz"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <Lightbulb className="h-5 w-5" />
                <span className="text-[10px] font-medium">Alza la Voz</span>
            </NavLink>

            <NavLink
                to="/circulos"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <UsersRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">Círculos</span>
            </NavLink>

            <NavLink
                to="/perfil"
                className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                }
            >
                <UserRound className="h-5 w-5" />
                <span className="text-[10px] font-medium">Mi Perfil</span>
            </NavLink>

            {/* Position 5: "Más" — placeholder button until bottom sheet is implemented */}
            <button
                type="button"
                disabled
                aria-label="Más opciones (próximamente)"
                className="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 cursor-not-allowed"
            >
                <MoreHorizontal className="h-5 w-5" />
                <span className="text-[10px] font-medium">Más</span>
            </button>
        </nav>
    );
}
