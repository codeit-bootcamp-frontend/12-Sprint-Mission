import BestItemsSection from "@/pages/MarketPage/components/BestItemsSection";
import AllItemsSection from "@/pages/MarketPage/components/AllItemsSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;
