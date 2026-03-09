import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import PostsCarousel from '../components/PostsCarousel';
import NotFoundPage from './NotFoundPage';

const BlogDetailPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  const selectedBlog = blogId ? BLOG_POSTS.find(p => p.id === parseInt(blogId, 10)) : null;

  if (!selectedBlog) {
    return <NotFoundPage />;
  }

  const otherBlogs = BLOG_POSTS.filter(p => p.id !== selectedBlog.id);

  const handlePostClick = (id: number) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <>
      <div className="bg-[var(--background-primary)] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs" className="mb-8 text-[var(--text-accent)] hover:underline font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            Back to All Blogs
          </Link>
          
          <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"/>
          
          <div className="mb-6">
            <span className="inline-block bg-[var(--accent-bg)] text-[var(--accent-bg-text)] text-sm font-semibold mr-2 px-3 py-1 rounded-full">{selectedBlog.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">{selectedBlog.title}</h1>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center text-lg text-[var(--text-muted)] gap-x-8 gap-y-4 mb-8 border-y border-[var(--border-primary)] py-4">
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span className="font-medium">{selectedBlog.author}</span>
            </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="font-medium">{selectedBlog.date}</span>
              </div>
          </div>

          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed">
            <p>{selectedBlog.content}</p>
          </div>
        </div>
      </div>
      <PostsCarousel posts={otherBlogs} onPostClick={handlePostClick} title="Read Other Blogs"/>
    </>
  );
};
export default BlogDetailPage;