import styles from "./SamplePage.module.css";
import ItemCard from "../../components/ItemCard/ItemCard";

const SamplePage = () => {
  return (
    <div className={styles.container}>
      <ItemCard />
    </div>
  );
};

export default SamplePage;
