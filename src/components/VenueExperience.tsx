import React, { useState } from 'react';
import { Camera, Sparkles, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/lasVegasData';

export const VenueExperience: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto = selectedPhotoIndex !== null ? GALLERY_ITEMS[selectedPhotoIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(selectedPhotoIndex === 0 ? GALLERY_ITEMS.length - 1 : selectedPhotoIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(selectedPhotoIndex === GALLERY_ITEMS.length - 1 ? 0 : selectedPhotoIndex + 1);
    }
  };

  return (
    <section id="experiencia" className="py-20 bg-[#07090d] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Infraestructura & Ambiente</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
            ASÍ SE VIVE EN LAS VEGAS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Un complejo integral pensado para que pases los fines de semana más divertidos de Ayacucho entre buena música, amigos, deporte y tradición.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg hover:border-red-500/60 transition-all duration-300 bg-black aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {item.type}
                </span>
              </div>

              {/* Eye zoom indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-red-600 text-white shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Caption info on bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm font-bold text-white uppercase group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Gallery */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-zinc-900/80 hover:bg-red-600 text-white border border-white/10"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 z-30 p-3 rounded-full bg-zinc-900/80 hover:bg-red-600 text-white border border-white/10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title}
              className="max-h-[70vh] max-w-[90vw] object-contain rounded-xl border border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                {activePhoto.type}
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">{activePhoto.title}</h3>
              <p className="text-xs text-zinc-300 mt-1">{activePhoto.caption}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 z-30 p-3 rounded-full bg-zinc-900/80 hover:bg-red-600 text-white border border-white/10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
