import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import "./BestProductList.css";
import favoriteIcon from "../assets/favorite_icon.png";

// function BestProductList({ imageUrl, name, price, favoriteCount, size }) {
function BestProductList() {
  const [bestProducts, setBestProducts] = useState([]);
  const [orderBy, setOrderBy] = useState();
  //   const [pageSize, setPageSize] = useState(10);
  const imageSize = "282px";

  const loadBestProducts = async () => {
    try {
      const data = await getProducts({
        page: 1,
        pageSize: 4,
        orderBy: "favorite",
      });
      console.log(data);
      setBestProducts(data);
    } catch (error) {
      console.log("베스트 상품 로드 실패: ", error);
    }
  };

  useEffect(() => {
    loadBestProducts();
  }, []);

  return (
    <section className="bestProdcutContainer">
      <h3 className="title">베스트 상품</h3>
      <div className="bestProducts">
        {bestProducts.map((product) => (
          <div className="bestProduct">
            <img
              className="productImage"
              src={product.images[0]}
              alt="베스트 상품 이미지"
              style={{
                width: imageSize,
                height: imageSize,
              }}
            />
            <div className="content">
              <p className="name">{product.name}</p>
              <p className="price">{product.price.toString()}</p>
              <div className="favorite">
                <img src={favoriteIcon} alt="좋아요 버튼" />
                <p className="favoriteCount">
                  {product.favoriteCount.toString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestProductList;
