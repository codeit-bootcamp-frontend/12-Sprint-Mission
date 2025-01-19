import styles from "./ToggleBtn.module.css";
import Image from "next/image";
import { useState } from "react";

type ToggleBtnProps = {
  onChangeOrderBy: (orderByValue: "recent" | "like") => void;
};

export default function ToggleBtn({ onChangeOrderBy }: ToggleBtnProps) {
  const [toggleText, setToggleText] = useState("최신순");
  const [toggleClick, setToggleClick] = useState(false);

  const onClickToggle = () => {
    setToggleClick(!toggleClick);
  };

  const onSelectOption = (option: string) => {
    setToggleText(option);
    onChangeOrderBy(option === "최신순" ? "recent" : "like");
    setToggleClick(!toggleClick);
  };

  return (
    <div className={styles.container}>
      <p>{toggleText}</p>
      <Image
        onClick={onClickToggle}
        className={styles.toggle}
        src={"/images/ic_arrow_down.svg"}
        alt="아랫화살표이미지"
        width={24}
        height={24}
      />
      {toggleClick ? (
        <div className={styles.toggleOptions}>
          <p onClick={() => onSelectOption("최신순")}>최신순</p>
          <p onClick={() => onSelectOption("좋아요순")}>좋아요순</p>
        </div>
      ) : null}
    </div>
  );
}
