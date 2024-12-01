import Header from "components/Header/index";
import styles from "components/Board/styles.module.css";

function Home() {
  return (
    <div>
      <Header />
      <div className={styles["home-body"]}> 준비중 </div>
    </div>
  );
}

export default Home;
