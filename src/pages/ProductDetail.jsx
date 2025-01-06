// import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import productImg from "../asset/fdec874e30ff90436580b2b8d751e9f5.png";
import UserImg from "../asset/userIcon.png";
import ProductTag from "../component/ProductTag";
import ProductComment from "../component/ProductComment/ProductComment";
import heartIcon from "../asset/ic_heart.png";

function ProductDetail() {
  // const { productSlug } = useParams();

  return (
    <div className={styles.detail_section}>
      <div className={styles.detail_wrap}>
        <div className={styles.product_container}>
          <img
            alt="상품이미지"
            src={productImg}
            className={styles.product_img}
          />
          <div className={styles.product_wrap}>
            <div className={styles.product_detail_section}>
              <div className={styles.product_title_wrap}>
                <h2 className={styles.product_title}>아이패드 미니 팔아요</h2>
                <h1 className={styles.product_price}>500,000</h1>
                <div className={styles.product_line}></div>
              </div>
              <div className={styles.product_des_wrap}>
                <span className={styles.product_description_title}>
                  상품 소개
                </span>
                <p className={styles.product_description}>
                  액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면
                  전혀 신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
                  넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을
                  못느꼈네요 잘 안써서 싸게넘깁니다! 택배거래안합니다.
                </p>
              </div>
              <div className={styles.product_tag_wrap}>
                <span className={styles.product_tag_title}>상품 태그</span>
                <div className={styles.product_tag_list}>
                  <ProductTag value={"아이패드미니"} />
                  <ProductTag value={"애플"} />
                  <ProductTag value={"가성비"} />
                </div>
              </div>
            </div>
            <div className={styles.product_user_wrap}>
              <img className={styles.user_img} alt="유저이미지" src={UserImg} />
              <div className={styles.user_info}>
                <span className={styles.user_name}>총명한판다</span>
                <p className={styles.user_date}>2024.01.02</p>
              </div>
              <div>
                <img
                  className={styles.heart}
                  src={heartIcon}
                  alt="관심아이콘"
                />
                <span className={styles.heart_count}>123</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail_line}></div>
        <form className={styles.comment_input_container}>
          <div className={styles.comment_input_wrap}>
            <label className={styles.comment_input_title}>문의하기</label>
            <textarea
              className={styles.comment_input}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
          </div>
          <button className={styles.comment_button}>등록</button>
        </form>
        <div className={styles.comment_list_container}>
          <ProductComment />
          <ProductComment />
          <ProductComment />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
