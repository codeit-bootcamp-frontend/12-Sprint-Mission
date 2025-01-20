import React from "react";
import Header from "../Header/index";
import styles from "./styles.module.css";

const Board: React.FC = () => {
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
};

export default Board;
