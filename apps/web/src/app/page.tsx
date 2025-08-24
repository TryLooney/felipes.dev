import ClientSection from '@/components/ui/client-section';
import ClientsScroll from '@/components/ui/clients-scroll';
import CodeSection from '@/components/ui/code-section';
import HeroSection from '@/components/ui/hero-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[1200px] px-3 xs:px-4 sm:px-6 md:px-7 lg:px-8">
        <HeroSection />
        <ClientSection />
        <CodeSection />
        <ClientsScroll />
      </div>
    </div>
  );
}
