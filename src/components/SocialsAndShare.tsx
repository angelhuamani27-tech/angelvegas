import React, { useState } from 'react';
import { Share2, MessageCircle, Heart, Check, ExternalLink, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';

export const SocialsAndShare: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShareWeb = async () => {
    const data = {
      title: 'Recreo Las Vegas Ayacucho',
      text: '¡Conoce los mejores eventos, conciertos y canchas de grass sintético en RECREO LAS VEGAS Ayacucho!',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        // User canceled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Mira la web oficial de *RECREO LAS VEGAS AYACUCHO*! 🔥\nConciertos en vivo, carteleras, orquestas, pollos a la brasa y canchas de grass techadas.\n\nEntra aquí: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const socialChannels = [
    {
      name: 'Facebook',
      handle: 'Recreo Las Vegas Ayacucho',
      description: 'Fotos oficiales de conciertos, transmisiones y confirmaciones.',
      url: VENUE_INFO.socials.facebook,
      color: 'bg-[#1877F2]/15 text-[#1877F2] border-[#1877F2]/30 hover:bg-[#1877F2]/25',
      badge: 'Página Oficial',
    },
    {
      name: 'WhatsApp Oficial',
      handle: '+51 975 788 880',
      description: 'Reserva directa de entradas y canchas de grass en segundos.',
      url: VENUE_INFO.socials.whatsapp,
      color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25',
      badge: 'Atención Directa',
    },
    {
      name: 'TikTok',
      handle: '@recreolasvegas',
      description: 'Videos de los mejores momentos, bailes y zapateos en vivo.',
      url: VENUE_INFO.socials.tiktok,
      color: 'bg-pink-500/15 text-pink-400 border-pink-500/30 hover:bg-pink-500/25',
      badge: 'Videos Virales',
    },
    {
      name: 'Instagram',
      handle: '@recreolasvegas.pe',
      description: 'Historias, reels y sorteos de pases libres y mesas.',
      url: VENUE_INFO.socials.instagram,
      color: 'bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25',
      badge: 'Comunidad',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Comunidad & Redes Sociales</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
          SÍGUENOS Y VIVE CADA MOMENTO
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          No te pierdas los lanzamientos de preventas exclusivas, saludos de artistas y sorteos de entradas para nuestros conciertos.
        </p>
      </div>

      {/* Social Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {socialChannels.map((soc) => (
          <div
            key={soc.name}
            className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${soc.color}`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider">{soc.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 border border-current/20 font-semibold">
                  {soc.badge}
                </span>
              </div>
              <h4 className="font-bold text-white text-base truncate">{soc.handle}</h4>
              <p className="text-xs text-zinc-300 mt-1 line-clamp-2">{soc.description}</p>
            </div>

            <a
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full py-2 bg-black/40 hover:bg-black/60 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-current/20 flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Seguir en {soc.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Direct Share Bar */}
      <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="text-base font-bold text-white uppercase flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>¿Armando el plan con tu grupo o familia?</span>
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Pásales la cartelera y el enlace de Recreo Las Vegas en un solo clic.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Compartir en WhatsApp</span>
          </button>

          <button
            onClick={handleShareWeb}
            className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-amber-400" />
            <span>{copied ? '¡Copiado!' : 'Copiar Web'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
