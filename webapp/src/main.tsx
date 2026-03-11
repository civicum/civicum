import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import AppLayout from './components/layout/AppLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import ProfilePage from './pages/profile/ProfilePage'
import NotFoundPage from './pages/not-found/NotFoundPage'
import UIKitPage from './pages/ui-kit/UIKitPage'
import OnboardingFlow from './pages/onboarding/OnboardingFlow'
import { useOnboardingStore } from './store/useOnboardingStore'
import './index.css'

// Rutas protegidas que requieren onboarding
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const hasCompletedOnboarding = useOnboardingStore((state) => state.hasCompletedOnboarding);
  return hasCompletedOnboarding ? <>{children}</> : <Navigate to="/onboarding" />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<OnboardingFlow />} />

          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/alza-la-voz" element={<div className="p-6">Módulo Alza la Voz (En construcción)</div>} />
            <Route path="/circulos" element={<div className="p-6">Módulo Círculos de Acción (En construcción)</div>} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/ui-kit" element={<UIKitPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)

