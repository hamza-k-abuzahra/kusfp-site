import React from 'react';
import type { Event } from '../types';

interface EventsCarouselProps {
  events: Event[];
  onEventClick: (id: number) => void;
  title?: string;
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events, onEventClick, title = "Explore Other Events" }) => {
  
  if (events.length === 0) {
    return null;
  }

  return (
    <div className="bg-[var(--background-tertiary)]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">{title}</h2>
        <div className="flex overflow-x-auto space-x-8 pb-4 -mx-4 px-4">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => onEventClick(event.id)}
              className="flex-shrink-0 w-80 bg-[var(--background-card)] rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 group"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onEventClick(event.id)}
            >
              <img className="w-full h-40 object-cover" src={event.imageUrl} alt={event.title} />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">{event.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-subtle)]">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousel;