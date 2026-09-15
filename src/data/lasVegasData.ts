import { EventItem, ArtistItem, ProductItem, FeedPost } from '../types';
import { ASSETS } from './assetMap';

export const VENUE_INFO = {
  name: 'RECREO LAS VEGAS',
  slogan: 'Eventos • Música • Diversión • Deporte',
  address: 'Av. Los Libertadores #302, Carmen Alto, Ayacucho - Perú',
  reference: 'Frente al mirador del Cerro Acuchimay',
  primaryPhone: '975788880',
  formattedPhone: '+51 975 788 880',
  secondaryPhones: ['963 354 559', '972 168 779', '926 451 474'],
  googleMapsUrl: 'https://maps.app.goo.gl/KyHWfExjrARXnut68',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100054480579131',
    instagram: 'https://www.instagram.com',
    tiktok: 'https://www.tiktok.com',
    whatsapp: 'https://wa.me/51975788880',
  },
  openingHours: 'Lunes a Domingo: 8:00 AM - 3:00 AM (Eventos hasta el amanecer)',
  grassRates: {
    dayRate: 40, // S/. 40 por hora (8am - 6pm)
    nightRate: 55, // S/. 55 por hora (6pm - medianoche)
  }
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'evento-claveles-cumbia',
    title: 'Gran Fiesta de Cumbia: Los Claveles de la Cumbia',
    mainArtist: 'Los Claveles de la Cumbia',
    genre: 'Cumbia Peruana',
    supportingArtists: ['La Clave Decisiva', 'Deyby Cortez', 'Show Candelaria'],
    date: '2026-11-02',
    formattedDate: 'Sábado 02 de Noviembre',
    time: '5:00 PM (Hasta el día siguiente)',
    venue: 'Recreo Las Vegas',
    address: 'Av. Los Libertadores #302, Carmen Alto - Ayacucho',
    flyerUrl: ASSETS.flyerCumbia,
    isFeatured: true,
    status: 'Preventa Activa',
    description: '¡La fiesta más esperada del año en Ayacucho! Los Claveles de la Cumbia llegan al escenario principal de Recreo Las Vegas para una noche inolvidable de éxitos, ritmo y baile hasta el amanecer.',
    highlights: [
      'Show exclusivo en vivo con sonido Line Array de alta fidelidad',
      'Animación especial y luces robóticas láser',
      'Zona de mesas techadita y abrigadita',
      'Playa de estacionamiento privado vigilado',
      'Servicio de mozos y carta completa de comida y tragos'
    ],
    zones: [
      { id: 'gen', name: 'General', price: 30, description: 'Acceso a pista de baile y barras principales', available: true },
      { id: 'vip', name: 'VIP Frente a Escenario', price: 60, description: 'Ubicación preferencial, atención de mozos y vista directa', available: true },
      { id: 'box', name: 'Box Las Vegas (8 personas)', price: 600, description: 'Mesa privada, 1 balde de chelas heladas + atención personalizada', available: true }
    ]
  },
  {
    id: 'evento-flor-sinquena',
    title: '30 Aniversario: Flor Sinqueña "La Voz Filarmónica"',
    mainArtist: 'Flor Sinqueña',
    genre: 'Folklore & Huayno con Arpa',
    supportingArtists: ['Banda Glorias Sinfonía de Ayacucho', 'Agrupación K\'prichos', 'Joselito Kayay', 'Michaelito Noriega'],
    date: '2026-07-18',
    formattedDate: 'Sábado 18 de Julio',
    time: '3:00 PM',
    venue: 'Recreo Las Vegas',
    address: 'Av. Los Libertadores #302, Carmen Alto - Ayacucho',
    flyerUrl: ASSETS.flyerFolklore,
    isFeatured: true,
    status: 'Entradas Disponibles',
    description: 'Celebramos los 30 años de trayectoria de la reina del folklore Flor Sinqueña con un concierto de lujo. Disfruta de la mejor música andina tradicional en nuestro local techado y abrigadito.',
    highlights: [
      'Ingreso libre hasta las 8:00 PM',
      'Presentación estelar de Banda Glorias Sinfonía',
      'Patios de comidas típicas ayacuchanas y chicharrones',
      'Ambiente 100% techado y seguro para toda la familia',
      'Estacionamiento gratuito para asistentes'
    ],
    zones: [
      { id: 'gen', name: 'General (Después de las 8PM)', price: 20, description: 'Ingreso gratis hasta las 8:00 PM; luego S/ 20 en puerta', available: true },
      { id: 'vip', name: 'Zona VIP Techada', price: 40, description: 'Mesa numerada con excelente acústica y atención', available: true }
    ]
  },
  {
    id: 'evento-campeonato-civil',
    title: 'V Campeonato Deportivo & Gran Reencuentro UNSCH',
    mainArtist: 'Orquesta América & Cambio Brusco',
    genre: 'Deporte, Futsal & Pachanga Rock',
    supportingArtists: ['Cambio Brusco (Latin Rock)', 'Orquesta Los Dolorier América'],
    date: '2026-10-18',
    formattedDate: 'Sábado 18 de Octubre',
    time: '9:00 AM (Torneo) | 6:00 PM (Fiesta)',
    venue: 'Grass Sintético Las Vegas',
    address: 'Av. Los Libertadores #302, Carmen Alto - Ayacucho',
    flyerUrl: ASSETS.flyerCampeonato,
    isFeatured: false,
    status: 'Preventa Activa',
    description: 'Torneo deportivo relámpago de fútbol y vóley con las delegaciones de Ingeniería Civil UNSCH, seguido del fiestón bailable con Cambio Brusco y Orquesta América en vivo.',
    highlights: [
      'Disciplinas: Futsal Varones Libre/Senior, Futsal Damas, Vóley Mixto',
      'Gran premio trofeo y premios en efectivo para campeones',
      'Fiesta bailable y orquesta en vivo desde las 6:00 PM',
      'Cerveza al polo y parrillas durante todo el día',
      'Inscripciones abiertas por WhatsApp'
    ],
    zones: [
      { id: 'inscr', name: 'Inscripción por Equipo', price: 120, description: 'Incluye derecho de cancha, arbitraje y acceso a la fiesta', available: true },
      { id: 'gen', name: 'Entrada Fiesta Bailable', price: 15, description: 'Acceso general al concierto de cierre y zona social', available: true }
    ]
  },
  {
    id: 'evento-surandino-clave',
    title: 'Noche de Carnavales: Surandino & La Clave Decisiva',
    mainArtist: 'Surandino',
    genre: 'Música Andina Contemporánea',
    supportingArtists: ['La Clave Decisiva (Los Reyes de los Carnavales)', 'Los Hermanos Curi', 'La Cecilia'],
    date: '2026-05-17',
    formattedDate: 'Viernes 17 de Mayo',
    time: '6:00 PM a 3:00 AM',
    venue: 'Recreo Las Vegas',
    address: 'Av. Los Libertadores #302, Carmen Alto - Ayacucho',
    flyerUrl: ASSETS.heroVenue,
    isFeatured: false,
    status: 'Ingreso Libre',
    description: 'El reencuentro de la música andina de Surandino con la potencia carnavalesca de La Clave Decisiva y Los Hermanos Curi. ¡Entrada libre hasta las 8:00 PM!',
    highlights: [
      '6:00 PM a 10:00 PM: La Clave Decisiva',
      '10:00 PM a 12:00 AM: Surandino en vivo',
      '12:00 AM a 2:30 AM: Los Hermanos Curi',
      '2:30 AM en adelante: La Cecilia',
      'Entrada libre antes de las 8:00 PM'
    ],
    zones: [
      { id: 'free', name: 'Entrada Libre (Hasta 8:00 PM)', price: 0, description: 'Llega temprano y asegura tu lugar', available: true },
      { id: 'gen', name: 'General en Puerta', price: 25, description: 'A partir de las 8:00 PM', available: true },
      { id: 'vip', name: 'Mesa VIP con Balde', price: 180, description: 'Mesa reservada para 4 personas + Balde de 6 cervezas', available: true }
    ]
  }
];

export const FEATURED_ARTISTS: ArtistItem[] = [
  {
    id: 'claveles-cumbia',
    name: 'Los Claveles de la Cumbia',
    genre: 'Cumbia Peruana Romántica',
    imageUrl: ASSETS.flyerCumbia,
    subtitle: 'La orquesta sensación del Perú',
    hits: 'Cuidado con el Perro • Vuela Mariposa • Vagabunda',
    relatedEventTitle: 'Gran Fiesta de Cumbia',
    presentationDate: '02 de Noviembre'
  },
  {
    id: 'flor-sinquena',
    name: 'Flor Sinqueña',
    genre: 'Folklore Ayacuchano & Arpa',
    imageUrl: ASSETS.flyerFolklore,
    subtitle: 'La Voz Filarmónica del Perú',
    hits: '30 Años de Éxitos Inolvidables',
    relatedEventTitle: 'Concierto 30 Aniversario',
    presentationDate: '18 de Julio'
  },
  {
    id: 'surandino',
    name: 'Surandino',
    genre: 'Música Andina Contemporánea',
    imageUrl: ASSETS.heroVenue,
    subtitle: 'Sentimiento e identidad en cada canción',
    hits: 'Poco a Poco • Corazón de Piedra',
    relatedEventTitle: 'Noche de Carnavales',
    presentationDate: '17 de Mayo'
  },
  {
    id: 'clave-decisiva',
    name: 'La Clave Decisiva',
    genre: 'Carnavales & Huayno Bailable',
    imageUrl: ASSETS.flyerCumbia,
    subtitle: 'Los Reyes de los Carnavales Ayacuchanos',
    hits: 'Carnaval Ayacuchano • Zapateo Huamanguino',
    relatedEventTitle: 'Gran Fiesta de Cumbia',
    presentationDate: '02 de Noviembre'
  },
  {
    id: 'armonia-10',
    name: 'Armonía 10 de Piura',
    genre: 'Cumbia Sanjuanera & Norteña',
    imageUrl: ASSETS.heroVenue,
    subtitle: 'La Universidad de la Cumbia',
    hits: 'El Cervecero • Dios Mío Haz Que Me Enamore',
    relatedEventTitle: 'Gira Nacional en Ayacucho',
    presentationDate: 'Temporada Especial'
  },
  {
    id: 'cambio-brusco',
    name: 'Cambio Brusco',
    genre: 'Pachanga & Latin Rock',
    imageUrl: ASSETS.flyerCampeonato,
    subtitle: 'Energía y clásicos fiesteros',
    hits: 'Tributo al Rock en Español & Cumbia Pop',
    relatedEventTitle: 'V Campeonato Civil',
    presentationDate: '18 de Octubre'
  }
];

export const PRODUCTS_MENU: ProductItem[] = [
  // COMIDAS
  {
    id: 'prod-pollo-brasa-1',
    name: '1/4 Pollo a la Brasa Las Vegas',
    category: 'comidas',
    price: 22,
    description: 'Jugoso cuarto de pollo marinado al estilo tradicional con crujientes papas fritas y ensalada fresca.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Más Vendido'
  },
  {
    id: 'prod-pollo-brasa-2',
    name: '1/2 Pollo a la Brasa Familiar',
    category: 'comidas',
    price: 40,
    description: 'Medio pollo dorado con porción grande de papas fritas, cremas artesanales de la casa y ensalada.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Recomendado'
  },
  {
    id: 'prod-chicharron',
    name: 'Chicharrón de Cerdo Tradicional',
    category: 'comidas',
    price: 28,
    description: 'Trozos dorados y crujientes de chicharrón acompañados de mote, camote frito y sarza criolla.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Plato Típico'
  },
  {
    id: 'prod-caldo-gallina',
    name: 'Caldo de Gallina Criolla',
    category: 'comidas',
    price: 18,
    description: 'El clásico trasnochador con presa de gallina, huevo sancochado, fideos y cebollita china picada.',
    imageUrl: ASSETS.comidaBebidas
  },
  {
    id: 'prod-salchipapa-especial',
    name: 'Salchipapa Especial Las Vegas',
    category: 'comidas',
    price: 16,
    description: 'Generosa porción de papas nativas, salchichas frankfurter, huevo frito y lluvia de salsas.',
    imageUrl: ASSETS.comidaBebidas
  },

  // BEBIDAS
  {
    id: 'prod-balde-pilsen',
    name: 'Balde Cervecero Pilsen (6 Botellas)',
    category: 'bebidas',
    price: 55,
    description: '6 botellas personales al polo en balde con hielo picado. La compañera infaltable de la fiesta.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Favorito'
  },
  {
    id: 'prod-balde-cusquena',
    name: 'Balde Cusqueña Trigo (6 Botellas)',
    category: 'bebidas',
    price: 65,
    description: '6 botellas de cerveza premium de trigo heladas con hielo de cortesía para compartir.',
    imageUrl: ASSETS.comidaBebidas
  },
  {
    id: 'prod-balde-cristal',
    name: 'Balde Cerveza Cristal (6 Botellas)',
    category: 'bebidas',
    price: 50,
    description: '6 botellas de la clásica rubia peruana bien heladita.',
    imageUrl: ASSETS.comidaBebidas
  },
  {
    id: 'prod-chicha-morada',
    name: 'Jarra de Chicha Morada Artesanal',
    category: 'bebidas',
    price: 14,
    description: '1.5 Litros de deliciosa chicha de maíz morado con fruta fresca picada, canela y clavo de olor.',
    imageUrl: ASSETS.comidaBebidas
  },
  {
    id: 'prod-gaseosa-agua',
    name: 'Gaseosas & Agua Mineral 500ml',
    category: 'bebidas',
    price: 5,
    description: 'Inca Kola, Coca Cola, agua con o sin gas según tu preferencia.',
    imageUrl: ASSETS.comidaBebidas
  },

  // SNACKS
  {
    id: 'prod-tequenos',
    name: 'Porción de Tequeños con Guacamole (12 unid)',
    category: 'snacks',
    price: 18,
    description: 'Tequeños crocantes rellenos de queso andino fundido con crema de palta fresca.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Piqueo'
  },
  {
    id: 'prod-alitas-bbq',
    name: 'Alitas Broaster / BBQ (8 piezas)',
    category: 'snacks',
    price: 24,
    description: 'Alitas crocantes bañadas en salsa barbacoa agridulce con papas fritas.',
    imageUrl: ASSETS.comidaBebidas
  },
  {
    id: 'prod-tabla-vegas',
    name: 'Tabla Piqueo Las Vegas',
    category: 'snacks',
    price: 38,
    description: 'Para 3 o 4 personas: chicharrón, tequeños, papas crocantes, chinchulines y salsas.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Para Compartir'
  },

  // PROMOCIONES
  {
    id: 'promo-fulbito-chela',
    name: 'Combo Fulbito & Chela (Grass + Bebida)',
    category: 'promociones',
    price: 135,
    description: '2 horas de cancha techada de grass sintético + 1 balde de 6 cervezas Pilsen al polo para el tercer tiempo.',
    imageUrl: ASSETS.grassPitch,
    badge: 'Combo Estrella'
  },
  {
    id: 'promo-cumpleanos',
    name: 'Combo Cumpleañero Las Vegas',
    category: 'promociones',
    price: 120,
    description: 'Ingreso libre para el cumpleañero + Reserva de mesa VIP + 1 balde de cerveza + 1 piqueo de tequeños.',
    imageUrl: ASSETS.comidaBebidas,
    badge: 'Cumpleaños'
  },
  {
    id: 'promo-tarde-deportiva',
    name: 'Tarde de Fútbol 3x2 Horas',
    category: 'promociones',
    price: 80,
    description: 'Juega 3 horas de grass sintético en horario diurno (de lunes a viernes antes de las 5 PM) pagando solo 2.',
    imageUrl: ASSETS.grassPitch,
    badge: 'Ahorro'
  }
];

export const NEWS_POSTS: FeedPost[] = [
  {
    id: 'post-1',
    title: '¡Confirmado! Los Claveles de la Cumbia el 02 de Noviembre',
    category: 'Evento',
    date: 'Hace 2 días',
    excerpt: 'Llega la orquesta más pedida por el público huamanguino. Ya abrimos la preventa exclusiva de entradas.',
    content: 'Prepárate para bailar de principio a fin con todos los éxitos de Los Claveles de la Cumbia en Recreo Las Vegas. Tendremos pantallas gigantes, luces de concierto y seguridad garantizada.',
    imageUrl: ASSETS.flyerCumbia,
    likes: 420,
    shares: 88
  },
  {
    id: 'post-2',
    title: 'Mantenimiento y nuevo caucho para nuestra cancha de Grass',
    category: 'Grass',
    date: 'Hace 5 días',
    excerpt: 'Dejamos nuestro grass sintético 10/10 para tus pichangas nocturnas y campeonatos de fin de semana.',
    content: 'Hemos realizado el rellenado con caucho criogénico y cepillado profesional de nuestra cancha sintética techada para evitar lesiones y asegurar el mejor rodado de balón.',
    imageUrl: ASSETS.grassPitch,
    likes: 195,
    shares: 34
  },
  {
    id: 'post-3',
    title: 'Nuevo menú en Pollería Restaurant Las Vegas',
    category: 'Promoción',
    date: 'Hace 1 semana',
    excerpt: 'Disfruta de nuestros pollos a la brasa con papas nativas crocantes y chicharrones recién salidos del perol.',
    content: 'Ven a almorzar en familia o disfruta de un delicioso piqueo mientras ves tu partido favorito en nuestras pantallas gigantes. Atendemos todos los días desde el mediodía.',
    imageUrl: ASSETS.comidaBebidas,
    likes: 278,
    shares: 51
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Concierto Claveles de la Cumbia en Recreo Las Vegas',
    type: 'Flyer Oficial',
    imageUrl: ASSETS.flyerCumbia,
    caption: 'Gran evento de cumbia en vivo en nuestro escenario central de Carmen Alto.'
  },
  {
    id: 'gal-2',
    title: '30 Años Flor Sinqueña & Banda Glorias Sinfonía',
    type: 'Flyer Oficial',
    imageUrl: ASSETS.flyerFolklore,
    caption: 'Gala andina con arpa y orquesta tradicional en el salón techado.'
  },
  {
    id: 'gal-3',
    title: 'Cancha de Grass Sintético Techada',
    type: 'Espacio Deportivo',
    imageUrl: ASSETS.grassPitch,
    caption: 'Césped sintético monofilamento bajo techo parabólico para jugar de día y de noche.'
  },
  {
    id: 'gal-4',
    title: 'Escenario Principal y Balcones VIP',
    type: 'Infraestructura',
    imageUrl: ASSETS.heroVenue,
    caption: 'Amplio salón con estructura de dos niveles, zona de mesas y sonido envolvente.'
  },
  {
    id: 'gal-5',
    title: 'V Campeonato Egresados UNSCH & Fiesta con Orquesta América',
    type: 'Flyer Oficial',
    imageUrl: ASSETS.flyerCampeonato,
    caption: 'El torneo más vibrante de fútbol y vóley con cierre musical en vivo.'
  },
  {
    id: 'gal-6',
    title: 'Gastronomía y Baldes Helados',
    type: 'Experiencia Las Vegas',
    imageUrl: ASSETS.comidaBebidas,
    caption: 'Pollo a la brasa, chicharrones ayacuchanos y cervezas heladas al polo.'
  }
];
