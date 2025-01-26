import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/items/productList.module.css";
import btnWishImg from "@/public/assets/images/items/btn_wish.png";
import NoImg from "@/public/assets/images/app/common/no_img.jpg";
import { Props } from "./types";

function AllItem({ item }: { item: Props }) {
  const [isImgError, setIsImgError] = useState(false);
  const formattedPrice = item.price.toLocaleString();

  return (
    <>
      <div className={styles.thumbnail}>
        {`${item.images}`.length === 0 ? (
          <Image
            src={NoImg}
            alt={item.name}
            fill
            priority={true}
            sizes="100%"
            onError={() => setIsImgError(true)}
          />
        ) : (
          <Image
            src={isImgError ? NoImg : `${item.images}`}
            alt={item.name}
            fill
            priority={true}
            sizes="100%"
            onError={() => setIsImgError(true)}
          />
        )}
      </div>
      <div className={styles.textCover}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{formattedPrice}원</p>
        <div className={styles.viewWish}>
          <Image src={btnWishImg} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

export default AllItem;
