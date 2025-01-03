import { useState } from "react";
import Header from "../../components/ui/Header/Header";
import BestProductsSection from "../../components/section/BestProductsSection";
import AllProductsNav from "../../components/ui/Nav/AllProductsNav";
import AllProductsSection from "../../components/section/AllProductsSection";
import "./ItemsPage.css";
import { SortOption } from "../../types";

function ItemsPage() {
  const [sortOption, setSortOption] = useState<SortOption>("recent");

  const handleSortChange = (newSortOption: SortOption) => {
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
