import styles from "./SamplePage.module.css";
import Icon from "../../components/Icon/Icon.jsx";

const SamplePage = () => {
  return (
    <div className={styles.container}>
      <Icon name="facebook" size={24} color="white" />
    </div>
  );
};

export default SamplePage;
