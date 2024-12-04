import AllItemList from './AllItemList/AllItemList';
import './AllItems.css';

function AllItems({ items }) {
  return (
    <div className="allItems">
      <h2>전체 상품</h2>
      <ul className="itemList">
        {items.map((item, index) => {
          return <AllItemList key={item.id} item={item} index={index} />;
        })}
      </ul>
    </div>
  );
}

export default AllItems;
