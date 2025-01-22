import styles from "./form.module.css";

interface Props {
  placeholder: string;
  height?: number;
}

const FormTextarea = ({ placeholder, height }: Props) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      style={{ height: height ? `${height}px` : "" }}></textarea>
  );
};

export default FormTextarea;
