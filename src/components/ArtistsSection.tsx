import React from 'react';
import { Mic2, Music, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { FEATURED_ARTISTS } from '../data/lasVegasData';
import { ArtistItem } from '../types';

interface ArtistsSectionProps {
  onExploreArtistEvents: (artistName: string) => void;
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({ onExploreArtistEvents }) => {
  return (
    <section id="artistas" className="py-20 bg-gradient-to-b from-[#090b10] via-[#0d1017] to-[#090b10] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Mic2 className="w-3.5 h-3.5" />
              <span>Grandes Voces y Agrupaciones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
              ARTISTAS EN LAS VEGAS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Las leyendas de la cumbia, la música folklórica y el rock latino que hacen cantar y bailar a todo Huamanga en nuestro escenario.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Escenario Techado & Sonido Profesional</span>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_ARTISTS.map((artist: ArtistItem) => (
            <div
              key={artist.id}
              className="group relative bg-zinc-900/90 rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-amber-500/60 transition-all duration-300 shadow-lg hover:shadow-amber-950/30 flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Genre Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700/60 text-amber-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Music className="w-3 h-3" />
                    {artist.genre}
                  </span>
                </div>

                {/* Presentation Date Badge */}
                {artist.presentationDate && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[11px] font-bold tracking-wide flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {artist.presentationDate}
                    </span>
                  </div>
                )}
              </div>

              {/* Artist Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-400 mt-0.5">
                    {artist.subtitle}
                  </p>

                  {artist.hits && (
                    <div className="mt-3 p-2.5 rounded-lg bg-black/40 border border-zinc-800 text-[11px] text-zinc-300">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">Éxitos en Vivo:</span>
                      <span className="italic">{artist.hits}</span>
                    </div>
                  )}

                  {artist.relatedEventTitle && (
                    <p className="mt-3 text-xs text-zinc-400">
                      Evento: <span className="text-zinc-200 font-medium">{artist.relatedEventTitle}</span>
                    </p>
                  )}
                </div>

                {/* Action */}
                <div className="mt-5 pt-3 border-t border-zinc-800">
                  <button
                    onClick={() => onExploreArtistEvents(artist.name)}
                    className="w-full py-2 px-3 rounded-xl bg-zinc-800 hover:bg-red-600 hover:text-white text-zinc-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver Fechas en Cartelera</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
