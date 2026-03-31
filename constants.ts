import type { NavLink, Slide, BlogPost, Announcement, BoycottItem, Event, TeamMember } from './types';

import dec1 from './resources/imgs/dec-1.jpg';
import dec2 from './resources/imgs/dec-2.jpg';
import dec3 from './resources/imgs/dec-3.jpg';
import dec4 from './resources/imgs/dec-4.jpg';
import flot1 from './resources/imgs/flot-1.jpg';
import flot2 from './resources/imgs/flot-2.jpg';
import flot3 from './resources/imgs/flot-3.jpg';
import flot4 from './resources/imgs/flot-4.jpg';
import farha1 from './resources/imgs/farha-1.jpeg';
import farha2 from './resources/imgs/farha-2.jpeg';
import farha3 from './resources/imgs/farha-3.jpeg';
import farha4 from './resources/imgs/farha-4.jpeg';
import iftar1 from './resources/imgs/iftar-1.jpg';
import iftar2 from './resources/imgs/iftar-2.jpg';
import iftar3 from './resources/imgs/iftar-3.jpg';
import meet1 from './resources/imgs/meet-1.jpg';
import trib1 from './resources/imgs/tribunal-1.jpg';



export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Educational Posts', path: '/educational-posts' },
//   { name: 'Blogs', path: '/blogs' },
//   { name: 'Boycott List', path: '/boycott' },
//   { name: 'Announcements', path: '/announcements' },
  // { name: 'Who are we?', path: '/who-are-we' },
  // { name: 'Your Role', path: '/your-role' },
  { name: 'Connect', path: '/contact'  }
];

export const SLIDER_CONTENT: Slide[] = [
  {
    id: 1,
    imageUrl: iftar2,
    title: 'KUSFP+ Iftar at Koç',
    description: 'Moments from our iftar together this Ramadan!'
  },
  {
    id: 2,
    imageUrl: meet1,
    title: 'Meet KUSFP+ at Koç',
    description: 'Throwback to our time together at the start of the academic year!'
  },
  {
    id: 3,
    imageUrl: trib1,
    title: 'The Gaza Tribunal',
    description: 'Our participation in the Gaza Tribunal at Istanbul University.'
  },
  // {
  //   id: 4,
  //   imageUrl: 'https://picsum.photos/1200/600?random=4',
  //   title: 'New Blog Post: The Power of Local Action',
  //   description: 'Read our latest analysis on how small, local efforts can create a global impact.'
  // }
];

export const ROLES_DATA = [
  {
    title: "As a Person",
    description:
      "Change begins at the individual level. Your awareness, empathy, and daily choices shape the world around you.",
    actions: [
      "Stay informed through reliable and diverse sources.",
      "Engage in respectful conversations and listen to different perspectives.",
      "Support causes you believe in through small but consistent actions.",
      "Practice critical thinking and question misinformation.",
    ],
  },
  {
    title: "As a Member of This Community",
    description:
      "Being part of a community means amplifying impact through collaboration and shared purpose.",
    actions: [
      "Participate in discussions and share valuable insights.",
      "Help spread awareness by sharing content responsibly.",
      "Support fellow members and encourage constructive dialogue.",
      "Contribute ideas and initiatives to grow the movement.",
    ],
  },
  {
    title: "As a Student",
    description:
      "Students are in a unique position to learn, question, and influence future systems and ideas.",
    actions: [
      "Use academic resources to deepen your understanding of key issues.",
      "Organize or join student-led initiatives and discussions.",
      "Engage with professors and peers on important topics.",
      "Leverage your environment to create awareness and dialogue.",
    ],
  },
  {
    title: "As a Student in Türkiye",
    description:
      "Students in Türkiye navigate a unique social and political environment that requires awareness, responsibility, and thoughtful engagement.",
    actions: [
      "Stay informed about local issues and policies affecting students.",
      "Respect laws and regulations while advocating for change.",
      "Engage in peaceful and constructive forms of expression.",
      "Build networks with like-minded individuals and organizations.",
    ],
  },
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

export const UPCOMING_EVENTS_DATA: Event[] = [
    {
        id: 5,
        title: "Kashmir Seminar",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
    {
        id: 6,
        title: "The Power of Student Seminar",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
    {
        id: 7,
        title: "BDS Seminar",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar - Campiagn",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
];

export const EVENTS_DATA: Event[] = [
    {
        id: 8,
        title: "Under the Olive Tree: KUSFP+ Iftar at Koç",
        date: "February 25, 2026",
        time: "18:50",
        location: "Koç University - Winter Garden",
        category: "Community",
        description: "An evening of community, connection, and solidarity at this year's KUSFP+ Iftar. We break our fast together, play a fun and interactive Spy game, and enjoy henna throughout the night! More than just a meal, it's a moment to agather, reflect, and stand together.",
        imageUrl: iftar3,
        images: [
          {url: iftar1, title: ""}, 
          {url: iftar2, title: ""}, 
          // {url: iftar3, title: ""}, 
          // {url: dec4, title: ""}, 
      ]
    },
    {
        id: 1,
        title: "Decolonizing Palestine: Politics, History & Media",
        date: "December 9, 2025",
        time: "18:00",
        location: "Koç University - ENG B29",
        category: "Seminar - Panel",
        description: "A multidisciplinary panel examining how decolonial thinking-through media, history, and international relations-challenges colonial narratives and opens new ways of understanding Palestine",
        imageUrl: dec4,
        images: [
          {url: dec1, title: ""}, 
          {url: dec2, title: ""}, 
          {url: dec3, title: ""}, 
          // {url: dec4, title: ""}, 
      ]
    },
    // {
    //     id: 2,
    //     title: "Filistin'de Sanat ve Yaratıcılığa Bakış",
    //     date: "24. Kasım, 2025",
    //     time: "18:00",
    //     location: "Koç University - SOS Z21",
    //     category: "Seminar",
    //     description: "Bu kısa seminer, Filistin’deki sanatın genel bir perspektifini sunarak kültür, kimlik ve yaratıcı ifade biçimlerini ele alır. Konuşmacımız Samed Karagöz, Filistin sanatı üzerine çalışan bir küratör ve sanat uzmanı olarak deneyim ve görüşlerini paylaşacaktır.",
    //     imageUrl: "",
    //     images: []
    // },
    {
        id: 3,
        title: "Screening FARHA (2021)",
        date: "November 19, 2025",
        time: "17:30",
        location: "Koç University - Henry Ford",
        category: "Movie Screening",
        description: "Farha (2021) offers a gripping portrayal of a young girl’s survival during the Nakba, illuminating themes of displacement, resilience, and historical memory.\n\nKUSFP+ X KU Sinema  invite you to a screening, accompanied by trivia and hot drinks for an evening of collective reflection.",
        imageUrl: farha2,
        images: [
            {url:  farha4, title: "test"},
            {url:  farha1, title: "test"},
            {url:  farha3, title: "test"},
        ]
    },
    {
        id: 4,
        title: "Gaza and beyond: Activism from the sumud flotilla",
        date: "November 4, 2025",
        time: "17:30",
        location: "Koç University - SOS Z27",
        category: "Seminar - Panel",
        description: "Join us to delve into stories of resistance, solidarity, and hope — exploring how activism can transcend borders and transform the world.",
        imageUrl: flot1,
        images: [
            {url:  flot2, title: "test"},
            {url:  flot3, title: "test"},
            {url:  flot4, title: "test"},
        ]
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