import { Link, useNavigate, useRevalidator } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { deleteProduct, toggleLike } from "@service/product";
import {
  Chip,
  Thumbnail,
  Author,
  LikeButton,
  Fullscreen,
} from "@components/ui";
import { More } from "@components/Button";
import { toWon } from "@util/formatter";
import styles from "./ProductDetail.module.scss";

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
    updatedAt,
    favoriteCount,
    isFavorite,
  } = detail;
  const {
    auth: { user },
  } = useAuth();
  const navigate = useNavigate();
  const { revalidate } = useRevalidator();
  const isOwner = ownerId === user?.id;

  async function handleToggleLike() {
    if (!user) {
      return alert("로그인이 필요합니다.");
    }
    await toggleLike(id, !isFavorite);
    revalidate();
  }

  function handleModify() {
    if (!isOwner) {
      return alert("작성자만 수정이 가능합니다.");
    }

    navigate(`/modifyItem/${id}`);
  }

  async function handleDelete() {
    if (!isOwner) {
      return alert("작성자만 삭제가 가능합니다.");
    }

    if (confirm("정말 삭제할까요?")) {
      try {
        await deleteProduct(id);
        alert("상품을 삭제했습니다.");
        navigate("/items");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className={styles.detail}>
      <div className={styles.cover}>
        <Fullscreen>
          <Thumbnail src={images[0]} alt={name} />
        </Fullscreen>
      </div>
      <div className={styles.content}>
        <header className={styles["detail-header"]}>
          <div className={styles.info}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.price}>{toWon(price)}</div>
          </div>
          <div className={styles.controls}>
            <More
              options={[
                { label: "수정하기", action: handleModify },
                { label: "삭제하기", action: handleDelete },
              ]}
            />
          </div>
        </header>
        <Section title="상품 소개">{description}</Section>
        <Section title="상품 태그">
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Link to={`/items?page=1&keyword=${tag}`} key={tag}>
                <Chip text={`#${tag}`} />
              </Link>
            ))}
          </div>
        </Section>
        <div className={styles.meta}>
          <Author nickname={ownerNickname} updatedAt={updatedAt} />
          <div className={styles.controls}>
            <LikeButton
              count={favoriteCount}
              isLiked={isFavorite}
              onClick={handleToggleLike}
            />
          </div>
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
