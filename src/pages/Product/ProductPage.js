import AllItemsSection from "./components/AllItemsSection";
import BestItemsSection from "./components/BestItemsSection";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="product-page">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default ProductPage;
