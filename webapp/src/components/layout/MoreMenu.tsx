import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserRound, PieChart, Vote, Settings, X, MoreHorizontal } from "lucide-react";

interface MoreMenuProps {
    isDesktop?: boolean;
}

export function MoreMenu({ isDesktop = false }: MoreMenuProps) {
    const [openPath, setOpenPath] = useState<string | null>(null);
    const location = useLocation();
    const isOpen = openPath === location.pathname;

    const closeMenu = () => setOpenPath(null);
    const toggle = () => setOpenPath(isOpen ? null : location.pathname);

    const linkClass = "flex items-center gap-3 p-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors w-full rounded-md";

    const triggerClass = isDesktop
        ? "flex flex-col items-center justify-center gap-1 w-full py-3 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer flex-shrink-0"
        : "flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-500 hover:text-slate-900 transition-colors cursor-pointer flex-shrink-0";

    return (
        <>
            <button
                type="button"
                onClick={toggle}
                aria-label="Más opciones"
                aria-expanded={isOpen}
                className={triggerClass}
            >
                <div className="relative">
                    <MoreHorizontal className="h-5 w-5" />
                    {/* Badge UI-CMP-006 (Partial state point) */}
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 -translate-y-1/2 translate-x-1/2 ring-2 ring-white" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-medium">Más</span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 z-[60] bg-slate-900/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none" 
                        onClick={closeMenu} 
                        aria-hidden="true" 
                    />
                    
                    {/* Panel (BottomSheet on Mobile, Popover on Desktop) */}
                    <div className={`fixed z-[70] bg-white shadow-2xl flex flex-col ${
                        isDesktop 
                            ? "left-[72px] bottom-4 w-64 rounded-xl border border-slate-200" 
                            : "inset-x-0 bottom-0 rounded-t-2xl pb-safe border-t border-slate-200"
                    }`}>
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <span className="font-semibold text-slate-900">Más opciones</span>
                            <button onClick={closeMenu} className="p-1 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors" aria-label="Cerrar menú">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col p-2 gap-1">
                            <NavLink to="/perfil" className={linkClass} onClick={closeMenu}>
                                <UserRound className="h-5 w-5 text-slate-400" /> Mi Perfil
                            </NavLink>
                            <button disabled className={`${linkClass} opacity-50 cursor-not-allowed`} onClick={closeMenu}>
                                <PieChart className="h-5 w-5 text-slate-400" /> Cuentas Claras
                            </button>
                            <button disabled className={`${linkClass} opacity-50 cursor-not-allowed`} onClick={closeMenu}>
                                <Vote className="h-5 w-5 text-slate-400" /> Voto Ciudadano
                            </button>
                            <div className="h-px bg-slate-100 mx-2 my-1" />
                            <button disabled className={`${linkClass} opacity-50 cursor-not-allowed`} onClick={closeMenu}>
                                <Settings className="h-5 w-5 text-slate-400" /> Configuración
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
