import "./BestProducts.css";
import heartIcon from "../../assets/icons/heart-icon.svg";
import defaultImg from "../../assets/images/item-default-img-md.svg";
import { fetchProducts } from "../../../src/api/product.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BestProducts() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width > 1199) {
      setPageSize(4);
    } else if (width > 768) {
      setPageSize(2);
    } else {
      setPageSize(1);
    }
  };

  const loadProducts = async () => {
    const { list } = await fetchProducts("favorite", pageSize);
    setItems(list);
  };

  useEffect(() => {
    loadProducts();
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, [pageSize]);

  return (
    <section className="best-products">
      <h2 className="best-products-title">베스트 상품</h2>
      <div className="best-product-list">
        {items.map((item) => {
          return (
            <Link className="item-link">
              <div className="best-product-card" key={item.id}>
                <img
                  src={item.images && item.images.length > 0 ? item.images[0] : defaultImg}
                  alt={item.name || "기본 이미지"}
                  className="best-product-img"
                />
                <h3 className="best-product-title">{item.name}</h3>
                <p className="best-product-price">{item.price.toLocaleString()}원</p>
                <p className="best-product-likes">
                  <img src={heartIcon} alt="좋아요" />
                  &nbsp;{item.favoriteCount}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BestProducts;
