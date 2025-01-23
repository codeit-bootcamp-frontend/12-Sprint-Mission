import styles from "./Input.module.css";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
};

export default function Input({
  value,
  placeholder,
  onChange,
  onEnter,
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };
  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
