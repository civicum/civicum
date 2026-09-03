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
import AcademiaPage from './pages/academia/AcademiaPage'
import CiviaPage from './pages/civia/CiviaPage'
import AlzaLaVozPage from './pages/alza-la-voz/AlzaLaVozPage'
import CuentasClarasPage from './pages/cuentas-claras/CuentasClarasPage'
import VotoCiudadanoPage from './pages/voto-ciudadano/VotoCiudadanoPage'
import LandingPage from './pages/landing/LandingPage'
import ProtectedRoute from './components/routing/ProtectedRoute'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />

          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/academia" element={<AcademiaPage />} />
            <Route path="/civia" element={<CiviaPage />} />
            <Route path="/alza-la-voz" element={<AlzaLaVozPage />} />
            <Route path="/cuentas-claras" element={<CuentasClarasPage />} />
            <Route path="/voto-ciudadano" element={<VotoCiudadanoPage />} />
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
