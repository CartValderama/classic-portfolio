type ProjectProps = {
  name: string;
  desc?: string[];
  figDesc: string;
  language: string;
  source: string;
  demo?: string;
  topics?: string[];
  img: string;
};

export const projects = [
  {
    name: "Nostalgia Portfolio",
    desc: [
      "This is my latest portfolio, which was created in March 2025. After receiving feedback on my previous personal portfolio, I decided to create a more dynamic and interactive design. This time, I focused more on building a fun web portfolio to showcase my skills in a unique way. Since TailwindCSS dropped its newest version, I used this opportunity to test version 4 out as well in this personal project.",
      "",
      "Additionally, To further challenge myself and practice my skills, I chose not to use any pre-built component libraries but instead built everything from scratch.",
    ],
    figDesc:
      "Figure 4: Home page of my Nostalgia Portfolio, displayed on a desktop screen",
    source: "https://github.com/CartValderama/win95-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["tailwind", "react", "typescript", "vite", "framer", "nostalgia"],
    img: "https://i.imgur.com/PxcBibH.gif",
  },
  {
    name: "Accessibility Portfolio",
    desc: [
      "One of the courses during my first semester in the master's program inspired me to create my own accessible portfolio, which was completed in September 2024.",
      "I have utlizied the use of ARIA tools to make this project to atleast satify the WCAG's conformance level of A and AA. This is also the first time I used Framer Motion to streamline the creation of simple animations, unlike before when I had to manually handle animations with just vanilla JavaScript.",
      "In this project, I practiced using TanStack Query to cache data that was fetched from my GitHub repository. This project is also responsive across multiple devices.",
    ],
    figDesc: "Figure 5: My Accessibility Portfolio",
    source: "https://github.com/CartValderama/accessiblity-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["vite", "tailwind", "typescript", "react", "framer"],
    img: "https://i.imgur.com/I98FC9W.gif",
  },
  {
    name: "Flashcard Application",
    desc: [
      "AICEE is my thesis project for the final semester of my bachelor's (January - June 2024). It began when my team and I pitched our web application project to Forte Digital, who tasked us to demonstrate whether integrating AI in a flashcard app could significantly impact learning performance.",
      "Unlike its earlier version, this app features multiple learning modes, including a quiz mode, a feedback mode providing real-time feedback, and a deck creation mode w-",
      "-here users input information, and the app automatically generates flashcards. As a result of the quality of our work, our team received the highest grade possible.",
    ],
    figDesc: "Figure 6: The game menu of the Quiz Mode in AICEE.",
    source: "https://github.com/CartValderama/bachelor-project",
    demo: "",
    topics: ["react", "asp.net", "azure", "gpt", "tailwind", "mlflow"],
    img: "https://i.imgur.com/dJtzbY7.png",
  },
  {
    name: "DungeonKeep Escape",
    desc: [
      "DungeonKeep Escape is a 2D pixel game I built by following a tutorial on youtube from ChrisCourses in December 2023 to practice my JavaScript in preparation for my bachelor's project.",
      "I chose to create this type of project as my practice because I am also particularly interested in learning more about pixel art. The game focuses on exploring dungeon rooms and jumping between platforms to progress to the next room.",
      "It is built using JavaScript, HTML, and CSS, with GSAP handling some of the animations. I used Tiled to design the dungeon maps and Piskel to customize the sprites.",
    ],
    figDesc: "Figure 7: Small playthrough of DungeonKeep Escape",
    source: "https://github.com/CartValderama/Dungeon-Escape",
    demo: "https://dungeon-escape.vercel.app/",
    topics: ["javascript", "gsap", "howlerjs", "tiled", "pixelart", "OOP"],
    img: "https://i.imgur.com/Xg6NBvp.gif",
  },
  {
    name: "Web Application",
    desc: [
      "This flashcard app was developed as part of the Web App course in August 2023 and marks the beginning of my frontend development journey. While I contributed to both the frontend and backend, my primary focus was on designing and building the frontend of the application.",
      "The app's main feature, 'Feedback Mode,' utilizes GPT to provide users with a feedback, color and rating based on their answers. Users input their responses, and GPT evaluates their accuracy and correctness (see Figure 8).",
      "The frontend is built using Angular, while the backend is developed with ASP.NET. In the end, We received the highest grade possible for this project.",
    ],
    figDesc:
      "Figure 8: One of the game mode in the Web App Project, called feedback mode.",
    source: "https://github.com/CartValderama/angular-flashcard-app",
    demo: "",
    topics: ["angular", "asp.net", "bootstrap", "typescript", "gpt"],
    img: "https://i.imgur.com/zdZAc2W.png",
  },
] as unknown as ProjectProps[];
