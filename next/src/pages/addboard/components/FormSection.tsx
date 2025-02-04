import styles from "./FormSection.module.css";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";

export default function FormSection() {
  return (
    <form action="" className={styles.form}>
      <TitleSection />
      <ContentSection />
      <ImageSection />
    </form>
  );
}
