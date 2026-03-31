import React from 'react';
import PageSection from '../components/PageSection';

const DonationPage: React.FC = () => {
  return (
    <PageSection title="Support Our Cause">
      <div className="text-center">
        <p className="text-lg text-[var(--text-muted)] mb-6">Your contribution fuels our mission and helps us create lasting impact. Every donation, no matter the size, makes a difference. <br></br> You can reach out to our Whatsapp community for more deatils about how you can contribute financially.</p>
        <button className="bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-4 px-10 rounded-lg hover:bg-[var(--primary-hover)] transition-colors duration-300 text-xl shadow-lg">
          <a href="https://chat.whatsapp.com/DHWdeGh7iM35hyFuqYzEpe" target="_blank" >          
            Join Whatsapp Community
          </a>
        </button>
      </div>
    </PageSection>
  );
};

export default DonationPage;