import { useMediaQuery } from "react-responsive";
import getProduct from "./api";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import SubTitle from "./SubTitle";
import Product from "../types/Product";
import { OrderQuery } from "../types/Query";

interface Props {
  col: number;
}

type PageSizeQuery = number;

const BestProduct = ({ col }: Props) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [items, setItems] = useState<Product[]>([]);
  const [order, setOrder] = useState<OrderQuery>("favorite");
  const [pageSize, setPageSize] = useState(isMobile ? 1 : isTablet ? 2 : 4);

  useEffect(() => {
    setPageSize(isMobile ? 1 : isTablet ? 2 : 4);
  }, [isMobile, isTablet]);

  const handleLoad = async (orderQuery: OrderQuery, pageSizeQuery: PageSizeQuery): Promise<void> => {
    const { list } = await getProduct({ order: orderQuery, pageSize: pageSizeQuery });
    setItems(list);
  };

  useEffect(() => {
    handleLoad(order, pageSize);
  }, [order, pageSize]);

  return (
    <>
      <h2 className="tit_box">
        <SubTitle name="베스트 상품" />
      </h2>
      <div className="product_list_box">
        <ul className={`product_list col${col}`}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ProductItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BestProduct;
