import React, { useState } from 'react';
import { Trophy, Calendar, Clock, ShieldCheck, CheckCircle2, MessageCircle, MapPin, Users, Flame, Award } from 'lucide-react';
import { VENUE_INFO } from '../data/lasVegasData';
import { ASSETS } from '../data/assetMap';

export const GrassSection: React.FC = () => {
  // Booking Form States
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedHour, setSelectedHour] = useState<string>('19:00');
  const [duration, setDuration] = useState<number>(1);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [matchType, setMatchType] = useState<string>('Fútbol 6 / Futsal');

  // Calculation
  const hourNumber = parseInt(selectedHour.split(':')[0], 10);
  const isNight = hourNumber >= 18 || hourNumber < 6;
  const ratePerHour = isNight ? VENUE_INFO.grassRates.nightRate : VENUE_INFO.grassRates.dayRate;
  const totalCost = ratePerHour * duration;

  const handleReserveWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! ⚽ Deseo *RESERVAR LA CANCHA DE GRASS SINTÉTICO*:\n\n` +
      `📅 *Fecha:* ${selectedDate}\n` +
      `⏰ *Hora de inicio:* ${selectedHour}\n` +
      `⏱️ *Duración:* ${duration} ${duration === 1 ? 'hora' : 'horas'}\n` +
      `⚽ *Modalidad:* ${matchType}\n` +
      `💡 *Tarifa:* ${isNight ? 'Nocturna (con reflectores LED)' : 'Diurna'} (S/ ${ratePerHour}/h)\n` +
      `💰 *Total:* S/ ${totalCost}.00\n` +
      (clientName ? `👤 *Nombre de contacto:* ${clientName}\n` : '') +
      (clientPhone ? `📱 *Celular:* ${clientPhone}\n` : '') +
      `\n¿Tienen este horario disponible para separar la cancha? ¡Muchas gracias!`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  const handleQuickAvailabilityCheck = () => {
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! 👋 Quisiera consultar los horarios disponibles para alquilar la cancha de Grass Sintético esta semana. ¿Qué turnos tienen libres?`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="grass" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container with sports green and dark styling */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-500/40 bg-gradient-to-br from-[#0c1611] via-[#09100d] to-[#090b10] shadow-2xl p-6 sm:p-10 lg:p-12">
        {/* Glow behind */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complejo Deportivo Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
            GRASS LAS VEGAS
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
            ALQUILA TU CANCHA Y JUEGA
          </p>
          <p className="mt-2 text-sm sm:text-base text-zinc-300">
            Césped sintético monofilamento techado bajo estructura metálica parabólica. Juega seguro de día o bajo la lluvia en Carmen Alto, Ayacucho.
          </p>
        </div>

        {/* Grid: Image & Features on Left, Reservation Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Real Court Photo & Key Advantages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl group">
              <img
                src={ASSETS.grassPitch}
                alt="Cancha de Grass Sintético Techada Las Vegas Ayacucho"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Badges on photo */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  100% Techada & Protegida
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 text-xs font-bold border border-amber-500/30">
                  Fútbol 6 & Vóley
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Av. Libertadores 302, Carmen Alto
                </span>
                <span className="px-2.5 py-1 rounded bg-black/80 font-bold text-emerald-300">
                  Abierto de 8:00 AM a 1:00 AM
                </span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Césped Calidad Pro</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Monofilamento con caucho seleccionado para evitar raspones.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <Clock className="w-4 h-4 text-amber-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Potente Luz LED</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Reflectores de alta potencia para partidos nocturnos nítidos.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <Award className="w-4 h-4 text-blue-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Balón y Chalecos</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Equipamiento incluido sin costo extra para tus dos equipos.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <Users className="w-4 h-4 text-purple-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Tercer Tiempo</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Mesas, piqueos de pollería y baldes de cerveza helada al lado.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Estacionamiento</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Espacio amplio para motos y autos dentro del local.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <Flame className="w-4 h-4 text-red-400 mb-1.5" />
                <h4 className="font-bold text-white uppercase">Campeonatos</h4>
                <p className="text-zinc-400 mt-0.5 text-[11px]">Organizamos y alquilamos para torneos de empresas y facultades.</p>
              </div>
            </div>

            {/* Quick Pricing Pill */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide block">
                  Tarifas Oficiales por Hora:
                </span>
                <span className="text-sm text-zinc-300">
                  Horario Diurno (8am - 6pm): <strong className="text-white">S/ {VENUE_INFO.grassRates.dayRate}.00</strong> • Nocturno con reflectores: <strong className="text-amber-300">S/ {VENUE_INFO.grassRates.nightRate}.00</strong>
                </span>
              </div>
              <button
                onClick={handleQuickAvailabilityCheck}
                className="px-4 py-2 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-200 text-xs font-bold uppercase rounded-lg border border-emerald-400/40 transition-colors whitespace-nowrap cursor-pointer"
              >
                Consultar Disponibilidad
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-5 bg-zinc-950/90 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  SEPARA TU TURNO
                </h3>
                <p className="text-xs text-zinc-400">Reserva instantánea confirmada por WhatsApp</p>
              </div>
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Trophy className="w-5 h-5" />
              </span>
            </div>

            <form onSubmit={handleReserveWhatsApp} className="space-y-4 text-xs">
              {/* Fecha */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Fecha del Partido:</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
                  <input
                    type="date"
                    min={todayStr}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Hora y Duración */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Hora de Inicio:</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
                    <select
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="08:00">08:00 AM (Día)</option>
                      <option value="09:00">09:00 AM (Día)</option>
                      <option value="10:00">10:00 AM (Día)</option>
                      <option value="11:00">11:00 AM (Día)</option>
                      <option value="12:00">12:00 PM (Día)</option>
                      <option value="14:00">02:00 PM (Día)</option>
                      <option value="16:00">04:00 PM (Día)</option>
                      <option value="17:00">05:00 PM (Día)</option>
                      <option value="18:00">06:00 PM (Noche LED)</option>
                      <option value="19:00">07:00 PM (Noche LED)</option>
                      <option value="20:00">08:00 PM (Noche LED)</option>
                      <option value="21:00">09:00 PM (Noche LED)</option>
                      <option value="22:00">10:00 PM (Noche LED)</option>
                      <option value="23:00">11:00 PM (Noche LED)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Duración:</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value={1}>1 Hora</option>
                    <option value={2}>2 Horas (Recomendado)</option>
                    <option value={3}>3 Horas (Torneo)</option>
                  </select>
                </div>
              </div>

              {/* Disciplina */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Disciplina / Modalidad:</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Fútbol 6 / Futsal', 'Futsal Femenino', 'Vóley Mixto'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setMatchType(type)}
                      className={`p-2 rounded-lg text-center text-[11px] font-semibold border transition-all cursor-pointer ${
                        matchType === type
                          ? 'bg-emerald-600 text-white border-emerald-400'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Datos del Cliente */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Tu Nombre:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Celular / WhatsApp:</label>
                  <input
                    type="tel"
                    required
                    placeholder="975 788 880"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Resumen de Tarifa */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-zinc-400 block text-[11px]">
                    Tarifa aplicada: {isNight ? '🌙 Turno Noche (Reflectores LED)' : '☀️ Turno Diurno'}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {duration}h x S/ {ratePerHour}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-400 block text-[11px] uppercase">Total Cancha:</span>
                  <span className="font-display text-2xl text-emerald-400 tracking-wider">
                    S/ {totalCost}.00
                  </span>
                </div>
              </div>

              {/* Submit Buttons */}
              <button
                type="submit"
                id="btn-reservar-grass"
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:brightness-110 text-white font-display text-lg uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-700/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>RESERVAR GRASS POR WHATSAPP</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
