import styles from "./form.module.css";

interface Props {
  placeholder: string;
  height?: number;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = ({ placeholder, height, value, onChange }: Props) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textarea}
      placeholder={placeholder}
      style={{ height: height && `${height}px` }}></textarea>
  );
};

export default FormTextarea;
