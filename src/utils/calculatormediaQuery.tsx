import { useMediaQuery } from "react-responsive";

function CalculatorMediaQuery() {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return { isTablet, isMobile };
}

export default CalculatorMediaQuery;
