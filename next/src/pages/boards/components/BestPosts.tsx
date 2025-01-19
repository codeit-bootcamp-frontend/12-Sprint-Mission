import { getPostsData } from "@/src/api/api";
import { useEffect, useState } from "react";
import BestPost from "./BestPost";
import styles from "./BestPosts.module.css";

type Post = {
  id: number;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

// 479, 767, 1023

export default function BestPosts() {
  const [bestPosts, setBestPosts] = useState<Post[]>([]);
  const [pageSize, setPageSize] = useState<number>(3);

  const pageSizeCheck = () => {
    const pageWidth = window.innerWidth;
    if (pageWidth < 480) {
      setPageSize(1);
    } else if (pageWidth >= 480 && pageWidth < 768) {
      setPageSize(2);
    } else {
      setPageSize(3);
    }
  };

  const getBestPosts = async (currentPageSize: number) => {
    try {
      const data: Post[] = await getPostsData({
        orderBy: "like",
        pageSize: currentPageSize,
      });
      setBestPosts(data);
    } catch (e) {
      console.error("베스트 게시글 데이터 패칭에 실패", e);
    }
  };

  useEffect(() => {
    pageSizeCheck();

    const handleResize = () => pageSizeCheck();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getBestPosts(pageSize);
  }, [pageSize]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>베스트 게시글</h3>
      <div className={styles.posts}>
        {bestPosts.map((post) => {
          return <BestPost key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}
