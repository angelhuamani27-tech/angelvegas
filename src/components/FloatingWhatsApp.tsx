import React, { useState } from 'react';
import { MessageCircle, X, Calendar, Trophy, UtensilsCrossed, MapPin, Send } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (type: string) => {
    let message = '';
    switch (type) {
      case 'entradas':
        message = '¡Hola Recreo Las Vegas! 👋 Deseo consultar sobre las entradas para los próximos eventos.';
        break;
      case 'grass':
        message = '¡Hola Recreo Las Vegas! ⚽ Quisiera consultar disponibilidad para alquilar la cancha de Grass Sintético.';
        break;
      case 'carta':
        message = '¡Hola Recreo Las Vegas! 🍗 Deseo consultar la carta de comidas y promociones de la pollería.';
        break;
      case 'ubicacion':
        message = '¡Hola! ¿Me pueden indicar cómo llegar al Recreo Las Vegas en Carmen Alto?';
        break;
      default:
        message = '¡Hola Recreo Las Vegas! Quisiera más información.';
    }
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#0f121a] border border-emerald-500/40 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Recreo Las Vegas</h4>
                <p className="text-[10px] text-emerald-400">En línea • Ayacucho, Perú</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/60"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 my-3">
            ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
          </p>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => handleAction('entradas')}
              className="w-full p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-left text-zinc-200 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="font-semibold">Comprar / Reservar Entradas</span>
            </button>

            <button
              onClick={() => handleAction('grass')}
              className="w-full p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-left text-zinc-200 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold">Alquilar Cancha de Grass</span>
            </button>

            <button
              onClick={() => handleAction('carta')}
              className="w-full p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-left text-zinc-200 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-semibold">Consultar Carta & Pollería</span>
            </button>

            <button
              onClick={() => handleAction('ubicacion')}
              className="w-full p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-left text-zinc-200 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="font-semibold">Ubicación y Cómo Llegar</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/60 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-emerald-300/40"
        aria-label="Abrir WhatsApp Oficial"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        
        {/* Pulse ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>
      </button>
    </div>
  );
};
