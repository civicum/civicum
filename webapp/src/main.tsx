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
import ProtectedRoute from './components/routing/ProtectedRoute'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<OnboardingFlow />} />

          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/academia" element={<div className="p-6">Módulo Academia (En construcción)</div>} />
            <Route path="/civia" element={<div className="p-6">Módulo Civia (En construcción)</div>} />
            <Route path="/alza-la-voz" element={<div className="p-6">Módulo Alza la Voz (En construcción)</div>} />
            <Route path="/circulos" element={<Navigate to="/alza-la-voz" replace />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/ui-kit" element={<UIKitPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
