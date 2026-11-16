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
    <section>
      <div className="max-w-7xl mx-auto py-12 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-baseline gap-3 border-b border-[rgba(74,58,40,0.15)] pb-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111827]">{title}</h2>
          <span className="text-sm text-[#6b5a45]">{posts.length} more</span>
        </div>
        <div className="flex overflow-x-auto gap-6 pt-2 pb-6 -mx-4 px-4 snap-x">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onPostClick(post.id)}
              className="flex-shrink-0 w-72 sm:w-80 snap-start overflow-hidden cursor-pointer rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)] hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(74,58,40,0.18)] transition-all duration-300 group"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onPostClick(post.id)}
            >
              <div className="overflow-hidden"><img className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105" src={post.imageUrl} alt={post.title} /></div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{post.date}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug text-[#111827] group-hover:text-[#940d0d] transition-colors">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsCarousel;