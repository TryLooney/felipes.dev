import DesignElement from './design-element';
import HeroButton from './hero-button';
import HeroContent from './hero-content';
import HeroImage from './hero-image';

export default function HeroSection() {
  return (
    <section className="mt-4 sm:mt-6 lg:mt-8" style={{ opacity: 1, transform: 'none' }}>
      <div className="rounded-2xl bg-secondary p-4 sm:rounded-3xl sm:p-6 lg:p-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:gap-12">
          <div className="w-full space-y-4 sm:space-y-6 lg:w-1/2 lg:space-y-8">
            <div className="relative">
              <HeroContent />
              <DesignElement />
            </div>
            <div className="flex justify-center sm:justify-start">
              <HeroButton />
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
