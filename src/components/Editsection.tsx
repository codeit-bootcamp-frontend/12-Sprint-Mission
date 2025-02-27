import styles from "./Editsection.module.css";

interface Props {
  topChild: string;
  center: React.ReactNode;
  bottonChild?: string[];
}

const Editsection = ({ topChild, center, bottonChild }: Props) => {
  return (
    <div className={styles.editsection}>
      <label className={styles.edit_text}>{topChild}</label>
      <div className={styles.edit_input}>{center}</div>
      <div className={styles.edit_tag}>{bottonChild}</div>
    </div>
  );
};

export default Editsection;
