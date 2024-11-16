import Button from "../Button";
import styles from "./styles.module.scss";

export default function Temporary({
  title = "임시페이지",
  description = "페이지를 준비중입니다. 처음으로 돌아가주세요",
}) {
  return (
    <div className={styles["temp-wrapper"]}>
      <div className={styles["page-content"]}>
        <h2 className={styles["page-title"]}>{title}</h2>
        <div className={styles["page-description"]}>{description}</div>
      </div>
      <div className={styles["page-actions"]}>
        <Button to="/" size="md">
          처음으로
        </Button>
      </div>
    </div>
  );
}
