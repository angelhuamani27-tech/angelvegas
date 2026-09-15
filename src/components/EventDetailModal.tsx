import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Ticket, ShieldCheck, Share2, MessageCircle, Sparkles, Check, ChevronRight, Plus, Minus, User, Phone } from 'lucide-react';
import { EventItem, TicketZone } from '../types';
import { VENUE_INFO } from '../data/lasVegasData';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onOpenFlyerLightbox: (event: EventItem) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose, onOpenFlyerLightbox }) => {
  if (!event) return null;

  const [selectedZone, setSelectedZone] = useState<TicketZone>(event.zones[0] || { id: 'gen', name: 'General', price: 25, description: '', available: true });
  const [ticketCount, setTicketCount] = useState<number>(2);
  const [buyerName, setBuyerName] = useState<string>('');
  const [buyerPhone, setBuyerPhone] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const totalAmount = selectedZone.price * ticketCount;

  const handleWhatsAppBuy = (mode: 'compra' | 'reserva') => {
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! 👋 Deseo realizar la *${mode.toUpperCase()} DE ENTRADAS* para el evento:\n\n` +
      `🎤 *${event.title}*\n` +
      `🗓️ *Fecha:* ${event.formattedDate}\n` +
      `⏰ *Hora:* ${event.time}\n` +
      `📍 *Local:* ${event.venue} (${event.address})\n\n` +
      `🎟️ *Zona Seleccionada:* ${selectedZone.name}\n` +
      `🔢 *Cantidad:* ${ticketCount} ${ticketCount === 1 ? 'entrada' : 'entradas'}\n` +
      `💵 *Total:* S/ ${totalAmount}.00\n` +
      (buyerName ? `👤 *Titular:* ${buyerName}\n` : '') +
      (buyerPhone ? `📱 *Teléfono:* ${buyerPhone}\n` : '') +
      `\n¿Me pueden compartir su número de Yape/Plin o cuenta bancaria para concretar la compra? Muchas gracias.`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: `${event.title} - Recreo Las Vegas`,
      text: `¡Nos vemos en Recreo Las Vegas en Ayacucho! ${event.title} este ${event.formattedDate}. Entradas desde S/ ${event.zones[0]?.price}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f121a] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-red-600 text-zinc-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Big Flyer Preview */}
          <div className="lg:col-span-5 bg-black relative flex flex-col justify-center items-center p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-zinc-800/80">
            <div
              className="relative w-full aspect-[3/4] max-w-sm rounded-xl overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer group"
              onClick={() => onOpenFlyerLightbox(event)}
            >
              <img
                src={event.flyerUrl}
                alt={`Flyer ${event.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20">
                  Ver Flyer Completo
                </span>
              </div>
            </div>

            {/* Flyer Sub-caption */}
            <div className="mt-4 text-center">
              <span className="text-xs text-zinc-400">
                Haz clic en el flyer para ampliar en pantalla completa
              </span>
            </div>
          </div>

          {/* Right Column: Event Details & Ticket Purchasing Experience */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Status & Genre Pill */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider">
                  {event.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                  {event.genre}
                </span>
              </div>

              {/* Event Title */}
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                {event.title}
              </h2>

              <p className="mt-1 text-sm font-semibold text-zinc-300">
                Presenta a: <span className="text-red-400 font-bold">{event.mainArtist}</span>
                {event.supportingArtists.length > 0 && (
                  <span className="text-zinc-400 font-normal"> junto a {event.supportingArtists.join(', ')}</span>
                )}
              </p>

              {/* Key Meta Details */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">Fecha</span>
                    <span className="font-semibold text-white">{event.formattedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">Hora</span>
                    <span className="font-semibold text-white">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">Lugar</span>
                    <span className="font-semibold text-white">{event.venue} • {event.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>{event.description}</p>
              </div>

              {/* Highlights */}
              <div className="mt-4 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Incluye y Garantiza:
                </span>
                {event.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Zone / Ticket Selector */}
              <div className="mt-6 pt-5 border-t border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
                  <Ticket className="w-4 h-4" />
                  <span>Selecciona tu Zona de Entrada</span>
                </span>

                <div className="space-y-2">
                  {event.zones.map((zone) => (
                    <div
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedZone.id === zone.id
                          ? 'bg-red-950/40 border-red-500 ring-1 ring-red-500 shadow-md'
                          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{zone.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Disponible
                          </span>
                        </div>
                        {zone.description && (
                          <p className="text-[11px] text-zinc-400 mt-0.5">{zone.description}</p>
                        )}
                      </div>
                      <div className="text-right pl-3">
                        <span className="text-base font-extrabold text-white">
                          {zone.price === 0 ? 'GRATIS' : `S/ ${zone.price}.00`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity Counter */}
                <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-300">Número de Entradas:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-base font-bold text-white w-6 text-center">{ticketCount}</span>
                    <button
                      onClick={() => setTicketCount(ticketCount + 1)}
                      className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Buyer Quick Contact (Optional) */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Tu Nombre completo"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-500" />
                    <input
                      type="tel"
                      placeholder="Tu N° de Celular / WhatsApp"
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Total Calculation Banner */}
                <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-red-950/60 to-zinc-900 border border-red-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block">Total a Pagar / Reservar:</span>
                    <span className="text-lg font-bold text-white">
                      {ticketCount} x {selectedZone.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display uppercase tracking-wider text-amber-400">
                      {totalAmount === 0 ? 'INGRESO LIBRE' : `S/ ${totalAmount}.00`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-zinc-800 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleWhatsAppBuy('compra')}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comprar Entrada (WhatsApp)</span>
                </button>

                <button
                  onClick={() => handleWhatsAppBuy('reserva')}
                  className="w-full py-3.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reservar Mesa / Entrada</span>
                </button>
              </div>

              <button
                onClick={handleShare}
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold rounded-xl border border-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{copied ? '¡Enlace copiado al portapapeles!' : 'Compartir Evento con Amigos'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
