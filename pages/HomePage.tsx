import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ContentSlider from '../components/ContentSlider';
import RolesSection from '../components/RolesSection';
import BoycottSpotlight from '../components/BoycottSpotlight';
import SectionHeader from '../components/SectionHeader';
import { BLOG_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <RolesSection />
      <ContentSlider />
      <BoycottSpotlight />
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Learn"
            title="Latest Reads"
            subtitle="Articles and analysis written by our members, on Palestine and struggles for justice worldwide."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <Link key={post.id} to={`/educational-posts/${post.id}`} className="group flex flex-col overflow-hidden rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)] hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(74,58,40,0.18)] transition-all duration-300">
                <div className="overflow-hidden">
                  <img src={post.imageUrl} alt={post.translations.en.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{post.translations.en.author} · {post.translations.en.date}</p>
                  <h3 className="mt-2 text-xl font-bold text-[#111827]">{post.translations.en.title}</h3>
                  <p className="mt-2 text-[#4b5563] flex-grow">{post.translations.en.excerpt}</p>
                  <span className="mt-4 font-semibold text-[#940d0d]">Read more <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/educational-posts" className="inline-block rounded-lg border border-[#940d0d] px-6 py-3 font-semibold text-[#940d0d] hover:bg-[#940d0d] hover:text-white transition-colors">
              All educational posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;