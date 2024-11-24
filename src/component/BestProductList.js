import ProductItem from "./BestProductItem";
import "./BestProductList.css";

function BestProductList() {
  return (
    <div className="bestsection">
      <div className="bestsection-container">
        <h1>베스트 상품</h1>
        <div className="bestproduct-list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default BestProductList;
