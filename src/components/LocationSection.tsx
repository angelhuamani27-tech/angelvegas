import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Share2, Car, ShieldCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';

export const LocationSection: React.FC = () => {
  const handleOpenGoogleMaps = () => {
    window.open(VENUE_INFO.googleMapsUrl, '_blank');
  };

  const handleShareLocation = () => {
    const text = encodeURIComponent(
      `📍 *Ubicación de RECREO LAS VEGAS en Ayacucho:*\n${VENUE_INFO.address} (${VENUE_INFO.reference})\n\nVer en Google Maps: ${VENUE_INFO.googleMapsUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-zinc-900/90 to-[#0b0e14] border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acceso en Huamanga</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
            ENCUÉNTRANOS EN LAS VEGAS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Estamos ubicados en una de las principales avenidas de Carmen Alto, con amplios espacios, seguridad y estacionamiento propio.
          </p>
        </div>

        {/* Content Split: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Address card */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Dirección Oficial
                  </span>
                  <h4 className="font-bold text-white text-base mt-0.5">{VENUE_INFO.address}</h4>
                  <p className="text-xs text-zinc-400 mt-1">Referencia: {VENUE_INFO.reference}</p>
                </div>
              </div>

              {/* Hours card */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Horarios de Atención
                  </span>
                  <p className="text-white font-semibold mt-0.5">{VENUE_INFO.openingHours}</p>
                  <p className="text-xs text-zinc-400 mt-1">Grass Sintético: 8:00 AM a 1:00 AM (Previa reserva)</p>
                </div>
              </div>

              {/* Phones card */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Teléfonos & WhatsApp
                  </span>
                  <p className="text-white font-bold text-base mt-0.5">{VENUE_INFO.formattedPhone}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Líneas de soporte: {VENUE_INFO.secondaryPhones.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Amenities pill */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800 flex items-center gap-2 text-zinc-300">
                  <Car className="w-4 h-4 text-amber-400" />
                  <span>Estacionamiento Privado</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800 flex items-center gap-2 text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Seguridad Permanente</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOpenGoogleMaps}
                id="btn-como-llegar"
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-red-600 to-amber-600 hover:brightness-110 text-white font-display text-lg uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-5 h-5" />
                <span>CÓMO LLEGAR (GOOGLE MAPS)</span>
              </button>

              <button
                onClick={handleShareLocation}
                className="py-3.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                title="Compartir ubicación en WhatsApp"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[350px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative bg-zinc-950">
            {/* Real Map Embed for Carmen Alto Ayacucho */}
            <iframe
              title="Mapa de Ubicación Recreo Las Vegas Ayacucho"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.352936746813!2d-74.2255!3d-13.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127df9fa71cb37%3A0x6b772e04e9c7028!2sAv.%20Los%20Libertadores%20302%2C%20Carmen%20Alto%2C%20Ayacucho!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Quick Action over Map */}
            <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-700 text-xs shadow-lg">
              <span className="font-bold text-white block">RECREO LAS VEGAS</span>
              <span className="text-zinc-400 text-[11px]">Av. Los Libertadores 302, Carmen Alto</span>
            </div>

            <button
              onClick={handleOpenGoogleMaps}
              className="absolute bottom-3 right-3 px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-black/80 flex items-center gap-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Abrir en App de Maps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
