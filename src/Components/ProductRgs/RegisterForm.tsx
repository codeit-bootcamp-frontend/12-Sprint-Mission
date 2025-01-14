import { useState, useEffect, FormEvent } from "react";
import styles from "../../styles/productRgs/productRgs.module.css";
import RegisterInput from "./RegisterInput";
import RegisterImgFile from "./RegisterImgFile";

function RegisterForm() {
  const INITIAL_VALUES = {
    title: "",
    description: "",
    price: 0,
    tag: [],
  };

  // file input 제외한 모든 input
  const [values, setValues] = useState<{
    title: string;
    description: string;
    price: number | string;
    tag: string[];
  }>(INITIAL_VALUES);

  const [imgFile, setImgFile] = useState<Blob | MediaSource | null>(null);
  const [isDisableChk, setIsDisableChk] = useState(true);
  
  // 데이터 전송 구현 보류
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price as string | Blob);
    formData.append("tag", (values.tag as any) as string);
  };

  useEffect(() => {
    if (
      values.title !== "" &&
      values.description !== "" &&
      Number(values.price) > 0 &&
      values.tag.length > 0
    ) {
      setIsDisableChk(false);
    } else {
      setIsDisableChk(true);
    }
  }, [values]);

  return (
    <div className={styles.pagiContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 등록하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisableChk ? true : false}
          >
            등록
          </button>
        </div>
        <RegisterImgFile imgFile={imgFile} setImgFile={setImgFile} />
        <RegisterInput setValues={setValues} />
      </form>
    </div>
  );
}

export default RegisterForm;
