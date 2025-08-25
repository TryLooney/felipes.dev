import { Whatsapp } from '@/components/icons/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      className="fixed right-4 xs:right-6 bottom-4 xs:bottom-6 z-50 flex h-14 xs:h-16 w-14 xs:w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      href="https://wa.me/5519993548926?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
      rel="noopener noreferrer"
      target="_blank"
      title="Conversar no WhatsApp"
    >
      <Whatsapp className="h-7 xs:h-8 w-7 xs:w-8 text-white" />
    </a>
  );
}
