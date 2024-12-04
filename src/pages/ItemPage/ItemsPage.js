import Header from "../../components/ui/Header/Header";
import BestProductsSection from "../../components/section/BestProductsSection";
import AllProductsNav from "../../components/ui/Nav/AllProductsNav";
import AllProductsSection from "../../components/section/AllProductsSection";
import "./ItemsPage.css";
import { useState } from "react";

function ItemsPage() {
  const [sortOption, setSortOption] = useState("recent");

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <div className="item-page">
      <Header />
      <BestProductsSection />
      <AllProductsNav onSortChange={handleSortChange} />
      <AllProductsSection sortOption={sortOption} />
    </div>
  );
}

export default ItemsPage;
