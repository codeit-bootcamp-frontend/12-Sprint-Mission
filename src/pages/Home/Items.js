import Header from "../../components/ui/Header/Header";
import BestProducts from "../../components/section/BestProducts";
import ItemNav from "../../components/ui/Nav/ItemNav";
import AllProducts from "../../components/section/AllProducts";
import "./Items.css";
import { useState } from "react";

function Items() {
  const [sortOption, setSortOption] = useState("recent");

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <div className="item-page">
      <Header />
      <BestProducts />
      <ItemNav onSortChange={handleSortChange} />
      <AllProducts sortOption={sortOption} />
    </div>
  );
}

export default Items;
