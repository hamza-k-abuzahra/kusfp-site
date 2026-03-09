import React from 'react';
import type { BlogPost } from '../types';

interface PostsCarouselProps {
  posts: BlogPost[];
  onPostClick: (id: number) => void;
  title?: string;
}

const PostsCarousel: React.FC<PostsCarouselProps> = ({ posts, onPostClick, title = "Further Reading" }) => {
  
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="bg-[var(--background-tertiary)]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">{title}</h2>
        <div className="flex overflow-x-auto space-x-8 pb-4 -mx-4 px-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onPostClick(post.id)}
              className="flex-shrink-0 w-80 bg-[var(--background-card)] rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 group"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onPostClick(post.id)}
            >
              <img className="w-full h-40 object-cover" src={post.imageUrl} alt={post.title} />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">{post.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-subtle)]">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsCarousel;