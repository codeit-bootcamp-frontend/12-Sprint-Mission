import LogoImg from "../../assets/images/logo-img.svg";
import LinkButton from "../Button/LinkButton";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={styles.container}>
      <img src={LogoImg} alt="로고이미지" />
      <LinkButton className={styles.btn}>로그인</LinkButton>
    </div>
  );
};

export default MainHeader;
