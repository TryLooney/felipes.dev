'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

type MobileOptimizerProps = {
  children: React.ReactNode;
};

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const checkConnection = () => {
      const connection = (
        navigator as Navigator & { connection?: { effectiveType?: string } }
      ).connection;
      const slowConnection =
        connection?.effectiveType === 'slow-2g' ||
        connection?.effectiveType === '2g';
      setIsSlowConnection(slowConnection);
    };

    checkDevice();
    checkConnection();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div
      className={`mobile-optimized ${isMobile ? 'mobile' : 'desktop'} ${isSlowConnection ? 'slow-connection' : ''}`}
      data-mobile={isMobile}
      data-slow-connection={isSlowConnection}
    >
      {children}
    </div>
  );
}
