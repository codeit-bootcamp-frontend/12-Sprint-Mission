import styles from "./index.module.css";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/logo.svg"
          alt="로고 이미지"
          width={396}
          height={132}
        />
      </div>
      <LoginForm />
      <SocialLogin />
    </div>
  );
}
