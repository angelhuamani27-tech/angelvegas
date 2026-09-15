import React from 'react';
import { Calendar, Trophy, UtensilsCrossed, Camera, MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';
import { ASSETS } from '../data/assetMap';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-red-500/40 p-0.5 bg-black">
                <img
                  src={ASSETS.logo}
                  alt="Logo Recreo Las Vegas"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-2xl text-white tracking-wider">
                  RECREO LAS VEGAS
                </span>
                <p className="text-[11px] text-red-400 uppercase font-bold tracking-widest">
                  Ayacucho • Perú
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              "Eventos, deporte, música y diversión en un solo lugar." El centro de entretenimiento y espectáculos preferido por las familias y agrupaciones en Huamanga.
            </p>

            {/* Sub brands badges from user image 5 */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                Complejo Turístico & Servicios:
              </span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  ⚽ Grass Sintético Las Vegas
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🍗 Pollería - Restaurant Las Vegas
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🏨 Hostal El Mirador
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🏡 Las Vegas Hospedaje
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-white transition-colors">Próximos Eventos</a>
              </li>
              <li>
                <a href="#artistas" className="hover:text-white transition-colors">Artistas en Vivo</a>
              </li>
              <li>
                <a href="#grass" className="hover:text-white transition-colors">Grass Las Vegas</a>
              </li>
              <li>
                <a href="#carta" className="hover:text-white transition-colors">Carta & Baldes</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">Galería del Local</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Ubicación & Atención
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{VENUE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-white font-semibold">{VENUE_INFO.formattedPhone}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[10px] uppercase font-bold text-zinc-500 mt-0.5">Horario:</span>
                <span>Lun a Dom: 8am - 3am</span>
              </li>
              <li className="pt-2">
                <a
                  href={VENUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-red-400 hover:text-red-300 underline font-medium"
                >
                  Abrir ruta en Google Maps &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Reservations & WhatsApp */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Central de Reservas
            </h4>
            <p className="text-xs text-zinc-400 mb-3">
              ¿Deseas alquilar la cancha de grass o separar un box para tu cumpleaños?
            </p>
            <a
              href={VENUE_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-emerald-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Recreo Las Vegas. Todos los derechos reservados. Carmen Alto, Huamanga, Ayacucho - Perú.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
