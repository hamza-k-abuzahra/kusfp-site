import React, { useState, useEffect, useCallback } from 'react';
import { SLIDER_CONTENT } from '../constants';
import type { Slide } from '../types';

const ContentSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDER_CONTENT.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDER_CONTENT.length) % SLIDER_CONTENT.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="bg-[var(--background-tertiary)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <div className="relative w-full h-96 md:h-[500px]">
            <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {SLIDER_CONTENT.map((slide: Slide) => (
                <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                  <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-8">
                    <div className="text-white max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
                      <p className="mt-2 text-lg">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {SLIDER_CONTENT.map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;