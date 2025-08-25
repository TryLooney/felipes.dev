import { Header } from '@/components/header';
import ClientSection from '@/components/ui/client-section';

import CodeSection from '@/components/ui/code-section';
import ContactSection from '@/components/ui/contact-section';
import HeroSection from '@/components/ui/hero-section';
import ProjectsSection from '@/components/ui/projects-section';
import ServicesSection from '@/components/ui/services-section';
import WhatsAppFloat from '@/components/ui/whatsapp-float';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto mt-24 w-full max-w-[1200px] px-3 xs:px-4 sm:px-6 md:px-7 lg:px-8">
        <HeroSection />
        <ClientSection />
        <ProjectsSection />
        <ServicesSection />
        <CodeSection />
        <ContactSection />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
