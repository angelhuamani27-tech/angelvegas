import React, { useState } from 'react';
import { EventItem } from './types';
import { UPCOMING_EVENTS } from './data/lasVegasData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedEventBanner } from './components/FeaturedEventBanner';
import { UpcomingEvents } from './components/UpcomingEvents';
import { ArtistsSection } from './components/ArtistsSection';
import { GrassSection } from './components/GrassSection';
import { ProductsMenu } from './components/ProductsMenu';
import { VenueExperience } from './components/VenueExperience';
import { NewsFeed } from './components/NewsFeed';
import { LocationSection } from './components/LocationSection';
import { SocialsAndShare } from './components/SocialsAndShare';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EventDetailModal } from './components/EventDetailModal';
import { FlyerLightbox } from './components/FlyerLightbox';

export default function App() {
  const [selectedEventForModal, setSelectedEventForModal] = useState<EventItem | null>(null);
  const [selectedEventForLightbox, setSelectedEventForLightbox] = useState<EventItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEvent = (event: EventItem) => {
    setSelectedEventForModal(event);
  };

  const handleOpenFlyerLightbox = (event: EventItem) => {
    setSelectedEventForLightbox(event);
  };

  const handleExploreArtistEvents = (artistName: string) => {
    // Find matching event or scroll to events section
    const matchedEvent = UPCOMING_EVENTS.find(
      (e) =>
        e.mainArtist.toLowerCase().includes(artistName.toLowerCase()) ||
        e.supportingArtists.some((sa) => sa.toLowerCase().includes(artistName.toLowerCase()))
    );

    if (matchedEvent) {
      setSelectedEventForModal(matchedEvent);
    } else {
      scrollToSection('eventos');
    }
  };

  const featuredEvent = UPCOMING_EVENTS[0];

  return (
    <div className="min-h-screen bg-[#090b10] text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Fixed Header Navigation */}
      <Navbar
        onOpenEvents={() => scrollToSection('eventos')}
        onOpenGrass={() => scrollToSection('grass')}
      />

      {/* Hero Presentation */}
      <Hero
        onScrollToEvents={() => scrollToSection('eventos')}
        onScrollToGrass={() => scrollToSection('grass')}
      />

      {/* Big Event of the Month Banner with Countdown */}
      {featuredEvent && (
        <FeaturedEventBanner
          event={featuredEvent}
          onSelectEvent={handleSelectEvent}
          onOpenFlyerLightbox={handleOpenFlyerLightbox}
        />
      )}

      {/* Main Upcoming Events Section with interactive filter and WhatsApp buying */}
      <UpcomingEvents
        onSelectEvent={handleSelectEvent}
        onOpenFlyerLightbox={handleOpenFlyerLightbox}
      />

      {/* Featured Artists Stage */}
      <ArtistsSection onExploreArtistEvents={handleExploreArtistEvents} />

      {/* Grass Las Vegas Synthetic Grass Sports Section with Interactive Booking Engine */}
      <GrassSection />

      {/* Restaurant Menu, Grill, Pollería & Beers */}
      <ProductsMenu />

      {/* Venue Architecture, Balconies & Live Atmosphere Experience */}
      <VenueExperience />

      {/* News, Social Announcements & Community Feed */}
      <NewsFeed />

      {/* Address, Hours, Phones, Interactive Map Embed & Google Maps navigation */}
      <LocationSection />

      {/* Social Network Channels and Fast Web Share */}
      <SocialsAndShare />

      {/* Comprehensive Official Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp Interactive Assistant */}
      <FloatingWhatsApp />

      {/* Event Details & Ticket Checkout Modal */}
      <EventDetailModal
        event={selectedEventForModal}
        onClose={() => setSelectedEventForModal(null)}
        onOpenFlyerLightbox={(ev) => {
          setSelectedEventForModal(null);
          setSelectedEventForLightbox(ev);
        }}
      />

      {/* Fullscreen High-Resolution Flyer Lightbox Gallery */}
      <FlyerLightbox
        currentEvent={selectedEventForLightbox}
        onClose={() => setSelectedEventForLightbox(null)}
        onSelectEventForBooking={(ev) => {
          setSelectedEventForLightbox(null);
          setSelectedEventForModal(ev);
        }}
      />
    </div>
  );
}
