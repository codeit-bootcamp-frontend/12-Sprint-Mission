import BestItemsSection from './components/BestItemsSection';
import '../../style/global.css';
import './MarketPage.css';
import AllItemsSection from './components/AllItemsSection';

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;
