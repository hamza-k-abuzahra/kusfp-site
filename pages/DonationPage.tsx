import React from 'react';
import PageSection from '../components/PageSection';

const DonationPage: React.FC = () => {
  return (
    <PageSection title="Support Our Cause">
      <div className="text-center">
        <p className="text-lg text-[var(--text-muted)] mb-6">Your contribution fuels our mission and helps us create lasting impact. Every donation, no matter the size, makes a difference.</p>
        <button className="bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-4 px-10 rounded-lg hover:bg-[var(--primary-hover)] transition-colors duration-300 text-xl shadow-lg">
          Donate Securely Now
        </button>
      </div>
    </PageSection>
  );
};

export default DonationPage;