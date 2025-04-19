import { useMediaQuery } from "usehooks-ts";

export const useBreakpoints = () => {
  const isXL = useMediaQuery("(min-width: 1280px)");
  const is2XL = useMediaQuery("(min-width: 1536px)");
  const is3XL = useMediaQuery("(min-width: 1930px)");
  const is4XL = useMediaQuery("(min-width: 2560px)");

  const getBreakpoints = () => {
    switch (true) {
      case is4XL:
        return { width: "40rem", height: "30rem" };
      case is3XL:
        return { width: "31rem", height: "24rem" };
      case is2XL:
        return { width: "24rem", height: "18rem" };
      case isXL:
        return { width: "20rem", height: "15rem" };
      default:
        return { width: "18rem", height: "13rem" };
    }
  };

  return getBreakpoints();
};
