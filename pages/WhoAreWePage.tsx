import React from 'react';
import PageSection from '../components/PageSection';
import { TEAM_MEMBERS } from '../constants';

const WhoAreWePage: React.FC = () => {
  return (
    <>
      <PageSection title="Who We Are">
        <div className="space-y-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center">
            <p>We are a collective of passionate individuals from diverse backgrounds, united by a common goal: to drive meaningful change through informed, collective action.</p>
            <p>Our mission is to empower communities by providing accessible information, fostering dialogue, and creating platforms for peaceful advocacy. We believe in the power of every individual to contribute to a more just and equitable world.</p>
            <p>This platform serves as a central hub for our efforts, connecting activists, supporters, and the curious. Welcome to the movement.</p>
        </div>
      </PageSection>
      <div className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">Meet Our Team</h3>
            <p className="mt-4 text-lg text-[var(--text-muted)]">The dedicated individuals powering our movement.</p>
            <div className="mt-6 h-1 w-20 bg-[var(--primary)] mx-auto rounded"></div>
          </div>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-20">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8">
                <img
                  className="h-32 w-32 rounded-full object-cover shadow-lg border-4 border-[var(--primary)]/50 flex-shrink-0"
                  src={member.avatarUrl}
                  alt={`Avatar of ${member.name}`}
                />
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">{member.name}</h4>
                  <p className="text-[var(--text-accent)] font-semibold">{member.role}</p>
                  <p className="mt-2 text-base text-[var(--text-muted)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWePage;