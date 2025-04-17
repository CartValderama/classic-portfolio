import { motion } from "framer-motion";
import { useStart } from "../context/StartContext";

const Footer = () => {
  const { start } = useStart();
  return (
    <motion.footer
      initial={{ opacity: 1, y: 0 }}
      animate={start ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: start ? 0 : 1 }}
      className={`absolute bottom-0 w-full flex justify-center items-center border-y border-dashed border-[#e4e4e7b3] dark:border-[#27272ab3] transition-transform ease-linear text-xs lg:text-sm 3xl:text-base`}
      style={{
        transformOrigin: "left 300%",
      }}
    >
      <div className="w-full 4xl:max-w-[2200px] 3xl:max-w-[1800px] 2xl:max-w-[1400px] max-w-[1200px] border-x border-dashed font-normal border-[#e4e4e7b3] dark:border-[#27272ab3] mobile:px-8 px-4 py-5 text-[#71717a] dark:text-white">
        <p>
          &copy; 2024 Built by Cart Antonio Valderama. The source code is
          available on Github
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
