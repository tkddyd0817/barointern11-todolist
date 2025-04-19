'use client';

import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function TodoQueryProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1분
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary>
      {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}