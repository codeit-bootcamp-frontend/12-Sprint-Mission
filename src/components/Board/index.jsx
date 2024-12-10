import Header from "components/Header/index";
import styles from "components/Board/styles.module.css";

function Board() {
  return (
    <div>
      <Header />
      <section>
        <div className={styles.board_body}>
          <h1>준비중</h1>
        </div>
      </section>
    </div>
  );
}

export default Board;
