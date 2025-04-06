import React from "react";
import {
  FaBook,
  FaBriefcase,
  FaPalette,
  FaUserGraduate,
  FaLaptopCode,
  FaInfoCircle,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrBraille } from "react-icons/gr";
import {
  svgBootstrap,
  svgCSS,
  svgFigma,
  svgGit,
  svgGitBash,
  svgGithub,
  svgHTML,
  svgJavaScript,
  svgReact,
  svgRedux,
  svgShadcn,
  svgTailwind,
  svgTypescript,
  svgVisualStudio,
  svgVite,
  svgVSCode,
  svgZustand,
} from "./svgList";
import { AppID } from "../store/AppStore/DesktopApplicationStore";
import {
  Access110,
  Joy102,
  Mailnews8,
  Mplayer10,
  Write1,
} from "@react95/icons";
import Credits from "../components/monitor/Credits";
import TicTacToe from "../components/games/Tictactoe";
import Wordle from "../components/games/Wordle";
import OldPorfolio from "../components/monitor/OldPortolio";
import AboutMe from "../components/about/AboutMe";
import { IconType } from "react-icons";
import { TbLetterW } from "react-icons/tb";
import { IoAccessibility } from "react-icons/io5";

export type AppProps = {
  DesktopIcon: React.ComponentType<{
    className?: string;
    variant?: "32x32_4" | "16x16_4";
  }>;
  MobileIcon: IconType;
  iconStyle: string;
  label: string;
  id: AppID;
  Component: React.ComponentType;
  iWidth: number;
  iHeight: number;
};

export const aboutMeMenu = ["Intro", "Experience", "Projects", "More"];

export const apps: AppProps[] = [
  {
    DesktopIcon: Mplayer10,
    MobileIcon: FaInfoCircle,
    iconStyle: "text-white bg-sky-700 p-2 rounded-lg",
    label: "Credits",
    id: "credits",
    Component: Credits,
    iWidth: 450,
    iHeight: 450,
  },
  {
    DesktopIcon: Joy102,
    MobileIcon: FaInfoCircle,
    iconStyle: " text-white bg-sky-700 p-2 rounded-lg",
    label: "Tictactoe",
    id: "tictactoe",
    Component: TicTacToe,
    iWidth: 300,
    iHeight: 400,
  },
  {
    DesktopIcon: Write1,
    MobileIcon: TbLetterW,
    iconStyle: "text-white bg-[#55a459] p-2 rounded-lg",
    label: "Wordle",
    id: "wordle",
    Component: Wordle,
    iWidth: 360,
    iHeight: 560,
  },
  {
    DesktopIcon: Access110,
    MobileIcon: IoAccessibility,
    iconStyle: "text-white bg-sky-700 p-2 rounded-lg",
    label: "Old Portfolio",
    id: "oldportfolio",
    Component: OldPorfolio,
    iWidth: 500,
    iHeight: 500,
  },
  {
    DesktopIcon: Mailnews8,
    MobileIcon: FaInfoCircle,
    iconStyle: "text-white bg-amber-400 p-2 rounded-lg",
    label: "About Me",
    id: "about",
    Component: AboutMe,
    iWidth: 330,
    iHeight: 400,
  },
] as const;

export const techStack = [
  {
    skill: "HTML",
    svg: svgHTML,
  },
  {
    skill: "CSS",
    svg: svgCSS,
  },
  {
    skill: "TypeScript",
    svg: svgTypescript,
  },
  {
    skill: "JavaScript",
    svg: svgJavaScript,
  },
  {
    skill: "React",
    svg: svgReact,
  },
  {
    skill: "Vite",
    svg: svgVite,
  },
  {
    skill: "Git",
    svg: svgGit,
  },
  {
    skill: "Zustand",
    svg: svgZustand,
  },
  {
    skill: "Redux",
    svg: svgRedux,
  },
  {
    skill: "Tailwind",
    svg: svgTailwind,
  },
  {
    skill: "Bootstrap",
    svg: svgBootstrap,
  },
  {
    skill: "Shadcn",
    svg: svgShadcn,
  },
];

export const tools = [
  {
    tool: "VS Code",
    svg: svgVSCode,
  },
  {
    tool: "Figma",
    svg: svgFigma,
  },

  {
    tool: "GitHub",
    svg: svgGithub,
  },
  {
    tool: "Git Bash",
    svg: svgGitBash,
  },
  {
    tool: "Visual Studio",
    svg: svgVisualStudio,
  },
] as const;

export const projects = [
  {
    name: "Nostalgia Portfolio",
    desc: [
      "This is my latest portfolio, which was created in March 2025. After receiving feedback on my previous personal portfolio, I decided to create a more dynamic and interactive design. This time, I focused more on building a fun web portfolio to showcase my skills in a unique way.",
      "Since TailwindCSS dropped its newest version, I used this opportunity to test its version 4 out in this personal project. Additionally, To further challenge myself and develop my skills, I chose not to use any component libraries and create everything from scratch.",
    ],
    figDesc:
      "Figure 1: Home page of my Nostalgia Portfolio, displayed on a desktop screen",
    source: "https://github.com/CartValderama/win95-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["tailwind", "react", "framer", "vite", "typescript"],
    img: "https://i.imgur.com/fNGx6zl.gif",
    status: false,
    solo: true,
  },
  {
    name: "Accessibility Portfolio",
    desc: [
      "One of the courses during my first semester in the master's program inspired me to create my own accessible portfolio, which was completed in September 2024. I have utlizied the use of ARIA tools to make this project to atleast satify the WCAG's conformance level of A and AA.",
      "This is also the first time I used Framer Motion for animations, unlike handling them with vanilla JavaScript. In this project, I practiced using TanStack Query to cache data that was fetched from my GitHub repository.",
    ],
    figDesc: "Figure 2: My Accessibility Portfolio",
    source: "https://github.com/CartValderama/accessiblity-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["vite", "tailwind", "typescript", "react", "framer"],
    img: "https://i.imgur.com/I98FC9W.gif",
    status: true,
    solo: true,
  },
  {
    name: "Bachelor Project",
    desc: [
      "AICEE is my thesis project for the final semester of my bachelor's (January - June 2024). It began when my team and I pitched our web app project to Forte Digital, who tasked us to demonstrate the potential use of AI.",
      "Unlike its earlier version, this app features multiple study modes, including a quiz mode, a feedback mode providing real-time feedback, and a deck creation mode where the app automatically generates flashcards. As a result of the quality of our work, our team received the highest grade possible.",
    ],
    figDesc: "Figure 3: The game menu of the Quiz Mode in AICEE.",
    source: "https://github.com/CartValderama/bachelor-project",
    demo: "",
    topics: ["react", "asp.net", "azure", "gpt", "tailwind", "mlflow"],
    img: "https://i.imgur.com/dJtzbY7.png",
    status: true,
    solo: false,
  },
  {
    name: "DungeonKeep Escape",
    desc: [
      "DungeonKeep Escape is a 2D pixel game I built by following a tutorial on youtube from ChrisCourses in December 2023 to practice my JavaScript in preparation for my bachelor's project.",
      "It was built using JavaScript, HTML, and CSS. I used Tiled to design the dungeon maps and Piskel to customize the character sprites. I chose to create this type of project as my practice because I'm interested in learning more about pixel art. The game focuses on exploring dungeon rooms and jumping between platforms.",
    ],
    figDesc: "Figure 4: Small playthrough of DungeonKeep Escape",
    source: "https://github.com/CartValderama/Dungeon-Escape",
    demo: "https://dungeon-escape.vercel.app/",
    topics: ["javascript", "gsap", "tiled", "pixelart", "OOP"],
    img: "https://i.imgur.com/kpjIgCz.gif",
    status: true,
    solo: true,
  },
  {
    name: "Web Application",
    desc: [
      "This flashcard app was developed as part of the Web App course in August 2023 and marks the start of my frontend journey. While I contributed to both the frontend and backend, I was mainly on designing and building the frontend of the application. ",
      "The frontend is built using Angular, while the backend is developed with ASP.NET. In the end, We got the highest grade possible for this project. The app's main feature, 'Feedback Mode,' utilizes GPT to provide users with a feedback with rating based on their answers (see Figure 5).",
    ],
    figDesc:
      "Figure 5: One of the game mode in the Web App Project, called feedback mode.",
    source: "https://github.com/CartValderama/angular-flashcard-app",
    demo: "",
    topics: ["angular", "asp.net", "gpt", "bootstrap", "typescript"],
    img: "https://i.imgur.com/zdZAc2W.png",
    status: true,
    solo: false,
  },
];

export const experience = [
  {
    position: "Bachelor Collaboration",
    date: "January 2024 - June 2024",
    desc: "Developed a proof-of-concept flashcard app for Forte Digital that integrated AI to enhance user feedback and automate flashcard creation, leading to more effective and engaging study sessions.",
    outcomes: [
      "Evaluated the flashcard app’s interface, addressing common issues to ensure compliance with common web accessibility standards.",
      "Designed a user test that enabled a detailed analysis of AI's impact on students' study sessions",
      "Researched and identified the key study modes to be featured in the application.",
      "Served as the primary frontend developer, creating a simple and intuitive user interface.",
      "Led the team in web design, which helped accelerate the decision-making process regarding the design route and development.",
    ],
    company: "Forte Digital",
    icon: React.createElement(FaLaptopCode),
    img: "https://i.imgur.com/JCGTfPZ.jpeg",
  },
  {
    position: "Internship",
    date: "January 2018 - February 2018",
    desc: "Completed a one-month internship in a structural engineering company during senior high school, gaining practical experience in engineering concepts and project development.",
    company: "Nander Group",
    outcomes: [
      "Represented the group during meetings and was responsible for communicating progress between the company and the supervisor from St. Paul College.",
      "Gained deeper knowledge of AutoCAD by assisting in the creation and modification of technical drawings, improving accuracy and design efficiency.",
    ],
    icon: React.createElement(FaBriefcase),
    img: "https://i.imgur.com/EentFrs.png",
  },
] as const;

export const languages = [
  "English (US)",
  "Filipino (native)",
  "Norwegian (b1)",
] as const;

export const otherSkills = [
  {
    title: "Web Accessibility: Ensuring Inclusive Web Experiences",
    desc: "Able to evaluate websites for accessibility using WCAG guidelines, combining automated tools with manual assessments. Familiar with applying ARIA attributes to improve usability for individuals with disabilities, promoting inclusive access to digital content.",
    icon: React.createElement(GrBraille),
  },
  {
    title: "User Testing: Experience in Conducting Structured Tests",
    desc: "Knowledgable in designing and conducting user testing, drawing on hands-on experience from Human-Computer Interaction course. This includes creating structured test plans, recruiting participants, and observing user interactions with prototypes.",
    icon: React.createElement(FaMagnifyingGlass),
  },
  {
    title: "Web Designing: Crafting Simple and Intuitive Interfaces",
    desc: "Familiar with design principles such as atomic design and Gestalt laws. Emphasizes the creation of interfaces which adheres to one of the principles of universal design, making applications more accessible to a diverse audience.",
    icon: React.createElement(FaPalette),
  },
] as const;

export const education = [
  {
    title: "Master’s in Universal Design of ICT",
    date: "August 2024 - Present",
    desc: "Currently pursuing a program at OsloMet focused on inclusive design and accessibility, exploring accessibile solutions for all users.",
    icon: React.createElement(FaBook),
  },
  {
    title: "Bachelor’s in Information Technology",
    date: "August 2021 - June 2024",
    desc: "Studied at OsloMet, gaining expertise in both frontend and backend technologies. This experience sparked a passion for frontend development.",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Videregående",
    date: "August 2019 - June 2020",
    desc: "Completed an adult education program at Stabekk Videregående in Norway, attaining qualifications for higher education.",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Senior High School (K-12)",
    date: "June 2016 - May 2018",
    desc: "Specialized in Science, Technology, Engineering, and Mathematics (STEM) at St. Paul College, building a strong foundation for studies in technology.",
    icon: React.createElement(FaUserGraduate),
  },
];

export const certificates = [
  {
    title: "Responsive Web Design",
    date: "September 2023",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/responsive-web-design",
    desc: "Covers HTML, CSS, and accessibility fundamentals to build responsive and user-friendly web interfaces.",
  },
  {
    title: "Legacy JavaScript",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures",
    desc: "Focuses on core JavaScript concepts, including ES6, functional programming, and object-oriented principles.",
  },
  {
    title: "Legacy JavaScript (Beta)",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures-v8",
    desc: "Emphasizes JavaScript logic and problem-solving and data structure without HTML or CSS.",
  },
] as const;
