import styles from "./index.module.css";
import MainHeader from "../../components/MainHeader";
import BestPosts from "./components/BestPosts";
import AllPosts from "./components/AllPosts";
import Head from "next/head";
import fetchPosts from "@/lib/fetch-posts";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const initialBestPosts = await fetchPosts({ orderBy: "like", pageSize: 3 });
  const initialAllPosts = await fetchPosts({ orderBy: "recent", pageSize: 4 });

  return {
    props: {
      initialBestPosts: initialBestPosts,
      initialAllPosts: initialAllPosts,
    },
  };
};

export default function Page({
  initialBestPosts,
  initialAllPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>판다마켓-게시글</title>
      </Head>
      <MainHeader />
      <div className={styles.container}>
        <BestPosts initialBestPosts={initialBestPosts} />
        <AllPosts initialAllPosts={initialAllPosts} />
      </div>
    </>
  );
}
