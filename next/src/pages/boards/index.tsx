import styles from "./index.module.css";
import MainHeader from "@/src/components/MainHeader";
import BestPosts from "./components/BestPosts";
import AllPosts from "./components/AllPosts";

export default function Page() {
  return (
    <>
      <MainHeader />
      <div className={styles.container}>
        <BestPosts />
        <AllPosts />
      </div>
    </>
  );
}
