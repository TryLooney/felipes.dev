import Image from 'next/image';

export default function DesignElement() {
  return (
    <Image
      alt="Design Element"
      className="absolute top-1 xs:top-2 right-0 h-auto w-16 xs:w-18 opacity-80 sm:top-3 sm:w-24 sm:opacity-90 md:top-4 md:w-28 lg:w-32 xl:w-36"
      height={54}
      src="https://portfolio-template-1-seven.vercel.app/images/img_6625065aaabd00c.svg"
      style={{ color: 'transparent' }}
      width={146}
    />
  );
}
