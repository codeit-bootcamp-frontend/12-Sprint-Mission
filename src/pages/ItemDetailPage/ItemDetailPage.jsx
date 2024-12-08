import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById, getProductsComments } from "../../api/itemApi";
import profileIcon from "../../assets/images/icons/ic_profile.png";
import backButtonIcon from "../../assets/images/icons/ic_back.png";
import "./ItemDetailPage.css";

export default function ItemDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState({ list: [], nextCursor: null });
  const [loading, setLoading] = useState(true);

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
          <div className="item-explain__user-information">user-information</div>
        </div>
      </div>
      <form className="comment-form__section">
        <h4 className="comment__title">문의하기</h4>
        <input
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          className="comment__input"
        />
        <button className="comment__button">등록</button>
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
          <p>댓글이 없습니다.</p>
        )}
      </div>
      <div className="back-to-list-button__container">
        <button className="back-to-list-button">목록으로 돌아가기</button>
        <img
          src={backButtonIcon}
          alt="되돌리기 버튼"
          className="back-to-list-button__icon"
        />
      </div>
    </section>
  );
}
