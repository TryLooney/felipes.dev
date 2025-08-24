import DesignElement from './design-element';
import HeroButton from './hero-button';
import HeroContent from './hero-content';
import HeroImage from './hero-image';

export default function HeroSection() {
  return (
    <section className="mt-4" style={{ opacity: 1, transform: 'none' }}>
      <div className="rounded-[20px] bg-secondary p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full space-y-6 sm:space-y-8 lg:w-1/2">
            <div className="relative">
              <HeroContent />
              <DesignElement />
            </div>
            <HeroButton />
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
