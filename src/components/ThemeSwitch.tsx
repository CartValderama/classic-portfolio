import { ButtonHTMLAttributes } from "react";
import { useTheme } from "../context/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import { useStart } from "../context/StartContext";

interface ThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string | undefined;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const { start } = useStart();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={start}
      className={className}
    >
      {theme === "light" ? (
        <BiMoon className="text-xl 2xl:text-2xl" />
      ) : (
        <BiSun className="text-xl 2xl:text-2xl" />
      )}
    </button>
  );
}
