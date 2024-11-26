import Logo from "./logo";
import styles from "./styles.module.css";
import loginImg from "../../assets/img/logo/login.svg";

function Header() {
  return (
    <header>
      <nav className={styles["header-bar"]}>
        <Logo />
        <div>
          <img src={loginImg} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
