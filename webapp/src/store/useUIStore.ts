import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UIState {
    theme: 'light' | 'dark' | 'system';
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
    isDockVisible: boolean;
    setDockVisible: (visible: boolean) => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            theme: 'system',
            setTheme: (theme) => set({ theme }),
            isDockVisible: true,
            setDockVisible: (isDockVisible) => set({ isDockVisible }),
        }),
        {
            name: 'civicum-ui-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
