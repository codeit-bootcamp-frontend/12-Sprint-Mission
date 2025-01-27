import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../../api";
import SpecificProduct, {
  SpecificProductProps,
} from "../../components/common/SpecificProduct";

//omit으로 size 속성 제외
interface ItemData
  extends Omit<SpecificProductProps, "size" | "imageUrl" | "likeCount"> {
  images: string[];
  favoriteCount: number;
}

function ItemPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [item, setItem] = useState<ItemData | null>();
  const [size, setSize] = useState<number>(486);

  const fetchItems = async (): Promise<void> => {
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
