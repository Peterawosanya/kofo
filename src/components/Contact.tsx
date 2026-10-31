import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { contact, model, heroImagePortrait } from '@/data/portfolio';

interface ContactProps {
  onNavigate: (sectionId: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <section id="contact" className="relative bg-ink-950 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImagePortrait}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top image-grain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-eyebrow text-bone-400 reveal mb-6">Contact</p>
          <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-bone-50 mb-6 reveal reveal-delay-1">
            Book
            <br />
            <span className="italic text-bone-200">Kọ́fọ́wọ́rọ́lá</span>
          </h2>
          <p className="font-sans-body text-sm md:text-base text-bone-300 font-light leading-[1.8] max-w-md mx-auto mb-12 md:mb-14 reveal reveal-delay-2">
            For bookings, campaigns, editorial requests, and collaborations,
            please reach out through any of the channels below.
          </p>

          {/* CTA button */}
          <div className="reveal reveal-delay-3 mb-16 md:mb-20">
            <a
              href={`mailto:${contact.email}?subject=Booking Inquiry — ${model.name}`}
              className="btn-primary inline-block"
            >
              Book Kọ́fọ́wọ́rọ́lá
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group flex flex-col items-center gap-3 reveal reveal-delay-3 transition-opacity duration-300 hover:opacity-80"
            >
              <Mail size={20} strokeWidth={1} className="text-bone-400" />
              <p className="text-eyebrow text-bone-400 text-[0.5rem]">Email</p>
              <p className="font-sans-body text-xs md:text-sm text-bone-100 font-light break-all">
                {contact.email}
              </p>
            </a>

            {/* Phone / WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 reveal reveal-delay-4 transition-opacity duration-300 hover:opacity-80"
            >
              <Phone size={20} strokeWidth={1} className="text-bone-400" />
              <p className="text-eyebrow text-bone-400 text-[0.5rem]">Phone / WhatsApp</p>
              <p className="font-sans-body text-xs md:text-sm text-bone-100 font-light">
                {contact.phone}
              </p>
              <p className="font-sans-body text-xs text-bone-400 font-light">
                {contact.whatsapp}
              </p>
            </a>

            {/* Instagram */}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 reveal reveal-delay-5 transition-opacity duration-300 hover:opacity-80"
            >
              <Instagram size={20} strokeWidth={1} className="text-bone-400" />
              <p className="text-eyebrow text-bone-400 text-[0.5rem]">Instagram</p>
              <p className="font-sans-body text-xs md:text-sm text-bone-100 font-light">
                {contact.instagram}
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 md:mt-32 pt-10 border-t border-white/10 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onNavigate('home')}
            className="font-serif-display text-base text-bone-300 hover:text-bone-50 transition-colors duration-300"
          >
            {model.shortName} Mutiat
          </button>

          <div className="flex items-center gap-2 text-bone-400">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-eyebrow text-[0.5rem] hover:text-bone-200 transition-colors duration-300"
            >
              Instagram
            </a>
            <ArrowUpRight size={10} strokeWidth={1} />
          </div>

          <p className="text-eyebrow text-bone-400 text-[0.5rem]">
            © {new Date().getFullYear()} — All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
}
