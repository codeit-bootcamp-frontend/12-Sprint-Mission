import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import styles from './FormButton.module.scss';


type FormButton = {
    children: React.ReactNode;
    disabled: boolean;
    className?:string;
    type?: "button" | "submit" | "reset";
}

export default function FormButton({children, disabled, className, type = "button",}: FormButton) {
  return (
    <CustomButton
      width={640}
      height={56}
      className={`${styles.CustomButton} ${className ?? ""}`}
      disabled={disabled ?? false}
      type={type}
    >
        {children}
    </CustomButton>
  );
}
