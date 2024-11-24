import ProductImg from "../asset/b8940cd215848aaa5d9cffb7d122f74c.png";
import HeartIcon from "../asset/ic_heart.png";
import "./BestProductItem.css";

function ProductItem() {
  return (
    <div>
      <img className="bestproduct-img" src={ProductImg} alt="상품 이미지" />
      <h2>아이패드 팝니다</h2>
      <p>300원</p>
      <div>
        <img
          className="bestproduct-popularity"
          src={HeartIcon}
          alt="찜 아이콘"
        />
        <span>240</span>
      </div>
    </div>
  );
}

export default ProductItem;
