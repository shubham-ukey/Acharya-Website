import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config/brand';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lift ring-2 ring-gold/70 transition duration-300 hover:scale-105 hover:bg-forest-deep sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
