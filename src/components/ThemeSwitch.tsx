import { ButtonHTMLAttributes, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";

interface ThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string | undefined;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const [isTemporarilyDisabled, setIsTemporarilyDisabled] = useState(false);

  const handleClick = () => {
    if (isTemporarilyDisabled) return;
    toggleTheme();
    setIsTemporarilyDisabled(true);
    setTimeout(() => {
      setIsTemporarilyDisabled(false);
    }, 600);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {theme === "light" ? (
        <BiMoon className="text-xl 2xl:text-2xl" />
      ) : (
        <BiSun className="text-xl 2xl:text-2xl" />
      )}
    </button>
  );
}
