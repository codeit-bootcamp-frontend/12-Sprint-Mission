import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductComments, getProductDetails } from "@/api/api";
import styles from "./product.module.css";
import Header from "../Header/index";
import { Product, Comment } from "@/types"; // 타입 임포트
import { formatDate } from "@/utils/formatDate"; // formatDate 함수 임포트

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isCommentValid, setIsCommentValid] = useState<boolean>(false);

  // Fetch product details
  useEffect(() => {
    async function fetchProduct() {
      try {
        if (productId) {
          const data = await getProductDetails(productId);
          setProduct(data); // 상품 데이터 설정
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    fetchProduct();
  }, [productId]);

  // Fetch comments
  useEffect(() => {
    async function fetchComments() {
      try {
        if (productId) {
          const data = await getProductComments({ productId, limit: 10 });
          if (data && Array.isArray(data)) {
            setComments(data); // list 안에 댓글 배열이 있을 경우
          } else {
            setComments([]); // list가 없으면 빈 배열 설정
          }
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [productId]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNewComment(value);
    setIsCommentValid(value.trim().length > 0);
  };

  const handleCommentSubmit = async () => {
    if (!isCommentValid) return;

    try {
      // 예시로 로그인된 사용자 정보를 가져온다고 가정
      const user = {
        id: 1,
        nickname: "nickname",
        image: "user-image-url.jpg",
      };

      const newCommentData = {
        content: newComment,
        writer: user, // 로그인된 사용자 정보 추가
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(), // 새로운 댓글 ID 생성 (서버에서 관리될 경우 제외)
      };

      const token = localStorage.getItem("authToken");

      const response = await fetch(
        `https://panda-market-api.vercel.app/products/${productId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // 인증 토큰 추가
          },
          body: JSON.stringify(newCommentData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setComments((prevComments) => [...prevComments, result]);
        setNewComment("");
        setIsCommentValid(false);
      } else {
        console.error("Unauthorized: Check your login or token.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <section>
        <div className={styles.container}>
          <div className={styles.detail_container}>
            <div className={styles.image_section}>
              {product.images.map((img, index) => (
                <img key={index} src={img} alt={`상품 이미지 ${index + 1}`} />
              ))}
            </div>
            <div className={styles.details_section}>
              <h1 className={styles.product_name}>{product.name}</h1>
              <span className={styles.price}>{product.price}원</span>
              <hr />
              <h2 className={styles.product_intro}>상품 소개</h2>
              <p className={styles.product_intro_detail}>
                {product.description}
              </p>
              <h3 className={styles.product_tag}>상품 태그</h3>
              <div className={styles.tags}>
                {product.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
              <p className={styles.favorite_count}>
                ❤️ {product.favoriteCount}
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.comment_section}>
            <h2 className={styles.do_comment}>문의하기</h2>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <button
              onClick={handleCommentSubmit}
              className={`${styles.submit_button} ${
                isCommentValid ? styles.active : ""
              }`}
              disabled={!isCommentValid}
            >
              등록
            </button>
            <div className={styles.comment_list}>
              {comments.map((comment, index) => (
                <div key={index} className={styles.comment}>
                  <img
                    src={comment.writer.image || "default-avatar.jpg"}
                    alt="작성자 이미지"
                  />
                  <div>
                    <p className={styles.nickname}>{comment.writer.nickname}</p>
                    <p className={styles.content}>{comment.content}</p>
                    <p className={styles.timestamp}>
                      {formatDate(comment.updatedAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.back_button}>
            <button
              onClick={() => navigate("/items")}
              className={styles.back_button}
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
