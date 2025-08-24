import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex w-full justify-center lg:w-1/2">
      <div className="relative aspect-square w-full max-w-[280px] xs:max-w-[320px] overflow-hidden rounded-2xl xs:rounded-3xl sm:max-w-[400px] md:max-w-[450px] lg:max-w-none">
        <Image
          alt="Hero Image"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          fill
          priority
          sizes="(max-width: 480px) 280px, (max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 450px, 50vw"
          src="/image.png"
        />
      </div>
    </div>
  );
}
