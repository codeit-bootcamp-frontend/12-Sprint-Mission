import fetchBoardList from "@/lib/fetch-board-list";
import styles from "./board.module.css";
import BoardBestList from "@/components/board-best-list";
import BoardList from "@/components/board-list";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Article } from "../../../types";
import { useIsMo, useIsTa } from "@/hooks/useMediaQuery";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function Page() {
  const isMo = useIsMo();
  const isTa = useIsTa();

  const [sortState, setSortState] = useState(false);
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState<Article[]>([]);
  const [commonList, setCommonList] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pageSize, setPageSize] = useState(() => (isMo ? 5 : isTa ? 7 : 10));
  const [bestPageSize, setBestPageSize] = useState(() =>
    isMo ? 1 : isTa ? 2 : 3
  );

  useEffect(() => {
    if (isMo) {
      setPageSize(5);
      setBestPageSize(1);
    } else if (isTa) {
      setPageSize(7);
      setBestPageSize(2);
    } else {
      setPageSize(10);
      setBestPageSize(3);
    }
  }, [isMo, isTa]);

  const onSortToggle = () => {
    setSortState(!sortState);
  };

  const fetchData = async () => {
    try {
      const bestResponse = await fetchBoardList(1, bestPageSize, "like");
      const commonResponse = await fetchBoardList(1, pageSize, order, keyword);

      setList(bestResponse);
      setCommonList(commonResponse);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [order, keyword, pageSize, bestPageSize]);

  const sortChange = (state: string) => {
    if (state !== order) {
      setOrder(state);
    }
    setSortState(false);
  };

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const onSearchEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setKeyword(search);
      setTimeout(() => {
        setSearch("");
      }, 100);
    }
  };

  const ref = useOutsideClick(() => {
    setSortState(false);
  });

  /**
   * 질문하기 [Next.js + useMediaQuery]
   * 모바일, 태블릿 사이즈에서 새로고침 시 처음에 피씨가 잠깐 적용됨
   * isMount를 적용해도 안됨..
   */
  // if (isMount) {
  //   isMo
  //     ? console.log("모바일")
  //     : isTa
  //     ? console.log("타블렛")
  //     : console.log("피씨");
  // }

  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;
    if (bottom) {
      setPageSize((prevSize) => prevSize + 5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="common_title">베스트 게시글</div>
      <ul className={styles.board_best}>
        {isLoading ? (
          <li className="empty_box">로딩 중...</li>
        ) : list.length === 0 ? (
          <li className="empty_box">게시글이 없습니다.</li>
        ) : (
          list.map((el) => <BoardBestList key={el.id} {...el} />)
        )}
      </ul>
      <div className={styles.boart_common_wrap}>
        <div className={styles.boart_common_title}>
          <div className="common_title">게시글</div>
          <Link className="btn" href="">
            글쓰기
          </Link>
        </div>

        <div className={styles.board_common_sort}>
          <div className={styles.sch_box}>
            <img src="/assets/img/icon_search.svg" alt="검색" />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              onChange={onSearch}
              value={search}
              onKeyDown={onSearchEnter}
            />
          </div>
          <div className={styles.select_box} onClick={onSortToggle} ref={ref}>
            <div>
              <span className={styles.mo}>
                <img src="/assets/img/icon_sort.svg" alt="검색" />
              </span>
              <span className={styles.pc}>
                {order === "recent" ? "최신순" : "좋아요순"}
              </span>
            </div>
            {sortState && (
              <ul>
                <li
                  onClick={() => {
                    sortChange("recent");
                  }}>
                  최신순
                </li>
                <li
                  onClick={() => {
                    sortChange("like");
                  }}>
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>

        <ul className={styles.board_common}>
          {isLoading ? (
            <li className="empty_box">로딩 중...</li>
          ) : commonList.length === 0 ? (
            <li className="empty_box">게시글이 없습니다.</li>
          ) : (
            commonList.map((el) => <BoardList key={el.id} {...el} />)
          )}
        </ul>
      </div>
    </>
  );
}
