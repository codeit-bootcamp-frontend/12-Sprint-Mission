import styles from "./AllPost.module.css";
import Input from "../../../components/Input";
import BasePost from "./BasePost";
import { useEffect, useState } from "react";
import ToggleBtn from "../../../components/ToggleBtn";
import Link from "next/link";
import { OrderByValue, Post } from "../../../types";
import getArticles from "@/lib/get-articles";

interface AllPostProps {
  initialAllPosts: Post[];
}

export default function AllPosts({ initialAllPosts }: AllPostProps) {
  const [posts, setPosts] = useState<Post[]>(initialAllPosts);
  const [orderBy, setOrderBy] = useState<OrderByValue>("recent");
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeOrderBy = (orderByValue: OrderByValue) => {
    setOrderBy(orderByValue);
  };

  useEffect(() => {
    const fetchOrderByPost = async () => {
      const posts = await getArticles({ orderBy: orderBy, pageSize: 4 });
      setPosts(posts);
    };
    fetchOrderByPost();
  }, [orderBy]);

  const filteredPosts = posts.filter((post) =>
    post.content!.includes(searchValue)
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>게시글</h3>
        <Link href="/" className={styles.link}>
          글쓰기
        </Link>
      </div>
      <div className={styles.input}>
        <Input
          value={searchValue}
          placeholder="검색할 상품의 내용을 입력해주세요"
          onChange={(e) => setSearchValue(e.target.value)}
          onEnter={() => {}}
          withSearch={true}
        />
        <ToggleBtn onChangeOrderBy={onChangeOrderBy} orderBy={orderBy} />
      </div>
      <div>
        {filteredPosts.map((post) => {
          return <BasePost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
