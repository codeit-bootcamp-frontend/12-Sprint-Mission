import React, { useEffect, useState } from "react";
import { getItems } from "../api/ItemApi";
import PandaBestList from "../components/PandaBestList.jsx";
import PandaAllList from "../components/PandaAllList.jsx";

function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getItems();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="itemPage">
        <div className="itemPage-container">
          <PandaBestList items={items} />
          <PandaAllList items={items} />
        </div>
      </div>
    </>
  );
}

export default ItemsPage;
