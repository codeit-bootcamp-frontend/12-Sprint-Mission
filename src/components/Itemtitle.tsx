import styles from "./Itemtitle.module.css";

interface Props {
  leftChild: React.ReactNode;
  searchInput?: React.ReactNode;
  searchBtn?: React.ReactNode;
  rightChild: React.ReactNode;
}

const Itemtitle = ({
  leftChild,
  searchInput,
  searchBtn,
  rightChild,
}: Props) => {
  return (
    <div className={styles.itemtitle}>
      <div className={styles.item_text}>{leftChild}</div>
      {searchInput && <div className={styles.item_input}>{searchInput}</div>}
      {searchBtn && <div className={styles.item_button}>{searchBtn}</div>}
      <div className={styles.item_select}>{rightChild}</div>
    </div>
  );
};

export default Itemtitle;
