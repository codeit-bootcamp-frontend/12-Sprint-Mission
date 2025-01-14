import { Button } from "@components/ui";
import styles from "./Banner.module.scss";
import Image from "next/image";

export interface BannerProps {
  title: string;
  bannerType: "hero" | "footer";
  action?: {
    to: string;
    label: string;
  };
  bannerImg: {
    src: string;
    alt: string;
  };
}

export default function Banner({
  title,
  bannerType = "hero",
  action,
  bannerImg,
}: BannerProps) {
  return (
    <section className={`${styles.banner} ${styles[`${bannerType}-banner`]}`}>
      <div className={styles.inner}>
        <div className={styles["banner-content"]}>
          <h2 className={styles["banner-title"]}>{title}</h2>
          {action && (
            <Button href={action.to} size="lg">
              {action.label}
            </Button>
          )}
        </div>
        <Image
          className={styles["banner-img"]}
          src={bannerImg.src}
          alt={bannerImg.alt}
        />
      </div>
    </section>
  );
}
