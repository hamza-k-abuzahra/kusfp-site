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

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  content: string;
}

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
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}