import { GetStaticProps } from "next";
import BestArticle from "../components/boards/BestArticle";
import AllArticle from "../components/boards/AllArticle";
import styles from "@/styles/boardsPage.module.css";
import Link from "next/link";
import { useState } from "react";
import ArrowDown from "../assets/icon/ic_arrow_down.png";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  writer: {
    nickname: string;
  };
  image: string | null;
  createdAt: string;
}

interface BestArticleProps {
  bestArticles: Article[];
  allArticles: Article[];
}

export const getStaticProps: GetStaticProps = async () => {
  let bestArticles = [];
  let allArticles = [];

  try {
    const bestResponse = await fetch(
      "https://panda-market-api.vercel.app/articles?orderBy=like"
    );
    const bestData = await bestResponse.json();
    bestArticles = bestData.list || [];

    const allResponse = await fetch(
      "https://panda-market-api.vercel.app/articles?orderBy=recent"
    );
    const allData = await allResponse.json();
    allArticles = allData.list || [];
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return {
    props: {
      bestArticles,
      allArticles,
    },
  };
};

export default function Page({ bestArticles, allArticles }: BestArticleProps) {
  const [sortedArticles, setSortedArticles] = useState(allArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("최신순");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = async (selectedValue: string) => {
    setSelectedValue(selectedValue);
    let sorted = [];

    if (selectedValue === "최신순") {
      const response = await fetch(
        "https://panda-market-api.vercel.app/articles?orderBy=recent"
      );
      const data = await response.json();
      sorted = data.list || [];
    } else if (selectedValue === "좋아요순") {
      const response = await fetch(
        "https://panda-market-api.vercel.app/articles?orderBy=like"
      );
      const data = await response.json();
      sorted = data.list || [];
    }

    setSortedArticles(sorted);
    setShowDropdown(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };

  const filteredArticles = sortedArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.boardContainer}>
      <div className={styles.bestSection}>
        <label className={styles.bestLabel}>베스트 게시글</label>
        <div className={styles.bestArticles}>
          {bestArticles.slice(0, 3).map((article) => (
            <BestArticle key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className={styles.postSection}>
        <div className={styles.labelSection}>
          <label className={styles.postLabel}>게시글</label>
          <Link href={""} className={styles.postEditBtn}>
            글쓰기
          </Link>
        </div>
        <div className={styles.searchSection}>
          <input
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className={styles.sortSection}>
            <label htmlFor="sortBy"></label>
            <div
              className={styles.sortDropdown}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{selectedValue}</span>
              <Image
                src={ArrowDown}
                alt="아래화살표"
                className={styles.arrowIcon}
              />
              {showDropdown && (
                <ul className={styles.dropdownList}>
                  <li
                    onClick={() => {
                      handleSortChange("최신순");
                    }}
                    className={styles.dropdownItem}
                  >
                    최신순
                  </li>
                  <li
                    onClick={() => {
                      handleSortChange("좋아요순");
                    }}
                    className={styles.dropdownItem}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={styles.allArticles}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <AllArticle key={article.id} article={article} />
            ))
          ) : (
            <p>게시물이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
