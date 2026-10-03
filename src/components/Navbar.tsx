import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'about', number: '01', label: 'ABOUT' },
  { id: 'skills', number: '02', label: 'SKILLS' },
  { id: 'experience', number: '03', label: 'EXPERIENCE' },
  { id: 'projects', number: '04', label: 'PROJECTS' },
  { id: 'journey', number: '05', label: 'JOURNEY' },
  { id: 'contact', number: '06', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(windowHeight > 0 && totalScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F8F5]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        {/* Subtle reading progress indicator bar */}
        <div 
          className="absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <span className="font-display font-black text-xl tracking-tighter text-[#121212] group-hover:opacity-70 transition-opacity">
              AJULRAJ
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-black/40 uppercase">
              / PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`group relative text-xs font-mono tracking-wider uppercase transition-colors py-1 ${
                    isActive ? 'text-black font-semibold' : 'text-black/60 hover:text-black'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span 
                      className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Quick Contact Link */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black border border-black/20 hover:border-black bg-white px-3.5 py-1.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-black/5 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#F8F8F5] z-30 lg:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-mono tracking-widest text-black/40 uppercase">
            Navigation Index
          </p>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-baseline gap-4 text-left group py-2 border-b border-black/10 focus:outline-none"
              >
                <span className="text-xs font-mono text-black/40 group-hover:text-black">
                  {item.number}
                </span>
                <span className="font-display text-3xl font-bold tracking-tight text-black group-hover:translate-x-2 transition-transform">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile footer */}
        <div className="space-y-2 pt-6 border-t border-black/10">
          <div className="text-xs font-mono text-black/80 font-medium">
            AJULRAJ · KANNUR, KERALA
          </div>
          <div className="text-xs text-black/50 font-mono">
            Application Support Analyst &amp; Aspiring Data Analyst
          </div>
        </div>
      </div>
    </>
  );
};
