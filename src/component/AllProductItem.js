import ProductImg from "../asset/b8940cd215848aaa5d9cffb7d122f74c.png";
import HeartIcon from "../asset/ic_heart.png";
import "./AllProductItem.css";

function AllProductItem() {
  return (
    <div>
      <img className="allproduct-img" src={ProductImg} alt="상품 이미지" />
      <h2>아이패드 팝니다</h2>
      <p>300원</p>
      <div>
        <img
          className="allproduct-popularity"
          src={HeartIcon}
          alt="찜 아이콘"
        />
        <span>240</span>
      </div>
    </div>
  );
}

export default AllProductItem;
