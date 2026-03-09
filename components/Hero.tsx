import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <p className="text-4xl md:text-5xl font-extrabold text-[var(--text-on-dark)]">
                {count.toLocaleString()}+
            </p>
            <p className="text-sm md:text-base font-medium text-[var(--primary-lighter-on-dark)] uppercase tracking-wider">{label}</p>
        </div>
    );
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="bg-gradient-to-br from-[var(--hero-bg-from)] to-[var(--hero-bg-to)] text-[var(--text-on-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl tracking-tight leading-tight mb-4">
          <span className="block mb-4">Change is Collective.</span>
          <span className="block text-[var(--primary-on-dark)]">Action is Power.</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-[var(--text-secondary-on-dark)]">
          Join a growing community dedicated to making a tangible impact through informed advocacy, peaceful action, and unified support.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/who-are-we" className="w-full sm:w-auto bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--primary-hover)] transition-all duration-300 transform hover:scale-105 shadow-lg">
            What Is Your Role?
          </Link>
          <Link to="/donation" className="w-full sm:w-auto bg-[var(--button-secondary-bg)] text-[var(--text-on-dark)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--button-secondary-hover-bg)] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Support the Cause
          </Link>
        </div>
      </div>
       <div className="pb-24">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <Counter end={12500} label="Supporters" />
                <Counter end={78000} label="Donations Raised ($)" />
                <Counter end={42} label="Events Organized" />
            </div>
        </div>
    </div>
  );
};

export default Hero;