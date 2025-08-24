import type { Metadata } from 'next';
import ClientSection from '@/components/ui/client-section';
import ClientsScroll from '@/components/ui/clients-scroll';
import CodeSection from '@/components/ui/code-section';
import HeroSection from '@/components/ui/hero-section';
import OptimizedContainer from '@/components/ui/optimized-container';

export const metadata: Metadata = {
  title: 'Felipe Santos - Desenvolvedor Full Stack',
  description:
    'Portfólio de Felipe Santos, desenvolvedor full stack especializado em tecnologia de ponta e resultados excepcionais.',
  keywords: [
    'desenvolvedor',
    'full stack',
    'react',
    'typescript',
    'node.js',
    'portfólio',
  ],
  authors: [{ name: 'Felipe Santos' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'Felipe Santos - Desenvolvedor Full Stack',
    description:
      'Portfólio de Felipe Santos, desenvolvedor full stack especializado em tecnologia de ponta e resultados excepcionais.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Santos - Desenvolvedor Full Stack',
    description:
      'Portfólio de Felipe Santos, desenvolvedor full stack especializado em tecnologia de ponta e resultados excepcionais.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <OptimizedContainer>
        <HeroSection />
        <ClientSection />
        <CodeSection />
        <ClientsScroll />
      </OptimizedContainer>
    </main>
  );
}
