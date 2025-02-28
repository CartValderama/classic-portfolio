import React, { createContext, useContext, useState } from "react";
import { StartType } from "../lib/type";

type StartContextProviderProps = {
  children: React.ReactNode;
};

const StartContext = createContext<StartType | null>(null);

const StartContextProvider = ({ children }: StartContextProviderProps) => {
  const [start, setStart] = useState(false);

  return (
    <StartContext.Provider value={{ start, setStart }}>
      {children}
    </StartContext.Provider>
  );
};

export function useStart() {
  const context = useContext(StartContext);

  if (context === null) {
    throw new Error("useStart must be used within a StartContextProvider");
  }

  return context;
}

export default StartContextProvider;
