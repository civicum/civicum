import { useState, useEffect } from 'react';

/**
 * useNetworkStatus — Real browser online/offline detection.
 *
 * Uses `navigator.onLine` for initial value + `online`/`offline` window events.
 * No timers, no polling — pure event-driven.
 *
 * DOCREF: ADR-0006 → Offline state; UI-STP-005 → banner NO alarma.
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true,
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline };
}
