import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Trophy, UtensilsCrossed, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';
import { ASSETS } from '../data/assetMap';

interface NavbarProps {
  onOpenEvents: () => void;
  onOpenGrass: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvents, onOpenGrass }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', icon: null },
    { name: 'Eventos', href: '#eventos', icon: Calendar },
    { name: 'Artistas', href: '#artistas', icon: Sparkles },
    { name: 'Grass Las Vegas', href: '#grass', icon: Trophy },
    { name: 'Carta & Bar', href: '#carta', icon: UtensilsCrossed },
    { name: 'Experiencia', href: '#experiencia', icon: null },
    { name: 'Novedades', href: '#novedades', icon: null },
    { name: 'Ubicación', href: '#contacto', icon: MapPin },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola Recreo Las Vegas! Deseo consultar sobre los próximos eventos y disponibilidad de entradas.');
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${message}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b10]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-2'
          : 'bg-gradient-to-b from-[#090b10]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-red-500 shadow-md shadow-red-500/30 group-hover:scale-105 transition-transform bg-black flex-shrink-0">
              <img
                src={ASSETS.logo}
                alt="Recreo Las Vegas Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl sm:text-3xl tracking-wider text-red-500 drop-shadow-[0_2px_10px_rgba(239,68,68,0.5)]">
                  RECREO LAS VEGAS
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-widest text-zinc-400 uppercase hidden sm:block">
                Ayacucho • Eventos & Grass
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors flex items-center gap-1.5"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5 text-amber-400" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-grass-btn"
              onClick={onOpenGrass}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reservar Grass</span>
            </button>
            <button
              id="nav-events-btn"
              onClick={onOpenEvents}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg shadow-lg shadow-red-600/30 hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ver Entradas</span>
            </button>
            <button
              id="nav-whatsapp-btn"
              onClick={handleWhatsAppClick}
              title="Escríbenos por WhatsApp"
              className="p-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-lg border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-mobile-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="p-2 text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              id="nav-toggle-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1017] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800/80 rounded-lg"
              >
                {link.icon && <link.icon className="w-4 h-4 text-amber-400" />}
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvents();
              }}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Ver Próximos Eventos</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGrass();
              }}
              className="w-full py-2.5 bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 font-bold text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>Reservar Cancha Grass</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
