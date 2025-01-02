import styles from "./InputSection.module.css";
import Input from "../../../components/Input/Input";
import LinkButton from "../../../components/Button/LinkButton";
import { useState } from "react";

const InputSection = () => {
  const [inputValue, setInputValue] = useState("");

  const isDisabled = inputValue.trim() === "";

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={styles.container}>
      <label className={styles.header}>문의하기</label>
      <Input
        value={inputValue}
        onChange={onChangeInput}
        className={styles.text}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <LinkButton className={styles.btn} type="submit" disabled={isDisabled}>
        등록
      </LinkButton>
    </form>
  );
};

export default InputSection;
