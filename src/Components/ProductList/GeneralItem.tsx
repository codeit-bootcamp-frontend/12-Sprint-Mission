import { SyntheticEvent, useState } from "react";
import styles from "../../styles/productList/productList.module.css";
import productDefaultImg from "../../assets/images/app/common/no_img.jpg";
import btnWishImg from "../../assets/images/productList/btn_wish.png";
import { Props } from "./types";

function GeneralItem({ item }:{item:Props}) {
  const [loaded, setLoaded] = useState(false);
  const handleImgError = (e:SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = productDefaultImg;
  };
  const formattedPrice = item.price.toLocaleString();
  return (
    <>
      <div className={styles.thumbnail}>
        <img
          src={item.images}
          onError={handleImgError}
          alt={item.name}
          style={loaded ? { display: "block" } : { display: "none" }}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className={styles.textCover}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{formattedPrice}원</p>
        <div className={styles.viewWish}>
          <img src={btnWishImg} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

export default GeneralItem;
