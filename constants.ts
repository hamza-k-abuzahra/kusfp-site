import type { NavLink, Slide, BlogPost, Announcement, BoycottItem, Event, TeamMember } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Educational Posts', path: '/educational-posts' },
//   { name: 'Blogs', path: '/blogs' },
//   { name: 'Boycott List', path: '/boycott' },
//   { name: 'Announcements', path: '/announcements' },
  { name: 'Who are we?', path: '/who-are-we' },
];

export const SLIDER_CONTENT: Slide[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/1200/600?random=1',
    title: 'Upcoming Peaceful Protest',
    description: 'Join us this Saturday for a peaceful demonstration for change. Your voice matters.'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/1200/600?random=2',
    title: 'Educational Webinar Series',
    description: 'Our new webinar series breaks down complex issues into understandable actions. First session on Tuesday.'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/1200/600?random=3',
    title: 'Community Support Drive',
    description: 'We are collecting donations and supplies for affected families. Find out how you can help.'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/1200/600?random=4',
    title: 'New Blog Post: The Power of Local Action',
    description: 'Read our latest analysis on how small, local efforts can create a global impact.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "The Ripple Effect of Conscious Consumerism",
        author: "Jane Doe",
        date: "October 26, 2023",
        category: "Ethical Living",
        excerpt: "Discover how your daily purchasing decisions can send powerful messages to corporations and governments, fostering a more ethical world.",
        imageUrl: "https://picsum.photos/400/250?random=10",
        content: "Conscious consumerism is more than just a trend; it's a movement towards greater accountability and sustainability. By choosing to support businesses that align with ethical values, consumers can collectively influence corporate behavior. This involves researching supply chains, understanding labor practices, and prioritizing products that are environmentally friendly. Every purchase is a vote for the kind of world you want to live in. While individual actions may seem small, their cumulative effect can lead to significant shifts in industry standards, pushing for better wages, safer working conditions, and reduced environmental footprints. It's about transforming the marketplace from the ground up."
    },
    {
        id: 2,
        title: "Understanding the Media: A Guide to Spotting Disinformation",
        author: "John Smith",
        date: "October 22, 2023",
        category: "Media Literacy",
        excerpt: "In an age of information overload, learn the critical skills to discern fact from fiction and become a more informed advocate for truth.",
        imageUrl: "https://picsum.photos/400/250?random=11",
        content: "The digital age has democratized information, but it has also created a fertile ground for disinformation. To be an effective advocate, one must first be a discerning consumer of media. Key strategies include verifying sources, cross-referencing information across multiple reputable outlets, and being wary of emotionally charged headlines. Understanding common logical fallacies and propaganda techniques can also serve as a powerful defense. Look for bylines, check the publication's history, and use fact-checking websites. By honing these critical thinking skills, we can protect ourselves from manipulation and contribute to a more informed public discourse."
    },
    {
        id: 3,
        title: "Organizing for Impact: A Beginner's Guide to Grassroots Activism",
        author: "Ai Chan",
        date: "October 18, 2023",
        category: "Community Action",
        excerpt: "Feeling passionate but not sure where to start? This guide provides actionable steps to organize your community and make your voice heard.",
        imageUrl: "https://picsum.photos/400/250?random=12",
        content: "Grassroots activism is the bedrock of democratic change. It starts with a small group of passionate individuals and can grow into a powerful force. The first step is to clearly define your goal. What specific change do you want to see? Next, build a coalition. Reach out to friends, neighbors, and local community groups who share your concerns. Leverage social media to raise awareness but don't underestimate the power of face-to-face meetings. Plan specific, achievable actions, whether it's a letter-writing campaign, a community meeting, or a peaceful protest. Remember to celebrate small victories to maintain momentum and morale. Every great movement started with a few people who dared to believe they could make a difference."
    }
];

export const ANNOUNCEMENTS: Announcement[] = [
    {
        id: 1,
        title: "New Partnership with Global Relief Foundation",
        date: "November 1, 2023",
        content: "We are thrilled to announce a new partnership that will amplify our efforts and extend our reach to communities in need across the globe."
    },
    {
        id: 2,
        title: "Annual Charity Gala - Save the Date!",
        date: "October 28, 2023",
        content: "Our biggest fundraising event of the year is scheduled for December 15th. Get ready for an evening of inspiration and action. Tickets on sale soon."
    },
    {
        id: 3,
        title: "Volunteer Mobilization Success",
        date: "October 25, 2023",
        content: "A huge thank you to the 500+ new volunteers who signed up last week! Your dedication is the backbone of our movement."
    }
];

export const BOYCOTT_LIST: BoycottItem[] = [
    { 
        id: 1, 
        title: "MegaCorp Inc.", 
        reason: "Cited for unethical labor practices and environmental damage.", 
        logoUrl: "https://picsum.photos/200/200?random=20",
        details: "Investigations have revealed MegaCorp Inc. utilizes sweatshops in their supply chain and has been fined multiple times for dumping industrial waste into local rivers, severely impacting ecosystems and community health.",
        alternatives: ["EcoFriendly Goods", "FairTrade Collective"],
        categories: ["food"]
    },
    { 
        id: 2, 
        title: "Global Beverages Co.", 
        reason: "Involved in water source exploitation in vulnerable communities.", 
        logoUrl: "https://picsum.photos/200/200?random=21",
        details: "Global Beverages Co. has been criticized for privatizing public water sources in developing regions, leading to water scarcity for local populations while they bottle and sell the water at a premium.",
        alternatives: ["Local Spring Waters", "PureSip Drinks"],
        categories: ["food"]
    },
    { 
        id: 3, 
        title: "Fast Fashion United", 
        reason: "Lack of transparency in supply chain and use of child labor.", 
        logoUrl: "https://picsum.photos/200/200?random=22",
        details: "Audits and whistleblower reports have consistently pointed to the use of child labor in factories supplying Fast Fashion United. They have failed to provide a transparent supply chain audit.",
        alternatives: ["Sustainable Threads", "Ethical Attire"],
        categories: ["food"]
    },
    { 
        id: 4, 
        title: "TechGiant Ltd.", 
        reason: "Data privacy violations and suppression of user speech.", 
        logoUrl: "https://picsum.photos/200/200?random=23",
        details: "TechGiant Ltd. has faced numerous lawsuits regarding the unauthorized collection and sale of user data to third parties. They have also been accused of censoring content that is critical of their business partners.",
        alternatives: ["PrivacyFirst Tech", "OpenSource Software Solutions"],
        categories: ["food"]
    }
];

export const EVENTS_DATA: Event[] = [
    {
        id: 1,
        title: "Community Town Hall: Our Path Forward",
        date: "November 15, 2023",
        time: "7:00 PM - 9:00 PM",
        location: "City Central Auditorium",
        category: "Community Meeting",
        description: "Join us for a vital town hall meeting to discuss our community's strategy for the upcoming year. This is a platform for open dialogue, where your voice can directly shape our collective actions. We will cover recent successes, current challenges, and opportunities for grassroots involvement. Guest speakers include local leaders and seasoned activists.",
        imageUrl: "https://picsum.photos/1200/800?random=31"
    },
    {
        id: 2,
        title: "Peaceful March for Global Justice",
        date: "November 25, 2023",
        time: "1:00 PM",
        location: "Starts at Parliament Square",
        category: "Protest",
        description: "A peaceful demonstration to demand accountability and justice on a global scale. We will march in solidarity with oppressed communities worldwide. Please bring signs, water, and a commitment to non-violence. Let's make our unified presence felt and send a clear message to world leaders.",
        imageUrl: "https://picsum.photos/1200/800?random=32"
    },
    {
        id: 3,
        title: "Workshop: Know Your Rights",
        date: "December 2, 2023",
        time: "10:00 AM - 1:00 PM",
        location: "Online via Zoom",
        category: "Workshop",
        description: "An essential online workshop led by legal experts, designed to educate activists and community members on their rights during protests and public gatherings. This session will cover legal precedents, de-escalation techniques, and what to do if you are detained. Registration is required to receive the Zoom link.",
        imageUrl: "https://picsum.photos/1200/800?random=33"
    },
    {
        id: 4,
        title: "Fundraising Gala: An Evening of Hope",
        date: "December 9, 2023",
        time: "6:30 PM",
        location: "The Grand Ballroom",
        category: "Fundraiser",
        description: "Our annual fundraising gala is the cornerstone of our financial support. Join us for an inspiring evening featuring a keynote speech, silent auction, and live performances. All proceeds go directly towards funding our advocacy campaigns and community support programs for the next year.",
        imageUrl: "https://picsum.photos/1200/800?random=34"
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "Dr. Evelyn Reed",
        role: "Founder & Lead Strategist",
        bio: "With over 20 years of experience in social justice and community organizing, Evelyn provides the vision and strategic direction for our movement.",
        avatarUrl: "https://picsum.photos/200/200?random=40"
    },
    {
        id: 2,
        name: "Jamal Carter",
        role: "Community Outreach Director",
        bio: "Jamal is the heart of our community engagement, building bridges and mobilizing support on the ground. He ensures every voice is heard.",
        avatarUrl: "https://picsum.photos/200/200?random=41"
    },
    {
        id: 3,
        name: "Sofia Nguyen",
        role: "Research & Policy Analyst",
        bio: "Sofia's sharp analysis and dedication to data-driven advocacy shape our campaigns and educational materials, ensuring our actions are informed and impactful.",
        avatarUrl: "https://picsum.photos/200/200?random=42"
    },
    {
        id: 4,
        name: "Ben O'Connell",
        role: "Digital Campaign Manager",
        bio: "Ben is the digital force behind our online presence, managing social media campaigns and leveraging technology to amplify our message globally.",
        avatarUrl: "https://picsum.photos/200/200?random=43"
    }
];