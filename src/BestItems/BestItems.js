import BestItemList from './BestItemList/BestItemList';
import './BestItems.css';

const style = {
  height: '1500px',
};

function BestItems({ items }) {
  return (
    <div className="bestItems">
      <h2>베스트 상품</h2>
      <ul className="itemList">
        {items.map((item, index) => {
          return <BestItemList key={item.id} item={item} index={index} />;
        })}
      </ul>
      <div style={style}></div> {/* Header position 고정 확인용 */}
    </div>
  );
}

export default BestItems;

// return (
//   <ul>
//     {items.map((item) => {
//       return <ReviewListItem key={item.id} />;
//     })}
//   </ul>
// );
