import styles from "./AllPost.module.css";
import Input from "../../../components/Input";
import BasePost from "./BasePost";
import { useEffect, useState } from "react";
import ToggleBtn from "../../../components/ToggleBtn";
import Link from "next/link";
import { PostData } from "../../../types";
import fetchPosts from "@/lib/fetch-posts";

interface AllPostProps {
  initialAllPosts: PostData[];
}

export default function AllPosts({ initialAllPosts }: AllPostProps) {
  const [postList, setPostList] = useState<PostData[]>(initialAllPosts);
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const [filterPostList, setFilterPostList] =
    useState<PostData[]>(initialAllPosts);
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeOrderBy = (orderByValue: "recent" | "like") => {
    setOrderBy(orderByValue);
  };

  const handleSearch = () => {
    const filtered = postList.filter((post) =>
      post.content!.includes(searchValue)
    );
    setFilterPostList(filtered);
  };

  useEffect(() => {
    const fetchOrderByPost = async () => {
      const posts = await fetchPosts({ orderBy: orderBy, pageSize: 4 });
      setFilterPostList(posts);
    };
    fetchOrderByPost();
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
        <Input
          value={searchValue}
          placeholder={"검색할 상품의 내용을 입력해주세요"}
          onChange={setSearchValue}
          onEnter={handleSearch}
        />
        <ToggleBtn onChangeOrderBy={onChangeOrderBy} />
      </div>
      <div>
        {filterPostList.map((post) => {
          return <BasePost key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}
