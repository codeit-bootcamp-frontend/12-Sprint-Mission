import styles from "./Button.module.css";

interface Props {
  className?: string;
  text: string;
  useType: string;
}

const Button = ({ className, text, useType }: Props) => {
  return (
    <button
      className={`${styles[className]} ${styles.button} ${
        styles[`button_${useType}`]
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
