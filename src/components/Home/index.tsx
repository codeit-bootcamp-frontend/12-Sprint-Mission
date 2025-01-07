import React from "react";
import Header from "../Header/index.tsx";
import styles from "./styles.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section>
        <div className={styles.home_body}>
          <h1>준비중</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
