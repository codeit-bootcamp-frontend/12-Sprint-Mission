import "./ProductInfo.css";
import ic_kebab from "../../../assets/icons/ic_kebab.svg";
import defaultImg from "../../../assets/images/item-default-img-md.svg";
import ProductMeta from "./ProductMeta";
import { ProductMeta as ProductMetaType } from "../../../domains/product/index";

interface ProductInfoProps {
  images: string[];
  name: string;
  price: number;
  description: string;
  tags: string[];
  meta: ProductMetaType;
}

function ProductInfo({ images, name, price, description, tags, meta }: ProductInfoProps) {
  return (
    <div className="item-detail-info">
      <img
        src={images && images.length > 0 ? images[0] : defaultImg}
        alt={name || "상품 이미지"}
        className="item-detail-thumbnail"
      />

      <div className="item-detail-info-section">
        <div className="item-detail-header">
          <div>
            <p className="item-detail-name">{name}</p>
            <p className="item-detail-price">{price.toLocaleString()}원</p>
          </div>
          <img src={ic_kebab} alt="수정 삭제 버튼" className="item-detail-options" />
        </div>

        <div className="item-detail-description">
          <h3>상품 소개</h3>
          <p>{description}</p>
        </div>

        <div className="item-detail-tags">
          <h3>상품 태그</h3>
          <div className="item-detail-tags-wrapper">
            {tags && tags.length > 0 ? (
              tags.map((tag) => (
                <li key={tag} className="item-detail-tag">
                  #{tag}
                </li>
              ))
            ) : (
              <li></li>
            )}
          </div>
        </div>
        <ProductMeta {...meta} />
      </div>
    </div>
  );
}

export default ProductInfo;
