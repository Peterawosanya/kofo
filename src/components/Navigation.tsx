import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { model } from '@/data/portfolio';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Featured Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-ink-950/85 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Name / Logo */}
          <button
            onClick={() => handleNav('home')}
            className="font-serif-display text-lg md:text-xl tracking-wider text-bone-50 transition-opacity duration-300 hover:opacity-70"
          >
            {model.shortName}
            <span className="text-bone-400"> M.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link ${activeSection === item.id ? 'opacity-100' : 'opacity-50'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-bone-50 transition-opacity duration-300 hover:opacity-60"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-950 transition-all duration-700 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-serif-display text-lg text-bone-50">{model.shortName} M.</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-bone-50 transition-opacity duration-300 hover:opacity-60"
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 mt-20">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="font-serif-display text-3xl text-bone-50 transition-all duration-500 hover:text-bone-300"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${idx * 0.08 + 0.2}s, transform 0.6s ease ${idx * 0.08 + 0.2}s`,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
