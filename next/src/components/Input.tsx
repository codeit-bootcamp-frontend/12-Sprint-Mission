import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = {
  name?: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  withSearch?: boolean;
  className?: string;
};

export default function Input({
  name,
  value,
  placeholder,
  onChange,
  onEnter,
  withSearch,
  className,
  ...rest
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  const inputClassName = clsx(styles.input, className, {
    [styles["inputWithSearch"]]: withSearch,
  });

  return (
    <input
      name={name}
      className={inputClassName}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
}
