import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
                {/* Placeholder Social Icons */}
                <a href="https://www.instagram.com/ku.sfp/" target="_blank" className="text-[var(--text-subtle)] hover:text-[var(--text-muted)]">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.05.057c-1.17.053-1.98.227-2.69.502a6.937 6.937 0 00-2.43 1.636 6.937 6.937 0 00-1.636 2.43c-.275.71-.448 1.52-.502 2.69C.01 9.22 0 9.58 0 12s.01 2.78.057 3.95c.053 1.17.227 1.98.502 2.69a6.937 6.937 0 001.636 2.43 6.937 6.937 0 002.43 1.636c.71.275 1.52.448 2.69.502C9.22 23.99 9.58 24 12 24s2.78-.01 3.95-.057c1.17-.053 1.98-.227 2.69-.502a6.937 6.937 0 002.43-1.636 6.937 6.937 0 001.636-2.43c.275-.71.448-1.52.502-2.69C23.99 14.78 24 14.42 24 12s-.01-2.78-.057-3.95c-.053-1.17-.227-1.98-.502-2.69a6.937 6.937 0 00-1.636-2.43A6.937 6.937 0 0019.05.565c-.71-.275-1.52-.448-2.69-.502C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/ko%C3%A7-university-students-for-palestine/posts/?feedView=all" target="_blank" className="text-[var(--text-subtle)] hover:text-[var(--text-muted)]">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.866 0-2.151 1.459-2.151 2.965v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.843-1.562 3.043 0 3.6 2.004 3.6 4.609v5.586z"/>
                    </svg>
                </a>
                <a href="mailto:ku.sfp23@gmail.com" className="text-[var(--text-subtle)] hover:text-[var(--text-muted)]">
                    <span className="sr-only">Gmail</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12.713l-11.985-8.713h23.97l-11.985 8.713zm-12-7.713v14h24v-14l-12 8.713-12-8.713z"/>                    
                    </svg>
                </a>
            </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-[var(--text-subtle)]">&copy; 2025 KUSFP+. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;