export interface NavLink {
  name: string;
  path: string;
}

export interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface Image {
  url: string; 
  title: string;
}

export interface TranslatedBlog {
  id: number;
  imageUrl: string;
  translations: {[key: string]: BlogPost};
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'title'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'references'; items: { text: string; url: string }[] };
export interface BlogContent {
  type: string;
  text: string;
}

export type Reference = {
  text: string;
  url: string;
};

export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

export interface BoycottItem {
    id: number;
    title: string;
    reason: string;
    logoUrl: string;
    details: string;
    alternatives: string[];
    categories: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
  images: Image[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}