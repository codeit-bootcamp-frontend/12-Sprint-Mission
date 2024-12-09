import BestItemList from './BestItemList/BestItemList';
import './BestItems.css';

function BestItems({ items }) {
  return (
    <div className="bestItems">
      <h2>베스트 상품</h2>
      <ul className="itemList">
        {items.map((item, index) => {
          return <BestItemList key={item.id} item={item} index={index} />;
        })}
      </ul>
    </div>
  );
}

export default BestItems;
