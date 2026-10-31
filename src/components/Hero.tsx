import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { model, heroImage, heroImagePortrait } from '@/data/portfolio';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-ink-950">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${
          loaded ? 'scale-100' : 'scale-110'
        }`}
      >
        <img
          src={heroImage}
          alt={model.name}
          className="h-full w-full object-cover object-center image-grain"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/20 to-ink-950/70" />
        <div className="absolute inset-0 bg-ink-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Title line */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-eyebrow text-bone-300 mb-6 md:mb-8">
            {model.tagline}
          </p>
        </div>

        {/* Name */}
        <h1
          className={`font-serif-display text-bone-50 leading-[0.95] tracking-tight transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-light">
            Kọ́fọ́wọ́rọ́lá
          </span>
          <span className="block text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-light italic text-bone-200">
            Mutiat
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`mt-8 md:mt-10 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="text-eyebrow text-bone-200 border-t border-bone-400/20 pt-4 px-8">
            {model.title}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => onNavigate('portfolio')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '0.8s' }}
        aria-label="Scroll to portfolio"
      >
        <span className="text-eyebrow text-bone-400 text-[0.55rem]">Scroll</span>
        <ChevronDown
          size={16}
          strokeWidth={1}
          className="text-bone-400 animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </button>

      {/* Hidden preloaded portrait for mobile */}
      <img
        src={heroImagePortrait}
        alt=""
        className="hidden"
        loading="eager"
      />
    </section>
  );
}
