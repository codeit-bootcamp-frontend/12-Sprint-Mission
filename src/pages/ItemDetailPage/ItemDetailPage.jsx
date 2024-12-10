import ItemDetail from "./components/ItemDetail.jsx";
import "./ItemDetailPage.css";
import { getProduct } from "../../api/ItemApi";
import { useState } from "react";
import { useEffect } from "react";
import QuestionForm from "./components/QuestionForm.jsx";

function ItemDetailPage() {
  const [product, setProduct] = useState({
    images: [],
    name: "",
    tags: [],
    description: "",
    favoriteCount: 0,
  });

  const loadProduct = async ({ id }) => {
    try {
      const product = await getProduct({ id });
      setProduct(product);
    } catch (error) {
      console.error("데이터 로드 실패", error);
    }
  };

  useEffect(() => {
    loadProduct(1);
  }, []);

  return (
    <div>
      <section className="itemDetailPageContainer">
        <ItemDetail product={product} />
      </section>
      <section>
        <QuestionForm />
      </section>
    </div>
  );
}

export default ItemDetailPage;
