import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageSection from '../components/PageSection';
import { EVENTS_DATA } from '../constants';

const EventsListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectEvent = (id: number) => {
    navigate(`/events/${id}`);
  };
  
  return (
    <PageSection title="Events">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {EVENTS_DATA.map(event => (
          <div 
            key={event.id} 
            className="bg-[var(--background-card)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            onClick={() => handleSelectEvent(event.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleSelectEvent(event.id)}
          >
            <div className="relative">
              <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay)] to-transparent"></div>
              <div className="absolute top-4 right-4 bg-[var(--primary)] text-[var(--text-on-primary)] text-sm font-bold px-3 py-1 rounded-full shadow-md">{event.category}</div>
              <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{event.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-[var(--text-subtle)] mb-4 space-x-4">
                  <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM12 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                      <span>{event.location}</span>
                  </div>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">{event.description.substring(0, 100)}...</p>
              <span className="font-semibold text-[var(--text-accent)] group-hover:underline">View Details &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};
export default EventsListPage;