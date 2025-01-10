import { useMediaQuery } from "react-responsive";
import BestProduct from "./BestProduct";
import AllProduct from "./AllProduct";

const ItemPage = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <section className="item_list_wrap">
        <BestProduct col={isMobile ? 1 : isTablet ? 2 : 4} />
      </section>
      <section className="item_list_wrap">
        <AllProduct col={isMobile ? 2 : isTablet ? 3 : 5} />
      </section>
    </>
  );
};

export default ItemPage;
