import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductDetailAPI } from "../../api/GetProductDetailAPI";
import { GetProductComments } from "../../api/GetProductComments";
import profileImage from "../../assets/profile_icon.png";
import kebabButton from "../../assets/kebab_Btn.png";
import favoriteIcon from "../../assets/favorite_icon.png";
import noImg from "../../assets/no_img.jpg";
import "./DetailProduct.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ProductDetail {
  images?: string[];
  name?: string;
  price?: number;
  description?: string;
  tags?: string[];
  ownerNickname?: string;
  updatedAt?: string;
  favoriteCount?: number;
}

interface Comment {
  id: string;
  content: string;
  writer: {
    nickname: string;
    image?: string;
  };
}

function DetailProduct({}) {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const [productDetail, setProductDetail] = useState<ProductDetail>({});
  const [comments, setComments] = useState<Comment[]>([]);

  const loadProductDetails = async () => {
    if (!productId) return;

    try {
      const response = await GetProductDetailAPI({
        productId: Number(productId),
      });
      setProductDetail(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("상품 정보 로드 실패: ", error);
      }
    }
  };

  const loadProductComents = async () => {
    try {
      const response = await GetProductComments({
        productId: Number(productId),
      });
      setComments(response.list);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("상품 코멘트 로드 실패: ", error);
      }
    }
  };

  function handleBackClick() {
    navigate("/");
  }

  useEffect(() => {
    if (productId) {
      loadProductDetails();
      loadProductComents();
    }
  }, [productId]);

  return (
    <Container>
      <div className="productDetailForm">
        <div className="productDetailContents">
          {productDetail.images && (
            <img
              className="productImage"
              src={productDetail.images?.[0] || noImg}
              alt="제품 이미지"
            />
          )}
          <div className="productInfo">
            <div className="">
              <p className="productName">{productDetail.name}</p>
              <p className="productPrice">
                {productDetail.price
                  ? `${new Intl.NumberFormat("ko-KR").format(
                      productDetail.price
                    )}원`
                  : ""}
              </p>
              <div className="">
                <div className="">
                  <p className="productDescriptionTitle">상품소개</p>
                  <p className="productDescription">
                    {productDetail.description}
                  </p>
                </div>
                <p className="productTagTitle">상품 태그</p>
                <div className="productTags">
                  {productDetail.tags?.length ? (
                    productDetail.tags.map((tag, index) => (
                      <p className="productTag" key={index}>
                        #{tag}
                      </p>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="authorContainer">
              <div className="authorForm">
                <img
                  className="authorImg"
                  src={profileImage}
                  alt="작성자 이미지"
                />
                <div className="authorInfo">
                  <div className="authorNickName">
                    {productDetail.ownerNickname}
                  </div>
                  <div className="authorUpdatedAt">
                    {productDetail?.updatedAt
                      ? productDetail.updatedAt.replace(".", "-").slice(0, 10)
                      : ""}
                  </div>
                </div>
              </div>
              <div className="favoriteCountForm">
                <img className="favoriteIcon" src={favoriteIcon} />
                <p className="productFavoriteCount">
                  {productDetail.favoriteCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inquiryForm">
        <div className="inquiryInput">
          <label className="inquiryInputTitle" htmlFor="inquiryInputBox">
            문의하기
          </label>
          <input
            className="inquiryInputBox"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        </div>
        <div className="inquiryRegister">
          <button className="inquiryRegisterBtn">등록</button>
        </div>
      </div>
      <ul className="comments">
        {comments.map((comment) => (
          <li key={comment.id} className="commentForm">
            <div className="comment">
              <p className="commentContent">{comment.content}</p>
              <button className="kebabButton">
                <img src={kebabButton} alt="더보기 버튼" />
              </button>
            </div>
            <div className="commentWriterInfo">
              <img
                className="commentImage"
                src={comment.writer.image || profileImage}
                alt="이미지 없음."
              />
              <div className="commentUpdateInfo">
                <p className="commentWriter">{comment.writer.nickname}</p>
                <p className="commentUpdatedAt">1시간전</p>
                {/* <p className="commentUpdatedAt">{comment.updatedAt}</p> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="productDetailBottom">
        <button className="backListBtn" onClick={handleBackClick}>
          목록으로 돌아가기
        </button>
      </div>
    </Container>
  );
}

export default DetailProduct;
