import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { getProductData } from "../api/api";
import styles from "./BestItem.module.css";

interface Item {
  id: number;
  name: string;
  price: number;
  images: string[];
  favoriteCount?: number;
}

interface ProductResponse {
  list: Item[];
}

export default function Bestitem() {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products: ProductResponse = await getProductData({
          orderBy: "favorite",
        });
        setItemList(products.list);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className={styles.bestItemsBox}>
      {itemList?.map((item) => (
        <ItemCard
          className={styles.item}
          item={item}
          key={`best-item-${item.id}`}
        />
      ))}
    </div>
  );
}
