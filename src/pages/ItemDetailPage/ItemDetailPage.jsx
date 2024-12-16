import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById, getProductsComments } from "../../api/itemApi";
import profileIcon from "../../assets/images/icons/ic_profile.png";
import backButtonIcon from "../../assets/images/icons/ic_back.png";
import inquiryEmptyIcon from "../../assets/images/icons/Img_inquiry_empty.png";
import heartIcon from "../../assets/images/icons/ic_heart.png";
import "./ItemDetailPage.css";

export default function ItemDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState({ list: [], nextCursor: null });
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");

  const natigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductsById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchComment = async () => {
      try {
        const data = await getProductsComments({ productId, limit: 5 });
        setComments(data);
      } catch (error) {
        console.error("상품 댓글을 가져오지 못했습니다:", error);
      }
    };

    fetchProduct();
    fetchComment();
  }, [productId]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleBackToList = () => {
    natigate("/items");
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>상품 정보를 불러오는 데 실패했습니다.</div>;

  return (
    <section className="itemDetailPage__section">
      <div className="item-information__container">
        <img src={product.images} alt={product.name} className="item__img" />
        <div className="item-explain__container">
          <div className="item-explain-title__container">
            <h1 className="item-name">{product.name}</h1>
            <h2 className="item-price">{product.price}</h2>
          </div>
          <div className="item-description__container">
            <h3 className="item-description__title">상품 소개</h3>
            <p className="item-description__text">{product.description}</p>
          </div>
          <div className="item-tag__container">
            <h3 className="item-tag__title">상품 태그</h3>
            <div className="item-tag__flex-container">
              {product.tags.map((tag) => {
                return (
                  <div key={tag} className="item-tag">
                    #{tag}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="item-explain__user-information">
            <div className="user__information">
              <img
                src={profileIcon}
                alt="등록자 아이콘"
                className="user__icon"
              />
              <div className="user__text">
                <p className="user-nickname__text">{product.ownerNickname}</p>
                <p className="user-createdAt__text">
                  {product.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="favorite-count__container">
              <img src={heartIcon} alt="좋아요 이미지" />
              <p>{product.favoriteCount}</p>
            </div>
          </div>
        </div>
      </div>
      <form className="comment-form__section">
        <h4 className="comment__title">문의하기</h4>
        <textarea
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          className="comment__input"
          value={commentText}
          onChange={handleCommentChange}
        ></textarea>
        <button
          className="comment__button"
          style={{
            backgroundColor: commentText.trim() ? "#3692FF" : "#ccc", // 텍스트 유무에 따라 색상 변경
          }}
        >
          등록
        </button>
      </form>
      <div className="comment-list__container">
        {comments.list.length > 0 ? (
          comments.list.map((comment) => (
            <div key={comment.id} className="comment-list">
              <p>{comment.content}</p>
              <div className="comment-list__user-container">
                <img
                  src={comment.writer.image || profileIcon}
                  alt={comment.writer.nickname}
                  className="comment-list__user-img"
                />
                <div className="comment-list__user-information">
                  <p>{comment.writer.nickname}</p>
                  <p className="comment-time">몇 시간전</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="comment-list__empty">
            <img
              src={inquiryEmptyIcon}
              alt="댓글이 없습니다."
              className="empty__icon"
            />
            <p className="empty__text">아직 문의가 없어요</p>
          </div>
        )}
      </div>
      <div className="back-to-list-button__container">
        <button className="back-to-list-button" onClick={handleBackToList}>
          목록으로 돌아가기
        </button>
        <img
          src={backButtonIcon}
          alt="되돌리기 버튼"
          className="back-to-list-button__icon"
        />
      </div>
    </section>
  );
}
