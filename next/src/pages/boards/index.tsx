import styles from "./index.module.css";
import MainHeader from "../../components/MainHeader";
import BestPosts from "./components/BestPosts";
import AllPosts from "./components/AllPosts";
import Head from "next/head";
import fetchPosts from "@/lib/fetch-posts";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const initialPosts = await fetchPosts({ orderBy: "like", pageSize: 3 });

  return {
    props: {
      initialPosts,
    },
  };
};

export default function Page({
  initialPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>판다마켓-게시글</title>
      </Head>
      <MainHeader />
      <div className={styles.container}>
        <BestPosts initialPosts={initialPosts} />
        <AllPosts />
      </div>
    </>
  );
}
