import { useState } from "react";
import styles from "./toggle.menu.module.css";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ToggleMenu = () => {
  const [menu, setMenu] = useState(false);

  const onMenuToggle = () => {
    setMenu(!menu);
  };

  const ref = useOutsideClick(() => {
    setMenu(false);
  });

  return (
    <div className={styles.menu}>
      <p onClick={onMenuToggle} ref={ref}>
        <img src="/assets/img/icon_dot.svg" alt="메뉴버튼" />
      </p>
      {menu && (
        <ul>
          <li>수정하기</li>
          <li>삭제하기</li>
        </ul>
      )}
    </div>
  );
};

export default ToggleMenu;
