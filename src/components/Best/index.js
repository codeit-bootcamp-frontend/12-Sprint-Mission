import styles from "./styles.module.css";
import heartIcon from "../../assets/img/logo/heartIcon.svg";
import { getProducts } from "../../api";
import { useState, useEffect } from "react";

function Best() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize(window.innerWidth));

  function getPageSize(width) {
    //
    if (width >= 1200) {
      return 4;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    // 윈도우 크기 변경 시 pageSize를 업데이트
    const handleResize = () => {
      setPageSize(getPageSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts({
        page: 1,
        pageSize: pageSize,
        orderBy: "favorite",
        keyword: "",
      });
      setProducts(result.list);
    };

    fetchProducts();
  }, [pageSize]);

  return (
    <div className={styles["best-Container"]}>
      <h2 className={styles["title"]}>베스트 상품</h2>
      <ul className={styles["best-list"]}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className={styles["best-card"]}>
              {product.images.length > 0 && (
                <div className={styles["product-image-box"]}>
                  <img
                    className={styles["product-image"]}
                    src={product.images[0]}
                    alt={product.name}
                  />
                </div>
              )}
              <h3 className={styles["product-name"]}>{product.name}</h3>
              <p className={styles["product-price"]}>{product.price}원</p>
              <div className={styles["heart-line"]}>
                <img
                  className={styles["heart-image"]}
                  src={heartIcon}
                  alt="좋아요 하트 기호"
                ></img>
                <span className={styles["heart-num"]}>
                  {product.favoriteCount}
                </span>
              </div>
            </li>
          ))
        ) : (
          <p>No Products</p>
        )}
      </ul>
    </div>
  );
}

export default Best;
