import styles from "../../styles/boards/postList.module.css";
import BestPost from "./BestPost";
import Section1Skeleton from "./Section1Skeleton";
import { Item } from "./types";

type Destructuring = {
  list: Item[];
  totalCount: number;
};

type BestPostsList = {
  likePost: Destructuring | null;
  likeLoading: boolean;
};

function BestPostsList({ likePost, likeLoading }: BestPostsList) {
  const { list } = likePost || {};

  return (
    <>
      <div className={`${styles.postContents} ${styles.bestPost}`}>
        <p className={styles.listTitle}>베스트 게시글</p>

        {likeLoading ? (
          <Section1Skeleton />
        ) : (
          <ul className={styles.postCover}>
            {list?.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <BestPost item={item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default BestPostsList;
