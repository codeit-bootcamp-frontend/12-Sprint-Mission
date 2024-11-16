import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const MENU = [
  {
    path: "/boards",
    title: "자유게시판",
  },
  {
    path: "/items",
    title: "중고마켓",
  },
];

export default function Nav() {
  return (
    <ul className={styles.gnb}>
      {MENU.map((item) => {
        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles["gnb-item"]} ${isActive ? styles.active : ""}`
              }
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
