import { Whatsapp } from '@/components/icons/whatsapp';

export default function HeroButton() {
  return (
    <a
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 sm:px-8 sm:py-4 sm:text-lg lg:px-10 lg:py-5 lg:text-xl"
      href="https://wa.me/5519993548926?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Conversar no WhatsApp"
    >
      <Whatsapp className="size-5 sm:size-6 lg:size-7" aria-hidden="true" />
      <span>Vamos Conversar</span>
    </a>
  );
}
