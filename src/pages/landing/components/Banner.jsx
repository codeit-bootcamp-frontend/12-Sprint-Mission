import { Button } from "@components/ui";
import styles from "./Banner.module.scss";

export default function Banner({
  title,
  bannerType = "hero",
  action,
  bannerImg,
}) {
  return (
    <section className={`${styles.banner} ${styles[`${bannerType}-banner`]}`}>
      <div className={styles.inner}>
        <div className={styles["banner-content"]}>
          <h2 className={styles["banner-title"]}>{title}</h2>
          {action && (
            <Button to={action.to} size="lg">
              {action.label}
            </Button>
          )}
        </div>
        <img
          className={styles["banner-img"]}
          src={bannerImg.src}
          alt={bannerImg.alt}
        />
      </div>
    </section>
  );
}
