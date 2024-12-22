import styles from "./TopSection.module.css";
import HomeTopImg from "../../../assets/images/Img_home_top.svg";
import LinkButton from "../../../components/Button/LinkButton";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <p className={styles.text}>
            일상의 모든 물건을
            <br /> 거래해 보세요
          </p>
          <Link to="/items" className={styles.btn}>
            <LinkButton size="large">구경하러 가기</LinkButton>
          </Link>
        </div>
      </div>
      <img src={HomeTopImg} alt="동산위의판다이미지" />
    </div>
  );
};

export default TopSection;
