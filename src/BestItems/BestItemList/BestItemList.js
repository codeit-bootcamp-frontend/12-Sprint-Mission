import heart from '../../assets/ic_heart.svg';
import '../BestItems.css';

function BestItemList({ item, index }) {
  return (
    <li className="item">
      <img className="itemImg" src={item.images} alt={item.name}></img>
      <div className="itemInfo">
        <h3 className="name">{item.name}</h3>
        <div className="price">{`${item.price}원`}</div>
        <div className="favorite">
          <img className="heartImg" src={heart} alt="heart"></img>
          <div className="favoriteCount">{item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
}

export default BestItemList;
