import styles from "./Feature.module.scss";

export default function Feature({ list }) {
  return (
    <section className={styles.features}>
      <h2 className="a11y">판다마켓의 기능들</h2>
      {list.map((feature, index) => (
        <FeatureItem
          key={feature.keyword}
          reverse={(index + 1) % 2 === 0}
          {...feature}
        />
      ))}
    </section>
  );
}

function FeatureItem({ reverse, keyword, title, featureImg, description }) {
  return (
    <div className={`${styles.feature} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.inner}>
        <div className={styles["feature-card"]}>
          <figure className={styles["feature-image"]}>
            <img src={featureImg.src} alt={featureImg.alt} />
          </figure>
          <div className={styles["feature-content"]}>
            <div className={styles["feature-keyword"]}>{keyword}</div>
            <h3 className={styles["feature-title"]}>{title}</h3>
            <p className={styles["feature-description"]}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}