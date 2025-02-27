import styles from "./Additem.module.css";
import Nav from "../src/components/Nav";
import Editsection from "../src/components/Editsection";
import Editinput from "../src/components/Editinput";

export default function Additem() {
  return (
    <div className={styles.additem}>
      <Nav />
      {/* 아래는 상품등록 페이지 구현 */}
      <form className={styles.edit}>
        <div className={styles.edit_title}>
          <div>상품 등록하기</div>
          <button className={styles.titleBtn}>등록</button>
        </div>
        <div className={styles.edit_info}>
          <Editsection
            topChild={"상품이미지"}
            center={<Editinput type="img" />}
          />
          <Editsection
            topChild={"상품명"}
            center={
              <Editinput
                type="text"
                info="name"
                placeholder={"상품명을 입력해주세요"}
              />
            }
          />
          <Editsection
            topChild={"상품 소개"}
            center={
              <Editinput
                type="text"
                info="info"
                placeholder={"상품 소개를 입력해주세요"}
              />
            }
          />
          <Editsection
            topChild={"판매가격"}
            center={
              <Editinput
                type="text"
                info="price"
                placeholder={"판매 가격을 입력해주세요"}
              />
            }
          />
          <Editsection
            topChild={"태그"}
            center={
              <Editinput
                type="text"
                info="tag"
                placeholder={"태그를 입력해주세요"}
              />
            }
            // bottonChild={"태그달부분"}
          />
        </div>
      </form>
    </div>
  );
}
