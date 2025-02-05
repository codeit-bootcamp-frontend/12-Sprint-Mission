import React from "react";
import { useState, useEffect } from "react";
import { GetProductsAPI } from "../../api/GetProductsAPI";
import { Link } from "react-router-dom";
import "./BestProductList.css";
import favoriteIcon from "../../assets/favorite_icon.png";

type Product = {
  id: number;
  name: string;
  price: number;
  favoriteCount: number;
  images: string[];
};

function BestProductList() {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  const imageSize = "282px";

  const loadBestProducts = async () => {
    try {
      const data = await GetProductsAPI({
        page: 1,
        pageSize: 4,
        orderBy: "favorite",
      });
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
          <div className="bestProduct" key={product.id}>
            <Link to={`/product/${product.id}`}>
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
                <p className="price">
                  {new Intl.NumberFormat("ko-KR").format(product.price)}원
                </p>
                <div className="favorite">
                  <img src={favoriteIcon} alt="좋아요 버튼" />
                  <p className="favoriteCount">
                    {product.favoriteCount.toString()}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestProductList;
