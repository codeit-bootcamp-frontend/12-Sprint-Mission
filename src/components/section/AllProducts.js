import { fetchProducts } from "../../api/product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heartIcon from "../../assets/icons/heart-icon.svg";
import defaultImg from "../../assets/images/item-default-img-sm.svg";
import "./AllProducts.css";

function AllProducts({ sortOption }) {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width > 1199) {
      setPageSize(10);
    } else if (width > 768) {
      setPageSize(6);
    } else {
      setPageSize(4);
    }
  };

  const loadProducts = async () => {
    const { list } = await fetchProducts(sortOption, pageSize);
    setItems(list);
  };

  useEffect(() => {
    loadProducts();
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, [sortOption, pageSize]);

  return (
    <section className="all-products">
      <div className="all-products-list">
        {items.map((item) => {
          return (
            <Link className="item-link">
              <div className="all-product-card" key={item.id}>
                <img
                  src={item.images && item.images.length > 0 ? item.images[0] : defaultImg}
                  alt={item.name || "기본 이미지"}
                  className="all-product-img"
                />
                <h3 className="all-product-title">{item.name}</h3>
                <p className="all-product-price">{item.price.toLocaleString()}원</p>
                <p className="all-product-likes">
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

export default AllProducts;
