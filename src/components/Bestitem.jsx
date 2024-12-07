import favorit_img from '../assets/heart_favorit.png';
import './BestItem.css';

const Bestitem = ({ items }) => {
  const limiteData = items.slice(0, 4);

  return (
    <div className="Bestitem">
      {limiteData.map((item) => {
        return (
          <div className="BestiemContainer">
            <div className="itemImg">{<img src={item.images} />}</div>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">{item.price.toLocaleString()}원</div>
            <div className="itemFavorit">
              <img src={favorit_img} />
              {item.favoriteCount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bestitem;
