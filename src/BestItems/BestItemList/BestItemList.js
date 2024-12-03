import heart from '../../assets/ic_heart.svg';
import '../BestItems.css';

function BestItemList({ item, index }) {
  const price = item.price.toLocaleString();

  return (
    <li className="item">
      <a href="/">
        <img className="itemImg" src={item.images} alt={item.name}></img>
      </a>
      <div className="itemInfo">
        <a href="/">
          <h3 className="name">{item.name}</h3>
        </a>
        <div className="price">{`${price}원`}</div>
        <div className="favorite">
          <img className="heartImg" src={heart} alt="heart"></img>
          <div className="favoriteCount">{item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
}

export default BestItemList;
