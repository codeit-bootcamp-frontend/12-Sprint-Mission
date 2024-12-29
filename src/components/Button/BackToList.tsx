import { Button } from "@components/ui";
import iconBack from "@assets/img/icon/icon_back.svg";
import styles from "./BackToList.module.scss";

export function BackToList() {
  return (
    <div className={styles.controls}>
      <Button to="/items" size="md">
        목록으로 돌아가기 <img src={iconBack} alt="목록으로 돌아가기" />
      </Button>
    </div>
  );
}
