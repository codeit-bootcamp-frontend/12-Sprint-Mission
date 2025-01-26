import { useState } from "react";
import Head from "next/head";
import ItemListNav from "@/components/app/ItemListNav";
import styles from "../../styles/boards/postList.module.css";
import BestPostsList from "@/components/boards/BestPostsList";
import AllPostsList from "@/components/boards/AllPostsList";
import { useQueryBoard } from "@/hooks/useQueryBoard";
import { Item } from "@/types/boards/types";

function PostListPage() {
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const { data: likePost, loading: likeLoading } = useQueryBoard<{
    list: Item[];
    totalCount: number;
  }>({
    queryUrl: "articles?orderBy=like&pageSize=3",
  });
  const { data: recentPost, loading: recentLoading } = useQueryBoard<{
    list: Item[];
    totalCount: number;
  }>({
    queryUrl: `articles?orderBy=${order}&keyword=${keyword}`,
  });

  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <ItemListNav />
      <div className={styles.pagiContainer}>
        <BestPostsList likePost={likePost} likeLoading={likeLoading} />
        <AllPostsList
          recentPost={recentPost}
          setOrder={setOrder}
          setKeyword={setKeyword}
          recentLoading={recentLoading}
        />
      </div>
    </>
  );
}

export default PostListPage;
