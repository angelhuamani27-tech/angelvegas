import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket, Share2, Eye, MessageCircle, Sparkles, Flame } from 'lucide-react';
import { EventItem } from '../types';
import { UPCOMING_EVENTS, VENUE_INFO } from '../data/lasVegasData';

interface UpcomingEventsProps {
  onSelectEvent: (event: EventItem) => void;
  onOpenFlyerLightbox: (event: EventItem) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onSelectEvent, onOpenFlyerLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filters = [
    { id: 'todos', label: 'Todos los Eventos' },
    { id: 'cumbia', label: 'Cumbia' },
    { id: 'folklore', label: 'Folklore & Andino' },
    { id: 'deporte', label: 'Campeonatos & Grass' },
  ];

  const filteredEvents = UPCOMING_EVENTS.filter((event) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'cumbia') return event.genre.toLowerCase().includes('cumbia');
    if (activeFilter === 'folklore') return event.genre.toLowerCase().includes('folk') || event.genre.toLowerCase().includes('andino');
    if (activeFilter === 'deporte') return event.genre.toLowerCase().includes('deporte') || event.genre.toLowerCase().includes('futsal');
    return true;
  });

  const handleShareWhatsApp = (e: React.MouseEvent, event: EventItem) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `¡Mira este conciertazo en RECREO LAS VEGAS en Ayacucho! 🔥\n\n🎤 *${event.title}*\n🗓️ ${event.formattedDate} - ${event.time}\n📍 ${event.venue} (${VENUE_INFO.address})\n🎟️ Entradas desde S/ ${event.zones[0]?.price ?? 20}\n\n👉 ¡Vamos juntos! Más info: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleDirectBuyWhatsApp = (e: React.MouseEvent, event: EventItem) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! 👋 Deseo comprar/reservar entradas para el evento:\n\n*${event.title}*\nFecha: ${event.formattedDate}\n\n¿Me pueden confirmar disponibilidad de zonas y métodos de pago (Yape/Plin)?`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="eventos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Flame className="w-3.5 h-3.5" />
          <span>Cartelera Oficial en Vivo</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
          PRÓXIMOS EVENTOS
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400">
          Los mejores artistas nacionales, orquestas de cumbia, gala andina y campeonatos deportivos se viven en Recreo Las Vegas.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => {
          const minPrice = Math.min(...event.zones.map((z) => z.price));

          return (
            <div
              key={event.id}
              id={`event-card-${event.id}`}
              className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/60 transition-all duration-300 flex flex-col shadow-xl hover:shadow-red-950/40 hover:-translate-y-1"
            >
              {/* Flyer Container (Clickable to view details or expand) */}
              <div
                className="relative aspect-[3/4] overflow-hidden cursor-pointer bg-black"
                onClick={() => onOpenFlyerLightbox(event)}
              >
                <img
                  src={event.flyerUrl}
                  alt={`Flyer ${event.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                      event.status === 'Ingreso Libre'
                        ? 'bg-emerald-500/90 text-white'
                        : event.status === 'Preventa Activa'
                        ? 'bg-amber-500/90 text-black font-extrabold'
                        : 'bg-red-600/90 text-white'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {event.status}
                  </span>
                </div>

                {/* Hover Quick Zoom Cue */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-black/70 text-white border border-white/20 backdrop-blur-md hover:bg-red-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Price pill on flyer bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700/60 text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5 text-amber-400" />
                    {minPrice === 0 ? 'Entrada Libre' : `Desde S/ ${minPrice}.00`}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wide">
                    {event.genre}
                  </span>
                </div>
              </div>

              {/* Event Content Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-amber-400 flex items-center gap-1.5">
                    <span>Artista Principal:</span>
                    <span className="text-white underline decoration-red-500">{event.mainArtist}</span>
                  </p>

                  {/* Supporting artists pill */}
                  {event.supportingArtists.length > 0 && (
                    <p className="mt-2 text-xs text-zinc-400 line-clamp-1">
                      Invitados: {event.supportingArtists.join(', ')}
                    </p>
                  )}

                  {/* Date & Location list */}
                  <div className="mt-4 space-y-1.5 text-xs text-zinc-300 pt-3 border-t border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="font-semibold text-zinc-200">{event.formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{event.venue} • {event.address}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-zinc-800/90 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectEvent(event)}
                      className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Ver Detalles</span>
                    </button>

                    <button
                      onClick={(e) => handleShareWhatsApp(e, event)}
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Compartir</span>
                    </button>
                  </div>

                  <button
                    onClick={(e) => handleDirectBuyWhatsApp(e, event)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Comprar / Reservar Entrada</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
