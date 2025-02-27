import styles from "./HomePageSection.module.css";

interface Props {
  image: string;
  alt: string;
  info: string;
  title: string;
  text: string;
  useType: string;
}

const HomePageSection = ({ image, alt, info, title, text, useType }: Props) => {
  return (
    <section className={styles.section_container}>
      <div className={`${styles.container} ${styles[useType]}`}>
        <img className={styles.photo} src={image} alt={alt} />
        <div className={styles.item_info}>
          <span>{info}</span>
          <h2>{title}</h2>
          <div>{text}</div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
