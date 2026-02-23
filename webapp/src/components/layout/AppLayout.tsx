import { Outlet, NavLink } from "react-router-dom";
import { Home, Lightbulb, UserRound, UsersRound } from "lucide-react";
import { CivicumLogo } from "../icons/CivicumLogo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AppLayout() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-slate-50">
            {/* 
        TOP NAVBAR (Desktop & Mobile General)
        Sticky top nav with brand and profile access 
      */}
            <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm md:px-6">
                <div className="flex items-center gap-2">
                    {/* Logo con color de marca (Terracota) */}
                    <CivicumLogo className="h-8 w-auto" variant="brand" />
                </div>

                {/* Desktop Navigation Links (Hidden on Mobile) */}
                <nav className="hidden items-center gap-6 md:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/alza-la-voz"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        Alza la Voz
                    </NavLink>
                    <NavLink
                        to="/circulos"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-terracota-600 ${isActive ? "text-terracota-500" : "text-slate-600"}`
                        }
                    >
                        Círculos de Acción
                    </NavLink>
                </nav>

                {/* User Profile Access */}
                <div className="flex items-center gap-4">
                    <NavLink to="/perfil">
                        <Avatar className="h-9 w-9 border-2 border-transparent transition-colors hover:border-terracota-200">
                            <AvatarImage src="" alt="Avatar" />
                            <AvatarFallback className="bg-terracota-100 text-terracota-700">L0</AvatarFallback>
                        </Avatar>
                    </NavLink>
                </div>
            </header>

            {/* 
        MAIN CONTENT AREA
        Renders the active route's component
      */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 pb-24 md:pb-6">
                <Outlet />
            </main>

            {/* 
        SMART DOCK (Mobile Only PWA Bottom Navigation)
        Fixed at bottom, easy thumb access
      */}
            <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white pb-safe pt-1 shadow-lg md:hidden">
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
                    <span className="text-[10px] font-medium">Reportar</span>
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
            </nav>
        </div>
    );
}
