import styles from "./index.module.css";
import BestPosts from "./components/BestPosts";
import AllPosts from "./components/AllPosts";
import Head from "next/head";
import getArticles from "@/lib/get-articles";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const initialBestPosts = await getArticles({
    orderBy: "like",
    pageSize: 3,
  });
  const initialAllPosts = await getArticles({
    orderBy: "recent",
    pageSize: 4,
  });

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
      <div className={styles.container}>
        <BestPosts initialBestPosts={initialBestPosts} />
        <AllPosts initialAllPosts={initialAllPosts} />
      </div>
    </>
  );
}
