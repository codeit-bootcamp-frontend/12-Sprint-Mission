import styles from "./form.module.css";

interface Props {
  type: string;
  placeholder: string;
}

const FormInput = ({ type, placeholder }: Props) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};

export default FormInput;
