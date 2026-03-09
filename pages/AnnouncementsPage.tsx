import React from 'react';
import PageSection from '../components/PageSection';
import AccordionItem from '../components/AccordionItem';
import { ANNOUNCEMENTS } from '../constants';

const AnnouncementsPage: React.FC = () => {
  return (
    <PageSection title="Announcements">
       <div className="w-full max-w-4xl mx-auto bg-[var(--background-secondary)] rounded-lg shadow-lg overflow-hidden">
          {ANNOUNCEMENTS.map((announcement, index) => (
              <AccordionItem 
                  key={announcement.id} 
                  title={announcement.title}
                  date={announcement.date}
                  content={announcement.content}
                  startOpen={index === 0}
              />
          ))}
      </div>
    </PageSection>
  );
};

export default AnnouncementsPage;