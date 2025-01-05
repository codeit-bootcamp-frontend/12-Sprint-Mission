import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "@/api/itemApi";
import defaultImage from "@/assets/images/image/img_default.png";
import HeartIcon from "@/assets/images/icons/ic_heart.svg?react";

interface Product {
  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
}

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1200) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemsSection() {
  const [itemList, setItemList] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedItems = async ({
    orderBy,
    pageSize,
  }: {
    orderBy: string;
    pageSize: number;
  }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedItems({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h2 className="sectionTitle">베스트 상품</h2>
      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id} className="itemCard">
            <img
              src={
                item.images && item.images.length > 0
                  ? item.images[0]
                  : defaultImage
              }
              alt={item.name}
              className="itemImage"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = defaultImage)
              }
            />
            <h3 className="itemName">{item.name}</h3>
            <p className="itemPrice">{item.price.toLocaleString()}원</p>
            <div className="favoriteCount">
              <HeartIcon />
              {item.favoriteCount}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;
