import { Whatsapp } from '@/components/icons/whatsapp';

export default function HeroButton() {
  return (
    <a
      className="mt-3 inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 xs:px-6 py-3 xs:py-4 font-medium text-base text-primary-foreground xs:text-lg shadow-xs outline-none transition-all hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 sm:mt-4 sm:w-auto sm:px-8 sm:py-5 sm:text-xl lg:mt-6 lg:px-10 lg:py-6 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0"
      data-slot="button"
      href="https://wa.me/5519993548926?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
      rel="noopener noreferrer"
      target="_blank"
    >
      <Whatsapp className="size-5 xs:size-6 text-primary-foreground sm:size-7 lg:size-8" />
      <span className="whitespace-nowrap">Vamos Conversar</span>
    </a>
  );
}
