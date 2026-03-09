import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageSection from '../components/PageSection';
import { BLOG_POSTS } from '../constants';

const BlogsListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectBlog = (id: number) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <PageSection title="Our Blog">
      <p className="text-center text-lg text-[var(--text-muted)] mb-12 max-w-3xl mx-auto">
        Insights, stories, and updates from the heart of the movement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <div 
            key={post.id} 
            className="bg-[var(--background-card)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col"
            onClick={() => handleSelectBlog(post.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleSelectBlog(post.id)}
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-[var(--text-accent)] uppercase">{post.category}</p>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-2 mb-2">{post.title}</h3>
                <p className="text-sm text-[var(--text-subtle)] mb-3">{post.author} - {post.date}</p>
                <p className="text-[var(--text-secondary)] mb-4 flex-grow">{post.excerpt}</p>
                <span className="font-semibold text-[var(--text-accent)] group-hover:underline mt-auto">Read More &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default BlogsListPage;