import "./ProductList.css";
import NavBar from "../../components/common/NavBar";
import AllProductList from "../../components/productsList/AllProductList";
import BestProductList from "../../components/productsList/BestProductList";

function ProductList() {
  return (
    <>
      <NavBar />
      <main className="productForm">
        <BestProductList />
        <AllProductList />
      </main>
    </>
  );
}

export default ProductList;
