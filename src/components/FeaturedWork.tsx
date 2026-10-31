import { featuredWork } from '@/data/portfolio';

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-ink-950 py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-eyebrow text-bone-400 reveal mb-4">Featured Work</p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light text-bone-50 reveal reveal-delay-1">
            Campaigns &
            <span className="italic text-bone-200"> Editorials</span>
          </h2>
        </div>

        {/* Projects — alternating layout */}
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {featuredWork.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  isReversed ? 'md:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className="md:col-span-7 [direction:ltr] reveal">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={`${project.project} — ${project.brand}`}
                      loading="lazy"
                      className="w-full h-auto object-cover image-grain aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-ink-950/0 transition-all duration-500 group-hover:bg-ink-950/20" />
                  </div>
                </div>

                {/* Text */}
                <div className="md:col-span-5 [direction:ltr] reveal reveal-delay-1">
                  <p className="text-eyebrow text-bone-400 mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-serif-display text-2xl md:text-3xl lg:text-4xl font-light text-bone-50 mb-3">
                    {project.project}
                  </h3>
                  <p className="font-sans-body text-sm text-bone-300 font-light tracking-wide mb-2">
                    {project.brand}
                  </p>
                  <p className="font-serif-display text-xl text-bone-400 italic font-light">
                    {project.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
