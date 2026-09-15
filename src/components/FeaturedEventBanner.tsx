import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Ticket, Flame, MessageCircle, Star } from 'lucide-react';
import { EventItem } from '../types';
import { VENUE_INFO } from '../data/lasVegasData';

interface FeaturedEventBannerProps {
  event: EventItem;
  onSelectEvent: (event: EventItem) => void;
  onOpenFlyerLightbox: (event: EventItem) => void;
}

export const FeaturedEventBanner: React.FC<FeaturedEventBannerProps> = ({
  event,
  onSelectEvent,
  onOpenFlyerLightbox,
}) => {
  // Countdown calculation to the event
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 40,
  });

  useEffect(() => {
    const targetDate = new Date(event.date + 'T20:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  const handleFastBuyWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! 🔥 Deseo reservar/comprar para el concierto estelar:\n\n*${event.title}*\nArtista: ${event.mainArtist}\nFecha: ${event.formattedDate}\n\n¿Tienen boxes o entradas VIP disponibles? ¡Muchas gracias!`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-red-500/50 bg-gradient-to-r from-red-950/80 via-[#0d1017] to-amber-950/60 p-6 sm:p-10 shadow-2xl vegas-glow-red">
        {/* Glow & Backdrop */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Event details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md animate-pulse">
                <Flame className="w-3.5 h-3.5" />
                <span>Evento Estelar del Mes</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Preventa 1 Disponible
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white leading-tight">
              {event.title}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300">
              ¡Ayacucho se paraliza! Disfruta en vivo con <strong className="text-amber-400">{event.mainArtist}</strong> y {event.supportingArtists.join(', ')} en el escenario principal techado de Recreo Las Vegas.
            </p>

            {/* Date & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-300 pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-400" />
                <span className="font-semibold text-white">{event.formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{event.venue} • {event.address}</span>
              </div>
            </div>

            {/* Countdown Widget */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                Cuenta Regresiva para el Concierto:
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 rounded-xl bg-black/80 border border-zinc-800 text-center min-w-[55px] sm:min-w-[65px]">
                  <span className="font-display text-2xl sm:text-3xl text-white block leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-400 font-bold">Días</span>
                </div>
                <span className="text-zinc-600 font-bold text-xl">:</span>
                <div className="p-2 sm:p-3 rounded-xl bg-black/80 border border-zinc-800 text-center min-w-[55px] sm:min-w-[65px]">
                  <span className="font-display text-2xl sm:text-3xl text-white block leading-none">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-400 font-bold">Horas</span>
                </div>
                <span className="text-zinc-600 font-bold text-xl">:</span>
                <div className="p-2 sm:p-3 rounded-xl bg-black/80 border border-zinc-800 text-center min-w-[55px] sm:min-w-[65px]">
                  <span className="font-display text-2xl sm:text-3xl text-white block leading-none">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-400 font-bold">Min</span>
                </div>
                <span className="text-zinc-600 font-bold text-xl">:</span>
                <div className="p-2 sm:p-3 rounded-xl bg-black/80 border border-zinc-800 text-center min-w-[55px] sm:min-w-[65px]">
                  <span className="font-display text-2xl sm:text-3xl text-red-500 block leading-none">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-400 font-bold">Seg</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleFastBuyWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservar Box / Entradas WhatsApp</span>
              </button>

              <button
                onClick={() => onSelectEvent(event)}
                className="w-full sm:w-auto px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ticket className="w-4 h-4 text-amber-400" />
                <span>Ver Zonas & Precios</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Flyer Preview */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/50 cursor-pointer group transform hover:rotate-1 hover:scale-105 transition-all duration-300"
              onClick={() => onOpenFlyerLightbox(event)}
            >
              <img
                src={event.flyerUrl}
                alt={event.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-center">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                  Toca para ampliar flyer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
