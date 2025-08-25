'use client';

import { ThemeProvider } from './theme-provider';
import { Toaster } from './ui/sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
      forcedTheme="dark"
    >
      {children}
      <Toaster richColors />
    </ThemeProvider>
  );
}
