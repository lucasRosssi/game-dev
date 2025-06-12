import {
  cpp,
  ue,
  mobile,
  mobile2,
  desktop,
  desktop2,
  circleOfTheElements,
  blitzshot,
  linkedin,
  github,
  resume,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Backstory",
  },
  {
    id: "projects",
    title: "Quest Log",
  },
  {
    id: "work",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Team Up",
  },
];

export const socialMediaLinks = [
  {
    icon: resume,
    link: '/game-dev/LucasRossiMarinho_GameDeveloper.pdf',
    title: 'Resume',
  },
  {
    icon: linkedin,
    link: 'https://www.linkedin.com/in/lucas-rosssi/',
    title: 'LinkedIn',
    bg: 'white',
  },
  {
    icon: github,
    link: 'https://github.com/lucasRosssi/',
    title: 'GitHub',
  },
];

export const services = [
  { title: "Unreal Engine", icon: ue, bg: true },
  { title: "C++", icon: cpp },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Fetchly Labs",
    icon: desktop2,
    iconBg: "#161329",
    date: "December 2024 - Present",
    points: [
      "Developed and maintained production-grade React Native applications, with support for offline-first workflows using PowerSync and SQLite, enhancing mobile reliability in poor connectivity environments.",
      "Designed multi-step registration flows with React Hook Form and Zod, including dynamic schema validation and custom input masking logic for user-friendly data entry.",
      "Built and debugged data-driven Shopify storefronts, working directly with Liquid, GraphQL Storefront API, and custom components for headless implementations",
      "Managed dependency upgrades and resolution issues, ensuring smooth transitions through breaking changes in large-scale mobile codebases."
    ],
  },
  {
    title: "Systems Development Analyst",
    company_name: "Hu. Innovation",
    icon: desktop,
    iconBg: "#161329",
    date: "May 2022 - December 2024",
    points: [
      "Developed customized systems tailored to clients' unique business rules, like premium features, rewards systems, contact and favorites management.",
      "Integrated 3rd party payment systems with our server, guaranteeing a seamless purchase process.",
      "Constant support for teammates and new trainee developers, ensuring a smooth onboarding and qualification process.",
      "Deployment and application management (App Store, Google Play Store, Azure, AWS)."
    ],
  },
  {
    title: "Mobile App Architect",
    company_name: "Freelance",
    icon: mobile2,
    iconBg: "#161329",
    date: "October 2023 - April 2024",
    points: [
      "Developed the V2 of a mobile app from scratch, setting up all dependencies and necessary systems to ensure a smooth development process.",
      "Implemented an offline database that integrates with an online one, providing a seamless offline-first experience for the users.",
      "Created a dynamic queue system that stores API requests and secures offline-online synchronization.",
      "Added customized and expandable hooks, contexts and events."
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Hitechline",
    icon: mobile,
    iconBg: "#161329",
    date: "December 2021 - August 2022",
    points: [
      "Developed a mobile app based on design team prototypes.",
      "Created dynamic and reusable components.",
      "Coded smooth and performant animations.",
      "Integrated Firebase with a real time matching system"
    ],
  },
];

export const technologies = [];

export const projects = [
  {
    name: "Circle of the Elements",
    description:
      "Top Down RPG with a druid protagonist that fights goblins to free the elemental spirits they imprisioned in jewels. The freed spirits join the druid by providing new elemental powers.",
    tags: [
      { name: "UnrealEngine", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "blueprints", color: "pink-text-gradient" },
      { name: "GAS", color: "orange-text-gradient" },
      { name: "AI", color: "blue-text-gradient" },
      { name: "UI", color: "green-text-gradient" },
      { name: "animation", color: "pink-text-gradient" },
    ],
    video: circleOfTheElements,
    source_code_link: "https://github.com/lucasRosssi/circle-of-the-elements",
  },
  {
    name: "Blitzshot",
    description:
      "3rd Person PVE Shooter with multiple weapon types, ammo resources, regular and boss enemies. Players can choose different characters fully animated.",
    tags: [
      { name: "UnrealEngine", color: "blue-text-gradient" },
      { name: "C++", color: "orange-text-gradient" },
      { name: "blueprints", color: "green-text-gradient" },
      { name: "animation", color: "pink-text-gradient" },
      { name: "AI", color: "orange-text-gradient" },
      { name: "UI", color: "blue-text-gradient" },
    ],
    video: blitzshot,
    source_code_link: "https://github.com/lucasRosssi/Blitzshot",
  },
  {
    name: "Starblast (WIP)",
    description:
      "3rd Person Co-op Shooter currently under development. It will feature a variety of weapons, abilities and interesting enemies, with in an engaging combat system.",
    tags: [
      { name: "UnrealEngine", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "blueprints", color: "pink-text-gradient" },
      { name: "GAS", color: "orange-text-gradient" },
      { name: "AI", color: "blue-text-gradient" },
      { name: "UI", color: "green-text-gradient" },
      { name: "MotionMatching", color: "pink-text-gradient" },
      { name: "multiplayer", color: "orange-text-gradient" },
    ],
  },
];
