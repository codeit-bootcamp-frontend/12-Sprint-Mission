import userIcon from "../../asset/userIcon.png";
import kebabIcon from "../../asset/ic_kebab.png";
import styles from "./ProductComment.module.css";

interface Value {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

function ProductComment({ id, value }: { id: number; value: Value }) {
  //마지막 업데이트 시간 계산

  // date1과 date2 문자열을 Date 객체로 변환합니다.
  const startDate = new Date(value.updatedAt);
  const endDate = new Date();
  // 두 날짜 간의 시간 차이를 밀리초 단위로 계산합니다.
  const diffTime = endDate.getTime() - startDate.getTime();
  // 밀리초를 일 단위로 변환합니다.
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  // 일수 차이를 반환합니다.
  console.log(Math.floor(diffDays));

  return (
    <div className={styles.comment_container}>
      <p className={styles.comment_content}>{value.content}</p>
      <div className={styles.user_wrap}>
        <img className={styles.user_img} alt="유저아이콘" src={userIcon} />
        <div className={styles.user_name_wrap}>
          <span className={styles.user_name}>{value.writer.nickname}</span>
          <p className={styles.user_time}>{Math.floor(diffDays)}일 전</p>
        </div>
      </div>
      <img alt="케밥아이콘" src={kebabIcon} className={styles.kebabicon} />
    </div>
  );
}

export default ProductComment;
