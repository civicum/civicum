import { Outlet, NavLink } from "react-router-dom";
import { CivicumLogo } from "../icons/CivicumLogo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SmartDock } from "./SmartDock";
import { SideRail } from "./SideRail";
import OfflineBanner from "../feedback/OfflineBanner";
import { AccessibilityOverlay } from "../ui/accessibility-overlay";
import { useNetworkStatus } from "@/lib/useNetworkStatus";
import { useState } from "react";

// Estado global de accesibilidad — Sprint 2
const defaultA11y = {
    enabled: false,
    fontSize: 'normal' as const,
    highContrast: false,
    oneStepFlow: false,
    showHelpButton: false,
};

function useAccessibility() {
    const [settings, setSettings] = useState(defaultA11y);
    const toggle = (key: keyof typeof defaultA11y, value: string | boolean) => {
        setSettings(s => ({ ...s, [key]: value }));
    };
    return { settings, toggle };
}

export default function AppLayout() {
    const { isOnline } = useNetworkStatus();
    const a11y = useAccessibility();

    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            {/* Sprint 2: Accessibility Overlay — transversal a toda la app */}
            <AccessibilityOverlay settings={a11y.settings} />

            {/* 
        TOP NAVBAR
        Sticky top nav with brand and profile access.
        Desktop nav links removed — navigation lives in SideRail (LG+) and SmartDock (XS-MD).
      */}
            <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm md:px-6">
                <div className="flex items-center gap-2">
                    {/* Logo con color de marca (Terracota) */}
                    <CivicumLogo className="h-8 w-auto" variant="brand" />
                </div>

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
        LG SHELL WRAPPER — shared offset for SideRail (Gate 5.9a audit fix)
        Applies lg:pl-[72px] once so both OfflineBanner and main are correctly
        offset from the 72px SideRail. Avoids per-element lg:ml-[72px] which
        conflicted with max-w-7xl mx-auto centering logic.
      */}
            <div className="flex-1 flex flex-col lg:pl-[72px]">
                {/* Offline Banner — real navigator.onLine detection (UI-STP-005, ADR-0006) */}
                {!isOnline && (
                    <div className="w-full max-w-7xl mx-auto px-4 pt-3 md:px-6">
                        <OfflineBanner />
                    </div>
                )}

                {/* 
          MAIN CONTENT AREA
          Renders the active route's component.
          - pb-24: bottom padding for SmartDock (XS-MD)
          - lg:pb-6: at LG+, dock is gone (side rail instead)
        */}
                <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 pb-24 lg:pb-6">
                    <Outlet />
                </main>
            </div>

            {/* SIDE RAIL — Desktop LG+ vertical navigation (UI-LAY-004) */}
            <SideRail />

            {/* SMART DOCK — Bottom bar navigation XS-MD (UI-LAY-004, UI-CMP-006) */}
            <SmartDock />
        </div>
    );
}
