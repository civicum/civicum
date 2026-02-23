import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FeatureFlagsState {
    flags: {
        enableGamificationCards: boolean; // Variante A/B: Mostrar ranking local o ocultarlo por dogma ético
        enableCommunityLeaderboard: boolean; // Variante A/B
        enableHarshModerationBlur: boolean; // Variante A/B: Ocultar o mostrar reportes tóxicos
    };
    setFlag: (flag: keyof FeatureFlagsState['flags'], value: boolean) => void;
    // Simulación de un motor de A/B Testing que asignaría variantes aleatorias o por cohorte al registrarse
    initializeABTests: () => void;
}

export const useFeatureFlagsStore = create<FeatureFlagsState>()(
    persist(
        (set) => ({
            flags: {
                enableGamificationCards: false,
                enableCommunityLeaderboard: false,
                enableHarshModerationBlur: true,
            },
            setFlag: (flag, value) =>
                set((state) => ({ flags: { ...state.flags, [flag]: value } })),
            initializeABTests: () =>
                set({
                    flags: {
                        // Simulated random cohort assignment (50/50)
                        enableGamificationCards: Math.random() > 0.5,
                        enableCommunityLeaderboard: Math.random() > 0.5,
                        enableHarshModerationBlur: Math.random() > 0.5,
                    }
                })
        }),
        {
            name: 'civicum-feature-flags',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
