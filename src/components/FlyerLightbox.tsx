import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Ticket, Share2, ZoomIn, ZoomOut, Download, MessageCircle } from 'lucide-react';
import { EventItem } from '../types';
import { UPCOMING_EVENTS, VENUE_INFO } from '../data/lasVegasData';

interface FlyerLightboxProps {
  currentEvent: EventItem | null;
  onClose: () => void;
  onSelectEventForBooking: (event: EventItem) => void;
}

export const FlyerLightbox: React.FC<FlyerLightboxProps> = ({
  currentEvent,
  onClose,
  onSelectEventForBooking,
}) => {
  if (!currentEvent) return null;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    const idx = UPCOMING_EVENTS.findIndex((e) => e.id === currentEvent.id);
    if (idx !== -1) setCurrentIndex(idx);
  }, [currentEvent]);

  const activeEvent = UPCOMING_EVENTS[currentIndex] || currentEvent;

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? UPCOMING_EVENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === UPCOMING_EVENTS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShare = () => {
    const text = encodeURIComponent(
      `¡Mira este flyer en RECREO LAS VEGAS en Ayacucho! 🔥\n*${activeEvent.title}* - ${activeEvent.formattedDate}\nMás detalles: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between z-20 pb-3 border-b border-zinc-800/80">
        <div>
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
            Flyer Oficial • Recreo Las Vegas
          </span>
          <h3 className="text-lg font-display uppercase tracking-wide text-white truncate max-w-md sm:max-w-xl">
            {activeEvent.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            title={isZoomed ? 'Alejar' : 'Acercar'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={handleShare}
            className="p-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-colors"
            title="Compartir en WhatsApp"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md transition-all shadow-xl"
          aria-label="Flyer anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Flyer Graphic */}
        <div
          className={`relative transition-all duration-300 flex items-center justify-center max-h-[75vh] ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={activeEvent.flyerUrl}
            alt={activeEvent.title}
            className="max-h-[75vh] max-w-[90vw] sm:max-w-[70vw] object-contain rounded-xl shadow-2xl border border-zinc-800"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md transition-all shadow-xl"
          aria-label="Flyer siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Floating Bar */}
      <div className="z-20 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto w-full">
        <div className="text-xs text-zinc-400 text-center sm:text-left">
          <span className="font-semibold text-white">{activeEvent.formattedDate}</span> • {activeEvent.time} • {activeEvent.venue}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400">
            {currentIndex + 1} de {UPCOMING_EVENTS.length}
          </span>
          <button
            onClick={() => {
              onClose();
              onSelectEventForBooking(activeEvent);
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 hover:brightness-110 transition-all flex items-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            <span>Comprar / Reservar Entrada</span>
          </button>
        </div>
      </div>
    </div>
  );
};
