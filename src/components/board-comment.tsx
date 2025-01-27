import formatDateNow from "@/lib/format-data-now";
import ToggleMenu from "@/components/toggle-menu";
import styles from "./board-comment.module.css";
import { Comment } from "../../types";

/**
 * 질문하기
 * Comment 인터페이스의 타입을 전부 사용안했는데 오류가 나지않는 이유??
 * 예를 들어 createdAt는 ?. 처럼 선택적이 아니지만 오류가 안남
 */

const BoardComment = (props: Comment) => {
  return (
    <li className={styles.comment}>
      <ToggleMenu />
      <h3>{props.content}</h3>
      <div className={styles.info}>
        <figure>
          <img
            src={
              props.writer.image
                ? props.writer.image
                : "/assets/img/icon_my.svg"
            }
            alt={props.writer.nickname}
          />
        </figure>
        <div className={styles.right}>
          <p>{props.writer.nickname}</p>
          <span>{formatDateNow(props.updatedAt)}</span>
        </div>
      </div>
    </li>
  );
};

export default BoardComment;
