import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../resources/imgs/background.jpeg";

interface HeroProps {
}

const Counter: React.FC<{ end: number; label: string }> = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 2000;
        const frame = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(Math.floor(progress / duration * end), end);
            setCount(current);
            if(progress < duration) {
                requestAnimationFrame(frame);
            }
        };
        requestAnimationFrame(frame);
    }, [end]);

    return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-[var(--text-secondary)]">
                {count.toLocaleString()}+
            </p>
            <p className="text-sm md:text-base font-medium text-[var(--primary-on-light)] uppercase tracking-wider">{label}</p>
        </div>
    );
};

const Hero: React.FC<HeroProps> = ({
  videoUrl = 'https://www.youtube.com/embed/YOUR_VIDEO_ID' // Default video
}) => {
  return (
    <>
        <section 
      // className="relative min-h-screen flex items-center justify-center"
      className="relative flex items-center justify-center"

      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl tracking-tight leading-tight mb-4">
              <span className="block mb-4 text-white">Learn. Organize. Act.</span>
              <span className="block text-[var(--primary-on-dark)]">Where Action Meets Justice.</span>
            </h1>
            <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-200">
              A justice-oriented community where students develop political consciousness and take meaningful action. Starting with Palestine, extending to all struggles for justice.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link to="/who-are-we" className="w-full sm:w-auto bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--primary-hover)] transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Join the Community
              </Link>
              <Link to="/donation" className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                What is Your Role?
              </Link>
            </div>
          </div>

          {/* Right Column - Promo Video */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                title="KUSFP+ Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll down indicator */}
      {/* <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>

    {/* Counter Section - Now inside the hero at the bottom */}
    <div className="bg-[var(--background)] py-16 text-[var(--primary-on-dark)]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <Counter end={1350} label="Supporters" />
        <Counter end={250000} label="Donations Raised (TL)" />
        <Counter end={24} label="Events Organized" />
      </div>
    </div>
    
    </>
    // <div className="bg-gradient-to-br from-[var(--hero-bg-from)] to-[var(--hero-bg-to)] text-[var(--text-on-dark)]">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
    //     <h1 className="text-4xl md:text-6xl tracking-tight leading-tight mb-4">
    //       <span className="block mb-4">Change is Collective.</span>
    //       <span className="block text-[var(--primary-on-dark)]">Action is Power.</span>
    //     </h1>
    //     <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-[var(--text-secondary-on-dark)]">
    //       Join a growing community dedicated to making a tangible impact through informed advocacy, peaceful action, and unified support.
    //     </p>
    //     <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
    //       <Link to="/who-are-we" className="w-full sm:w-auto bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--primary-hover)] transition-all duration-300 transform hover:scale-105 shadow-lg">
    //         What Is Your Role?
    //       </Link>
    //       <Link to="/donation" className="w-full sm:w-auto bg-[var(--button-secondary-bg)] text-[var(--text-on-dark)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--button-secondary-hover-bg)] transition-all duration-300 transform hover:scale-105 shadow-lg">
    //         Support the Cause
    //       </Link>
    //     </div>
    //   </div>
    //    <div className="pb-24">
    //         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    //             <Counter end={12500} label="Supporters" />
    //             <Counter end={78000} label="Donations Raised ($)" />
    //             <Counter end={42} label="Events Organized" />
    //         </div>
    //     </div>
    // </div>
  );
};

export default Hero;