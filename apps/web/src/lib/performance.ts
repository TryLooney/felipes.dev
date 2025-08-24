// Utilitários de performance para otimizações mobile

export const PERFORMANCE_CONFIG = {
  // Configurações de lazy loading
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
  },

  // Configurações de imagens
  images: {
    quality: 85,
    formats: ['webp', 'avif'],
    sizes: {
      mobile: '100vw',
      tablet: '50vw',
      desktop: '33vw',
    },
  },

  // Configurações de animações
  animations: {
    duration: 200,
    easing: 'ease-out',
    prefersReducedMotion: true,
  },
} as const;

// Hook para detectar preferências de movimento reduzido
export const getPrefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Hook para detectar conexão lenta
export const getSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  const connection = (
    navigator as Navigator & { connection?: { effectiveType?: string } }
  ).connection;
  return (
    connection?.effectiveType === 'slow-2g' ||
    connection?.effectiveType === '2g'
  );
};

// Função para otimizar carregamento de imagens
export const getImageSizes = (
  breakpoint: 'mobile' | 'tablet' | 'desktop'
): string => {
  return PERFORMANCE_CONFIG.images.sizes[breakpoint];
};
