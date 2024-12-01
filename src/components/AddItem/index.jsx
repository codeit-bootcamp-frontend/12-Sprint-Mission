import Header from "components/Header/index";
import styles from "./style.module.css";
import testimg from "../../assets/img/landing/Img_add.svg";

function AddItems() {
  return (
    <div>
      <Header />
      <section>
        <div className={styles["add-items"]}>
          <div className={styles["product-add"]}>
            <h1>상품 등록하기</h1>
            <button>등록</button>
          </div>
          <div className={styles["add-items-form"]}>
            <div className={styles["product-img"]}>
              <h2>상품 이미지</h2>
              <div>
                <img src={testimg} alt="상품 이미지 미리보기" />
              </div>
            </div>
            <div className={styles["product-title"]}>
              <h2>상품명</h2>
              <input type="text" placeholder="상품명을 입력해주세요"></input>
            </div>
            <div className={styles["product-info"]}>
              <h2>상품 소개</h2>
              <textarea placeholder="상품 소개를 입력해주세요"></textarea>
            </div>
            <div className={styles["sale-cost"]}>
              <h2>판매 가격</h2>
              <input type="text" placeholder="판매 가격을 입력해주세요"></input>
            </div>
            <div className={styles["tag"]}>
              <h2>태그</h2>
              <input type="text" placeholder="태그를 입력해주세요"></input>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddItems;
