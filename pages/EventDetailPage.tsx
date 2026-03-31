import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EVENTS_DATA, UPCOMING_EVENTS_DATA } from '../constants';
import EventsCarousel from '../components/EventsCarousel';
import NotFoundPage from './NotFoundPage';
import ImageCarousel from '@/components/ImageCarousel';

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  let selectedEvent = eventId ? EVENTS_DATA.find(e => e.id === parseInt(eventId, 10)) : null;
  let upcoming = false;
  

  if (!selectedEvent) {
    selectedEvent = eventId ? UPCOMING_EVENTS_DATA.find(e=> e.id === parseInt(eventId, 10)) : null;
    upcoming = true;
    if (!selectedEvent) {
      return <NotFoundPage />;
    }
  }

  const otherEvents = upcoming? UPCOMING_EVENTS_DATA.filter(e=> e.id !== selectedEvent.id) : EVENTS_DATA.filter(e => e.id !== selectedEvent.id);

  const handleEventClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <>
      <div className="bg-[var(--background-primary)] py-24 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/events" className="mb-8 text-[var(--text-accent)] hover:underline font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            Back to All Events
          </Link>
          
          <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"/>
          
          <div className="mb-6">
            <span className="inline-block bg-[var(--accent-bg)] text-[var(--accent-bg-text)] text-sm font-semibold mr-2 px-3 py-1 rounded-full">{selectedEvent.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">{selectedEvent.title}</h1>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center text-lg text-[var(--text-muted)] gap-x-8 gap-y-4 mb-8 border-y border-[var(--border-primary)] py-4">
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="font-medium">{selectedEvent.date}</span>
            </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="font-medium">{selectedEvent.time}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM12 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                <span className="font-medium">{selectedEvent.location}</span>
              </div>
          </div>

          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed">
            <p>{selectedEvent.description}</p>
          </div>
          <ImageCarousel images={selectedEvent.images}/>
        </div>
      </div>
      {/* <EventsCarousel events={otherEvents} onEventClick={handleEventClick} /> */}
    </>
  );
};
export default EventDetailPage;