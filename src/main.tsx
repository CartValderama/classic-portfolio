import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import StartContextProvider from "./context/StartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StartContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </StartContextProvider>
  </StrictMode>
);
