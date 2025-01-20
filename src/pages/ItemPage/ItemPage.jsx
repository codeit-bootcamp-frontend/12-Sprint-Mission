import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../../api";
import SpecificProduct from "../../components/common/SpecificProduct";

function ItemPage() {
  const { productSlug } = useParams();
  const [item, setItem] = useState();
  const [size, setSize] = useState(486);

  const fetchItems = async () => {
    try {
      const data = await getDataById(productSlug);
      setItem(data);
    } catch (error) {
      console.error("Error!");
    }
  };

  useEffect(() => {
    fetchItems();
  }, [productSlug]);

  return (
    <>
      {item && (
        <SpecificProduct
          imageUrl={item.images?.[0] || ""}
          name={item.name}
          price={item.price}
          likeCount={item.favoriteCount}
          description={item.description}
          tags={item.tags}
          ownerNickname={item.ownerNickname}
          createdAt={item.createdAt}
          size={size}
        />
      )}
    </>
  );
}

export default ItemPage;
