import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface OnboardingState {
    hasCompletedOnboarding: boolean;
    currentStep: number;
    data: {
        communeId?: string;
        interests: string[];
    };
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    completeOnboarding: () => void;
    updateData: (data: Partial<OnboardingState['data']>) => void;
}

export const useOnboardingStore = create<OnboardingState>()(
    persist(
        (set) => ({
            hasCompletedOnboarding: false,
            currentStep: 1,
            data: {
                interests: [],
            },
            setStep: (step) => set({ currentStep: step }),
            nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
            prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
            completeOnboarding: () => set({ hasCompletedOnboarding: true, currentStep: 5 }),
            updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
        }),
        {
            name: 'civicum-onboarding-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
