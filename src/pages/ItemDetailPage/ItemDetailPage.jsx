import styles from "./ItemDetailPage.module.css";
import { useParams } from "react-router-dom";
import MarketHeader from "../../components/Header/MarketHeader.jsx";
import ProductSection from "./components/ProductSection.jsx";
import InputSection from "./components/InputSection.jsx";
import CommentSection from "./components/CommentSection.jsx";
import LinkButton from "../../components/Button/LinkButton.jsx";
import Icon from "../../components/Icon/Icon.jsx";
import { Link } from "react-router-dom";

function ItemDetailPage() {
  const { id } = useParams();

  return (
    <>
      <MarketHeader />
      <div className={styles.container}>
        <ProductSection id={id} />
        <InputSection />
        <CommentSection id={id} />
        <Link to={-1}>
          <LinkButton className={styles.btn}>
            목록으로 돌아가기 <Icon name="back" size="24" />
          </LinkButton>
        </Link>
      </div>
    </>
  );
}

export default ItemDetailPage;
