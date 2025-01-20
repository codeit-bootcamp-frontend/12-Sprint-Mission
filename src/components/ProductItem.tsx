import "./ProductItem.css";
import default_Img from "./../assets/item.png";
import wishImg from "./../assets/icon_wish.svg";
import { Link } from "react-router-dom";
import Product from "../types/Product";

interface ProductItemProps {
  item: Product;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const { images, name, price, favoriteCount, id } = item;

  return (
    <div className="product_item">
      <div className="thum">
        <Link to={`/ProductDetail/${id}`}>
          <img src={images && images[0] ? images[0] : default_Img} alt={name} onError={(e) => (e.currentTarget.src = default_Img)} />
        </Link>
      </div>
      <div className="content">
        <div className="title">
          <Link to={`/ProductDetail/${id}`}>{name}</Link>
        </div>
        <div className="price">{price.toLocaleString("ko-KR")}원</div>
        <div className="wish">
          <div className="icon">
            <img src={wishImg} alt="찜하기" />
          </div>
          <div className="num">{favoriteCount}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
