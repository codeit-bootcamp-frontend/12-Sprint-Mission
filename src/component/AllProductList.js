import AllProductItem from "./AllProductItem";
import "./AllProductList.css";

function AllProductList() {
  return (
    <div className="allsection">
      <div className="allsection-container">
        <h1>전체상품</h1>
        <div className="allproduct-list">
          <AllProductItem />
          <AllProductItem />
          <AllProductItem />
          <AllProductItem />
          <AllProductItem />

          <AllProductItem />
          <AllProductItem />
          <AllProductItem />
          <AllProductItem />
          <AllProductItem />
        </div>
      </div>
    </div>
  );
}

export default AllProductList;
