import { Post } from "@/types";
import BestPost from "./BestPost";
import styles from "./BestPosts.module.css";
import { useEffect, useState } from "react";
import fetchPosts from "@/lib/fetch-posts";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface BestPostProps {
  initialBestPosts: Post[];
}

export default function BestPosts({ initialBestPosts }: BestPostProps) {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  const [pageSize, setPageSize] = useState(3);
  const [bestPosts, setBestPosts] = useState<Post[]>(initialBestPosts);

  useEffect(() => {
    if (isMobile) setPageSize(1);
    if (isTablet) setPageSize(2);
    if (isDesktop) setPageSize(3);
  }, [isMobile, isTablet, isDesktop]);

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
          return <BestPost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
