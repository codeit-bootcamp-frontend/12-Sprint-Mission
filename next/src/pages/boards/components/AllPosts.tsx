import styles from "./AllPost.module.css";
import Input from "../../../components/Input";
import BasePost from "./BasePost";
import { useEffect, useState } from "react";
import { getPostsData } from "@/src/api/api";
import ToggleBtn from "@/src/components/ToggleBtn";
import Link from "next/link";
import { PostData } from "@/src/types";

export default function AllPosts() {
  const [postList, setPostList] = useState<PostData[]>([]);
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const [filterPostList, setFilterPostList] = useState<PostData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getPostListData = async (orderBy: "recent" | "like") => {
    try {
      const data: PostData[] = await getPostsData({
        orderBy,
        pageSize: 4,
      });
      setPostList(data);
      setFilterPostList(data);
    } catch (e) {
      console.error("베이스 포스트 데이터를 패칭하는데 실패했습니다.", e);
    }
  };

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
