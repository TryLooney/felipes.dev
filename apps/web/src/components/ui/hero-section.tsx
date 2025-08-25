import DesignElement from './design-element';
import HeroButton from './hero-button';
import HeroContent from './hero-content';
import HeroImage from './hero-image';

export default function HeroSection() {
  return (
    <section
      className="mt-4 xs:mt-6 sm:mt-8 md:mt-10"
      id="hero"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="rounded-2xl xs:rounded-3xl bg-secondary p-4 xs:p-6 sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-14 xl:gap-16">
          <div className="w-full space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:w-1/2 lg:space-y-12">
            <div className="relative">
              <HeroContent />
              <DesignElement />
            </div>
            <div className="flex justify-start">
              <HeroButton />
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
