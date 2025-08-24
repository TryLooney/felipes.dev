import Image from 'next/image';

export default function DesignElement() {
  return (
    <Image
      alt="Elemento decorativo"
      className="absolute right-0 top-2 h-auto w-16 opacity-80 sm:top-4 sm:w-20 md:w-24 lg:w-28 xl:w-32"
      height={54}
      loading="lazy"
      priority={false}
      src="https://portfolio-template-1-seven.vercel.app/images/img_6625065aaabd00c.svg"
      width={146}
    />
  );
}
