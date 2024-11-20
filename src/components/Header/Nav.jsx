import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.scss";

const MENU = [
  {
    path: "/boards",
    title: "자유게시판",
  },
  {
    path: "/items",
    title: "중고마켓",
    activePath: ["/items", "/addItem"],
  },
];

function isInclude(path, list = []) {
  return list.includes(path);
}

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.gnb}>
      {MENU.map((item) => {
        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  styles["gnb-item"],
                  isActive && styles.active,
                  isInclude(pathname, item.activePath) && styles.active
                )
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
