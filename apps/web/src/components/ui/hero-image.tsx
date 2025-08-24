import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex w-full lg:w-1/2">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl">
        <Image
          alt="Imagem do portfólio"
          className="object-cover transition-transform duration-300 hover:scale-105"
          fill
          loading="lazy"
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src="/image.png"
        />
      </div>
    </div>
  );
}
