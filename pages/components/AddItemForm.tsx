import React from "react";
import styles from "./AddItemForm.module.css";

interface AddItemFormProps {
  label: string;
  type?: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function AddItemForm({
  label,
  type = "text",
  placeholder,
  id,
  value,
  onChange,
  isTextArea = false,
  onKeyDown,
}: AddItemFormProps) {
  return (
    <div className={styles["form-field"]}>
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={styles["textarea"]}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={styles["input"]}
        />
      )}
    </div>
  );
}

export default AddItemForm;
