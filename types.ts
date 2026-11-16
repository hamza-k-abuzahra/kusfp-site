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
  | { type: 'sub-title'; text: string }
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
  date: string;      // write in English, e.g. "March 3, 2026"
  content: string;   // blank line = new paragraph
  imageUrl?: string; // optional; also used on the home page slider
  link?: { label: string; url: string }; // optional button, e.g. a form or an event page ("/events/5")
}

export interface BoycottItem {
    id: number;
    title: string;
    reason: string;                          // one or two lines shown on the card
    logoUrl?: string;                        // optional; the brand's initials are shown if missing
    details?: string;                        // longer explanation shown in the popup
    alternatives: string[];                  // what to choose instead
    categories: string[];                    // e.g. "food", "tech" (used for the filter chips)
    sources?: { label: string; url: string }[]; // links backing up the claim
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
  // Optional extras for the event page (shown only when filled in)
  summary?: string;                              // one-line intro shown in bold above the description
  speakers?: { name: string; role?: string }[];  // speakers / panelists / hosts
  highlights?: string[];                         // key points, takeaways or what happened
  reflections?: string;                          // what we took away from it (blank line = new paragraph)
  remarks?: string;                              // closing notes, thanks, acknowledgements
  links?: { instagram?: string; linkedin?: string }; // posts about the event; a button shows only if a link is set
}

export interface Team {
  name: string;
  symbol?: string;     // optional line-art symbol from the background pattern (e.g. "olive", "key", "dove")
  description: string; // what this team does
  roles: string[];     // positions / responsibilities in the team
  skills: string[];    // skills that help (or that you'll learn)
}
export interface RoleAction {
  text: string;
  to?: string; // optional internal link
}

export interface Role {
  ring: string;
  title: string;
  description: string;
  actions: RoleAction[];
}
