export type TicketZone = {
  id: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  mainArtist: string;
  genre: string;
  supportingArtists: string[];
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  address: string;
  flyerUrl: string;
  zones: TicketZone[];
  status: 'Preventa Activa' | 'Entradas Disponibles' | 'Últimos Cupos' | 'Ingreso Libre';
  description: string;
  highlights: string[];
  isFeatured?: boolean;
};

export type ArtistItem = {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  subtitle: string;
  hits?: string;
  relatedEventTitle?: string;
  presentationDate?: string;
};

export type ProductItem = {
  id: string;
  name: string;
  category: 'comidas' | 'bebidas' | 'snacks' | 'promociones';
  price: number;
  description: string;
  imageUrl: string;
  badge?: string;
};

export type FeedPost = {
  id: string;
  title: string;
  category: 'Evento' | 'Grass' | 'Promoción' | 'Novedad';
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  likes: number;
  shares: number;
};

export type GrassReservation = {
  date: string;
  timeSlot: string;
  durationHours: number;
  courtType: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
  isNightRate: boolean;
  totalPrice: number;
};
