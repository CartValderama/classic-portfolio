import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export const useThemeMonitor = () => {
  const { theme } = useTheme();
  const prevThemeRef = useRef(theme);

  const isThemeChanging = prevThemeRef.current !== theme;

  useEffect(() => {
    prevThemeRef.current = theme;
  }, [theme]);

  return isThemeChanging;
};
