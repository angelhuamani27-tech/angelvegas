import React, { useState } from 'react';
import { Newspaper, Heart, Share2, Calendar, Sparkles, MessageCircle, X } from 'lucide-react';
import { NEWS_POSTS, VENUE_INFO } from '../data/lasVegasData';
import { FeedPost } from '../types';

export const NewsFeed: React.FC = () => {
  const [posts, setPosts] = useState<FeedPost[]>(NEWS_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);

  const handleLike = (postId: string) => {
    const isLiked = likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, likes: p.likes + (isLiked ? -1 : 1) } : p
      )
    );
  };

  const handleShare = (post: FeedPost) => {
    const text = encodeURIComponent(
      `¡Novedades en Recreo Las Vegas Ayacucho!\n\n*${post.title}*\n${post.excerpt}\n\nConoce más aquí: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="novedades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Feed Social & Noticias</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wider text-white">
            ÚLTIMAS PUBLICACIONES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Entérate al instante de confirmaciones de artistas, fixture de campeonatos y promociones del fin de semana.
          </p>
        </div>

        <a
          href={VENUE_INFO.socials.facebook}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#1877F2] border border-[#1877F2]/40 text-xs font-bold uppercase tracking-wider transition-all w-fit"
        >
          <span>Visitar Facebook Oficial</span>
        </a>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const isLiked = !!likedPosts[post.id];

          return (
            <article
              key={post.id}
              className="bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Image */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-0.5 rounded bg-black/80 text-zinc-300 text-[10px] font-medium">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="font-display text-xl uppercase tracking-wide text-white hover:text-red-400 transition-colors cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    isLiked ? 'text-red-500' : 'text-zinc-400 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(post)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Compartir"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="px-3 py-1 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Leer Más
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal for full post */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[#0f121a] border border-zinc-800 rounded-2xl max-w-xl w-full p-6 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
              {selectedPost.category} • {selectedPost.date}
            </span>

            <h3 className="font-display text-2xl uppercase tracking-wide text-white mt-3">
              {selectedPost.title}
            </h3>

            <div className="aspect-[16/9] rounded-xl overflow-hidden my-4 border border-zinc-800">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {selectedPost.content}
            </p>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => handleLike(selectedPost.id)}
                className="flex items-center gap-2 text-xs font-bold text-red-400"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{selectedPost.likes} Me gusta</span>
              </button>

              <button
                onClick={() => handleShare(selectedPost)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartir en WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
