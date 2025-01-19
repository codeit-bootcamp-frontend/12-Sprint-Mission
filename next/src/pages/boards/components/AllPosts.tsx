import styles from "./AllPost.module.css";
import Input from "@/src/components/Input";
import BasePost from "./BasePost";
import { useEffect, useState } from "react";
import { getPostsData } from "@/src/api/api";
import ToggleBtn from "@/src/components/ToggleBtn";
import { setPriority } from "os";
import Link from "next/link";

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

export default function AllPosts() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");

  const getPostListData = async (orderBy: "recent" | "like") => {
    try {
      const data: Post[] = await getPostsData({
        orderBy,
        pageSize: 4,
      });
      setPostList(data);
    } catch (e) {
      console.error("베이스 포스트 데이터를 패칭하는데 실패했습니다.", e);
    }
  };

  const onChangeOrderBy = (orderByValue: "recent" | "like") => {
    setOrderBy(orderByValue);
  };

  useEffect(() => {
    getPostListData(orderBy);
  }, [orderBy]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>게시글</h3>
        <Link href={"/"} className={styles.link}>
          글쓰기
        </Link>
      </div>
      <div className={styles.input}>
        <Input placeholder={"검색할 상품을 입력해주세요"} />
        <ToggleBtn onChangeOrderBy={onChangeOrderBy} />
      </div>
      <div>
        {postList.map((post) => {
          return <BasePost key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}
