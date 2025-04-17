export const projects = [
  {
    name: "Second Portfolio",
    desc: [
      "This is my latest portfolio, which was created in March 2025. After receiving feedback on my previous personal portfolio, I decided to create a more dynamic and interactive design. This time, I focused more on building a fun web portfolio to showcase my skills in a unique way.",
      "Since TailwindCSS dropped its newest version, I used this opportunity to test its version 4 out in this personal project. Additionally, To further challenge myself and develop my skills, I chose not to use any component libraries and create everything from scratch.",
    ],
    figDesc:
      "Figure 1: Home page of my Classic Portfolio, displayed on a desktop screen",
    source: "https://github.com/CartValderama/win95-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["tailwind", "react", "framer", "vite", "typescript"],
    img: "https://i.imgur.com/fNGx6zl.gif",
    status: false,
    solo: true,
  },
  {
    name: "First Portfolio",
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
    topics: ["react", "dotnet", "azure", "gpt", "mlflow"],
    img: "https://i.imgur.com/dJtzbY7.png",
    status: true,
    solo: false,
  },
  {
    name: "Dungeon Escape",
    desc: [
      "Dungeon Escape is a 2D pixel game I built by following a tutorial on youtube from ChrisCourses in December 2023 to practice my JavaScript in preparation for my bachelor's project.",
      "It was built using JavaScript, HTML, and CSS. I used Tiled to design the dungeon maps and Piskel to customize the character sprites. I chose to create this type of project as my practice because I'm interested in learning more about pixel art. The game focuses on exploring dungeon rooms and jumping between platforms.",
    ],
    figDesc: "Figure 4: Small playthrough of Dungeon Escape",
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
    topics: ["angular", "dotnet", "gpt", "typescript"],
    img: "https://i.imgur.com/zdZAc2W.png",
    status: true,
    solo: false,
  },
] as const;
