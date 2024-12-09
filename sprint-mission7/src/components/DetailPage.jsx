import { useParams, Link } from "react-router-dom";
import { getProductsById, getProductComment } from "../api/api";
import React, { useEffect, useState } from "react";
import favoriteIcon from "../assets/Icon.png";
import styles from "./detailPage.module.css";
import TagDisplay from "./TagDisplay";
import CommentCard from "./CommentCard";

function DetailPage() {
  const { itemSlug } = useParams();
  const [item, setItem] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const fetchItemData = async () => {
    const data = await getProductsById(itemSlug);
    setItem(data);
  };

  const fetchCommentData = async () => {
    const data = await getProductComment(itemSlug);
    setCommentList(data.list);
  };

  useEffect(() => {
    fetchItemData();
    fetchCommentData();
  }, [itemSlug]);

  if (!item) {
    return <div>Loading...</div>;
  }

  if (!commentList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.itemDetailPageContainer}>
        <div>
          <div className={styles.itemDetailSection}>
            <img src={item.images[0]} alt={item.name} className={styles.img} />
            <div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>{item.price.toLocaleString()}원</p>
              <p>상품 소개</p>
              <p>{item.description}</p>
              <p>상품 태그</p>
              <TagDisplay tags={item.tags} />
              <div>
                <div>
                  <img></img>
                  <div>
                    <p>{item.ownerNickname}</p>
                    <p>{item.createdAt}</p>
                  </div>
                </div>
                <div>
                  <img src={favoriteIcon} alt="favoriteIcon"></img>
                  <div>{item.favoriteCount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>문의하기</p>
          <textarea name="description" placeholder="상품 소개를 입력해주세요" />
          <button>등록</button>
        </div>
        <div>
          {commentList?.map((comment) => (
            <CommentCard comment={comment} key={`${comment.id}`} />
          ))}
        </div>
        <Link to={`/items`}>목록으로 돌아가기</Link>
      </div>
    </>
  );
}

export default DetailPage;
