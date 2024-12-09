import AllItemList from './AllItemList/AllItemList';
import './AllItems.css';

function AllItems({ items, onChange, onLoadNext, onLoadPre }) {
  const allItemsChange = (e) => {
    onChange(e.target.value);
  };

  const handleLoadNext = () => {
    onLoadNext();
  };

  const handleLoadPre = () => {
    onLoadPre();
  };

  return (
    <div className="allItems">
      <div className="container">
        <h2>전체 상품</h2>
        <div className="allItemsRight">
          <input type="text" placeholder="검색할 상품을 입력해주세요"></input>
          <button>상품 등록하기</button>
          <select
            className="orderSelect"
            name="order"
            onChange={allItemsChange}
          >
            <option value="recent">최신순</option>
            <option value="favorite">베스트순</option>
          </select>
        </div>
      </div>

      <ul className="itemList">
        {items.map((item, index) => {
          return <AllItemList key={item.id} item={item} index={index} />;
        })}
      </ul>
      <div className="loadChangeButton">
        <button className="loadChange" onClick={handleLoadPre}>
          &lt;
        </button>
        <button className="loadChange" onClick={handleLoadNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default AllItems;
