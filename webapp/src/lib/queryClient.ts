import { QueryClient } from '@tanstack/react-query'

/**
 * Shared QueryClient instance for the app.
 * Gate 5.7: enables real async data fetching with proper loading/error states.
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Real retry: 1 retry with exponential backoff (no artificial delays)
            retry: 1,
            // Stale time: 30 seconds (reasonable for read-only data)
            staleTime: 30_000,
        },
    },
})
