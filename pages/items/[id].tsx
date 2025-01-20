import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // next/router에서 useRouter 가져오기
import { getProductComments, getProductDetails } from "@/api/api";
import styles from "@/components/product/product.module.css";
import { Product, Comment } from "@/types"; // 타입 임포트
import { formatDate } from "@/utils/formatDate"; // formatDate 함수 임포트
import Header from "@/components/Header";

const ProductDetail: React.FC = () => {
  const router = useRouter(); // useRouter 훅을 통해 라우터 객체 접근
  const { id } = router.query; // query에서 id를 가져오기
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isCommentValid, setIsCommentValid] = useState<boolean>(false);

  // Fetch product details
  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const data = await getProductDetails(id as string); // id를 string으로 캐스팅
          setProduct(data); // 상품 데이터 설정
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    }

    fetchProduct();
  }, [id]); // id 변경 시마다 다시 호출

  // Fetch comments
  useEffect(() => {
    async function fetchComments() {
      if (id) {
        try {
          const data = await getProductComments({
            productId: id as string,
            limit: 10,
          });
          if (data && Array.isArray(data)) {
            setComments(data); // list 안에 댓글 배열이 있을 경우
          } else {
            setComments([]); // list가 없으면 빈 배열 설정
          }
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      }
    }

    fetchComments();
  }, [id]); // id 변경 시마다 다시 호출

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNewComment(value);
    setIsCommentValid(value.trim().length > 0);
  };

  const handleCommentSubmit = async () => {
    if (!isCommentValid) return;

    try {
      const user = {
        id: 1,
        nickname: "nickname",
        image: "user-image-url.jpg",
      };

      const newCommentData = {
        content: newComment,
        writer: user,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };

      const token = localStorage.getItem("authToken");

      const response = await fetch(
        `https://panda-market-api.vercel.app/products/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
      <div className={styles.section}>
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
              <hr className={styles.hr} />
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
              onClick={() => router.push("/items")}
              className={styles.back_button}
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
