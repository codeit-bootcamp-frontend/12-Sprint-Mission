import { PostData } from "@/types";
import BestPost from "./BestPost";
import styles from "./BestPosts.module.css";
import { useEffect, useState } from "react";
import fetchPosts from "@/lib/fetch-posts";

interface BestPostProps {
  initialPosts: PostData[];
}

// 479, 767, 1023

export default function BestPosts({ initialPosts }: BestPostProps) {
  const [pageSize, setPageSize] = useState(3);
  const [bestPosts, setBestPosts] = useState<PostData[]>(initialPosts);

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

  useEffect(() => {
    pageSizeCheck();

    const handleResize = () => pageSizeCheck();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchBestPosts = async () => {
      const posts = await fetchPosts({ orderBy: "like", pageSize });
      setBestPosts(posts);
    };
    fetchBestPosts();
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
