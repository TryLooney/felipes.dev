import ClientSection from '@/components/ui/client-section';
import ClientsScroll from '@/components/ui/clients-scroll';
import CodeSection from '@/components/ui/code-section';
import HeroSection from '@/components/ui/hero-section';

export default function Home() {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ClientSection />
        <CodeSection />
        <ClientsScroll />
      </div>
    </div>
  );
}
