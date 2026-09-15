import React, { useState } from 'react';
import { UtensilsCrossed, Beer, Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import { PRODUCTS_MENU, VENUE_INFO } from '../data/lasVegasData';
import { ProductItem } from '../types';

export const ProductsMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'TODOS' },
    { id: 'comidas', label: 'COMIDAS' },
    { id: 'bebidas', label: 'BEBIDAS' },
    { id: 'snacks', label: 'SNACKS & PIQUEOS' },
    { id: 'promociones', label: 'PROMOCIONES & COMBOS' },
  ];

  const filteredProducts = PRODUCTS_MENU.filter((prod) => {
    if (activeCategory === 'todos') return true;
    return prod.category === activeCategory;
  });

  const handleOrderWhatsApp = (product: ProductItem) => {
    const text = encodeURIComponent(
      `¡Hola Recreo Las Vegas! 🍗🍺 Quisiera pedir / consultar disponibilidad de:\n\n*${product.name}* (S/ ${product.price}.00)\n\n¿Atienden pedidos para consumo en local o para llevar?`
    );
    window.open(`https://wa.me/51${VENUE_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="carta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Pollería Restaurant & Barra Las Vegas</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
          DISFRUTA LAS VEGAS
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          Pollos a la brasa doraditos, chicharrones ayacuchanos, piqueos para compartir y baldes de cerveza al polo durante tus eventos y partidos.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-amber-950/20"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />

              {/* Badges */}
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[11px] font-black uppercase tracking-wide shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Price tag */}
              <div className="absolute bottom-3 right-3">
                <span className="px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-400 font-display text-xl tracking-wider">
                  S/ {product.price}.00
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wide">
                  Servicio en Mesa o Barra
                </span>
                <button
                  onClick={() => handleOrderWhatsApp(product)}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-emerald-600 hover:text-white text-zinc-200 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
