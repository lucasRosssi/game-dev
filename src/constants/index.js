import {
  cpp,
  ue,
  circleOfTheElements,
  linkedin,
  github,
  resume,
  javascript,
  git,
  kalyskah,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Quest Log",
  },
  {
    id: "about",
    title: "Backstory",
  },
  {
    id: "contact",
    title: "Team Up",
  },
];

export const socialMediaLinks = [
  {
    icon: resume,
    link: 'https://drive.google.com/file/d/19qVjtVNzd4MyF4X4TmWjJMCQ-CyZCZof/view?usp=sharing',
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
  { title: "Javascript", icon: javascript },
  { title: "Git", icon: git },
];

export const experiences = [];

export const technologies = [];

export const projects = [
  {
    name: "Kalyskah",
    role: "Game Developer",
    team: "Multidisciplinary team",
    description: `
      Dark fantasy action RPG where you play as the ancient vampire queen. Players can engage in real-time combat and explore a rich world filled with quests and moral choices.

      I joined the project to work on core gameplay systems within an existing codebase, collaborating closely with designers and other developers to evolve gameplay features while maintaining system stability.

      My responsibilities span player-facing systems such as input, UI and game settings, as well as deeper gameplay work, like reworking a legacy combat system and implementing the migration to Unreal Engine’s Gameplay Ability System (GAS), aimed at improving scalability, maintainability and the overall combat feel.
    `,
    image: kalyskah,
    tags: [
      { name: "UnrealEngine", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "blueprints", color: "pink-text-gradient" },
      { name: "GAS", color: "orange-text-gradient" },
      { name: "UI", color: "blue-text-gradient" },
      { name: "settings", color: "green-text-gradient" },
      { name: "input", color: "pink-text-gradient" },
    ],
    source_code_link: "https://www.kalyskah.com/",
  },
  {
    name: "Circle of the Elements",
    role: "Game Developer | Game Designer",
    team: "Solo",
    description:
      `Top-down roguelike where you play as a druid that fights goblins to free the elemental spirits they imprisioned in jewels. The freed spirits join the druid by providing new elemental powers.
      
      The project emphasized modular gameplay systems, and the ability to evolve mechanics based on balance feedback and design changes. My work on the project focused on designing, building and maintaining core gameplay systems, including abilities, AI behavior, and UI.

      Throughout development, gameplay systems were maintained and evolved over multiple iterations, responding to balance changes, design feedback, and technical constraints, by revisiting and adjusting existing systems after playtesting, refactoring gameplay code to improve maintainability as scope increased and adapting system behavior to new design requirements without breaking existing mechanics. This iterative process helped keep the codebase stable while allowing the game to evolve organically.`,
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
];
