import "./ItemDetailPage.css";
import ic_back from "../../assets/icons/ic_back.svg";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../../domains/product/index";
import { useNavigate } from "react-router-dom";
import Header from "../../components/ui/Header/Header";
import ProductInfo from "../../components/section/ProductInfo/ProductInfo";
import InquiryForm from "../../components/section/InquiryForm/InquiryForm";
import CommentList from "../../components/section/CommentList/CommentList";

function ItemDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { item, comments, error, loading } = useProductDetails(productId);

  return (
    <div className="item-detail-page">
      <Header />
      {loading && <p>로딩 중...</p>}
      {error && <p>오류 발생: {error}</p>}
      {!loading && !error && !item && <p>상품 정보를 찾을 수 없습니다.</p>}

      {!loading && !error && item && (
        <div className="item-detail-wrapper">
          <ProductInfo
            images={item.images}
            name={item.name}
            price={item.price}
            description={item.description}
            tags={item.tags}
            meta={{
              ownerNickname: item.ownerNickname,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
              favoriteCount: item.favoriteCount,
            }}
          />

          <InquiryForm />
          <CommentList comments={comments} />

          <button className="back-to-list" onClick={() => navigate("/items")}>
            목록으로 돌아가기
            <img src={ic_back} alt="돌아가기" className="back-to-list-img" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetailPage;
