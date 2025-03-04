import styles from "./form.module.css";

interface Props {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ type, placeholder, value, name, onChange }: Props) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default FormInput;
