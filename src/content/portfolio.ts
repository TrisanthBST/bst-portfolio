export type SocialLink = {
  name: string;
  url: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  slug: string;
  type: string;
  role: string;
  description: string;
  problem: string;
  team: string;
  stack: string[];
  highlights: string[];
  contribution: string[];
  liveUrl?: string;
  sourceCode?: string;
  thumbnail?: string;
  gallery?: string[];
};

export const siteConfig = {
  brandName: "BST Developers",
  ownerName: "B. Trisanth",
  title: "Software Developer",
  location: "Hyderabad, India",
  email: "Beingsimplytrue@gmail.com",
  resume: "",
  availability: "Open to internships, software engineering roles, and freelance work",
  seo: {
    title: "BST Developers | B. Trisanth",
    description:
      "Portfolio of B. Trisanth, a CSE student and software developer building modern web and mobile products with a focus on frontend, full-stack engineering, and clean user experience.",
    url: "",
  },
};

export const heroContent = {
  eyebrow: "BST Developers",
  headline: "Software developer crafting modern digital products",
  subheadline:
    "From web interfaces to mobile apps, I build practical, user-focused solutions with modern technologies.",
  intro:
    "I’m B. Trisanth, a web and React Native developer who enjoys solving problems, learning fast, and building applications that are both functional and visually refined.",
  primaryCta: {
    label: "See Projects",
    href: "#selected-projects",
  },
  secondaryCta: {
    label: "Get In Touch",
    href: "/contact",
  },
  codeLines: [
    "Frontend, full-stack, and mobile development",
    "Built with performance, responsiveness, and clarity",
    "Focused on recruiter-ready and client-ready product quality",
  ],
};

export const aboutContent = {
  sectionLabel: "About",
  lead:
    "I build products with a balance of engineering quality and user experience.",
  summaryTitle: "B. Trisanth",
  summary:
    "I’m a CSE student and software developer with a strong interest in full-stack development, mobile applications, UI/UX, and modern web technologies.",
  paragraphs: [
    "I enjoy building digital products that are not only functional and scalable, but also clean, intuitive, and visually refined.",
    "My work is driven by a balance of engineering and user experience. I’m especially interested in creating responsive web applications and mobile apps that solve real problems with thoughtful design and maintainable code.",
    "As a fast learner and problem solver, I’m always looking to improve my skills, explore new technologies, and grow into impactful software engineering roles.",
  ],
  closing: "Focused on clean systems, polished interfaces, and meaningful product work.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Component Architecture",
      "State Management",
      "Performance Optimization",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "MongoDB",
      "Database Modeling",
      "Authentication Fundamentals",
      "Server-Side Rendering Concepts",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Cross-Platform App Development",
      "Mobile UI Development",
      "API Integration",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "npm", "Bun"],
  },
  {
    title: "Core Strengths",
    items: [
      "Problem Solving",
      "Clean Code Practices",
      "Scalable UI Development",
      "Debugging",
      "UI/UX Thinking",
      "Fast Learning",
    ],
  },
  {
    title: "Currently Exploring",
    items: [
      "Full-Stack Architecture",
      "System Design Fundamentals",
      "Advanced TypeScript Patterns",
      "Web Performance",
      "Product-Oriented Development",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "Labmentix",
    title: "Web Developer Intern",
    duration: "6 Months",
    location: "Hyderabad, India",
    description:
      "Contributed to full-scale MERN applications while taking an active role in team coordination and project delivery.",
    highlights: [
      "Built and contributed to full-scale web applications using MongoDB, Express.js, React, and Node.js.",
      "Worked across both frontend and backend development tasks in a production-style workflow.",
      "Managed team coordination during project development and supported delivery planning.",
      "Strengthened practical experience in scalable application development and collaborative execution.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "CargoLink",
    slug: "cargolink",
    type: "Web Application",
    role: "Full Stack Developer",
    description:
      "A full-stack logistics and shipment management platform that streamlines shipment operations and enables real-time tracking for logistics workflows.",
    problem:
      "CargoLink streamlines shipment management and provides real-time tracking for logistics companies, enhancing operational efficiency.",
    team: "Team Project",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "JWT"],
    highlights: [
      "Built real-time shipment tracking using WebSockets.",
      "Designed and developed the admin panel for managing users, shipments, and delivery statuses.",
      "Implemented JWT-based authentication and authorization.",
      "Created a responsive dashboard experience for efficient shipment management.",
      "Worked with MongoDB to manage users, shipment records, and status updates.",
    ],
    contribution: [
      "Implemented the live shipment tracking system using WebSockets.",
      "Built the admin workflows for managing users, shipments, and status changes.",
      "Contributed to the full-stack architecture and delivery of a modern dashboard experience.",
    ],
    sourceCode: "https://github.com/CargoLink-FSD/CargoLink",
    thumbnail: "/projects/cargolink/cargolink-ecb899e9-877d-4307-9e5c-f4e2a60ddd5d.png",
    gallery: [
      "/projects/cargolink/cargolink-ecb899e9-877d-4307-9e5c-f4e2a60ddd5d.png",
      "/projects/cargolink/cargolink-8e60d153-aa60-4adc-a544-8f7341fd59af.png",
      "/projects/cargolink/cargolink-f693e3ad-ecd0-4a84-a256-8bff91211f18.png",
      "/projects/cargolink/cargolink-a7736e52-5f25-43dd-b803-a889ddad473f.png",
      "/projects/cargolink/cargolink-e77b6120-85cc-4767-91a2-cb29364f3e97.png",
      "/projects/cargolink/cargolink-c7233487-057f-4a7a-8348-6adc356c15c1.png",
      "/projects/cargolink/cargolink-0b346165-24be-4c3a-97dd-65f47b70ae94.png",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/TrisanthBST" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/trisanth-badireddy-7abba8289/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
