import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const techStack = [
  {
    skill: "HTML",
    Icon: SiHtml5,
  },
  {
    skill: "CSS",
    Icon: SiCss3,
  },
  {
    skill: "TypeScript",
    Icon: SiTypescript,
  },
  {
    skill: "JavaScript",
    Icon: SiJavascript,
  },
  {
    skill: "React",
    Icon: SiReact,
  },
  {
    skill: "Vite",
    Icon: SiVite,
  },
  {
    skill: "Git",
    Icon: SiGit,
  },
  {
    skill: "Redux",
    Icon: SiRedux,
  },
  {
    skill: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    skill: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    skill: "Shadcn",
    Icon: SiShadcnui,
  },
] as const;
