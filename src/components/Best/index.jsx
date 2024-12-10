import styles from "./best.module.css";
import heartIcon from "../../assets/img/logo/heartIcon.svg";
import { getProducts } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Best() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize(window.innerWidth));

  // 화면 크기 기반으로 페이지 크기 결정 함수
  function getPageSize(width) {
    if (width <= 767) {
      return 1; // 화면 너비가 768px 미만이면 한 페이지에 1개
    } else if (width <= 1199) {
      return 2; // 화면 너비가 768px 이상이면 한 페이지에 2개
    } else {
      return 4; // 화면 너비가 1200px 이상이면 한 페이지에 4개
    }
  }

  // 화면 크기 변경 시 페이지 크기 재조정 (반응형 디자인 처리)
  useEffect(() => {
    // 윈도우 크기 변경 시 pageSize를 업데이트
    const handleResize = () => {
      setPageSize(getPageSize(window.innerWidth)); // 새로운 화면 크기 반영
    };

    window.addEventListener("resize", handleResize); // 화면 크기 변화 이벤트 리스너 추가

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 상품 데이터를 API에서 가져오는 함수
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts({
          page: 1,
          pageSize: pageSize, // 페이지 크기 (한 페이지당 표시할 상품 개수)
          orderBy: "favorite", // 정렬 기준 (인기 순)
          keyword: "",
        });
        setProducts(result.list);
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error.message);
        setProducts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    fetchProducts();
  }, [pageSize]);

  return (
    <div className={styles.best_Container}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.best_list}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className={styles.best_card}>
              <Link to={`/items/${product.id}`} className={styles.product_link}>
                {product.images.length > 0 && (
                  <div className={styles.product_image_box}>
                    <img
                      className={styles.product_image}
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </div>
                )}

                <h3 className={styles.product_name}>{product.name}</h3>
                <p className={styles.product_price}>{product.price}원</p>
                <div className={styles.heart_line}>
                  <img
                    className={styles.heart_image}
                    src={heartIcon}
                    alt="좋아요 하트 기호"
                  ></img>
                  <span className={styles.heart_num}>
                    {product.favoriteCount}
                  </span>
                </div>
              </Link>
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
