import React from "react";
import styles from "./InputField.module.scss";
import { useState } from "react";
import Image from "next/image";

type InputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: any;
  errors?: { message?: string };
  className?: string;
};

const InputField: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={`${errors?.message ? styles.inputError : styles.input}`}
          id={id}
          type={(id === "password"||id==="passwordConfirm" )&& (passwordVisible||passwordConfirmVisible) ? "text" : type}
          placeholder={placeholder}
          {...register}
        />
        {id === "password" && (
          <div
            className={styles.passwordEyes}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <Image
                src="/icons/passwordeyeopen.png"
                alt="passwordeyeopen"
                width={22}
                height={15}
                className={styles.passwordeyeopen}
              />
            ) : (
              <Image
                src="/icons/passwordeyeclosed.png"
                alt="passwordeyeclosed"
                width={24}
                height={24}
              />
            )}
          </div>
        )}

        {id === "passwordConfirm" && (
          <div
            className={styles.passwordEyes}
            onClick={togglePasswordConfirmVisibility}
          >
            {passwordConfirmVisible ? (
              <Image
                src="/icons/passwordeyeopen.png"
                alt="passwordeyeopen"
                width={22}
                height={15}
                className={styles.passwordeyeopen}
              />
            ) : (
              <Image
                src="/icons/passwordeyeclosed.png"
                alt="passwordeyeclosed"
                width={24}
                height={24}
              />
            )}
          </div>
        )}
      </div>

      <div className={styles.errormessage}></div>
    </div>
  );
};

export default InputField;
