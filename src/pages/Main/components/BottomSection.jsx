import styles from "./BottomSection.module.css";
import BottomSectionImg from "../../../assets/images/Img_home_bottom.svg";

const BottomSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.slogan}>
          믿을 수 있는
          <br /> 판다마켓 중고 거래
        </p>
        <img src={BottomSectionImg} alt="동산 위 인사하는 판다 이미지" />
      </div>
    </div>
  );
};

export default BottomSection;
