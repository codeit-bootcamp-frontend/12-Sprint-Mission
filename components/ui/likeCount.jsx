import React, { useEffect, useState } from "react";
import Image from "next/image";
import like from "@/public/icons/ic_heart.svg";
import styles from "@/styles/Boards.module.css";

export default function LikeCount({ postId }) {
  const [likeCount, setLikeCount] = useState(null);

  useEffect(() => {
    // API 호출
    const fetchLikeCount = async () => {
      try {
        const response = await fetch(`/articles/likeCount?postId=${postId}`);
        const data = await response.json();
        setLikeCount(data.likeCount);
      } catch (error) {
        console.error("Failed to fetch like count:", error);
      }
    };

    fetchLikeCount();
  }, [postId]);

  return (
    <div className={styles.likeCount}>
      <Image src={like} alt="좋아요" width={24} height={24} />
      <span>{likeCount}</span>
    </div>
  );
}
