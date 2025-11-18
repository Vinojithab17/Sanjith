// app/layout.tsx
'use client'; // needed for state and router events

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // App Router hooks
import { Backdrop, CircularProgress } from '@mui/material';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // triggers effect on route change

  useEffect(() => {
    // Stop loading after route change
    const handleComplete = () => setLoading(false);

    // Next.js App Router doesn’t have Router.events like pages directory
    // We can simulate it using pathname change
    handleComplete(); // stop loading on initial render
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {/* Spinner overlay */}
        <Backdrop
          open={loading}
          sx={{
            color: '#1976d2',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
