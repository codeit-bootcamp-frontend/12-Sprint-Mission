import React from "react";
import BestItems from "./bestItems";
import AllItems from "./AllItems";
import "../styles/ItemsSection.css";

function ItemsSection() {
  return (
    <section className="itemsSection">
      <BestItems />
      <AllItems />
    </section>
  );
}

export default ItemsSection;
