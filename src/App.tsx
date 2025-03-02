import React from "react";
import Desktop from "./device orientation/Desktop";
import Mobile from "./device orientation/Mobile";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import StartContextProvider from "./context/StartContext.tsx";
import "@react95/core/themes/win95.css";

function App() {
  return (
    <React.Fragment>
      <StartContextProvider>
        <ThemeContextProvider>
          <Desktop />
          <Mobile />
        </ThemeContextProvider>
      </StartContextProvider>
    </React.Fragment>
  );
}

export default App;
