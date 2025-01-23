import { OrderByValue } from "@/types";
import styles from "./ToggleBtn.module.css";
import Image from "next/image";
import { useState } from "react";

type ToggleBtnProps = {
  onChangeOrderBy: (orderByValue: OrderByValue) => void;
  orderBy: OrderByValue;
};

export default function ToggleBtn({
  onChangeOrderBy,
  orderBy,
}: ToggleBtnProps) {
  const [toggleClick, setToggleClick] = useState(false);

  const textMapper = {
    recent: "최신순",
    like: "좋아요순",
  };

  const onClickToggle = () => {
    setToggleClick(!toggleClick);
  };

  const onSelectOption = (option: string) => {
    onChangeOrderBy(option === "최신순" ? "recent" : "like");
    setToggleClick(!toggleClick);
  };

  return (
    <div className={styles.container}>
      <p>{textMapper[orderBy]}</p>
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
