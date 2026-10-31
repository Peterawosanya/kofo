import { bio, stats, aboutImage, model } from '@/data/portfolio';

const statLabels: Record<keyof typeof stats, string> = {
  height: 'Height',
  bust: 'Bust',
  waist: 'Waist',
  hips: 'Hips',
  shoes: 'Shoe Size',
  hair: 'Hair',
  eyes: 'Eyes',
  location: 'Location',
};

export default function About() {
  return (
    <section id="about" className="bg-ink-900 py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="lg:col-span-5 reveal">
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt={model.name}
                loading="lazy"
                className="w-full h-auto object-cover image-grain aspect-[3/4]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-eyebrow text-bone-400 reveal mb-4">About</p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light text-bone-50 mb-10 md:mb-12 reveal reveal-delay-1">
              The Woman Behind
              <br />
              <span className="italic text-bone-200">the Frame</span>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6">
              {bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`font-sans-body text-sm md:text-base text-bone-300 leading-[1.8] font-light max-w-xl reveal reveal-delay-${idx + 2}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-14 md:mt-16 pt-10 border-t border-white/10">
              <p className="text-eyebrow text-bone-400 reveal mb-8">Measurements</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
                {(Object.keys(stats) as (keyof typeof stats)[]).map((key, idx) => (
                  <div
                    key={key}
                    className={`reveal reveal-delay-${Math.min(idx + 1, 5)}`}
                  >
                    <p className="text-eyebrow text-bone-400 text-[0.5rem] mb-2">
                      {statLabels[key]}
                    </p>
                    <p className="font-serif-display text-base md:text-lg text-bone-50 font-light">
                      {stats[key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
