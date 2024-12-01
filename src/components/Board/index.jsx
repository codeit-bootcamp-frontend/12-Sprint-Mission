import Header from "components/Header/index";
import styles from "components/Board/styles.module.css";

function Board() {
  return (
    <div>
      <Header />
      <div className={styles["board-body"]}> 준비중 </div>
    </div>
  );
}

export default Board;
