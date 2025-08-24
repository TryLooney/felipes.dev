import DesignElement from './design-element';
import HeroButton from './hero-button';
import HeroContent from './hero-content';
import HeroImage from './hero-image';

export default function HeroSection() {
  return (
    <section
      className="mt-2 xs:mt-3 sm:mt-4 md:mt-6"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="rounded-2xl xs:rounded-[18px] bg-secondary p-3 xs:p-4 sm:rounded-[20px] sm:p-6 md:p-7 lg:p-8">
        <div className="flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:flex-row lg:gap-10 xl:gap-12">
          <div className="w-full space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:w-1/2 lg:space-y-8">
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
