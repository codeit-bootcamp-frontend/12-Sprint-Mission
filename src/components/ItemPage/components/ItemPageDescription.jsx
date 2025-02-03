import { useEffect, useState } from "react";
import style from "./ItemPageDescription.module.scss";
import { getProductDetail } from "../../../api";
import convertDateToLocalString from "../../../utils/time";
import profile from "../../../img/Group 33729.svg";
import heart_img from "../../../img/ic_heart.svg";

function ItemPageDescription({ id }) {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    getProductDetail(id).then((data) => {
      console.log("data", data);
      setItemDetails(data);
    });
  }, [id]); // `id`가 변경될 때마다 API 요청

  if (!itemDetails) return <div>로딩 중...</div>;

  return (
    <div className={style.container}>
      <img
        className={style.productImg}
        src={itemDetails?.images[0]}
        alt="상품이미지"
      />
      <div className={style.descriptionContainer} style={{ width: "690px" }}>
        <div>
          <div className={style.title}>{itemDetails?.name}</div>
          <div className={style.price}>
            {Number(itemDetails?.price).toLocaleString()}원
          </div>
          <hr
            style={{
              border: "1px solid,rgba(229, 231, 235, 1) ",
            }}
          />
          <div className={style.subtitle}>상품소개</div>
          <div className={style.description}>{itemDetails?.description}</div>
          <div className={style.subtitle}>상품태그</div>
          <div className={style.tag}>
            {itemDetails?.tags?.map((tag) => {
              return <div>#{tag}</div>;
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <img
              style={{ backgroundColor: "#c8c9c7", borderRadius: "50px" }}
              src={profile}
              alt="개인 프로필"
            />
            <div>
              <div style={{ color: "#4B5563" }}>
                {itemDetails?.ownerNickname}
              </div>
              <div style={{ color: " #9CA3AF" }}>
                {convertDateToLocalString(itemDetails?.createdAt)}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <hr />
            <div className={style.like}>
              <img
                style={{ width: "32px", height: "32px" }}
                src={heart_img}
                alt="하트이모티콘"
              />
              <div>{itemDetails?.favoriteCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemPageDescription;
