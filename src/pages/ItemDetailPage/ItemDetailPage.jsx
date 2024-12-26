import styles from "./ItemDetailPage.module.css";
import { useParams } from "react-router-dom";
import MarketHeader from "../../components/Header/MarketHeader.jsx";
import ProductSection from "./components/ProductSection.jsx";
import InputSection from "./components/InputSection.jsx";
import CommentSection from "./components/CommentSection.jsx";

function ItemDetailPage() {
  const { id } = useParams();

  return (
    <>
      <MarketHeader />
      <div className={styles.container}>
        <ProductSection id={id} />
        <InputSection />
        <CommentSection id={id} />
      </div>
    </>
  );
}

export default ItemDetailPage;
