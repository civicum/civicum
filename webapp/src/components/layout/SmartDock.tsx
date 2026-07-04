import { NavLink } from "react-router-dom";
import { Home, Lightbulb, GraduationCap, Bot } from "lucide-react";
import { MoreMenu } from "./MoreMenu";

/**
 * SmartDock — Bottom navigation bar (XS-MD)
 *
 * SSOT: UI-NAV-002 — "Altura: 56px" + safe area iOS
 * Structure: outer <nav> applies pb-safe (env(safe-area-inset-bottom)).
 *            inner <div> is exactly h-[56px] — the usable content zone.
 * Total exterior height = 56px + env(safe-area-inset-bottom, 0px).
 * Requires viewport-fit=cover in index.html for iOS activation.
 */
export function SmartDock() {
    return (
        <nav
            data-testid="smart-dock"
            className="fixed bottom-0 left-0 z-50 w-full border-t bg-white pb-safe shadow-lg lg:hidden"
        >
            {/* 56px usable content zone — SSOT UI-NAV-002 */}
            <div className="flex h-[56px] items-center justify-around pt-1">
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
                    to="/academia"
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                    }
                >
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Academia</span>
                </NavLink>

                <NavLink
                    to="/civia"
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${isActive ? "text-terracota-500" : "text-slate-500 hover:text-slate-900"}`
                    }
                >
                    <Bot className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Civia</span>
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

                {/* Tab 5: "Más" — Bottom Sheet Overlay */}
                <MoreMenu isDesktop={false} />
            </div>
        </nav>
    );
}

