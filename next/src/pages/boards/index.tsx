import styles from "./index.module.css";
import MainHeader from "@/src/components/MainHeader";
import BestPosts from "./components/BestPosts";
import AllPosts from "./components/AllPosts";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>판다마켓-게시글</title>
      </Head>
      <MainHeader />
      <div className={styles.container}>
        <BestPosts />
        <AllPosts />
      </div>
    </>
  );
}
