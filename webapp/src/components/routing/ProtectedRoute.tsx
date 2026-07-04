import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const hasCompletedOnboarding = useOnboardingStore((state) => state.hasCompletedOnboarding);
  return hasCompletedOnboarding ? <>{children}</> : <Navigate to="/onboarding" />;
}
