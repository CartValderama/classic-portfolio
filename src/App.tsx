import React from "react";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import StartContextProvider from "./context/StartContext.tsx";
import Layout from "./Layout.tsx";
import { NotificationProvider } from "./context/NotifcationContext.tsx";

function App() {
  return (
    <React.Fragment>
      <StartContextProvider>
        <ThemeContextProvider>
          <NotificationProvider>
            <Layout />
          </NotificationProvider>
        </ThemeContextProvider>
      </StartContextProvider>
    </React.Fragment>
  );
}

export default App;
