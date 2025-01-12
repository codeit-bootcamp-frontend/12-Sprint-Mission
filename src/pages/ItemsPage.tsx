import React, { useEffect, useState } from "react";
import { getItems } from "../api/itemApi";
import PandaBestList from "../components/PandaBestList.tsx";
import PandaAllList from "../components/PandaAllList.tsx";
import styles from "./itemsPage.module.css";

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  favoriteCount: number;
  createdAt: string;
};

function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: Item[] = await getItems();
        setItems(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.itemPage}>
      <div className={styles.itemPageContainer}>
        <PandaBestList items={items} />
        <PandaAllList items={items} />
      </div>
    </div>
  );
}

export default ItemsPage;
