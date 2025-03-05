import React from "react";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import StartContextProvider from "./context/StartContext.tsx";
import Layout from "./Layout.tsx";

function App() {
  return (
    <React.Fragment>
      <StartContextProvider>
        <ThemeContextProvider>
          <Layout />
        </ThemeContextProvider>
      </StartContextProvider>
    </React.Fragment>
  );
}

export default App;
