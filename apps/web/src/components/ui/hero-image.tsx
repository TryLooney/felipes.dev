import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="flex w-full gap-4 sm:gap-6 lg:w-1/2">
      <Image
        alt="Hero Image"
        className="h-auto w-full rounded-3xl object-cover"
        height={200}
        src="/image.png"
        style={{ color: 'transparent' }}
        width={200}
      />
    </div>
  );
}
