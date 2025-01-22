import { useMediaQuery } from "react-responsive";

export const useIsMo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 744px)" });
  return isMobile;
};

export const useIsTa = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1200px)" });
  return isTablet;
};
