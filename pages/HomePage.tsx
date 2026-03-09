import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ContentSlider from '../components/ContentSlider';
import PageSection from '../components/PageSection';
import { BLOG_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero backgroundImage="./resources/imgs/background.jpeg"/>
      <ContentSlider />
      <div className="py-12 bg-[var(--background-secondary)]">
          <PageSection title="Latest Blogs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {BLOG_POSTS.slice(0,3).map(post => (
                      <Link key={post.id} to={`/blogs/${post.id}`} className="bg-[var(--background-card)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer group">
                          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                          <div className="p-6 flex flex-col flex-grow">
                              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{post.title}</h3>
                              <p className="text-sm text-[var(--text-subtle)] mb-2">{post.author} - {post.date}</p>
                              <p className="text-[var(--text-secondary)] flex-grow">{post.excerpt}</p>
                              <span className="font-semibold text-[var(--text-accent)] group-hover:underline mt-4 self-start">Read More &rarr;</span>
                          </div>
                      </Link>
                  ))}
              </div>
          </PageSection>
      </div>
    </>
  );
};

export default HomePage;