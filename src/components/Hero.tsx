import React from 'react';
import { Calendar, Trophy, Sparkles, MapPin, ShieldCheck, Music2, Beer, PhoneCall } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';
import { ASSETS } from '../data/assetMap';

interface HeroProps {
  onScrollToEvents: () => void;
  onScrollToGrass: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToEvents, onScrollToGrass }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with High Quality Blur and Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroVenue}
          alt="Recreo Las Vegas Ayacucho Escenario y Eventos"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105 transform animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Dark & Colorful Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/70 to-[#090b10]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-transparent to-amber-950/30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Official Las Vegas Neon Marquee Sign Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-red-500/40 backdrop-blur-md shadow-lg shadow-red-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-red-400 uppercase">
              El Templo del Espectáculo y Deporte en Ayacucho
            </span>
          </div>
        </div>

        {/* Las Vegas Emblem */}
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-red-500 via-amber-400 to-red-700 shadow-2xl vegas-glow-red transform group-hover:scale-105 transition-all duration-300">
              <img
                src={ASSETS.logo}
                alt="Emblema Recreo Las Vegas"
                className="w-full h-full object-cover rounded-xl bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-widest border border-white/20 whitespace-nowrap shadow-md">
              Ayacucho • Perú
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-wider text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] mt-4">
          VIVE LA EXPERIENCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-500">LAS VEGAS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-lg sm:text-2xl font-bold tracking-wide text-zinc-300 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-red-400 flex items-center gap-1"><Music2 className="w-5 h-5 inline text-red-500" /> Eventos</span>
          <span className="text-zinc-500">•</span>
          <span className="text-amber-400">Música en Vivo</span>
          <span className="text-zinc-500">•</span>
          <span className="text-yellow-400 flex items-center gap-1"><Beer className="w-5 h-5 inline text-amber-500" /> Diversión</span>
          <span className="text-zinc-500">•</span>
          <span className="text-emerald-400 flex items-center gap-1"><Trophy className="w-5 h-5 inline text-emerald-400" /> Grass Sintético</span>
        </p>

        {/* Location badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium">
          <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
          <span>{VENUE_INFO.address} ({VENUE_INFO.reference})</span>
        </div>

        {/* Main Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
          <button
            id="hero-events-btn"
            onClick={onScrollToEvents}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-display text-xl uppercase tracking-wider rounded-xl shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transform hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Ver Próximos Eventos</span>
          </button>

          <button
            id="hero-grass-btn"
            onClick={onScrollToGrass}
            className="w-full sm:w-auto px-7 py-4 bg-emerald-700/80 hover:bg-emerald-600 text-white font-display text-xl uppercase tracking-wider rounded-xl border border-emerald-400/40 shadow-lg shadow-emerald-900/30 transform hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Trophy className="w-5 h-5 text-emerald-300" />
            <span>Conoce Grass Las Vegas</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-red-400 mb-1">
              <Music2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Sonido Line Array</span>
            </div>
            <p className="text-xs text-zinc-400">Escenario con luces robóticas y acústica envolvente</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Grass Techado</span>
            </div>
            <p className="text-xs text-zinc-400">Césped de calidad FIFA con iluminación LED nocturna</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Beer className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Pollería & Bar</span>
            </div>
            <p className="text-xs text-zinc-400">Pollos a la brasa, chicharrones y cervezas al polo</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Estacionamiento</span>
            </div>
            <p className="text-xs text-zinc-400">Amplia playa privada con seguridad garantizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
