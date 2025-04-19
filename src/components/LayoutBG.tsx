import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const LayoutBG = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{
        backgroundColor: "#09090b",
        clipPath: "circle(0% at 100% 0%)",
      }}
      animate={
        theme === "light"
          ? {
              backgroundColor: "#f9fafb",
              clipPath: "circle(141.42% at 100% 0%)",
            }
          : {
              backgroundColor: "#09090b",
              clipPath: "circle(0% at 100% 0%)",
            }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default LayoutBG;
