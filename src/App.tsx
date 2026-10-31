import { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import FeaturedWork from '@/components/FeaturedWork';
import Contact from '@/components/Contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sectionIds = ['home', 'portfolio', 'about', 'work', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useScrollReveal<HTMLDivElement>();

  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="bg-ink-950 text-bone-50 min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Portfolio />
        <About />
        <FeaturedWork />
        <Contact onNavigate={handleNavigate} />
      </main>
    </div>
  );
}

export default App;
