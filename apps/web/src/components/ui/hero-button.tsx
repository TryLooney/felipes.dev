import { Whatsapp } from '@/components/icons/whatsapp';

export default function HeroButton() {
  return (
    <a
      className="mt-4 inline-flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-8 py-6 font-medium text-primary-foreground text-xl shadow-xs outline-none transition-all hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 aria-invalid:border-destructive aria-invalid:ring-destructive/20 sm:mt-6 lg:mt-8 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
      data-slot="button"
      href="https://wa.me/5519993548926?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
      rel="noopener noreferrer"
      target="_blank"
    >
      <Whatsapp className="size-8 text-primary-foreground" /> Vamos Conversar
    </a>
  );
}
