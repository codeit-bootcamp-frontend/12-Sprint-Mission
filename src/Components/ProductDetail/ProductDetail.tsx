import styles from "../../styles/productDetail/productDetail.module.css";
import productDefaultImg from "../../assets/images/app/common/no_img.jpg";
import profileDefaultImg from "../../assets/images/productDetail/default_profile.svg";
import favoriteImg from "../../assets/images/productDetail/favorite.svg";
import optionMenuImg from "../../assets/images/productDetail/option_menu.svg";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { SelectBox, SelectButton } from "../../styles/productDetail/SelectBox";
import { TProductDataProps } from "./types";
import ImgSkeleton from "./ImgSkeleton";
import TextSkeleton from "./TextSkeleton";

function ProductDetail({
  productData,
  Loading,
}: {
  productData: TProductDataProps | undefined;
  Loading: boolean;
}) {
  const formattedPrice = Number(productData?.price).toLocaleString();
  const formattedDate = String(productData?.createdAt).slice(0, 10);

  const [selectBox, setSelectBox] = useState(false);
  const outRef = useRef<HTMLDivElement | null>(null);

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = productDefaultImg;
  };

  const handleOptionClick = () => {
    selectBox ? setSelectBox(false) : setSelectBox(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      // 해당 이벤트가 영역 밖이라면 케밥 버튼 비활성화
      if (outRef.current && !outRef.current.contains(e.target)) {
        setSelectBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleOptionClick]);

  return (
    <div className={`${styles.pagiContainer} ${styles.emptyTopBox}`}>
      <div className={styles.section1}>
        {Loading ? (
          <ImgSkeleton />
        ) : (
          <div className={styles.productImg}>
            <img
              src={productData?.images}
              onError={handleImgError}
              alt={productData?.name}
            />
          </div>
        )}

        {Loading ? (
          <TextSkeleton />
        ) : (
          <div className={styles.descriptionContainer}>
            <div>
              <div className={styles.titleCover}>
                <p className={styles.title}>{productData?.name}</p>
                <p className={styles.price}>{formattedPrice}원</p>
                <div
                  className={styles.btnMore}
                  onClick={handleOptionClick}
                  ref={outRef}
                >
                  <img src={optionMenuImg} alt="더보기" />
                  {selectBox && (
                    <SelectBox>
                      <SelectButton>수정하기</SelectButton>
                      <SelectButton>삭제하기</SelectButton>
                    </SelectBox>
                  )}
                </div>
              </div>
              <div className={styles.descriptionCover}>
                <p className={styles.subTitle}>상품 소개</p>
                <p className={styles.description}>{productData?.description}</p>
              </div>
              <div className={styles.tagsCover}>
                <p className={styles.subTitle}>상품 태그</p>
                <ul>
                  {productData?.tags &&
                    productData.tags.map((tag, i) => {
                      return (
                        <li key={i} className={styles.tagName}>
                          #{tag}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className={styles.cover}>
              <div className={styles.owner}>
                <div className={styles.profileImg}>
                  <img src={profileDefaultImg} alt="프로필 이미지" />
                </div>
                <div className={styles.postInfo}>
                  <p className={styles.nickName}>
                    {productData?.ownerNickname}
                  </p>
                  <p className={styles.date}>{formattedDate}</p>
                </div>
              </div>
              <div className={styles.favoritCount}>
                <img src={favoriteImg} alt="좋아요" />
                <p className={styles.count}>{productData?.favoriteCount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
