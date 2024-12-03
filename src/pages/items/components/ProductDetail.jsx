import { Link } from "react-router-dom";
import { Chip, Thumbnail, Author, LikeButton } from "@components/ui";
import { toWon } from "@util/formatter";
import styles from "./ProductDetail.module.scss";
import { toggleLike } from "@service/product";

export default function ProductDetail({ detail }) {
  const {
    id,
    images,
    name,
    price,
    description,
    tags,
    ownerId,
    ownerNickname,
    createdAt,
    favoriteCount,
    isFavorite,
  } = detail;

  async function handleToggleLike() {
    await toggleLike(id, !isFavorite);
    window.location.reload();
  }

  return (
    <div className={styles.detail}>
      <div className={styles.cover}>
        <Thumbnail src={images[0]} alt={name} />
      </div>
      <div className={styles.content}>
        <header className={styles["detail-header"]}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.price}>{toWon(price)}</div>
        </header>
        <Section title={"상품 소개"}>{description}</Section>
        <Section title={"상품 태그"}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Link to={`/items?page=1&keyword=${tag}`} key={tag}>
                <Chip text={`#${tag}`} />
              </Link>
            ))}
          </div>
        </Section>

        <div className={styles.meta}>
          <Author nickname={ownerNickname} createAt={createdAt} />
          <LikeButton
            count={favoriteCount}
            isLiked={isFavorite}
            onClick={handleToggleLike}
          />
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
