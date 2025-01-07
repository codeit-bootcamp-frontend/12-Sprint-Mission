import React from "react";
import Logo from "./logo.tsx";
import styles from "./styles.module.css";
import loginImg from "../../assets/img/logo/login.svg";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.header_bar}>
        <Logo />
        <div>
          <img src={loginImg} alt="Login" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
