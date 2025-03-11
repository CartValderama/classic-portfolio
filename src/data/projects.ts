import React from "react";

type ProjectProps = {
  name: string;
  desc?: string;
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
    desc: React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "This is my latest portfolio, which was created in March 2025. After receiving feedback on my previous personal portfolio, I decided to create a more interactive site that truly reflects my personal character. This time, "
      ),
      React.createElement(
        "u",
        null,
        "I focused less on accessibility and more on building a fun, engaging website to showcase myself, optimized for both desktop and mobile devices."
      ),
      React.createElement(
        "span",
        null,
        " In this project, I delved deeper into using Framer Motion and explored the latest version of TailwindCSS. "
      ),
      React.createElement(
        "u",
        null,
        "To further challenge myself and practice my React skills, I chose not to use any pre-built component libraries but instead built everything from scratch."
      )
    ),
    figDesc:
      "Figure 2: Home page of my Nostalgia Portfolio, displayed on a desktop screen",
    source: "https://github.com/CartValderama/win95-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: ["tailwind v4", "react", "vite", "framer-motion", "typescript"],
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZuZ2t2a2NueDJydDZ3N3dpZDZ1MHdkNDh6NXZtMnVkNXk3eWNsZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OSg2z7bx2PmdD9N5pF/giphy.gif",
  },
  {
    name: "Accessibility Portfolio",
    desc: React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "One of the courses during my first semester in the master's program inspired me to create my own accessible personal portfolio, which was completed in September 2024. This personal project was developed to showcase my skills and experience, while  "
      ),
      React.createElement(
        "u",
        null,
        "adhering to the latest WCAG (Web Content Accessibility Guidelines) standards"
      ),
      React.createElement(
        "span",
        null,
        " and implements best practices for accessibility across all levels of interaction. I kept the design as simple as possible to make it easier to navigate with keyboards and to ensure efficient screen reader scanning."
      ),
      React.createElement(
        "span",
        null,
        " I utilized ARIA tools in this portfolio to ensure proper navigation and readability of essential information for screen readers."
      ),
      React.createElement(
        "span",
        null,
        " This is also the first time I used Framer Motion to streamline the animation process, unlike before when I had to manually handle animations with vanilla JavaScript."
      ),
      React.createElement(
        "span",
        null,
        " In this project, I also practiced using TanStack Query to cache data from my GitHub repository. This project is highly responsive and accessible across multiple devices."
      )
    ),
    figDesc: "Figure 3: My Accessibility Portfolio",
    source: "https://github.com/CartValderama/accessiblity-portfolio",
    demo: "https://cart-valderama-portfolio.vercel.app/",
    topics: [
      "accesibility",
      "tanstack",
      "vite",
      "tailwind",
      "typescript",
      "react",
      "framer-motion",
    ],
    img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBkdG9nM2N0eWFleHM3aHN5ejh5azEzNXZjazlpdDV6azNpcmc5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dmUsjNgRwGe431neb5/giphy.gif",
  },
  {
    name: "Bachelor Project (AICEE)",
    desc: React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "AICEE is my thesis project for the final semester of my bachelor's degree (January - May 2024). It began when my team and I pitched our web application project to a consulting company, Forte Digital, which tasked us to "
      ),
      React.createElement(
        "u",
        null,
        "demonstrate whether integrating AI could significantly impact learning performance with this flashcard application."
      ),
      React.createElement(
        "span",
        null,
        " Unlike its earlier version, this app features multiple learning modes, including a quiz mode for answering multiple-choice questions, a feedback mode providing real-time feedback, and a deck creation mode where users input information, and the app automatically generates flashcards. "
      ),

      React.createElement(
        "u",
        null,
        "As a result of the quality of our work, our team received the highest grade possible for this thesis."
      )
    ),
    figDesc: "The game menu of the Quiz Mode in AICEE.",
    source: "https://github.com/CartValderama/bachelor-project",
    demo: "",
    topics: [
      "react",
      "c#",
      "asp.net",
      "azure",
      "gpt",
      "vite",
      "mlflow",
      "javascript",
      "tailwind",
    ],
    img: "https://i.imgur.com/dJtzbY7.png",
  },
  {
    name: "DungeonKeep Escape",
    desc: React.createElement(
      "p",
      null,
      React.createElement(
        "span",
        null,
        "DungeonKeep Escape is a 2D pixel game I developed in December 2023 to practice my JavaScript skills in preparation for my bachelor thesis. "
      ),

      React.createElement(
        "u",
        null,
        "I chose to create this project as practice because I am particularly interested in learning more about pixel art."
      ),
      React.createElement(
        "span",
        null,
        " The game focuses on exploring dungeon rooms, navigating obstacles, and jumping between platforms to progress to the next area. It is built using vanilla JavaScript, HTML, and CSS, with GSAP handling some of the animations."
      ),
      React.createElement(
        "span",
        null,
        " I used Tiled to design the dungeon maps and Piskel to customize character sprites to fit my needs."
      ),
      React.createElement(
        "span",
        null,
        "Overall, this project was both enjoyable and valuable in strengthening my JavaScript skills."
      )
    ),

    figDesc: "Figure 5: Small playthrough of DungeonKeep Escape",
    source: "https://github.com/CartValderama/Dungeon-Escape",
    demo: "https://dungeon-escape.vercel.app/",
    topics: ["javascript", "gsap", "howlerjs", "tiled", "pixelart", "OOP"],
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjl4b21qaTg5eDA0eDN3anFvMms2anpwdmhvNGxpNXZzZGJoYXQ4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MTobPIHHi7EOw23hyS/giphy.gif",
  },

  {
    name: "Web App Project",
    desc: React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "span",
          null,
          "This flashcard app was developed as part of the Web Application course in August 2023 and marks the beginning of my frontend development journey. It is designed to help students memorize and study more effectively, inspired by popular platforms like Quizlet. "
        ),
        React.createElement(
          "span",
          null,
          React.createElement(
            "u",
            null,
            "The app's main feature, 'Feedback Mode,' utilizes GPT to provide users with feedback and a rating based on their answers."
          )
        ),
        React.createElement(
          "span",
          null,
          " Users input their responses, and GPT evaluates their accuracy (see Figure 6). The frontend is built using the Angular framework, TypeScript, and Bootstrap, while the backend is developed with ASP.NET. "
        ),
        React.createElement(
          "span",
          null,
          React.createElement(
            "u",
            null,
            "I received the highest grade possible for this project."
          )
        )
      )
    ),
    source: "https://github.com/CartValderama/angular-flashcard-app",
    figDesc:
      "Figure 6: One of the game mode in the Web App Project, called feedback mode.",
    demo: "",
    topics: ["angular", "asp.net", "bootstrap", "typescript", "c#", "gpt"],
    img: "https://i.imgur.com/zdZAc2W.png",
  },
] as unknown as ProjectProps[];
