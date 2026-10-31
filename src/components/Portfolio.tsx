import { useState, useMemo, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  portfolioImages,
  categories,
  type PortfolioCategory,
  type PortfolioImage,
} from '@/data/portfolio';

const ALL = 'All' as const;
type FilterOption = typeof ALL | PortfolioCategory;

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterOption>(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === ALL) return portfolioImages;
    return portfolioImages.filter((img) => img.category === filter);
  }, [filter]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const filterOptions: FilterOption[] = [ALL, ...categories];

  return (
    <section id="portfolio" className="bg-ink-950 py-24 md:py-32 lg:py-40">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-20">
        <p className="text-eyebrow text-bone-400 reveal mb-4">Portfolio</p>
        <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light text-bone-50 reveal reveal-delay-1">
          Selected Work
        </h2>

        {/* Category filters */}
        <div className="mt-10 md:mt-12 flex flex-wrap gap-6 md:gap-10 reveal reveal-delay-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`text-eyebrow transition-all duration-500 ${
                filter === option
                  ? 'text-bone-50 opacity-100'
                  : 'text-bone-400 opacity-50 hover:opacity-80'
              }`}
            >
              {option}
              {filter === option && (
                <span className="block mt-2 h-px bg-bone-50 w-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image grid */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {filteredImages.map((image, index) => (
            <GridItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          image={filteredImages[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          counter={`${lightboxIndex + 1} / ${filteredImages.length}`}
        />
      )}
    </section>
  );
}

function GridItem({
  image,
  index,
  onClick,
}: {
  image: PortfolioImage;
  index: number;
  onClick: () => void;
}) {
  const aspectClass =
    image.aspect === 'wide'
      ? 'aspect-[16/10]'
      : image.aspect === 'square'
      ? 'aspect-square'
      : 'aspect-[3/4]';

  // Make some items span 2 rows for editorial variety
  const spanClass =
    image.aspect === 'tall' && index % 7 === 0
      ? 'row-span-2'
      : '';

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden bg-ink-800 ${aspectClass} ${spanClass} cursor-pointer`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover image-grain transition-all duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink-950/0 transition-all duration-500 group-hover:bg-ink-950/40" />

      {/* Hover caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-eyebrow text-bone-300 text-[0.55rem] mb-1">
          {image.category}
        </p>
        {image.caption && (
          <p className="font-serif-display text-sm md:text-base text-bone-50 font-light italic">
            {image.caption}
          </p>
        )}
      </div>
    </button>
  );
}

function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
  counter,
}: {
  image: PortfolioImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  counter: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-bone-400 hover:text-bone-50 transition-colors duration-300"
        aria-label="Close"
      >
        <X size={24} strokeWidth={1} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 z-10 text-bone-400 hover:text-bone-50 transition-colors duration-300"
        aria-label="Previous"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>

      {/* Image */}
      <div
        className="max-w-[85vw] max-h-[82vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src.replace('w=900', 'w=1400')}
          alt={image.alt}
          className="max-w-full max-h-[78vh] object-contain image-grain"
        />
        <div className="mt-4 text-center">
          {image.caption && (
            <p className="font-serif-display text-base md:text-lg text-bone-200 italic font-light">
              {image.caption}
            </p>
          )}
          <p className="text-eyebrow text-bone-400 text-[0.55rem] mt-2">
            {image.category} — {counter}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 z-10 text-bone-400 hover:text-bone-50 transition-colors duration-300"
        aria-label="Next"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>
    </div>
  );
}
