import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex w-full justify-center lg:w-1/2">
      <div className="relative h-56 xs:h-64 w-full overflow-hidden rounded-3xl sm:h-72 md:h-80 lg:h-[320px]">
        <Image
          alt="Felipe Santos - Desenvolvedor Full Stack"
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
          fill
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          src="/me.png"
        />
      </div>
    </div>
  );
}
