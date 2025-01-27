import { useEffect, useState } from "react";
import heartImage from "../../assets/images/heart.png";
import userImage from "../../assets/images/user.png";
import ickebabImage from "../../assets/images/ickebab.png";
import returnImage from "../../assets/images/return.png";
import nocommentImage from "../../assets/images/nocomment.png";
import "./SpecificProduct.css";
import { getCommentData, postCommentData } from "../../api";
import { Link, useParams } from "react-router-dom";

export interface SpecificProductProps {
  imageUrl: string;
  size: number;
  name: string;
  price: number;
  description: string;
  likeCount: number;
  tags: string[];
  ownerNickname: string;
  createdAt: string;
}

interface User {
  id: number;
  content: string;
  writer: Writer;
  createdAt: string;
  updatedAt: string;
}

interface Writer {
  nickname: string;
}

const SpecificProduct: React.FC<SpecificProductProps> = ({
  imageUrl,
  size,
  name,
  price,
  description,
  likeCount,
  tags,
  ownerNickname,
  createdAt,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const { productSlug } = useParams<{ productSlug: string }>();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const [askContent, setAskContent] = useState<string>(""); //문의하기
  const [isValidUsers, setisValidUsers] = useState<boolean>(false); //user 코멘트가 있는지

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getCommentData({ productId: productSlug, limit: 3 });
        console.log(data.list);
        if (data.list && data.list.length > 0) {
          setUsers(data.list);
          setisValidUsers(true);
        } else {
          setisValidUsers(false);
        }
      } catch (error) {
        console.error("Error!", error);
      }
    };
    fetchUsers();
  }, []);

  //2024.01.02 형식으로 렌더링되게.
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    // getMonth()는 0부터 시작하므로 +1을 해주고, padStart로 2자리 맞추기
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  //..시간 전으로 렌더링되게.
  function getTimeDifference(createdAt: string, updatedAt: string): string {
    const created: number = new Date(createdAt).getTime();
    const updated: number = new Date(updatedAt).getTime();

    // 밀리초 단위의 차이를 시간으로 변환
    const diffInHours = Math.floor((updated - created) / (1000 * 60 * 60));

    if (diffInHours === 0) {
      // 1시간 미만인 경우 분 단위로 표시
      const diffInMinutes = Math.floor((updated - created) / (1000 * 60));
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      // 24시간 미만인 경우
      return `${diffInHours}시간 전`;
    } else {
      // 24시간 이상인 경우 일 단위로 표시
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}일 전`;
    }
  }

  //수정하기 버튼 클릭했을 때 실행되어야 할 함수

  const handleEditClick = (userId: number, content: string): void => {
    setEditingId(userId);
    setEditContent(content);
  };

  // 취소하기 버튼 클릭했을 때 실행되어야 할 함수

  const handleCancelClick = (): void => {
    setEditingId(null);
    setEditContent("");
  };

  // 수정완료 버튼 클릭했을 때 실행되어야 할 함수

  const handleSaveEdit = async (userId: number): Promise<void> => {
    try {
      const response = await postCommentData({
        productId: productSlug,
        editContent: editContent,
      });

      if (!response.ok) {
        throw new Error("failed to update comment");
      }
      // 성공시

      const updateUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, content: editContent };
        }
        return user;
      });
      setUsers(updateUsers);
      setEditingId(null);
      setEditContent("");
    } catch (error) {
      console.error("error!", error);
    }
  };

  return (
    <div className="specific-product-item">
      <div className="specific-product-container">
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "#f3f2f2",
          }}
        >
          <img
            className="specific-product-image"
            src={imageUrl}
            alt="상품이미지"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
        <div className="specific-product-info">
          <p className="specific-product-name">{name}</p>
          <p className="specific-product-price">
            {price && price.toLocaleString()}원
          </p>
          <hr />
          <section className="specific-product-introduce-box">
            <h3 className="specific-product-introduce-title">상품 소개</h3>
            <p className="specific-product-introduce-description">
              {description}
            </p>
          </section>

          <section className="specific-product-tag-box">
            <h3 className="specific-product-tag-title">상품 태그</h3>
            <div className="tag__container">
              {tags &&
                tags.map((tag, index) => (
                  <div key={index} className="tag-label">
                    #{tag}
                  </div>
                ))}
            </div>
          </section>

          <section className="owner-section">
            <div className="user-image-container">
              <img
                src={userImage}
                alt="유저이미지"
                style={{ width: 40, height: 40 }}
              />
            </div>
            <div className="user-information-section">
              <h4 className="user-ownernickname">{ownerNickname}</h4>
              <p className="user-createdat">{formatDate(createdAt)}</p>
            </div>
            <div className="specific-heart-section">
              <img
                src={heartImage}
                alt="하트이미지"
                className="user-heart-image"
              />
              <span className="user-likecount">
                {likeCount && likeCount.toLocaleString()}
              </span>
            </div>
          </section>
        </div>
      </div>

      <div className="question-section">
        <section className="ask-section">
          <h3>문의하기</h3>
          <input
            value={askContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAskContent(e.target.value)
            }
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            className="ask-input"
          />
          <div className="register-button-container">
            <button
              type="submit"
              className={`register-button ${
                askContent ? `register-button-active` : ""
              }`}
            >
              등록
            </button>
          </div>
        </section>
        <section className="comment-section">
          {users && isValidUsers ? (
            users.map((user, index) => (
              <div key={user.id || index} className="comment-container">
                <div className="comment-kebab-container">
                  {editingId === user.id ? (
                    <div className="edit-comment-container">
                      <input
                        type="text"
                        value={editContent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEditContent(e.target.value)
                        }
                        className="edit-comment-input"
                      />
                      <div className="edit-buttons-container">
                        <button
                          onClick={() => handleCancelClick()}
                          className="cancel-button"
                        >
                          취소
                        </button>
                        <button
                          onClick={() => handleSaveEdit(user.id)}
                          className="save-button"
                        >
                          수정완료
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="comment-user-content">{user.content}</div>
                      <img
                        src={ickebabImage}
                        alt="케밥이미지"
                        style={{ width: 24, height: 24, cursor: "pointer" }}
                        onClick={() => handleEditClick(user.id, user.content)}
                      />
                    </>
                  )}
                </div>
                <div className="comment-user-container">
                  <div className="comment-image-container">
                    <img
                      src={userImage}
                      alt="유저이미지"
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                  <div className="comment-user-information">
                    <div className="comment-user-nickname">
                      {user.writer.nickname}
                    </div>
                    <div className="comment-user-when">
                      {getTimeDifference(user.createdAt, user.updatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-comment-container">
              <img src={nocommentImage} alt="댓글없을 때의 이미지" />
            </div>
          )}
        </section>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="search-button-container">
          <button type="submit" className="search-button">
            목록으로 돌아가기
            <img
              src={returnImage}
              alt="되돌아가기 아이콘"
              className="return-icon"
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SpecificProduct;
