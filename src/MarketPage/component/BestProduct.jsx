import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./item.css";

function BestProductList() {
  const [bestProduct, setBestProduct] = useState();

  useEffect(() => {
    fetch(
      "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
    )
      .then((response) => response.json())
      .then((data) => setBestProduct(data));
  }, []);

  return (
    <div className="best-item-container">
      <h2 className="product-container__text">베스트 상품</h2>
      <div className="best-item__list">
        {bestProduct?.list.map((product) => {
          const imageUrl = product.images[0];

          return (
            <ProductCard
              key={product.id}
              imageUrl={imageUrl}
              title={product.name}
              price={product.price}
              favoriteCount={product.favoriteCount}
              imageSize={282}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestProductList;
